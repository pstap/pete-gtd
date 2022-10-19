import {v4 as uuid} from 'uuid';

export function makeID() {
    return uuid();
}