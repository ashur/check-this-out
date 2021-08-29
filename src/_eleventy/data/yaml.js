const yaml = require( "js-yaml" );

/**
 * @param {string} contents
 * @returns {any}
 */
module.exports = contents => yaml.load( contents );
