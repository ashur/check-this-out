const FrameWrangler = require( "../../../../utils/frame-wrangler" );

let frameWrangler = new FrameWrangler({
	screens: {
		top: {
			background: "install/step-04-02",
			opacity: 0
		},
		bottom: {
			background: "install/step-04-01",
			opacity: 1
		},

		pointer: {
			x: 0.37,
			y: 0.43,
			hide: false,
		},
	},
});

// Select text
frameWrangler.pause( 1000 );
frameWrangler.movePointer( 0.14, 0.347, 1000 );
frameWrangler.tapDown( 500 );
frameWrangler.movePointer( 0.45, null, 1000 );
frameWrangler.tapUp();
frameWrangler.showTopScreen();

// Safari bookmarks
frameWrangler.movePointer( 0.56, 0.8475, 1000 );
frameWrangler.setBottomScreenBackground( "install/step-03-03" );  // Borrowing from step 3
frameWrangler.tap();
frameWrangler.hideTopScreen();
frameWrangler.clearTopScreenBackground();

// Launch Libby
frameWrangler.setTopScreenTranslateX( "100%" );
frameWrangler.setTopScreenBackground( "install/step-04-04" );
frameWrangler.movePointer( 0.135, 0.26, 250 );
frameWrangler.showTopScreen();
frameWrangler.tap();
frameWrangler.setBottomScreenTranslateX( "-100%" );
frameWrangler.setTopScreenTranslateX( 0 );

// Libby
frameWrangler.pause( 2000 );

// Wrap up
frameWrangler.setBottomScreenTranslateX( 0 );
frameWrangler.hidePointer();
frameWrangler.pause( 1000 );

module.exports = {
	id: "Phone-Install-Step-4",
	aspectRatio: 2.025,
	caption: "Shortcut settings",

	hideCaption: true,
	loop: false,
	pointer: true,
	printedEffect: true,

	frames: frameWrangler.frames,
}
