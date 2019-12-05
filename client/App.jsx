import React from 'react';
import DateSelection from './DateSelection.jsx';
import TimeSelection from './TimeSelection.jsx';
import PeopleSelection from './PeopleSelection.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <p>Make a Reservation</p>
        <form>
          <div><DateSelection /></div>
          <TimeSelection />
          <PeopleSelection />
          <p><button type="submit">Find a Table</button></p>
        </form>
      </div>
    );
  }
}


export default App;
