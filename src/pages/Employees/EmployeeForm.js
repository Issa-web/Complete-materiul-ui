import { FormControl, FormControlLabel, FormLabel, Grid, makeStyles, Radio, RadioGroup, TextField } from '@material-ui/core';
import React , { useState, useEffect }from 'react'
import { useForm, Form} from "../../components/useForm"
import Controls from "../../components/controls/Controls"



const genderItems =[
    {id:"male", title:"Male"},
    {id:"female", title:"Female"},
    {id:"other", title:"Other"},

]

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
                   <Controls.Input
                    name="fullName"
                    label="full Name"
                    value={values.fullName}
                    onChange={handleInputChange}

                    />
                    <Controls.Input
                    label='Email'
                    name='email'
                    value={values.email}
                    onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controls.RadioGroup
                        name="gender"
                        label="Gender"
                        value={values.gender}
                        onChange={handleInputChange}
                        items={genderItems}
                    />
                   
                </Grid>
            </Grid>
        </Form>
    )
}

export default EmployeeForm
