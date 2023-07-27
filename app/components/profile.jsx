"use client";
import styles from "@/styles/comp.module.css";
import Cookies from "js-cookie";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Logout } from "@/utils/logout";

export const ProfilePanel = ({ user, image }) => {
  const [display, setDisplay] = useState(false);
  const router = useRouter();
  const handleLogout = () => Logout(router);

  const handleLogin = () => {
    router.push("./login");
  };
  const handlePassword = () => {
    router.push("/change-password");
  };
  const handleDashboard = () => {
    router.push("/dashboard");
  };
  const handleDisplay = () => {
    if (Cookies.get("user") == null) {
      router.push("./login");
      setDisplay(false);
    } else {
      setDisplay(!display);
    }
  };
  return (
    <>
      <div className={styles.profileContainer} onClick={handleDisplay}>
        <Image
          src={image}
          alt="profile-pict"
          className={styles.imgprofile}
          draggable="false"
          width={32}
          height={32}
        />
        <p>{user}</p>
        <Image
          src="./icon/arrowdrop.svg"
          alt="iconarrow"
          width={10}
          height={6}
        />
      </div>
      <div className={display ? styles.navFloat : styles.navVisible}>
        <section className={styles.password} onClick={handleDashboard}>
          <span>
            <Image width={20} height={20} src="./icon/dash.svg" alt="dash-icon" />
          </span>
          Dashboard
        </section>
        <section onClick={handlePassword}>
          <span>
            <Image width={20} height={20} src="./icon/seting.svg" alt="setting-icon" />
          </span>
          Change Password
        </section>
        <section className={styles.signOut} onClick={handleLogout}>
          <span>
            <Image width={20} height={20} src="./icon/signout.svg" alt="signout-icon" />
          </span>
          Sign Out
        </section>
      </div>
    </>
  );
};
