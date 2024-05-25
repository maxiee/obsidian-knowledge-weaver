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
2. Use the `![[]]` syntax to embed related notes from within your Obsidian Vault that provide context for your main note.
3. Introduce the new `!(())` syntax to embed files from your local file system, extending the plugin's functionality beyond the Obsidian Vault.
3. Run the "Weave Knowledge" command (you can assign a hotkey for this in Obsidian's settings).
4. The plugin will replace all embed syntax with the actual content of the referenced notes and copy the result to your clipboard.
5. Paste the copied text into your conversation with the AI language model to provide it with rich, interconnected context.
