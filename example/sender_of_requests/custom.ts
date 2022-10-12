import { SenderOfRequests } from "../senderOfRequests";

export class RequestCustom extends SenderOfRequests {
    // Send a file (Telegram) and return <response>
    static async telegram(){
        let result: any;
        await this.requesterTelegram.fetchSender({
            param: {  // custom parameters 
                chat_id: this.configuration.testUserTelegram // from example.conf.ts file
            },
            page:         'getChat', // custom method 
            responseType: 'custom'
        }).then((r:any) => result = r);
        return result;
    }

    // Send a file (VK) and return <response>
    static async vk(){
        let result: any;
        await this.requesterVK.fetchSender({
            param: {  // custom parameters 
                user_id: this.configuration.testUserVK, // from example.conf.ts file
                fields:  'screen_name'
            },
            page:         'users.get', // custom method 
            responseType: 'custom'
        }).then((r:any) => result = r);
        return result;
    }

    // Send a file (Viber) and return <response>
    static async viber(){
        let result: any;
        await this.requesterViber.fetchSender({
            param: { // custom parameters 
                id: this.configuration.testUserViber // from example.conf.ts file
            },
            page:         'get_user_details', // custom method 
            responseType: 'custom'
        }).then((r:any) => result = r);
        return result;
    }
}