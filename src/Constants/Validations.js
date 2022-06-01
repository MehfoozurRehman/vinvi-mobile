export function isInvalidEmail(str) {
  let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

  return !emailRegex.test(str);
}
export function isInvalidPhoneNumber(str) {
  let phoneNumberRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;

  return !phoneNumberRegex.test(str);
}
export function isInvalidPassword(str) {
  let passwordRegex = new RegExp('.{8,}'); // min 8 characters, 1 letter,number and special character
  if (passwordRegex.test(str) === false) return true;
  else return false;
}
export function isInvalidURL(url) {
  let urlRegex =
    /^(?:https?:\/\/(?:www\.)?|www\.)[a-z0-9]+(?:[-.][a-z0-9]+)*\.[a-z]{2,5}(?::[0-9]{1,5})?(?:\/\S*)?$/;

  return url.match(urlRegex) === null;
}

export function notValidNumber(str) {
  const reg = new RegExp('^[0-9]+$');

  return !reg.test(str);
}
