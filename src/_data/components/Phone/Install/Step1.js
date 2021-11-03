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

frameWrangler.movePointer( 0.42, 0.28, 1500 );

// Tap and hold link
frameWrangler.tapDown( 500 );
frameWrangler.showTopScreen();
frameWrangler.tapUp( 500 );

// Safari tabs
frameWrangler.setBottomScreenBackground( "install/step-01-03" );
frameWrangler.movePointer( 0.2, 0.78, 1500 );
frameWrangler.tap( 500 );
frameWrangler.hideTopScreen();
frameWrangler.pause( 250 );

// Libby search
frameWrangler.setTopScreenBackground( "install/step-01-04" );
frameWrangler.showTopScreen();
frameWrangler.movePointer( 0.3, 0.3, 1500 );
frameWrangler.tap( 500 );

// Libby search with text
frameWrangler.setBottomScreenBackground( "install/step-01-05" );
frameWrangler.hideTopScreen();
frameWrangler.movePointer( 0.35, 0.4, 1500 );
frameWrangler.tap( 500 );

// Libby library page
frameWrangler.setTopScreenBackground( "install/step-01-06" );
frameWrangler.showTopScreen();
frameWrangler.movePointer( 0.4, 0.045, 1500 );
frameWrangler.tap( 500 );

// Safari, URL selected
frameWrangler.setBottomScreenBackground( "install/step-01-07" );
frameWrangler.hideTopScreen();
frameWrangler.tap( 500 );

// Safari, URL copy
frameWrangler.setTopScreenBackground( "install/step-01-08" );
frameWrangler.showTopScreen();
frameWrangler.movePointer( 0.3, 0.1, 1500 );
frameWrangler.tap( 500 );
frameWrangler.hideTopScreen();


// frameWrangler.setBottomScreenBackground( "install/safari-install-step1" );
frameWrangler.pause( 1000 );

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

console.log( frameWrangler.images );
