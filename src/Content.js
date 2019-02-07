/* eslint-disable max-len */

import React, { Component } from 'react';
import { Divider, Container, Header, Icon } from 'semantic-ui-react'
import SearchUser from './SearchUser.js'
import Results from './Results.js'

class Content extends Component {
  constructor() {
    super();

    this.state = {
      userId: '',
      results: undefined,
      allResults: []
    };

    // this.setStateHandlerSearch = this.setStateHandlerSearch.bind(this);
    // this.setStateHandlerList = this.setStateHandlerList.bind(this);
  };

  setStateHandlerChange = (userId) => {
    this.setState({ userId: userId })
  }

  setStateHandlerSearch = (userId, results) => {
    this.setState({ userId: userId, results: results });
  }

  setStateHandlerList = (allResults) => {
    this.setState({ allResults: allResults });
  }

  handleChange = (event) => {
    console.log("Input value has been changed")
    this.setStateHandlerChange(event.target.value);
  }

  handleSearch = () => {
    console.log("Search clicked - UserId: " + this.state.userId);

    fetch("https://reqres.in/api/users/" + this.state.userId)
      .then(data => data.json())
      .then(results => {
        this.setStateHandlerSearch(this.state.userId, results.data);
      })
      .catch(error => {
        this.setStateHandlerSearch(this.state.userId, undefined);
        alert("APIRest Error");
      });
  }

  handleList = () => {
    console.log("Search clicked for all");

    fetch("https://reqres.in/api/users?page=2")
      .then(data => data.json())
      .then(results => {
        this.setStateHandlerList(results.data);
      })
      .catch(error => {
        this.setStateHandlerList([]);
        alert("APIRest Error");
      });
  }

  componentDidMount() {
    this.handleList();
  }

  render() {
    return (
      <Container>
        <p>
          First React App:
        </p>

        <SearchUser userIdProp={this.state.userId}
          handleChangeProp={(event) => this.handleChange(event)}
          handleSearchProp={() => this.handleSearch()}
          handleListProp={() => this.handleList()}
        />

        <Divider horizontal>
          <Header as='h4'>
            <Icon name='bar chart' />
            Results
          </Header>
        </Divider>


        <Results stateProp={this.state} />

      </Container>
    );
  }

}
export default Content;