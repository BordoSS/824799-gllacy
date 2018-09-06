var feedback_button = document.querySelector(".feedback-button");
var feedback_popup = document.querySelector(".feedback-modal-wrapper");
var feedback_close = document.querySelector(".modal-close");
var feedback_form = document.querySelector(".feedback-form");
var feedback_name = document.querySelector(".feedback-name");
var feedback_email = document.querySelector(".feedback-email");
var feedback_textarea = document.querySelector(".feedback-textarea");



if (feedback_popup) {
  feedback_button.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedback_popup.classList.add("modal-show");
});

  feedback_close.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedback_popup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
   if (evt.keyCode === 27) {
     if (feedback_popup.classList.contains("modal-show")) {
       feedback_popup.classList.remove("modal-show");
    }
  }
});

feedback_form.addEventListener("submit", function (evt) {
  if (!feedback_name.value || !feedback_email.value || !feedback_textarea.value) {
    evt.preventDefault();
    feedback_popup.classList.remove("modal-error");
    feedback_popup.offsetWidth = feedback_popup.offsetWidth;
    feedback_popup.classList.add("modal-error");
  }
});
};
