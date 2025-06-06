
import { Form } from '@formio/react';
import rowData from '../data/space-mission-data.json';
import {spaceMissionForm} from '../data/space-mission-form.js';
spaceMissionForm.components[0].agGridConfig.rowData = rowData;

export default function PaginatedForm() {
  return (
    
      <Form
        form={spaceMissionForm}
        options={{ noAlerts: true }}
        onSubmit={(submission) => {
          console.log('Submission:', submission);
        }}
      />
    
  );
}