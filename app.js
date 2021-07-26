// importing the bolt.js package
const { App } = require("@slack/bolt");
const getUserId = require('./utils/getUserId');
const getChannelId = require('./utils/getChannelId');
const sendMessage = require('./utils/sendMessage');

// importing views
const homeView = require('./views/home');
const introModel = require('./views/introModel');
const introSlide = require('./views/introSlide');

const INTRODUCTION_CHANNELS = ["general","tour-guide-bot"];

// configuring bot
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});


// function that'll execute when a button with action_id recommend_people is clicked
app.action("recommend_people", async ({ ack, body, client }) => {
  await ack();
  
  let recommendedPeople = ["vyasa887@gmail.com"];
  await sendMessage(client,body.user.id,`*You should meet these people :point_down:*`);
  
  recommendedPeople.map(async i => {
    let user = null;
    getUserId(await client.users.list(), i ,uid=>user=uid);
    await sendMessage(client,body.user.id,`<@${user}>`);
  });
});


// function that'll execute when a button with action_id recommend_channel is clicked
app.action("recommend_channels", async ({ ack, body, client }) => {
  await ack();
  
  let recommendedChannels = ['random'];
  await sendMessage(client ,body.user.id ,"*You should join these channels :point_down:*");
  
  recommendedChannels.map( async i => {
    let channel = null;
    getChannelId(await client.conversations.list() ,i , cid=>channel=cid);
    await sendMessage(client ,body.user.id ,`<#${channel}>`);
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


// handling user input on introduction modal
app.view('introduction_input_modal', async ({ ack, body, view, client }) => {
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
  
  INTRODUCTION_CHANNELS.map( async channel => {
    let channelId = null;
    getChannelId(await client.conversations.list() ,channel , cid=>channelId=cid);
    await sendMessage(client,channelId,`:clap:  *Welcome to the IAS family <@${body.user.id}> !*, _Here's a little bit about ${body.user.name} in his/her own words_`);
    await sendMessage(client,channelId,introMessage);
  });
  
});

// handling introduction slide modal submit event
app.view('introduction_slide_modal', async ({ ack, body, view, client }) => {
  // Acknowledge the view_submission event
  await ack();
});

// setting up app home for greeting user
app.event("app_home_opened", async ({ body,payload, client }) => {
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
app.event('team_join', async ({ payload, event, client }) => {
  let userid = payload.user;
  let user = await client.users.info({user:userid});
  await sendMessage(client, userid,`<@${userid}>`);
  await sendMessage(client,userid, `👋🏻  *Hello ${user.user.name}* and welcome to Tour guide bot staging enviornment. You and your team can test my capabilites here.\n\nI can do many things for you including this welcoming message, check the *Home* tab to find out more !`);
});

// boilerplate code to start the bolt.js server listning at a given port
(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);
  console.log("⚡️ Bolt app is running!");
})();
