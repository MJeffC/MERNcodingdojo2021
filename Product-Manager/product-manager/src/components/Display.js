import React from 'react';

const Display = (props) => {
    return (
        <div>
            {props.products.map((product, index) => {
                return (
                <>
                <h3 key={index}>{product.title}</h3>
                <p key={index}>{product.price}</p>
                <p key={index}>{product.description}</p>
                </>
                )
            })}
        </div>
    )
};

export default Display;