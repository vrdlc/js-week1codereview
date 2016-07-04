var apiKey = require('./../.env').apiKey;
var time = moment().format();

exports.getUserName = function() {
  var userName = $("#inputUserName").val();
  $.get("https://api.github.com/users/" + userName + "?access_token=" + apiKey).then(function(response) {
    console.log(response);
    $("#showUserName").text(response.login);

  }).fail(function(error) {
    console.log(error.responseJSON.message);
  });
};

exports.getFullName = function() {
  var userName = $("#inputUserName").val();
  $.get("https://api.github.com/users/" + userName + "?access_token=" + apiKey).then(function(response) {
    console.log(response);
    $("#showFullName").text(response.name);

  }).fail(function(error) {
    console.log(error.responseJSON.message);
  });
};

exports.getUserAvatar = function() {
  var userName = $("#inputUserName").val();
  $.get("https://api.github.com/users/" + userName + "?access_token=" + apiKey).then(function(response) {
    console.log(response);
    $("#showUserAvatar").append("<img src='" + response.avatar_url + "'>");

  }).fail(function(error) {
    console.log(error.responseJSON.message);
  });
};

exports.getRepos = function() {
  var userName = $("#inputUserName").val();
  $.get("https://api.github.com/users/" + userName + "/repos?access_token=" + apiKey).then(function(response) {
    console.log(response);
    for(var i = 0; i < response.length; i++)

    $("#showRepos").append("<li><a href='https://github.com/" + response[i].full_name + "'>" + response[i].full_name + "</a><p>Date Created: " + moment(response[i].created_at).format("MMMM Do YYYY, h:mm A") + "</p></li>");

  }).fail(function(error) {
    console.log(error.responseJSON.message);
  });
};
