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
			y: 0.395
		}
	},
	duration: 1000
});

frameWrangler.tapDown( 750 );
frameWrangler.movePointer( 0.4, null, 600 );
frameWrangler.showTopScreen();
frameWrangler.tapUp();
frameWrangler.setBottomScreenBackground( "screen-gideon-3" );
frameWrangler.hideTopScreen();
frameWrangler.movePointer( null, 0.335, 875 );
frameWrangler.tap();
frameWrangler.setTopScreenBackground( "screen-gideon-4" );
frameWrangler.showTopScreen();
frameWrangler.movePointer( 0.13, 0.74, 1500 );
frameWrangler.tap();
frameWrangler.setBottomScreenBackground( "screen-gideon-5" );
frameWrangler.hideTopScreen();
frameWrangler.movePointer( 0.425, 0.582, 1500 );
frameWrangler.setTopScreenBackground( "screen-gideon-6" );
frameWrangler.tap();
frameWrangler.showTopScreen();
frameWrangler.pause( 1000 );
frameWrangler.movePointer( -0.0075, 0.0075, 1500 );
frameWrangler.tap();
frameWrangler.setBottomScreenBackground( "screen-gideon-1" );
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
