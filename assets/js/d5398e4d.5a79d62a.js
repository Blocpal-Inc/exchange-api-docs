"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[910],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,k=d["".concat(o,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4376:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={},i="API user data streams",s={unversionedId:"user-data-stream",id:"user-data-stream",title:"API user data streams",description:"General WSS information",source:"@site/docs/user-data-stream.md",sourceDirName:".",slug:"/user-data-stream",permalink:"/exchange-api-docs/docs/user-data-stream",draft:!1,editUrl:"https://github.com/Blocpal-Inc/exchange-api-docs/docs/user-data-stream.md",tags:[],version:"current",frontMatter:{},sidebar:"docApiSidebar",previous:{title:"REST API",permalink:"/exchange-api-docs/docs/rest-api"},next:{title:"Web socket streams",permalink:"/exchange-api-docs/docs/web-socket-streams"}},o={},p=[{value:"General WSS information",id:"general-wss-information",level:2},{value:"API Endpoints",id:"api-endpoints",level:2},{value:"Create a listenKey",id:"create-a-listenkey",level:3},{value:"Ping/keep-alive a listenKey",id:"pingkeep-alive-a-listenkey",level:3},{value:"Close a listenKey",id:"close-a-listenkey",level:3},{value:"Web Socket Payloads",id:"web-socket-payloads",level:2},{value:"Account Update",id:"account-update",level:3},{value:"Order Update",id:"order-update",level:3}],u={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"api-user-data-streams"},"API user data streams"),(0,r.kt)("h2",{id:"general-wss-information"},"General WSS information"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The base API endpoint is: ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://api.blocpal.com"},"https://api.blocpal.com"))),(0,r.kt)("li",{parentName:"ul"},"A User Data Stream ",(0,r.kt)("inlineCode",{parentName:"li"},"listenKey")," is valid for 60 minutes after creation."),(0,r.kt)("li",{parentName:"ul"},"Doing a ",(0,r.kt)("inlineCode",{parentName:"li"},"PUT")," on a ",(0,r.kt)("inlineCode",{parentName:"li"},"listenKey")," will extend its validity for 60 minutes."),(0,r.kt)("li",{parentName:"ul"},"Doing a ",(0,r.kt)("inlineCode",{parentName:"li"},"DELETE")," on a ",(0,r.kt)("inlineCode",{parentName:"li"},"listenKey")," will close the stream."),(0,r.kt)("li",{parentName:"ul"},"The base websocket endpoint is: ",(0,r.kt)("strong",{parentName:"li"},"wss://api.blocpal.com:443")),(0,r.kt)("li",{parentName:"ul"},"User Data Streams are accessed at ",(0,r.kt)("strong",{parentName:"li"},"/ws/\\<listenKey",">")),(0,r.kt)("li",{parentName:"ul"},"A single connection to ",(0,r.kt)("strong",{parentName:"li"},"api.blocpal.com")," is only valid for 24 hours; expect to be disconnected at the 24 hour mark"),(0,r.kt)("li",{parentName:"ul"},"User data stream payloads are ",(0,r.kt)("strong",{parentName:"li"},"not guaranteed")," to be in order during heavy periods; ",(0,r.kt)("strong",{parentName:"li"},"make sure to order your updates using E"))),(0,r.kt)("h2",{id:"api-endpoints"},"API Endpoints"),(0,r.kt)("h3",{id:"create-a-listenkey"},"Create a listenKey"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"POST /api/v1/userDataStream\n")),(0,r.kt)("p",null,"Start a new user data stream. The stream will close after 60 minutes unless a keepalive is sent."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Weight:"),"\n1"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters:"),"\nNONE"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "listenKey": "pqia91ma19a5s61cv6a81va65sdf19v8a65a1a5s61cv6a81va65sdf19v8a65a1"\n}\n')),(0,r.kt)("h3",{id:"pingkeep-alive-a-listenkey"},"Ping/keep-alive a listenKey"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"PUT /api/v1/userDataStream\n")),(0,r.kt)("p",null,"Keepalive a user data stream to prevent a time out. User data streams will close after 60 minutes. It's recommended to send a ping about every 30 minutes."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Weight:"),"\n1"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Mandatory"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"listenKey"),(0,r.kt)("td",{parentName:"tr",align:null},"STRING"),(0,r.kt)("td",{parentName:"tr",align:null},"YES"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{}\n")),(0,r.kt)("h3",{id:"close-a-listenkey"},"Close a listenKey"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"DELETE /api/v1/userDataStream\n")),(0,r.kt)("p",null,"Close out a user data stream."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Weight:"),"\n1"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Mandatory"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"listenKey"),(0,r.kt)("td",{parentName:"tr",align:null},"STRING"),(0,r.kt)("td",{parentName:"tr",align:null},"YES"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{}\n")),(0,r.kt)("h2",{id:"web-socket-payloads"},"Web Socket Payloads"),(0,r.kt)("h3",{id:"account-update"},"Account Update"),(0,r.kt)("p",null,"Account state is updated with the ",(0,r.kt)("inlineCode",{parentName:"p"},"outboundAccountInfo")," event."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Payload:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "e": "outboundAccountInfo",   // Event type\n  "E": 1499405658849,           // Event time\n  "m": 0,                       // Maker commission rate (bips)\n  "t": 0,                       // Taker commission rate (bips)\n  "b": 0,                       // Buyer commission rate (bips)\n  "s": 0,                       // Seller commission rate (bips)\n  "T": true,                    // Can trade?\n  "W": true,                    // Can withdraw?\n  "D": true,                    // Can deposit?\n  "u": 1499405658848,           // Time of last account update\n  "B": [                        // Balances array\n    {\n      "a": "LTC",               // Asset\n      "f": "17366.18538083",    // Free amount\n      "l": "0.00000000"         // Locked amount\n    },\n    {\n      "a": "BTC",\n      "f": "10537.85314051",\n      "l": "2.19464093"\n    },\n    {\n      "a": "ETH",\n      "f": "17902.35190619",\n      "l": "0.00000000"\n    },\n    {\n      "a": "BNC",\n      "f": "1114503.29769312",\n      "l": "0.00000000"\n    },\n    {\n      "a": "NEO",\n      "f": "0.00000000",\n      "l": "0.00000000"\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"An additional event ",(0,r.kt)("inlineCode",{parentName:"p"},"outboundAccountPosition")," is sent any time an account balance has changed and contains the assets that were possibly changed by the event that generated the balance change."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "e": "outboundAccountPosition", //Event type\n  "E": 1564034571105,             //Event Time\n  "u": 1564034571073,             //Time of last account update\n  "B": [                          //Balances Array\n    {\n      "a": "ETH",                 //Asset\n      "f": "10000.000000",        //Free\n      "l": "0.000000"             //Locked\n    }\n  ]\n}\n')),(0,r.kt)("h3",{id:"order-update"},"Order Update"),(0,r.kt)("p",null,"Orders are updated with the ",(0,r.kt)("inlineCode",{parentName:"p"},"executionReport")," event. Check the API documentation and below for relevant enum definitions.\nAverage price can be found by doing ",(0,r.kt)("inlineCode",{parentName:"p"},"Z")," divided by ",(0,r.kt)("inlineCode",{parentName:"p"},"z"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Payload:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "e": "executionReport",        // Event type\n  "E": 1499405658658,            // Event time\n  "s": "ETHBTC",                 // Symbol\n  "c": "mUvoqJxFIILMdfAW5iGSOW", // Client order ID\n  "S": "BUY",                    // Side\n  "o": "LIMIT",                  // Order type\n  "f": "GTC",                    // Time in force\n  "q": "1.00000000",             // Order quantity\n  "p": "0.10264410",             // Order price\n  "P": "0.00000000",             // Stop price\n  "F": "0.00000000",             // Iceberg quantity\n  "g": -1,                       // OrderListId\n  "C": "null",                   // Original client order ID; This is the ID of the order being canceled\n  "x": "NEW",                    // Current execution type\n  "X": "NEW",                    // Current order status\n  "r": "NONE",                   // Order reject reason; will be an error code.\n  "i": 4293153,                  // Order ID\n  "l": "0.00000000",             // Last executed quantity\n  "z": "0.00000000",             // Cumulative filled quantity\n  "L": "0.00000000",             // Last executed price\n  "n": "0",                      // Commission amount\n  "N": null,                     // Commission asset\n  "T": 1499405658657,            // Transaction time\n  "t": -1,                       // Trade ID\n  "I": 8641984,                  // Ignore\n  "w": true,                     // Is the order working? Stops will have\n  "m": false,                    // Is this trade the maker side?\n  "M": false,                    // Ignore\n  "O": 1499405658657,            // Order creation time\n  "Z": "0.00000000",             // Cumulative quote asset transacted quantity\n  "Y": "0.00000000"              // Last quote asset transacted quantity (i.e. lastPrice * lastQty)\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Execution types:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"NEW"),(0,r.kt)("li",{parentName:"ul"},"CANCELED"),(0,r.kt)("li",{parentName:"ul"},"REPLACED (currently unused)"),(0,r.kt)("li",{parentName:"ul"},"REJECTED"),(0,r.kt)("li",{parentName:"ul"},"TRADE"),(0,r.kt)("li",{parentName:"ul"},"EXPIRED")),(0,r.kt)("p",null,"If the order is an OCO, an event will be displayed named ",(0,r.kt)("inlineCode",{parentName:"p"},"ListStatus")," in addition to the ",(0,r.kt)("inlineCode",{parentName:"p"},"executionReport")," event."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Payload")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "e": "listStatus",                //Event Type\n  "E": 1564035303637,               //Event Time\n  "s": "ETHBTC",                    //Symbol\n  "g": 2,                           //OrderListId\n  "c": "OCO",                       //Contingency Type\n  "l": "EXEC_STARTED",              //List Status Type\n  "L": "EXECUTING",                 //List Order Status\n  "r": "NONE",                      //List Reject Reason\n  "C": "F4QN4G8DlFATFlIUQ0cjdD",    //List Client Order ID\n  "T": 1564035303625,               //Transaction Time\n  "O": [                            //An array of objects\n    {\n      "s": "ETHBTC",                //Symbol\n      "i": 17,                      // orderId\n      "c": "AJYsMjErWJesZvqlJCTUgL" //ClientOrderId\n    },\n    {\n      "s": "ETHBTC",\n      "i": 18,\n      "c": "bfYPSQdLoqAJeNrOr9adzq"\n    }\n  ]\n}\n')))}c.isMDXComponent=!0}}]);