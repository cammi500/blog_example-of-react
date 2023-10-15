import { useState } from "react";

const BLog = () => {
    const [blog,setBlog] =useState('loremp2001')

        const handelBtn = () => {
            setBlog('thiriaung')
        }
    return ( 
        <div className="blog">
            <h1> This is {blog}blogs</h1>
            <button onClick={handelBtn} style={{
                backgroundColor :'#f1f2gg',
                padding :'10px',
                color :'black',
            }
            }>btn</button>
        </div>
     );
}
 
export default BLog;