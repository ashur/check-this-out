const FrameWrangler = require( "../../../../utils/frame-wrangler" );

let frameWrangler = new FrameWrangler({
	screens: {
		top: {
			background: "install/step-03-02",
			opacity: 0
		},
		bottom: {
			background: "install/step-03-01",
			opacity: 1
		},

		pointer: {
			x: 0.37,
			y: 0.43,
		},
	},
});

// Bookmarklet widget, copied
frameWrangler.pause( 1000 );
frameWrangler.movePointer( 0.655, 0.268, 1000 );
frameWrangler.tap();
frameWrangler.showTopScreen();

// Safari favorites
frameWrangler.movePointer( 0.56, 0.815, 1000 );
frameWrangler.setBottomScreenBackground( "install/step-03-03" );
frameWrangler.tap();
frameWrangler.hideTopScreen();

// Safari favorites, edit mode
frameWrangler.movePointer( 0.745, 0.815, 1000 );
frameWrangler.setTopScreenBackground( "install/step-03-04" );
frameWrangler.tap();
frameWrangler.showTopScreen();

// Edit favorite
frameWrangler.movePointer( 0.25, 0.155, 1000 );
frameWrangler.setBottomScreenBackground( "install/step-03-05" );
frameWrangler.tap();
frameWrangler.hideTopScreen();

// Select address field
frameWrangler.movePointer( 0.5, 0.1925, 1000 );
frameWrangler.setTopScreenBackground( "install/step-03-06" );
frameWrangler.tap();
frameWrangler.showTopScreen();

// Clear address field
frameWrangler.movePointer( 0.7675, null, 1000 );
frameWrangler.setBottomScreenBackground( "install/step-03-07" );
frameWrangler.tap();
frameWrangler.hideTopScreen();

frameWrangler.pause( 1000 );

module.exports = {
	id: "Phone-Install-Step-3",
	aspectRatio: 2.1,
	caption: "Shortcut settings",

	hideCaption: true,
	loop: false,
	pointer: true,
	printedEffect: true,

	frames: frameWrangler.frames,
}
