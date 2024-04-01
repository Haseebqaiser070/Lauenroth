import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Typography } from '@mui/material';

export default function Courses() {
  return (
    <>
      {' '}
      <div className="row d-flex mt-5 flex-wrap justify-items-between">
        <div className="col-md-5">
          <Typography variant="h4">Content: Courses</Typography>
        </div>
      </div>
      <div className="row mt-2 mb-3">
        <Typography className="text-muted">
          On this section you can choose, which courses Company Name 1 can see on their team space.
        </Typography>
        <Typography className="text-muted mt-5 mb-4">
          <b>Filter </b>
          {'>'} Categories
        </Typography>
        <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked />} label="All Courses" />
          <FormControlLabel control={<Checkbox />} label="Selbstmanagement" />
          <FormControlLabel control={<Checkbox />} label="Bewegung" />
          <FormControlLabel control={<Checkbox />} label="Entspannung" />
          <FormControlLabel control={<Checkbox />} label="Sonstiges" />
        </FormGroup>
      </div>
    </>
  );
}
