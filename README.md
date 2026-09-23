# Icons - Catppuccin Mocha

<img src="assets/example.png"/>

## Getting started

Clone the repo in Sublime Text "Packages" folders:
```bash
git clone https://github.com/predragnikolic/catppuccin-sublime-icons.git "Icons - Catppuccin Mocha"
```
Select `Preferences: Settings` in the command palette and set:
```jsonc
// Preferences.sublime-settings
{
    "file_icon_theme": "Catppuccin Mocha.sublime-file-icons"
}
```

Tweak your current theme, so the icons look nice.
Open the command palette and select `UI: Customize Theme`:
```jsonc
{
    "rules": [
        // #1 Fix stretched file icons
        {
            "class": "icon_file_type",
            "content_margin": 8
        },

        // #2 Change folder open/close icons
        {
            "class": "icon_folder",
            "layer0.texture": "Icons - Catppuccin Mocha/icons/file_type_folder.png",
            "content_margin": 8
        },
        {
            "class": "icon_folder",
            "parents": [{"class": "tree_row", "attributes": ["expanded"]}],
            "layer0.texture": "Icons - Catppuccin Mocha/icons/file_type_folder_open.png",
        },

        // #3 Hide arrow icons that are displayed next to folders
        {
            "class": "disclosure_button_control",
            "content_margin": 0
        }
    ]
}
```

## 💝 Thanks to

- [catppuccin/zed-icons](https://github.com/catppuccin/zed-icons)
- [tecandrew](https://github.com/tecandrew)

