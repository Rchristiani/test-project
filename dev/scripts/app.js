import React from 'react';
import ReactDOM from 'react-dom';
const donuts = ['Sourcream Glazed','Honey Dip','Boston Cream'];
import Donut from './donut';

class App extends React.Component {
    render() {
      return (
        <div>
          <header>
            <h1>Donuts</h1>
          </header>
          <DonutList />
          {donuts.map(donut => {
           return (
            <Donut donutName={donut} />
           ) 
          })}
          <footer>
            <p>donuts &copy; 2017</p>
          </footer>
        </div>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
