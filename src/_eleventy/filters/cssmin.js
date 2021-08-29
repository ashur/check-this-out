const CleanCSS = require( "clean-css" );

/**
 * @param {string} css
 * @returns {string}
 */
module.exports = css =>
{
	if( css && process.env.NODE_ENV === "production" )
	{
		return new CleanCSS({})
			.minify( css ).styles;
	}

	return css;
};
