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
      <select name="timezone" id="timezone">
        {timezonesList.map((item) => {
          return <option value={item.utc}>{item.label}</option>;
        })}
      </select>
    </div>
  );
};

export default Content;
