import styles from "./Hero.module.css";
import gambar from "../../assets/pict1.png";

function Hero() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h2 className={styles.hero__title}>Covid ID</h2>
          <h3 className={styles.hero__genre}>
            Monitoring Perkembangan Covid
          </h3>
          <p className={styles.hero__description}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
            vitae libero ducimus veritatis facilis, reprehenderit perspiciatis
            aut fuga aliquid aperiam, sit tempore quod incidunt nostrum! Ducimus
            quae debitis itaque nihil.
          </p>
          <button className={styles.hero__button}>Vaccine</button>
        </div>
        <div className={styles.hero__right}>
          <img
            className={styles.hero__image}
            src={gambar}
            alt="pict 1"
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;