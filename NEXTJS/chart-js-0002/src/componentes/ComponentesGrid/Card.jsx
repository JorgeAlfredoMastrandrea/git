import React from 'react'

export const Card = ({ src, className, id, mKey, style, children, cardTitle }) => {
    return (
        <div id={id} key={mKey} className={className} style={style}>
            {children}
        </div>
    );
};

/*
<div className="card" style={style}>
            <div className="card-body">
                <h5 className="card-title">{cardTitle}</h5>
                {children}
            </div>
        </div>
*/
