/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ADMIN_API_ENDPOINT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
