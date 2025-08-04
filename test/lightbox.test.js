describe('lightbox', () => {
	const mixedItems = [
		{
			id: '1',
			type: 'image',
			uri: 'https://picsum.photos/800/600?random=3',
			filename: 'photo.jpg',
			title: 'Sample Photo',
		},
		{
			id: '2',
			type: 'code',
			uri: () =>
				Promise.resolve(`{
  "name": "@plumelo/lightbox",
  "version": "1.0.0",
  "description": "A lightbox component for various content types",
  "main": "dist/index.js",
  "dependencies": {
	"@pionjs/pion": "^2.5.2",
	"@neovici/cosmoz-slider": "latest"
  }
}`),
			filename: 'package.json',
			title: 'Package Configuration',
			language: 'json',
		},
		{
			id: '3',
			type: 'pdf',
			uri: 'https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf',
			filename: 'tracemonkey-pldi-09.pdf',
			title: 'TraceMonkey Research Paper',
		},
	];
});
