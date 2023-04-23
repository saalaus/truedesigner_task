import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, "index.html"),
                description: resolve(
                    __dirname,
                    "src",
                    "2_description",
                    "index.html"
                ),
                datetime: resolve(__dirname, "src", "3_datetime", "index.html"),
                map: resolve(__dirname, "src", "4_map", "index.html"),
                photo: resolve(__dirname, "src", "5_photo", "index.html"),
                finish: resolve(__dirname, "src", "6_finish", "index.html"),
            },
        },
    },
});
