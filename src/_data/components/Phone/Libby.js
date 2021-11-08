const FrameWrangler = require( "../../../utils/frame-wrangler" );

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
			x: 0.37,
			y: 0.43,
		},
	},
});

frameWrangler.pause( 1000 );

frameWrangler.movePointer( -0.04, 0.39, 1250 );
frameWrangler.tapDown( 750 );
frameWrangler.movePointer( 0.4, null, 900 );
frameWrangler.showTopScreen();

frameWrangler.pause( 250 );
frameWrangler.setBottomScreenBackground( "screen-gideon-3" );
frameWrangler.tapUp();
frameWrangler.hideTopScreen();

frameWrangler.setTopScreenBackground( "screen-gideon-4" );
frameWrangler.movePointer( null, 0.33, 1000 );
frameWrangler.tap();
frameWrangler.showTopScreen();

frameWrangler.setBottomScreenBackground( "screen-gideon-5" );
frameWrangler.pause( 250 );
frameWrangler.movePointer( 0.13, 0.735, 1250 );
frameWrangler.tap();
frameWrangler.hideTopScreen();

frameWrangler.movePointer( 0.425, 0.582, 1500 );
frameWrangler.setTopScreenBackground( "screen-gideon-6" );
frameWrangler.tap();
frameWrangler.showTopScreen();

frameWrangler.pause( 2000 );

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
