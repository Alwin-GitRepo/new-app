import React from 'react'

function Demo({userfullname,userAge}) {
    console.log(userfullname);
    console.log(userAge);
  return (
    <div>
        <h1>Demo Component</h1>
        <h3>UserName : {userfullname}</h3>
        <h3>UserAge : {userAge}</h3>
    </div>

  )
}

export default Demo