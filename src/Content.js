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

    this.setStateHandlerSearch = this.setStateHandlerSearch.bind(this);
    this.setStateHandlerList = this.setStateHandlerList.bind(this);
  };

  setStateHandlerSearch(userId, results) {
    this.setState({ userId: userId, results: results});
  };

  setStateHandlerList(allResults) {
    this.setState({ allResults: allResults});
  };

  render() {
    return (
      <Container>
        <p>
          First React App:
        </p>

        <SearchUser stateProp={this.state}
                    setStateHandlerSearchProp={this.setStateHandlerSearch}
                    setStateHandlerListProp={this.setStateHandlerList}
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