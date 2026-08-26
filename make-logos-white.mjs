import fs from 'fs';
import { Jimp } from 'jimp';

const inputDir = './public/tech_partners';
const outputDir = './public/tech_partners_white';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function processLogos() {
  const files = fs.readdirSync(inputDir);
  for (const file of files) {
    if (file.endsWith('.png')) {
      const inputPath = `${inputDir}/${file}`;
      const outputPath = `${outputDir}/${file}`;
      try {
        const image = await Jimp.read(inputPath);
        
        // Skanujemy każdy piksel i zmieniamy jego kolor na biały (255, 255, 255),
        // zachowując oryginalną wartość kanału Alpha (przezroczystość).
        image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
          const alpha = this.bitmap.data[idx + 3];
          if (alpha > 0) {
            this.bitmap.data[idx + 0] = 255; // R
            this.bitmap.data[idx + 1] = 255; // G
            this.bitmap.data[idx + 2] = 255; // B
          }
        });
        
        await image.write(outputPath);
        console.log(`Pomyślnie przekonwertowano: ${file}`);
      } catch (e) {
        console.error(`Błąd podczas konwertowania ${file}:`, e);
      }
    }
  }
}

processLogos();