import React, { Component, Fragment } from 'react';
import './App.css';
import Slider from './components/Form';
import moment from 'moment';
import nanoId from 'nano-id';

// date, time, slidervalue, notes, id
let database = [];

class App extends Component {
  state = {
    sliderValue: 0,
    notes: '',
    view: 'form' // 'form', overview'
  };

  handleSlide = ({ target }) => {
    this.setState({
      sliderValue: target.value
    });
  };

  handleChange = ({ target }) => {
    this.setState({
      notes: target.value
    });
  };

  handleSubmit = () => {
    const { sliderValue, notes } = this.state;

    database.push({
      sliderValue,
      notes,
      date: new Date().toLocaleDateString(),
      time: moment().format('LT'),
      id: nanoId(10)
    });

    this.setState({
      view: 'overview'
    });
  };

  render() {
    const { sliderValue, notes, view } = this.state;
    console.log(database);
    return (
      <div className="App">
        {view === 'form' ? (
          <Fragment>
            <h2>Hello, how are you feeling?</h2>
            <p>
              Between 1 to 10, <br />
              with 10 being great and 1 being moderately low{' '}
            </p>
            <Slider
              sliderValue={sliderValue}
              notes={notes}
              handleSlide={this.handleSlide}
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
            />
          </Fragment>
        ) : (
          <Fragment>
            {database.map(data => (
              <div className="overview" key={data.id}>
                <h2>Here is your overview:</h2>
                <p>You rated your mood as: {data.sliderValue} </p>
                {data.sliderValue < 5 ? (
                  <p>
                    <em>you aren't feeling so great</em>
                  </p>
                ) : (
                  <p>Always try to take one day at a time </p>
                )}
                <p>Notes: {data.notes}</p>
                <p>Date: {data.date}</p>
                <p>Time: {data.time}</p>
              </div>
            ))}
          </Fragment>
        )}
        <footer>
          <p>made with ♥ by hannah & cristien.</p>
        </footer>
      </div>
    );
  }
}

export default App;
