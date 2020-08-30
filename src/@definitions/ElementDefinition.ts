import Serve from './Serve';

import * as Preact from 'preact';

export interface DefinitionProps {
	[key: string]: string
}

export interface Definition {
	identifier: string,
	element: any,
	props: DefinitionProps
}
