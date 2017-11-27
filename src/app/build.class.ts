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

export class TaskProject {
    task_project_id: number;
    task?: number;
    project?: number;
    component?: number;
    enable?: string;
    patches?: string;
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
    taskproject_set?: TaskProject[];
}