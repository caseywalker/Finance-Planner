import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getSavings = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/savings.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const addSaving = (object) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/savings.json`, object)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbURL}/savings/${response.data.name}.json`, body)
        .then(() => {
          getSavings(object.uid).then(resolve);
        });
    })
    .catch((error) => reject(error));
});

const updateSavings = (saving) => new Promise((resolve, reject) => {
  axios.patch(`${dbURL}/savings/${saving.firebaseKey}.json`, saving)
    .then(() => getSavings(saving.uid).then(resolve))
    .catch((error) => reject(error));
});

const deleteSaving = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbURL}/savings/${firebaseKey}.json`)
    .then(() => getSavings(uid).then(resolve))
    .catch((error) => reject(error));
});

export {
  getSavings, addSaving, updateSavings, deleteSaving
};
