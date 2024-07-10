import styles from "./CovidGlobal.module.css";

function CovidGlobal({ dataGlobal }) {
  return (
    <section className={styles.container}>
      <div className={styles.covidglobal}>
        <h1 className={styles.covidglobal__title}>Global Situation</h1>
        <p className={styles.covidglobal__desc}>
          Data Covid Berdasarkan Global
        </p>

        <div className={styles.covidglobal__container}>
          <div className={styles.covidglobal__content}>
            <h3 className={styles.covidglobal__status}>Confirmed</h3>
            <h1 className={styles.covidglobal__case1}>{dataGlobal[0].total}</h1>
          </div>

          <div className={styles.covidglobal__content}>
            <h3 className={styles.covidglobal__status}>Recovered</h3>
            <h1 className={styles.covidglobal__case1}>{dataGlobal[1].total}</h1>
          </div>

          <div className={styles.covidglobal__content}>
            <h3 className={styles.covidglobal__status}>Death</h3>
            <h1 className={styles.covidglobal__case1}>{dataGlobal[2].total}</h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CovidGlobal;
