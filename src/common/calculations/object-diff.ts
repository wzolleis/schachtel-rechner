import {diff} from "deep-object-diff";

/**
 * returns the difference of the original and updated objects
 * @param original das ursprüngliche Objekt
 * @param updated das aktualisierte Objet
 * @return the difference
 */
export const getObjectDiff = <T extends object>(original: T, updated: T) => {
    return diff(original, updated);
}
