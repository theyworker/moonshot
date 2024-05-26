import { Box } from '@mui/material';
import React from 'react';
import { Filter } from './Filter';
import { DateFilter } from './DateFilter';

export const FilterWrapper = () => {
    return (
        <Box sx={{width: 600, padding: 3}}>

            <Filter value="From"/>
            <hr style={{border: '1px solid gray' }}/>
            <Filter value="To"/>
            <hr style={{border: '1px solid gray' }}/>

            <DateFilter />

        </Box>
    );
}