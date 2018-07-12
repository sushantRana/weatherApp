import React from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { weatherAPIURL, APPID } from '../../config/config';
import styles from './ChartsOfWeather.css'

const toCelcius = value => (value - 273).toPrecision(2);
const dataTemplate = {
  labels: [''],
  datasets: [
    {
      label: 'Temperature',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [0]
    }
  ]
};
class ChartsOfWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedData : false
    }
  }
  formatData = (rawdata) => {
    const labelsData = rawdata.map((current) => toCelcius(current.main.temp));
    const labels = rawdata.map((current) => current.dt_txt);

    const formattedData = { ...dataTemplate };
    formattedData.labels = labels;
    formattedData.datasets[0].data = labelsData;
    return formattedData;
  }
  componentDidMount() {
    const { lat, lng } = this.props;
    axios.get(`${weatherAPIURL}lat=${lat}&lon=${lng}&appid=${APPID}`)
      .then(res => {
        this.setState({
          selectedData: this.formatData(res.data.list)
        })
      })
  }
  
  render() {
        return (
          <div className={styles.mainDiv}>
            <Line
              data={this.state.selectedData}
              width={300}
              height={400}
              options={{
                maintainAspectRatio: false
              }}
            />
          </div>
        )
  }
}
export default ChartsOfWeather;