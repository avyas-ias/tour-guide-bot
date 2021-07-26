const homeView = {
  type: "home",
  blocks: [
    {
      type: "section",
      text: {
        type: "plain_text",
        text:
          "👋🏻  Hello there new hire, hope you settling well on your first day.\nI am here to help you show around the IAS slack workspace and get you acquainted with some people you are going to work with.\n\nJust tell me what you want to start with ...",
        emoji: true
      }
    },
    {
      type: "divider"
    },
    {
      type: "actions",
      elements: [
        {
          type: "button",
          text: {
            type: "plain_text",
            text: "🙋🏻‍ Help me meet some new people",
            emoji: true
          },
          style: "primary",
          value: "recommend_people",
          action_id: "recommend_people"
        }
      ]
    },
    {
      type: "actions",
      elements: [
        {
          type: "button",
          text: {
            type: "plain_text",
            text: "🚪 Get me into some new channels",
            emoji: true
          },
          style: "primary",
          value: "click_me_123",
          action_id: "recommend_channels"
        }
      ]
    },
    {
      type: "actions",
      elements: [
        {
          type: "button",
          text: {
            type: "plain_text",
            text: "👋🏻  Introduce me to everyone",
            emoji: true
          },
          style: "primary",
          value: "click_me_123",
          action_id: "introduce_me"
        }
      ]
    }
  ]
};

module.exports = homeView;