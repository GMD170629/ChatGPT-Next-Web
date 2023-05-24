const tokenKey = "qingline_token";
const userinfoKey = "qingline_userinfo";
// @ts-ignore
import Cookies from "js-cookie";

export function setToken(token: string) {
  let domain = document.domain;
  let flag = domain.indexOf(".qingline.net") != -1;
  if (flag) {
    return Cookies.set(tokenKey, token, { domain: ".qingline.net" });
  } else {
    return Cookies.set(tokenKey, token);
  }
}
export function getToken() {
  return Cookies.get(tokenKey);
}
export function getBearToken() {
  return "Bearer " + Cookies.get(tokenKey);
}
export function removeToken() {
  let domain = document.domain;
  let flag = domain.indexOf(".qingline.net") != -1;
  if (flag) {
    return Cookies.remove(tokenKey, { domain: ".qingline.net" });
  } else {
    return Cookies.remove(tokenKey);
  }
}

export function setUserInfo(data: object) {
  let domain = document.domain;
  let flag = domain.indexOf(".qingline.net") != -1;
  if (flag) {
    return Cookies.set(userinfoKey, JSON.stringify(data), {
      domain: ".qingline.net",
    });
  } else {
    return Cookies.set(userinfoKey, JSON.stringify(data));
  }
  console.log(data);
}
export function getUserInfo() {
  return Cookies.get(userinfoKey);
}
export function getUser() {
  let user = getUserInfo();
  if (user) {
    return JSON.parse(user);
  } else {
    return null;
  }
}
export function removeUserInfo() {
  return Cookies.remove(userinfoKey);
}
