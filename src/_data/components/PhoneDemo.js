module.exports = {
	id: "Phone-Demo",
	aspectRatio: 1.8,
	caption: "Select the title or author, choose <strong>Check This Out</strong>, and jump straight to a search in Libby",

	autoplay: true,
	fade: true,
	loop: true,
	pointer: true,
	printedEffect: true,

	frames: [
		{
			// "Gideon the Ninth featured on NPR’s Book Concierge",
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
					y: 0.395
				}
			},
			duration: 1000
		},
		{
			// "Pointer tap down",
			screens: {
				pointer: {
					tapDown: true
				}
			},
			duration: 750
		},
		{
			// "Swipe pointer to select text",
			screens: {
				pointer: {
					x: 0.4
				}
			},
			duration: 250
		},
		{
			// "Book Concierge page with book title selected",
			screens: {
				top: {
					opacity: 1
				},
			}
		},
		{
			// "Book Concierge page with book title selected",
			screens: {
				pointer: {
					tapDown: false
				}
			}
		},
		{
			// "Swap bottom image behind top image",
			screens: {
				bottom: {
					background: "/images/screen-gideon-3.png"
				}
			},
			duration: 50
		},
		{
			// "Book title selected and iOS text selection menu visible",
			screens: {
				top: {
					opacity: 0
				}
			}
		},
		{
			// "Move pointer to Share menu button",
			screens: {
				pointer: {
					y: 0.335
				}
			},
			duration: 1000
		},
		{
			// "Tap down",
			screens: {
				pointer: {
					tapDown: true
				}
			},
			duration: 200
		},
		{
			// "Tap up",
			screens: {
				pointer: {
					tapDown: false
				}
			}
		},
		{
			// "Swap top image while layer is hidden",
			screens: {
				top: {
					background: "/images/screen-gideon-4.png"
				}
			}
		},
		{
			// "iOS share sheet is visible showing Check This Out shortcut",
			screens: {
				top: {
					opacity: 1
				}
			}
		},
		{
			// "Move pointer to Check This Out share sheet menu item",
			screens: {
				pointer: {
					x: 0.13,
					y: 0.74
				}
			},
			duration: 1500
		},
		{
			// "Tap down",
			screens: {
				pointer: {
					tapDown: true
				}
			},
			duration: 200
		},
		{
			// "Tap up",
			screens: {
				pointer: {
					tapDown: false
				}
			}
		},
		{
			screens: {
				bottom: {
					background: "/images/screen-gideon-5.png"
				}
			}
		},
		{
			screens: {
				top: {
					opacity: 0
				}
			},
			duration: 500,
		},
		{
			// "Move pointer to Read Sample menu item",
			screens: {
				pointer: {
					x: 0.425,
					y: 0.582
				}
			},
			duration: 1500,
		},

		{
			// "Tap down",
			screens: {
				pointer: {
					tapDown: true
				}
			},
			duration: 200,
		},
		{
			// "Tap up",
			screens: {
				pointer: {
					tapDown: false
				}
			},
			duration: 200,
		},

		{
			// "Swap top image while layer is hidden",
			screens: {
				top: {
					background: "/images/screen-gideon-6.png"
				}
			},
		},
		{
			screens: {
				top: {
					opacity: 1
				}
			},
			duration: 1000,
		},
		{
			// "Move pointer to Safari in system status bar",
			screens: {
				pointer: {
					x: -0.0075,
					y:  0.0075,
				}
			},
			duration: 1500,
		},
		{
			// "Tap down",
			screens: {
				pointer: {
					tapDown: true
				}
			},
			duration: 200,
		},
		{
			// "Tap up",
			screens: {
				pointer: {
					tapDown: false
				}
			},
			duration: 200,
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
				},
				pointer: {
					x: -0.04,
					y: 0.40,
				},
			}
		},
	],
}
