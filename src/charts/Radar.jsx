import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { Data } from '../data/Data'
import './styles.css';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const RadarChart = () => {
  return (
    <>
      <div className='Container'>
        <div className='ChartContainer'>
          <h1>Gráfico Qualidade do Solo</h1>
        </div>
        <div 
          style={{
          height: "500px",
          width: "600px",
          }}
        >
          <Radar className='ChartRadar' data={Data} />
        </div>
        <div className='InputsContainer'>
          <div className='Box-01'>
            <input />
            <label>Profundidade</label>
          </div>
          <input />
          <input />
          <input />
          <input />
          <input />
          <input />
          <input />
          <input />
          <input />
        </div>
      </div>
    </>
  );
}
