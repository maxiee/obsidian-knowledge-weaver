# Obsidian Knowledge Weaver

Obsidian Knowledge Weaver is a plugin for Obsidian that replaces embed syntax `![[]]` with the actual content of the embedded notes, and copies the result to the clipboard. This is particularly useful when you need to provide detailed context to AI language models like ChatGPT or Claude.

## Why Use Obsidian Knowledge Weaver?

When interacting with AI language models, providing rich context is essential for getting accurate and relevant responses. However, manually assembling this context can be time-consuming and inefficient, especially if you need to pull information from multiple sources.

Obsidian Knowledge Weaver streamlines this process by leveraging Obsidian's powerful note-linking capabilities. By using the standard `![[]]` syntax to embed related notes within a main note, you can quickly build a comprehensive context. The plugin then weaves these embedded notes into a single, cohesive text that you can easily share with the AI model.

### For Obsidian Users

If you're an Obsidian user, this plugin allows you to leverage your existing knowledge base more effectively when engaging with AI assistants. Instead of manually copying and pasting information from various notes, you can simply use the familiar embed syntax to pull in relevant context. This not only saves time but also encourages you to create more interconnected and contextually rich notes.

### For ChatGPT and Claude Users

For those who frequently use AI language models like ChatGPT or Claude, Obsidian Knowledge Weaver provides a convenient way to share detailed context without the hassle of manual text assembly. By using Obsidian as your primary note-taking tool and leveraging the plugin's functionality, you can quickly provide the AI with the background information it needs to generate high-quality, context-aware responses.

## Installation

As the plugin is not yet available in the official Obsidian plugin repository, you'll need to install it manually:

1. Download the latest release from the GitHub releases page.
2. Extract the downloaded ZIP file.
3. Copy the extracted folder to your Obsidian vault's plugins directory (.obsidian/plugins/).
4. Restart Obsidian.
5. Go to Settings > Community plugins and enable "Obsidian Knowledge Weaver".

## Usage

1. Create a new note in Obsidian or open an existing one.
2. Use the `![[]]` syntax to embed related notes that provide context for your main note.
3. Run the "Weave Knowledge" command (you can assign a hotkey for this in Obsidian's settings).
4. The plugin will replace all embed syntax with the actual content of the referenced notes and copy the result to your clipboard.
5. Paste the copied text into your conversation with the AI language model to provide it with rich, interconnected context.

# Obsidian Sample Plugin

## Releasing new releases

- Update your `manifest.json` with your new version number, such as `1.0.1`, and the minimum Obsidian version required for your latest release.
- Update your `versions.json` file with `"new-plugin-version": "minimum-obsidian-version"` so older versions of Obsidian can download an older version of your plugin that's compatible.
- Create new GitHub release using your new version number as the "Tag version". Use the exact version number, don't include a prefix `v`. See here for an example: https://github.com/obsidianmd/obsidian-sample-plugin/releases
- Upload the files `manifest.json`, `main.js`, `styles.css` as binary attachments. Note: The manifest.json file must be in two places, first the root path of your repository and also in the release.
- Publish the release.

> You can simplify the version bump process by running `npm version patch`, `npm version minor` or `npm version major` after updating `minAppVersion` manually in `manifest.json`.
> The command will bump version in `manifest.json` and `package.json`, and add the entry for the new version to `versions.json`

## Adding your plugin to the community plugin list

- Check https://github.com/obsidianmd/obsidian-releases/blob/master/plugin-review.md
- Publish an initial version.
- Make sure you have a `README.md` file in the root of your repo.
- Make a pull request at https://github.com/obsidianmd/obsidian-releases to add your plugin.

## How to use

- Clone this repo.
- Make sure your NodeJS is at least v16 (`node --version`).
- `npm i` or `yarn` to install dependencies.
- `npm run dev` to start compilation in watch mode.

## Manually installing the plugin

- Copy over `main.js`, `styles.css`, `manifest.json` to your vault `VaultFolder/.obsidian/plugins/your-plugin-id/`.

## Improve code quality with eslint (optional)
- [ESLint](https://eslint.org/) is a tool that analyzes your code to quickly find problems. You can run ESLint against your plugin to find common bugs and ways to improve your code. 
- To use eslint with this project, make sure to install eslint from terminal:
  - `npm install -g eslint`
- To use eslint to analyze this project use this command:
  - `eslint main.ts`
  - eslint will then create a report with suggestions for code improvement by file and line number.
- If your source code is in a folder, such as `src`, you can use eslint with this command to analyze all files in that folder:
  - `eslint .\src\`

## Funding URL

You can include funding URLs where people who use your plugin can financially support it.

The simple way is to set the `fundingUrl` field to your link in your `manifest.json` file:

```json
{
    "fundingUrl": "https://buymeacoffee.com"
}
```

If you have multiple URLs, you can also do:

```json
{
    "fundingUrl": {
        "Buy Me a Coffee": "https://buymeacoffee.com",
        "GitHub Sponsor": "https://github.com/sponsors",
        "Patreon": "https://www.patreon.com/"
    }
}
```

## API Documentation

See https://github.com/obsidianmd/obsidian-api
