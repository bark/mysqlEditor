// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './AddDatabase.css';

class AddDatabase extends Component {
  state: {
    url: string,
    username: string,
    password: string
  };
  props: {
    updateDatabaseValue: (string, number) => void,
    saveDatabase: () => void,
    loadFromFile: () => void,
    database: {
      url: string,
      username: string,
      password: string
    }

  }
  componentWillMount() {
    const { loadFromFile, database, updateDatabaseValue, saveDatabase } = this.props;
    loadFromFile('url', "test");
  }

  render() {
    const { database, updateDatabaseValue, saveDatabase } = this.props;
    return (
      <div>
        <div className={styles.backButton}>
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
        </Link>
      </div>
      <div>
        Url:<input type="text" value={database.url} onChange={(event) => updateDatabaseValue('url', event.target.value)} /><br />
        Username:<input type="text" value={database.username} onChange={(event) => updateDatabaseValue('username', event.target.value)} /><br />
        Password:<input type="text" value={database.password} onChange={(event) => updateDatabaseValue('password', event.target.value)} /><br />
        port:<input type="text" value={database.port} onChange={(event) => updateDatabaseValue('port', event.target.value)} /><br />
        <button onClick={() => saveDatabase()}>Save</button>
      </div>
      </div>
  );
}
}

export default AddDatabase;
