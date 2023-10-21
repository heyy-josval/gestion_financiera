
import root from '../root.svelte';
import { set_building } from '__sveltekit/environment';
import { set_assets } from '__sveltekit/paths';
import { set_private_env, set_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_template_contains_nonce: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"utf-8\" />\n    <link rel=\"icon\" href=\"" + assets + "/favicon.png\" />\n    <meta name=\"viewport\" content=\"width=device-width\" />\n    <link\n      href=\"https://cdn.jsdelivr.net/npm/beercss@3.4.0/dist/cdn/beer.min.css\"\n      rel=\"stylesheet\"\n    />\n    <style>\n      :root {\n        --primary: #ffb1c8;\n        --on-primary: #5e1133;\n        --primary-container: #7b2949;\n        --on-primary-container: #ffd9e2;\n        --secondary: #e3bdc6;\n        --on-secondary: #422931;\n        --secondary-container: #5a3f47;\n        --on-secondary-container: #ffd9e2;\n        --tertiary: #efbd94;\n        --on-tertiary: #48290b;\n        --tertiary-container: #623f20;\n        --on-tertiary-container: #ffdcc1;\n        --error: #ffb4ab;\n        --on-error: #690005;\n        --error-container: #93000a;\n        --on-error-container: #ffb4ab;\n        --background: #201a1b;\n        --on-background: #ebe0e1;\n        --surface: #171213;\n        --on-surface: #ebe0e1;\n        --surface-variant: #514347;\n        --on-surface-variant: #d5c2c6;\n        --outline: #9e8c90;\n        --outline-variant: #514347;\n        --shadow: #000000;\n        --scrim: #000000;\n        --inverse-surface: #ebe0e1;\n        --inverse-on-surface: #352f30;\n        --inverse-primary: #984061;\n        --surface-dim: #171213;\n        --surface-bright: #3e3739;\n        --surface-container-lowest: #120d0e;\n        --surface-container-low: #201a1b;\n        --surface-container: #241e1f;\n        --surface-container-high: #2f282a;\n        --surface-container-highest: #3a3334;\n      }\n    </style>\n    <script\n      type=\"module\"\n      src=\"https://cdn.jsdelivr.net/npm/beercss@3.4.0/dist/cdn/beer.min.js\"\n    ></script>\n    <script\n      type=\"module\"\n      src=\"https://cdn.jsdelivr.net/npm/material-dynamic-colors@1.0.5/dist/cdn/material-dynamic-colors.min.js\"\n    ></script>\n    " + head + "\n  </head>\n  <body data-sveltekit-preload-data=\"hover\">\n    <div style=\"display: contents\">" + body + "</div>\n  </body>\n</html>\n",
		error: ({ status, message }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\t--bg: white;\n\t\t\t\t--fg: #222;\n\t\t\t\t--divider: #ccc;\n\t\t\t\tbackground: var(--bg);\n\t\t\t\tcolor: var(--fg);\n\t\t\t\tfont-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,\n\t\t\t\t\tUbuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid var(--divider);\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t@media (prefers-color-scheme: dark) {\n\t\t\t\tbody {\n\t\t\t\t\t--bg: #222;\n\t\t\t\t\t--fg: #ddd;\n\t\t\t\t\t--divider: #666;\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	},
	version_hash: "1ukitfe"
};

export function get_hooks() {
	return {};
}

export { set_assets, set_building, set_private_env, set_public_env };
