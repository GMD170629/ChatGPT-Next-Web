// BEGIN: 5b3c4d7f7d5c
export const getLoginCode = async () => {
  const response = await fetch(
    "https://www.qingline.net/api/wechat/login-code",
  );
  const data = await response.json();
  return data.data;
};
