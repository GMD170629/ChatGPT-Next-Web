import { getBearToken } from "@/app/utils/token";
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

export const createChat = () => {
  let token = getBearToken();

  var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://apitest.qingline.net/api/chat/create", false);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("Authorization", token);
  xhr.send();
  return JSON.parse(xhr.responseText);
};
/*pushChatMessage data{
    "content": "",
    "role": "",
    "model": "" //非必传
}*/
export const pushChatMessage = async (id: number, data: object) => {
  let token = getBearToken();
  myHeaders.append("Authorization", token);
  const response = await fetch(
    "https://apitest.qingline.net/api/chat/" + id + "/push-message",
    {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(data),
    },
  );
  const res = await response.json();
  return res;
};
