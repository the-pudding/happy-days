export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","assets/.DS_Store","assets/demo/fonts/atkinson.css","assets/demo/fonts/atlas.css","assets/demo/fonts/baloo-bhai.css","assets/demo/fonts/canela.css","assets/demo/fonts/computer-modern.css","assets/demo/fonts/cozette.css","assets/demo/fonts/inter.css","assets/demo/fonts/jamboree.css","assets/demo/fonts/jersey.css","assets/demo/fonts/lyon.css","assets/demo/fonts/metropolis.css","assets/demo/fonts/national.css","assets/demo/fonts/publico.css","assets/demo/fonts/recoleta.css","assets/demo/fonts/rubik.css","assets/demo/fonts/spacemono.css","assets/demo/fonts/tiempos.css","assets/demo/test.jpg","assets/happydays/.DS_Store","assets/happydays/01-intro.gif","assets/happydays/02-ladder.gif","assets/happydays/03-shift.gif","assets/happydays/chart.svg","assets/happydays/sprite-master-nonalone.png","assets/happydays/sprite-master-nonalone2.png","assets/happydays/sprite-master.png"]),
	mimeTypes: {".css":"text/css",".jpg":"image/jpeg",".gif":"image/gif",".svg":"image/svg+xml",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.fe1156e8.js","app":"_app/immutable/entry/app.b86cd219.js","imports":["_app/immutable/entry/start.fe1156e8.js","_app/immutable/chunks/scheduler.ececd849.js","_app/immutable/chunks/singletons.3d776352.js","_app/immutable/chunks/paths.2bd03d00.js","_app/immutable/entry/app.b86cd219.js","_app/immutable/chunks/scheduler.ececd849.js","_app/immutable/chunks/index.8f6ff29f.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
