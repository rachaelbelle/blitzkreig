//var router = require("express").Router();
$(document).ready(function() {
  // Getting jQuery references for the user's personal info
  var firstNameInput = $("#firstName");
  var lastNameInput = $("#lastName");
  var userNameInput = $("#userName");
  var emailInput = $("#email");
  var passwordInput = $("#password");
  var zipCode = $("#zipCode");
  var weatherCb = $("#weatherCb").prop("checked");
  var newsCb = $("#newsCb").prop("checked");
  var trafficCb = $("#trafficCb").prop("checked");
  var quotesCb = $("#quotesCb").prop("checked");

  console.log("In preferences.js");
  console.log(cmsForm);
  console.log(firstNameInput);
  console.log(lastNameInput);
  console.log(userNameInput);
  console.log(emailInput);
  console.log(passwordInput);
  console.log(zipCode);
  // Adding an event listener for when the form is submitted
  $("#cmsForm").on("submit", handleFormSubmit);

  // A function for handling what happens when the form to create a new post is submitted
  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("In preferences.js and in handleFormSubmit");

    // Wont submit the post if we are missing core user info
    if (
      !firstNameInput.val().trim() ||
      !lastNameInput.val().trim() ||
      !userNameInput.val() ||
      !emailInput.val() ||
      !passwordInput.val() ||
      !zipCode.val().trim()
    ) {
      return;
    }
    // Constructing a newUser object to hand to the database
    var newUser = {
      firstName: firstNameInput.val().trim(),
      lastName: lastNameInput.val().trim(),
      userName: userNameInput.val().trim(),
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      zipCode: zipCode.val().trim(),
      weather: weatherCb,
      news: newsCb,
      traffic: trafficCb,
      quotes: quotesCb
    };
    console.log("preference.js" + JSON.stringify(newUser));

    submitUser(newUser);
  }

  // include function to ensure that trhe data was succesfully posted prior to redirecting the user
  // function to check user session (active or no?)
  // maybe yianni's oAuth stuff will settle this?

  function submitUser(newData) {
    console.log("preferences.js In submitUser");
    console.log("Sending this via post to /api/users/ : " + newData);
    debugger;
    $.post("/api/users", newData, function(req) {
      //function(req, res) {
      console.log(req.body);
      debugger;
      console.log("in post of submit user");
      // console.log("Req: ");
      // console.log(req);
      // console.log("Res: ");
      // console.log(res);
      window.location.href = "/userProfile/"+req.userName;
      //res.render("userProfile",req.body);
    });
    // router.post("/api/users", function(req, res) {
    //   //   //debugger;
    //   //   console.log("Req: ");
    //   //   console.log(req);
    //   //   console.log("Res: ");
    //   //   console.log(res);
    //   //   window.location.href = "/userProfile";
    //   // });
    //   console.log("########### Preferences.js body of post is: ");
    //   console.log(res.body);
    //   res.json();
    // });
  }
});
