import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getExpenses = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/expenses.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const addExpense = (object) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/expenses.json`, object)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbURL}/expenses/${response.data.name}.json`, body)
        .then(() => {
          getExpenses(object.uid).then(resolve);
        });
    })
    .catch((error) => reject(error));
});

const updateExpense = (expense) => new Promise((resolve, reject) => {
  axios.patch(`${dbURL}/expenses/${expense.firebaseKey}.json`, expense)
    .then(() => getExpenses(expense.uid).then(resolve))
    .catch((error) => reject(error));
});

const deleteExpense = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbURL}/expenses/${firebaseKey}.json`)
    .then(() => getExpenses(uid).then(resolve))
    .catch((error) => reject(error));
});

export {
  getExpenses, addExpense, updateExpense, deleteExpense
};
