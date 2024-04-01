import React, { useState } from 'react';
import Iconify from 'src/components/iconify/Iconify';

import { Typography, Popover, Tooltip, IconButton, Button, Stack, Container } from '@mui/material';

import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { ReactionBarSelector } from '@charkour/react-reactions';

export default function ViewPost() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <div>
      <Helmet>
        <title> View Post | Lauenroth</title>
      </Helmet>

      <Container>
        <Button onClick={() => navigate(-1)} startIcon={<Iconify icon="mingcute:left-fill" />}>
          Back
        </Button>
        <Stack direction="row" alignItems="center" justifyContent="start" mt={2} mb={2}>
          <Typography variant="h3" gutterBottom>
            Posts
          </Typography>
        </Stack>

        <div className="row d-flex mt-4 flex-wrap justify-items-between">
          <div className="col-sm-10">
            <Typography variant="h4">Headline (post)</Typography>
          </div>
          <div className="col-sm-2">
            <Link to="/dashboard/company/add_post/1">
              <Button variant="contained" className="">
                Edit
              </Button>
            </Link>
          </div>
        </div>

        <div className="row my-5">
          <Typography className="text-muted my-4">
            Body copy / Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod. Ispsum lorem
            sit dolor conseteutur, amet sadipscing elitr, sed diam. <Link to="/dashboard/app/edit-account"></Link>
          </Typography>
          <img
            className="col-xl-5 col-lg-6 col-md-7 my-4"
            src="https://hips.hearstapps.com/hmg-prod/images/running-is-one-of-the-best-ways-to-stay-fit-royalty-free-image-1036780592-1553033495.jpg?crop=0.88976xw:1xh;center,top&resize=800:*"
            alt=""
          />
          <div>
            <Typography className="my-4">
              <span className="border rounded-pill p-2 mt-4">
                50 <Iconify icon="mdi:heart" className="text-danger" />{' '}
                <Iconify icon="fluent-emoji-flat:thumbs-up-light" className="text-danger" />
              </span>
              <IconButton onClick={handleClick}>
                <Iconify icon="ic:baseline-add-reaction" />
              </IconButton>
            </Typography>

            <Popover
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
            >
              <div style={{ padding: '50px' }}>
                <ReactionBarSelector />
              </div>
            </Popover>
          </div>

          <Typography className="text-muted my-2"> Posted by Admin</Typography>
          <Typography className="text-muted"> Date:12.12.2023</Typography>
        </div>
      </Container>
    </div>
  );
}
