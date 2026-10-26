const fs = require('fs');
const sharp = require('sharp');
const path = require('path');

async function run() {
  const imgDir = path.resolve(__dirname, '../public/assets/images');
  
  // 1. First, let's create a super clean 4K version of the original logos (3432 x 964, exactly 4x 858x241)
  // With Lanczos3 resampling, contrast optimization, and unsharp masking
  await sharp(path.join(imgDir, 'logo-dark.png'))
    .resize(3432, 964, { kernel: sharp.kernel.lanczos3 })
    .sharpen({ sigma: 1.5, m1: 1.2, m2: 2.0 })
    .png({ compressionLevel: 8, quality: 100 })
    .toFile(path.join(imgDir, 'logo-dark-4k.png'));

  await sharp(path.join(imgDir, 'logo-light.png'))
    .resize(3432, 964, { kernel: sharp.kernel.lanczos3 })
    .sharpen({ sigma: 1.5, m1: 1.2, m2: 2.0 })
    .png({ compressionLevel: 8, quality: 100 })
    .toFile(path.join(imgDir, 'logo-light-4k.png'));

  console.log('4K PNGs created successfully!');
}

run().catch(console.error);
