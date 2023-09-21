import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.197bb2bd.js","_app/immutable/chunks/scheduler.ececd849.js","_app/immutable/chunks/index.d3dd717d.js","_app/immutable/chunks/wordmark.fc3f3709.js"];
export const stylesheets = ["_app/immutable/assets/0.282ccd3a.css"];
export const fonts = [];
