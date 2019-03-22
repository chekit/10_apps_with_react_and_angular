export enum ComponentState {
	LOADED,
	LOADING,
	ERROR
}

export interface ComponentsProps {
	state: ComponentState;
}