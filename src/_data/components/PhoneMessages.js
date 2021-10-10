module.exports = {
	id: "Phone-Messages",
	aspectRatio: 1.2,
	caption: `Person asking via text, "what’s that book you recommended?" Another person responds, "Gideon the Ninth" with a link to NPR’s book concierge`,

	autoplay: false,
	hideCaption: true,
	fade: false,
	loop: false,
	printedEffect: true,

	frames: [
		{
			description: `Person asking via text, "what’s that book you recommended?" Another person responds, "Gideon the Ninth" with a link to NPR’s book concierge`,
			screens: {
				bottom: {
					background: "screen-imessage",
					opacity: "1"
				},
			},
		},
	]
}
