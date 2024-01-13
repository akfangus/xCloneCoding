'use client';

import { Box } from '@mui/material';
import React from 'react';

export default function Container({ children }: { children: React.ReactNode }) {
    return (
        <Box
            sx={{
                display: 'flex',
                width: '100%',
                height: '100%',
                mx: 'auto',
                px: 2,
                bgcolor: '#F4F6F8',
            }}
        >
            {children}
        </Box>
    );
}
