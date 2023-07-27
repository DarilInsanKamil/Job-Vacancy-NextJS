import Link from "next/link";
import styles from "@/styles/comp.module.css";
import { ProfilePanel } from "./profile";
import Image from "next/image";
export const HeaderBar = ({user, image}) => {

  return (
    <nav className={styles.headerContainer}>
      <section className={styles.logo}>
        <Image src="./logo.svg" alt="logo" width={72} height={52} priority={true}/>
      </section>
      <section className={styles.nav}>
        <ul>
          <li>
            <Link href="/job-vacancy">Find Job</Link>
          </li>
          <li>
            <Link href="/upload-job">Upload Job</Link>
          </li>
          <li>
            <Link href="/about-us">About Us</Link>
          </li>
        </ul>
      </section>
      <section className={styles.profile}>
        <ProfilePanel user={user} image={image} />
      </section>
    </nav>
  );
};
