import { SenderOfRequests } from "../senderOfRequests";

export class SendFile extends SenderOfRequests {
    // Send a file (Telegram) and return <response>
    static async telegram(){
        let result: any;
        await this.requesterTelegram.sendFile({
            user:     this.configuration.testUserTelegram, // from example.conf.ts file
            keyboard: this.keyboards.telegram(), 
            url:      'https://download.samplelib.com/xls/sample-simple-2.xls'
        }).then((r:any) => result = r);
        return result;
    }

    // Send a file (VK) and return <response>
    static async vk(){
        let result: any;
        await this.requesterVK.sendFile({
            user:     this.configuration.testUserVK, // from example.conf.ts file  
            keyboard: this.keyboards.vk(),
            url:      'https://download.samplelib.com/xls/sample-simple-2.xls'
        }).then((r:any) => result = r);
        return result;
    }

    // Send a file (Viber) and return <response>
    static async viber(){
        let result: any;
        await this.requesterViber.sendFile({
            user:     this.configuration.testUserViber, // from example.conf.ts file 
            keyboard: this.keyboards.viber(),
            url:      'https://download.samplelib.com/xls/sample-simple-2.xls'
        }).then((r:any) => result = r);
        return result;
    }
}