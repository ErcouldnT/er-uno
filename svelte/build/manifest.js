export const manifest = {
	appDir: "_app",
	assets: new Set(["UNO-Front.png","favicon.png","uno-logo.webp"]),
	mimeTypes: {".png":"image/png",".webp":"image/webp"},
	_: {
		entry: {"file":"start-fff790ba.js","js":["start-fff790ba.js","chunks/index-4b63fbd4.js"],"css":[]},
		nodes: [
			() => import('./server/nodes/0.js'),
			() => import('./server/nodes/1.js'),
			() => import('./server/nodes/3.js'),
			() => import('./server/nodes/2.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "cards",
				pattern: /^\/cards\/?$/,
				names: [],
				types: [],
				path: "/cards",
				shadow: null,
				a: [0,3],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
