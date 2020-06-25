import { Injectable } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';



@Injectable({
    providedIn: 'root'
  })
export class UserAgent {
    userAgent;
    deviceInfo = null;
    
    constructor(private deviceService: DeviceDetectorService) {
        this.userAgent =  {
            name: this.deviceService.getDeviceInfo().browser,
            model: this.deviceService.getDeviceInfo().device,
            uuid: btoa(this.deviceService.getDeviceInfo().os_version),
            os: this.deviceService.getDeviceInfo().os_version
        }
    }




    generateUUID() {
        var d = new Date().getTime();
        var d2 = (performance && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16;
            if(d > 0){
                var r = (d + r)%16 | 0;
                d = Math.floor(d/16);
            } else {
                var r = (d2 + r)%16 | 0;
                d2 = Math.floor(d2/16);
            }
            return (c=='x' ? r : (r&0x7|0x8)).toString(16);
        });
        return uuid;

    };

    getBase64EncodedUserAgent() {
        let bs4;
        bs4 = btoa(JSON.stringify(this.userAgent))
        return bs4
    }
}
