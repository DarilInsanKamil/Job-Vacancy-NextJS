"use client";
import styles from "@/styles/comp.module.css";
import { ProfilePanel } from "./profile";
import Image from "next/image";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export const HeaderBar = () => {
  const [trigger, setTrigger] = useState(false);
  const router = useRouter();
  const [data, setData] = useState({
    user: "Login",
    image: "./icon/dash.svg",
    token: "",
  });

  useEffect(() => {
    const fetchDataFromCookies = () => {
      const token = Cookies.get("token");
      if (token) {
        setData({
          user: Cookies.get("user"),
          image: Cookies.get("image"),
        });
      } else {
        // If user is not logged in, reset the data to default values
        setData({
          user: "Login dulu",
          image: "./icon/person.svg",
        });
      }
    };

    fetchDataFromCookies(); // Fetch data on the initial render
  }, []);

  const handleNav = () => {
    let token = Cookies.get("token") || null;
    if (token !== null) {
      router.push("/upload-job");
    } else {
      router.push("/login");
    }
  };

  return (
    <nav className={styles.headerContainer}>
      <section className={styles.logo}>
        <Image
          src="./logo.svg"
          alt="logo"
          width={72}
          height={52}
          priority={true}
        />
      </section>
      <section className={styles.nav}>
        <ul>
          <li onClick={() => router.push("/job-vacancy")}>Find Job</li>

          <li onClick={handleNav}>Upload Job</li>
          <li onClick={() => router.push("/about-us")}>About Us</li>
        </ul>
      </section>
      <section className={styles.profile}>
        <ProfilePanel user={data.user} image={data.image} />
      </section>
    </nav>
  );
};
