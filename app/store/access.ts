import { create } from "zustand";
import { persist } from "zustand/middleware";
import { StoreKey } from "../constant";
import { getHeaders } from "../client/api";
import { BOT_HELLO } from "./chat";
import { ALL_MODELS } from "./config";
import { getBearToken, getToken, getUser, setToken } from "@/app/utils/token";

export interface AccessControlStore {
  accessCode: string;
  token: string;

  needCode: boolean;
  hideUserApiKey: boolean;
  openaiUrl: string;

  updateToken: (_: string) => void;
  getBearToken: () => string;
  updateCode: (_: string) => void;
  enabledAccessControl: () => boolean;
  isAuthorized: () => boolean;
  isVip: () => boolean;
  fetch: () => void;
}

let fetchState = 0; // 0 not fetch, 1 fetching, 2 done

export const useAccessStore = create<AccessControlStore>()(
  persist(
    (set, get) => ({
      token: "",
      accessCode: "",
      needCode: true,
      hideUserApiKey: false,
      openaiUrl: "/api/openai/",

      enabledAccessControl() {
        get().fetch();

        return get().needCode;
      },
      updateCode(code: string) {
        set(() => ({ accessCode: code }));
      },
      updateToken(token: string) {
        // const currentToken = get().token;
        // if (token !== currentToken) {
        //     set(() => ({ token }));
        // }
        setToken(token);
      },
      getBearToken() {
        // const currentToken = get().token;
        // if (token !== currentToken) {
        //     set(() => ({ token }));
        // }
        return getToken();
      },
      isVip() {
        /*判断是否购买产品，但是现在是后台直接判断的权限，暂时没有使用*/
        let user = getUser();
        return user.isVip == 1;
      },
      isAuthorized() {
        // get().fetch();
        // // has token or has code or disabled access control
        // return get().token != "";

        return getToken() != "";
      },
      fetch() {
        if (fetchState > 0) return;
        fetchState = 1;
        fetch("/api/config", {
          method: "post",
          body: null,
          headers: {
            ...getHeaders(),
          },
        })
          .then((res) => res.json())
          .then((res: DangerConfig) => {
            console.log("[Config] got config from server", res);
            set(() => ({ ...res }));

            if (!res.enableGPT4) {
              ALL_MODELS.forEach((model) => {
                if (model.name.startsWith("gpt-4")) {
                  (model as any).available = false;
                }
              });
            }

            if ((res as any).botHello) {
              BOT_HELLO.content = (res as any).botHello;
            }
          })
          .catch(() => {
            console.error("[Config] failed to fetch config");
          })
          .finally(() => {
            fetchState = 2;
          });
      },
    }),
    {
      name: StoreKey.Access,
      version: 1,
    },
  ),
);
