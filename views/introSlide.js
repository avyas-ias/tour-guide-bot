const introSlide = {
	"title": {
		"type": "plain_text",
		"text": "Tour guide bot",
		"emoji": true
	},
	"submit": {
		"type": "plain_text",
		"text": "Submit",
		"emoji": true
	},
	"type": "modal",
	"callback_id": "introduction_slide_modal",
	"close": {
		"type": "plain_text",
		"text": "Cancel",
		"emoji": true
	},
	"blocks": [
		{
			"type": "section",
			"block_id": "intro_slide_block",
			"text": {
				"type": "mrkdwn",
				"text": "✌️  *Step 2*"
			}
		},
		{
			"type": "header",
			"text": {
				"type": "plain_text",
				"text": "Introduce yourself to the late comers",
				"emoji": true
			}
		},
		{
			"type": "image",
			"title": {
				"type": "plain_text",
				"text": "New hire introduction slide",
				"emoji": true
			},
			"image_url": "https://integralads.box.com/shared/static/ki2x1voizv5pu8d9u7hmn2kymf951yom.png",
			"alt_text": "Introduction slide"
		},
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "Make a slide similar to this and post it on the _#new-hire-basecamp_ channel so that people who aren't here can know more about you.\n\nRefer to below button to get the template slide"
			}
		},
		{
			"type": "actions",
			"elements": [
				{
					"type": "button",
					"style": "primary",
					"text": {
						"type": "plain_text",
						"text": "Get the template slide",
						"emoji": true
					},
					"value": "click_me_123",
					"url": "https://google.com",
					"action_id": "template_slide_button"
				}
			]
		}
	]
}

module.exports = introSlide;