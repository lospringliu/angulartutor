import { InMemoryDbService } from 'angular-in-memory-web-api';
import { STATUSES, OSCATEGORIES } from './mock';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const statuses = STATUSES;
        const oscategories = OSCATEGORIES;
        return { statuses, oscategories };
    }
}