// @flow
export const SAVE_DATABASE = 'SAVE_DATABASE';
export const UPDATE_DATABASE_VALUE = 'UPDATE_DATABASE_VALUE';
export const LOAD_FROM_FILE = 'LOAD_FROM_FILE';


export function saveDatabase() {
  return {
    type: SAVE_DATABASE
  };
}

export function updateDatabaseValue(name: string, value: string) {
  return {
    type: UPDATE_DATABASE_VALUE,
    name: name,
    value: value
  };
}

export function loadFromFile() {
  console.log('loadFromFile');
  return {
    type: LOAD_FROM_FILE
  };
}
