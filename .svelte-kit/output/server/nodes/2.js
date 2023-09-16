import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.15c8ff18.js","_app/immutable/chunks/scheduler.ececd849.js","_app/immutable/chunks/index.86c39e87.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/wordmark.fc3f3709.js"];
export const stylesheets = ["_app/immutable/assets/2.8fc0db48.css"];
export const fonts = [];
