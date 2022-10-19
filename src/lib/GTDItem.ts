/*
 * GTDItem.d.ts
 * type exports for GTD
 */

import * as UUID from 'uuid';
import { makeID } from "./GTDID";

export class GTDItem {
    id: UUID.;
    text: string;

    constructor(text: string) {
        this.id = makeID();
        this.text = text;
    }
};