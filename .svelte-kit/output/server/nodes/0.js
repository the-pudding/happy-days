import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.dbf7b5ca.js","_app/immutable/chunks/scheduler.ececd849.js","_app/immutable/chunks/index.86c39e87.js","_app/immutable/chunks/wordmark.fc3f3709.js"];
export const stylesheets = ["_app/immutable/assets/0.1b1a6388.css"];
export const fonts = [];
