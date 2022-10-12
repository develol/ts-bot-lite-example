import { SenderOfRequests } from "../senderOfRequests";

export class SendPhoto extends SenderOfRequests {
    // Send an image (Telegram) and return <response>
    static async telegram(){
        let result: any;
        await this.requesterTelegram.sendPhoto({
            user:     this.configuration.testUserTelegram, // from example.conf.ts file
            keyboard: this.keyboards.telegram(), 
            url:      'https://download.samplelib.com/jpeg/sample-city-park-400x300.jpg',
            text:     this.textMarkdown.telegram() // or this.textHTML.telegram() or this.textCustom
        }).then((r:any) => result = r);
        return result;
    }

    // Send an image (VK) and return <response>
    static async vk(){
        let result: any;
        await this.requesterVK.sendPhoto({
            user:     this.configuration.testUserVK, // from example.conf.ts file  
            keyboard: this.keyboards.vk(),
            url:      'https://download.samplelib.com/jpeg/sample-city-park-400x300.jpg',
            text:     this.textMarkdown.vk() // or this.textHTML.vk() or this.textCustom
        }).then((r:any) => result = r);
        return result;
    }

    // Send an image (Viber) and return <response>
    static async viber(){
        let result: any;
        await this.requesterViber.sendPhoto({
            user:     this.configuration.testUserViber, // from example.conf.ts file 
            keyboard: this.keyboards.viber(),
            url:      'https://download.samplelib.com/jpeg/sample-city-park-400x300.jpg',
            text:     this.textMarkdown.viber() // or this.textHTML.viber() or this.textCustom
        }).then((r:any) => result = r);
        return result;
    }
}