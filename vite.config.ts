import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 3030
//   }
// })

export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react()],
    server: {
      port: env.VITE_PORT,
      watch: {
      usePolling: true,
      },
    },
    preview: { port: env.VITE_PORT },
  };
});
