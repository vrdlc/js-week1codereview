var getGit = require('./../js/api.js');

$(document).ready(function() {
  $("#gitHubUserName").click(function(event) {
    event.preventDefault();

    getGit.getUserName();
    getGit.getFullName();
    getGit.getUserAvatar();
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
