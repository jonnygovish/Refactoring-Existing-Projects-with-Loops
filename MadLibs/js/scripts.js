$(document).ready(function() {
  $("#blanks form").submit(function() {
    // var person1Input = $("input#person1").val();
    // var person2Input = $("input#person2").val();
    // var animalInput= $("input#animal").val();
    // var exclamationInput = $("input#exclamation").val();
    // var verbInput = $("input#verb").val();
    // var nounInput = $("input#noun").val();
    // $(".person1").text(person1Input);
    // $(".person2").text(person2Input);
    // $(".animal").text(animalInput);
    // $(".exclamation").text(exclamationInput);
    // $(".verb").text(verbInput);
    // $(".noun").text(nounInput);

    var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

    for (var index = 0; index < blanks.length; index += 1) {
      var userInput = $("#" + blanks[index]).val();
      $("." + blanks[index]).text(userInput);
    }
    // blanks.forEach(function(blank){
    //   var userInput = $("#" +  blank ). val();
    //   $("." + blank). text(userInput);
    // });



    $("#story").show();

    event.preventDefault();
  });
});
