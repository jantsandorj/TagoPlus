// const toggleBtn = document.querySelector(".toogle-btn");
// const sidebar = document.querySelector(".sidebar");
// const toggleMenu = document.getElementById("toggle-menu");
// toggleBtn.addEventListener("click", () => {
//   sidebar.classList.toggle("show-sidebar");
// });

// toggleMenu.addEventListener("change", () => {
//   sidebar.classList.toggle("show-sidebar", toggleMenu.checked);
// });

var modal = document.getElementById("modal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
// btn.onclick = function () {
// modal.style.display = "block";
// };

// // When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//   modal.style.display = "none";
// };

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };

if (typeof window !== "undefined") {
  window.addEventListener("scroll", function () {
    const value = window.scrollY;
    const row = document.getElementsByClassName("txt_row");
    if (value != -1 && row !== null) {
      row[0].style.left = -0.2 * value + "px";
      row[1].style.left = 0.2 * value + "px";
      row[2].style.left = -0.2 * value + "px";
      row[3].style.left = 0.2 * value + "px";
      row[4].style.left = -0.2 * value + "px";
      row[5].style.left = 0.2 * value + "px";
      row[6].style.left = -0.2 * value + "px";
      row[7].style.left = 0.2 * value + "px";
      row[8].style.left = -0.2 * value + "px";
    }
  });
}
var ytPlayers = [];
var videoid = [
  "Kf319Gh2voc",
  "TXxtJPxFvJQ",
  "TXxtJPxFvJQ",
  "TXxtJPxFvJQ",
  "TXxtJPxFvJQ",
  "TXxtJPxFvJQ",
  "TXxtJPxFvJQ",
  "TXxtJPxFvJQ",
]; //YouTube video ID
function onYouTubeIframeAPIReady() {
  // Initialize the YouTube players for each video ID
  for (var i = 0; i < videoid.length; i++) {
    ytPlayers[i] = new YT.Player("player_" + i, {
      videoId: videoid[i],
      playerVars: {
        autoplay: 0,
        controls: 0,
        rel: 0,
      },
    });
  }
}

var inn_yt = document.getElementsByClassName("inn_yt");
var playButtons = document.getElementsByClassName("play_btn");
var yt_imgs = document.getElementsByClassName("yt_img");

function changePic() {
  for (var i = 0; i < yt_imgs.length; i++) {
    yt_imgs[i].src = `https://i.ytimg.com/vi/${videoid[i]}/maxresdefault.jpg`;
  }
}
changePic();

for (var i = 0; i < playButtons.length; i++) {
  playButtons[i].addEventListener("click", function () {
    var index = Array.from(playButtons).indexOf(this);
    console.log(index);

    // Play the corresponding video
    ytPlayers[index].playVideo();

    // Delayed actions to hide elements and add a class
    setTimeout(function () {
      yt_imgs[index].style.display = "none";
      playButtons[index].style.display = "none";
      inn_yt[index].classList.add("playing");
    }, 300);
  });
}



var modal = document.getElementById("modal");
var images = document.querySelectorAll("#cert-Img");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("title");
var span = document.querySelector(".close");

images.forEach(function(imgElement) {
  imgElement.addEventListener("click", function() {
    modal.style.display = "block";
    modalImg.src = imgElement.querySelector("img").src;
    captionText.innerHTML = imgElement.querySelector("p").textContent;
  });
});

span.onclick = function() { 
  modal.style.display = "none";
}