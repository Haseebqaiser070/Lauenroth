import React from 'react';
import Iconify from 'src/components/iconify/Iconify';

import { Typography, Button, Stack, Container } from '@mui/material';

import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';

export default function ViewMessage() {
  const navigate = useNavigate();
  return (
    <div>
      <Helmet>
        <title> View Message | Lauenroth</title>
      </Helmet>

      <Container>
        <Button onClick={() => navigate(-1)} startIcon={<Iconify icon="mingcute:left-fill" />}>
          Back
        </Button>
        <Stack direction="row" alignItems="center" justifyContent="start" mt={2} mb={2}>
          <Typography variant="h3" gutterBottom>
            Message
          </Typography>
        </Stack>

        <div className="row d-flex mt-4 flex-wrap justify-items-between">
          <div className="col-sm-10">
            <Typography variant="h4">Sent</Typography>
          </div>
          <div className="col-sm-2">
            <Link to="/dashboard/company/add_message/1">
              <Button variant="contained" className="">
                Edit
              </Button>
            </Link>
          </div>
        </div>

        <div className="d-flex flex-wrap  my-5">
          <div className="text-muted my-3 p-4 rounded-pill" style={{ backgroundColor: '#EFF4FF', minWidth: '280px' }}>
            <Typography className="w-100 ">
              Hallo! Wo sind alle? … 😅 <Link to="/dashboard/app/edit-account"></Link>
            </Typography>
            <small className="w-100 d-flex align-items-center justify-content-between mt-2">
              <span>Admin name </span>
              <span>
                <Iconify icon="solar:check-read-outline" />
                11:30 PM
              </span>
            </small>
          </div>
          <div className="w-100 mt-5">
            <Typography className="text-muted my-2"> Posted by Admin</Typography>
            <Typography className="text-muted"> Date:12.12.2023</Typography>
          </div>
        </div>
      </Container>
    </div>
  );
}
