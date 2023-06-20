"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[205],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=m(a),c=r,u=d["".concat(s,".").concat(c)]||d[c]||k[c]||l;return a?n.createElement(u,i(i({ref:t},p),{},{components:a})):n.createElement(u,i({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1485:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const l={},i="Web Socket Streams",o={unversionedId:"web-socket-streams",id:"web-socket-streams",title:"Web Socket Streams",description:"General WSS information",source:"@site/docs/web-socket-streams.md",sourceDirName:".",slug:"/web-socket-streams",permalink:"/docs/web-socket-streams",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/web-socket-streams.md",tags:[],version:"current",frontMatter:{},sidebar:"docApiSidebar",previous:{title:"API User Data Streams",permalink:"/docs/user-data-stream"}},s={},m=[{value:"General WSS information",id:"general-wss-information",level:2},{value:"Aggregate Trade Streams",id:"aggregate-trade-streams",level:2},{value:"Trade Streams",id:"trade-streams",level:2},{value:"Kline/Candlestick Streams",id:"klinecandlestick-streams",level:2},{value:"(Not yet implemented - coming soon)",id:"not-yet-implemented---coming-soon",level:4},{value:"Individual Symbol Mini Ticker Stream",id:"individual-symbol-mini-ticker-stream",level:2},{value:"(Not yet implemented - coming soon)",id:"not-yet-implemented---coming-soon-1",level:4},{value:"All Market Mini Tickers Stream",id:"all-market-mini-tickers-stream",level:2},{value:"(Not yet implemented - coming soon)",id:"not-yet-implemented---coming-soon-2",level:4},{value:"Individual Symbol Ticker Streams",id:"individual-symbol-ticker-streams",level:2},{value:"(Not yet implemented - coming soon)",id:"not-yet-implemented---coming-soon-3",level:4},{value:"All Market Tickers Stream",id:"all-market-tickers-stream",level:2},{value:"(Not yet implemented - coming soon)",id:"not-yet-implemented---coming-soon-4",level:4},{value:"Individual Symbol Book Ticker Streams",id:"individual-symbol-book-ticker-streams",level:2},{value:"All Book Tickers Stream",id:"all-book-tickers-stream",level:2},{value:"Partial Book Depth Streams",id:"partial-book-depth-streams",level:2},{value:"Diff. Depth Stream",id:"diff-depth-stream",level:2},{value:"How to manage a local order book correctly",id:"how-to-manage-a-local-order-book-correctly",level:2}],p={toc:m},d="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"web-socket-streams"},"Web Socket Streams"),(0,r.kt)("h2",{id:"general-wss-information"},"General WSS information"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The base endpoint is: ",(0,r.kt)("inlineCode",{parentName:"li"},"wss://api.blocpal.com:443")),(0,r.kt)("li",{parentName:"ul"},"Streams can be accessed either in a single raw stream or in a combined stream"),(0,r.kt)("li",{parentName:"ul"},"Raw streams are accessed at ",(0,r.kt)("inlineCode",{parentName:"li"},"/ws/\\<streamName\\>")),(0,r.kt)("li",{parentName:"ul"},"Combined streams are accessed at ",(0,r.kt)("inlineCode",{parentName:"li"},"/stream?streams=\\<streamName1\\>/\\<streamName2\\>/\\<streamName3\\>")),(0,r.kt)("li",{parentName:"ul"},"Combined stream events are wrapped as follows: ",(0,r.kt)("inlineCode",{parentName:"li"},'{"stream":"\\<streamName\\>","data":\\<rawPayload\\>}')),(0,r.kt)("li",{parentName:"ul"},"All symbols for streams are ",(0,r.kt)("strong",{parentName:"li"},"lowercase")),(0,r.kt)("li",{parentName:"ul"},"A single connection to ",(0,r.kt)("inlineCode",{parentName:"li"},"api.blocpal.com")," is only valid for 24 hours; expect to be disconnected at the 24 hour mark"),(0,r.kt)("li",{parentName:"ul"},"The websocket server will send a ",(0,r.kt)("inlineCode",{parentName:"li"},"ping frame")," every 3 minutes. If the websocket server does not receive a ",(0,r.kt)("inlineCode",{parentName:"li"},"pong frame")," back from the connection within a 10 minute period, the connection will be disconnected. Unsolicited ",(0,r.kt)("inlineCode",{parentName:"li"},"pong frames")," are allowed.")),(0,r.kt)("h2",{id:"aggregate-trade-streams"},"Aggregate Trade Streams"),(0,r.kt)("p",null,"The Aggregate Trade Streams push trade information that is aggregated for a single taker order."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Stream Name:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"<symbol>@aggTrade")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Update Speed:")," Real-time"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Payload:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "e": "aggTrade",  // Event type\n  "E": 123456789,   // Event time\n  "s": "BNBBTC",    // Symbol\n  "a": 12345,       // Aggregate trade ID\n  "p": "0.001",     // Price\n  "q": "100",       // Quantity\n  "f": 100,         // First trade ID\n  "l": 105,         // Last trade ID\n  "T": 123456785,   // Trade time\n  "m": true,        // Is the buyer the market maker?\n  "M": true         // Ignore\n}\n')),(0,r.kt)("h2",{id:"trade-streams"},"Trade Streams"),(0,r.kt)("p",null,"The Trade Streams push raw trade information; each trade has a unique buyer and seller."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Stream Name:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"<symbol>@trade")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Update Speed:")," Real-time"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Payload:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "e": "trade",     // Event type\n  "E": 123456789,   // Event time\n  "s": "BNBBTC",    // Symbol\n  "t": 12345,       // Trade ID\n  "p": "0.001",     // Price\n  "q": "100",       // Quantity\n  "b": 88,          // Buyer order ID\n  "a": 50,          // Seller order ID\n  "T": 123456785,   // Trade time\n  "m": true,        // Is the buyer the market maker?\n  "M": true         // Ignore\n}\n')),(0,r.kt)("h2",{id:"klinecandlestick-streams"},"Kline/Candlestick Streams"),(0,r.kt)("h4",{id:"not-yet-implemented---coming-soon"},"(Not yet implemented - coming soon)"),(0,r.kt)("p",null,"The Kline/Candlestick Stream push updates to the current klines/candlestick every second."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kline/Candlestick chart intervals:")),(0,r.kt)("p",null,"m ","\u2192"," minutes; h ","\u2192"," hours; d ","\u2192"," days; w ","\u2192"," weeks; M ","\u2192"," months"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"1m"),(0,r.kt)("li",{parentName:"ul"},"3m"),(0,r.kt)("li",{parentName:"ul"},"5m"),(0,r.kt)("li",{parentName:"ul"},"15m"),(0,r.kt)("li",{parentName:"ul"},"30m"),(0,r.kt)("li",{parentName:"ul"},"1h"),(0,r.kt)("li",{parentName:"ul"},"2h"),(0,r.kt)("li",{parentName:"ul"},"4h"),(0,r.kt)("li",{parentName:"ul"},"6h"),(0,r.kt)("li",{parentName:"ul"},"8h"),(0,r.kt)("li",{parentName:"ul"},"12h"),(0,r.kt)("li",{parentName:"ul"},"1d"),(0,r.kt)("li",{parentName:"ul"},"3d"),(0,r.kt)("li",{parentName:"ul"},"1w"),(0,r.kt)("li",{parentName:"ul"},"1M")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Stream Name:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"<symbol>@kline_<interval>")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Update Speed:")," 2000ms"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Payload:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "e": "kline",     // Event type\n  "E": 123456789,   // Event time\n  "s": "BNBBTC",    // Symbol\n  "k": {\n    "t": 123400000, // Kline start time\n    "T": 123460000, // Kline close time\n    "s": "BNBBTC",  // Symbol\n    "i": "1m",      // Interval\n    "f": 100,       // First trade ID\n    "L": 200,       // Last trade ID\n    "o": "0.0010",  // Open price\n    "c": "0.0020",  // Close price\n    "h": "0.0025",  // High price\n    "l": "0.0015",  // Low price\n    "v": "1000",    // Base asset volume\n    "n": 100,       // Number of trades\n    "x": false,     // Is this kline closed?\n    "q": "1.0000",  // Quote asset volume\n    "V": "500",     // Taker buy base asset volume\n    "Q": "0.500",   // Taker buy quote asset volume\n    "B": "123456"   // Ignore\n  }\n}\n')),(0,r.kt)("h2",{id:"individual-symbol-mini-ticker-stream"},"Individual Symbol Mini Ticker Stream"),(0,r.kt)("h4",{id:"not-yet-implemented---coming-soon-1"},"(Not yet implemented - coming soon)"),(0,r.kt)("p",null,"24hr rolling window mini-ticker statistics. These are NOT the statistics of the UTC day, but a 24hr rolling window for the previous 24hrs."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Stream Name:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"<symbol>@miniTicker")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Update Speed:")," 1000ms"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Payload:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'  {\n    "e": "24hrMiniTicker",  // Event type\n    "E": 123456789,         // Event time\n    "s": "BNBBTC",          // Symbol\n    "c": "0.0025",          // Close price\n    "o": "0.0010",          // Open price\n    "h": "0.0025",          // High price\n    "l": "0.0010",          // Low price\n    "v": "10000",           // Total traded base asset volume\n    "q": "18"               // Total traded quote asset volume\n  }\n')),(0,r.kt)("h2",{id:"all-market-mini-tickers-stream"},"All Market Mini Tickers Stream"),(0,r.kt)("h4",{id:"not-yet-implemented---coming-soon-2"},"(Not yet implemented - coming soon)"),(0,r.kt)("p",null,"24hr rolling window mini-ticker statistics for all symbols that changed in an array. These are NOT the statistics of the UTC day, but a 24hr rolling window for the previous 24hrs. Note that only tickers that have changed will be present in the array."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Stream Name:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"!miniTicker@arr")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Update Speed:")," 1000ms"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Payload:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"[\n  {\n    // Same as <symbol>@miniTicker payload\n  }\n]\n")),(0,r.kt)("h2",{id:"individual-symbol-ticker-streams"},"Individual Symbol Ticker Streams"),(0,r.kt)("h4",{id:"not-yet-implemented---coming-soon-3"},"(Not yet implemented - coming soon)"),(0,r.kt)("p",null,"24hr rolling window ticker statistics for a single symbol. These are NOT the statistics of the UTC day, but a 24hr rolling window for the previous 24hrs."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Stream Name:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"<symbol>@ticker")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Update Speed:")," 1000ms"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Payload:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "e": "24hrTicker",  // Event type\n  "E": 123456789,     // Event time\n  "s": "BNBBTC",      // Symbol\n  "p": "0.0015",      // Price change\n  "P": "250.00",      // Price change percent\n  "w": "0.0018",      // Weighted average price\n  "x": "0.0009",      // First trade(F)-1 price (first trade before the 24hr rolling window)\n  "c": "0.0025",      // Last price\n  "Q": "10",          // Last quantity\n  "b": "0.0024",      // Best bid price\n  "B": "10",          // Best bid quantity\n  "a": "0.0026",      // Best ask price\n  "A": "100",         // Best ask quantity\n  "o": "0.0010",      // Open price\n  "h": "0.0025",      // High price\n  "l": "0.0010",      // Low price\n  "v": "10000",       // Total traded base asset volume\n  "q": "18",          // Total traded quote asset volume\n  "O": 0,             // Statistics open time\n  "C": 86400000,      // Statistics close time\n  "F": 0,             // First trade ID\n  "L": 18150,         // Last trade Id\n  "n": 18151          // Total number of trades\n}\n')),(0,r.kt)("h2",{id:"all-market-tickers-stream"},"All Market Tickers Stream"),(0,r.kt)("h4",{id:"not-yet-implemented---coming-soon-4"},"(Not yet implemented - coming soon)"),(0,r.kt)("p",null,"24hr rolling window ticker statistics for all symbols that changed in an array. These are NOT the statistics of the UTC day, but a 24hr rolling window for the previous 24hrs. Note that only tickers that have changed will be present in the array."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Stream Name:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"!ticker@arr")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Update Speed:")," 1000ms"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Payload:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"[\n  {\n    // Same as <symbol>@ticker payload\n  }\n]\n")),(0,r.kt)("h2",{id:"individual-symbol-book-ticker-streams"},"Individual Symbol Book Ticker Streams"),(0,r.kt)("p",null,"Pushes any update to the best bid or ask's price or quantity in real-time for a specified symbol."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Stream Name:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"<symbol>@bookTicker")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Update Speed:")," Real-time"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Payload:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "u":400900217,     // order book updateId\n  "s":"BNBUSDT",     // symbol\n  "b":"25.35190000", // best bid price\n  "B":"31.21000000", // best bid qty\n  "a":"25.36520000", // best ask price\n  "A":"40.66000000"  // best ask qty\n}\n')),(0,r.kt)("h2",{id:"all-book-tickers-stream"},"All Book Tickers Stream"),(0,r.kt)("p",null,"Pushes any update to the best bid or ask's price or quantity in real-time for all symbols."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Stream Name:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"!bookTicker")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Update Speed:")," Real-time"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Payload:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n  // Same as <symbol>@bookTicker payload\n}\n")),(0,r.kt)("h2",{id:"partial-book-depth-streams"},"Partial Book Depth Streams"),(0,r.kt)("p",null,"Top ",(0,r.kt)("inlineCode",{parentName:"p"},"<levels>")," bids and asks, pushed every second. Valid ",(0,r.kt)("inlineCode",{parentName:"p"},"<levels>")," are 5, 10, or 20."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Stream Names:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"<symbol>@depth<levels>")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"<symbol>@depth<levels>@100ms")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Update Speed:")," 1000ms or 100ms"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Payload:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "lastUpdateId": 160,  // Last update ID\n  "bids": [             // Bids to be updated\n    [\n      "0.0024",         // Price level to be updated\n      "10"              // Quantity\n    ]\n  ],\n  "asks": [             // Asks to be updated\n    [\n      "0.0026",         // Price level to be updated\n      "100"            // Quantity\n    ]\n  ]\n}\n')),(0,r.kt)("h2",{id:"diff-depth-stream"},"Diff. Depth Stream"),(0,r.kt)("p",null,"Order book price and quantity depth updates used to locally manage an order book."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Stream Name:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"<symbol>@depth OR <symbol>@depth@100ms")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Update Speed:")," 1000ms or 100ms"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Payload:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "e": "depthUpdate", // Event type\n  "E": 123456789,     // Event time\n  "s": "BNBBTC",      // Symbol\n  "U": 157,           // First update ID in event\n  "u": 160,           // Final update ID in event\n  "b": [              // Bids to be updated\n    [\n      "0.0024",       // Price level to be updated\n      "10"            // Quantity\n    ]\n  ],\n  "a": [              // Asks to be updated\n    [\n      "0.0026",       // Price level to be updated\n      "100"           // Quantity\n    ]\n  ]\n}\n')),(0,r.kt)("h2",{id:"how-to-manage-a-local-order-book-correctly"},"How to manage a local order book correctly"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open a stream to ",(0,r.kt)("strong",{parentName:"li"},"wss://api.blocpal.com:443/ws/XMRBTC@depth"),"."),(0,r.kt)("li",{parentName:"ol"},"Buffer the events you receive from the stream."),(0,r.kt)("li",{parentName:"ol"},"Get a depth snapshot from ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://api.blocpal.com/api/v1/depth?symbol=XMRBTC&limit=1000"},"https://api.blocpal.com/api/v1/depth?symbol=XMRBTC&limit=1000"))," ."),(0,r.kt)("li",{parentName:"ol"},"Drop any event where ",(0,r.kt)("inlineCode",{parentName:"li"},"u")," is <= ",(0,r.kt)("inlineCode",{parentName:"li"},"lastUpdateId")," in the snapshot."),(0,r.kt)("li",{parentName:"ol"},"The first processed event should have ",(0,r.kt)("inlineCode",{parentName:"li"},"U")," <= ",(0,r.kt)("inlineCode",{parentName:"li"},"lastUpdateId"),"+1 ",(0,r.kt)("strong",{parentName:"li"},"AND")," ",(0,r.kt)("inlineCode",{parentName:"li"},"u")," >= ",(0,r.kt)("inlineCode",{parentName:"li"},"lastUpdateId"),"+1."),(0,r.kt)("li",{parentName:"ol"},"While listening to the stream, each new event's ",(0,r.kt)("inlineCode",{parentName:"li"},"U")," should be equal to the previous event's ",(0,r.kt)("inlineCode",{parentName:"li"},"u"),"+1."),(0,r.kt)("li",{parentName:"ol"},"The data in each event is the ",(0,r.kt)("strong",{parentName:"li"},"absolute")," quantity for a price level."),(0,r.kt)("li",{parentName:"ol"},"If the quantity is 0, ",(0,r.kt)("strong",{parentName:"li"},"remove")," the price level."),(0,r.kt)("li",{parentName:"ol"},"Receiving an event that removes a price level that is not in your local order book can happen and is normal.")))}k.isMDXComponent=!0}}]);