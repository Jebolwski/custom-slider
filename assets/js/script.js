$(".round_left").click(function () {
  $(this).find("svg").find("rect").attr("stroke-opacity", 0.6);
  let children = $(".slider-div").children();
  let index = -10;
  for (child of children) {
    if ($(child).hasClass("active")) {
      let index = $(child).index();
      if (index == 0) {
        index = children.length;
      }
      $(children).removeClass("active");
      $(children[index - 1]).addClass("active");
      break;
    }
  }

  setTimeout(() => {
    $(this).find("svg").find("rect").attr("stroke-opacity", 0.12);
  }, 1000);
});

$(".round_right").click(function () {
  $(this).find("svg").find("rect").attr("stroke-opacity", 0.6);
  let children = $(".slider-div").children();
  let index = -10;
  for (child of children) {
    if ($(child).hasClass("active")) {
      let index = $(child).index();
      if (index + 1 == $(".slider-div").children().length) {
        index = -1;
      }
      $(children).removeClass("active");
      $(children[index + 1]).addClass("active");
      break;
    }
  }

  setTimeout(() => {
    $(this).find("svg").find("rect").attr("stroke-opacity", 0.12);
  }, 1000);
});

$(".learn_more").hover(
  function () {
    $(this).find("svg").css("rotate", "45deg");
  },
  function () {
    $(this).find("svg").css("rotate", "0deg");
  }
);
