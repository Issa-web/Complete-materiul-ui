import { Grid, makeStyles, TextField } from '@material-ui/core';
import React , { useState, useEffect }from 'react'


const useStyles = makeStyles(theme =>({
    root:{
        ' & .MuiFormControl-root':{
            width: '80%',
            margin: theme.spacing(1)
            
        }
    }
}))

const initianlValues = {
    id: 0,
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    gender: 'male',
    departmentId: '',
    hireDate: new Date(),
    isPermanent: false,
}

function EmployeeForm() {
    const [values, setValues ] = useState(initianlValues);
    const classes = useStyles()

    const handleInputChange = e =>{
        const {name, value } = e.target
        setValues({
            ...values,
            [name]: value

        })
    }
    return (
        <form className={classes.root}>
            <Grid container>
                <Grid item xs={6}>
                    <TextField 
                    variant='outlined'
                    label='Full Name'
                    name = "fullName"
                    value={values.fullName}
                    onChange = {handleInputChange}
                    />
                    <TextField 
                    variant='outlined'
                    label='Email'
                    name='email'
                    value={values.email}
                    />
                </Grid>
                <Grid item xs={6}>
                    
                </Grid>
            </Grid>
        </form>
    )
}

export default EmployeeForm
