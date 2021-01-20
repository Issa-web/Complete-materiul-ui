import { FormControl, FormControlLabel, FormLabel, Grid, makeStyles, Radio, RadioGroup, TextField } from '@material-ui/core';
import React , { useState, useEffect }from 'react'
import { useForm, Form} from "../../components/useForm"
import Input from "../../components/controls/Input"
// const useStyles = makeStyles(theme =>({
//     root:{
//         ' & .MuiFormControl-root':{
//             width: '80%',
//             margin: theme.spacing(1)
            
//         }
//     }
// }))

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
    const {
        values,
        setValues,
        handleInputChange
    } = useForm(initianlValues);

   
    return (
        <Form >
            <Grid container>
                <Grid item xs={6}>
                   <Input
                    name="fullName"
                    label="full Name"
                    value={values.fullName}
                    onChange={handleInputChange}

                    />
                    <Input
                    label='Email'
                    name='email'
                    value={values.email}
                    onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <FormControl>
                        <FormLabel>Gender</FormLabel>
                            <RadioGroup row
                            name="gender"
                            value={values.gender}
                            onChange={handleInputChange}>
                                <FormControlLabel value="male" control={<Radio />}  label="Male" />
                                <FormControlLabel value="female" control={<Radio />}label="Female" />
                                <FormControlLabel value="other" control={<Radio />} label="Other"/>
                            </RadioGroup>
                    </FormControl>
                </Grid>
            </Grid>
        </Form>
    )
}

export default EmployeeForm
