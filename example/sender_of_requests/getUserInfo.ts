import { SenderOfRequests } from "../senderOfRequests";

export class GetUserInfo extends SenderOfRequests {
    // Get user information (Telegram) and return <response>
    static async telegram(){
        let result: any;
        await this.requesterTelegram.getUserInfo({
            user:     this.configuration.testUserTelegram // from example.conf.ts file
        }).then((r:any) => result = r);
        return result;
    }

    // Get user information (VK) and return <response>
    static async vk(){
        let result: any;
        await this.requesterVK.getUserInfo({
            user:     this.configuration.testUserVK // from example.conf.ts file  
        }).then((r:any) => result = r);
        return result;
    }

    // Get user information (Viber) and return <response>
    static async viber(){
        let result: any;
        await this.requesterViber.getUserInfo({
            user:     this.configuration.testUserViber // from example.conf.ts file 
        }).then((r:any) => result = r);
        return result;
    }
}