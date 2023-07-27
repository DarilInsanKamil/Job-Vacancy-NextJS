"use client";
import React, { useState } from "react";
import { Vacancy } from "./vacancy-map";
import SectionResult from "./[slug]/sectionResult";
import { SearchBar, FilterBar } from "../components";
import styles from "@/styles/job-vacancy.module.css";

export default function JobVacancy() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(true);

  const onSearch = (e) => {
    e.preventDefault();
    const inputQuery = e.target[0].value;
    setQuery(inputQuery);
  };
  const handleOpen = () => {
    setOpen((prev) => !prev);
  };
  return (
    <main className={styles.container}>
      <section className={styles.sidebar}>
        <FilterBar />
      </section>
      <section className={styles.main}>
        <SearchBar onSearch={onSearch} />
        <button className={styles.filterMbl} onClick={handleOpen}>
          <img src="./icon/filter.svg" alt="filter-icon" />
          Filter
        </button>
        <section className={open ? styles.filterPop : styles.filterPop1}>
          <FilterBar closebtn={handleOpen} />
        </section>
        <div className={styles.listJobRow}>
          {query && <SectionResult query={query} setQuery={setQuery} />}
          {!query && <Vacancy />}
        </div>
      </section>
    </main>
  );
}
