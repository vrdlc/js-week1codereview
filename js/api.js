var apiKey = require('./../.env').apiKey;

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

    $("#showRepos").append("<li><a href='https://github.com/" + response[i].full_name + "'>" + response[i].full_name + "</a></li>");

  }).fail(function(error) {
    console.log(error.responseJSON.message);
  });
};


//UNSURE HOW TO CONVERT SEARCH TERMS INTO WHAT THE API REQUIRES IN ORDER TO SEARCH
// exports.searchRepos = function() {
//   var search = $("#searchRepos").val();
//   $.get("https://api.github.com/search/" + search + "access_tokey=" + apiKey).then(function(response) {
//     console.log(response);
//
//     $("#showSearch").append("<li>" + response[i].full_name + "</li>");
//
//   }).fail(function(error) {
//     console.log(error.responseJSON.message);
//   });
// };
