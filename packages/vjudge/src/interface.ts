export interface RemoteAccount {
    _id: string;
    type: string;
    cookie?: string[];
    handle: string;
    password: string;
    endpoint?: string;
    proxy?: string;
    query?: string;
    frozen?: string;
    problemLists?: string[];
}
declare module 'hydrooj/src/interface' {
    interface Collections {
        vjudge: RemoteAccount;
    }

    interface DomainDoc {
        mount?: string;
        mountInfo?: any;
    }
}
export interface IBasicProvider {
    ensureLogin(): Promise<boolean | string>;
    getProblem(id: string, meta: Record<string, any>): Promise<{
        title: string;
        data: Record<string, any>;
        files: Record<string, any>;
        tag: string[];
        content: string;
        difficulty?: number;
    }>;
    entryProblemLists?: string[];
    listProblem(page: number, resync: boolean, listId: string): Promise<string[]>;
    submitProblem(id: string, lang: string, code: string, info: any, next: any, end: any): Promise<string | void>;
    waitForSubmission(id: string, next: any, end: any): Promise<void>;
}

export interface BasicProvider {
    new(account: RemoteAccount, save: (data: any) => Promise<void>): IBasicProvider
}
