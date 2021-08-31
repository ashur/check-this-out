const {Plugin} = require( "eleventy-plugin-aces" );

let acesPlugin = new Plugin({
	categorySortOrder: [
		"reset",
		"global",
		"composition",
		"utilities",
		"blocks",
	]
});
acesPlugin.addStylesheetsDirectory( "./src/_includes/css" );

module.exports = acesPlugin;
