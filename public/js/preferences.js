$(document).ready(function() {
  // Getting jQuery references for the user's personal info
  var firstNameInput = $("#firstName");
  var lastNameInput = $("#lastName");
  var usernameInput = $("#username")
  var emailInput = $("#email");
  var passwordInput = $("#password");
  var zipCode = $("#zipCode");
  var weatherCb = $("#weatherCb");
  var newsCb = $("#newsCb");
  var trafficCb = $("#trafficCb");
  var quotesCb = $("#quotesCb");
  var cmsForm = $("#cms");
  // Adding an event listener for when the form is submitted
  $("#cmsForm").on("submit", handleFormSubmit);

  // A function for handling what happens when the form to create a new post is submitted
  function handleFormSubmit(event) {
    event.preventDefault();
    // Wont submit the post if we are missing core user info
    if (
      !firstNameInput.val().trim() ||
      !lastNameInput.val().trim() ||
      !usernameInput.val().trim() ||
      !emailInput.val() ||
      !zipCode.val().trim()
    ) {
      return;
    }
    // Constructing a newUser object to hand to the database
    var newUser = {
      firstName: firstNameInput.val().trim(),
      lastName: lastNameInput.val().trim(),
      username: usernameInput.val().trim(),
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      weather: weatherCb,
      news: newsCb,
      traffic: trafficCb,
      quotes: quotesCb
    };

    // If we're updating a post run updatePost to update a post
    // Otherwise run submitPost to create a whole new post
    submitUser(newUser);
  }

  // include function to ensure that trhe data was succesfully posted prior to redirecting the user
  // function to check user session (active or no?)

  function submitUser(post) {
    $.post("/api/users", post, function() {
      window.location.href = "/userProfile";
    });
  }
});
