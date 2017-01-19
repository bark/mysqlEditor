// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';
import * as DatabaseActions from '../actions/database';

export default class Home extends Component {
  constructor(props) {
    super(props);
    console.log('props', props);
  }
  componentWillMount() {
    const { loadFromFile} = this.props;
    loadFromFile();
  }
  render() {
    const {database, editDatabase, removeDatabase} = this.props;
    return (
      <div>
        Väkomen till denna betan av phpmyadmin++
        <div className={styles.container}>
          <h3>Tillagda databaser</h3>
          <h3><Link to="/addDatabase">Add new</Link></h3>
          database.databases.map(function(connection){
            {return (
              <h3>connection.url</h3>
              <h3>
                <span onClick={() => editDatabase(connection.id)>Edit</span>
                <span onClick={() => removeDatabase(connection.id)}>Remove</span>
              </h3>
            });
          }
          <Link to="/counter">to Counter</Link>
        </div>
      </div>
    );
  }
}
