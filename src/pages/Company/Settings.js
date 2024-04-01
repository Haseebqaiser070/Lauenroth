import React, { useState } from 'react';
import Iconify from 'src/components/iconify/Iconify';

import { Typography, Button, Stack, Container, Switch } from '@mui/material';
import Confirm from 'src/components/Confirmations/Confirm';

import { Helmet } from 'react-helmet-async';
import UserAvatar from '../AccountSettings/UserAvatar';
import { HashLink as Link } from 'react-router-hash-link';
import Menu from './Menu';
import { toast } from 'react-toastify';
const Settings = () => {
  const [mainColor, setmainColor] = useState('#007BA4');
  const [bgColor, setbgColor] = useState('#EFF4FF');
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const handleOpenDeleteDialog = () => {
    setDeleteDialogOpen(true);
  };

  const handleCloseDeleteDialog = () => {
    setDeleteDialogOpen(false);
  };

  const saveData = () => {
    handleCloseDeleteDialog();

    return toast.success('User deleted successfully');
  };
  return (
    <div>
      <Helmet>
        <title> Company Details | Lauenroth</title>
      </Helmet>
      <Confirm
        title="Are you sure you want to delete this account.?"
        subtitle={'Changes will be permanent.'}
        open={deleteDialogOpen}
        onClose={handleCloseDeleteDialog}
        onConfirm={saveData}
      />
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="start" mt={2} mb={2}>
          <Typography variant="h3" gutterBottom>
            Company 1
          </Typography>
        </Stack>

        <Menu page="settings" />
        <div className="row d-flex mt-4 flex-wrap justify-items-between">
          <div className="col-md-5">
            <Typography variant="h4">Account information</Typography>
          </div>
          <div className="col-md-7 d-flex align-items-ceenter justify-content-md-end">
            <Typography className="text-muted fst-italic">
              Active account since 12.12.2023 <Switch defaultChecked color="success" />{' '}
            </Typography>
            <Link smooth to="/dashboard/company/adduser/3">
              <Button variant="contained" className="mx-2">
                Edit
              </Button>
            </Link>

            <Button onClick={() => handleOpenDeleteDialog()} variant="contained" color="error" className="mx-2">
              Delete
            </Button>
          </div>
        </div>
        <UserAvatar currentImg={'/assets/images/avatars/logo.png'} />

        <div className="row my-5">
          <Typography variant="h5" className="text-muted my-3">
            Company colours
            <Link smooth to="/dashboard/company/adduser/1#colours">
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

          <Typography className="text-muted d-flex my-2">
            <div
              role="button"
              style={{ width: '25px', height: '25px', marginRight: '15px', overflow: 'hidden', borderRadius: '50%' }}
            >
              <input
                style={{ marginLeft: '-10px', marginTop: '-10px', height: '40px' }}
                type="color"
                value={mainColor}
                disabled
                onChange={(e) => setmainColor(e.target.value)}
                className="border-0"
              ></input>{' '}
            </div>
            Main colour: {mainColor}
          </Typography>
          <Typography className="text-muted d-flex my-2">
            <div
              role="button"
              style={{ width: '25px', height: '25px', marginRight: '15px', overflow: 'hidden', borderRadius: '50%' }}
            >
              <input
                style={{ marginLeft: '-10px', marginTop: '-10px', height: '40px' }}
                type="color"
                value={bgColor}
                disabled
                onChange={(e) => setbgColor(e.target.value)}
                className="border-0"
              ></input>{' '}
            </div>
            Background colour: {bgColor}
          </Typography>
        </div>
        <div className="row my-5">
          <Typography variant="h5" className="text-muted my-3">
            Contact person
            <Link smooth to="/dashboard/company/adduser/1">
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

          <Typography className="text-muted">Full name (Super user)</Typography>
          <Typography className="text-muted">E-mail address (Super user)</Typography>
        </div>

        <div className="row my-5">
          <Typography variant="h5" className="text-muted my-3">
            Company details
            <Link smooth to="/dashboard/company/adduser/1#companydetails">
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

          <Typography className="text-muted">JJ Sons Corp</Typography>
          <Typography className="text-muted">Schnetzen 2/1</Typography>
          <Typography className="text-muted">Xxxx Berg</Typography>
          <Typography className="text-muted">Germany</Typography>
          <Typography className="text-muted mt-4">HRB</Typography>
          <Typography className="text-muted">St-Nr.</Typography>
          <Typography className="text-muted">Ust-IdNr</Typography>
        </div>

        <div className="row my-5">
          <Typography variant="h5" className="text-muted my-3">
            Languages information
            <Link to="/dashboard/company/adduser/1#languages">
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
        <div className="row d-flex my-5 flex-wrap justify-items-between">
          <div className="col-sm-7">
            <Typography variant="h4">Billing information</Typography>
          </div>
          <div className="col-sm-5 text-end">
            <Link to="/dashboard/company/adduser/1#billing">
              <Button variant="contained" className="mx-2">
                Edit
              </Button>
            </Link>
            <Link smooth to="/dashboard/billings">
              <Button variant="contained" className="mx-2">
                Invoices
              </Button>
            </Link>
          </div>
        </div>

        <div className="row mb-5 ">
          <Typography variant="h5" className="text-muted mb-3">
            Payment details
            <Link to="/dashboard/company/adduser/1#billing">
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

          <Typography className="text-muted">Bank</Typography>
          <Typography className="text-muted">IBAN</Typography>
          <Typography className="text-muted">Ust-IdNr.</Typography>
          <Typography className="text-muted">Billing address: same as company address</Typography>
          <Typography className="text-muted mt-4 fst-italic">Payment method: credit card</Typography>
        </div>
        <div className="row mb-5 mt-4">
          <Typography variant="h5" className="text-muted mb-3">
            Billing plan
            <Link to="/dashboard/company/adduser/1#billingplan">
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

          <Typography className="text-muted">Professional plan user</Typography>
        </div>
        <div className="row mb-5 mt-4">
          <Typography variant="h5" className="text-muted mb-3">
            Inovices
            <Link to="/dashboard/company/adduser/1#inovices">
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

          <Typography className="text-muted">Monthly</Typography>
        </div>

        {/* <Notifications /> */}
      </Container>
    </div>
  );
};

export default Settings;
