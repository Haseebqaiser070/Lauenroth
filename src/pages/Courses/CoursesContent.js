import {
  Button,
  Accordion,
  Select,
  AccordionDetails,
  FormControl,
  InputLabel,
  MenuItem,
  AccordionSummary,
  Typography,
} from '@mui/material';
import React from 'react';
import Iconify from 'src/components/iconify/Iconify';
import { makeStyles } from '@mui/styles';
import CourseList from './CourseList';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function () {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChangeFilter = (event) => {
    setAge(event.target.value);
  };
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <div className="row d-flex mb-4 mt-5 pt-5 flex-wrap justify-items-between">
        <div className="col">
          <Typography variant="h4">Content</Typography>
        </div>
        <div className="col d-flex justify-content-end flex-wrap">
          <Button className="mx-3">
            Show All <Iconify icon="mingcute:right-fill" />
          </Button>
          <Link to="/dashboard/courses/add_course">
            <Button variant="contained" className="">
              <Iconify icon="mdi:add-bold" className="me-1" /> Add new course
            </Button>
          </Link>
        </div>
        <Typography className="text-muted my-2">
          On this section you can view, change and create courses, that will be available on the app.
        </Typography>
      </div>
      <div className={classes.root}>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className="bg-white">
          <AccordionSummary
            expandIcon={
              <Iconify icon="subway:down-2" className={`${expanded === 'panel2' ? 'text-primary' : 'text-muted'}`} />
            }
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            className="bg-white border-0 px-0 acc-sumary"
          >
            <Typography
              variant="h4"
              style={{ fontSize: '17px' }}
              className={`${classes.heading} ${expanded === 'panel2' ? 'text-primary' : 'text-muted'}`}
            >
              {' '}
              Self Managment
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="row d-flex my-4 flex-wrap justify-items-between">
              <div className="col">
                <Typography variant="h4">Self Managment</Typography>
              </div>
              <div className="col d-flex justify-content-end align-items-center flex-wrap">
                <FormControl sx={{ minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-small-label">Filter</InputLabel>
                  <Select
                    size="small"
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={age}
                    label="Age"
                    onChange={handleChangeFilter}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Option1</MenuItem>
                    <MenuItem value={20}>Option2</MenuItem>
                    <MenuItem value={30}>Option3</MenuItem>
                  </Select>
                </FormControl>

                <Link>
                  <Button size="medium" variant="contained" className="mx-3">
                    Edit
                  </Button>
                </Link>

                <Link to="/dashboard/courses/add_course">
                  <Button size="medium" variant="contained" className="">
                    <Iconify icon="mdi:add-bold" className="me-1" /> Add new course
                  </Button>
                </Link>
              </div>
              <Typography className="text-muted my-2">
                This is the the introduction text, that will be shown on the app and that can be edited.
              </Typography>
            </div>
            <CourseList categoryTitle={'Self Managment'} />
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className="bg-white">
          <AccordionSummary
            expandIcon={
              <Iconify icon="subway:down-2" className={`${expanded === 'panel1' ? 'text-primary' : 'text-muted'}`} />
            }
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            className="bg-white border-0 px-0 acc-sumary"
          >
            <Typography
              variant="h4"
              style={{ fontSize: '17px' }}
              className={`${classes.heading} ${expanded === 'panel1' ? 'text-primary' : 'text-muted'}`}
            >
              {' '}
              Movements
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="row d-flex my-4 flex-wrap justify-items-between">
              <div className="col">
                <Typography variant="h4">Movements</Typography>
              </div>
              <div className="col d-flex justify-content-end align-items-center flex-wrap">
                <FormControl sx={{ minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-small-label">Filter</InputLabel>
                  <Select
                    size="small"
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={age}
                    label="Age"
                    onChange={handleChangeFilter}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Option1</MenuItem>
                    <MenuItem value={20}>Option2</MenuItem>
                    <MenuItem value={30}>Option3</MenuItem>
                  </Select>
                </FormControl>

                <Link>
                  <Button size="medium" variant="contained" className="mx-3">
                    Edit
                  </Button>
                </Link>

                <Link to="/dashboard/courses/add_course">
                  <Button size="medium" variant="contained" className="">
                    <Iconify icon="mdi:add-bold" className="me-1" /> Add new course
                  </Button>
                </Link>
              </div>
              <Typography className="text-muted my-2">
                This is the the introduction text, that will be shown on the app and that can be edited.
              </Typography>
            </div>
            <CourseList categoryTitle={'Movements'} />
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className="bg-white">
          <AccordionSummary
            expandIcon={
              <Iconify icon="subway:down-2" className={`${expanded === 'panel3' ? 'text-primary' : 'text-muted'}`} />
            }
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            className="bg-white border-0 px-0 acc-sumary"
          >
            <Typography
              variant="h4"
              style={{ fontSize: '17px' }}
              className={`${classes.heading} ${expanded === 'panel3' ? 'text-primary' : 'text-muted'}`}
            >
              {' '}
              Relaxation
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="row d-flex my-4 flex-wrap justify-items-between">
              <div className="col">
                <Typography variant="h4">Relaxation</Typography>
              </div>
              <div className="col d-flex justify-content-end align-items-center flex-wrap">
                <FormControl sx={{ minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-small-label">Filter</InputLabel>
                  <Select
                    size="small"
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={age}
                    label="Age"
                    onChange={handleChangeFilter}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Option1</MenuItem>
                    <MenuItem value={20}>Option2</MenuItem>
                    <MenuItem value={30}>Option3</MenuItem>
                  </Select>
                </FormControl>

                <Link>
                  <Button size="medium" variant="contained" className="mx-3">
                    Edit
                  </Button>
                </Link>

                <Link to="/dashboard/courses/add_course">
                  <Button size="medium" variant="contained" className="">
                    <Iconify icon="mdi:add-bold" className="me-1" /> Add new course
                  </Button>
                </Link>
              </div>
              <Typography className="text-muted my-2">
                This is the the introduction text, that will be shown on the app and that can be edited.
              </Typography>
            </div>
            <CourseList categoryTitle={'Relaxation'} />
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} className="bg-white">
          <AccordionSummary
            expandIcon={
              <Iconify icon="subway:down-2" className={`${expanded === 'panel4' ? 'text-primary' : 'text-muted'}`} />
            }
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            className="bg-white border-0 px-0 acc-sumary"
          >
            <Typography
              variant="h4"
              style={{ fontSize: '17px' }}
              className={`${classes.heading} ${expanded === 'panel4' ? 'text-primary' : 'text-muted'}`}
            >
              {' '}
              Nutrition
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="row d-flex my-4 flex-wrap justify-items-between">
              <div className="col">
                <Typography variant="h4">Nutrition</Typography>
              </div>
              <div className="col d-flex justify-content-end align-items-center flex-wrap">
                <FormControl sx={{ minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-small-label">Filter</InputLabel>
                  <Select
                    size="small"
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={age}
                    label="Age"
                    onChange={handleChangeFilter}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Option1</MenuItem>
                    <MenuItem value={20}>Option2</MenuItem>
                    <MenuItem value={30}>Option3</MenuItem>
                  </Select>
                </FormControl>

                <Link>
                  <Button size="small" variant="contained" className="mx-3">
                    Edit
                  </Button>
                </Link>

                <Link to="/dashboard/courses/add_course">
                  <Button size="small" variant="contained" className="">
                    <Iconify icon="mdi:add-bold" className="me-1" /> Add new course
                  </Button>
                </Link>
              </div>
              <Typography className="text-muted my-2">
                This is the the introduction text, that will be shown on the app and that can be edited.
              </Typography>
            </div>
            <CourseList categoryTitle={'Nutrition'} />
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} className="bg-white">
          <AccordionSummary
            expandIcon={
              <Iconify icon="subway:down-2" className={`${expanded === 'panel5' ? 'text-primary' : 'text-muted'}`} />
            }
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            className="bg-white border-0 px-0 acc-sumary"
          >
            <Typography
              variant="h4"
              style={{ fontSize: '17px' }}
              className={`${classes.heading} ${expanded === 'panel5' ? 'text-primary' : 'text-muted'}`}
            >
              {' '}
              Miscellaneous
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="row d-flex my-4 flex-wrap justify-items-between">
              <div className="col">
                <Typography variant="h4">Miscellaneous</Typography>
              </div>
              <div className="col d-flex justify-content-end align-items-center flex-wrap">
                <FormControl sx={{ minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-small-label">Filter</InputLabel>
                  <Select
                    size="small"
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={age}
                    label="Age"
                    onChange={handleChangeFilter}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Option1</MenuItem>
                    <MenuItem value={20}>Option2</MenuItem>
                    <MenuItem value={30}>Option3</MenuItem>
                  </Select>
                </FormControl>

                <Link>
                  <Button size="medium" variant="contained" className="mx-3">
                    Edit
                  </Button>
                </Link>

                <Link to="/dashboard/courses/add_course">
                  <Button size="medium" variant="contained" className="">
                    <Iconify icon="mdi:add-bold" className="me-1" /> Add new course
                  </Button>
                </Link>
              </div>
              <Typography className="text-muted my-2">
                This is the the introduction text, that will be shown on the app and that can be edited.
              </Typography>
            </div>
            <CourseList categoryTitle={'Miscellaneous'} />
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
}
