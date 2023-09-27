
import { Link } from 'react-router-dom';

const Card = ({card}) => {
    const {id,img,card_title,category,category_bg_color,card_bg_color,text_color}=card;

    return (
            
        <Link to={`/cards/${id}`}>
        <div  style={{background: card_bg_color,
                  color: text_color
                  }} 
                 className="flex justify-center rounded-lg"> 
     
            <div className="card card-compact w-full ">
                <figure><img className="w-full" src={img} alt="Shoes" /></figure>
                   
                <div className="card-body">
                    < h4 style={{background:category_bg_color }} className="w-[70px] p-1 items-center flex justify-center ">{category}</h4>
                    <h2 className="card-title">{card_title}</h2>
                </div>
          </div>
        </div>
        </Link>

    );
};

export default Card;