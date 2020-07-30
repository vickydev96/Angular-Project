import { Text } from '@angular/compiler/src/render3/r3_ast';

export class User {
    constructor(
        public CreatedBy : string,
        public Description : string,
        public Severity : number,
        public Status : string,
        public CancelledReason : string,
        public CancelledOtherDescription : string,
        public Comments : string){}
    
}
