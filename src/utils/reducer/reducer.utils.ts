
export type ActionWithPayload<T, P> = {
    type:T;
    payload:P
}

export type Action<T> = {
    type:T
}

//This is function overload in order to handle cases in which we don't have payload

export function createAction<T extends string, P>(type: T, payload: P):ActionWithPayload<T, P>;

export function createAction<T extends string>(type: T, payload: void):Action<T>;


export function createAction<T extends string, P>(type: T, payload: P) {
    return { type, payload }
}


