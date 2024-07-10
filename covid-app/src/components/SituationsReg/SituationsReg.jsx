import styles from "./SituationsReg.module.css";
import React from "react";
import axios from "axios";

const baseURL = "https://covid-fe-2023.vercel.app/api/global.json";

function SituationsReg() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData(response.data);
    });
  }, []);

  if (!data) return null;

  return (
    <section className={styles.container}>
      <div className={styles.situations__container}>
        <h1 className={styles.covidglobal__title}>Situation by Regions</h1>
        <p className={styles.covidglobal__desc}>Bacaan Pilihan Covid</p>

        <div className={styles.covidglobal__container}>
          {data.regions.map((region, index) => (
            <div key={index} className={styles.covidglobal__content}>
              <h2 className={styles.covidglobal__region}>{region.name}</h2>
              <div className={styles.covid__data}>
                <div className={styles.confirmed}>
                  <div className={styles.list1}>
                    <p>Confirmed</p>
                    <h3>{region.numbers.confirmed}</h3>
                  </div>
                  <i>icon</i>
                </div>
              </div>
              <div className={styles.covid__data}>
                <div className={styles.recovered}>
                  <div className={styles.list2}>
                    <p>Recovered</p>
                    <h3>{region.numbers.recovered}</h3>
                  </div>
                  <i>icon</i>
                </div>
              </div>
              <div className={styles.covid__data}>
                <div className={styles.death}>
                  <div className={styles.list3}>
                    <p>Death</p>
                    <h3>{region.numbers.death}</h3>
                  </div>
                  <i>icon</i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SituationsReg;
