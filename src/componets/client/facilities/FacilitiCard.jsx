import React from 'react';

function FacilitiCard({data}) {
    return (
        <div className="col-lg-4 col-md-6 pb-1">
            <div className="d-flex bg-light shadow-sm border-top rounded mb-4" style={{ padding: 30 }}>
                <i className={`${data.icon} h1 font-weight-normal text-primary mb-3`}></i>
                <div className="pl-4">
                    <h4>{data.title}</h4>
                    <p className="m-0">{data.desc}</p>
                </div>
            </div>
        </div>
    );
}

export default FacilitiCard;