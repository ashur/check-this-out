const FrameWrangler = require( "../../../utils/frame-wrangler" );

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
			x: 0.3,
			y: 0.6,
		}
	},

	duration: 1000,
});

frameWrangler.tap();
frameWrangler.showTopScreen();

frameWrangler.movePointer( 0.4, 0.0875, 1250 );
frameWrangler.pause( 250 );
frameWrangler.setBottomScreenBackground( "install/step-02-03" );
frameWrangler.tap();
frameWrangler.hideTopScreen();

frameWrangler.pause( 250 );
frameWrangler.setTopScreenBackground( "install/step-02-04" );
frameWrangler.tap();
frameWrangler.showTopScreen();

frameWrangler.movePointer( 0.3, 0.175, 1000 );
frameWrangler.pause( 250 );
frameWrangler.tap();
frameWrangler.hideTopScreen();

frameWrangler.movePointer( 0.72, 0.09, 1000 );
frameWrangler.pause( 125 );
frameWrangler.setTopScreenBackground( "install/step-02-01" );
frameWrangler.tap();
frameWrangler.showTopScreen();

frameWrangler.setBottomScreenBackground( "install/step-02-01" );
frameWrangler.hideTopScreen();

module.exports = {
	id: "Phone-Install-Step-2",
	aspectRatio: 1.125,
	caption: "Library search screen in Libby",

	fade: true,
	hideCaption: true,
	loop: false,
	pointer: true,
	printedEffect: true,

	frames: frameWrangler.frames,
}
