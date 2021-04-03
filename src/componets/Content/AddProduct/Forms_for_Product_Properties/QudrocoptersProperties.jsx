import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
const QudrocoptersProperties = ({ setProperties }) => {
  const [brend, setBrend] = useState("Xiaomi");
  const [country, setCountry] = useState("Китай");
  const [color, setColor] = useState("чорний");
  const [batteryCapacity, setBatteryCapacity] = useState(5000);
  const [radius, setRadius] = useState(90);
  const [flightDuration, setFlightDuration] = useState(15);
  const [maxSpeed, setMaxSpeed] = useState(38);
  const [weigth, setWeigth] = useState(500);

  useEffect(() => {
    setProperties({
      brend,
      country,
      color,
      batteryCapacity,
      radius,
      flightDuration,
      maxSpeed,
      weigth,
    });
  }, [
    brend,
    country,
    color,
    batteryCapacity,
    radius,
    flightDuration,
    maxSpeed,
    weigth,
  ]);
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
            defaultValue={batteryCapacity}
            onChange={(e) => setBatteryCapacity(e.target.value)}
            onFocus={(e) => e.target.select()}
          />
        </Grid>
      </Grid>

      <Grid container item spacing={2} direction="row">
        <Grid item xs={6}>
          <TextField
            type="number"
            style={{ width: "100%" }}
            label="Радіус польоту"
            id="outlined-size-small"
            variant="outlined"
            defaultValue={radius}
            onChange={(e) => setRadius(e.target.value)}
            onFocus={(e) => e.target.select()}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            type="number"
            style={{ width: "100%" }}
            label="Тривалість польоту"
            id="outlined-size-small"
            variant="outlined"
            defaultValue={flightDuration}
            onChange={(e) => setFlightDuration(e.target.value)}
            onFocus={(e) => e.target.select()}
          />
        </Grid>
      </Grid>

      <Grid container item spacing={2} direction="row">
        <Grid item xs={6}>
          <TextField
            type="number"
            style={{ width: "100%" }}
            label="Максимальна швидкість"
            id="outlined-size-small"
            variant="outlined"
            defaultValue={maxSpeed}
            onChange={(e) => setMaxSpeed(e.target.value)}
            onFocus={(e) => e.target.select()}
          />
        </Grid>
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
export default QudrocoptersProperties;
