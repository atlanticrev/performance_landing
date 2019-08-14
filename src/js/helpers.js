function hasClass (element, className) {
  return !!element.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
}

function addClass (element, className) {
  if (!hasClass(element, className)) element.className += ' ' + className;
}

function removeClass (element, className) {
  if (hasClass(element, className)) {
    const reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
    element.className = element.className.replace(reg, ' ');
  }
}

function show(element, className = 'hide') {
  removeClass(element, className);
}

function hide(element, className = 'hide') {
  addClass(element, className);
}

export {
  show,
  hide,
  hasClass,
  addClass,
  removeClass,
};
