

// Saves the task description in local host//

$(document).ready(function () {
  $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
  $(".saveBtn").on("click", function () {

//textarea description// 
      
var description = $(this).siblings(".description").val();
var time = $(this).parent().attr("id");
    
      
    localStorage.setItem(time, description);
  });

// saved data being called from local host //

  $("#9 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));
  $("#17 .description").val(localStorage.getItem("17"));

// fuction to change color in real time, in planner//

  function presentTime() {
    var currentHour = moment().hour();

    $(".time-block").each(function () {
      var idTime = parseInt($(this).attr("id"));
      if (idTime < currentHour) {
        $(this).addClass("past");
      } else if (idTime === currentHour) {
        $(this).addClass("present");
        $(this).removeClass("past");
      } else {
        $(this).addClass("future");
        $(this).removeClass("past");
        $(this).removeClass("present");
      }
    });
      
    }
// displays current time//
  
  presentTime();
  var colorInteval = setInterval(presentTime, 1000);
});
