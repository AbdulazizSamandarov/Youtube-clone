// video comment buttons start
const commentBtn = () => {
  commentBtnCancel.classList.add("commentBtn");
  commentBtnSend.classList.add("commentBtn");
};

setInterval(function changeBtnColor() {
  if (commentInput.value.length > 0) {
    commentBtnSend.classList.add("changeBtnColor");
  } else {
    commentBtnSend.classList.remove("changeBtnColor");
  }
}, 100);
// video comment buttons end
