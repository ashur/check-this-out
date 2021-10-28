const FrameWrangler = require( "../../utils/frame-wrangler" );

let frameWrangler = new FrameWrangler({
	screens: {
		top: {
			background: "screen-gideon-2",
			opacity: 0,
		},
		bottom: {
			background: "screen-gideon-1",
			opacity: 1,
		},

		pointer: {
			x: -0.04,
			y: 0.39
		}
	},
});

frameWrangler.pause( 1000 );
frameWrangler.tapDown( 750 );
frameWrangler.movePointer( 0.4, null, 1000 );
frameWrangler.showTopScreen();

frameWrangler.setBottomScreenBackground( "screen-gideon-3" );
frameWrangler.tapUp( 250 );
frameWrangler.hideTopScreen();

frameWrangler.setTopScreenBackground( "screen-gideon-4" );
frameWrangler.movePointer( null, 0.33, 1000 );
frameWrangler.tap( 250 );
frameWrangler.showTopScreen();

frameWrangler.setBottomScreenBackground( "screen-gideon-5" );
frameWrangler.pause( 500 );
frameWrangler.movePointer( 0.13, 0.735, 1500 );
frameWrangler.tap( 250 );
frameWrangler.hideTopScreen();

frameWrangler.movePointer( 0.425, 0.582, 1500 );
frameWrangler.setTopScreenBackground( "screen-gideon-6" );
frameWrangler.tap( 250 );
frameWrangler.showTopScreen();
frameWrangler.setBottomScreenBackground( "screen-gideon-1" );
frameWrangler.pause( 1000 );
frameWrangler.movePointer( -0.0075, 0.0075, 1500 );
frameWrangler.tap();
frameWrangler.hideTopScreen();

module.exports = {
	id: "Phone-Demo",
	aspectRatio: 1.8,
	caption: "Select the title or author, choose <b>Check This Out</b>, and jump straight to a search in Libby",

	autoplay: false,
	fade: true,
	loop: false,
	pointer: true,
	printedEffect: true,

	frames: frameWrangler.frames,
}
