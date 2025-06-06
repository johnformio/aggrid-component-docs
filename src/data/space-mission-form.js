
export const spaceMissionForm = {
    "_id": "6824acdfe9c6fb87fef24b29",
    "title": "AG Grid with DataSource",
    "name": "agGridWithDataSource",
    "path": "aggridwithdatasource",
    "type": "form",
    "display": "form",
    "tags": [],
    "access": [
      {
        "type": "create_own",
        "roles": []
      },
      {
        "type": "create_all",
        "roles": []
      },
      {
        "type": "read_own",
        "roles": []
      },
      {
        "type": "read_all",
        "roles": [
          "681e356383cbf6ee07dae5c4",
          "681e356383cbf6ee07dae5c8",
          "681e356383cbf6ee07dae5cc"
        ]
      },
      {
        "type": "update_own",
        "roles": []
      },
      {
        "type": "update_all",
        "roles": []
      },
      {
        "type": "delete_own",
        "roles": []
      },
      {
        "type": "delete_all",
        "roles": []
      },
      {
        "type": "team_read",
        "roles": []
      },
      {
        "type": "team_write",
        "roles": []
      },
      {
        "type": "team_admin",
        "roles": []
      }
    ],
    "submissionAccess": [
      {
        "type": "create_own",
        "roles": []
      },
      {
        "type": "create_all",
        "roles": []
      },
      {
        "type": "read_own",
        "roles": []
      },
      {
        "type": "read_all",
        "roles": []
      },
      {
        "type": "update_own",
        "roles": []
      },
      {
        "type": "update_all",
        "roles": []
      },
      {
        "type": "delete_own",
        "roles": []
      },
      {
        "type": "delete_all",
        "roles": []
      },
      {
        "type": "team_read",
        "roles": []
      },
      {
        "type": "team_write",
        "roles": []
      },
      {
        "type": "team_admin",
        "roles": []
      }
    ],
    "owner": "666073244085aca2b4a81d84",
    "components": [
      {
        "label": "AG Grid",
        "pagination": true,
        "paginationAutoPageSize": false,
        "paginationPageSize": 100,
        "paginationPageSizeSelector": [20, 50, 100],
        "agGridConfig": {
  
        },
        "tableView": true,
        "submitSelectedRows": true,
        "calculateValue": "if (data.dataSource) {\n  value = data.dataSource\n}",
        "validateWhenHidden": false,
        "key": "aggrid1",
        "type": "aggrid",
        "height": 500,
        "input": true,
        "components": [
          {
            "label": "Mission",
            "applyMaskOn": "change",
            "tableView": true,
            "validateWhenHidden": false,
            "key": "mission",
            "type": "textfield",
            "input": true
          },
          {
            "label": "Company",
            "applyMaskOn": "change",
            "tableView": true,
            "validateWhenHidden": false,
            "key": "company",
            "type": "textfield",
            "input": true
          },
          {
            "label": "Location",
            "applyMaskOn": "change",
            "tableView": true,
            "validateWhenHidden": false,
            "key": "location",
            "type": "textfield",
            "input": true
          },
          {
            "label": "Date",
            "applyMaskOn": "change",
            "tableView": true,
            "validateWhenHidden": false,
            "key": "date",
            "type": "textfield",
            "input": true
          },
          {
            "label": "Time",
            "tableView": true,
            "validateWhenHidden": false,
            "key": "time",
            "type": "time",
            "input": true,
            "inputMask": "99:99"
          },
          {
            "label": "Price",
            "applyMaskOn": "change",
            "mask": false,
            "tableView": false,
            "delimiter": false,
            "requireDecimal": false,
            "inputFormat": "plain",
            "truncateMultipleSpaces": false,
            "validateWhenHidden": false,
            "key": "price",
            "type": "number",
            "input": true
          },
          {
            "label": "Rocket",
            "applyMaskOn": "change",
            "tableView": true,
            "validateWhenHidden": false,
            "key": "rocket",
            "type": "textfield",
            "input": true
          },
          {
            "label": "Successful",
            "tableView": false,
            "validateWhenHidden": false,
            "key": "successful",
            "type": "checkbox",
            "input": true,
            "defaultValue": false
          }
        ],
        "aggridWidth": 600,
        "aggridHeight": 400
      },
      {
        "type": "button",
        "label": "Submit",
        "key": "submit",
        "disableOnInvalid": true,
        "input": true,
        "tableView": false
      }
    ],
    "pdfComponents": [],
    "settings": {
      "share": {
        "theme": "",
        "showHeader": true
      }
    },
    "properties": {
  
    },
    "project": "681e356283cbf6ee07dae5bd",
    "controller": "",
    "revisions": "",
    "submissionRevisions": "",
    "_vid": 0,
    "esign": {
  
    },
    "created": "2025-05-14T14:46:55.694Z",
    "modified": "2025-06-05T03:40:26.464Z",
    "machineName": "mynpjjqdteworwi:agGridWithDataSource"
  }