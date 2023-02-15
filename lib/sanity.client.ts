import { createClient } from 'next-sanity';

export const projectId = '95uf96hz';
export const dataset = 'production';
const apiVersion = '2021-10-21'
const token = process.env.SANITY_API_TOKEN;

export const client = createClient({
    projectId: projectId,
    dataset: dataset,
    apiVersion: apiVersion,
    useCdn: false,
    token: token,
});

