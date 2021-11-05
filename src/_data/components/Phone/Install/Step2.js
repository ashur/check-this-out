const FrameWrangler = require( "../../../../utils/frame-wrangler" );

let frameWrangler = new FrameWrangler({
	screens: {
		top: {
			background: "install/step-02-02",
			opacity: 0
		},
		bottom: {
			background: "install/step-02-01",
			opacity: 1
		},

		pointer: {
			x: 0.7125,
			y: 0.725,
		},
	},
});

frameWrangler.movePointer( 0.37, 0.8175, 1000 );
frameWrangler.tap();

// Safari share sheet
frameWrangler.showTopScreen();
frameWrangler.movePointer( 0.125, 0.63125, 1000 );
frameWrangler.setBottomScreenBackground( "install/step-02-03" );
frameWrangler.tap();

// Add Bookmark
frameWrangler.hideTopScreen();
frameWrangler.setTopScreenBackground( "install/step-02-01" );
frameWrangler.movePointer( 0.7375, 0.05125, 1000 );
frameWrangler.tap();
frameWrangler.showTopScreen();
frameWrangler.setBottomScreenBackground( "install/step-02-01" );
frameWrangler.hideTopScreen();

frameWrangler.pause( 500 );

module.exports = {
	id: "Phone-Install-Step-2",
	aspectRatio: 2.1,
	caption: "Add bookmark",

	hideCaption: true,
	loop: false,
	pointer: true,
	printedEffect: true,

	frames: frameWrangler.frames,
	images: frameWrangler.images,
}
