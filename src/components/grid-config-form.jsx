import { Form } from '@formio/react';
import rowData from '../data/space-mission-data.json';
import {spaceMissionForm} from '../data/space-mission-form.js';
spaceMissionForm.components[0].agGridConfig.rowData = rowData;

const onFormReadyHandler = (webform) => {
    // This function is called when the form is ready
    console.log('Form is ready:', webform);
      const agGridComponent = webform.getComponent("aggrid");
      agGridComponent.on('agGridReady', ({api}) => {
        api.updateGridOptions({
            columnDefs:[
                { field: "company", headerName: "Company", pinned: true },
                { field: "mission", headerName: "Mission" },
                
                { field: "location", headerName: "Location" },
                { field: "date", headerName: "Date" },
                { field: "time", headerName: "Time" },
                { field: "rocket", headerName: "Rocket" },
                { field: "price", headerName: "Price" },
                { field: "successful", headerName: "Successful" },
            ],
            selectionColumnDef: {
                sortable: true,
                resizable: true,
                // width: 120,
                suppressHeaderMenuButton: false,
                pinned: "left",
              },
        })
      })
      
      
      
};


export default function GridConfigForm() {
    return (
        <Form
            form={spaceMissionForm}
            onFormReady={onFormReadyHandler}
            onSubmit={(submission) => {
                console.log('Submission:', submission);
              }}
        />  
    );
}