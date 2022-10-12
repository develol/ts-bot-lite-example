import { SenderOfRequests } from "../senderOfRequests";

export class SendText extends SenderOfRequests {
    // Send a text message (Telegram) and return <response>
    static async telegram(){
        let result: any;
        await this.requesterTelegram.sendText({
            user:     this.configuration.testUserTelegram, // from example.conf.ts file
            keyboard: this.keyboards.telegram(), 
            text:     this.textMarkdown.telegram() // or this.textHTML.telegram() or this.textCustom
        }).then((r:any) => result = r);
        return result;
    }

    // Send a text message (VK) and return <response>
    static async vk(){
        let result: any;
        await this.requesterVK.sendText({
            user:     this.configuration.testUserVK, // from example.conf.ts file  
            keyboard: this.keyboards.vk(), 
            text:     this.textMarkdown.vk() // or this.textHTML.vk() or this.textCustom
        }).then((r:any) => result = r);
        return result;
    }

    // Send a text message (Viber) and return <response>
    static async viber(){
        let result: any;
        await this.requesterViber.sendText({
            user:     this.configuration.testUserViber, // from example.conf.ts file 
            keyboard: this.keyboards.viber(), 
            text:     this.textMarkdown.viber() // or this.textHTML.viber() or this.textCustom
        }).then((r:any) => result = r);
        return result;
    }
}