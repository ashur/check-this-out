class FrameWrangler
{
	constructor( initialFrame )
	{
		this.frames = [ initialFrame ];
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

		this.frames.push({
			screens: {
				pointer: pointer,
			},

			duration: duration,
		});
	}

	hideTopScreen()
	{
		this.frames.push({
			screens: {
				top: {
					opacity: 0,
				},
			},
		});
	}

	pause( duration )
	{
		this.frames.push({
			screens: {},
			duration: duration,
		});
	}

	setBottomScreenBackground( background )
	{
		this.frames.push({
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
			screens: {
				top: {
					opacity: 1,
				},
			},
		});
	}

	tap()
	{
		this.frames.push({
			screens: {
				pointer: {
					tapDown: true,
				}
			},
			duration: 200,
		});

		this.frames.push({
			screens: {
				pointer: {
					tapDown: false,
				},
			},
			duration: 200,
		});
	}

	tapDown( duration )
	{
		this.frames.push({
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
