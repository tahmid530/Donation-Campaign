import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const SingleCard = () => {
    const {id} = useParams();
    const idCard =parseInt(id);
    const [filter,setFilter] = useState([])
    const [card, setCard] = useState([]);

    console.log(filter)

    useEffect(()=>{
       fetch('/public/Cards.json')
        .then(res=> res.json())
        .then(data => setCard(data))
        const findCard = card.find(card => card.id ===idCard)
        setFilter(findCard)

    },[card, idCard]) 
    
    return (
        <div>
             <li>{filter.id}</li>
             
        </div>
                );
            };

export default SingleCard;