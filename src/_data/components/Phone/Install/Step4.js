const FrameWrangler = require( "../../../../utils/frame-wrangler" );

let frameWrangler = new FrameWrangler({
	screens: {
		top: {
			background: "install/step-05-02",
			opacity: 0
		},
		bottom: {
			background: "install/step-05-01",
			opacity: 1
		},

		pointer: {
			x: 0.7125,
			y: 0.825,
		},
	},
});

frameWrangler.pause( 1000 );
frameWrangler.movePointer( 0.4, 0.66, 1000 );
frameWrangler.tapDown( 250 );
frameWrangler.movePointer( null, 0.33, 300 );

frameWrangler.showTopScreen();
frameWrangler.tapUp( 250 );
frameWrangler.setBottomScreenBackground( "install/step-05-03" );
frameWrangler.movePointer( null, 0.8 );
frameWrangler.pause( 750 );
frameWrangler.tap( 250 );

frameWrangler.hideTopScreen();

frameWrangler.pause( 2000 );

module.exports = {
	id: "Phone-Install-Step-5",
	aspectRatio: 1.875,
	caption: "Installing the Shortcut",

	fade: true,
	hideCaption: true,
	loop: false,
	pointer: true,
	printedEffect: true,

	frames: frameWrangler.frames,
}
