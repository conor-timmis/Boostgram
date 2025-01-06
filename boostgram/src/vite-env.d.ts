/// <reference types="vite/client" />

declare namespace NodeJS {
    interface ProcessEnv {
        REACT_APP_DATABASE_URL: string;
    }
}