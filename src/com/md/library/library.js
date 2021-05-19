/*!
 * ${copyright}
 */

/**
 * Initialization Code and shared classes of library com.md.library.
 */
sap.ui.define(["sap/ui/core/library"], // library dependency
	function () {

		"use strict";

		/**
		 * Test Library
		 *
		 * @namespace
		 * @name com.md.library
		 * @author SAP SE
		 * @version 1.0.0
		 * @public
		 */

		// delegate further initialization of this library to the Core
		sap.ui.getCore().initLibrary({
			name: "com.md.library",
			version: "1.0.0",
			dependencies: ["sap.ui.core"],
			types: [],
			interfaces: [],
			controls: [
				"com.md.library.controls.Example"
			],
			elements: []
		});

		/* eslint-disable */
		return com.md.library;
		/* eslint-enable */

	}, /* bExport= */ false);