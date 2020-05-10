import React from "react";
import { NavLink } from "react-router-dom";

const Aside = () => {
    return(
            <aside className="col-2 pt-3 border">
                <div className='nav flex-column nav-pills'>
                        <NavLink className="nav-link" activeClassName="active" to="/CostAccounting">Cost Accounting</NavLink>
                        <NavLink className="nav-link" activeClassName="active" to="/IncomeDiagram">Income diagram</NavLink>
                        <NavLink className="nav-link" activeClassName="active" to="/СostDiagram">Сost diagram</NavLink>
                        <NavLink className="nav-link" activeClassName="active" to="/LineChart">Line chart</NavLink>
                </div> 
            </aside>
    );
}

export default Aside;