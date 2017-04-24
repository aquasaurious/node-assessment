const users = require('./users');


module.exports ={
  readAll: function() {
    return users.find(null, null); 
  },
  findUserById: function(id) {
    return users.findOne('id', id);
  },
  getAdmins: function() {
    return users.find('type', 'admin');
  },
  getNonAdmins: function() {
    return users.find('type', 'user');
  },
  getUsersByFavorite: function(value) {
    var list = users.find(null,null);
    var filtered_list = list.filter(function(user) {
        return (user.favorites.indexOf(value) != -1);
    });
    return filtered_list;
  },
  getUsersByAgeLimit: function(age) {
    var list = users.find(null,null);
    var filtered_list = list.filter(function(user) {
        return (user.age <= age);
    });
    return filtered_list;
  },
  findUserByQuery: function(queryBy, value) {
    return users.find(queryBy, value);
  },
  createUser: function(user) {
    return users.add(user);
  },
  updateUser: function(id, newInfo) {
    return users.update('id', id, newInfo);
  },
  removeUser: function(id) {
    return users.remove('id', id);
  }
}