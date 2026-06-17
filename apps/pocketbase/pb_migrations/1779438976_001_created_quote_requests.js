/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = new Collection({
    "createRule": "",
    "deleteRule": "@request.auth.id != ''",
    "fields":     [
          {
                "autogeneratePattern": "[a-z0-9]{15}",
                "hidden": false,
                "id": "text3667856788",
                "max": 15,
                "min": 15,
                "name": "id",
                "pattern": "^[a-z0-9]+$",
                "presentable": false,
                "primaryKey": true,
                "required": true,
                "system": true,
                "type": "text"
          },
          {
                "hidden": false,
                "id": "text7252580781",
                "name": "name",
                "presentable": false,
                "primaryKey": false,
                "required": true,
                "system": false,
                "type": "text",
                "autogeneratePattern": "",
                "max": 0,
                "min": 0,
                "pattern": ""
          },
          {
                "hidden": false,
                "id": "text6206377254",
                "name": "company",
                "presentable": false,
                "primaryKey": false,
                "required": true,
                "system": false,
                "type": "text",
                "autogeneratePattern": "",
                "max": 0,
                "min": 0,
                "pattern": ""
          },
          {
                "hidden": false,
                "id": "text1760370950",
                "name": "phone",
                "presentable": false,
                "primaryKey": false,
                "required": true,
                "system": false,
                "type": "text",
                "autogeneratePattern": "",
                "max": 0,
                "min": 0,
                "pattern": ""
          },
          {
                "hidden": false,
                "id": "email8450288425",
                "name": "email",
                "presentable": false,
                "primaryKey": false,
                "required": true,
                "system": false,
                "type": "email",
                "exceptDomains": [],
                "onlyDomains": []
          },
          {
                "hidden": false,
                "id": "select6426049585",
                "name": "service_type",
                "presentable": false,
                "primaryKey": false,
                "required": true,
                "system": false,
                "type": "select",
                "maxSelect": 1,
                "values": [
                      "Kara Ta\u015f\u0131mac\u0131l\u0131\u011f\u0131",
                      "Deniz Ta\u015f\u0131mac\u0131l\u0131\u011f\u0131",
                      "Hava Ta\u015f\u0131mac\u0131l\u0131\u011f\u0131",
                      "Demiryolu Ta\u015f\u0131mac\u0131l\u0131\u011f\u0131",
                      "\u0130ntermodal Ta\u015f\u0131mac\u0131l\u0131\u011f\u0131",
                      "Parsiyel Ta\u015f\u0131mac\u0131l\u0131\u011f\u0131",
                      "Fuar Ta\u015f\u0131mac\u0131l\u0131\u011f\u0131",
                      "Transit Ta\u015f\u0131mac\u0131l\u0131\u011f\u0131",
                      "Express Ta\u015f\u0131mac\u0131l\u0131\u011f\u0131",
                      "\u00d6zel Proje Ta\u015f\u0131mac\u0131l\u0131\u011f\u0131",
                      "Depolama",
                      "G\u00fcmr\u00fckleme"
                ]
          },
          {
                "hidden": false,
                "id": "text4036339837",
                "name": "message",
                "presentable": false,
                "primaryKey": false,
                "required": false,
                "system": false,
                "type": "text",
                "autogeneratePattern": "",
                "max": 0,
                "min": 0,
                "pattern": ""
          },
          {
                "hidden": false,
                "id": "autodate6102041190",
                "name": "created",
                "onCreate": true,
                "onUpdate": false,
                "presentable": false,
                "system": false,
                "type": "autodate"
          },
          {
                "hidden": false,
                "id": "autodate1531767829",
                "name": "updated",
                "onCreate": true,
                "onUpdate": true,
                "presentable": false,
                "system": false,
                "type": "autodate"
          }
    ],
    "id": "pbc_8775153992",
    "indexes": [],
    "listRule": "@request.auth.id != ''",
    "name": "quote_requests",
    "system": false,
    "type": "base",
    "updateRule": "@request.auth.id != ''",
    "viewRule": "@request.auth.id != ''"
  });

  try {
    return app.save(collection);
  } catch (e) {
    if (e.message.includes("Collection name must be unique")) {
      console.log("Collection already exists, skipping");
      return;
    }
    throw e;
  }
}, (app) => {
  try {
    const collection = app.findCollectionByNameOrId("pbc_8775153992");
    return app.delete(collection);
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("Collection not found, skipping revert");
      return;
    }
    throw e;
  }
})
