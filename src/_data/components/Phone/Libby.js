const FrameWrangler = require( "../../../utils/frame-wrangler" );

let frameWrangler = new FrameWrangler({
	screens: {
		top: {
			background: "index/libby-02",
			opacity: 0,
			translateX: 0,
		},
		bottom: {
			background: "index/libby-01",
			opacity: 1,
			translateX: 0,
		},

		pointer: {
			x: 0.37,
			y: 0.43,
		},
	},
});

// Select text
frameWrangler.movePointer( -0.04, 0.38, 1000 );
frameWrangler.tapDown( 750 );
frameWrangler.movePointer( 0.4, null, 900 );
frameWrangler.tapUp();
frameWrangler.showTopScreen();

// Show bookmarks
frameWrangler.setBottomScreenBackground( "index/libby-03" );
frameWrangler.movePointer( 0.5575, 0.8475, 1000 );
frameWrangler.tap();
frameWrangler.hideTopScreen();
frameWrangler.clearTopScreenBackground();

// Launch Libby
frameWrangler.setTopScreenTranslateX( "100%" );
frameWrangler.setTopScreenBackground( "index/libby-04" );
frameWrangler.movePointer( 0.135, 0.16, 250 );
frameWrangler.showTopScreen();
frameWrangler.tap();
frameWrangler.setBottomScreenTranslateX( "-100%" );
frameWrangler.setTopScreenTranslateX( 0 );

// Libby, search results
frameWrangler.pause( 1000 );
frameWrangler.setBottomScreenBackground( "index/libby-05" );
frameWrangler.setBottomScreenTranslateX( 0 );
frameWrangler.movePointer( 0.415, 0.51, 1000 );
frameWrangler.tap();
frameWrangler.hideTopScreen();

frameWrangler.pause( 2000 );

module.exports = {
	id: "Phone-Demo",
	aspectRatio: 2.025,
	caption: "Select the title or author, tap the <b>Check This Out</b> bookmarklet, and jump straight to a search in Libby",

	autoplay: false,
	fade: true,
	loop: false,
	pointer: true,
	printedEffect: true,

	frames: frameWrangler.frames,
}
