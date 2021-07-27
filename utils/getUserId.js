const getUserId = (allUsers, targetUser, cb) => {
  let user = allUsers.members.filter(user => user.profile.email === targetUser);
  if(user.length > 0){
    cb(user[0].id);
  }
  else{
    cb(targetUser);
  }
}

module.exports = getUserId;