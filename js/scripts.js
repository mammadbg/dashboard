$("#dashboard").addClass("sidebarClass");

$("#dashboard").click(function () {
  $("#dashboard").addClass("sidebarClass");
  $("#course").removeClass("sidebarClass");
  $("#exam").removeClass("sidebarClass");
  $("#questions").removeClass("sidebarClass");
  $("#news").removeClass("sidebarClass");
});
$("#course").click(function () {
  $("#dashboard").removeClass("sidebarClass");
  $("#course").addClass("sidebarClass");
  $("#exam").removeClass("sidebarClass");
  $("#questions").removeClass("sidebarClass");
  $("#news").removeClass("sidebarClass");
});
$("#exam").click(function () {
  $("#dashboard").removeClass("sidebarClass");
  $("#course").removeClass("sidebarClass");
  $("#exam").addClass("sidebarClass");
  $("#questions").removeClass("sidebarClass");
  $("#news").removeClass("sidebarClass");
});
$("#questions").click(function () {
  $("#dashboard").removeClass("sidebarClass");
  $("#course").removeClass("sidebarClass");
  $("#exam").removeClass("sidebarClass");
  $("#questions").addClass("sidebarClass");
  $("#news").removeClass("sidebarClass");
});
$("#news").click(function () {
  $("#dashboard").removeClass("sidebarClass");
  $("#course").removeClass("sidebarClass");
  $("#exam").removeClass("sidebarClass");
  $("#questions").removeClass("sidebarClass");
  $("#news").addClass("sidebarClass");
});

// navbar
// default
$(".navItem1").addClass("navbarClass");
$(".navItem1").click(function () {
  if ($(this).siblings().hasClass("navbarClass")) {
    $(this).siblings().removeClass("navbarClass");
    $(this).addClass("navbarClass");
  }
})
$(".navItem2").click(function () {
  if ($(this).siblings().hasClass("navbarClass")) {
    $(this).siblings().removeClass("navbarClass");
    $(this).addClass("navbarClass");
  }
})
$(".navItem3").click(function () {
  if ($(this).siblings().hasClass("navbarClass")) {
    $(this).siblings().removeClass("navbarClass");
    $(this).addClass("navbarClass");
  }
})
$(".navItem4").click(function () {
  if ($(this).siblings().hasClass("navbarClass")) {
    $(this).siblings().removeClass("navbarClass");
    $(this).addClass("navbarClass");
    $(this).addClass("navbarClass");
  }
})
$(".navItem5").click(function () {
  if ($(this).siblings().hasClass("navbarClass")) {
    $(this).siblings().removeClass("navbarClass");
    $(this).addClass("navbarClass");
  }
})
$(".navItem6").click(function () {
  if ($(this).siblings().hasClass("navbarClass")) {
    $(this).siblings().removeClass("navbarClass");
    $(this).addClass("navbarClass");
  }
})
$(".navItem7").click(function () {
  if ($(this).siblings().hasClass("navbarClass")) {
    $(this).siblings().removeClass("navbarClass");
    $(this).addClass("navbarClass");
  }
})

// for (let n = 0; n < array.length; n++) {
//   if (n>3) {
//     $(".mainList:nth-child(n)").css('display','none');
//   }
  
// }


// cards
// first
$(".cardLeft1").addClass("cardsClass");
$(".secondaryList1").css('display','none');
$(".mainList1").css('display','block');

// open card sides
$(".cardLeft1").click(function () {
  $(".cardLeft1").addClass("cardsClass");
  $(".cardRight1").removeClass("cardsClass");
  $(".mainList1").css('display','block');
  $(".secondaryList1").css('display','none');
})
$(".cardRight1").click(function () {
  $(".cardLeft1").removeClass("cardsClass");
  $(".cardRight1").addClass("cardsClass");
  $(".mainList1").css('display','none');
  $(".secondaryList1").css('display','block');
})


$(function () {
  $('.showMore1').click(function () {
      $('.mainList1 li:hidden').slice(0, 5).show();
      if ($('.mainList1 li').length == $('.mainList1 li:visible').length) {
          $('.showMore1 ').hide();
      }
  });
});

//second
$(".cardLeft2").addClass("cardsClass");
$(".secondaryList2").css('display','none');
$(".mainList2").css('display','block');

// open card sides
$(".cardLeft2").click(function () {
  $(".cardLeft2").addClass("cardsClass");
  $(".cardRight2").removeClass("cardsClass");
  $(".mainList2").css('display','block');
  $(".secondaryList2").css('display','none');
})
$(".cardRight2").click(function () {
  $(".cardLeft2").removeClass("cardsClass");
  $(".cardRight2").addClass("cardsClass");
  $(".mainList2").css('display','none');
  $(".secondaryList2").css('display','block');
})


$(function () {
  $('.showMore2').click(function () {
      $('.mainList2 li:hidden').slice(0, 5).show();
      if ($('.mainList2 li').length == $('.mainList2 li:visible').length) {
          $('.showMore2 ').hide();
      }
  });
});

// third
$(".cardLeft3").addClass("cardsClass");
$(".secondaryList3").css('display','none');
$(".mainList3").css('display','block');

// open card sides
$(".cardLeft3").click(function () {
  $(".cardLeft3").addClass("cardsClass");
  $(".cardRight3").removeClass("cardsClass");
  $(".mainList3").css('display','block');
  $(".secondaryList3").css('display','none');
})
$(".cardRight3").click(function () {
  $(".cardLeft3").removeClass("cardsClass");
  $(".cardRight3").addClass("cardsClass");
  $(".mainList3").css('display','none');
  $(".secondaryList3").css('display','block');
})


$(function () {
  $('.showMore3').click(function () {
      $('.mainList3 li:hidden').slice(0, 5).show();
      if ($('.mainList3 li').length == $('.mainList3 li:visible').length) {
          $('.showMore3 ').hide();
      }
  });
});


// chart
window.onload = function () {
  var chart = new CanvasJS.Chart("chartContainer",
  {
    
    title:{
    
    },
    data: [
    {        
      type: "line",
      lineColor:"#2ECC71", //**Change the color here
      dataPoints: [
      { x: 10, y: 71,color: "#2ECC71"},
      { x: 20, y: 55,color: "#2ECC71"},
      { x: 30, y: 50,color: "#2ECC71"},
      { x: 40, y: 65,color: "#2ECC71"},
      { x: 50, y: 68,color: "#2ECC71"},
      { x: 60, y: 28,color: "#2ECC71"},
      { x: 70, y: 34,color: "#2ECC71"},
      { x: 80, y: 14,color: "#2ECC71"},
      { x: 90, y: 23,color: "#2ECC71"}
      ]
    }
    ]
  });

  chart.render();
}

function move() {
  var elem = document.getElementById("myBar"); 
  var width = 1;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}