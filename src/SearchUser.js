import React, { Component, Fragment } from 'react';
import { Input } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'

class SearchUser extends Component {
  constructor(props) {
    super(props);
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSearch = this.handleSearch.bind(this);
    // this.handleSearchAll = this.handleSearchAll.bind(this);
  }

  render() {
    return (
      <Fragment>
        {/* <Input focus placeholder='Type User ID...' value={this.props.stateProp.userId} onChange={this.handleChange} />
        <Button onClick={this.handleSearch}>Search</Button>
        <Button onClick={this.handleSearchAll}>Show all Users</Button> */}

        <Input focus placeholder='Type User ID...' value={this.props.userIdProp} onChange={(event) => this.props.handleChangeProp(event)} />
        <Button onClick={ () => this.props.handleSearchProp()}>Search</Button>
        <Button onClick={() => this.props.handleListProp()}>Show all Users</Button>
      </Fragment>
    );
  }
}
export default SearchUser;