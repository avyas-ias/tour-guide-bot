const homeView = {
  type: "home",
  blocks: [
    {
      type: "section",
      text: {
        type: "plain_text",
        text:
          "👋🏻  Howdy! We’re excited to have you onboard!\n\nHope you are settling well on your first day. We’re committed to smooth onboarding experience and I’m here to assist you with any queries you have like your team members, SPOCs or any other general query.\n\n Feel free to check below functionalities.",
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
            text: ":wave::skin-tone-3: Connect me to new people\t",
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
            text: ":bulb:  Show me interesting channels",
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
            text: ":mega:  Introduce me to everyone !",
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