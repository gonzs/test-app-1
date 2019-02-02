/* eslint-disable max-len */

import React, { Component } from 'react';
import { Item, Table, Container, ItemGroup } from 'semantic-ui-react'

function ListItem(props) {
    // Correct! There is no need to specify the key here:
    return (<Table.Row>
        <Table.Cell>{props.value.first_name}</Table.Cell>
        <Table.Cell>{props.value.last_name}</Table.Cell>
    </Table.Row>
    );
}

function ListUsers(props) {
    const users = props.users;
    const listUsers = users.map((user, index) =>
        // Correct! Key should be specified inside the array.
        <ListItem key={user.id}
            value={user} />
    );
    return listUsers;
}

class Results extends Component {

    render() {

        let singleResult;
        let multipleResults;
        if (this.props.stateProp.results !== undefined) {
            singleResult =
                <Item.Group>
                    <Item>
                        <Item.Image size='tiny' src={this.props.stateProp.results.avatar} />
                        <Item.Content verticalAlign='middle'>
                            <Item.Header as='a'>{this.props.stateProp.results.first_name + " " + this.props.stateProp.results.last_name}</Item.Header>
                        </Item.Content>
                    </Item>
                </Item.Group>;
        } else {
            singleResult = <ItemGroup></ItemGroup>;
        }

        if (this.props.stateProp.allResults.length !== 0) {
            multipleResults =
                <Table fixed>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>First Name</Table.HeaderCell>
                            <Table.HeaderCell>Last Name</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <ListUsers users={this.props.stateProp.allResults} />
                    </Table.Body>
                </Table>;
        } else {
            multipleResults =
                <Table></Table>;
        }

        return (
            <Container>
                {singleResult}

                {multipleResults}
            </Container>
        );
    }
}
export default Results;