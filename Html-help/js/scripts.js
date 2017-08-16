$(document) .ready(function(){
  var tagNames = ["header","paragraph","image"];

  tagNames.forEach(function(tagName){
    $("." +  tagName).click(function(){
      alert("This is a " + tagName);
    });

  });
  // jQuery("h1") . click(function(){
  //   alert("This is a header.");
  //   alert("I told you, THIS IS A HEADER!")
  // });
  //
  // jQuery("p") . click(functio() {
  //   alert("This is a paragraph.");
  // });
  //
  // jQuery("img"). click(function () {
  //   alert("This is an image.");
  // });
});
