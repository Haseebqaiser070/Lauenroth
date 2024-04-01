import { Button } from '@mui/material';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Iconify from 'src/components/iconify/Iconify';

export default function Menu({ page }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="row my-4 text-start">
        <div>
          <Button onClick={() => navigate(-1)} startIcon={<Iconify icon="mingcute:left-fill" />}>
            Back
          </Button>
        </div>
      </div>
      <Link
        to="/dashboard/company/company_settings"
        className={(page === 'settings' ? 'menu-tab-btn  ' : 'bg-white text-muted ') + 'btn px-4 py-2 my-2  rounded-0'}
        style={{ border: '1px solid #EFEFEF' }}
      >
        <b>Account settings</b>
      </Link>
      <Link
        to="/dashboard/company/comapny_users"
        className={(page === 'users' ? 'menu-tab-btn  ' : 'bg-white text-muted ') + 'btn  px-4 py-2 my-2 rounded-0'}
        style={{ border: '1px solid #EFEFEF' }}
      >
        <b>Users</b>
      </Link>
      <Link
        to="/dashboard/company/comapny_content"
        className={(page === 'content' ? 'menu-tab-btn  ' : 'bg-white text-muted ') + 'btn  px-4 py-2 my-2 rounded-0'}
        style={{ border: '1px solid #EFEFEF' }}
      >
        <b>Content</b>
      </Link>
    </>
  );
}
