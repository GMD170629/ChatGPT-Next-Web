import { getBearToken } from "@/app/utils/token";
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
export const createChat = async () => {
  let token = getBearToken();
  myHeaders.append("Authorization", token);
  const response = await fetch("https://apitest.qingline.net/api/chat/create", {
    method: "POST",
    headers: myHeaders,
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
