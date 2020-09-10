import { Element, ElementConfig } from '../@definitions/Element';

const elements: { identifier: string; element: Element; config: ElementConfig }[] = [
	{ identifier: GridLayout.identifier, element: GridLayout.element, config: GridLayout.config },

	{ identifier: Calendar.identifier, element: Calendar.element, config: Calendar.config },
	{ identifier: ImageView.identifier, element: ImageView.element, config: ImageView.config },
	{ identifier: MarkdownView.identifier, element: MarkdownView.element, config: MarkdownView.config }
];

export default elements;
