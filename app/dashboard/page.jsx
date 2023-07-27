"use client";
import React from "react";
import { Tabelcomp } from "./tabel";
import styles from "@/styles/dashboard.module.css";
import Link from "next/link";

export default function Dashboard() {
  return (
    <table className={styles.container}>
      <thead>
        <tr>
          <th className={styles.head}>Job Name</th>
          <th className={styles.head}>Company Name</th>
          <th className={styles.fit}>Job Type</th>
          <th className={styles.fit}>Job Tenure</th>
          <th className={styles.head}>Salary</th>
          <th className={styles.fit}>Job Status</th>
          <th className={styles.head}>Action</th>
        </tr>
      </thead>
      <Tabelcomp />
    </table>
  );
}
