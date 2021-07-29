// importing the bolt.js package
const { App } = require("@slack/bolt");

const axios = require("axios").default;
const fetch = require("node-fetch");

const getUser = require("./utils/getUser");
const getUserId = require("./utils/getUserId");
const getChannelId = require("./utils/getChannelId");
const sendMessage = require("./utils/sendMessage");
const randomChannel = require("./utils/channels.js");

// importing views
const homeView = require("./views/home");
const introModel = require("./views/introModel");
const introSlide = require("./views/introSlide");
const questionnaire = require("./views/questionnaire");

const INTRODUCTION_CHANNELS = ["general", "product-rd-townhall","announcement"];
// const TRIGGER_CHANNEL = "C02976ZLCR3";
const TRIGGER_CHANNEL = "C029PA6CG8H";

// configuring bot
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

// function that'll execute when a button with action_id recommend_people is clicked
app.action("recommend_people", async ({ ack, body, client }) => {
  await ack();

  let recommendedPeople = [];
  let recommendedPeopleResult = [];

  let uname = null;
  // client.users.info({user:body.user.id}).real_name
  client.users.info({ user: body.user.id }).then(async user => {
    // console.log(user);  
    uname = user.user.real_name;
    
    sendMessage(client,body.user.id,"----------------------------------------------------------------------------------------------------------------------------------");

    axios.get(`https://slack-bot-peer-recommend.herokuapp.com/recommendpeer?uname=${uname}`)
      .then(function(response) {
        // console.log(response.data);
        recommendedPeopleResult = response.data;
        recommendedPeople = recommendedPeopleResult.map(
          person =>
            person.split(" ")[0][0] + person.split(" ")[1] + "@integralads.com"
        );

        // console.log(recommendedPeople);
        sendMessage(
          client,
          body.user.id,
          `*Hey! I’m glad to know that you want to meet new people. Everyone at IAS is unique and has an interesting story to share but based on your inputs, here are my recommendations:*`
        );

        recommendedPeople.map(async (i, index) => {
          let user = null;
          getUserId(await client.users.list(), i, uid => (user = uid));
          await sendMessage(
            client,
            body.user.id,
            `${recommendedPeopleResult[index]} -- <@${user}>`
          );
        });
      
      setTimeout(i=>{
        sendMessage(client,body.user.id,`\n\nFeel free to directly slack them. Also, please join <#C029AKP7H6W> to meet other awesome folks !`);
      },200);
      
      })
      .catch(function(error) {
        console.log(error);
      });
  });
});

// function that'll execute when a button with action_id recommend_channel is clicked
app.action("recommend_channels", async ({ ack, body, client }) => {
  await ack();

  try {
    const result = await client.views.open({
      trigger_id: body.trigger_id,
      view: questionnaire
    });
  } catch (error) {
    console.error(error);
  }

  let recommendedChannels = randomChannel(5);
  // console.log(recommendedChannels);
  // await sendMessage(client ,body.user.id ,"*You should join these channels :point_down:*");

  recommendedChannels.map(async i => {
    let channel = null;
    getChannelId(
      await client.conversations.list(),
      i.name,
      cid => (channel = cid)
    );
    // await sendMessage(client ,body.user.id ,`${i.name} -- <#${channel}>`);
  });
});

// showing intro input for user to enter their introduction
app.action("introduce_me", async ({ ack, body, client }) => {
  await ack();

  try {
    const result = await client.views.open({
      trigger_id: body.trigger_id,
      view: introModel
    });
  } catch (error) {
    console.error(error);
  }
});

app.action("questionnaire_change", async ({ ack, body, client }) => {
  await ack();
});

// removing user for testing team_join event
app.action("remove_user", async ({ ack, body, client }) => {
  await ack();

  let userid = body.user.id;
  console.log(userid);
  try {
    client.admin.users.remove({
      team_id: "T02T92FV0",
      user_id: userid
    });
  } catch (e) {
    console.log(e);
  }
});

// handling user input on introduction modal
app.view("introduction_input_modal", async ({ ack, body, view, client }) => {
  // Acknowledge the view_submission event
  await ack();

  let introMessage = view.state.values["intro_block"]["intro_input"]["value"];

  try {
    const result = await client.views.open({
      trigger_id: body.trigger_id,
      view: introSlide
    });
  } catch (error) {
    console.error(error);
  }

  INTRODUCTION_CHANNELS.map(async channel => {
    let channelId = null;
    getChannelId(
      await client.conversations.list(),
      channel,
      cid => (channelId = cid)
    );
    await sendMessage(
      client,
      channelId,
      `:clap:  *Welcome to the IAS family <@${body.user.id}> !*, _Here's a little bit about ${body.user.name} in his/her own words_`
    );
    await sendMessage(client, channelId, introMessage);
  });
});

