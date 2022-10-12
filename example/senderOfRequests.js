"use strict";
exports.__esModule = true;
exports.SenderOfRequests = void 0;
var botLite = require("ts-bot-lite");
var example_conf_1 = require("../example.conf");
var SenderOfRequests = /** @class */ (function () {
    function SenderOfRequests() {
    }
    var _a;
    _a = SenderOfRequests;
    SenderOfRequests.configuration = example_conf_1.conf;
    SenderOfRequests.keyboards = new botLite.Keyboard({
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
    SenderOfRequests.textHTML = new botLite.Texter({
        markup: 'html',
        text: '<b>bold</b><br><i>italic</i><br><code>code</code><br><s>strike</s>'
    });
    // Formatting Markdown text
    SenderOfRequests.textMarkdown = new botLite.Texter({
        markup: 'markdown',
        text: '*bold*\r\n_italic_\r\n`code`\r\n```code```\r\n~strike~'
    });
    // Custom text
    SenderOfRequests.textCustom = 'bold\r\nitalic\r\ncode\r\ncode\r\nstrike';
    // Object declaration for Telegram
    SenderOfRequests.requesterTelegram = new botLite.RequestTelegram({
        token: _a.configuration.tokenTelegram
    });
    // Object declaration for VK
    SenderOfRequests.requesterVK = new botLite.RequestVK({
        token: _a.configuration.tokenVK
    });
    // Object declaration for Viber
    SenderOfRequests.requesterViber = new botLite.RequestViber({
        token: _a.configuration.tokenViber
    });
    return SenderOfRequests;
}());
exports.SenderOfRequests = SenderOfRequests;
