import '../styles/card.scss';
const Card = ({item, setFunction }) => {
    const tags = item.tags.map((tag,indx)=><span className='tags' key={indx}>{tag}</span>)

    return (
    <>
     <div className="card" onClick={setFunction} data-testid={`card-${item.title}`}>
         <h3>{item.title} 🎉</h3> 
         <p>{item.description} 🎉</p>
         <div className='containerTags'>{tags}</div>
     </div>
    </>
    );
};

export default Card;