import React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import {getCAListForLineChart} from '../../helpers/costAccountingHelpers';

 const LineChartCA = () => {
    let list = getCAListForLineChart();
    return (
        <div className='d-flex justify-content-center mt-5 pt-4'>
                <LineChart
                  width={700}
                  height={400}
                  data={list}
                  margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="5 5" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line name="price" type="monotone" dataKey="total" stroke="#346beb" activeDot={{ r: 8 }} />
                </LineChart>
      </div>
    );
}

export default LineChartCA;