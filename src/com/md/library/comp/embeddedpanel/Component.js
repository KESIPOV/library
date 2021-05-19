sap.ui.define([
	"sap/ui/core/UIComponent"
], function (UIComponent) {
	"use strict";

	return UIComponent.extend("com.md.library.comp.embeddedpanel.Component", {

		metadata: {
			manifest: "json",
			properties: {
				Name: "string"
			}
		},

		/******************************************************************************
		 * CreateContent
		 ******************************************************************************/

		createContent: function () {
			// XML
			this.page = new sap.ui.view({
				viewName: "com.md.library.comp.embeddedpanel.view.Panel",
				type: sap.ui.core.mvc.ViewType.XML
			});
			return this.page;
		},
	});
});