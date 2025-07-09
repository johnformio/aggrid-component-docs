'use client';
import {Form, Submission, useFormioContext} from '@formio/react';
import {useEffect, useState} from 'react';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select';
import {Input} from '@/components/ui/input';

const form = 'https://remote-dev.form.io/yzookuzrcdulxkk/carsgrid';

type SubmissionsSelectionProps = {
    submissions: Submission[];
    onSelectChange: (value: string) => void;
    value: string
};

const SubmissionsSelection = ({submissions, onSelectChange, value}: SubmissionsSelectionProps) => {
    return (
        <Select onValueChange={onSelectChange} value={value}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Submission"/>
            </SelectTrigger>
            <SelectContent>
                <SelectItem key={"0"} value={"No Selection"}>
                    {"Remove Current Selection"}
                </SelectItem>
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
    const {Formio} = useFormioContext();
    const [submissions, setSubmissions] = useState<Submission[]>([]);
    const [submissionsLoading, setSubLoading] = useState(true);
    const [selectedSubmissionIndex, setSelectedSubmissionIndex] = useState<number | null>(null);

    useEffect(() => {
        const fetchSubmissions = async () => {
            try {
                const formio = new Formio(form);
                const data: Submission[] = await formio.loadSubmissions();
                setSubmissions(data);
            } catch (error) {
                console.error('Error loading submissions:', error);
            } finally {
                setSubLoading(false);
            }
        };

        fetchSubmissions();
    }, []);

    function handleSelectChange(value: string): void {
        if (value === 'No Selection') {
            setSelectedSubmissionIndex(null);
            return;
        }
        console.log(`Selected submission ID: ${value}`);

        setSelectedSubmissionIndex(Number(value));
    }


    if (submissionsLoading) return <div>Loading submissions...</div>;


    function handleFormSubmit(submission: Submission): void {
        console.log('Form submitted:', submission);
        setSelectedSubmissionIndex(null);
        if (submissions.some((value) => submission._id === value._id)) {
            return;
        }
        const tmpSubmissions = [...submissions];
        tmpSubmissions.push(submission);
        setSubmissions(tmpSubmissions);
    }

    return (
        <div>
            <Input></Input>
            <h3>Select Submission</h3>
            <SubmissionsSelection submissions={submissions} onSelectChange={handleSelectChange}
                                  value={selectedSubmissionIndex !== null ? String(selectedSubmissionIndex) : ''}/>
            <Form src={form} onSubmit={handleFormSubmit}
                  submission={selectedSubmissionIndex !== null ? structuredClone(submissions[selectedSubmissionIndex]) : undefined}/>
        </div>
    );
}

