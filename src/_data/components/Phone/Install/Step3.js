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

// Step 3
frameWrangler.pause( 1000 );
frameWrangler.movePointer( 0.56, 0.815, 1000 );
frameWrangler.tap();
frameWrangler.showTopScreen();

// Safari favorites
frameWrangler.movePointer( 0.75, 0.815, 1000 );
frameWrangler.setBottomScreenBackground( "install/step-03-03" );
frameWrangler.tap();
frameWrangler.hideTopScreen();

// Safari favorites, edit mode
frameWrangler.movePointer( 0.3, 0.155, 1250 );
frameWrangler.tap();

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
