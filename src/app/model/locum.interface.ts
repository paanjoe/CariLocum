export interface Locum {
    ID: number;
    JOB_TYPE: string;
    NAME: string;
    WORKER_TYPE: string;
    RATE: string;
    TIME_START?: string;
    TIME_END?: string;
    START_DATE: Date;
    END_DATE: Date;
    ADDRESS_GEOLOCATION: string;
    ADDRESS: string;
    PHONE: string;
    EMAIL: string;
    DESCRIPTION?: string;
    ATTACHMENT?: File;
}