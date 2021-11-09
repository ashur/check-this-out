const FrameWrangler = require( "../../../../utils/frame-wrangler" );

let frameWrangler = new FrameWrangler({
	screens: {
		top: {
			background: "install/step-02-02",
			opacity: 0
		},
		bottom: {
			background: "install/step-02-01",
			opacity: "1"
		},

		pointer: {
			x: 0.37,
			y: 0.43,
			hide: false,
		},
	},
});

frameWrangler.pause( 1000 );

// Tap and hold link
frameWrangler.movePointer( 0.42, 0.1875, 1000 );
frameWrangler.tapDown( 500 );
frameWrangler.showTopScreen();
frameWrangler.tapUp( 500 );

// Safari tabs
frameWrangler.setBottomScreenBackground( "install/step-02-03" );
frameWrangler.movePointer( 0.125, 0.705, 1000 );
frameWrangler.tap();
frameWrangler.hideTopScreen();
frameWrangler.pause( 100 );

// Libby search
frameWrangler.setTopScreenBackground( "install/step-02-04" );
frameWrangler.showTopScreen();
frameWrangler.movePointer( 0.3, 0.2675, 1000 );
frameWrangler.tap();

// Libby search with keyboard
frameWrangler.setBottomScreenBackground( "install/step-02-05" );
frameWrangler.hideTopScreen();

// Libby search results with keyboard
frameWrangler.setTopScreenBackground( "install/step-02-06" );
frameWrangler.pause( 500 );
frameWrangler.showTopScreen();
frameWrangler.pause( 500 );
frameWrangler.movePointer( 0.7375, 0.5575, 750 );
frameWrangler.tap();

// Libby search results
frameWrangler.setBottomScreenBackground( "install/step-02-07" );
frameWrangler.hideTopScreen();
frameWrangler.movePointer( 0.33, 0.3675, 1000 );
frameWrangler.tap();

// Libby library page
frameWrangler.setTopScreenBackground( "install/step-02-08" );
frameWrangler.showTopScreen();
frameWrangler.movePointer( 0.4, 0.03875, 1250 );
frameWrangler.tap();

// Safari, URL selected
frameWrangler.setBottomScreenBackground( "install/step-02-09" );
frameWrangler.hideTopScreen();
frameWrangler.tap();

// Safari, URL copy
frameWrangler.setTopScreenBackground( "install/step-02-10" );
frameWrangler.showTopScreen();
frameWrangler.movePointer( 0.3, 0.085, 1000 );
frameWrangler.tap();
frameWrangler.hideTopScreen();

// Libby library page
frameWrangler.setTopScreenBackground( "install/step-02-08" );
frameWrangler.movePointer( 0.725, 0.0375, 1000 );
frameWrangler.tap();
frameWrangler.showTopScreen();

// Safari tabs
frameWrangler.movePointer( 0.7475, 0.845, 1000 );
frameWrangler.setBottomScreenBackground( "install/step-02-11" );
frameWrangler.tap();
frameWrangler.hideTopScreen();

// Step 2
frameWrangler.movePointer( 0.4, 0.4, 1000 );
frameWrangler.setTopScreenBackground( "install/step-02-01" );
frameWrangler.tap();
frameWrangler.showTopScreen();

// Step 2, with keyboard
frameWrangler.movePointer( 0.25, 0.4675, 1000 );
frameWrangler.setBottomScreenBackground( "install/step-02-12" );
frameWrangler.tap();
frameWrangler.hideTopScreen();

// Step 2, with Paste
frameWrangler.movePointer( 0.2, 0.285, 1000 );
frameWrangler.setTopScreenBackground( "install/step-02-13" );
frameWrangler.tap();
frameWrangler.showTopScreen();

// Step 2, with pasted URL
frameWrangler.movePointer( 0.07, 0.23, 1000 );
frameWrangler.setBottomScreenBackground( "install/step-02-14" );
frameWrangler.tap();
frameWrangler.hideTopScreen();

// Wrap up
frameWrangler.hidePointer();
frameWrangler.pause( 1000 );

module.exports = {
	id: "Phone-Install-Step-2",
	aspectRatio: 2.025,
	caption: "Library search screen in Libby",

	autoplay: false,
	fade: false,
	hideCaption: true,
	pointer: true,
	printedEffect: true,

	frames: frameWrangler.frames,
	images: frameWrangler.images,
}
