import crypto from 'crypto';

export function readUserCookie(cookie) {
  let result = "{}";

  let name = "YVCookie=";
  let decodedCookie = getCookie(name.slice(0, -1), decodeURIComponent(cookie));
  let decryptedCookie = name + decryptCookie(decodedCookie, "MaximReleaseAutomation$123");
  let ca = decryptedCookie.split(';');

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      result = c.substring(name.length, c.length);
      return result ? result : '{}';
    }
  }

  return result;
}

export function isCookie(documentCookie) {
  let currentUser = {};

  if (documentCookie) {
    let cookie = readUserCookie(documentCookie);

    if (cookie.length) {
      currentUser = JSON.parse(cookie);
    }
  }

  return !!currentUser.id;
}

export function encryptCookie(cookie, password) {
  const cipher = crypto.createCipher('aes256', password);

  let encrypted = cipher.update(cookie, 'utf8', 'hex');
  encrypted += cipher.final('hex');

  return encrypted;
}

export function decryptCookie(cookie, password) {
  let decrypted = "";

  try {
    const decipher = crypto.createDecipher('aes256', password);

    decrypted = decipher.update(cookie, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
  } catch (e) {
    decrypted = "";
  }

  return decrypted;
}

export function getCookie(name, cookie) {
  let result = "";
  let value = "; " + cookie;
  let parts = value.split("; " + name + "=");

  if (parts.length === 2) {
    result = parts.pop().split(";").shift();
  }

  return result;
}

export function saveCookie(newUser) {
  let user, date, encryptedUserCookie;
      user = Object.assign({}, newUser, { authenticated: true });
      date = new Date();
      date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
      encryptedUserCookie = encryptCookie(`${JSON.stringify(user)}`, "MaximReleaseAutomation$123");

  document.cookie = `YVCookie=${encryptedUserCookie};expires=${date.toUTCString()};path=/`;

  return user;
}