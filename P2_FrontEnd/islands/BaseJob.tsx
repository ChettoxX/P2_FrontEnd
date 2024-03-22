import { FunctionComponent } from "preact";
import { useState } from "preact/hooks";
import JobList from "../components/ListaJobs.tsx";
import JobDetail from "../components/DetJob.tsx";
import { Job } from "../types.ts";

const JobBase: FunctionComponent<{ data: Job[] }> = ({ data }) => {
    const [selectedJob, setSelectedJob] = useState<Job>(data[0]);

    return (
        <div class="layout">    
            <JobList 
                data={data}
                selectedJob={selectedJob}
                setJob={setSelectedJob}
            />
            <JobDetail {...selectedJob} /> 
        </div>
    );
};

export default JobBase;
