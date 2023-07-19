import { getBearToken } from "@/app/utils/token";
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
let token = getBearToken();
myHeaders.append("Authorization", token);
export const createChat = async () => {
  const response = await fetch("https://apitest.qingline.net/api/chat/create", {
    method: "POST",
  });
  const res = await response.json();
  return res;
};
/*pushChatMessage data{
    "content": "",
    "role": "",
    "model": "" //非必传
}*/
export const pushChatMessage = async (id: number, data: object) => {
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
export const getGpt4vip = async () => {
  const response = await fetch(
    "https://apitest.qingline.net/api/user/vip/gpt4vip",
    {
      method: "get",
      headers: myHeaders,
    },
  );
  const res = await response.json();
  return res;
};
