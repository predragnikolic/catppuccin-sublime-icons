import { Resvg } from "npm:@resvg/resvg-js";

const iconsDir = "../icons";

try {
  for await (const entry of Deno.readDir(iconsDir)) {
    if (!entry.isDirectory) continue;

    const themeDir = `${iconsDir}/${entry.name}`;

    for await (const svg of Deno.readDir(themeDir)) {
      if (svg.isFile && svg.name.toLowerCase().endsWith(".svg")) {
        const svgPath = `${themeDir}/${svg.name}`;
        for (const [size, pngPath] of [
          [16, `${themeDir}/file_type_${svg.name.replace(/\.svg$/i, ".png")}`],
          [32, `${themeDir}/file_type_${svg.name.replace(/\.svg$/i, "@2x.png")}`],
          [48, `${themeDir}/file_type_${svg.name.replace(/\.svg$/i, "@3x.png")}`]
        ]) {
          try {
            const svgData = await Deno.readFile(svgPath);
            const resvg = new Resvg(svgData, {
              fitTo: {
                mode: "width",
                value: size,
              },
            });
            const pngBuffer = resvg.render().asPng();
            await Deno.writeFile(pngPath, pngBuffer);

            console.log(`Converted: ${svg.name} -> ${pngPath}`);
          } catch (err) {
            console.error(`❌ Failed to convert ${svg.name}:`, err);
          }
        }
      }
    }
  }

  console.log("Done");
} catch (error) {
  console.error(error);
  Deno.exit(1);
}
