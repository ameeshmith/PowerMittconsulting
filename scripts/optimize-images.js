import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const imagesDir = path.resolve('public/assets/images');

async function optimizeImages() {
  const files = fs.readdirSync(imagesDir);
  console.log(`Found ${files.length} images to optimize...`);

  for (const file of files) {
    if (!file.endsWith('.jpg') && !file.endsWith('.jpeg') && !file.endsWith('.png')) continue;
    
    const filePath = path.join(imagesDir, file);
    const statBefore = fs.statSync(filePath);
    const beforeKB = Math.round(statBefore.size / 1024);

    const buffer = fs.readFileSync(filePath);
    const metadata = await sharp(buffer).metadata();

    // Optimize JPG (Resize to max 1920px width, quality 82, progressive)
    const optimizedJpgBuffer = await sharp(buffer)
      .resize({ width: Math.min(metadata.width || 1920, 1920), withoutEnlargement: true })
      .jpeg({ quality: 80, progressive: true, mozjpeg: true })
      .toBuffer();

    fs.writeFileSync(filePath, optimizedJpgBuffer);
    const afterKB = Math.round(optimizedJpgBuffer.length / 1024);

    // Also generate a WebP version
    const webpPath = filePath.replace(/\.(jpg|jpeg|png)$/, '.webp');
    await sharp(buffer)
      .resize({ width: Math.min(metadata.width || 1920, 1920), withoutEnlargement: true })
      .webp({ quality: 80, effort: 6 })
      .toFile(webpPath);

    const webpStat = fs.statSync(webpPath);
    const webpKB = Math.round(webpStat.size / 1024);

    console.log(`Optimized ${file}: ${beforeKB}KB -> ${afterKB}KB (JPG) | ${webpKB}KB (WebP)`);
  }
}

optimizeImages().catch(console.error);
