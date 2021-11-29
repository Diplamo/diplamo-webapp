/**
 * We can extends the env types here
 * @see https://vitejs.dev/guide/env-and-mode.html#env-files
 */
interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly VITE_API_BASE_URL: string
  readonly VITE_MAPBOX_ACCESS_TOKEN: string
  readonly VITE_VUE_APP_MORALIS_APPID: string
  readonly VITE_VUE_APP_MORALIS_SERVER_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
