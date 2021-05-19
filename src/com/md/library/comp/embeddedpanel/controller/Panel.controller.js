sap.ui.define([
	// "sap/ui/core/mvc/Controller",
	// "com/md/library/comp/embeddedpanel/controller/BaseController",
	"com/md/library/util/BaseController",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("com.md.library.comp.embeddedpanel.controller.Panel", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf src.com.md.library.comp.embeddedpanel.view.Panel
		 */
		onInit: function () {
			this.setModel(new JSONModel({
				"Name": this.getOwnerComponent().getComponentData().Name,
				"ButtonText": this.getResourceBundle().getText("btnHide")
			}), "viewModel");
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf src.com.md.library.comp.embeddedpanel.view.Panel
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf src.com.md.library.comp.embeddedpanel.view.Panel
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf src.com.md.library.comp.embeddedpanel.view.Panel
		 */
		//	onExit: function() {
		//
		//	}
		onToggle: function () {
			// var oModel = sap.ui.getCore().getModel("globalModel");
			// var oViewModel = this.getModel("viewModel");
			// var sNewText = oModel.getProperty("/Hide") ? this.getResourceBundle().getText("btnHide") : this.getResourceBundle().getText(
			// 	"btnShow");
			// oViewModel.setProperty("/ButtonText", sNewText);
			// oModel.setProperty("/Hide", !oModel.getProperty("/Hide"));

			sap.ui.getCore().getEventBus().publish("HideButton");
		}
	});

});