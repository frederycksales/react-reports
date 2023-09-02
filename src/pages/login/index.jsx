import { useState } from 'react';
import { Button, TextField, Box, Typography, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const Login = () => {
  const [values, setValues] = useState({
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleLogin = () => {
    // Aqui, você colocaria o código para lidar com a lógica de login.
    console.log("Logged in with:", values.password);
  };

  return (
    <Box minWidth="160px" alignContent="center" margin="auto" px={2} pt={10}>
      <Typography variant="h2" align="center">
        Login
      </Typography>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="username"
        label="Username"
        name="username"
        autoComplete="username"
        autoFocus
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type={values.showPassword ? 'text' : 'password'}
        id="password"
        autoComplete="current-password"
        value={values.password}
        onChange={handleChange('password')}
        InputProps={{
          endAdornment: (
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
            >
              {values.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          ),
        }}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        onClick={handleLogin}
      >
        Sign In
      </Button>
    </Box>
  );
}

export default Login;