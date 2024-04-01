import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm, Controller, useFormContext } from 'react-hook-form';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox, Alert } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import Iconify from '../../../components/iconify';
import Typography from 'src/theme/overrides/Typography';

// ----------------------------------------------------------------------
import { db, auth } from '../../../firebase';
import { toast } from 'react-toastify';
import { getDocs, collection, query, where, doc, setDoc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { getFunctions, httpsCallable } from 'firebase/functions';
import { createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from 'firebase/auth';
import CircularProgress from '@mui/material/CircularProgress';
export default function SignupForm() {
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
    reset,
  } = useForm();
  const [isProcessing, setisProcessing] = useState(false);

  const onSubmit = async (data) => {
    navigate('/thank-you');

    // Omit the password and confirmPassword fields from the Firestore document data
    const userData = {
      firstName: data.firstName,
      lastName: data.lastName,
      username: data.username,
      email: data.email,
      phoneNumber: data.phoneNumber,
    };

    // Set isProcessing to true to indicate that the form is being processed
    // setisProcessing(true);
  };
  // Function to update the inviter document with the new user data

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            rules={{ required: 'Name is required' }}
            render={({ field }) => (
              <TextField
                InputProps={{
                  style: {
                    backgroundColor: 'white',
                  },
                }}
                {...field}
                label="Name"
                error={!!errors.firstName}
                helperText={errors.firstName?.message}
              />
            )}
          />

          <Controller
            name="lastName"
            control={control}
            defaultValue=""
            rules={{ required: 'Surname is required' }}
            render={({ field }) => (
              <TextField
                InputProps={{
                  style: {
                    backgroundColor: 'white',
                  },
                }}
                {...field}
                label="Surname"
                error={!!errors.lastName}
                helperText={errors.lastName?.message}
              />
            )}
          />
          <Controller
            name="companyName"
            control={control}
            defaultValue=""
            rules={{ required: 'Company name is required' }}
            render={({ field }) => (
              <TextField
                InputProps={{
                  style: {
                    backgroundColor: 'white',
                  },
                }}
                {...field}
                label="Company"
                error={!!errors.companyName}
                helperText={errors.companyName?.message}
              />
            )}
          />

          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            }}
            render={({ field }) => (
              <TextField
                InputProps={{
                  style: {
                    backgroundColor: 'white',
                  },
                }}
                {...field}
                label="Email address"
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            )}
          />
        </Stack>

        <LoadingButton
          disabled={isProcessing}
          fullWidth
          className="mt-4"
          size="large"
          type="submit"
          variant="contained"
        >
          {isProcessing ? <CircularProgress className="text-white" size={27} /> : 'Sign up'}
        </LoadingButton>
      </form>
    </>
  );
}
