import React from 'react'
import EmployeeForm from './EmployeeForm'
import PageHeader from "../../components/PageHeader"
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';

function Employees() {
    return (
    <>    
        <PageHeader 
        title="New Employee"
        subTitle="Form design with validation"
        icon ={<PeopleOutlineIcon  fontSize="large"/> }
        />
        <EmployeeForm />
    </> 
    )
}

export default Employees
