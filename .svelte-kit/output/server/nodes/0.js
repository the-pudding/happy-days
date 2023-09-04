import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.c6050608.js","_app/immutable/chunks/scheduler.ececd849.js","_app/immutable/chunks/index.8f6ff29f.js","_app/immutable/chunks/wordmark.fc3f3709.js"];
export const stylesheets = ["_app/immutable/assets/0.2725e8c1.css"];
export const fonts = [];
