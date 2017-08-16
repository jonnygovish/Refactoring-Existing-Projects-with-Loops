$(document).ready(function() {
  var flavors = ["vanilla", "cookies and cream", "mint chocolate", "blueberry", "blue moon", "strawberry"]
  flavors.forEach(function(flavor) {
    $("#flavor-list").append("<li>" + flavor + "</li>")
  });
});
