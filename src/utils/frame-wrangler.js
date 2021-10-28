class FrameWrangler
{
	constructor( initialFrame )
	{
		this.frames = [ initialFrame ];
	}

	hideTopScreen()
	{
		this.frames.push({
			name: "hideTopScreen()",
			screens: {
				top: {
					opacity: 0,
				},
			},

			transitionOn: "screen",
		});
	}

	hideBottomScreen()
	{
		this.frames.push({
			name: "hideBottomScreen()",
			screens: {
				bottom: {
					opacity: 0,
				},
			},

			duration: 0,
		});
	}

	movePointer( x, y, duration )
	{
		let pointer = {
			transitionOn: "pointer"
		};

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
			name: `setBottomScreenBackground()`,
			screens: {
				bottom: {
					background: "",
				},
			},

			duration: 0,
		});

		this.frames.push({
			name: `setBottomScreenBackground( ${background} )`,
			screens: {
				bottom: {
					background: background,
				},
			},
		});
	}

	setTopScreenBackground( background )
	{
		this.frames.push({
			name: `setTopScreenBackground()`,
			screens: {
				top: {
					background: "",
				},
			},

			duration: 0,
		});

		this.frames.push({
			name: `setTopScreenBackground( ${background} )`,
			screens: {
				top: {
					background: background,
				},
			},
		});
	}

	showBottomScreen()
	{
		this.frames.push({
			name: `showBottomScreen()`,
			screens: {
				bottom: {
					opacity: 1,
				},
			},

			duration: 0,
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

			transitionOn: "screen",
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
