import styles from "./CovidIDN.module.css";

function CovidIDN({ data }) {

  return (
    <section className={styles.container}>
      <div className={styles.covididn}>
        <h1 className={styles.covididn__title}>Indonesia Situation</h1>
        <p className={styles.covididn__desc}>
          Data Covid Berdasarkan Indonesia
        </p>

        <div className={styles.covididn__container}>
          <div key="Positif" className={styles.covididn__content}>
            <h3 className={styles.covididn__status}>Positif</h3>
            <h1 className={styles.covididn__case1}>{data[0].total}</h1>{" "}
          </div>
          <div key="Sembuh" className={styles.covididn__content}>
            <h3 className={styles.covididn__status}>Sembuh</h3>
            <h1 className={styles.covididn__case1}>{data[1].total}</h1>{" "}
          </div>
          <div key="Meninggal" className={styles.covididn__content}>
            <h3 className={styles.covididn__status}>Meninggal</h3>
            <h1 className={styles.covididn__case1}>{data[2].total}</h1>{" "}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CovidIDN;
