import { Form } from '@formio/react';
import rowData from '../data/space-mission-data.json';
import {spaceMissionForm} from '../data/space-mission-form.js';
spaceMissionForm.components[0].agGridConfig.rowData = rowData;

const onFormReadyHandler = (webform) => {
    setTimeout(() => {
      const agGridComponent = webform.getComponent("aggrid");
      const agGrid = agGridComponent?.agGrid;
      agGrid.updateGridOptions({
        columnDefs:[
            { field: "company", headerName: "Company", pinned: true },
            { field: "mission", headerName: "Mission" },
            
            { field: "location", headerName: "Location" },
            { field: "date", headerName: "Date" },
            { field: "time", headerName: "Time" },
            { field: "rocket", headerName: "Rocket" },
            { field: "price", headerName: "Price" },
            { field: "successful", headerName: "Successful" },
        ]
      })
      
    }, 100);
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