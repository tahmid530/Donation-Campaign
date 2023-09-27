import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";

const CardShow = () => {
    const { id } = useParams()
    const cards = useLoaderData()
    const card = cards.find(card => card.id == id)
    console.log(cards)
    const { img, card_title, button_bg_color, btn_color, price, description } = card;

    const handleDonation = () => {

        const donationArray = [];

        const donationItems = JSON.parse(localStorage.getItem('donation'))

        if (!donationItems) {
            donationArray.push(card)
            localStorage.setItem('donation', JSON.stringify(donationArray))
            swal("Good job!", "Donation Added!", "success");
        }

        else {

            const isExit = donationItems.find(card => card.id == id)


            if (!isExit) {

                donationArray.push(...donationItems, card)
                localStorage.setItem('donation', JSON.stringify(donationArray))
                swal("Good job!", "Donation Added!", "success");

            }


            else {
                swal("Error!", "No Duplicate!", "error");
            }



        }
    }

    return (

        <div>
            <div >
                <div className="card card-compact h-[50vh] w-full
            bg-base-100 shadow-xl">
                    <div>
                        <figure className='relative '>
                            <div className='bg-black absolute w-full h-24 top-[501px]'>

                            </div>
                            <img className="w-[1320px] h-[590px] bg-black opacity-60 " src={img} alt="Shoes" />
                        </figure>

                        <button onClick={handleDonation} style={{ background: button_bg_color, text: btn_color }} className="btn btn-primary text-[#FFF] absolute top-[520px] left-8 border-none">Donate ${price}</button>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title text-4xl font-extrabold">{card_title}</h2>
                        <p className="font-none">{description}</p>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default CardShow;