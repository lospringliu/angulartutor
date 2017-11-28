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

export class Product {
    product_id: number;
    product_name: string;
}

export class Project {
    project_id: number;
    project_name: string;
    version: string;
    product: Product;
}

export class Component {
    component_id: number;
    component_name: string;
    cvs: string;
    project: number;
    depend_components: string;
}

export class TaskProject {
    task_project_id: number;
    task: number;
    project: Project;
    component: Component;
    enable: string;
    patches?: string;
}

export class TaskProjectOs {
    task_project_os_id: number;
    task: number;
    project: Project;
    component: Component;
    os: Os;
    enable: string;
    start_time?: string;
    end_time?: string;
    sequence?: number;
    host?: number;
    status?: number;
    project_os?: number;
    job_host?: string;
}

export class Task {
    task_id: number;
    task_name: string;
    build_no?: number;
    bug_prefix?: string;
    bug_no?: number;
    branch?: string;
    work?: string;
    workw?: string;
    reldir?: string;
    log?: string;
    checkout?: string;
    strip?: string;
    auto_report?: string;
    auto_clean?: string;
    status?: number;
    start_time?: string;
    end_time?: string;
    env?: string;
    mailto?: string;
    schedule?: string;
    comments?: string;
    user?: number;
    threshold?: number;
    keep_days?: number;
    build_procedure?: string;
    estimatetime?: string;
    taskprojects?: TaskProject[];
    taskprojectoses?: TaskProjectOs[];
}