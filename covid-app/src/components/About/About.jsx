import styles from "./About.module.css";
import gambar from "../../assets/covid.png";

function About() {
  return (
    <section className={styles.container}>
      <h1 className={styles.about__title}>About Covid</h1>
      <div className={styles.about}>
        <img className={styles.about__image} src={gambar} alt="pict covid" />
        <div className={styles.desc}>
          <p className={styles.about__desc}>
            COVID-19 adalah penyakit pernapasan menular yang disebabkan oleh
            virus SARS-CoV-2. Virus ini pertama kali diidentifikasi di Wuhan,
            China, pada akhir tahun 2019 dan sejak itu telah menyebar ke seluruh
            dunia, menyebabkan pandemi global.
          </p> <br />
          <p className={styles.about__desc}>
            Website ini adalah platform visualisasi data COVID-19 yang
            komprehensif untuk Indonesia. Disini, Anda bisa melihat perkembangan
            pandemi secara aktual, baik di tingkat nasional maupun provinsi.
            Situs web yang ramah pengguna ini melayani berbagai audiens, mulai
            dari pejabat pemerintah dan profesional kesehatan hingga masyarakat
            umum dan peneliti.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
