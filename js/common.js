// 좌우버튼 눌러서 슬라이더
var n;
var className;
var timer;
$(".next").on('click', function() {
  className = $("#sliderList li:first").attr("class")
  n = className.substr(6, 1);
  if ( n == 3 ) n = 0;
  $("#btnNum span").removeClass('active');
  $("#btnNum span:eq("+ n +")").addClass('active');
  $("#sliderList:not(:animated)").animate({ marginLeft: "-100%"}, function() {
    $(this).append($("> li:first", this)).css({ marginLeft: 0 })
  })
})
$(".prev").on('click', function() {
  className = $("#sliderList li:last").attr("class")
  n = className.substr(6, 1) - 1;
  if ( n == -1 ) n = 2;
  $("#btnNum span").removeClass('active');
  $("#btnNum span:eq("+ n +")").addClass('active');
  $("#sliderList").prepend($("#sliderList li:last"))
                  .css({ marginLeft: "-100%" })
                  .animate({ marginLeft: 0 })

})
// 번호버튼 눌러서 슬라이더
var liLength = $("#sliderList li").length;
$("#btnNum span").on('click', function() {
  $("#btnNum span").removeClass('active');
  $(this).addClass('active');
  var num = $(this).index() + 1;
  var pos = $('.slider'+num).position().left;
  $("#sliderList").animate({ marginLeft: -pos }, function() {
    for ( var i=0; i< liLength-1; i++ ) {
      num++;
      if ( num == liLength+1 ) {
        num = 1;
      }
      $("#sliderList").append($(".slider"+ num ));
    }
    $("#sliderList").css({ marginLeft: 0 })
  })
})
// timer = setInterval(function() {
//   $(".next").click();
// }, 3000);
// $("#btnPos span, #btnNum span").on('click', function() {
//   clearInterval(timer)
// })
