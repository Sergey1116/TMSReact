import React, {useState} from "react";
import {PieChart, Pie} from "recharts";
import RenderActiveShape from './RenderActiveShape';

const CustomPieChart = ({props}) =>{
    const [activeIndex, setActiveIndex] = useState(0);
    const {list, color} = props;

    const onPieEnter = (data, index) => {
        setActiveIndex(index);
      };
    return(
        
        <PieChart width={630} height={350}  className="col-md-12">
            <Pie
                activeIndex = {activeIndex}
                activeShape={RenderActiveShape}
                data={list}
                dataKey="price"
                nameKey="name"
                innerRadius={90}
                outerRadius={130}
                fill={color}
                onMouseEnter={onPieEnter}
            />
        </PieChart>
    );
}

export default CustomPieChart;