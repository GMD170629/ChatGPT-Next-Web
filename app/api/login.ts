// BEGIN: 5b3c4d7f7d5c
import { getToken } from "@/app/utils/token";

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
export const getLoginCode = async () => {
  const response = await fetch(
    "https://api.qingline.net/api/wechat/login-code",
  );
  const res = await response.json();
  return res.data;
};
export const tokenLogin = async (data: any) => {
  const response = await fetch(
    "https://api.qingline.net/api/wechat/token-login",
    {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(data),
    },
  );
  const res = await response.json();
  return res;
};

export const getUserInfo = async () => {
  let token = getToken();
  myHeaders.append("Authorization", token);
  const response = await fetch("https://api.qingline.net/api/user/info", {
    method: "GET",
    headers: myHeaders,
  });
  const res = await response.json();
  return res;
};
