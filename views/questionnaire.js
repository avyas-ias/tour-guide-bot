const questionnaire = {
	"title": {
		"type": "plain_text",
		"text": "Freddy Bot",
		"emoji": true
	},
	"submit": {
		"type": "plain_text",
		"text": "Submit",
		"emoji": true
	},
	"type": "modal",
	"callback_id": "channel_catogery_modal",
	"close": {
		"type": "plain_text",
		"text": "Cancel",
		"emoji": true
	},
	"blocks": [
		{
			"type": "section",
			"text": {
				"type": "plain_text",
				"text": "Hey! I'm FREDDY bot and I'm here to help you know about various amazing channels we have in IAS. Please choose one category and I shall help you recommend some interesting channels",
				"emoji": true
			}
		},
		{
			"type": "actions",
			"block_id": "radio_block",
			"elements": [
				{
					"type": "radio_buttons",
					"options": [
						{
							"text": {
								"type": "plain_text",
								"text": "Sports",
								"emoji": true
							},
							"value": "sports"
						},
						{
							"text": {
								"type": "plain_text",
								"text": "Technology",
								"emoji": true
							},
							"value": "technology"
						},
						{
							"text": {
								"type": "plain_text",
								"text": "Team Specific",
								"emoji": true
							},
							"value": "team specific"
						},
						{
							"text": {
								"type": "plain_text",
								"text": "Food",
								"emoji": true
							},
							"value": "food"
						},
						{
							"text": {
								"type": "plain_text",
								"text": "Travel",
								"emoji": true
							},
							"value": "travel"
						},
						{
							"text": {
								"type": "plain_text",
								"text": "Non-Technical",
								"emoji": true
							},
							"value": "non-technical"
						}
					],
					"action_id": "questionnaire_change"
				}
			]
		}
	]
}

module.exports = questionnaire;