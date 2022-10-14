# ts-bot-lite-example
 [TypeScript] Example of **[ts-bot-lite](https://github.com/develol/ts-bot-lite)**
 
***Node.js v18.2.0+***\
***TypeScript v4.8.0+***
# Getting started
1. Cloning this repository 
2. Cloning **[ts-bot-lite](https://github.com/develol/ts-bot-lite)** a nearby directory
3. Installing dependencies from package.json...
```
npm i
```
4. If TypeScript is not global, then...
```
npm i typescript
```
5. Create [example.conf.ts](#file-exampleconfts)
# File example.conf.ts
```typescript
export const conf:any = {
    tokenTelegram:    '<api_key>',
    tokenVK:          '<api_key>',
    tokenViber:       '<api_key>',
    testUserTelegram: '<user_id>',
    testUserVK:       '<user_id>',
    testUserViber:    '<user_id>'
};
```
