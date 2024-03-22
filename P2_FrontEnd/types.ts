export type Job = {
    company_name: string,
    title: string,
    description: string,
    remote: boolean,
    tags: string[],
    location: string,
    slug: string,
    url: string,
    }

export type JobResponse = {
    jobs: Job[],
}