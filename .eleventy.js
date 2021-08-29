const markdownIt = require( "markdown-it" );
const {eleventyPlugin: eleventyPluginAces} = require( "eleventy-plugin-aces" );

module.exports = config =>
{
	/* Data */
	config.addDataExtension( "yml", require( "./src/_eleventy/data/yaml" ) );

	/* Filters */
	config.addFilter( "cssmin", require( "./src/_eleventy/filters/cssmin" ) );

	/* Plugins */
	if( config.addGlobalData )
	{
		// Support scheduled for Eleventy v1.0.0
		// https://www.11ty.dev/docs/data-global-custom/
		config.addPlugin( eleventyPluginAces );
	}

	/* Markdown */
	let mdOptions = {
		html: true,
		typographer: true,
	};

	let md = markdownIt( mdOptions )
		.disable( "code" );

	md.use( require( "markdown-it-anchor" ) );
	md.use( require( "markdown-it-attrs" ) );

	config.setLibrary( "md", md );

	/* Plugins */

	return {
		dir: {
			input: "src",
			output: "dist",
		},

		htmlTemplateEngine: "njk",
		markdownTemplateEngine: "njk",

		templateFormats: ["css", "md", "njk"],
	};
};
