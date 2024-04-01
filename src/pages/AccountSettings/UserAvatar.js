import React from 'react';
import { Avatar, IconButton, Badge, styled, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Iconify from 'src/components/iconify/Iconify';

import { alpha } from '@mui/material/styles';
import { toast } from 'react-toastify';

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 30,
  padding: '5px',
  height: 30,
  // border: `2px solid ${theme.palette.background.paper}`,
  backgroundColor: alpha(theme.palette.logo[0], 1),
}));

const useStyles = makeStyles((theme) => ({
  hover: {
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
    },
  },
}));
export default function UserAvatar({ currentImg }) {
  const [img, setImg] = React.useState('');
  const classes = useStyles();

  const updateProfile = () => {
    setImg();
    return toast.success('Profile Image Chnaged.');
  };
  return (
    <div className="row my-5">
      <div>
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          badgeContent={
            <SmallAvatar>
              <IconButton color="primary" className={classes.hover} aria-label="upload picture" component="label">
                <Iconify className="text-white" icon="pepicons-pop:pen" />
                <input
                  name="image"
                  accept="image/*"
                  type="file"
                  onChange={(e) => setImg(e.target.files[0])}
                  style={{ display: 'none' }}
                />
              </IconButton>
            </SmallAvatar>
          }
        >
          <Avatar
            sx={{ width: 125, height: 125, objectFit: 'cover', border: '2px solid gray' }}
            alt="Upload"
            src={img ? URL.createObjectURL(img) : currentImg}
          />
        </Badge>
        {img ? (
          <Button onClick={() => updateProfile()} variant="outlined" className="ms-4" color="primary">
            Save Changes
          </Button>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
