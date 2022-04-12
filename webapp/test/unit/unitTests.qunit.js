/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ProjectDaw/projectdaw/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
