import logo from './logo.svg';
import React, { Component } from 'react'
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList';
// import Person from './Components/Person';
import Stylesheet from './components/Stylesheet'
import Inline from './components/Inline'
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form'
import LifecycleA from './components/LifecycleA'
import LifecycleB from './components/LifecycleB'
import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter';
import withCounter from './components/withCounter';
import ComponentC from './components/ComponentC';
// import ComponentE from './components/ComponentE';
// import ComponentF from './components/ComponentF';
import { UserProvider } from './components/usercontext';


class App extends Component {
  render() {
    return (
      <div className="App">
        <UserProvider value= "Nishi">
          <ComponentC />
        </UserProvider>
        {/* <ComponentE />
        <ComponentF /> */}
        {/* <ClickCounter name='nishi'/> */}
        {/* <HoverCounter />
      <withCounter /> */}
        {/* <LifecycleA />
      <LifecycleB /> */}
        {/* <Form /> */}
        {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}
        {/* <Inline/> */}

        {/* <Stylesheet  primary = {true}/> */}
        {/* <NameList/> */}
        {/* <Person/> */}
        {/* {<UserGreeting/> }
      { <Greet name="Diana" heroName="Wonder Woman" /> 
      <Welcome name="Bruce" heroName="Batman" /> } */}
      </div>
    );
  }
}
export default App;

// import logo from './logo.svg';
// import './App.css';
// import Title from './Component/Title';
// import Home from './Pages/Home';
// import Counter from './Component/Counter';

// function App() {
//   return (
//     <div className="App">
//       <Title title="Title-1" des="Description-1"></Title>
//       <Title title="Title-2" des="Description-2"></Title>
//       <Title title="Title-3" des="Description-3"></Title>
//       <Home></Home>
//       <Counter></Counter>
//     </div>
//   );
// }

// export default App;


// import React, { useState } from "react";
// import About from "./Pages/About";
// import Home from "./Pages/Home";

// function App() {
//   const [ack, setack] = useState(true);

//   const change = () => {
//     setack(!ack);
//   };

//   return (
//     <>
//       {ack ? <Home /> : <About />}
//       <button onClick={change}>change</button>
//     </>
//   );
// }

// export default App;
