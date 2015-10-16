const sanitizer = require('sanitizer');

export function isDefined(val) {
  return val && typeof val !== 'undefined' && val !== null;
}

export function scrub(text) {
  if (isDefined(text)) {

    //clip the string if it is too long
    if (text.length > 65535) {
      text = text.substr(0,65535);
    }

    return text === false || text === true ?
      text :
      sanitizer.sanitize(text);
  } else {
    return null;
  }
}
