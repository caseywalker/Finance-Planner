import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getIncomes = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/incomes.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const addIncome = (object) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/incomes.json`, object)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbURL}/incomes/${response.data.name}.json`, body)
        .then(() => {
          getIncomes(object.uid).then(resolve);
        });
    })
    .catch((error) => reject(error));
});

const updateIncome = (income) => new Promise((resolve, reject) => {
  axios.patch(`${dbURL}/incomes/${income.firebaseKey}.json`, income)
    .then(() => getIncomes(income.uid).then(resolve))
    .catch((error) => reject(error));
});

const deleteIncome = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbURL}/incomes/${firebaseKey}.json`)
    .then(() => getIncomes(uid).then(resolve))
    .catch((error) => reject(error));
});

export {
  getIncomes, addIncome, updateIncome, deleteIncome
};
