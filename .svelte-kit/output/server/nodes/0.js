import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.e9c265a1.js","_app/immutable/chunks/scheduler.90e040a3.js","_app/immutable/chunks/index.5a788b58.js"];
export const stylesheets = ["_app/immutable/assets/0.a1c7d05c.css"];
export const fonts = [];
