import React, {Component} from 'react';
import './App.css';

class App extends Component {

  render(){
  
    console.log('Our data is', this.props.data)
    
    return (
    <div>
      <li className="boy">
        Name
      </li>
    </div>
  );

}
}

export default App;
