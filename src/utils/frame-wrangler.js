class FrameWrangler
{
	constructor( initialFrame )
	{
		this.frames = [ initialFrame ];
	}

	hideTopScreen()
	{
		this.frames.push({
			name: "hideTopScreen",
			screens: {
				top: {
					opacity: 0,
				},
			},
		});
	}

	movePointer( x, y, duration )
	{
		let pointer = {};
		if( x )
		{
			pointer.x = x;
		}
		if( y )
		{
			pointer.y = y;
		}

		let frame = {
			name: `movePointer( ${x}, ${y}, ${duration} )`,
			screens: {
				pointer: pointer,
			}
		};

		if( duration )
		{
			frame.duration = duration;
		}

		this.frames.push( frame );
	}

	pause( duration )
	{
		this.frames.push({
			name: `pause( ${duration} )`,
			screens: {},
			duration: duration,
		});
	}

	setBottomScreenBackground( background )
	{
		this.frames.push({
			name: `setBottomScreenBackground( ${background} )`,
			screens: {
				bottom: {
					background: background,
				},
			},
			duration: 50,
		});
	}

	setTopScreenBackground( background )
	{
		this.frames.push({
			name: `setTopScreenBackground( ${background} )`,
			screens: {
				top: {
					background: background,
				},
			},
			duration: 50,
		});
	}

	showTopScreen()
	{
		this.frames.push({
			name: `showTopScreen()`,
			screens: {
				top: {
					opacity: 1,
				},
			},
		});
	}

	tap()
	{
		this.tapDown( 250 );
		this.tapUp( 250 );
	}

	tapDown( duration )
	{
		this.frames.push({
			name: `tapDown( ${duration} )`,
			screens: {
				pointer: {
					tapDown: true,
				},
			},
			duration: duration || 0,
		});
	}

	tapUp( duration )
	{
		this.frames.push({
			name: `tapUp( ${duration} )`,
			screens: {
				pointer: {
					tapDown: false,
				},
			},
			duration: duration || 0,
		});
	}
}

module.exports = FrameWrangler;
