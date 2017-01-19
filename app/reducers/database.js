import { LOAD_FROM_FILE, SAVE_DATABASE, UPDATE_DATABASE_VALUE } from '../actions/database';

const fs = require('fs');

const app = require('electron').remote.app;

export default function database(state: Object = {databases:[], selected:{}}, action: Object) {
  console.log('action', action)
  const conectionConfUri = app.getPath('appData') + '/mysqlEditor/';

  switch (action.type) {
    case SAVE_DATABASE:
      let id = state.selected.id;
      if (state.selected.id !== undefined) {
        state.databases[id] = state.selected;
      } else {
        state.databases.push(state.selected);
      }
      fs.existsSync(conectionConfUri) || fs.mkdirSync(conectionConfUri); // create folder if not exist.
      fs.writeFile(conectionConfUri + 'baseConf.json',
        JSON.stringify(state, null, 2),
        function (err) {
          if (err) return console.log(err);
              console.log('Hello World > helloworld.txt');
          }
      );
      return state;
    case UPDATE_DATABASE_VALUE:
      state.selected[action.name] = action.value;
      return state;
    case LOAD_FROM_FILE:
      console.log("LOAD_FROM_FILE!");
      const contents = fs.readFileSync(conectionConfUri + 'baseConf.json', 'utf8');
      state = JSON.parse(contents);
      return state;
    default:
      return state;
  }
}
