const contactButton = document.querySelector(".text-us-button");
const contactUsPopup = document.querySelector(".modal-contact-us");
const PopUpClose = contactUsPopup.querySelector(".close-cross-button");
const contactForm = contactUsPopup.querySelector(".contact-us-form");
const contactName = contactUsPopup.querySelector(".contact-name");
const contactEmail = contactUsPopup.querySelector(".contact-email");

const isStorageSupport = true;
const storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

contactButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactUsPopup.classList.add("modal-show");

  if (storage) {
    contactName.value = storage;
    contactEmail.focus();
  } else {
    contactName.focus();
  }

  contactName.focus();
});

PopUpClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactUsPopup.classList.remove("modal-show");
  contactUsPopup.classList.remove("modal-error");
});
contactForm.addEventListener("submit", function (evt) {
  if (!contactName.value || !contactEmail.value) {
    evt.preventDefault();
    contactUsPopup.classList.remove("modal-error");
    contactUsPopup.offsetWidth = contactUsPopup.offsetWidth;
    contactUsPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
    localStorage.setItem("name", contactName.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (contactUsPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      contactUsPopup.classList.remove("modal-show");
      contactUsPopup.classList.remove("modal-error");
    }
  }
});