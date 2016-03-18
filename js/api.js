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

exports.getRepos = function() {
  var userName = $("#inputUserName").val();
  $.get("https://api.github.com/users/" + userName + "/repos?access_token=" + apiKey).then(function(response) {
    console.log(response);
          for(var i = 0; i < response.length; i++)

    $("#showRepos").append("<li>" + response[i].full_name + "</li>");

  }).fail(function(error) {
    console.log(error.responseJSON.message);
  });
};
