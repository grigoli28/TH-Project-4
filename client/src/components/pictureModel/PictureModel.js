import React from 'react';
import './PictureModel.css';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const PictureModel = (props) => {
    const {index, picture, productName, productPrice, hearts} = props;
    return (
        <div id={`pictureModel-${index}`} className="pictureModel">
            {/* <img src={picture}/> */}
            <img src="https://source.unsplash.com/random"/>
            <a href="#" class="pictureModel-quickview">
												Quick View
											</a>
            <div className="details">
                <p className="productName">
                    {/* {productName}<br/> */}
                    SweetShirt
                </p>
                <p className="productPrice">
                    {/* {productPrice}<br/> */}
                    $16.00
                </p>
            </div>
        </div>
    )
}

PictureModel.propTypes = {
    props: PropTypes.object.isRequired
}

export default PictureModel;