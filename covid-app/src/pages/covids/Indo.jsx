import { useState } from "react";
import React from "react";
import axios from "axios";
// import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import CovidIDN from "../../components/CovidIDN/CovidIDN";
import CovidPROV from "../../components/CovidPROV/CovidPROV";
import data_url from "../../utils/constants/api-covid";

function IndoPage() {
  const [dataUrl] = useState(data_url);
  var [dataIndo, setIndo] = React.useState(null);

  React.useEffect(() => {
    axios.get(dataUrl.api.indonesia).then((response) => {
      setIndo(response.data);
    });
  }, []);
  console.log(dataIndo);
  if (!dataIndo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <CovidIDN
        data={dataIndo.indonesia}
      />
      <CovidPROV
        dataProvinsi={dataIndo.regions}
      />
      {/* <Footer /> */}
    </div>
  );
  return null;
}

export default IndoPage;
