import React from 'react'

export const Card = ({ src, className, id, mKey, style, children, cardTitle }) => {
    return (
        <div className="card" style={style}>
            <div className="card-body">
                <h5 className="card-title">{cardTitle}</h5>
                {children}
            </div>
        </div>
    );
};

