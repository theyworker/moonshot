import { Box } from '@mui/material';
import React from 'react';
import { Filter } from './Filter';
import { DateFilter } from './DateFilter';

export const FilterWrapper = () => {
    const [from, setFrom] = React.useState('');
    const [to, setTo] = React.useState('');
    const [date, setDate] = React.useState('');
    return (
        <Box sx={{width: 300, padding: 3}}>

            <Filter value="From" selected={from} handleSelected={setFrom}/>
            <hr style={{border: '1px solid gray' }}/>
            <Filter value="To"/>
            <hr style={{border: '1px solid gray' }}/>

            <DateFilter />

        </Box>
    );
}