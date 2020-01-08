
let task1 = {"id": 1, "description": "create task"}
let task2 = {"id": 2, "description": "create task2"}
let tasks = [];

tasks.push(task1);
tasks.push(task2);

async function getAll(req, res) {
  try {
    res.send(tasks);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function getById(req, res) {
  try {
    let task = tasks.filter((x) => (x.id == req.params.id))[0];
    console.log(task);
    res.send(task);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function post(req, res) {
  try {
    let task = req.body;
    tasks.push(task);
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function put(req, res) {
  try {
    
    res.send(tasks);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function remove(req, res) {
  try {
    res.send(tasks);
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = {
  getAll,
  getById,
  post,
  put,
  remove
};
