import './FunFact.css';
const FunFacts = () => {
    return (
        <div className="fun-facts">
            <div className="container">
                <div className="more-info-content">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="left-image">
                                <img src={'../../../public/images/about-1-570x350.jpg'} className="img-fluid" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6 align-self-center">
                            <div className="right-content">
                                <span>Why Choose Us?</span>
                                <h2>Get to know about <em>our company</em></h2>
                                <p>Wide Selection of Cars : From economy to luxury, choose from a variety of well-maintained vehicles. Competitive Pricing : Enjoy affordable rates with no hidden fees. Easy Booking Process : Reserve your car in just a few clicks.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FunFacts