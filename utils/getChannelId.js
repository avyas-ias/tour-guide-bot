const getChannelId = (allChannels, targetChannel, cb) => {
  let channel = allChannels.channels.filter(channel => channel.name === targetChannel);
  // console.log(channel);
  if(channel.length > 0){
    cb(channel[0].id);
  }
  else{
    cb(null);
  }
}

module.exports = getChannelId;