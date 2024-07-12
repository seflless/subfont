import fs from "fs";
import subsetFont from "subset-font";

async function optimizeFont() {
  const unoptimizedFont = fs.readFileSync("Shantell_Sans-Tldrawish.woff2");

  // Create a new font with only the characters required to render "Hello, world!" in WOFF2 format:
  const subsetBuffer = await subsetFont(unoptimizedFont, "Font Test", {
    targetFormat: "woff2",
  });

  fs.writeFileSync("Shantell_Sans-Tldrawish-Subset.woff2", subsetBuffer);

  const dataUri: string = bufferToDataURI(subsetBuffer, "font/woff2");
  console.log(dataUri);
}

/**
 * Converts a buffer object into a data URI.
 * @param buffer - The buffer object to convert.
 * @param mimeType - The MIME type of the data.
 * @returns The data URI as a string.
 */
function bufferToDataURI(buffer: Buffer, mimeType: string): string {
  const base64 = buffer.toString("base64");
  return `data:${mimeType};base64,${base64}`;
}

void optimizeFont();
