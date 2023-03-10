import React, { Component } from 'react'
import { UserConsumer } from './usercontext';

class ComponentF extends Component {
  render() {
    return (
    //   <div>
    //     Component F
    //   </div>
    <UserConsumer>
        {username => {
                return <div> Hello {username}</div>
            }
        } 
    </UserConsumer>
    )
  }
}

export default ComponentF
