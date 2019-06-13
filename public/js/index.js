
$(document).ready(function() {
  console.log("/js/index.js document ready");
  var usernameInput = $("#username");
  var passwordInput = $("#password");

  $("#loginForm").on("submit", handleLogin);

  // $("#submit").on("click", function() {
  //   console.log("I got CLIIIIICKED!!!!!");
  // });

  function handleLogin(event) {
    console.log("index.js In handleLogin");
    event.preventDefault();
    console.log(usernameInput.val());
    console.log(passwordInput.val());
    // this code will check to make sure all fields are filled out
    if (!usernameInput.val() || !passwordInput.val()) {
      //return;
      console.log("usernameinput or passwordinput was empty");
    }

    //Now that we verified both fields were filled in, we need to check if the info entered exists in the database
    //how do we loop through an api? i forget lol

    var currentUser = {
      username: usernameInput.val().trim(),
      password: passwordInput.val().trim()
    };
    // this code will check to make sure all fields are filled out
    if (!usernameInput.val() || !passwordInput.val()) {
      return;
    }

    loginUser(currentUser.username, currentUser.password);
  }

  function loginUser(username, password) {
    console.log("index.js In loginUser");
    console.log(username + " ... " + password);
    debugger;
    $.post("/api/login", {
      userName: username,
      passWord: password
    })
      .then(function(data) {
        console.log(data);
        debugger;
        window.location.replace(data);
        res.render('userProfile',data);
      })
      .catch(function(err) {
        console.log(err);
      });
  }
});

// // Get references to page elements
// var $exampleText = $("#example-text");
// var $exampleDescription = $("#example-description");
// var $submitBtn = $("#submit");
// var $exampleList = $("#example-list");

// // The API object contains methods for each kind of request we'll make
// var API = {
//   saveExample: function(example) {
//     return $.ajax({
//       headers: {
//         "Content-Type": "application/json"
//       },
//       type: "POST",
//       url: "api/examples",
//       data: JSON.stringify(example)
//     });
//   },
//   getExamples: function() {
//     return $.ajax({
//       url: "api/examples",
//       type: "GET"
//     });
//   },
//   deleteExample: function(id) {
//     return $.ajax({
//       url: "api/examples/" + id,
//       type: "DELETE"
//     });
//   }
// };

// // refreshExamples gets new examples from the db and repopulates the list
// var refreshExamples = function() {
//   API.getExamples().then(function(data) {
//     var $examples = data.map(function(example) {
//       var $a = $("<a>")
//         .text(example.text)
//         .attr("href", "/example/" + example.id);

//       var $li = $("<li>")
//         .attr({
//           class: "list-group-item",
//           "data-id": example.id
//         })
//         .append($a);

//       var $button = $("<button>")
//         .addClass("btn btn-danger float-right delete")
//         .text("ｘ");

//       $li.append($button);

//       return $li;
//     });

//     $exampleList.empty();
//     $exampleList.append($examples);
//   });
// };

// // handleFormSubmit is called whenever we submit a new example
// // Save the new example to the db and refresh the list
// var handleFormSubmit = function(event) {
//   event.preventDefault();

//   var example = {
//     text: $exampleText.val().trim(),
//     description: $exampleDescription.val().trim()
//   };

//   if (!(example.text && example.description)) {
//     alert("You must enter an example text and description!");
//     return;
//   }

//   API.saveExample(example).then(function() {
//     refreshExamples();
//   });

//   $exampleText.val("");
//   $exampleDescription.val("");
// };

// // handleDeleteBtnClick is called when an example's delete button is clicked
// // Remove the example from the db and refresh the list
// var handleDeleteBtnClick = function() {
//   var idToDelete = $(this)
//     .parent()
//     .attr("data-id");

//   API.deleteExample(idToDelete).then(function() {
//     refreshExamples();
//   });
// };

// // Add event listeners to the submit and delete buttons
// $submitBtn.on("click", handleFormSubmit);
// $exampleList.on("click", ".delete", handleDeleteBtnClick);
