import React, { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

const DataEntryForm = () => {
  const [data, setData] = useState([]);
  const [xValue, setXValue] = useState("");
  const [yValue, setYValue] = useState("");

  const handleXChange = (event) => {
    setXValue(event.target.value);
  };

  const handleYChange = (event) => {
    setYValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setData([...data, { x: xValue, y: yValue }]);
    setXValue("");
    setYValue("");
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <form onSubmit={handleSubmit}>
          <TextField
            label="X Value"
            value={xValue}
            onChange={handleXChange}
            margin="normal"
            variant="outlined"
            fullWidth
          />
          <TextField
            label="Y Value"
            value={yValue}
            onChange={handleYChange}
            margin="normal"
            variant="outlined"
            fullWidth
          />
          <Button type="submit" variant="contained" color="primary">
            Add Data
          </Button>
        </form>
      </Grid>
      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>X Value</TableCell>
                <TableCell>Y Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((entry, index) => (
                <TableRow key={index}>
                  <TableCell>{entry.x}</TableCell>
                  <TableCell>{entry.y}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default DataEntryForm;
