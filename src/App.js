

import Navbar from './Navbar';
import Home from './Home';


function App() {
  const title ='welcome to my application'
  const like  =30
  const link ='http://www.google.com'
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <h1>App component</h1>
        <Home/>
        
       
        {/* <h3>{title}</h3>
        <p>likes{like}</p>
        <p>{'hello thiri'}</p>
        <p>{[1,23,4]}</p>
        <a href={link}>google </a> */}
      </div>

    </div>
  );
}

export default App;
