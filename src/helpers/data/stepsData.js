import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getSteps = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/steps.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const addSteps = (object, uid) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/steps.json`, object)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      const user = { uid };
      axios.patch(`${dbURL}/steps/${response.data.name}.json`, user);
      axios.patch(`${dbURL}/steps/${response.data.name}.json`, body)
        .then(() => {
          getSteps(object.uid).then(resolve);
        });
    })
    .catch((error) => reject(error));
});

const updateSteps = (steps) => new Promise((resolve, reject) => {
  axios.patch(`${dbURL}/steps/${steps.firebaseKey}.json`, steps)
    .then(() => getSteps(steps.uid).then(resolve))
    .catch((error) => reject(error));
});

export {
  getSteps, addSteps, updateSteps
};
