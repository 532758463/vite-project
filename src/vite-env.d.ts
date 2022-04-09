/// <reference types="vite/client" />
import { AttributifyAttributes } from "windicss/types/jsx";

declare module "react" {
  /* eslint-disable */
  interface HTMLAttributes<T> extends AttributifyAttributes {}
}
