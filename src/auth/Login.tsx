import React, { useState } from 'react'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { logout, signInUser } from '../redux/authSlice';
import { useDispatch } from 'react-redux';

const theme = createTheme();

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const disptach = useDispatch();

    const handleLogin = () => {
        console.log(email, password)
        disptach(signInUser({ email, password }))
    }

    const logoutHandle = () => {
        disptach(logout)
    }


    return (
        <>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >

                        <Typography component="h1" variant="h5" sx={{ fontWeight: '600' }}>
                            Login
                        </Typography>
                        <Box component="form" noValidate sx={{ mt: 3 }}>
                            <Grid container spacing={2}>

                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth

                                        label="Email Address"

                                        autoComplete="email"
                                        onChange={(e: any) => setEmail(e.target.value)}
                                        value={email}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"

                                        onChange={(e: any) => setPassword(e.target.value)}
                                        value={password}
                                    />
                                </Grid>

                            </Grid>
                            <Button

                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={handleLogin}
                            >
                                Login
                            </Button>

                            <Button

                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={logoutHandle}
                            >
                                Logout
                            </Button>

                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link href="/register" variant="body2">
                                        Don&apos;t have an account? Sign up
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>

                </Container>
            </ThemeProvider>
        </>
    )
}

export default Login