import { Status, OsCategory } from './build.class';

export const STATUSES: Status[] = [
    {id: 0, status_name: 'open'},
    {id: 1, status_name: 'submitted'},
    {id: 2, status_name: 'queuing'},
    {id: 3, status_name: 'running'},
    {id: 4, status_name: 'done'},
    {id: 5, status_name: 'successful'},
    {id: 6, status_name: 'failed'},
    {id: 7, status_name: 'checking'},
    {id: 8, status_name: 'chk_failed'},
    {id: 9, status_name: 'exit'},
    {id: 10, status_name: 'stopped'},
    {id: 11, status_name: 'partial_build'}
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