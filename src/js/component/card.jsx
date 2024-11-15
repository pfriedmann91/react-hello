import React from "react";

function Card () {
    return (
      <div className="card" style= {{width: "15rem"}} >
      <img src="https://www.coindesk.com/resizer/GG8T3I9IvdSHdQqgwtbex07i5tY=/1056x594/filters:quality(80):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/coindesk/HSEIMSNPGBDITNES2RXWY4TK4Q.jpg" className="card-img-top" alt="500x325"/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Find out more</a>
      </div>
    </div>
    )
}

export default Card