module.exports = {
	id: "Phone-Messages",
	aspectRatio: 1.35,
	caption: `Person asking via text, "what’s that book you recommended?" Another person responds, "Gideon the Ninth" with a link to NPR’s book concierge`,

	autoplay: false,
	hideCaption: true,
	fade: true,
	loop: false,
	printedEffect: true,

	frames: [
		{
			description: `Person asking via text, "what’s that book you recommended?" Another person responds, "Gideon the Ninth" with a link to NPR’s book concierge`,
			screens: {
				bottom: {
					background: "index/screen-messages",
					opacity: "1"
				},
			},
		},
	]
}
