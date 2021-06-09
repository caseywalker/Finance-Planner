import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getSteps = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/steps.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const updateSteps = (steps) => new Promise((resolve, reject) => {
  axios.patch(`${dbURL}/steps/${steps.firebaseKey}.json`, steps)
    .then(() => getSteps(steps.uid).then(resolve))
    .catch((error) => reject(error));
});

export {
  getSteps, updateSteps
};
