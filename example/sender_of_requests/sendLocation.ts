import { SenderOfRequests } from "../senderOfRequests";

export class SendLocation extends SenderOfRequests {
    // Send a location (Telegram) and return <response>
    static async telegram(){
        let result: any;
        await this.requesterTelegram.sendLocation({
            user:      this.configuration.testUserTelegram, // from example.conf.ts file
            keyboard:  this.keyboards.telegram(), 
            latitude:  '37.7898', 
            longitude: '-122.3942'
        }).then((r:any) => result = r);
        return result;
    }

    // Send a location (VK) and return <response>
    static async vk(){
        let result: any;
        await this.requesterVK.sendLocation({
            user:      this.configuration.testUserVK, // from example.conf.ts file  
            keyboard:  this.keyboards.vk(),
            latitude:  '37.7898', 
            longitude: '-122.3942'
        }).then((r:any) => result = r);
        return result;
    }

    // Send a location (Viber) and return <response>
    static async viber(){
        let result: any;
        await this.requesterViber.sendLocation({
            user:      this.configuration.testUserViber, // from example.conf.ts file 
            keyboard:  this.keyboards.viber(),
            latitude:  '37.7898', 
            longitude: '-122.3942'
        }).then((r:any) => result = r);
        return result;
    }
}