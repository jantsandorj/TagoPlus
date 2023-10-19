$(".tech_img").on("mouseenter", ".img_wrap", function (e) {
  (x = e.pageX - $(this).offset().left), (y = e.pageY - $(this).offset().top);
  $(this).find("span").css({ top: y, left: x });
  $(this).find("span").addClass("active");
});

$(".tech_img").on("mouseleave", ".img_wrap", function (e) {
  (x = e.pageX - $(this).offset().left), (y = e.pageY - $(this).offset().top);
  $(this).find("span").css({ top: y, left: x });
  $(this).find("span").removeClass("active");
});
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".inner_wrap").forEach((section, i) => {
  const bgtext_h1 = section.querySelector(".h1");
  const bgtext_body = section.querySelector(".body1");
  const bgtext_more = section.querySelector(".more");

  gsap.from(bgtext_h1, {
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power2.in",
    scrollTrigger: {
      trigger: section,
      start: () => (i ? "top bottom" : "top 20%"),
      end: () => (i ? "15% top" : "top top"),
      scrub: true,
      invalidateOnRefresh: true,
    },
  });
  gsap.from(bgtext_body, {
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power2.in",
    scrollTrigger: {
      trigger: section,
      start: () => (i ? "top bottom" : "top 20%"),
      end: () => (i ? "15% top" : "top top"),
      scrub: true,
      invalidateOnRefresh: true,
    },
  });
  gsap.from(bgtext_more, {
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power2.in",
    scrollTrigger: {
      trigger: section,
      start: () => (i ? "top bottom" : "top 20%"),
      end: () => (i ? "15% top" : "top top"),
      scrub: true,
      invalidateOnRefresh: true,
    },
  });
});

let getRatio = (el) =>
  window.innerHeight / (window.innerHeight + el.offsetHeight);

gsap.utils.toArray(".bg-image").forEach((section, i) => {
  gsap.fromTo(
    section,
    {
      backgroundPosition: () =>
        i ? `50% ${-window.innerHeight * getRatio(section)}px` : "50% 0px",
    },
    {
      backgroundPosition: () =>
        `50% ${window.innerHeight * (1 - getRatio(section))}px`,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: () => (i ? "top bottom" : "top top"),
        end: "bottom top",
        scrub: true,
        invalidateOnRefresh: true, // to make it responsive
      },
    }
  );
});

if (typeof window !== "undefined") {
  window.addEventListener("scroll", function () {
    const value = window.scrollY;
    const row = document.getElementsByClassName("txt_row");
    if (value != -1 && row !== null) {
      row[0].style.left = -1200 + 0.2 * value + "px";
      row[1].style.left = 500 - 0.2 * value + "px";
      row[2].style.left = -1200 + 0.2 * value + "px";
      row[3].style.left = 500 - 0.2 * value + "px";
      row[4].style.left = -1200 + 0.2 * value + "px";
      row[5].style.left = 500 - 0.2 * value + "px";
      row[6].style.left = -1200 + 0.2 * value + "px";
      row[7].style.left = 500 - 0.2 * value + "px";
      row[8].style.left = -1200 + 0.2 * value + "px";
    }
  });
}
let contact_form = document.getElementById("contact_form");

function submitForm(event) {
  console.log("event", event);
  event.preventDefault();
  alert("click submit");

  let name = document.getElementById("name");

  let email = document.getElementById("email");
  let tel = document.getElementById("tel");
  let message = document.getElementById("message");

  if (
    name.value == "" ||
    email.value == "" ||
    tel.value == "" ||
    message.value == ""
  ) {
    alert("Ensure you input a value in both fields!");
  } else {
    alert("This form has been successfully submitted!");
    console.log(
      `This form has a username of ${name.value} and password of ${email.value}`
    );
    name.value = "";
    email.value = "";
    tel.value = "";
    message.value = "";
  }
}
