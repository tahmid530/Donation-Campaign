import { useEffect, useState } from "react";
import DonationShow from "./DonationShow";


const Donation = () => {

    const [donations, setDonations] = useState([]);

    const [noFound, setNoFound] = useState("");
     
    const [show, setShow] = useState(false)
   
    useEffect(()=>{
        const donationItems = JSON.parse(localStorage.getItem('donation'));

       if(donationItems){
        setDonations(donationItems)
       }
       else{
        setNoFound('no data found')
       }
    },[])

    return (
        <div>
         { 
          noFound ? <p className="h-[80vh] flex justify-center items-center">No Data Found</p> : <div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 p-4 items-center ml-14">
                {
                   show ?  donations.map(card => <DonationShow key={card.id} card={card}/>) 
                   : 
                    donations.slice(0,4).map(card => <DonationShow key={card.id} card={card}/>)
                }
            </div>
            <div className="flex justify-center items-center">
           {
            donations.length > 4 &&  <button onClick={() => setShow(!show)} className="btn btn-primary text-[#FFF] bg-[#009444] ">{ show ? 'See Less' : 'See All'}</button>
           }
            </div>
          </div>
         }
        </div>
    );
};

export default Donation;