import { useState } from "react";
import React from "react";
import axios from "axios";
import CovidGlobal from "../../components/CovidGlobal/CovidGlobal";
import Hero from "../../components/Hero/Hero";
import SituationsReg from "../../components/SituationsReg/SituationsReg";
import data_url from "../../utils/constants/api-covid";

function GlobalPage() {
  const [dataUrl] = useState(data_url);
  var [dataGlobal, setGlobal] = React.useState(null);

  React.useEffect(() => {
    axios.get(dataUrl.api.global).then((response) => {
      setGlobal(response.data);
      console.log(response.data);
    });
  }, []);
  console.log(dataGlobal);
  if (!dataGlobal) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Hero />
      <CovidGlobal dataGlobal={dataGlobal.global}/>
      <SituationsReg dataRegions={dataGlobal.regions} />
    </div>
  );
}

export default GlobalPage;
