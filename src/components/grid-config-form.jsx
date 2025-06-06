import { Form } from '@formio/react';
import rowData from '../data/space-mission-data.json';
import {spaceMissionForm} from '../data/space-mission-form.js';
spaceMissionForm.components[0].agGridConfig.rowData = rowData;

const onFormReadyHandler = (webform) => {
    setTimeout(() => {
      const agGridComponent = webform.getComponent("aggrid");
      const agGrid = agGridComponent?.agGrid;
      
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