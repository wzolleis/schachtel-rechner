"use client";

import * as React from "react";

type UseBooleanReturn = {
    value: boolean;
    setValue: React.Dispatch<React.SetStateAction<boolean>>;
    setTrue: () => void;
    setFalse: () => void;
    toggle: () => void;
};

export function useBoolean(defaultValue = false): UseBooleanReturn {
    const [value, setValue] = React.useState(defaultValue);

    const setTrue = React.useCallback(() => {
        setValue(true);
    }, []);

    const setFalse = React.useCallback(() => {
        setValue(false);
    }, []);

    const toggle = React.useCallback(() => {
        setValue((x) => !x);
    }, []);

    return {value, setValue, setTrue, setFalse, toggle};
}

export type {UseBooleanReturn};