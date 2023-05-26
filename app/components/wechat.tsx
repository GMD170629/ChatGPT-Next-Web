import { setToken } from "@/app/utils/token";
import { useAccessStore } from "@/app/store";
import { useSearchParams } from "react-router-dom";
import { getUserInfoFormApi } from "@/app/utils/login";
import { Path } from "../constant";

export function Wechat() {
  const accessStore = useAccessStore();
  const [searchParams, setSearchParams] = useSearchParams();
  const access_token = searchParams.get("access_token");
  if (!access_token) {
    window.open("#" + Path.Login, "_self");
  } else {
    setToken(access_token);
    let bearToken = "Bearer " + access_token;
    accessStore.updateToken(access_token);
    getUserInfoFormApi().then(() => {
      window.open("/", "_self");
    });
  }
  return <div></div>;
}
