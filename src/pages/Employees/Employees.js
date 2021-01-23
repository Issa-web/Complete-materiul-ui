import React, {useState} from 'react'
import EmployeeForm from './EmployeeForm'
import PageHeader from "../../components/PageHeader"
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import { InputAdornment, makeStyles, Paper, TableBody, TableCell, TableRow, Toolbar } from '@material-ui/core';
import useTable from '../../components/controls/useTable';
import * as employeeService from "../../Services/employeeService"
import Controls from "../../components/controls/Controls"
import { Search } from '@material-ui/icons';

const useStyles = makeStyles(theme =>({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    searchInput:{
        width: '75%'
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
    const [filterFn, setfilterFn] = useState({fn: items => {return items} })

    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    } = useTable(records, headCells, filterFn);

     const handleSearch = (e) =>{
         let target = e.taget;
         setfilterFn({
             fn: items =>{
                if(target.value ==="")
                    return items;
                else
                    return items.filter(x => x.fullName.toLoweCase().includes(target.value))
                   
                       
                
             }
         })

     }


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
                    className={classes.searchInput}
                    InputProps= {{
                        startAdornment:( <InputAdornment position='start'>
                            <Search/>
                        </InputAdornment>)
                    }}
                    onChange={{handleSearch}}
                    
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


