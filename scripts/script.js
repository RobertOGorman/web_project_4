//Edit Popup
const profileEditButton = document.querySelector(".profile__edit-button");
const profileEditPopup = document.querySelector(".popup");
const profileEditCloseButton = document.querySelector(".popup__close-button");
const profileEditForm = document.querySelector("#edit-profile-form");
const profileNameEl = document.querySelector(".profile__name");
const profileTitleEl = document.querySelector(".profile__title");


function openPopup () {
    profileEditPopup.classList.add("popup__open");
}

function closePopup() {
    profileEditPopup.classList.remove("popup__open");
}

profileEditButton.addEventListener('click', () => {
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