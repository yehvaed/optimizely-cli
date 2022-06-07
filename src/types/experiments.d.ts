export interface Experiments {
    variations: Variation[];
    changes: Change[];
}

export interface Variation {
    actions: Action[];
    name: string;
}

export type ChangenType = "custom_code" | "custom_css";

export interface Change {
    type: ChangenType;
    value: string;
}


export interface Action {
    changes: Change[];
}