import React from "react";
import "./content.css";
import timezones from "../timezones.json";
import { useState } from "react";

const Content = () => {
  const [timezonesList, setTimezonesList] = useState(timezones);

  return (
    <div>
      <select name="timezone" id="timezone">
        {timezonesList.map((item, index) => {
          return (
            <option key={index} value={item.utc}>
              {item.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Content;
