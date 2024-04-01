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
import Categories from './Categories';
import CoursesContent from './CoursesContent';

// ----------------------------------------------------------------------

export default function Courses() {
  const theme = useTheme();

  return (
    <div>
      <Helmet>
        <title> Dashboard | Lauenroth </title>
      </Helmet>

      <Container>
        <Typography variant="h3" mt={2} sx={{ mb: 5 }}>
          Courses
        </Typography>
        <Categories />
        <CoursesContent />
      </Container>
    </div>
  );
}
