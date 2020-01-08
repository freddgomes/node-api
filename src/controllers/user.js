
let user1 = {"id": 1, "name": "Zeus"}
let user2 = {"id": 2, "name": "Odin"}
let users = [];
users.push(user1);
users.push(user2);

async function getAll(req, res) {
  try {
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
}
async function getById(req, res) {
  try {
    let user = users.filter((x) => (x.id == req.params.id))[0];
    console.log(user);
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = {
  getAll,
  getById
};
