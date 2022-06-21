const router = require("express").Router();
const { allDashboards } = require("../controller/dashboard");
const auth = require("../middleware/auth");

/* these are REST endpoints */

router.get("/", auth({ block: true }), allDashboards); // display the user's all dashboards

// router.get("/:id", auth({ block: true }), dashboardById); // display one dashboard

// router.get("/:id/todos", auth({ block: true }), allTodos);

// router.get("/:id/todos/:todoId", auth({ block: true }), todoById);

// router.post("", controller); // create dashboard and send dashboard :id

// router.post("/:id/todos"); // create a todo and send todo :id back

// router.patch("/:id", controller); // update and send updated dashboard :id back

// router.patch("/:id/todos/:id", controller); // update and send updated todo :id back

// router.delete("/:id", controller); // isDeleted: true ;)

// router.delete("/:id/todos/:id", controller); // isDeleted: true ;)

module.exports = router;

/*
dashboardS
todoS
*/
