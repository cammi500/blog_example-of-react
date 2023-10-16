const Navbar = () => {
    return ( 
        <nav className="navbar text-green-500 ">
            <h1 className="">My blog</h1>
            <div className="links">
                <a href="http://">Home</a>
                <a href="/create" style={{
                    
                    backgroundColor:'#f1356d',
                    borderRadius:'8px'
                }}>New blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;