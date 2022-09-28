sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
   "use strict"
   return Controller.extend("sap.ui.demo.controller.App", {
      incrementBy1: function () {
         let myTextElem = this.getView().byId("counter")
         let myNum = parseInt(myTextElem.getText())
         let myNewNum = myNum + 1
         myTextElem.setText(myNewNum)
      },
      onInit: function () {
         let oModel = new JSONModel(
            sap.ui.require.toUrl("sap/ui/demo/Data.json")
         )
         this.getView().setModel(oModel)
      },

      call(){
         //const oUrl = "/youTubeURL/youtube/v3/playlistItems?part=contentDetails%2Csnippet&playlistId=PL6RpkC85SLQBM78mD6AiJ1vKlSB7OWtUz&key=AIzaSyAqIJadyfrgsaZZ2HAFCNstsT0wJR5h24s";
         const url = "/IdentityAuthenticationServiceSCIM/scim/Schemas/urn:sap:cloud:scim:schemas:extension:custom:2.0:CustomSchema"
         return new Promise(function (resolved, rejected) {
            $.ajax({
                async: false,
                crossDomain: true,
                url: url,
                method: "GET",
                beforeSend: function (xhr) {
                    /* Authorization header */
                    xhr.setRequestHeader("Authorization", "Basic NWYzOTdmY2ItMDhkMi00MGQwLTg1YmUtMzY5NGQzMjZlZDkyOkFsMjJibzAwQA==");
                },
                success: function (oData, response) {
                    resolved(oData, response);
                  },
                error: function (oData, textStatus, errorThrown) {
                    rejected({
                        oUrl,
                        oData,
                        textStatus,
                        error: errorThrown
                    });
                }
            });
        });
      }
   })
})