import React from 'react'
import { TextField, Grid } from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form';
import Input from "@material-ui/core/Input";


const FormInput = ({ name, label }) => {
    const { control } = useFormContext();
    
    return (
        <Grid item xs={12} sm={6}>
        <Controller
            as={TextField}
            control={control}
            fullWidth
            render={({ field }) => <Input name={name} placeholder={label} required {...field}  />}
            />
        </Grid>
    )
}

export default FormInput
