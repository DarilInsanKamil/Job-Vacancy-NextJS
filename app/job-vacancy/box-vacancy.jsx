"use client";
import { tandaPemisahTitik } from "@/utils/convert";
import { useState } from "react";
import styles from "@/styles/card.module.css";
import Link from "next/link";
import Image from "next/image";

export const BoxVacancy = ({
  title,
  company_image_url,
  company_name,
  company_city,
  job_status,
  job_description,
  salary_min,
  salary_max,
  job_type,
  tenure,
  navigation,
}) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const toggleBookmark = () => {
    setIsBookmarked((prev) => !prev); // Toggle nilai isBookmarked ketika tombol diklik
  };
  const min = tandaPemisahTitik(salary_min) || null;
  const max = tandaPemisahTitik(salary_max) || null;
  return (
    <div className={styles.container}>
      <div className={styles.headerWrapper}>
        <div className={styles.headerContainer}>
          <Image
            src={company_image_url}
            width={52}
            height={52}
            quality={100}
            alt={company_name}
          />
          <section className={styles.titleContainer}>
            <p className={styles.title}>{title}</p>
            <p className={styles.compName}>
              {company_name} &#x2022; {job_status == 1 ? "aktif merekrut" : ""}
            </p>
          </section>
        </div>
        <img
          src={isBookmarked ? "/icon/bookmark-fill.svg" : "/icon/bookmark.svg"}
          width={20}
          height={20}
          alt="icon bookmark"
          onClick={toggleBookmark}
        />
      </div>
      <p className={styles.jobdesc}>{job_description}</p>
      <div className={styles.footJob}>
        <p>{company_city}</p>
        <p className={styles.salary}>
          IDR{min} - IDR{max}
        </p>
        <section className={styles.tenType}>
          <div className={styles.tenWrapper}>
            <div className={styles.type}>
              <p>{job_type}</p>
            </div>
            <div className={styles.tenure}>
              <p>{tenure}</p>
            </div>
          </div>
          <button className={styles.btnlearn}>
            <Link href={navigation}>Learn more</Link>
          </button>
        </section>
      </div>
    </div>
  );
};
