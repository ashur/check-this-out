class FrameWrangler
{
	constructor( initialFrame )
	{
		this.frames = [ initialFrame ];
	}

	movePointer( x, y, duration )
	{
		this.frames.push({
			screens: {
				pointer: {
					x: x,
					y: y,
				}
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
				}
			},
			duration: 200,
		});
	}
}

module.exports = FrameWrangler;
