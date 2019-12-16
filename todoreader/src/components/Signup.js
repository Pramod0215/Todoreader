import React, { Component } from 'react';



class Signup extends Component{
    render(){
        return(
            <div>
                <div>
                    UserName: <input type="text"/>
                    Password : <input type="password" />
                    Confirm Password: <input type="password"/>
                    <button >Submit</button>
                </div>
            </div>
        )
    }
}

export default Signup;