app.view("channel_catogery_modal", async ({ ack, body, view, client }) => {
  // Acknowledge the view_submission event
  await ack();
  
  // axios.get(`https://joyous-green-straw.glitch.me/predict?body=sports`)
  // .then(async function(response){ console.log(response); })
  // .catch(e=>console.log(e));
  fetch("https://joyous-green-straw.glitch.me/predict?body=sports")
  .then(response=>console.log(response))
  .catch(error=>console.log(error));
  

  let catogary = view.state.values.radio_block.questionnaire_change.selected_option.value;
  // axios.get(`https://joyous-green-straw.glitch.me/predict?body=${catogary}`)
  //   .then(async function(response) {
      // let recommendedChannels = response.data.response;
  let recommendedChannels = randomChannel(5);
      
      await sendMessage(client,body.user.id,"----------------------------------------------------------------------------------------------------------------------------------");
      await sendMessage(client,body.user.id,"*We have a lot of amazing channels with superb initiatives, but I think you’ll be happy to be a part of following channels:*");
    
      await recommendedChannels.map(async i => {
        let channel = null;
        getChannelId(
          await client.conversations.list(),
          i.name,
          cid => (channel = cid)
        );
        await sendMessage(client ,body.user.id ,`<#${i.id}>`); // sandeep's recommendations
        // await sendMessage(client ,body.user.id ,`<#${channel}>`); //random recommended
      });
      
      await setTimeout(i=>{
        sendMessage(client,body.user.id,"\n\nFeel free to join them and have a good time!");
      },300);
    });
// });

// handling introduction slide modal submit event
app.view("introduction_slide_modal", async ({ ack, body, view, client }) => {
  // Acknowledge the view_submission event
  await ack();
});

// setting up app home for greeting user
app.event("app_home_opened", async ({ body, payload, client }) => {
  const userId = payload.user;

  try {
    // Call the views.publish method using the WebClient passed to listeners
    const result = await client.views.publish({
      user_id: userId,
      view: homeView
    });
  } catch (error) {
    console.error(error);
  }
});



app.message(/./, async ({ context, say }) => {
  // RegExp matches are inside of context.matches
  let message = context.matches[0];
  // const greeting = context.matches[0];

  // await say(`${greeting}, how are you?`);
});



app.event("app_home_opened", async ({ body, payload, client }) => {
  const userId = payload.user;

  try {
    // Call the views.publish method using the WebClient passed to listeners
    const result = await client.views.publish({
      user_id: userId,
      view: homeView
    });
  } catch (error) {
    console.error(error);
  }
});

// handling the new member joinging event
app.event("member_joined_channel", async ({ event, client }) => {
  let userid = event.user;
  console.log(event);
  console.log(client);
  if (event.channel === TRIGGER_CHANNEL) {
    let user = await client.users.info({ user: userid });
    await sendMessage(client, userid, `<@${userid}>`);
    await sendMessage(
      client,
      userid,
      `👋🏻  *Hello ${user.user.name}* and welcome to IAS, My name is Freddy Bot.\n\nI can do many things for you including this welcoming message, check the *Home* tab to find out more !`
    );
  }
});

// handling the new member joinging event
app.event("team_join", async ({ payload, event, client }) => {
  let userid = payload.user;
  let user = await client.users.info({ user: userid });
  await sendMessage(client, userid, `<@${userid}>`);
  await sendMessage(
    client,
    userid,
    `👋🏻  *Hello ${user.user.name}* and welcome to IAS, My name is Freddy Bot.\n\nI can do many things for you including this welcoming message, check the *Home* tab to find out more !`
  );
});

// boilerplate code to start the bolt.js server listning at a given port
(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);
  console.log("⚡️ Bolt app is running!");
})();


// messages
app.message(/.*hub.*/, async ({ payload,context,client,say }) => {
  // RegExp matches are inside of context.matches
  let userid = payload.user;
  let message = context.matches[0];
  console.log(message);
  await sendMessage(
    client,
    userid,
    "It takes upto 72 hours to get access to the Hub. If after 72 hours you are still not able to access the Hub, please raise a HR Zendesk request via Okta"
  );
});

app.message(/.*salary.*/, async ({ payload,context,client,say }) => {
  // RegExp matches are inside of context.matches
  let userid = payload.user;
  let message = context.matches[0];
  console.log(message);
  await sendMessage(
    client,
    userid,
    "You can check your payslip on https://portal.immedis.com/#/account/login. You will receive an email from immedis@paylineindia.com post your first month’s salary credit with the login credentials"
  );
});

app.message(/.*investment.*/, async ({ payload,context,client,say }) => {
  // RegExp matches are inside of context.matches
  let userid = payload.user;
  let message = context.matches[0];
  console.log(message);
  await sendMessage(
    client,
    userid,
    "You can declare your investments for the year on the Immedis portal. You will receive an email from immedis@paylineindia.com post your first month’s salary credit with the login credentials. Please note there won’t be any income tax deduction during your first month salary."
  );
});

app.message(/.*leave.*/, async ({ payload,context,client,say }) => {
  // RegExp matches are inside of context.matches
  let userid = payload.user;
  let message = context.matches[0];
  console.log(message);
  await sendMessage(
    client,
    userid,
    "Head over to Okta > ADP > Myself > Request time off and select the days and policy you are requesting leave for. Or visit the Leave Policy page for more information."
  );
});

app.message(/.*cls.*/, async ({ payload,context,client,say }) => {
  // RegExp matches are inside of context.matches
  let userid = payload.user;
  let message = context.matches[0];
  console.log(message);
  await sendMessage(
    client,
    userid,
    "\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n."
  );
});


