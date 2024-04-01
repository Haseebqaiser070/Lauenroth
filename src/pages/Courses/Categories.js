import React from 'react';
import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, Button } from '@mui/material';
// components
import Iconify from '../../components/iconify';
// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../../sections/@dashboard/app';
export default function Categories() {
  const customIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 31.093 31.093">
  <g id="Group_119" data-name="Group 119" transform="translate(1 -3)">
    <g id="Group_68" data-name="Group 68" transform="translate(0 0)">
      <path id="Path_34" data-name="Path 34" d="M13.166,26.332h-9.4V5.642H5.642A3.773,3.773,0,0,0,9.4,9.4h7.523a3.773,3.773,0,0,0,3.762-3.762H22.57v7.523a1.881,1.881,0,0,0,3.762,0V5.642A3.773,3.773,0,0,0,22.57,1.881H20.181A3.754,3.754,0,0,0,16.927,0H9.4A3.754,3.754,0,0,0,6.15,1.881H3.762A3.773,3.773,0,0,0,0,5.642V26.332a3.773,3.773,0,0,0,3.762,3.762h9.4a1.881,1.881,0,0,0,0-3.762M9.4,3.762h7.523V5.642H9.4Zm7.523,9.4H9.4a1.881,1.881,0,0,0,0,3.762h7.523a1.881,1.881,0,0,0,0-3.762m-3.762,5.642H9.4a1.881,1.881,0,0,0,0,3.762h3.762a1.881,1.881,0,0,0,0-3.762M28.212,22.57H26.332V20.689a1.881,1.881,0,0,0-3.762,0V22.57H20.689a1.881,1.881,0,0,0,0,3.762H22.57v1.881a1.881,1.881,0,1,0,3.762,0V26.332h1.881a1.881,1.881,0,1,0,0-3.762" transform="translate(-0.5 3.5)" fill="#fff" stroke="#e8d24a" stroke-width="1" fill-rule="evenodd"/>
    </g>
  </g>
</svg>
`;
  return (
    <>
      <div className="row d-flex my-4 flex-wrap justify-items-between">
        <div className="col">
          <Typography variant="h4">Categories</Typography>
        </div>
        <div className="col d-flex justify-content-end flex-wrap">
          <Button variant="contained" className="mx-3">
            Edit
          </Button>
          <Button variant="contained" className="">
            <Iconify icon="mdi:add-bold" className="me-1" /> Add new category
          </Button>
        </div>
        <Typography className="text-muted my-2">
          On this section you can create and change course categories, that will be shown on the app.
        </Typography>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={6} md={4} lg={2}>
          <AppWidgetSummary
            bgColor={'rgb(83,178,228)'}
            bgColorgradiant={'linear-gradient(135deg, rgba(83,178,228,1) 0%, rgba(8,100,148,1) 61%)'}
            title="Self Management"
            total={28}
            icon={'mdi:account-outline'}
          />
        </Grid>

        <Grid item xs={6} sm={6} md={4} lg={2}>
          <AppWidgetSummary
            title="Movement"
            bgColor={'rgb(150,231,246)'}
            bgColorgradiant={'linear-gradient(135deg, rgba(150,231,246,1) 0%, rgba(0,164,219,1) 61%)'}
            total={1352831}
            color="info"
            icon={'maki:bicycle-share'}
          />
        </Grid>

        <Grid item xs={6} sm={6} md={4} lg={2}>
          <AppWidgetSummary
            title="Relaxation"
            bgColor={'rgb(255,159,192)'}
            bgColorgradiant={'linear-gradient(135deg, rgba(255,159,192,1) 0%, rgba(184,92,124,1) 61%)'}
            total={15}
            color="warning"
            icon={'uil:smile'}
          />
        </Grid>

        <Grid item xs={6} sm={6} md={4} lg={2}>
          <AppWidgetSummary
            title="Nutrition"
            bgColor={'rgb(179,238,217)'}
            bgColorgradiant={'linear-gradient(135deg, rgba(179,238,217,1) 0%, rgba(136,180,164,1) 61%)'}
            total={4}
            color="error"
            icon={'lucide:grape'}
            rotate={3}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={2}>
          <AppWidgetSummary
            title="Miscellaneous"
            bgColor={'rgb(255,241,140)'}
            bgColorgradiant={'linear-gradient(135deg, rgba(255,241,140,1) 0%, rgba(232,212,68,1) 61%);'}
            total={4}
            color="error"
            svg={customIcon}
            icon={''}
          />
        </Grid>
        {/*
    <Grid item xs={12} md={6} lg={8}>
      <AppWebsiteVisits
        title="Website Visits"
        subheader="(+43%) than last year"
        chartLabels={[
          '01/01/2003',
          '02/01/2003',
          '03/01/2003',
          '04/01/2003',
          '05/01/2003',
          '06/01/2003',
          '07/01/2003',
          '08/01/2003',
          '09/01/2003',
          '10/01/2003',
          '11/01/2003',
        ]}
        chartData={[
          {
            name: 'Team A',
            type: 'column',
            fill: 'solid',
            data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
          },
          {
            name: 'Team B',
            type: 'area',
            fill: 'gradient',
            data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
          },
          {
            name: 'Team C',
            type: 'line',
            fill: 'solid',
            data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
          },
        ]}
      />
    </Grid>

    <Grid item xs={12} md={6} lg={4}>
      <AppCurrentVisits
        title="Current Visits"
        chartData={[
          { label: 'America', value: 4344 },
          { label: 'Asia', value: 5435 },
          { label: 'Europe', value: 1443 },
          { label: 'Africa', value: 4443 },
        ]}
        chartColors={[
          theme.palette.primary.main,
          theme.palette.info.main,
          theme.palette.warning.main,
          theme.palette.error.main,
        ]}
      />
    </Grid>

    <Grid item xs={12} md={6} lg={8}>
      <AppConversionRates
        title="Conversion Rates"
        subheader="(+43%) than last year"
        chartData={[
          { label: 'Italy', value: 400 },
          { label: 'Japan', value: 430 },
          { label: 'China', value: 448 },
          { label: 'Canada', value: 470 },
          { label: 'France', value: 540 },
          { label: 'Germany', value: 580 },
          { label: 'South Korea', value: 690 },
          { label: 'Netherlands', value: 1100 },
          { label: 'United States', value: 1200 },
          { label: 'United Kingdom', value: 1380 },
        ]}
      />
    </Grid>

    <Grid item xs={12} md={6} lg={4}>
      <AppCurrentSubject
        title="Current Subject"
        chartLabels={['English', 'History', 'Physics', 'Geography', 'Chinese', 'Math']}
        chartData={[
          { name: 'Series 1', data: [80, 50, 30, 40, 100, 20] },
          { name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
          { name: 'Series 3', data: [44, 76, 78, 13, 43, 10] },
        ]}
        chartColors={[...Array(6)].map(() => theme.palette.text.secondary)}
      />
    </Grid>

    <Grid item xs={12} md={6} lg={8}>
      <AppNewsUpdate
        title="News Update"
        list={[...Array(5)].map((_, index) => ({
          id: faker.datatype.uuid(),
          title: faker.name.jobTitle(),
          description: faker.name.jobTitle(),
          image: `/assets/images/covers/cover_${index + 1}.jpg`,
          postedAt: faker.date.recent(),
        }))}
      />
    </Grid>

    <Grid item xs={12} md={6} lg={4}>
      <AppOrderTimeline
        title="Order Timeline"
        list={[...Array(5)].map((_, index) => ({
          id: faker.datatype.uuid(),
          title: [
            '1983, orders, $4220',
            '12 Invoices have been paid',
            'Order #37745 from September',
            'New order placed #XF-2356',
            'New order placed #XF-2346',
          ][index],
          type: `order${index + 1}`,
          time: faker.date.past(),
        }))}
      />
    </Grid>

    <Grid item xs={12} md={6} lg={4}>
      <AppTrafficBySite
        title="Traffic by Site"
        list={[
          {
            name: 'FaceBook',
            value: 323234,
            icon: <Iconify icon={'eva:facebook-fill'} color="#1877F2" width={32} />,
          },
          {
            name: 'Google',
            value: 341212,
            icon: <Iconify icon={'eva:google-fill'} color="#DF3E30" width={32} />,
          },
          {
            name: 'Linkedin',
            value: 411213,
            icon: <Iconify icon={'eva:linkedin-fill'} color="#006097" width={32} />,
          },
          {
            name: 'Twitter',
            value: 443232,
            icon: <Iconify icon={'eva:twitter-fill'} color="#1C9CEA" width={32} />,
          },
        ]}
      />
    </Grid>

    <Grid item xs={12} md={6} lg={8}>
      <AppTasks
        title="Tasks"
        list={[
          { id: '1', label: 'Create FireStone Logo' },
          { id: '2', label: 'Add SCSS and JS files if required' },
          { id: '3', label: 'Stakeholder Meeting' },
          { id: '4', label: 'Scoping & Estimations' },
          { id: '5', label: 'Sprint Showcase' },
        ]}
      />
    </Grid> */}
      </Grid>
    </>
  );
}
