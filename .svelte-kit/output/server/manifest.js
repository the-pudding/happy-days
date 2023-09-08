export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","assets/.DS_Store","assets/demo/fonts/atkinson.css","assets/demo/fonts/atlas.css","assets/demo/fonts/baloo-bhai.css","assets/demo/fonts/canela.css","assets/demo/fonts/computer-modern.css","assets/demo/fonts/cozette.css","assets/demo/fonts/inter.css","assets/demo/fonts/jamboree.css","assets/demo/fonts/jersey.css","assets/demo/fonts/lyon.css","assets/demo/fonts/metropolis.css","assets/demo/fonts/national.css","assets/demo/fonts/publico.css","assets/demo/fonts/recoleta.css","assets/demo/fonts/rubik.css","assets/demo/fonts/spacemono.css","assets/demo/fonts/tiempos.css","assets/demo/test.jpg","assets/happydays/.DS_Store","assets/happydays/01-intro.gif","assets/happydays/02-ladder.gif","assets/happydays/03-shift.gif","assets/happydays/alone.svg","assets/happydays/alone_mobile.svg","assets/happydays/cantril.svg","assets/happydays/cantril_24hr.svg","assets/happydays/cantril_24hr_mobile.svg","assets/happydays/cantril_chart.svg","assets/happydays/cantril_chart_mobile.svg","assets/happydays/cantril_mobile.svg","assets/happydays/chart.svg","assets/happydays/dunbar.svg","assets/happydays/dunbar_mobile.svg","assets/happydays/family.svg","assets/happydays/family_mobile.svg","assets/happydays/friends.svg","assets/happydays/friends_mobile.svg","assets/happydays/happydays_charts.ai","assets/happydays/interaction.svg","assets/happydays/interaction_mobile.svg","assets/happydays/sprite-master-nonalone.png","assets/happydays/sprite-master-nonalone2.png","assets/happydays/sprite-master-nonalone3.png","assets/happydays/sprite-master.png"]),
	mimeTypes: {".css":"text/css",".jpg":"image/jpeg",".gif":"image/gif",".svg":"image/svg+xml",".ai":"application/postscript",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.273d3046.js","app":"_app/immutable/entry/app.8e548fe6.js","imports":["_app/immutable/entry/start.273d3046.js","_app/immutable/chunks/scheduler.ececd849.js","_app/immutable/chunks/singletons.5ef5e982.js","_app/immutable/chunks/paths.e87a393b.js","_app/immutable/entry/app.8e548fe6.js","_app/immutable/chunks/scheduler.ececd849.js","_app/immutable/chunks/index.86c39e87.js"],"stylesheets":[],"fonts":[]},
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
