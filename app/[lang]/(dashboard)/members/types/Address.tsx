import { StateUF } from "./StateUF";

export interface Address {
	zipCode: string;
	street: string;
	number: string;
	complement?: string;
	neighborhood: string;
	city: string;
	state: StateUF;
}
