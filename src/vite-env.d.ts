/// <reference types="vite/client" />
import { AttributifyAttributes } from "windicss/types/jsx";

declare module "react" {
  /* eslint-disable */
  interface HTMLAttributes<T> extends AttributifyAttributes {}
}

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  // 自定义的环境变量
  readonly VITE_IMG_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
