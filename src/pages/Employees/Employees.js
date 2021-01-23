import React, {useState} from 'react'
import EmployeeForm from './EmployeeForm'
import PageHeader from "../../components/PageHeader"
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import { makeStyles, Paper, TableBody, TableCell, TableRow, Toolbar } from '@material-ui/core';
import useTable from '../../components/controls/useTable';
import * as employeeService from "../../Services/employeeService"
import Controls from "../../components/controls/Controls"
const useStyles = makeStyles(theme =>({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))

const headCells = [
    {id: " fullName", label:"Employee Name"},
    {id: " email", label:"Email Address (Personnal)"},
    {id: " fullName", label:"Mobile Number"},
    {id: " fullName", label:"Department", disableSorting:true},
]


function Employees() {

    const classes = useStyles();
    const [records, setRecords] = useState(employeeService.getAllEmployees());

    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    } = useTable(records, headCells);

    return (
    <>    
        <PageHeader 
        title="New Employee"
        subTitle="Form design with validation"
        icon ={<PeopleOutlineIcon  fontSize="large"/> }
        />
        <Paper className={classes.pageContent}>
             {/* <EmployeeForm /> */}
             <Toolbar>
                <Controls.Input
                    label="Search Employees"
                />
             </Toolbar>
             <TblContainer>
                 <TblHead />
                 <TableBody>
                    {
                         recordsAfterPagingAndSorting().map(item =>(
                            <TableRow key={item.id}>
                                <TableCell>{item.fullName}</TableCell>
                                <TableCell>{item.email}</TableCell>
                                <TableCell>{item.mobile}</TableCell>
                                <TableCell>{item.department}</TableCell>
                            </TableRow>
                        ))
                    }
                 </TableBody>
             </TblContainer>
             <TblPagination />
        </Paper>
        
    </> 
    )
}

export default Employees


