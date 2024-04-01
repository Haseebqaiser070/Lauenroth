import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Iconify from 'src/components/iconify/Iconify';
import {
  Typography,
  Button,
  Stack,
  IconButton,
  FormControl,
  InputAdornment,
  Container,
  TextField,
  MenuItem,
  InputLabel,
  Select,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Confirm from 'src/components/Confirmations/Confirm';
import { toast } from 'react-toastify';
import { FileUploader } from 'react-drag-drop-files';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import dayjs from 'dayjs';

export default function AddPost() {
  const [category, setCategory] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [cancelDialogOpen, setCancelDialogOpen] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setFile(
        'https://hips.hearstapps.com/hmg-prod/images/running-is-one-of-the-best-ways-to-stay-fit-royalty-free-image-1036780592-1553033495.jpg?crop=0.88976xw:1xh;center,top&resize=100:*"'
      );
    }
  }, []);

  const handleOpenSaveDialog = () => {
    setDeleteDialogOpen(true);
  };

  const handleCloseSaveDialog = () => {
    setDeleteDialogOpen(false);
  };

  const saveData = () => {
    handleCloseSaveDialog();
    return toast.success('Changes saved successfully');
  };
  const handleCancelDialogOpen = () => {
    setCancelDialogOpen(true);
  };

  const handleCloseCancelDialog = () => {
    setCancelDialogOpen(false);
  };

  const cancelSave = () => {
    handleCancelDialogOpen();
  };

  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  const handleFileChange = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setFile(reader.result);
    };
    reader.readAsDataURL(file);
  };
  const uploadNewfile = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      // Use FileReader to read the file and get a data URL
      const reader = new FileReader();
      reader.onloadend = () => {
        // Set the preview image URL to the result of FileReader
        setFile(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const fileTypes = ['jpeg', 'jpg', 'png', 'gif'];

  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };

  // const deleteFile = () => {
  //   setFile(null);
  //   toast.success('File Deleted Successfully');
  //   handleCloseCancelDialog();
  // };
  return (
    <div>
      <Helmet>
        <title> {id ? 'Edit' : 'Add'} Post Details | Lauenroth</title>
      </Helmet>
      <Confirm
        title="Are you sure you want to save changes?"
        subtitle={'Changes will be saved.'}
        open={deleteDialogOpen}
        onClose={handleCloseSaveDialog}
        onConfirm={saveData}
      />
      <Confirm
        title="Are you sure you want to cancel?"
        subtitle={'Changes will not be saved.'}
        open={cancelDialogOpen}
        onClose={handleCloseCancelDialog}
        onConfirm={()=>navigate(-1)}
      />
      <Container>
        <div className="row my-4 text-start">
          <div>
            <Button onClick={() => navigate(-1)} startIcon={<Iconify icon="mingcute:left-fill" />}>
              Back
            </Button>
          </div>
        </div>

        <div className="row d-flex mt-4 flex-wrap justify-items-between">
          <div className="col-sm-10">
            <Typography variant="h4">Posts</Typography>
          </div>
        </div>

        <div className="row my-5">
          <Typography variant="h5" className=" my-3">
            {id ? 'Edit' : 'Add new'} post
          </Typography>

          <div className=" my-2 col-md-8 d-flex align-items-center flex-wrap">
            <div className="col-md-3 col-12 text-muted">
              <b>Headline:</b>
            </div>
            <div className="col-md-9 col-12 d-flex flex-wrap">
              <TextField className="my-2 col-md col-12 mx-1" label="Headline Post" variant="outlined" fullWidth />{' '}
            </div>
          </div>
          <div className=" my-2 col-md-8 d-flex align-items-start flex-wrap">
            <div className="col-md-3 col-12 text-muted">
              <b>Category:</b>
            </div>
            <FormControl className="my-2 col mx-1">
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                fullWidth
                label="Category"
                onChange={(e) => setCategory(e.target.value)}
              >
                <MenuItem selected value={'English'}>
                  Movement
                </MenuItem>
                <MenuItem value={'Dutch'}>Nutration</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className=" my-2 col-md-8 d-flex align-items-start flex-wrap">
            <div className="col-md-3 col-12 text-muted">
              <b>Body copy:</b>
            </div>
            <TextField
              multiline
              rows={4}
              className="my-2 col-md col-12 mx-1"
              label="Add copy here"
              variant="outlined"
              fullWidth
            />{' '}
          </div>

          <div className=" my-2 col-md-8 d-flex align-items-start flex-wrap">
            <div className="col-md-3 col-12 text-muted">
              <b>Image:</b>
            </div>
            <div className="col d-flex flex-wrap align-items-center">
              {(id && file) || file ? (
                <>
                  <img src={file} width={'55px'} />
                  <Button
                    className="mx-2"
                    onClick={handleButtonClick}
                    startIcon={<Iconify icon="material-symbols:upload" />}
                  >
                    Upload new file
                  </Button>
                  <Button
                    className="mx-2"
                    onClick={() => handleCancelDialogOpen()}
                    color="error"
                    startIcon={<Iconify icon="material-symbols:delete" />}
                  >
                    Delete
                  </Button>
                  {/* Hidden file input element */}
                  <input
                    type="file"
                    ref={fileInputRef}
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={(file) => uploadNewfile(file)}
                  />
                </>
              ) : (
                <div className="uploader-wrapper text-muted w-100">
                  <FileUploader
                    className="col-12"
                    handleChange={(file) => handleFileChange(file)}
                    name="file"
                    types={fileTypes}
                  >
                    <div
                      className="rounded-3 w-100 d-flex flex-wrap align-items-center justify-content-center  p-5"
                      style={{ borderStyle: 'dotted', borderWidth: '2px', borderColor: '#797979' }}
                      role="button"
                    >
                      <div className="w-100 text-center">
                        <Iconify style={{ opacity: '0.3' }} icon="material-symbols:upload" width="50px" height="50px" />
                      </div>
                      <Typography className="text-center w-100">Drag & drop your file here</Typography>
                      <b className="w-100 text-center">
                        Or browse files <Iconify className="text-primary" icon="ep:right" />{' '}
                      </b>
                    </div>
                  </FileUploader>
                </div>
              )}
            </div>
          </div>

          <div className=" my-2 col-md-8 d-flex align-items-center flex-wrap">
            <div className="col-md-3 col-12 text-muted">
              <b>Poste date:</b>
            </div>
            <div className="col d-flex flex-wrap align-items-center justify-content-between">
              <LocalizationProvider className="col-md col-12 my-2 mx-3" dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                  <DatePicker label="Date" />
                </DemoContainer>
              </LocalizationProvider>
              <LocalizationProvider className="col-md col-12 my-2 mx-3" dateAdapter={AdapterDayjs}>
                <DemoContainer components={['TimePicker']}>
                  <MobileTimePicker label="Time" defaultValue={dayjs('2022-04-17T15:30')} />
                </DemoContainer>
              </LocalizationProvider>
            </div>
          </div>

          <div className="row my-2">
            <div>
              <FormControlLabel control={<Checkbox defaultChecked />} label="Post now" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="d-flex justify-content-end">
            <Button variant="outlined" onClick={() => handleCancelDialogOpen()} className="me-3">
              Cancel
            </Button>
            <Button variant="contained" onClick={() => handleOpenSaveDialog()} className="me-3">
              Save draft
            </Button>
            <Button variant="contained" onClick={() => handleOpenSaveDialog()}>
              Post
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
