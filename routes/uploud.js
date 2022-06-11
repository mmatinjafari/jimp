//for responsive all of the images
async function main(ORIGINAL_IMAGE, LOGO, dir) {
  const [image, logo] = await Promise.all([
    Jimp.read(ORIGINAL_IMAGE),
    Jimp.read(LOGO),
  ]);
  //............................................................................................
  let size =
    image.bitmap.width > image.bitmap.height
      ? image.bitmap.height / 4
      : image.bitmap.width / 4;
  logo.resize(size, Jimp.AUTO);
  const X = 10;
  const Y = image.bitmap.height - logo.bitmap.height - 10;
  //-------------------------------------------------------------------------------------------------------
  return image.composite(logo, X, Y, [
    {
      mode: Jimp.BLEND_SCREEN,
      opacitySource: 0.1,
      opacityDest: 1,
    },
  ]);
}
