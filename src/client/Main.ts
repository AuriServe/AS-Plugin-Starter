import * as Preact from 'preact';

import { ClientDefinition } from '../@definitions/Element';

function hydrateElement(e: ClientDefinition) {
	document.querySelectorAll(`script[type="application/hydrate"][data-element="${e.identifier}"]`).forEach(tag => {
		const props = JSON.parse((tag as HTMLScriptElement).innerText);
		Preact.render(Preact.createElement(e.element, props), tag.parentElement!, tag.nextElementSibling!);
		tag.remove();
	});
}

(() => {
	[ 
		/* Place element definitions here */
	].forEach(hydrateElement);
})();
