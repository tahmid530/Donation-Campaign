
const Banner = () => {
    const bannerStyle = {
        backgroundImage: 'url(/public/img/Clothing.png)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat', 
        backgroundPosition: 'center',   
        };
    
        return (
        <div>
            <div style={ bannerStyle} className=" bg-white opacity-10  h-[60vh]">
            </div>
        <div>
        <div className="form-control  ">
                <p className="absolute top-[30%] lg:top-[38%] left-[20%] lg:left-[30%] text-3xl font-bold text-[#0B0B0B] mb-15" >I Grow By Helping People In Need</p>
                
            <div className="input-group w-48 lg:w-72 absolute top-[47%] left-[15%] lg:left-[35%]">
                    <input type="text" placeholder="Search…" className="input input-bordered" />
                    <button className="btn btn-secondary  bg-[#FF444A]">
                    Search
                </button>
            </div>
        </div>
    </div>
</div>
    
        );
    };

export default Banner;