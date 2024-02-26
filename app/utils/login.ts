import { tokenLogin, getUserInfo } from "@/app/api/login";
import {
  removeUserInfo,
  setToken,
  setUserInfo,
  removeToken,
} from "@/app/utils/token";

export function login(token: string) {
  return new Promise((resolve, reject) => {
    tokenLogin({ token: token })
      .then((res) => {
        console.log(res);
        if (res.access_token) {
          setToken(res.access_token);
          resolve(res);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
}
export function getUserInfoFormApi() {
  return new Promise((resolve, reject) => {
    getUserInfo()
      .then((res) => {
        let { code, data } = res;
        if (code == 0) {
          setUserInfo(data);
          console.log("setUserInfo");
          resolve(res);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function resetToken(): Promise<any> {
  return new Promise((resolve, reject) => {
    removeToken();
    removeUserInfo();
    let ref;
    resolve(ref);
  });
}
