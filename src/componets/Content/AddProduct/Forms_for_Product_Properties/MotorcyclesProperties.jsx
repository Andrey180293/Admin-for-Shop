import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
const MotorcyclesProperties = ({ setProperties }) => {
  const [brend, setBrend] = useState("SkyBike");
  const [clas, setClass] = useState("Cross");
  const [color, setColor] = useState("black");
  const [cubage, setCubage] = useState(180);
  const [maxSpeed, setMaxSpeed] = useState(120);
  const [volumeOfTank, setVolumeOfTank] = useState(4.5);

  useEffect(() => {
    setProperties({ brend, clas, color, cubage, maxSpeed, volumeOfTank });
  }, [clas, brend, color, cubage, maxSpeed, volumeOfTank]);
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
            label="Клас"
            id="outlined-size-small"
            variant="outlined"
            defaultValue={clas}
            onChange={(e) => setClass(e.target.value)}
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
            label="Кубатура"
            id="outlined-size-small"
            variant="outlined"
            defaultValue={cubage}
            onChange={(e) => setCubage(e.target.value)}
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
            label="Місткість баку"
            id="outlined-size-small"
            variant="outlined"
            defaultValue={volumeOfTank}
            onChange={(e) => setVolumeOfTank(e.target.value)}
            onFocus={(e) => e.target.select()}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
export default MotorcyclesProperties;
