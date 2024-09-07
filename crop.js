const Jimp = require('jimp');
const Glob = require('glob');
const Path = require('path');

const OutputDir = './cropped-images';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function cropImage(ImagePath) {
  try {
    const image = await Jimp.read(ImagePath);
    const fileName = Path.basename(ImagePath);
    const originalWidth = image.bitmap.width;
    const originalHeight = image.bitmap.height;

    const widthReduction = getRandomInt(40, 60);
    const heightReduction = getRandomInt(40, 70);

    const newWidth = originalWidth - widthReduction;
    const newHeight = originalHeight - heightReduction;

    if (newWidth > 0 && newHeight > 0) {
      const croppedImage = image.crop(0, 0, newWidth, newHeight);
      await croppedImage.writeAsync(`${OutputDir}/cropped-${fileName}`);
      console.log(`Cropped and saved: ${fileName}`);
    } else {
      console.log(`Skipping ${fileName}: Image dimensions are too small to crop.`);
    }
  } catch (error) {
    console.error(`Error cropping image ${ImagePath}:`, error);
  }
}

async function cropImagesInBatch() {
  const imageFiles = Glob.sync('./images/*.{jpg,png,jpeg}');
  console.log(`Found ${imageFiles.length} images to crop.`);

  for (const ImagePath of imageFiles) {
    await cropImage(ImagePath);
  }

  console.log('Batch cropping complete!');
}

cropImagesInBatch();
