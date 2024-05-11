import { PropsWithChildren } from "react";
import { JsxElement } from "typescript";

export interface PopUpContextType {
  showPopUp: (component: JSX.Element) => void
}
