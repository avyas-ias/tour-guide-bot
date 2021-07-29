const getUser = (allUsers, targetUser, cb) => {
  // let user = allUsers.members.filter(user => user.profile.name === targetUser);
  allUsers.info({user:targetUser}).then(user => {
    console.log(user);
    cb(user);
  });
  // console.log(user);
}

module.exports = getUser;