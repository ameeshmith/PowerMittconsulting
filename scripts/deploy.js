import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import https from 'node:https';

const MAX_RETRIES = 5;
const RETRY_DELAY_MS = 15000;
const REPO = 'ameeshmith/PowerMittconsulting';

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https
      .get(
        url,
        {
          headers: {
            'User-Agent': 'PowerMitt-Deploy-Script',
            Accept: 'application/vnd.github+json',
          },
        },
        (res) => {
          let data = '';
          res.on('data', (chunk) => (data += chunk));
          res.on('end', () => {
            try {
              resolve(JSON.parse(data));
            } catch (err) {
              reject(err);
            }
          });
        }
      )
      .on('error', reject);
  });
}

function stampDistBuild() {
  const indexPath = path.resolve('dist', 'index.html');
  if (!fs.existsSync(indexPath)) return;
  const html = fs.readFileSync(indexPath, 'utf8');
  const stamp = `<!-- deploy-ts: ${new Date().toISOString()} -->`;
  const updated = html.includes('<!-- deploy-ts:')
    ? html.replace(/<!-- deploy-ts:[^>]*-->/, stamp)
    : html.replace('</head>', `  ${stamp}\n  </head>`);
  fs.writeFileSync(indexPath, updated, 'utf8');
}

function publishToGhPages() {
  stampDistBuild();
  const npxBin = process.platform === 'win32' ? 'npx.cmd' : 'npx';
  execFileSync(npxBin, ['gh-pages', '-d', 'dist', '--dotfiles', '--nojekyll'], {
    stdio: 'inherit',
  });
}

async function waitForGitHubPagesBuild() {
  console.log('[Deploy] Waiting 25s for GitHub Pages deployment job to run...');
  await sleep(25000);

  for (let check = 1; check <= 6; check++) {
    try {
      const data = await fetchJson(
        `https://api.github.com/repos/${REPO}/actions/runs?per_page=1`
      );
      const latestRun = data?.workflow_runs?.[0];
      if (!latestRun) return true;

      console.log(
        `[Deploy] Run #${latestRun.run_number} status=${latestRun.status} conclusion=${latestRun.conclusion}`
      );

      if (latestRun.status === 'completed') {
        return latestRun.conclusion === 'success';
      }
    } catch (err) {
      console.warn('[Deploy] Status check warning:', err.message);
    }
    await sleep(10000);
  }
  return true;
}

async function run() {
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      console.log(`\n[Deploy] Attempt ${attempt}/${MAX_RETRIES}: Publishing dist/ to gh-pages...`);
      publishToGhPages();

      const succeeded = await waitForGitHubPagesBuild();
      if (succeeded) {
        console.log('[Deploy] GitHub Pages deployment succeeded!');
        process.exit(0);
      }

      console.warn(
        `[Deploy] GitHub Pages reported a server error on attempt ${attempt}/${MAX_RETRIES}. Retrying in ${
          RETRY_DELAY_MS / 1000
        }s...`
      );
    } catch (err) {
      console.error(`[Deploy] Attempt ${attempt}/${MAX_RETRIES} failed:`, err.message);
    }

    if (attempt < MAX_RETRIES) {
      await sleep(RETRY_DELAY_MS);
    }
  }

  console.error('[Deploy] Exhausted all retry attempts.');
  process.exit(1);
}

run();
