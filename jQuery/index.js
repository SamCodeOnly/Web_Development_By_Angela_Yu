$("h1").css("background-color","red");

$("h1").css("margin-50");

$("h1").addClass("big-title margin-50")

$("button").text("Dont Click Me");

$("h1").text("Bye");

$("button").html("<em>Hey</em>");

$("a").attr("href","www:///google.com");

// for (let i=0; i < 5; i++){
//   document.querySelectorAll("button")[i].addEventListener("click", function(){
//     document.querySelector("h1").style.color = "purple";
//   })
// }



  $("button").click(function(){
    $("h1").css("color","purple");
  })

  $("input").keypress(function(event){
    $("h1").text(event.key);
  });


//  ""