import React, { useState } from 'react';
import Iconify from 'src/components/iconify/Iconify';

import { Typography, Button, Stack, Container, Switch } from '@mui/material';

import { Helmet } from 'react-helmet-async';
import UserAvatar from '../../AccountSettings/UserAvatar';
import { Link } from 'react-router-dom';

import Menu from '../Menu';
import Courses from './Courses';
import Posts from './Posts/Posts';
import Messages from './Messages/Messages';
import Survey from './Survey/Survey';
const Settings = () => {
  const [mainColor, setmainColor] = useState('#007BA4');
  const [bgColor, setbgColor] = useState('#EFF4FF');
  return (
    <div>
      <Helmet>
        <title> Company Content | Lauenroth</title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="start" mt={2} mb={2}>
          <Typography variant="h3" gutterBottom>
            Company 1
          </Typography>
        </Stack>

        <Menu page="content" />
        <Courses />
        <Posts />
        <Messages />
        <Survey />
      </Container>
    </div>
  );
};

export default Settings;
