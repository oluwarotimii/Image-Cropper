Here is the full markdown you can copy and paste:

```markdown
# Image Cropping Script

This project is a Node.js script that uses the [Jimp] image processing library to crop images. The script crops images by randomly reducing their width and height, then saves the cropped images to a specified directory.

## Features

- Randomly crops images by reducing their width and height.
- Supports JPG, PNG, and JPEG file formats.
- Outputs cropped images to a designated directory.

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.x or later)

## Installation

1. Clone the repository or create a new directory for your project.
2. Navigate to the project directory.

   ```bash
   cd your-project-directory
   ```

3. Install the required dependencies:

   ```bash
   npm install jimp glob path
   ```

## Usage

1. Place your images in the `./images` directory. Ensure this directory exists or modify the script to use the correct directory.

2. Run the script:

   ```bash
   node your-script-file.js
   ```

   Replace `your-script-file.js` with the name of your script file.

3. The cropped images will be saved in the `./cropped-images` directory. Ensure this directory exists or modify the script to use the correct directory.

## How It Works

- The script reads each image from the `./images` directory.
- It randomly reduces the width and height of the image.
- The cropped image is saved to the `./cropped-images` directory with a prefix `cropped-` added to the original file name.
- If the new dimensions are not valid (less than or equal to zero), the image is skipped.

## Customization

- **Width and Height Reduction**: You can adjust the `getRandomInt` function parameters to control the range of width and height reductions.
- **Directories**: Modify the `OutputDir` and image source path in the script to match your desired directories.

## Troubleshooting

- Ensure that the `./images` and `./cropped-images` directories exist.
- Check for any errors in the script output and ensure all dependencies are properly installed.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```
