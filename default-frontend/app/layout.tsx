'use client';

import './globals.css'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import React from "react";
import Nav from './components/Nav/Nav';
import { Container } from '@mui/material';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body style={{margin: 0}}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Nav/>
                <Container maxWidth="md" sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                  {children}
                </Container>
            </LocalizationProvider>
        </body>
    </html>
  )
}
