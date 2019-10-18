import React, { Component } from "react";
import NameList from "./components/NameList";
import Credit from "./components/Credit";
import Search from "./components/Search";
import ShortList from "./components/ShortList";

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      filterText: 'hello'
    }
  }

  filterUpdate(value){
    this.setState({
      filterText: value
    })
  }

  render() {

    return (
      <div>
        <Search 
          filterText = {this.state.filterText} 
          filterUpdate = {this.filterUpdate.bind(this)}
        />
        <main>
          <ShortList />
          <NameList 
            data={this.props.data} 
            filterText={this.state.filterText}
          />
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
