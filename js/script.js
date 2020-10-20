let contactButton = document.querySelector('.text-us-button');
let contactPopup = document.querySelector('.modal-contact-us');
let popupClose = contactPopup.querySelector('.close-cross-button');
let contactForm = contactPopup.querySelector('.contact-us-form');
let contactName = contactPopup.querySelector('.contact-name');
let contactEmail = contactPopup.querySelector('.contact-email');

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

contactButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactPopup.classList.add("modal-show");

  if (storage) {
    contactName.value = storage;
    contactEmail.focus();
  } else {
    contactName.focus();
  }

  contactName.focus();
});

popupClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactPopup.classList.remove("modal-show");
  contactPopup.classList.remove("modal-error");
});
contactForm.addEventListener("submit", function (evt) {
  if (!contactName.value || !contactEmail.value) {
    evt.preventDefault();
    contactPopup.classList.remove("modal-error");
    contactPopup.offsetWidth = contactPopup.offsetWidth;
    contactPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
    localStorage.setItem("name", contactName.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (contactPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      contactPopup.classList.remove("modal-show");
      contactPopup.classList.remove("modal-error");
    }
  }
});

let mapLink = document.querySelector('.nerds-map');
let mapPopup = document.querySelector('.modal-map');
let mapClose = mapPopup.querySelector('.map-cross-button');

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show-1");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show-1");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show-1")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show-1");
    }
  }
});