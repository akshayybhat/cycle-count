sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
], (Controller, JSONModel, ValueHelpDialog) => {
    "use strict";

    return Controller.extend("zcyclecount.controller.View1", {
        onInit: function () {
            // Mock data for the table
            var oData = {
                data: [
                    { col1: "Data 1", col2: "Data 2", col3: "Data 3", col4: "Data 4" },
                    { col1: "Data 5", col2: "Data 6", col3: "Data 7", col4: "Data 8" }
                ]
            };

            // Create a JSON model
            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
        },

        // // Value Help Dialog for Warehouse Number
        // onValueHelpRequest: function () {
        //     if (!this._oValueHelpDialog) {
        //         this._oValueHelpDialog = sap.ui.xmlfragment(
        //             "your.namespace.ValueHelpDialog",
        //             this
        //         );
        //         this.getView().addDependent(this._oValueHelpDialog);
        //     }
        //     this._oValueHelpDialog.open();
        // },

        // onValueHelpClose: function (oEvent) {
        //     var sSelectedValue = oEvent.getParameter("selectedItem").getTitle();
        //     this.getView().byId("warehouseInput").setValue(sSelectedValue);
        // }
    });
});