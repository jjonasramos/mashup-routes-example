import * as Controllers from './controllers.js';

const routerConfig = {
	root : null,
 	useHash : true,
	hash : '#',
	rootElement: 'view'
}

const router = new Navigo(routerConfig.root, routerConfig.useHash, routerConfig.hash);

const config = {
	host: 'sense-demo.qlik.com',
	prefix: '/',
	port: 443,
	isSecure: true
};

require.config( {
	baseUrl: ( config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port : "") + config.prefix + "resources"
} );

require( ["js/qlik"], function ( qlik ) {

	const app = qlik.openApp('372cbc85-f7fb-4db6-a620-9a5367845dce', config);

	router.on({
		'/': async () => {
			await Controllers.setContent('home', routerConfig.rootElement);
			Controllers.HomeController(app);
		},
		'/pagina1': async () => {
			await Controllers.setContent('pagina1', routerConfig.rootElement);
			Controllers.Pagina01Controller(app);
		},
		'/pagina2': async () => {
			await Controllers.setContent('pagina2', routerConfig.rootElement);
			Controllers.Pagina02Controller(app);
		}
	}).resolve();

} );
