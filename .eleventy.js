const markdownIt = require( "markdown-it" );
const {eleventyPlugin: eleventyPluginEsc} = require( "eleventy-plugin-esc" );

module.exports = config =>
{
	config.addPassthroughCopy( { "src/static": "/" } );

	/* Data */
	config.addDataExtension( "yml", require( "./src/_eleventy/data/yaml" ) );

	/* Filters */
	config.addFilter( "encodeUri", require( "./src/_eleventy/filters/encode-uri" ) );

	/* Plugins */
	if( config.addGlobalData )
	{
		// Support scheduled for Eleventy v1.0.0
		// https://www.11ty.dev/docs/data-global-custom/
		config.addPlugin( eleventyPluginEsc, {
			categorySortOrder: [
				"reset",
				"global",
				"composition",
				"utilities",
				"blocks",
			],
		});
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
