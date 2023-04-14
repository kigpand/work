import Link from "next/link";
import styles from "./notFound.module.scss";

export default function NotFountPage() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgb(88, 88, 88)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        flexDirection: "column",
        fontSize: "25px",
      }}
    >
      Page Not Found.
    </div>
  );
}
