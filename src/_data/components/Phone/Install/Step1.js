const FrameWrangler = require( "../../../../utils/frame-wrangler" );

let frameWrangler = new FrameWrangler({
	screens: {
		top: {
			background: "install/step-01-02",
			opacity: 0
		},
		bottom: {
			background: "install/step-01-01",
			opacity: "1"
		},

		pointer: {
			x: 0.7125,
			y: 0.825,
		},
	},
});

// Tap and hold link
frameWrangler.movePointer( 0.42, 0.2675, 1250 );
frameWrangler.tapDown( 500 );
frameWrangler.showTopScreen();
frameWrangler.tapUp( 500 );

// Safari tabs
frameWrangler.setBottomScreenBackground( "install/step-01-03" );
frameWrangler.movePointer( 0.2, 0.78, 1250 );
frameWrangler.tap();
frameWrangler.hideTopScreen();
frameWrangler.pause( 250 );

// Libby search
frameWrangler.setTopScreenBackground( "install/step-01-04" );
frameWrangler.showTopScreen();
frameWrangler.movePointer( 0.3, 0.3, 1000 );
frameWrangler.tap();

// Libby search with keyboard
frameWrangler.setBottomScreenBackground( "install/step-01-05" );
frameWrangler.hideTopScreen();

// Libby search results with keyboard
frameWrangler.setTopScreenBackground( "install/step-01-06" );
frameWrangler.pause( 500 );
frameWrangler.showTopScreen();
frameWrangler.pause( 500 );
frameWrangler.movePointer( 0.7375, 0.6125, 750 );
frameWrangler.tap();

// Libby search results
frameWrangler.setBottomScreenBackground( "install/step-01-07" );
frameWrangler.hideTopScreen();
frameWrangler.movePointer( 0.33, 0.4, 1000 );
frameWrangler.tap();

// Libby library page
frameWrangler.setTopScreenBackground( "install/step-01-08" );
frameWrangler.showTopScreen();
frameWrangler.movePointer( 0.4, 0.045, 1250 );
frameWrangler.tap();

// Safari, URL selected
frameWrangler.setBottomScreenBackground( "install/step-01-09" );
frameWrangler.hideTopScreen();
frameWrangler.tap();

// Safari, URL copy
frameWrangler.setTopScreenBackground( "install/step-01-10" );
frameWrangler.showTopScreen();
frameWrangler.movePointer( 0.2875, 0.1, 1000 );
frameWrangler.tap();
frameWrangler.hideTopScreen();

frameWrangler.pause( 2000 );

module.exports = {
	id: "Phone-Install-Step-1",
	aspectRatio: 1.85,
	caption: "Library search screen in Libby",

	autoplay: false,
	fade: true,
	hideCaption: true,
	pointer: true,
	printedEffect: true,

	frames: frameWrangler.frames,
	images: frameWrangler.images,
}
