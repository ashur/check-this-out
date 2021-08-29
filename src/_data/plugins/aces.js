const {Plugin} = require( "eleventy-plugin-aces" );

let acesPlugin = new Plugin();
acesPlugin.addStylesheetsDirectory( "./src/_includes/css" );

module.exports = acesPlugin;
