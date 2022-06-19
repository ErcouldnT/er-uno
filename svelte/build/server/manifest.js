export const manifest = {
	appDir: "_app",
	assets: new Set(["UNO-Front.png","favicon.png","uno-logo.webp"]),
	mimeTypes: {".png":"image/png",".webp":"image/webp"},
	_: {
		entry: {"file":"start-f7209fdd.js","js":["start-f7209fdd.js","chunks/index-7fd2aba4.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/2.js')
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
