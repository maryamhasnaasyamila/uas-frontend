import styles from "./CovidPROV.module.css";

function CovidPROV({dataProvinsi}) {
  return (
    <section className={styles.container}>
      <div className={styles.covidprov}>
        <h1 className={styles.covidprov__title}>Provinsi</h1>
        <p className={styles.covidprov__desc}>
          Data Covid Berdasarkan Provinsi
        </p>

        <div className={styles.covidprov__container}>
          <table className={styles.covid__table}>
            <thead>
              <tr className={styles.covid__row}>
                <th className={styles.covid__thead}>No</th>
                <th className={styles.covid__thead}>Provinsi</th>
                <th className={styles.covid__thead}>Positif</th>
                <th className={styles.covid__thead}>Sembuh</th>
                <th className={styles.covid__thead}>Dirawat</th>
                <th className={styles.covid__thead}>Meninggal</th>
              </tr>
            </thead>
            <tbody>
              {dataProvinsi.map((province, index) => (
                <tr key={index} className={styles.covid__row}>
                  <td className={styles.covid__data}>{index + 1}</td>
                  <td className={styles.covid__data}>{province.name}</td>
                  <td className={styles.covid__data}>{province.numbers.confirmed} </td>
                  <td className={styles.covid__data}>{province.numbers.recovered} </td>
                  <td className={styles.covid__data}>{province.numbers.treatment} </td>
                  <td className={styles.covid__data}>{province.numbers.death} </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default CovidPROV;
