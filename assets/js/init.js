$(document).ready(function () {
  $(window).scroll(function () {
    const scrollTop = $(window).scrollTop();

    if (scrollTop === 0) {
      // Set various CSS properties when scrollTop is 0
      $(".head").css({
        backgroundColor: "transparent",
        boxShadow: "none",
      });
      $(".header_inn").css({
        backgroundColor: "transparent",
        borderRadius: "0px",
        color: "#fefefe",
      });
      $(".toggle-switch").css("border", "2px solid #fefefe");
      $(".slider").css("color", "#fefefe");
      $("html").css("--moon", "url(../imgs/icons/white.png) no-repeat");
    }
  });

  $(".go-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 100);
  });
  // gnb 영역에 마우스 올렸을 때 전체메뉴 노출
  $(".gnb").on("mouseenter", function () {
    $(".first_deep").css("display", "flex");
    $(".head").css("background-color", "#ffffff");
    $(".header_inn").css("color", "#000000");
    $("html").css("--moon", "url(../imgs/icons/black.png) no-repeat");
    $(".toggle-switch").css("border", "2px solid #111111");
    $(".slider").css("color", "#111111");
  });

  // gnb 영역에서 마우스가 벗어 났을 때 전체메뉴 숨김
  $(".gnb").on("mouseleave", function () {
    $(".first_deep").hide();
    $(".head").css("background-color", "#ffffff");
    $(".header_inn").css("color", "#000000");
    $("html").css("--moon", "url(../imgs/icons/black.png) no-repeat");
    $(".toggle-switch").css("border", "2px solid #000000");
    $(".slider").css("color", "#000000");
  });
});

let lastScrollTop = 0;
if (typeof window !== "undefined") {
  window.addEventListener("scroll", function () {
    const Nav_wrap = document.getElementsByClassName("head");
    const Navbar = document.getElementsByClassName("header_inn");
    const theme = document.getElementsByClassName("toggle-switch");
    const slider = document.getElementsByClassName("slider");
    const scrollTop = window.scrollY;

    if (scrollTop > lastScrollTop) {
      Nav_wrap[0].style.top = "-85px";
    } else {
      Nav_wrap[0].style.top = "0px";
      Nav_wrap[0].style.backgroundColor = "#fefefe";
      Nav_wrap[0].style.boxShadow = "0px 15px 10px -15px";
      Navbar[0].style.top = "0px";
      Navbar[0].style.borderRadius = "120px / 0px";
      Navbar[0].style.zIndex = "100";
      Navbar[0].style.color = "#000000";
      theme[0].style.border = "2px solid #111111";
      slider[0].style.color = "#111111";
      document.documentElement.style.setProperty(
        "--moon",
        "url(../imgs/icons/black.png) no-repeat"
      );
    }
    lastScrollTop = scrollTop;
  });
}
$(window).scroll(function () {
  $(".content_cont").each(function () {
    if (
      $(window).scrollTop() >=
      $(this).offset().top - $(window).height() / 1.5
    ) {
      $(this).addClass("active");
    } else {
      $(this).removeClass("active");
    }
  });
});


let btnCollapse = document.querySelectorAll(".btn-collapse");
let accordionItems = document.querySelectorAll(".accordion_item");

for (let i = 0; i < btnCollapse.length; i++) {
  btnCollapse[i].addEventListener("click", function () {
    let panel = accordionItems[i].querySelector(".accordion_body");
    if (panel.style.display === "block") {
      panel.style.display = "none";
      this.classList.remove("active_btn");
    } else {
      panel.style.display = "block";
      this.classList.add("active_btn");
    }
  });
}