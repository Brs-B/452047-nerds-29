const contactButton = document.querySelector(".text-us-button");
const contactUsPopup = document.querySelector(".modal-contact-us");
const PopUpClose = contactUsPopup.querySelector(".close-cross-button");

contactButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactUsPopup.classList.add("modal-show");
});

PopUpClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactUsPopup.classList.remove("modal-show");
});
console.log(document.querySelector('.text-us-button'));