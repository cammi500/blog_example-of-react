// import { useState } from "react";
// import Blog from './Blog';

// const Home = () => {
//  //hook useState
//    const [name,setName] = useState('mar mar yay');
//    const [age,setAge] = useState('20')
//    //click on handleClick function
//   const handleClick = () =>{
//    setName('lu lunar')
//    setAge('30')
//   }
//   const handleClickAgain = (name) =>{
//     console.log('hello  '+ name );
//   }
 

//     return ( 
//         <div className="home">
//           <Blog/>
//             <h1>HomePage now my home</h1>
//             <p>{name} is {age} yr olds</p>
//             <button onClick={handleClick}>Click me</button>
//             <button onClick={handleClickAgain('maria')}> Click me again</button>
//         </div>
//      );
// }
 
// export default Home;
import { useState } from "react";
import BlogList from "./BlogList";
const Home = () => {
  //outting list
   const [blogs,setBlogs] = useState([
    {title:'My new Blog',body :'lorem ... ',author:'Su su',id:1},
    {title:'welcome party',body :'lorem ... ',author:'Yo shi',id:2},
    {title:'web  dev top tips',body :'lorem ... ',author:'Thiri',id:3}
   ]);

   const handelDelete = (id) => {
      const newBlogs = blogs.filter(blog => blog.id !== id);
      setBlogs(newBlogs);
   }
  return ( 
    <div className="home">
      <BlogList blogs={blogs} title="All of my blogs" handelDelete={handelDelete}/>
      <BlogList blogs={blogs.filter((blog) => blog.author === 'Su su')} title="Su Su Blog!" handelDelete={handelDelete}/>
    </div>
   );
}
 
export default Home;