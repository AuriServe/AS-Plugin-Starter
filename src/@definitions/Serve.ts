import { Definition } from './ElementDefinition';

export default interface Serve {
	registerElement: (identifier: string, definition: Definition) => void;
}
