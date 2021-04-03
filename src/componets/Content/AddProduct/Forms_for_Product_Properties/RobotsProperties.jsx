import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
const RobotsProperties = ({ setProperties }) => {
  const [brend, setBrend] = useState("Xiaomi");
  const [country, setCountry] = useState("Китай");
  const [color, setColor] = useState("чорний");
  const [volumeOfBattery, setVolumeOfBattery] = useState(5000);
  const [chargingHour, setChargingHour] = useState(90);
  const [maxTime, setMaxTime] = useState(15);
  const [weigth, setWeigth] = useState(5);

  useEffect(() => {
    setProperties({
      brend,
      country,
      color,
      volumeOfBattery,
      chargingHour,
      maxTime,
      weigth,
    });
  }, [brend, country, color, volumeOfBattery, chargingHour, maxTime, weigth]);
  return (
    <Grid container spacing={2} item xs={12}>
      <Grid container item spacing={2} direction="row">
        <Grid item xs={6}>
          <TextField
            style={{ width: "100%" }}
            label="Бренд"
            id="outlined-size-small"
            variant="outlined"
            defaultValue={brend}
            onChange={(e) => setBrend(e.target.value)}
            onFocus={(e) => e.target.select()}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            style={{ width: "100%" }}
            label="Країна"
            id="outlined-size-small"
            variant="outlined"
            defaultValue={country}
            onChange={(e) => setCountry(e.target.value)}
            onFocus={(e) => e.target.select()}
          />
        </Grid>
      </Grid>

      <Grid container item spacing={2} direction="row">
        <Grid item xs={6}>
          <TextField
            style={{ width: "100%" }}
            label="Колір"
            id="outlined-size-small"
            variant="outlined"
            defaultValue={color}
            onChange={(e) => setColor(e.target.value)}
            onFocus={(e) => e.target.select()}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            type="number"
            style={{ width: "100%" }}
            label="Об'єм батереї"
            id="outlined-size-small"
            variant="outlined"
            defaultValue={volumeOfBattery}
            onChange={(e) => setVolumeOfBattery(e.target.value)}
            onFocus={(e) => e.target.select()}
          />
        </Grid>
      </Grid>

      <Grid container item spacing={2} direction="row">
        <Grid item xs={6}>
          <TextField
            type="number"
            style={{ width: "100%" }}
            label="Час заряджання"
            id="outlined-size-small"
            variant="outlined"
            defaultValue={chargingHour}
            onChange={(e) => setChargingHour(e.target.value)}
            onFocus={(e) => e.target.select()}
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            type="number"
            style={{ width: "100%" }}
            label="Максимальний час роботи"
            id="outlined-size-small"
            variant="outlined"
            defaultValue={maxTime}
            onChange={(e) => setMaxTime(e.target.value)}
            onFocus={(e) => e.target.select()}
          />
        </Grid>
      </Grid>

      <Grid container item spacing={2} direction="row">
        <Grid item xs={6}>
          <TextField
            type="number"
            style={{ width: "100%" }}
            label="Вага"
            id="outlined-size-small"
            variant="outlined"
            defaultValue={weigth}
            onChange={(e) => setWeigth(e.target.value)}
            onFocus={(e) => e.target.select()}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
export default RobotsProperties;
