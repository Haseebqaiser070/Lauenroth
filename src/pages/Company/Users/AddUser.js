import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Iconify from 'src/components/iconify/Iconify';
import { Typography, Button, Stack, IconButton, InputAdornment, Container, TextField } from '@mui/material';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Confirm from 'src/components/Confirmations/Confirm';
import { toast } from 'react-toastify';
import Autocomplete from '@mui/material/Autocomplete';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function AddUser() {
  const [showPassword, setShowPassword] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [cancelDialogOpen, setCancelDialogOpen] = useState(false);
  const [role, setRole] = React.useState('');

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  const { id } = useParams();
  const navigate = useNavigate();
  const handleOpenSaveDialog = () => {
    setDeleteDialogOpen(true);
  };

  const handleCloseSaveDialog = () => {
    setDeleteDialogOpen(false);
  };

  const saveData = () => {
    handleCloseSaveDialog();
    return toast.success('Changes Saved Successfully');
  };
  const handleCancelDialogOpen = () => {
    setCancelDialogOpen(true);
  };

  const handleCloseCancelDialog = () => {
    setCancelDialogOpen(false);
  };

  const cancelSave = () => {
    handleCancelDialogOpen();
    navigate(-1);
  };
  return (
    <div>
      <Helmet>
        <title> User Account | Lauenroth</title>
      </Helmet>
      <Confirm
        title="Are you sure you want to save changes?"
        subtitle={'Changes will be permanent.'}
        open={deleteDialogOpen}
        onClose={handleCloseSaveDialog}
        onConfirm={saveData}
      />
      <Confirm
        title="Are you sure you want to cancel?"
        subtitle={'Changes will be unsaved.'}
        open={cancelDialogOpen}
        onClose={handleCloseCancelDialog}
        onConfirm={cancelSave}
      />
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="start" mt={2} mb={2}>
          <div className="w-100">
            <Link onClick={() => navigate(-1)}>
              <Button>
                <Iconify className="me-1" icon="ion:caret-back-outline" />
                Back
              </Button>
            </Link>
          </div>
        </Stack>

        <div className="row d-flex mt-4 flex-wrap justify-items-between">
          <div className="col-sm-10">
            <Typography variant="h4">{id ? 'Edit' : 'Add new'} user</Typography>
            {/* <Typography className="mt-3" variant="h4">Company: company name</Typography> */}
          </div>
        </div>

        <div className="row my-5">
          <Typography variant="h5" className=" my-3">
            Personal information
          </Typography>

          <div className=" my-2 col-md-8 d-flex align-items-center flex-wrap">
            <div className="col-md-3 col-12 text-muted">
              <b>Full name:</b>
            </div>
            <div className="col-md-9 col-12 d-flex flex-wrap">
              <TextField className="my-2 col-md col-12 mx-1" label="Surname" variant="outlined" fullWidth />{' '}
              <TextField className="my-2 col-md col-12 mx-1" label="First name" variant="outlined" fullWidth />{' '}
            </div>
          </div>
          <div className=" my-2 col-md-8 d-flex align-items-center flex-wrap">
            <div className="col-md-3 col-12 text-muted">
              <b>E-mail address:</b>
            </div>
            <div className="col-md-9 col-12 d-flex flex-wrap">
              <TextField className="my-2 col-md col-12 mx-1" label="E-mail address" variant="outlined" fullWidth />{' '}
            </div>
          </div>
          <div id="password" className=" my-2 col-md-8 d-flex align-items-center flex-wrap">
            <div className="col-md-3 col-12 text-muted">
              <b>Phone number:</b>
            </div>
            <div className="col-md-9 col-12 d-flex flex-wrap">
              <TextField className="my-2 col-md col-12 mx-1" label="Phone number" variant="outlined" fullWidth />{' '}
            </div>
          </div>
        </div>

        <div className="row my-5">
          <Typography variant="h5" className=" my-3">
            Password
          </Typography>

          <div className=" my-2 col-md-8 d-flex align-items-center flex-wrap">
            <div className="col-md-3 col-12 text-muted">
              <b>Login code:</b>
            </div>
            <div id="languages" className="col-md-9 col-12 d-flex flex-wrap align-items-center">
              <TextField
                name="password"
                label="Password"
                className="col-md col-12 mx-1 my-2"
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                        <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />{' '}
              <Button variant="contained" className="py-3">
                <Iconify className="me-1" icon="fa:repeat" />
                New Code
              </Button>
            </div>
          </div>
        </div>

        <div className="row my-5">
          <Typography variant="h5" className=" my-3">
            Languages
          </Typography>

          <div id="role" className=" my-2 col-md-8 d-flex align-items-center flex-wrap">
            <div className="col-md-3 col-12 text-muted">
              <b>Languages:</b>
            </div>
            <div className="col-md-9 col-12 d-flex flex-wrap">
              <Autocomplete
                multiple
                // disabled={id ? true : false}
                id="tags-outlined"
                options={['English', 'Arabic', 'French', 'Italian', 'German', 'Hindi', 'Urdu', 'Spanish']}
                getOptionLabel={(option) => option}
                fullWidth
                defaultValue={['English', 'German']}
                filterSelectedOptions
                renderInput={(params) => <TextField {...params} label="Languages" placeholder="Languages" />}
              />
            </div>
          </div>
        </div>
        <div className="row my-5">
          <Typography variant="h5" className=" my-3">
            Role
          </Typography>

          <div className=" my-2 col-md-8 d-flex align-items-center flex-wrap">
            <div className="col-md-3 col-12 text-muted">
              <b>Role:</b>
            </div>
            <div className="col-md-9 col-12 d-flex flex-wrap">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Role</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={role}
                  label="Role"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>User</MenuItem>
                  <MenuItem value={30}>Content Admin</MenuItem>
                  <MenuItem value={20}>Admin</MenuItem>
                  <MenuItem value={30}>Super Admin</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="d-flex justify-content-end">
            <Button variant="outlined" onClick={() => handleCancelDialogOpen()} className="me-3">
              Cancel
            </Button>
            <Button variant="contained" onClick={() => handleOpenSaveDialog()}>
              Save changes
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
