import React from 'react'

const CampaignCard = (props) => {
    return (

        <div className="product">
            <div className="product-thumb">
                <a href="/"><img src="" alt="" /></a>
            </div>
            <div className="product-body">
                <div className="title">
                    <h6>{props.title}</h6>
                </div>
                <div className="desc">
                    <h6>{props.desc}</h6>
                </div>
            </div>

            <div className="product-target">
                <div className="target">
                    <h6>{props.target}</h6>
                </div>
                <div className="days">
                    <h6>{props.days}</h6>
                </div>

            </div>
            <hr />
            <div className="product-btn">
                <div className="donation_no">

                </div>
                <button className="">

                </button>
            </div>

        </div>

    )
}

export default CampaignCard;