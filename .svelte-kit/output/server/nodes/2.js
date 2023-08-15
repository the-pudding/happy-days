import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.53f4e5ae.js","_app/immutable/chunks/scheduler.aed2d23e.js","_app/immutable/chunks/index.3ecacae0.js","_app/immutable/chunks/each.e59479a4.js"];
export const stylesheets = ["_app/immutable/assets/2.9aef7440.css"];
export const fonts = [];
