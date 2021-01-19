import React , { userState, useEffect }from 'react'


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

function EmployeeForm(initianlValues) {
    const [values, serValues ] = useState();

    return (
        <div>
            
        </div>
    )
}

export default EmployeeForm
