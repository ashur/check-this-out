module.exports = {
	id: "Phone-Demo",
	aspectRatio: 1.75,
	autoplay: true,
	caption: "Select the title or author, choose <strong>Check This Out</strong>, and jump straight to a search in Libby",

	fade: true,
	loop: true,
	pointer: true,
	printedEffect: true,

	frames: [
		{
			description: "Gideon the Ninth featured on NPR’s Book Concierge",
			screens: {
				top: {
					background: "/images/screen-gideon-2.png",
					opacity: "0"
				},
				bottom: {
					background: "/images/screen-gideon-1.png",
					opacity: "1"
				},

				pointer: {
					x: -0.04,
					y: 0.40
				}
			},
			duration: 1000
		},
		{
			description: "Pointer tap down",
			screens: {
				pointer: {
					tapDown: true
				}
			},
			duration: 750
		},
		{
			description: "Swipe pointer to select text",
			screens: {
				pointer: {
					x: 0.4
				}
			},
			duration: 250
		},
		{
			description: "Book Concierge page with book title selected",
			screens: {
				top: {
					opacity: 1
				},
			}
		},
		{
			description: "Book Concierge page with book title selected",
			screens: {
				pointer: {
					tapDown: false
				}
			}
		},
		{
			description: "Swap bottom image behind top image",
			screens: {
				bottom: {
					background: "/images/screen-gideon-3.png"
				}
			},
			duration: 50
		},
		{
			description: "Book title selected and iOS text selection menu visible",
			screens: {
				top: {
					opacity: 0
				}
			}
		},
		{
			description: "Move pointer to Share menu button",
			screens: {
				pointer: {
					y: 0.34
				}
			},
			duration: 1000
		},
		{
			description: "Tap down",
			screens: {
				pointer: {
					tapDown: true
				}
			},
			duration: 200
		},
		{
			description: "Tap up",
			screens: {
				pointer: {
					tapDown: false
				}
			}
		},
		{
			description: "Swap top image while layer is hidden",
			screens: {
				top: {
					background: "/images/screen-gideon-4.png"
				}
			}
		},
		{
			description: "iOS share sheet is visible showing Check This Out shortcut",
			screens: {
				top: {
					opacity: 1
				}
			}
		},
		{
			description: "Move pointer to Check This Out share sheet menu item",
			screens: {
				pointer: {
					x: 0.25,
					y: 0.76
				}
			},
			duration: 1500
		},
		{
			description: "Tap down",
			screens: {
				pointer: {
					tapDown: true
				}
			},
			duration: 200
		},
		{
			description: "Tap up",
			screens: {
				pointer: {
					tapDown: false
				}
			}
		},
		{
			screens: {
				bottom: {
					background: "/images/screen-gideon-1.png"
				}
			}
		},
		{
			screens: {
				top: {
					opacity: 0
				}
			}
		}
	],
}
