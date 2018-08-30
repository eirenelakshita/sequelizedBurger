var router = require("express").Router();
var path = require("path");
var apiRoutes = require("./api-routes.js");
var htmlRoutes = require("./html-routes")
// Routes
// =============================================================

router.use("/api", apiRoutes);
router.use("/", htmlRoutes);
    
module.exports = router;