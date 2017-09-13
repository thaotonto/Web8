const fs = require("fs");
const saveFileSync = (filename, data) => {
  fs.writeFileSync(filename, data);
}

const readFile = (filename, callback) => {
  return fs.readFile(filename, "utf-8", (err, data) => {
    callback(data);
  });
}

const readFileSync = (filename) => {
  return fs.readFileSync(filename, "utf-8");
}

const appendFileSync = (filename, data) => {
  fs.appendFileSync(filename, data, "utf-8");
}

const appendFile = (filename, data, callback) => {
  return fs.appendFile(filename, data, "utf-8", (err) => {
    if (err) throw err;
    callback(data);
  });
}

const getListQuestion = () => {
  listQuestionString = `[${readFileSync('question.txt')}]`;
  try {
    listQuestion = JSON.parse(listQuestionString);
    return listQuestion;
  } catch (err) {
    console.log(err);
    return [];
  }
}

const getTotalQuestion = () => {
  return getListQuestion().length;
}

const getRandomQuestion = () => {
  listQuestion = getListQuestion();
  question = listQuestion[Math.floor((Math.random() * listQuestion.length))];
  return question;
}

module.exports = {
  saveFileSync,
  readFile,
  readFileSync,
  appendFileSync,
  getTotalQuestion,
  getListQuestion,
  appendFile,
  getRandomQuestion
}
