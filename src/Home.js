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
import Gold from "./Gold";
const Home = () => {
  //outing list
   const [blogs,setBlogs] = useState([
    {title:'My new Blog',body :'lorem ... ',author:'Su su',id:1},
    {title:'welcome party',body :'lorem ... ',author:'Yo shi',id:2},
    {title:'web  dev top tips',body :'lorem ... ',author:'Thiri Aung',id:3}
   ]);

   const [golds,setGolds] = useState([
    {title:'gold chin',body :'lorem ... ',type:'big',name:'aung',id:4},
    {title:'silver chin',body :'lorem ... ',type:'small',name:'kyaw',id:5},
    {title:'plaitinum chin',body :'lorem ... ',type:'large',name:'juju',id:6},
   ])

   const handelDelete = (id) => {
      const newBlogs = blogs.filter(blog => blog.id !== id);
      setBlogs(newBlogs);
   }
   const handle = (id) => {
    const newGolds =golds.filter(gold =>gold.id !== id);
    setGolds(newGolds);
   }
  return ( 
    <div className="home">
      <BlogList blogs={blogs} title="All of my blogs" handelDelete={handelDelete}/>
      <BlogList blogs={blogs.filter((blog) => blog.author === 'Su su')} title="Su Su Blog!" handelDelete={handelDelete}/>
      <Gold golds={golds} title="aung thamadi" handle={handle}/>
    </div>
   );
}
 
export default Home;