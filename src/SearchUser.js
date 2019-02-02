import React, { Component } from 'react';
import { Input } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'

class SearchUser extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSearchAll = this.handleSearchAll.bind(this);
  }

  handleChange(event) {
    console.log("Input value has been changed")
    this.props.setStateHandlerSearchProp(event.target.value, undefined);
  }

  handleSearch() {
    console.log("Search clicked - UserId: " + this.props.stateProp.userId);

    fetch("https://reqres.in/api/users/" + this.props.stateProp.userId)
      .then(data => data.json())
      .then(results => {
        this.props.setStateHandlerSearchProp(this.props.stateProp.userId, results.data);
      })
      .catch(error => {
        this.props.setStateHandlerSearchProp(this.props.stateProp.userId, undefined);
        alert("APIRest Error");
      });
  }

  handleSearchAll() {
    console.log("Search clicked for all");

    fetch("https://reqres.in/api/users?page=2")
      .then(data => data.json())
      .then(results => {
        this.props.setStateHandlerListProp(results.data);
      })
      .catch(error => {
        this.props.setStateHandlerListProp([]);
        alert("APIRest Error");
      });
  }

  render() {
    return (
      <div>
        <Input focus placeholder='Type User ID...' value={this.props.stateProp.userId} onChange={this.handleChange} />
        <Button onClick={this.handleSearch}>Search</Button>
        <Button onClick={this.handleSearchAll}>Show all Users</Button>
      </div>
    );
  }
}
export default SearchUser;