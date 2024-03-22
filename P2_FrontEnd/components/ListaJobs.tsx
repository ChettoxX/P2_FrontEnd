import { FunctionComponent } from "preact";
import { Post, PostResponse } from "../types.ts";
import ListElement from "./ListaElem.tsx";
import { Job } from "../types.ts"


const JobList: FunctionComponent<{
    data: Job[],
    selectedJob: Job,
    setJob,
}> = (props) => {

    return (
        <div class="w-50 h-100">
            <h1 class="titulo-panel-lateral">Principales empleos que te recomendamos</h1>
            <span class="titulo-panel-lateral-resultados">{props.data.length} resultados</span>
            
            <ul class="jobs-list">
                {props.data.map((p) => (
            
                    <li onclick={() => {
                        props.setJob(p)
                    }}>
                    
                        <ListElement
                            key={p.title}
                            myJob={p}
                            selected={p.slug === props.selectedJob.slug}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default JobList;