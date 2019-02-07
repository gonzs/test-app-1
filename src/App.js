import React, { Component, Fragment } from 'react';
import './App.css';
import Title from './Title.js';
import Content from './Content.js';

// class App extends Component {
//   render() {
//     return (
//       <Fragment>
//         <Title />
//         <br />
//         <Content />
//       </Fragment>
//     );
//   }
// }
// export default App;


const App = () => (
  <Fragment>
    <Title />
    <br />
    <Content />
  </Fragment>
)
export default App;