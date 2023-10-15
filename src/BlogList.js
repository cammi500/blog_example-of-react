//props
const BlogList = ({blogs,title,handelDelete}) => {
    // const blogs =props.blogs;
    // const title =props.title;

   
    return (  
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>
            {blog.title}
          </h2>
          <p>{blog.body}</p>
          <p>written by  the {blog.author}</p>
          <button onClick={()=>handelDelete(blog.id)}>Delete</button>
        </div>
      ))}
        </div>
    );
}
 
export default BlogList;