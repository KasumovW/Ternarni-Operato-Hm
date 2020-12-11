import Onetask from "./Onetask";
import React, {useState} from "react";
import TwoTask from "./TwoTask";
import ThreeTask from "./ThreeTask";

function AApp() {
  return (
      <Onetask />,
          <TwoTask />,
                <ThreeTask />,
    <div>
      <div className={'React'}>REACT</div>
    </div>
  );
}

export default AApp;
