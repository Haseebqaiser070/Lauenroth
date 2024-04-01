import { Button, Container, Popover, MenuItem, IconButton, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Confirm from 'src/components/Confirmations/Confirm';
import Iconify from 'src/components/iconify/Iconify';

export default function Plans() {
  const [open, setOpen] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(0);
  const [planData, setPlanData] = useState([false, false, false]);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [activateDialogOpen, setActivateDialogOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpenDeleteDialog = () => {
    setDeleteDialogOpen(true);
  };

  const handleCloseDeleteDialog = () => {
    setDeleteDialogOpen(false);
  };
  const handleOpenActivateDialog = () => {
    setActivateDialogOpen(true);
  };

  const handleCloseActivateDialog = () => {
    setActivateDialogOpen(false);
  };
  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setOpen(null);
  };

  const deleteData = () => {
    toast.success('Plan deleted successfully');
    handleCloseDeleteDialog();
  };
  const activatePlan = () => {
    var plans = planData;
    plans[selectedPlan] = !plans[selectedPlan];
    setPlanData(plans);
    toast.success(plans[selectedPlan] == false ? 'Plan activated successfully' : 'Plan deactivate successfully');
    handleCloseMenu();
    handleCloseActivateDialog();
  };
  return (
    <>
      <Helmet>
        <title> Plans | Lauenroth </title>
      </Helmet>
      <Confirm
        title="Are you sure you want to delete this plan?"
        subtitle={'Changes will be permanent.'}
        open={deleteDialogOpen}
        onClose={handleCloseDeleteDialog}
        onConfirm={deleteData}
      />
      <Confirm
        title={
          planData[selectedPlan] == true
            ? 'Are you sure you want to activate this plan?'
            : 'Are you sure you want to deactivate this plan?'
        }
        subtitle={'Changes will be permanent.'}
        open={activateDialogOpen}
        onClose={handleCloseActivateDialog}
        onConfirm={activatePlan}
      />
      <Container>
        <Typography variant="h3" mt={2} sx={{ mb: 5 }}>
          Plans
        </Typography>
        <Typography className="text-muted my-2">
          This page shows the current and active pricing plans. You can edit and add plans here.{' '}
        </Typography>
        <div className="row d-flex my-4 flex-wrap justify-items-between">
          <div className="col">
            <Typography variant="h4">3 active plans</Typography>
          </div>
          <div className="col d-flex justify-content-end flex-wrap">
            <Link to="/dashboard/plans/add_plan">
              <Button variant="contained" className="">
                <Iconify icon="mdi:add-bold" className="me-1" /> Add new plan
              </Button>
            </Link>
          </div>
        </div>

        <div className="row d-flex flex-wrap justify-content-between">
          <div className="col-lg-4 col-md-6 col-12 text-center my-2 d-flex justify-content-md-start justify-content-center">
            <div
              className="col-10 p-4 rounded"
              style={{ height: '100%', backgroundColor: planData[0] ? '#ccccc8' : '#EFF4FF' }}
            >
              <div className="d-flex align-items-start mb-4">
                <div className="col ">
                  <Typography variant="h3" className="text-center">
                    Starter{' '}
                  </Typography>
                  <Typography color="primary" className="text-center" variant="h5">
                    Free of charge
                    <br />
                    <br />
                  </Typography>
                </div>
                <IconButton
                  size="large"
                  color="inherit"
                  onClick={(event) => {
                    handleOpenMenu(event);
                    setSelectedPlan(0);
                  }}
                >
                  <Iconify icon={'eva:more-vertical-fill'} />
                </IconButton>
              </div>
              <p>
                <Iconify icon="mdi:tick" className="me-2 text-secondary" width="22px" height="22px" /> 2 languages:
                English, German
              </p>
              <p>
                <Iconify icon="mdi:tick" className="me-2 text-secondary" width="22px" height="22px" /> 2 levels: content
                admin, user
              </p>
              <p>
                <Iconify icon="mdi:tick" className="me-2 text-secondary" width="22px" height="22px" /> Courses: 1 video
                per category
              </p>
              <p>
                <Iconify icon="mdi:tick" className="me-2 text-secondary" width="22px" height="22px" /> How-to videos
                upon request
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12 text-center my-2 d-flex justify-content-md-center justify-content-center">
            <div
              className="col-10 p-4 rounded"
              style={{ height: '100%', backgroundColor: planData[1] ? '#ccccc8' : '#EFF4FF' }}
            >
              <div className="d-flex align-items-start mb-4">
                <div className="col ">
                  <Typography variant="h3" className="text-center">
                    Professional
                  </Typography>
                  <Typography color="primary" className="text-center" variant="h5">
                    xx € monthly
                    <br />
                    +xx € license per user
                  </Typography>
                </div>
                <IconButton
                  size="large"
                  color="inherit"
                  onClick={(event) => {
                    handleOpenMenu(event);
                    setSelectedPlan(1);
                  }}
                >
                  <Iconify icon={'eva:more-vertical-fill'} />
                </IconButton>
              </div>
              <p>
                <Iconify icon="mdi:tick" className="me-2 text-secondary" width="22px" height="22px" /> 3 languages
              </p>
              <p>
                <Iconify icon="mdi:tick" className="me-2 text-secondary" width="22px" height="22px" /> 2 levels: content
                admin, user
              </p>
              <p>
                <Iconify icon="mdi:tick" className="me-2 text-secondary" width="22px" height="22px" /> Courses: 1 video
                per category
              </p>
              <p>
                <Iconify icon="mdi:tick" className="me-2 text-secondary" width="22px" height="22px" /> How-to videos
                upon request
              </p>
              <p>
                <Iconify icon="mdi:tick" className="me-2 text-secondary" width="22px" height="22px" />
                Optional: videos for selected category (extra charge)
              </p>
              <p>
                <Iconify icon="mdi:tick" className="me-2 text-secondary" width="22px" height="22px" />
                Access up to 100 employees
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 text-center my-2 d-flex justify-content-md-end justify-content-center">
            <div
              className="col-10 p-4 rounded"
              style={{ height: '100%', backgroundColor: planData[2] ? '#ccccc8' : '#EFF4FF' }}
            >
              <div className="d-flex align-items-start mb-4">
                <div className="col ">
                  <Typography variant="h3" className="text-center">
                    Premium
                  </Typography>
                  <Typography color="primary" className="text-center" variant="h5">
                    xx € monthly
                    <br />
                    <br />
                  </Typography>
                </div>
                <IconButton
                  size="large"
                  color="inherit"
                  onClick={(event) => {
                    handleOpenMenu(event);
                    setSelectedPlan(2);
                  }}
                >
                  <Iconify icon={'eva:more-vertical-fill'} />
                </IconButton>
              </div>
              <p>
                <Iconify icon="mdi:tick" className="me-2 text-secondary" width="22px" height="22px" /> 3 languages
              </p>
              <p>
                <Iconify icon="mdi:tick" className="me-2 text-secondary" width="22px" height="22px" /> 2 levels: content
                admin, user
              </p>
              <p>
                <Iconify icon="mdi:tick" className="me-2 text-secondary" width="22px" height="22px" /> Courses: 1 video
                per category
              </p>
              <p>
                <Iconify icon="mdi:tick" className="me-2 text-secondary" width="22px" height="22px" /> How-to videos
                upon request
              </p>
              <p>
                <Iconify icon="mdi:tick" className="me-2 text-secondary" width="22px" height="22px" />
                Optional: videos for selected category (extra charge)
              </p>
              <p>
                <Iconify icon="mdi:tick" className="me-2 text-secondary" width="22px" height="22px" />
                Access up to 100 employees
              </p>
              <p>
                <Iconify icon="mdi:tick" className="me-2 text-secondary" width="22px" height="22px" />
                Workshops
              </p>
              <p>
                <Iconify icon="mdi:tick" className="me-2 text-secondary" width="22px" height="22px" />2 x per year
                live-tour
              </p>
              <p>
                <Iconify icon="mdi:tick" className="me-2 text-secondary" width="22px" height="22px" />2 x per year Flat
                rate in the first year: Licenses for app use per employee and month
              </p>
            </div>
          </div>
        </div>
        <Popover
          open={Boolean(open)}
          anchorEl={open}
          onClose={handleCloseMenu}
          anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          PaperProps={{
            sx: {
              p: 1,
              width: 140,
              '& .MuiMenuItem-root': {
                px: 1,
                typography: 'body2',
                borderRadius: 0.75,
              },
            },
          }}
        >
          <MenuItem className="popover-item" onClick={() => navigate('/dashboard/plans/add_plan/1')}>
            <Iconify icon={'eva:edit-fill'} sx={{ mr: 2 }} />
            Edit
          </MenuItem>
          {planData[selectedPlan] === false ? (
            <MenuItem className="popover-item" onClick={() => handleOpenActivateDialog()}>
              <Iconify icon={'tabler:ban'} sx={{ mr: 2 }} />
              Deactivate
            </MenuItem>
          ) : (
            <MenuItem onClick={() => handleOpenActivateDialog()}>
              <Iconify icon={'gg:check-o'} sx={{ mr: 2 }} />
              Activate
            </MenuItem>
          )}

          <MenuItem sx={{ color: 'error.main' }} onClick={() => handleOpenDeleteDialog()}>
            <Iconify icon={'eva:trash-2-outline'} sx={{ mr: 2 }} />
            Delete
          </MenuItem>
        </Popover>
      </Container>
    </>
  );
}
