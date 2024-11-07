import React from "react";

function Student({name,age}){
    return(
        <div>
            <h1>name : {name},  age : {age}</h1>
   
        </div>
    )
}
function College(){
    return(
        <div>
            <Student name={'tonySundar'} age={22}/>
            <Student name={'ravi'} age={23}/>
        </div>
    )
}

export default College;