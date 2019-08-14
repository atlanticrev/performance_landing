import 'script-loader!phone-masks/js/masked.js';
import { addClass, removeClass, hide, show } from './helpers';
import { validation } from './validation';
// import { sendMsEvent } from './events';

// Подключение масок для телефона
if (typeof Masked !== 'undefined') {
  // eslint-disable-next-line
  MConf({ pathToList: 'https://cdn.callbackhunter.com/js/masks/' });
  // eslint-disable-next-line
  window.msMaskedObject = new Masked({ selector: '#phone' });
}

const
  buttonFormParticipate = document.querySelector('.form-button'),
  modalClassSelector = '.section-modal',
  modalDialog = document.querySelector(modalClassSelector),

  dialogCloseButtonOne = modalDialog.querySelector('.close-button-one'),
  dialogCloseButtonTwo = modalDialog.querySelector('.close-button-two'),
  dialogCloseButtonThree = modalDialog.querySelector('.close-button-three'),

  step1 = modalDialog.querySelector('.step-1'),
  step2 = modalDialog.querySelector('.step-2'),
  step3 = modalDialog.querySelector('.step-3'),

  stepFree = modalDialog.querySelector('.step-free'),
  modalStepFreeButton = stepFree.querySelector('.button-step-free'),

  modalStep1Button = step1.querySelector('.button-step-1'),

  modalStep2Button = step2.querySelector('.button-step-2'),
  cardNum = step2.querySelector('input'),
  errLabel = step2.querySelector('span.error'),

  modalStep3Button = step3.querySelector('.button-step-3');

buttonFormParticipate.addEventListener('click', () => {
  if (validation()) {
    // if (isFree) {
    //   stepFree.classList.remove('hide');
    // } else {
    //   step1.classList.remove('hide');
    // }
    step1.classList.remove('hide');

    show(modalDialog);
    // sendMsEvent('paid_sendForm', userData);
  }
});

modalStepFreeButton.addEventListener('click', () => {
  addClass(modalDialog, 'hide');
});

modalStep1Button.addEventListener('click', () => {
  hide(step1);
  show(step2);
  // sendMsEvent('paid_switchToPay', userData);
});

modalStep2Button.addEventListener('click', () => {
  const cardNumVal = cardNum.value.replace(/\D/g,'');
  cardNum.value = cardNumVal;

  if (cardNumVal.length >= 16) {
    hide(step2);
    show(step3);
    // sendMsEvent('paid_madePayment', userData);
  } else {
    addClass(cardNum, 'error');
    show(errLabel);
  }
});

cardNum.addEventListener('keyup', () => {
  removeClass(cardNum, 'error');
  hide(errLabel);
});

modalStep3Button.addEventListener('click', () => {
  addClass(modalDialog, 'hide');
});

dialogCloseButtonOne.addEventListener('click', () => {
  addClass(modalDialog, 'hide');
});

dialogCloseButtonTwo.addEventListener('click', () => {
  addClass(modalDialog, 'hide');
});

dialogCloseButtonThree.addEventListener('click', () => {
  addClass(modalDialog, 'hide');
});
