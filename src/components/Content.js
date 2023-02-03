import React from "react";
import "./content.css";
import timezones from "../timezones.json";
import { useState } from "react";

const Content = () => {
  console.log(timezones);

  const [timezonesList, setTimezonesList] = useState(timezones);

  console.log("bau", timezonesList);
  return (
    <div>
      <select name="cars" id="cars">
        {/* <option value="volvo">set</option> */}
      </select>
    </div>
  );
};

export default Content;
