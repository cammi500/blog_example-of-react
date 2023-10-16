
const Gold = ({golds,title,handle}) => {
    return ( 
        <div className="gold text-green-600 underlined">
            <h2>{title}</h2>
            {golds.map((gold) => (
                
                <div className="gold-preview" key={gold.id}>
                    <h1>{gold.title}</h1>
                    <p>{gold.body}</p>
                <button onClick={()=>handle(gold.id)}>Handle</button>
                </div>
            ))}
        </div>
     );
}
 
export default Gold;