export class Status {
    status_id: number;
    status_name: string;
}

export class OsCategory {
    category_id: number;
    category_name: string;
}

export class Os {
    os_id: number;
    os_name: string;
    env: string;
    checkos: string;
    category: OsCategory;
}

export const MAP_CLASS_SERVICE = {
    status: {
        pk: 'statud_id',
        cls: Status
    },
    oscategory: {
        pk: 'category_id',
        cls: OsCategory
    },
    os: {
        pk: 'os_id',
        cls: Os
    }
}