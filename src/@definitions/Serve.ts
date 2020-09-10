import { Element, ElementConfig } from './Element';

export default interface Serve {
	registerElement: (identifier: string, element: Element, definition: ElementConfig) => void;
}
