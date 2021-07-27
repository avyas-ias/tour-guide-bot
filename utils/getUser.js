const getUser = (allUsers, targetUser, cb) => {
  // let user = allUsers.members.filter(user => user.profile.name === targetUser);
  let user = allUsers.info({user:targetUser});
  cb(user);
  console.log(user);
}

module.exports = getUser;