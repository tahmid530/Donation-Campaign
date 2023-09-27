import Card from "../../Cards/Card";
import Banner from "../../Header/Banner/Banner";
import { useEffect, useState } from "react";

const Home = () => {
    const [cards,setCards] = useState([])
    useEffect(()=>{
        fetch('Cards.json')
        .then(res=> res.json())
        .then(data => setCards(data))

    },[])
    console.log(cards)
    return (
        <div>
            <Banner></Banner>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-5">
                {
                    cards.map(card=> <Card key={card.id} card={card}></Card>)
                }
            </div>
        </div>
    );
};

export default Home;