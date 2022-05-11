//Edit Popup
const profileEditButton = document.querySelector(".profile__edit-button");
const profileEditPopup = document.querySelector(".popup");
const profileEditCloseButton = document.querySelector(".popup__close-button");
const profileEditForm = document.querySelector("#edit-profile-form");
const profileNameEl = document.querySelector(".profile__name");
const profileTitleEl = document.querySelector(".profile__title");

const profileNameInput = document.querySelector (".popup__form-input_type_name")
const profileTitleInput = document.querySelector(".popup__form-input_type_title")

function openPopup () {
    profileEditPopup.classList.add("popup_open");
}

function closePopup() {
    profileEditPopup.classList.remove("popup_open");
}

profileEditButton.addEventListener('click', () => {

    profileNameInput.value = profileNameEl.textContent;

    profileTitleInput.value = profileTitleEl.textContent;

    openPopup()
});

profileEditCloseButton.addEventListener('click', closePopup);

profileEditForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const nameValue = event.target.name.value;
    const titleValue = event.target.title.value;

    profileNameEl.textContent = nameValue;
    profileTitleEl.textContent = titleValue;

    closePopup(); 
})