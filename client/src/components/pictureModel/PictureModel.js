import React from 'react';
import './PictureModel.css';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const PictureModel = ({props}) => {
    const {index, picture, productName, productPrice, hearts} = props;
    return (
        <div id={`PictureModel-${index}`} className="PictureModel">
            <img src={picture}/>
            <div className="details">
                <p className="productName">
                    {productName}<br/>
                </p>
                <p className="productPrice">
                    {productPrice}<br/>
                </p>
                <ul className="features">
                    <li className="icon-heart">{hearts} <span>hearts</span></li>
                </ul>
            </div>
        </div>
    )
}

PictureModel.propTypes = {
    props: PropTypes.object.isRequired
}

export default PictureModel;