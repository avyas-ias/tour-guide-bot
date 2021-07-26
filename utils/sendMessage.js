const sendMessage = async (client,channelId,message,icon=null) => {
 try {
    const result = await client.chat.postMessage({
      icon_emoji:icon,
      channel: channelId,
      text: message
    });
  } 
  catch (e) {
    console.log(e);
  } 
}

module.exports = sendMessage;