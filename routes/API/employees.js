const router = require("express").Router();
const employeesController = require("../../controllers/employeesController");

// Matches with "/api/employees"
router.route("/")
    .get(employeesController.findAll)
    .post(employeesController.create);

// Matches with specific searched for employee
router.route("/:id")
    .get(employeesController.findById)
    .put(employeesController.update)
    .delete(employeesController.remove);

    module.exports = router;