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
			x: 0.72,
			y: 0.09,
		},
	},
});

frameWrangler.pause( 1000 );
frameWrangler.movePointer( 0.3, 0.6, 1250 );
frameWrangler.tap();
frameWrangler.showTopScreen();
frameWrangler.pause( 1000 );
frameWrangler.movePointer( 0.4, 0.1, 1250 );

frameWrangler.setBottomScreenBackground( "install/step-02-03" );
frameWrangler.pause( 250 );
frameWrangler.tap();
frameWrangler.hideTopScreen();

frameWrangler.pause( 400 );
frameWrangler.setTopScreenBackground( "install/step-02-04" );
frameWrangler.tap();
frameWrangler.showTopScreen();

frameWrangler.pause( 250 );
frameWrangler.movePointer( 0.3, 0.175, 1000 );
frameWrangler.pause( 250 );
frameWrangler.tap();
frameWrangler.hideTopScreen();

frameWrangler.pause( 400 );
frameWrangler.setTopScreenBackground( "install/step-02-02" );
frameWrangler.movePointer( 0.72, 0.09, 1000 );
frameWrangler.pause( 250 );
frameWrangler.tap();
frameWrangler.showTopScreen();

frameWrangler.pause( 1000 );

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
