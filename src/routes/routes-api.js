const express = require('express');
const router = express.Router();

const taskController = require('../controllers/task');
const userController = require('../controllers/user');
const taskApi = '/task';
const userApi = '/user';

router.get('/', (req, res) => res.send('Default'));

router.get(taskApi, (req, res) => taskController.getAll(req, res));
router.get(`${taskApi}/:id`, (req, res) => taskController.getById(req, res));
router.post(taskApi, (req, res) => taskController.post(req, res));
router.put(`${taskApi}/:id`, (req, res) => taskController.put(req, res));
router.delete(`${taskApi}/:id`, (req, res) => taskController.remove(req, res));

router.get(userApi, (req, res) => userController.getAll(req, res));
router.get(`${userApi}/:id`, (req, res) => userController.getById(req, res));

module.exports = router;