import { NumberValueAccessor } from "@angular/forms";

export class Monitor {
    id?:number;
    dateField?:string;
    businessUnit?:string;
    outbound?:number;
    inbound?:number;
    offerred?:number;
    abandoned?:number;
    answered?:number;
    transferred?:number;
    apiExecution?:number;
    sms?:number;
    globalException?:number;
    customerDisconnect?:number;
    callflowDisconnect?:number;
}
