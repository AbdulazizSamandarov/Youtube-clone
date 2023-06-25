const bell = document.getElementById("bell");
bellBtn = document.getElementById("bellBtn");
searchIcon = document.getElementById("search-icon");
searchInput = document.getElementById("search-input");
commentInput = document.getElementById("video__comment-input");
commentBtnCancel = document.getElementById("video__comment-cancel");
commentBtnSend = document.getElementById("video__comment-send");

// subscribe btn  start
const showHideSubs = () => {
  bell.classList.toggle("showHide");
  bellBtn.classList.toggle("bellBtn");
  if (bellBtn.innerHTML === "Subscribed") {
    bellBtn.innerHTML = "Subscribe";
  } else {
    bellBtn.innerHTML = "Subscribed";
  }
};

const showHideSearch = () => {
  searchInput.classList.toggle("searchBlocked");
};
// subscribe btn end

