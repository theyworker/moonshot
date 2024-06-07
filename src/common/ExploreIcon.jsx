import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import Typography from '@mui/material/Typography';

export const ExploreIcon = () => {
  return (
    <div>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography variant="h6" component="div" sx={{ color: 'black', fontSize: '1.2rem', paddingLeft: '30px', marginBottom: '-10px' }}>
            Explore
            </Typography>
        </Link>
    </div>
  )
}