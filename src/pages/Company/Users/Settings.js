import React, { useState } from 'react';
import Iconify from 'src/components/iconify/Iconify';

import { Typography, Button, Stack, Container, Switch } from '@mui/material';

import { Helmet } from 'react-helmet-async';
import UserAvatar from '../../AccountSettings/UserAvatar';

import Menu from '../Menu';
import { HashLink as Link } from 'react-router-hash-link';
const Settings = () => {
  const [mainColor, setmainColor] = useState('#007BA4');
  const [bgColor, setbgColor] = useState('#EFF4FF');
  return (
    <div>
      <Helmet>
        <title> Company Details | Lauenroth</title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="start" mt={2} mb={2}>
          <Typography variant="h3" gutterBottom>
            Company 1
          </Typography>
        </Stack>

        <Menu page="users" />
        <div className="row d-flex mt-5 mb-4 flex-wrap justify-items-between">
          <div className="col-md-5">
            <Typography variant="h4">User name</Typography>
          </div>
          <div className="col-md-7 d-flex align-items-ceenter justify-content-md-end">
            <Typography className="text-muted fst-italic">
              Active account since 12.12.2023 <Switch defaultChecked color="success" />{' '}
            </Typography>
            <Link to="/dashboard/company/add_company_user/1">
              <Button variant="contained" className="mx-2">
                Edit
              </Button>
            </Link>
            <Link to="">
              <Button variant="contained" color="error" className="mx-2">
                Delete
              </Button>
            </Link>
          </div>
        </div>
        {/* <UserAvatar
          currentImg={
            'https://www.adobe.com/content/dam/cc/us/en/creativecloud/design/discover/mascot-logo-design/mascot-logo-design_fb-img_1200x800.jpg'
          }
        /> */}

        <div className="row mb-5">
          <Typography variant="h5" className="text-muted my-3">
            User details
            <Link smooth to="/dashboard/company/add_company_user/1">
              <Iconify
                className="ms-4 my-auto text-primary"
                width="30px"
                role="button"
                height="30px"
                icon="tabler:arrow-up"
                rotate="90deg"
              ></Iconify>
            </Link>
          </Typography>

          <Typography className="text-muted">First name ,surname</Typography>
        </div>
        <div className="row my-5">
          <Typography variant="h5" className="text-muted my-3">
            Password
            <Link smooth to="/dashboard/company/add_company_user/1#password">
              <Iconify
                className="ms-4 my-auto text-primary"
                width="30px"
                role="button"
                height="30px"
                icon="tabler:arrow-up"
                rotate="90deg"
              ></Iconify>
            </Link>
          </Typography>

          <Typography className="text-muted">********</Typography>
        </div>
        <div className="row my-5">
          <Typography variant="h5" className="text-muted my-3">
            User Role
            <Link smooth to="/dashboard/company/add_company_user/1#role">
              <Iconify
                className="ms-4 my-auto text-primary"
                width="30px"
                role="button"
                height="30px"
                icon="tabler:arrow-up"
                rotate="90deg"
              ></Iconify>
            </Link>
          </Typography>

          <Typography className="text-muted">Admin</Typography>
        </div>

        <div className="row my-5">
          <Typography variant="h5" className="text-muted my-3">
            Language
            <Link smooth to="/dashboard/company/add_company_user/1#languages">
              <Iconify
                className="ms-4 my-auto text-primary"
                width="30px"
                role="button"
                height="30px"
                icon="tabler:arrow-up"
                rotate="90deg"
              ></Iconify>
            </Link>
          </Typography>

          <Typography className="text-muted">English</Typography>
          <Typography className="text-muted">Deutsch</Typography>
        </div>

        {/* <Notifications /> */}
      </Container>
    </div>
  );
};

export default Settings;
