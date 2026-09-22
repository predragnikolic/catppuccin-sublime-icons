const cappuccinIcons = await import("../icon_themes/catppuccin-icons.json", {
	with: { type: "json" },
});

console.log(cappuccinIcons);

const themeNameToIconsFolder = {
  "Catppuccin Frappé Monochrome": 'frappe-monochrome',
  "Catppuccin Frappé": 'frappe',
  "Catppuccin Latte Monochrome": 'latte-monochrome',
  "Catppuccin Latte": 'latte',
  "Catppuccin Macchiato Monochrome": 'macchiato-monochrome',
  "Catppuccin Macchiato": 'macchiato',
  "Catppuccin Mocha Monochrome": 'mocha-monochrome',
  "Catppuccin Mocha": 'mocha',
}

for (const theme of cappuccinIcons.default["themes"]) {

  const customIconsForSublime = {
      "txt": "file_type_text",
      "sublime-file-icons": "file_type_sublime",
      "sublime-theme": "file_type_sublime",
      "sublime-color-scheme": "file_type_sublime",
      "hidden-color-scheme": "file_type_sublime",
      "sublime-menu": "file_type_sublime",
      "sublime-commands": "file_type_sublime",
      "sublime-keymap": "file_type_sublime",
      "sublime-settings": "file_type_sublime",
      "sublime-syntax": "file_type_sublime",
      "pyi": "file_type_python",
  }
	const icon_map: {icons: Record<string, string>} = {
		icons: {
      ...customIconsForSublime
      //key is file_name, value is icon
    }
	};
	for (const [file_stems, icon] of Object.entries(theme["file_stems"])) {
    icon_map.icons[file_stems] = `file_type_${icon}`.replace('__', "_")
	}
  for (const [file_stems, icon] of Object.entries(theme["file_suffixes"])) {
    icon_map.icons[file_stems] = `file_type_${icon}`.replace('__', "_")
  }

	await Deno.writeTextFile(
		`../build/${theme["name"]}.sublime-file-icons`,
		JSON.stringify(icon_map, null, 4),
	);
}

export {};
