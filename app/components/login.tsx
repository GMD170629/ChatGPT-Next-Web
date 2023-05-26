import { useEffect, useState } from "react";
import { getLoginCode } from "@/app/api/login";
import styles from "./login.module.scss";
import { login, getUserInfoFormApi } from "@/app/utils/login";
import { getToken } from "@/app/utils/token";
import { isWeixin } from "@/app/utils/function";
import { useAccessStore } from "@/app/store";
import { useNavigate } from "react-router-dom";
import { Path } from "../constant";
export default function LoginPage() {
  const accessStore = useAccessStore();
  let token = "";
  let interval = setInterval(() => {
    if (token !== "") {
      login(token).then(() => {
        let newToken = getToken();
        accessStore.updateToken(newToken);
        clearInterval(interval);
        getUserInfoFormApi().then(() => {
          window.open("/", "_self");
        });
      });
    }
  }, 2000);

  const [loginCode, setLoginCode] = useState("");
  // Fetch login code from API
  useEffect(() => {
    if (isWeixin()) {
      let redirect = "https://gpt.qingline.net/wechat";
      redirect = encodeURIComponent(redirect);
      let url = `https://api.qingline.net/api/wechat/login/web?redirect=${redirect}`;
      window.open(url, "_self");
    } else {
      const fetchLoginCode = async () => {
        const data = await getLoginCode();
        setLoginCode(data.ticket);
        token = data.token;
      };
      fetchLoginCode();
    }
  }, []);

  return (
    <div className={styles["login_box"]}>
      {loginCode ? (
        <div className={styles["title_box"]}>
          <h5>微信扫码登录</h5>
          <div className={styles["img_box"]}>
            <img
              src={`https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=${loginCode}`}
              alt="Login QR Code"
            />
          </div>
        </div>
      ) : (
        <div className={styles["loading"]}>Loading...</div>
      )}
    </div>
  );
}
