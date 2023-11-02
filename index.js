/* -------------------- */
/*         Popup        */
/* -------------------- */

const aboutButtons = document.querySelectorAll('.button_type_about');
const closeButtons = document.querySelectorAll('.button_type_close');

const scrollWidth = window.innerWidth - document.documentElement.clientWidth;

const ESCAPE = 27;

function openPopUp(popup) {
  popup.classList.add('popup_opened');
  popup.classList.add('transition');
  document.querySelector('.page').classList.add('no-scroll');
  document.querySelector('.page').style.paddingRight = scrollWidth + 'px';
  document.addEventListener('click', closePopUpByOverlay);
  document.addEventListener('keydown', closePopUpByEsc);

}

function closePopUp(popup) {
  popup.classList.remove('popup_opened');
  popup.classList.remove('transition');
  document.querySelector('.page').classList.remove('no-scroll');
  document.querySelector('.page').style.paddingRight = 0;
  document.removeEventListener('click', closePopUpByOverlay);
  document.removeEventListener('keydown', closePopUpByEsc);
}

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

function closePopUpByOverlay(evt) {
  if (evt.target.classList.contains('popup_opened')) {
    closePopUp(evt.target);
  }
}

function closePopUpByEsc(evt) {
  const popupOpened = document.querySelector('.popup_opened');
  if (evt.keyCode === ESCAPE) {
    closePopUp(popupOpened);
  }
}

aboutButtons.forEach((item) => {
  item.addEventListener('click', () => {
    const targetPopupId = item.getAttribute('aria-labelledby');
    const targetPopup = document.querySelector(`#${targetPopupId}`);

    openPopUp(targetPopup);

  });
});

closeButtons.forEach((item) => {
  item.addEventListener('click', (evt) => {
    const popUpToClose = evt.target.closest('.popup');
    closePopUp(popUpToClose);
  });
});