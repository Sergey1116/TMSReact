import React from "react";
import CustomPieChart from './components/CustomPieChart';
import {getCAListByType} from '../../helpers/costAccountingHelpers'

const Diagram = (props) => {
    let pramDiagram = {};
    if (props.income){
      pramDiagram.list = getCAListByType("income");
      pramDiagram.color = "#19ed09";
    } else{
      pramDiagram.list = getCAListByType("outcome");
      pramDiagram.color = "#ea0000";
    }
    
    return (
      <div className='d-flex align-items-center mt-5'>
          <CustomPieChart props={{list: pramDiagram.list, color: pramDiagram.color}}/>
    </div>
  );
};

export default Diagram;

