import fs from "fs";
import path from "path";
import sharp from "sharp";


const inputDir = "./src/assets/docs";
const outputDir = "./src/assets/docs-optimized";

// Ensure output directory exists
fs.mkdirSync(outputDir, { recursive: true });

async function optimizeFolder(srcDir, destDir) {
  const entries = fs.readdirSync(srcDir, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);

    if (entry.isDirectory()) {
      // Recurse into subfolders
      fs.mkdirSync(destPath, { recursive: true });
      await optimizeFolder(srcPath, destPath);
    } else if (/\.(png|jpg|jpeg)$/i.test(entry.name)) {
      const baseName = path.parse(entry.name).name;

      // WebP version
      await sharp(srcPath)
        .resize({ width: 800, withoutEnlargement: true })
        .webp({ quality: 75 })
        .toFile(path.join(destDir, `${baseName}.webp`));

      console.log(`✅ Optimized: ${srcPath}`);
    }
  }
}

// Run optimization
optimizeFolder(inputDir, outputDir)
  .then(() => console.log("✅ All images optimized!"))
  .catch(console.error);
