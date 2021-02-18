import React from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      search: "",
    };
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };


  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => this.setState({ monsters: data }));
  }

  render() {
    const { monsters, search } = this.state; // Destructuring
    const filteredMonster = monsters.filter((monster) => monster.name.toLowerCase().includes(search.toLowerCase()));
    return (
      <div className="App">
        <h1 className="header">Monster App</h1>
        <SearchBox placeholder="Search the Monster" handleChange={this.handleChange}/>
        <CardList monsters={filteredMonster}></CardList>
      </div>
    );
  }
}

export default App;
