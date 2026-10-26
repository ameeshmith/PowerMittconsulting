const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function generate() {
  const imgDir = path.resolve(__dirname, '../public/assets/images');

  // 1. Prepare high-resolution emblem for Light (Dark Background)
  // For dark background, lighten the deep navy pillar so it is clearly visible on black!
  const markBuf = fs.readFileSync(path.join(imgDir, 'logo-mark.png'));
  const markMetadata = await sharp(markBuf).metadata();

  // Create a version of the emblem where dark navy pixels are brightened to rich cobalt blue (#1E40AF / #2563EB)
  const { data: rawData, info } = await sharp(markBuf).raw().toBuffer({ resolveWithObject: true });
  const lightBgData = Buffer.from(rawData); // for dark background (light navbar)
  
  for (let i = 0; i < lightBgData.length; i += 4) {
    const a = lightBgData[i + 3];
    if (a > 30) {
      const r = lightBgData[i];
      const g = lightBgData[i + 1];
      const b = lightBgData[i + 2];
      // Check if it's the dark navy pillar (r < 30, g < 40, b < 70)
      if (r < 40 && g < 50 && b < 80) {
        // Brighten to visible electric navy / cobalt
        lightBgData[i] = Math.min(255, r + 45);
        lightBgData[i + 1] = Math.min(255, g + 80);
        lightBgData[i + 2] = Math.min(255, b + 150);
      }
    }
  }

  const markLightBg = await sharp(lightBgData, { raw: { width: info.width, height: info.height, channels: 4 } })
    .resize(500, 500, { kernel: sharp.kernel.lanczos3 })
    .sharpen({ sigma: 1.2, m1: 1.0, m2: 2.0 })
    .png()
    .toBuffer();

  const markDarkBg = await sharp(markBuf)
    .resize(500, 500, { kernel: sharp.kernel.lanczos3 })
    .sharpen({ sigma: 1.2, m1: 1.0, m2: 2.0 })
    .png()
    .toBuffer();

  const b64Light = markLightBg.toString('base64');
  const b64Dark = markDarkBg.toString('base64');

  // 2. Generate SVG for Light Logo (on Dark / Hero Navbar)
  const svgLight = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 110" width="460" height="110">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@700;800;900&amp;display=swap');
      .logo-title-light {
        font-family: 'Public Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-weight: 900;
        font-size: 42px;
        fill: #FFFFFF;
        letter-spacing: 0.05em;
      }
      .logo-sub-light {
        font-family: 'Public Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-weight: 700;
        font-size: 15px;
        fill: #38BDF8;
        letter-spacing: 0.42em;
      }
    </style>
  </defs>
  <image href="data:image/png;base64,${b64Light}" x="4" y="6" width="98" height="98" />
  <text x="116" y="62" class="logo-title-light">POWERMITT</text>
  <text x="118" y="93" class="logo-sub-light">CONSULTING</text>
</svg>`;

  // 3. Generate SVG for Dark Logo (on White / Scrolled Navbar)
  const svgDark = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 110" width="460" height="110">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@700;800;900&amp;display=swap');
      .logo-title-dark {
        font-family: 'Public Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-weight: 900;
        font-size: 42px;
        fill: #0F172A;
        letter-spacing: 0.05em;
      }
      .logo-sub-dark {
        font-family: 'Public Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-weight: 700;
        font-size: 15px;
        fill: #0284C7;
        letter-spacing: 0.42em;
      }
    </style>
  </defs>
  <image href="data:image/png;base64,${b64Dark}" x="4" y="6" width="98" height="98" />
  <text x="116" y="62" class="logo-title-dark">POWERMITT</text>
  <text x="118" y="93" class="logo-sub-dark">CONSULTING</text>
</svg>`;

  fs.writeFileSync(path.join(imgDir, 'logo-light.svg'), svgLight);
  fs.writeFileSync(path.join(imgDir, 'logo-dark.svg'), svgDark);

  // 4. Render into 4K PNGs (2760 x 660, 6x resolution) for ultimate 4K/Retina HD clarity
  await sharp(Buffer.from(svgLight), { density: 300 })
    .png({ quality: 100 })
    .toFile(path.join(imgDir, 'logo-light-4k.png'));

  await sharp(Buffer.from(svgDark), { density: 300 })
    .png({ quality: 100 })
    .toFile(path.join(imgDir, 'logo-dark-4k.png'));

  // Also replace standard logo-light.png and logo-dark.png so any browser/fallback gets the new high-visibility artwork!
  await sharp(Buffer.from(svgLight), { density: 150 })
    .png({ quality: 100 })
    .toFile(path.join(imgDir, 'logo-light.png'));

  await sharp(Buffer.from(svgDark), { density: 150 })
    .png({ quality: 100 })
    .toFile(path.join(imgDir, 'logo-dark.png'));

  console.log('All 4K and SVG logos generated successfully!');
}

generate().catch(console.error);
