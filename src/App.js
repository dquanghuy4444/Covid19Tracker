import React, { Component } from 'react';
import styles from  './App.module.css';
import { Cards , Chart , CountryPicker } from './components';
import { fetchData } from './api/index';
import image from './images/image.png';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data : {},
      country : '',
    }
  }

  async componentDidMount()
  {
    const data = await fetchData();
    this.setState({
      data
    });
  }

  onChangeCountry = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }
  

  render() {
    const { data, country } = this.state;

    if(!data.confirmed)
    {
      return (
        <h2 style={{ textAlign : "center" }}>
          Loading ....
        </h2>
      );
    }
    return (
      <div className={ styles.container }>
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={ data }></Cards>
        <CountryPicker onChangeCountry={ this.onChangeCountry }></CountryPicker>
        <Chart data={data} country={country} /> 
      </div>
    );
  }

}

export default App;
