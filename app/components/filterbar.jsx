import styles from '../../styles/comp.module.css'

export const FilterBar = ({ closebtn }) => {
    return (
        <div className={styles.filterContainer}>
            <form>
                <section className={styles.titleContainer}>
                    <p className={styles.titleData}>12 <span>Job match</span></p>
                    <p className={styles.titleFilter}>clear filter</p>
                </section>
                <section className={styles.labelContainer}>
                    <p className={styles.titleLabel}>Location</p>
                </section>
                <div className={styles.locContainer}>
                    <img src='./icon/locgrey.svg' alt="iconloc" width={14} height={14} />
                    <input type="text" id="loc" name="loc" placeholder='which location' className={styles.locInput} />
                </div>
                <section className={styles.fieldWrapper}>
                    <section className={styles.labelContainer}>
                        <p className={styles.titleLabel}>Job Type</p>
                    </section>
                    <div className={styles.checkDivider}>
                        <div className={styles.checkLeft}>
                            <div className={styles.checkWrapper}>
                                <input type="checkbox" id="type5" name="type5" value="Intern" />
                                <label htmlFor="type5"> Intern</label>
                            </div>
                            <div className={styles.checkWrapper}>
                                <input type="checkbox" id="type1" name="type1" value="Part time" />
                                <label htmlFor="type1"> Part time</label>
                            </div>
                        </div>
                        <div className={styles.checkLeft}>
                            <div className={styles.checkWrapper}>
                                <input type="checkbox" id="type2" name="type2" value="Fulltime" />
                                <label htmlFor="type2"> Fulltime</label>
                            </div>
                            <div className={styles.checkWrapper}>
                                <input type="checkbox" id="type3" name="type3" value="Contract" />
                                <label htmlFor="type3"> Contract</label>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.fieldWrapper}>
                    <section className={styles.labelContainer}>
                        <p className={styles.titleLabel}>Experience</p>
                    </section>
                    <div className={styles.checkDivider}>
                        <div className={styles.checkLeft}>
                            <div className={styles.checkWrapper}>
                                <input type="checkbox" id="exp1" name="exp1" value="Junior" />
                                <label htmlFor="exp1"> Early</label><br></br>
                            </div>
                            <div className={styles.checkWrapper}>
                                <input type="checkbox" id="exp2" name="exp1" value="Middle" />
                                <label htmlFor="exp2"> Mid</label><br></br>
                            </div>
                        </div>
                        <div className={styles.checkLeft}>
                            <div className={styles.checkWrapper}>
                                <input type="checkbox" id="exp3" name="exp1" value="Senior" />
                                <label htmlFor="exp3"> Advance</label><br></br>
                            </div>
                            <div className={styles.checkWrapper}>
                                <input type="checkbox" id="exp4" name="exp1" value="Expert" />
                                <label htmlFor="exp4"> Director+</label><br></br>
                            </div>
                        </div>
                    </div>
                </section>
                <button className={styles.btnfilter}>Filter</button>
            </form>
            <button className={styles.btnclose} onClick={closebtn}>Tutup</button>
        </div>
    )
}