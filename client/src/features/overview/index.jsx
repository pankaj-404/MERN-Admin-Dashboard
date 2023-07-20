import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Header from "components/Header";
import OverviewChart from "components/OverviewChart";
import React, { useState } from "react";

const Overview = () => {
  const [view, setView] = useState("units");

  return (
    <Box sx={{ m: "1rem 2rem" }}>
      <Header title="SALES" subtitle="Overview of general revenue & sales" />
      <Box height="75vh">
        <FormControl sx={{ mt: "1rem" }}>
          <InputLabel>View</InputLabel>
          <Select
            value={view}
            label="View"
            onChange={(e) => setView(e.target.value)}
          >
            <MenuItem value="sales">Sales</MenuItem>
            <MenuItem value="units">Units</MenuItem>
          </Select>
        </FormControl>
        <OverviewChart view={view} />
      </Box>
    </Box>
  );
};

export default Overview;
