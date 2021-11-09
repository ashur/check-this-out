const FrameWrangler = require( "../../../../utils/frame-wrangler" );

let frameWrangler = new FrameWrangler({
	screens: {
		top: {
			background: "install/step-01-02",
			opacity: 0
		},
		bottom: {
			background: "install/step-01-01",
			opacity: 1
		},

		pointer: {
			x: 0.37,
			y: 0.43,
			hide: false,
		},
	},
});

frameWrangler.pause( 1000 );
frameWrangler.movePointer( 0.37, 0.8475, 1000 );
frameWrangler.tap();

// Safari share sheet
frameWrangler.showTopScreen();
frameWrangler.movePointer( 0.125, 0.655, 1000 );
frameWrangler.setBottomScreenBackground( "install/step-01-03" );
frameWrangler.tap();

// Add Bookmark
frameWrangler.hideTopScreen();
frameWrangler.setTopScreenBackground( "install/step-01-01" );
frameWrangler.movePointer( 0.7375, 0.055, 1175 );
frameWrangler.tap();
frameWrangler.showTopScreen();

// Wrap up
frameWrangler.hidePointer();
frameWrangler.setBottomScreenBackground( "install/step-01-01" );
frameWrangler.hideTopScreen();
frameWrangler.pause( 500 );

module.exports = {
	id: "Phone-Install-Step-1",
	aspectRatio: 2.025,
	caption: "Add bookmark",

	hideCaption: true,
	loop: false,
	pointer: true,
	printedEffect: true,

	frames: frameWrangler.frames,
	images: frameWrangler.images,
}
