'use client';
import { Form, Submission } from '@formio/react';
import { useEffect, useState } from 'react';
import { useFormioContext } from '@formio/react';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select';

const form = 'http://localhost:3000/ssgzluhclhyewdb/aggrid';

type SubmissionsSelectionProps = {
    submissions: Submission[];
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
                    <SelectItem key={submission._id as string} value={i.toString()}>
                        {i.toString()}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}



export default function SubmitData() {
    const { Formio } = useFormioContext();
    const [submissions, setSubmissions] = useState<Submission[]>([]);
    const [submissionsLoading, setSubLoading] = useState(true);
    const [selectedSubmissionIndex, setSelectedSubmissionIndex] = useState<number | null>(null);

    useEffect(() => {
        // Fetch data when component mounts
        const fetchSubmissions = async () => {
            try {
                const formio = new Formio(form);
                const data: Submission[] = await formio.loadSubmissions();
                data.forEach((submission) => delete submission._id);
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

        setSelectedSubmissionIndex(Number(value));
    }

    
    if (submissionsLoading) return <div>Loading submissions...</div>;
    
    
    function handleFormSubmit(submission: Submission, saved?: boolean | undefined): void {
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
            <Form src={form} onSubmit={handleFormSubmit} submission={selectedSubmissionIndex !== null ? structuredClone(submissions[selectedSubmissionIndex]) : undefined} />
        </div>
    );
}

