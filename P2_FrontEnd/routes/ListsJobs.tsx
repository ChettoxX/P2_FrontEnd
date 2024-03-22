import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios";
import { Job, JobResponse } from "../types.ts";
import JobBase from "../islands/BaseJob.tsx";

// La función del manejador GET separada para mejorar la legibilidad
async function getHandler(_req: Request, ctx: FreshContext<unknown, JobResponse>) {
    try {
        const offers = await Axios.get<JobResponse>(`https://www.arbeitnow.com/api/job-board-api`);
        return ctx.render(offers.data.data);
    } catch (e) {
        console.error(e);
        throw new Error("Ha habido un error");
    }
}

// Objeto de manejadores con la función GET
export const handler: Handlers = {
    GET: getHandler,
};

// Componente de la página
export default function Page(props: PageProps<JobResponse>) {
    const results = props.data;
    return <JobBase data={results} />;
}
