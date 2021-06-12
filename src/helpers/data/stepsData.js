import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getSteps = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/steps.json?orderBy="uid"&npm equalTo="${uid}"`)
    .then((response) => resolve(response.data.values))
    .catch((error) => reject(error));
});

const getStepsRefactored = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/steps.json?orderBy="uid"&npm equalTo="${uid}"`)
    .then((response) => {
      const theKey = response.data.name;
      resolve(response.data[theKey]);
    })
    .catch((error) => reject(error));
});

const updateSteps = (steps) => new Promise((resolve, reject) => {
  axios.patch(`${dbURL}/steps/${steps.firebaseKey}.json`, steps)
    .then(() => getSteps(steps.uid).then(resolve))
    .catch((error) => reject(error));
});

export {
  getSteps, updateSteps, getStepsRefactored
};
