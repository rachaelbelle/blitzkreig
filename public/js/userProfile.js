$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
    console.log(data);
    $(".member-name").text(data.userName);
    function initMap() {
      var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: { lat: 34.04924594193164, lng: -118.24104309082031 }
      });

      var trafficLayer = new google.maps.TrafficLayer();
      trafficLayer.setMap(map);
    }
  });
});
