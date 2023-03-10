import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }
    render() {
        if (this.state.isLoggedIn) {
            return (
                <div>Welcome Nishi</div>
            )
        }
        else {
            return (
                <div>Welcome Guest</div>
            )
        }
    }
    render() {

        return this.state.isLoggedIn && <div>Welcome Nishi</div>
        // return(
        //     this.state.isLoggedIn ?
        //    ( <div>Welcome Nishi</div>) :
        //     (<div>Welcome Guest</div>)
        // )
        //     let message
        //     if(this.state.isLoggedIn) {
        //         message = <div>Welcome Nishi</div>
        //     }
        //     else {
        //         message = <div>Welcome Guest</div>
        //     }
        //     return  <div>{ message }</div>
        // }


        // return (
        //     <div>
        //     <div>Welcome Nishi</div>
        //     <div>Welcome Guest</div>
        //     </div>
        // )

    }
}    

export default UserGreeting