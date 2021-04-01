import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
const PhonesProperties = ({ setProperties }) => {
  const [brend, setBrend] = useState("Samsung");
  const [country, setCountry] = useState("Китай");
  const [color, setColor] = useState("чорний");
  const [volumeOfBattery, setVolumeOfBattery] = useState(5000);
  const [chargingHour, setСhargingHour] = useState(2);
  const [diagonal, setDiagonal] = useState(5.5);
  const [operatingMemory, setOperatingMemory] = useState(8);
  const [memory, setMemory] = useState(128);
  const [operatingSystem, setOperatingSystem] = useState("IOS");
  const [weigth, setWeigth] = useState(350);

  useEffect(() => {
    setProperties({
      brend,
      country,
      color,
      volumeOfBattery,
      chargingHour,
      diagonal,
      operatingMemory,
      memory,
      operatingSystem,
      weigth,
    });
  }, [
    brend,
    country,
    color,
    volumeOfBattery,
    chargingHour,
    diagonal,
    operatingMemory,
    memory,
    operatingSystem,
    weigth,
  ]);
  return (
    <Grid container spacing={2} xs={12}>
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
            style={{ width: "100%" }}
            label="Діагональ екрану"
            id="outlined-size-small"
            variant="outlined"
            defaultValue={diagonal}
            onChange={(e) => setDiagonal(e.target.value)}
            onFocus={(e) => e.target.select()}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            style={{ width: "100%" }}
            label="Час заряджання"
            id="outlined-size-small"
            variant="outlined"
            defaultValue={chargingHour}
            onChange={(e) => setСhargingHour(e.target.value)}
            onFocus={(e) => e.target.select()}
          />
        </Grid>
      </Grid>

      <Grid container item spacing={2} direction="row">
        <Grid item xs={6}>
          <TextField
            style={{ width: "100%" }}
            label="Оперативна пам'ять"
            id="outlined-size-small"
            variant="outlined"
            defaultValue={operatingMemory}
            onChange={(e) => setOperatingMemory(e.target.value)}
            onFocus={(e) => e.target.select()}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            style={{ width: "100%" }}
            label="Об'єм пам'яті"
            id="outlined-size-small"
            variant="outlined"
            defaultValue={memory}
            onChange={(e) => setMemory(e.target.value)}
            onFocus={(e) => e.target.select()}
          />
        </Grid>
      </Grid>

      <Grid container item spacing={2} direction="row">
        <Grid item xs={6}>
          <TextField
            style={{ width: "100%" }}
            label="Операційна система"
            id="outlined-size-small"
            variant="outlined"
            defaultValue={operatingSystem}
            onChange={(e) => setOperatingSystem(e.target.value)}
            onFocus={(e) => e.target.select()}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
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
export default PhonesProperties;
