import { useState } from "react";


const Home = () => {
 //hook useState
   const [name,setName] = useState('mar mar yay');
   const [age,setAge] = useState('20')
   //click on handleClick function
  const handleClick = () =>{
   setName('lu lunar')
   setAge('30')
  }
  const handleClickAgain = (name) =>{
    console.log('hello  '+ name );
  }
 

    return ( 
        <div className="home">
            <h1>HomePage now my home</h1>
            <p>{name} is {age} yr olds</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={handleClickAgain('maria')}> Click me again</button>
        </div>
     );
}
 
export default Home;