import { useState, useEffect } from "react";
import axios from "axios";
import Hero from "../../components/Hero/Hero";
import CovidPROV from "../../components/CovidPROV/CovidPROV";
import Form from "../../components/Form/Form";
import data_url from "../../utils/constants/api-covid";

function ProvPage() {
  const [dataUrl] = useState(data_url);
  const [dataIndonesia, setIndonesia] = useState(null);
  const [dataProvinsi, setProvinsi] = useState(null);
  const [key, setKey] = useState(0);

  useEffect(() => {
    axios.get(dataUrl.api.indonesia)
      .then((response) => {
        setIndonesia(response.data.indonesia);
        setProvinsi(response.data.regions);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (!dataIndonesia || !dataProvinsi) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Hero />
      <CovidPROV dataProvinsi={dataProvinsi} />
      <Form
        dataProvinsi={dataProvinsi}
        setProvinsi={setProvinsi}
        dataIndonesia={dataIndonesia}
        setIndonesia={setIndonesia}
        setKey={setKey}
      />
    </div>
  );
}

export default ProvPage;
