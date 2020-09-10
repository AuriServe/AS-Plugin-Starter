import Serve from './@definitions/Serve';
import Elements from './@elements/_All';

export default function(serve: Serve) {
	for (const element of Elements) {
		serve.registerElement(element.identifier, element.element, element.config);
	}
}
