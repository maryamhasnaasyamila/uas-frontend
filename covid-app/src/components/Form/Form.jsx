import styles from "./Form.module.css";
import gambar from "../../assets/pict2.png";

function Form({ setKey, setProvinsi, dataProvinsi, dataIndonesia, setIndonesia }) {
  function handleClick() {
    event.preventDefault();

    // mengambil elemen form
    const input_kota = document.getElementById("kota").value;
    const input_status = document.getElementById("status").value;
    let input_jumlah = document.getElementById("jumlah").value;

    // ubah type data jumlah jadi integer
    input_jumlah = parseInt(input_jumlah);

    // buat duplikasi data
    const new_dataProvinsi = dataProvinsi;

    // mengedit data table
    new_dataProvinsi.map((province) => {
      if (province.name === input_kota) {
        province.numbers[input_status] += input_jumlah;
      }
    });

    const new_dataIndonesia = dataIndonesia;

    const dictionary = {
      confirmed: "confirmed",
      recovered: "recovered",
      death: "death",
      treatment: 'treatment'
    };

    new_dataIndonesia.map((card) => {
      if (dictionary[input_status] == card.status) {
        card.total += input_jumlah;
      }
    });
    // set state baru
    setProvinsi(new_dataProvinsi);
    setIndonesia(new_dataIndonesia);
    setKey(prevKey => prevKey + 1);
  }

  return (
    <div className={styles.container}>
      <section className={styles.form}>
        <form action="" method="POST">
          <div className={styles.covid__container}>
            <div className={styles.covid__image}>
              <img src={gambar} alt="pict 2" /> <br />
            </div>

            <div className={styles.covid__details}>
              <h2 className={styles.covids__title}>Add Data</h2>
              <div className={styles.covid__title}>
                <p>Provinsi</p>
                <select name="provinces" id="kota">
                  {dataProvinsi.map((provinces) => (
                    <option key={provinces.name} value={provinces.name}>
                      {provinces.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className={styles.covid__status}>
                <p>Status</p>
                <select name="status" id="status">
                  <option value="">Pilih Status</option>
                  <option value="recovered">Sembuh</option>
                  <option value="confirmed">Positif</option>
                  <option value="treatment">Dirawat</option>
                  <option value="death">Meninggal</option>
                </select>
              </div>
              <div className={styles.covid__jumlah}>
                <p>Jumlah</p>
                <input type="number" name="jumlah" placeholder="" id="jumlah" />
              </div>

              <div className={styles.submit}>
                <button onClick={handleClick} id="submit-btn">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Form;
