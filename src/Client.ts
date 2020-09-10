import * as Preact from 'preact';

import Elements from './@elements/_Hydrated';

for (const element of Elements) {
	document.querySelectorAll(`script[type="application/hydrate"][data-element="${element.identifier}"]`).forEach(tag => {
		const props = JSON.parse((tag as HTMLScriptElement).innerText);
		const elementRoot = tag.nextElementSibling;
	 
		Preact.render(Preact.createElement(element.element, props), tag.parentElement, elementRoot);
		tag.remove();
	});
}
