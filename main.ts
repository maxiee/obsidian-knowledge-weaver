import { Notice, Plugin, TFile } from 'obsidian';

// Remember to rename these classes and interfaces!

interface MyPluginSettings {
	mySetting: string;
}

const DEFAULT_SETTINGS: MyPluginSettings = {
	mySetting: 'default'
}

export default class MyPlugin extends Plugin {
	settings: MyPluginSettings;

	async weaveKnowledgeInternal(content: string, activeFile: TFile, maxDepth = 5, currentDepth = 0): Promise<string> {
		if (currentDepth > maxDepth) {
		  throw new Error('Max embed depth exceeded');
		}
	  
		const embedRegex = /!\[\[([^|\]]+)(?:\|([^\]]+))?\]\]/g;
		let match;
		let lastIndex = 0;
	  
		while ((match = embedRegex.exec(content)) !== null) {
		  const embedPath = match[1];
		  const embedFile = this.app.metadataCache.getFirstLinkpathDest(embedPath, activeFile.path);
		  if (embedFile) {
			let embedContent = await this.app.vault.cachedRead(embedFile);
			embedContent = await this.weaveKnowledgeInternal(embedContent, activeFile, maxDepth, currentDepth + 1);
			content = content.slice(0, match.index) + embedContent + content.slice(match.index + match[0].length);
			lastIndex = match.index + embedContent.length;
		  } else {
			new Notice(`Unable to resolve embed: ${embedPath}`);
			lastIndex = match.index + match[0].length;
		  }
	  
		  embedRegex.lastIndex = lastIndex;
		}
	  
		return content;
	}

	async weaveKnowledge() {
		const activeFile = this.app.workspace.getActiveFile();
		if (!activeFile) {
		  new Notice('No active file.');
		  return;
		}
	  
		let fileContent = await this.app.vault.cachedRead(activeFile);
		fileContent = await this.weaveKnowledgeInternal(fileContent, activeFile);
		
		await navigator.clipboard.writeText(fileContent);
		new Notice('Knowledge weaved and copied to clipboard!');
	}

	async onload() {
		await this.loadSettings();

		this.addCommand({
			id: 'weave-knowledge',
			name: "Weave Knowledge",
			callback: () => this.weaveKnowledge()
		})
	}

	onunload() {

	}

	async loadSettings() {}

	async saveSettings() {}
}

