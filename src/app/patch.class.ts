export class Status {
    id: number;
    name: string;
}

export class FakeTask {
    id: number; 
    task_id: number;
    task_name: string;
}

export class Priority {
    id: number;
    name: string;
}

export class Product {
    id: number;
    name: string;
    product_name: string;
    product_ids?: string;
    default_components?: string;
}

export class Version {
    id: number;
    name: string;
}

export class FcCustomer {
    id: number;
    name: string;
}

export class FcServerity {
    id: number;
    name: string;
}

export class Serverity {
    id: number;
    name: string;
}

export class Platform {
    id: number;
    name: string;
}

export class FcType {
    id: number;
    name: string;
}

export class User {
    id: number;
    name: string;
    email?: string;
}

export class FileList {
    id: number;
    content: string;
}

export class TaskTemplate {
    id: number;
    product: Product;
    version: Version;
    template: FakeTask;
    os_synced: boolean;
}

export class FcCategory {
    id: number;
    name: string;
}

export class Workitem {
    id: number;
    wi_id: number;
    summary?: string;
    status?: Status;
    //status?: number;
    product?: Product;
    //product?: number;
    uuid?: string;
    version?: Version;
    //version?: number;
    platforms_string?: string;
    platforms?: Platform[];
    filelist?: string;
    fctype?: FcType;
    fcServerity?: FcServerity
    fccategory?: FcCategory;
    fccustomer?: FcCustomer;
    apar?: string;
    binarires?: string;
    streams?: string;
    packages?: string;
    priority?: Priority;
    severity?: Serverity;
    created_by?: User;
    owned_by?: User;
    display?: string;
    modified?: any;
    updated?: any;
    timestamp?: any;
    created?: any;
    task_template?: FakeTask;
    //task_template: number;
    locked?: boolean;
    file_task?: string;
    file_config?: string;
    file_makefile?: string;
    reldir?: string;
}