import React from 'react'

function Employee() {
    const Employee=[
            {'EmpName':'John','Designation':'Developer'},
            {'EmpName':'Meenu','Designation':'Tester'},
            {'EmpName':'Amal','Designation':'Hr'},
            {'EmpName':'Kiran','Designation':'Developer'}
    ]
  return (
    <div>
        <h2>Employee Details</h2>
        {
            Employee.map(item =>(
                <div>
                    <br/><br/>
                    UserName : {item.EmpName}
                    <br/>
                    Designation : {item.Designation}
                </div>
            ))
        }
    </div>
  )
}

export default Employee