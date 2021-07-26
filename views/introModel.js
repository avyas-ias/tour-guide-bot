const introModule = {
	"type": "modal",
	"callback_id": "introduction_input_modal",
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
	"close": {
		"type": "plain_text",
		"text": "Cancel",
		"emoji": true
	},
	"blocks": [
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": ":point_up::skin-tone-4: *Step 1*"
			}
		},
		{
			"type": "input",
			"block_id": "intro_block",
			"element": {
				"type": "plain_text_input",
				"multiline": true,
				"action_id": "intro_input",
				"placeholder": {
					"type": "plain_text",
					"emoji": true,
					"text": "Hello Team ! I'm the new kid on the block ..."
				}
			},
			"label": {
				"type": "plain_text",
				"text": "📝  Tell me a bit about yourself so that I can spread the word ...",
				"emoji": true
			}
		}
	]
}

module.exports = introModule;