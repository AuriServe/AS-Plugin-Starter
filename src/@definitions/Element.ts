import Serve from './Serve';

import * as Preact from 'preact';

export type Element = any;

export interface ElementPropField {
	name?: string;
	optional?: true;
	default?: any;

	type: string;
}

export interface ElementPropTable {
	name?: string;
	optional?: true;
	
	fields: ElementProps;
}

export interface ElementProps {
	[key: string]: ElementPropField | ElementPropTable;
};

export interface ElementConfig {
	props: ElementProps;
	manageElement?: Element;
	hydrate?: true;
}
