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
			x: 0.7125,
			y: 0.725,
		},
	},
});

frameWrangler.pause( 1000 );
frameWrangler.movePointer( 0.33, 0.6125, 1500 );
frameWrangler.tap( 250 );

frameWrangler.showTopScreen();

frameWrangler.setBottomScreenBackground( "install/step-04-03" );
frameWrangler.movePointer( 0.7125, null, 1500 );
frameWrangler.tap( 250 );
frameWrangler.hideTopScreen();

frameWrangler.pause( 1000 );

module.exports = {
	id: "Phone-Install-Step-4",
	aspectRatio: 1.15,
	caption: "Shortcut settings",

	fade: true,
	hideCaption: true,
	loop: false,
	pointer: true,
	printedEffect: true,

	frames: frameWrangler.frames,
}
