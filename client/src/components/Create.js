import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Grid, Typography, Paper } from '@material-ui/core';


function Create() {

  return (
      <Grid container justify="center" alignItems="center" direction="column" style={{minHeight:"100vh"}}>
      
        <Grid item>
          <Typography variant="h5" color="primary">
            Coffee Hour
          </Typography>
        </Grid>
        
        <CreateForm/>
         
      </Grid>
    )
}

const CreateForm = () => {
  const [capacity, setCapacity] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setCapacity(event.target.value);
  }

  return (
    <Grid item>
        {/* Set display name */}
        <TextField id="display-name-field" label="Display Name" variant="outlined" fullWidth style={{marginBottom: '2em'}}/>
        
        {/* Set Description */}
        <TextField id="description-field" label="Description" variant="outlined" fullWidth style={{marginBottom: '2em'}}/>
        
        {/* Set Capacity */}
        <Grid container direction="column" alignItems="center" justify="center">
          <FormControl fullWidth>
            <InputLabel id="capacity-select-label">Capacity</InputLabel>
            <Select
              labelId="capacity-field"
              id="capacity-select"
              value={capacity}
              label="Capacity"
              onChange={handleChange}
            >
              <MenuItem value={2}>Two</MenuItem>
              <MenuItem value={3}>Three</MenuItem>
              <MenuItem value={4}>Four</MenuItem>
              <MenuItem value={5}>Five</MenuItem>
              <MenuItem value={6}>Six</MenuItem>
            </Select>
          </FormControl>
          <Button variant='contained' color='primary' size="large" style={{marginTop: '2em', marginBottom:'2em'}}>Let's Talk!</Button>
        </Grid>
      </Grid>
  )
}

export default Create;