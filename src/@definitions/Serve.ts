import { ServerDefinition } from './Element';

export default interface Serve {
	registerElement: (arg: ServerDefinition) => void;
}
