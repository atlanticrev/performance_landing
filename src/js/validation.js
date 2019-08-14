// Валидация полей
// import {sendMsEvent} from "./events";

function validation() {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");

  const nameValue = name.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const phoneValueDigits = phoneValue.replace(/\D/g,'');

  const emailPattern = /^([0-9a-zA-Z]([_.-])?|1){1,50}@([0-9a-zA-Z]([_.-])?|1){2,20}\.([a-zA-Z]([_.-])?|1){2,}/g;
  const phonePattern = /^[\S]+$/g;

  // Сброс сброс красной обводки
  name.classList.remove('inner-error-border');
  email.classList.remove('inner-error-border');
  phone.classList.remove('inner-error-border');

  let countValidContacts = 0;

  if ( nameValue === ''
    || emailValue === ''
    || !(phoneValue.match(/^[\d ()+-]+$/))
    || !emailPattern.test(emailValue)
    || !phonePattern.test(phoneValue)
  )

  {
    name.focus();

    if (nameValue === '') {
      name.classList.add('inner-error-border');
    } else {
      // userData.name = nameValue;
    }

    if (emailValue === '' || !emailPattern.test(emailValue)) {
      email.classList.add('inner-error-border');
    } else {
      countValidContacts++;
      // userData.email = emailValue;
    }

    if (!phoneValue.match(/^[\d ()+-]+$/) || !phonePattern.test(phoneValue) || !Masked.isValid(phoneValue)) {
      phone.classList.add('inner-error-border');
    } else {
      countValidContacts++;
      // userData.phone = '+' + phoneValueDigits;
    }

    if (countValidContacts > 0) {
      // sendMsEvent('paid_unsorted', userData);
    }

    return false;
  } else {
    // userData.phone = '+' + phoneValueDigits;
    // userData.name = nameValue;
    // userData.email = emailValue;

    return true;
  }
}

export {
  validation
}
