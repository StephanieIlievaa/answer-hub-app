import { ReactNode } from "react";
import styles from "./Backdrop.module.scss"

export interface Backdrop {
  handleClose: () => void;
  children: ReactNode;
}

export default function ({ handleClose, children }: Backdrop) {
  return <div onClick={handleClose} className={styles.backdrop}>{children}</div>;
}
