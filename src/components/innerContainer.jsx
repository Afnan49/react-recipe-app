import style from "./container.module.css";
export default function InnerContainer({ children }) {
  return <div className={style.inner_container}>{children}</div>;
}
