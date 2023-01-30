import { createClient } from 'next-sanity';

export const projectId = '95uf96hz';
export const dataset = 'production';
const apiVersion = '2021-10-21';

export const client = createClient({
    projectId: '95uf96hz',
    dataset: 'production',
    apiVersion: '2021-10-21',
    useCdn: false,
});