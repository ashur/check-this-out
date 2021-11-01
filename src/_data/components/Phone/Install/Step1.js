const FrameWrangler = require( "../../../../utils/frame-wrangler" );

let frameWrangler = new FrameWrangler({
	screens: {
		top: {
			background: "install/safari-tap-hold",
			opacity: 0
		},
		bottom: {
			background: "install/safari-install-step1",
			opacity: "1"
		},

		pointer: {
			x: 0.7125,
			y: 0.825,
		},
	},
});

frameWrangler.movePointer( 0.42, 0.28, 1500 );

frameWrangler.tapDown( 500 );
frameWrangler.showTopScreen();
frameWrangler.tapUp( 500 );

frameWrangler.setBottomScreenBackground( "install/safari-tabs" );
frameWrangler.movePointer( 0.2, 0.78, 1500 );
frameWrangler.tap( 500 );

frameWrangler.hideTopScreen();
frameWrangler.pause( 500 );
frameWrangler.setTopScreenBackground( "install/safari-libby-search" );
frameWrangler.pause( 300 );
frameWrangler.showTopScreen();

frameWrangler.pause( 300 );
frameWrangler.setBottomScreenBackground( "install/safari-install-step1" );
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
}
