'use client';
import { Form } from '@formio/react';
import { useEffect, useState } from 'react';
import { useFormioContext } from '@formio/react';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select';

const form = 'https://remote-dev.form.io/yzookuzrcdulxkk/carsgrid';

type SubmissionsSelectionProps = {
    submissions: Array<{ _id: string }>;
    onSelectChange: (value: string) => void;
};

const SubmissionsSelection = ({ submissions, onSelectChange }: SubmissionsSelectionProps) => {

    return (
        <Select onValueChange={onSelectChange}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Submission" />
            </SelectTrigger>
            <SelectContent>
                {submissions.map((submission, i) => (
                    <SelectItem key={submission._id} value={i}>
                        {i}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}



export default function SubmitData() {
    const { Formio } = useFormioContext();
    const [submissions, setSubmissions] = useState([]);
    const [submissionsLoading, setSubLoading] = useState(true);
    const [selectedSubmissionIndex, setSelectedSubmissionIndex] = useState<any | null>(null);

    useEffect(() => {
        // Fetch data when component mounts
        const fetchSubmissions = async () => {
            try {
                const formio = new Formio(form);
                const data = await formio.loadSubmissions();
                setSubmissions(data);
            } catch (error) {
                console.error('Error loading submissions:', error);
            } finally {
                setSubLoading(false);
            }
        };
        
        fetchSubmissions();
    }, [Formio]);
    
    function handleSelectChange(value: string): void {
        console.log(`Selected submission ID: ${value}`);
        setSelectedSubmissionIndex(value);
    }

    
    if (submissionsLoading) return <div>Loading submissions...</div>;
    
    
    function handleFormSubmit(submission, saved?: boolean | undefined): void {
        console.log('Form submitted:', submission);
        const subIndex = submissions.findIndex((s) => s.form === submission.form);
        if(subIndex !== -1) {
            setSelectedSubmissionIndex(subIndex);
        } else {
            submissions.push(submission);
            setSelectedSubmissionIndex(submissions.length - 1);
        }
        // Handle form submission logic here
        // For example, you might want to save the submission to a database or perform some action
    }

    return (
        <div>
            <h1>Select Submission</h1>
            <SubmissionsSelection submissions={submissions} onSelectChange={handleSelectChange}  />
            <Form src="https://remote-dev.form.io/yzookuzrcdulxkk/carsgrid" onSubmit={handleFormSubmit} submission={selectedSubmissionIndex !== null ? submissions[selectedSubmissionIndex] : undefined} />

        </div>
    );
}

