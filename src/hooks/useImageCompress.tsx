import {
  drawImageInCanvas,
  getDataUrlFromFile,
  getFilefromDataUrl,
  loadImage,
} from "../utils/imageUtils";
export function useImageCompress() {
  async function imageCompression(
    file: any,
    maxSizeMB = Number.POSITIVE_INFINITY,
    maxWidthOrHeight: any
  ) {
    if (!(file instanceof Blob || file instanceof File)) {
      throw new Error("The file given is not an instance of Blob or File");
    } else if (!/^image/.test(file.type)) {
      throw new Error("The file given is not an image");
    }

    const maxSizeByte = maxSizeMB * 1024 * 1024;
    const dataUrl = await getDataUrlFromFile(file);
    const img = await loadImage(dataUrl);
    const canvas = drawImageInCanvas(img, maxWidthOrHeight);
    let quality = 0.9;
    let compressedFile = (await getFilefromDataUrl(
      canvas.toDataURL(file.type, quality),
      (file as any).name,
      (file as any).lastModified
    )) as any;

    if (file) {
      while (compressedFile.size > maxSizeByte) {
        canvas.width *= 0.9;
        canvas.height *= 0.9;

        const ctx = canvas.getContext("2d") as any;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        const compressedDataUrl = canvas.toDataURL(file.type, quality);
        compressedFile = await getFilefromDataUrl(
          compressedDataUrl,
          (file as any).name,
          (file as any).lastModified
        );
      }
    } else {
      while (compressedFile.size > maxSizeByte) {
        quality *= 0.9;
        const compressedDataUrl = canvas.toDataURL((file as any).type, quality);
        compressedFile = await getFilefromDataUrl(
          compressedDataUrl,
          (file as any).name,
          (file as any).lastModified
        );
      }
    }
    return compressedFile;
  }
  return { imageCompression };
}
