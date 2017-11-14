import { Status, OsCategory } from './build.class';

export const STATUSES: Status[] = [
    {status_id: 0, status_name: 'open'},
    {status_id: 1, status_name: 'submitted'},
    {status_id: 2, status_name: 'queuing'},
    {status_id: 3, status_name: 'running'},
    {status_id: 4, status_name: 'done'},
    {status_id: 5, status_name: 'successful'},
    {status_id: 6, status_name: 'failed'},
    {status_id: 7, status_name: 'checking'},
    {status_id: 8, status_name: 'chk_failed'},
    {status_id: 9, status_name: 'exit'},
    {status_id: 10, status_name: 'stopped'},
    {status_id: 11, status_name: 'partial_build'}
]

export const OSCATEGORIES: OsCategory[] = [
    {category_id: 1, category_name: 'AIX'},
    {category_id: 5, category_name: 'Alpha'},
    {category_id: 2, category_name: 'CrayX'},
    {category_id: 4, category_name: 'Eagle'},
    {category_id: 6, category_name: 'HP'},
    {category_id: 8, category_name: 'Linux'},
    {category_id: 9, category_name: 'MacOS'},
    {category_id: 14, category_name: 'NEC'},
    {category_id: 10, category_name: 'QsNet'},
    {category_id: 11, category_name: 'SGI'},
    {category_id: 7, category_name: 'slurm'},
    {category_id: 12, category_name: 'Solaris'},
    {category_id: 13, category_name: 'Windows'}
]