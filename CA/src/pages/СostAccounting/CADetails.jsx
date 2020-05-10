import React from "react";
import {Link, useParams} from 'react-router-dom';
import {findById} from '../../helpers/costAccountingHelpers';

const CADetails = () => {
    const location = useParams();
    const element = findById(parseInt(location.id, 10));

    return (
        <div className='card m-3'>
            <div className='card-header'>
                <h4 className="card-title">{element.name}</h4>
            </div>
            <div className="card-body">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Description: {element.description}</li>
                    <li className="list-group-item">Price: {element.price} $</li>    
                    <li className="list-group-item">Date: {element.date}</li>
                </ul>
            </div>
            <Link to="/CostAccounting" className="btn btn-lg btn-block btn-outline-primary">Cost accounting</Link>
        </div>
    );
}

export default CADetails;