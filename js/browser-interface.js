var getGit = require('./../js/api.js');

$(document).ready(function() {
  // getGit.getEmojis();

  $("#gitHubUserName").click(function(event) {
    $("#userData").show();
    event.preventDefault();

    getGit.getUserName();
    getGit.getFullName();
    getGit.getUserAvatar();

  });

  $("#showUserRepos").click(function(event) {
    $("#userRepos").show();
    event.preventDefault();
    getGit.getRepos();
  });

// $(document).ready(function() {
//   $("#gitHubSearch").click(function(event) {
//     event.preventDefault();
//
//     getGit.searchRepos();
//   });
// });




// $("#gitHubUserName").click(function() { //CAN'T MAKE EMOJIS WORK
//   var userName = $("#inputUserName").val();
//   $.get(apiKey + "emojis").then(function(response) {
//     console.log(response);
//      $("#showEmojis").append(response.100);
//
//
//   }).fail(function(error) {
//     console.log(error.responseJSON.message);
//   });
// });

}); //DOCUMENT READY
