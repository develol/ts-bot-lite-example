import * as botLite from 'ts-bot-lite';
import {conf} from '../example.conf';

export abstract class SenderOfRequests {
    public static configuration:any = conf;

    public static keyboards:any = new botLite.Keyboard({
        keyboard: [[
                'btn 1.1', 
                'btn 1.2'
            ], [
                'btn 2.1', 
                'btn 2.2'
            ]
        ]
    });

    // Formatting HTML text
    public static textHTML:any = new botLite.Texter({
        markup: 'html',
        text:   '<b>bold</b><br><i>italic</i><br><code>code</code><br><s>strike</s>'
    });

    // Formatting Markdown text
    public static textMarkdown:any = new botLite.Texter({
        markup: 'markdown',
        text:   '*bold*\r\n_italic_\r\n`code`\r\n```code```\r\n~strike~'
    });

    // Custom text
    public static textCustom:any = 'bold\r\nitalic\r\ncode\r\ncode\r\nstrike';

    // Object declaration for Telegram
    public static requesterTelegram:any = new botLite.RequestTelegram({
        token: this.configuration.tokenTelegram
    });

    // Object declaration for VK
    public static requesterVK:any = new botLite.RequestVK({
        token: this.configuration.tokenVK
    });

    // Object declaration for Viber
    public static requesterViber:any = new botLite.RequestViber({
        token: this.configuration.tokenViber
    });
}