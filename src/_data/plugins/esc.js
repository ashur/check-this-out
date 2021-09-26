const {Plugin} = require( "eleventy-plugin-esc" );

let escPlugin = new Plugin({
	categorySortOrder: [
		"reset",
		"global",
		"composition",
		"utilities",
		"blocks",
	]
});
escPlugin.addStylesheetsDirectory( "./src/_includes/css" );

module.exports = escPlugin;
