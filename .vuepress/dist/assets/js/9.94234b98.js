(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{192:function(e,s,t){"use strict";t.r(s);var a=t(0),n=Object(a.a)({},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"jaffamod"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jaffamod","aria-hidden":"true"}},[e._v("#")]),e._v(" JaffaMod")]),e._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("JaffaMod")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("extends")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("EventEmitter")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("h2",{attrs:{id:"properties"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#properties","aria-hidden":"true"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("String")]),e._v(" "),t("code",[e._v("environment")]),e._v(" Which environment the bot is running at. Either "),t("code",[e._v("twitch")]),e._v(" or "),t("code",[e._v("discord")]),e._v(".")]),e._v(" "),t("li",[t("code",[e._v("{String}")]),e._v(" "),t("code",[e._v("options")]),e._v(" Runtime options.")]),e._v(" "),t("li",[t("code",[e._v("Raven")]),e._v(" "),t("code",[e._v("raven")]),e._v(" Sentry client.")]),e._v(" "),t("li",[t("code",[e._v("{function}")]),e._v(" "),t("code",[e._v("modules")]),e._v(" Modules object.")]),e._v(" "),t("li",[t("code",[e._v("{function}")]),e._v(" "),t("code",[e._v("commands")]),e._v(" Dynamic commands object.")]),e._v(" "),t("li",[t("code",[e._v("Axios")]),e._v(" "),t("code",[e._v("api")]),e._v(" API client.")]),e._v(" "),t("li",[t("code",[e._v("RedisCache")]),e._v(" "),t("code",[e._v("cache")]),e._v(" Cache client.")]),e._v(" "),t("li",[t("code",[e._v("Mongoose")]),e._v(" "),t("code",[e._v("db")]),e._v(" DB client.")]),e._v(" "),t("li",[t("code",[e._v("Store")]),e._v(" "),t("code",[e._v("store")]),e._v(" Versatile storage.\n"),t("ul",[t("li",[e._v("JaffMod supports hot-reloading which is the act of reloading the code while it's running. The store is basically just an Object which stays the same in between reloads so you can leverage that to store information.")])])])]),e._v(" "),t("h2",{attrs:{id:"methods"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[e._v("#")]),e._v(" Methods")]),e._v(" "),t("h3",{attrs:{id:"registercommand"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#registercommand","aria-hidden":"true"}},[e._v("#")]),e._v(" registerCommand")]),e._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("registerCommand")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" callback"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" signature "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("undefined")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("Function for registering dynamic commands and adding them to "),t("code",[e._v("this.commands")]),e._v(".")]),e._v(" "),t("p",[t("strong",[e._v("Returns: nothing.")])]),e._v(" "),t("ul",[t("li",[t("code",[e._v("String")]),e._v(" "),t("code",[e._v("name")]),e._v(" Command name.")]),e._v(" "),t("li",[t("code",[e._v("function")]),e._v(" "),t("code",[e._v("callback")]),e._v(" Command logic callback.")]),e._v(" "),t("li",[t("code",[e._v("String")]),e._v(" "),t("code",[e._v("signature")]),e._v(" Command signature.")])]),e._v(" "),t("p",[e._v("The logic callback will be called with the following parameters:\n"),t("code",[e._v("callback(message, reply, discord)")])]),e._v(" "),t("ul",[t("li",[t("code",[e._v("Object")]),e._v(" "),t("code",[e._v("message")]),e._v(" Message object.\n"),t("ul",[t("li",[t("code",[e._v("String")]),e._v(" "),t("code",[e._v("content")]),e._v(" User's message.")]),e._v(" "),t("li",[t("code",[e._v("[String]")]),e._v(" "),t("code",[e._v("arguments")]),e._v(" Message arguments, excluding the command name itself.")]),e._v(" "),t("li",[t("code",[e._v("{String}")]),e._v(" "),t("code",[e._v("userstate")]),e._v(" Twitch userstate. "),t("strong",[e._v("Only for Twitch.")])]),e._v(" "),t("li",[t("code",[e._v("DiscordJS.Message")]),e._v(" "),t("code",[e._v("...")]),e._v(" "),t("a",{attrs:{href:"https://discord.js.org/#/docs/main/stable/class/Message",target:"_blank",rel:"noopener noreferrer"}},[e._v("Discord message object"),t("OutboundLink")],1),e._v(" which will be merged with the message object. "),t("strong",[e._v("Only for Discord.")])])])]),e._v(" "),t("li",[t("code",[e._v("function")]),e._v(" "),t("code",[e._v("reply")]),e._v(" Reply callback - handy shorthand to send a message to the originating Twitch chat channel/Discord server channel.")]),e._v(" "),t("li",[t("code",[e._v("Boolean")]),e._v(" "),t("code",[e._v("discord")]),e._v(" Returns "),t("code",[e._v("true")]),e._v(" if platform is Discord.")])]),e._v(" "),t("p",[e._v("The signature is a Linux-flavour ("),t("code",[e._v("<required> [optional]")]),e._v(") argument string like this: "),t("code",[e._v("<example1> <example2> [example3]")]),e._v(' where example1 and example2 are required but example3 is optional.\nThe required/optional is processed at JaffaMod level before it reaches your callback.\nThe names inside the brackets are not linked to anything, the only significance is that JaffaMod will reply "Bad syntax. The command syntax is: " and then the signature string.')]),e._v(" "),t("hr"),e._v(" "),t("h3",{attrs:{id:"determinemoderator"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#determinemoderator","aria-hidden":"true"}},[e._v("#")]),e._v(" determineModerator")]),e._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("determineModerator")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("message"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" discord"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[t("strong",[e._v("Returns: "),t("code",[e._v("Boolean")])]),e._v(" Whether the user is a moderator.")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("Object")]),e._v(" "),t("code",[e._v("message")]),e._v(" A message object.")]),e._v(" "),t("li",[t("code",[e._v("Boolean")]),e._v(" "),t("code",[e._v("discord")]),e._v(" True if platform is Discord.")])]),e._v(" "),t("hr"),e._v(" "),t("h3",{attrs:{id:"determinesubscriber"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#determinesubscriber","aria-hidden":"true"}},[e._v("#")]),e._v(" determineSubscriber")]),e._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("determineSubscriber")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("message"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" discord"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[t("strong",[e._v("Returns: "),t("code",[e._v("Boolean")])]),e._v(" Whether the user is a subscriber.")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("Object")]),e._v(" "),t("code",[e._v("message")]),e._v(" A message object.")]),e._v(" "),t("li",[t("code",[e._v("Boolean")]),e._v(" "),t("code",[e._v("discord")]),e._v(" True if platform is Discord.")])]),e._v(" "),t("hr"),e._v(" "),t("h3",{attrs:{id:"resolvechannelid"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#resolvechannelid","aria-hidden":"true"}},[e._v("#")]),e._v(" resolveChannelID")]),e._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("resolveChannelID")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("message"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" discord"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Boolean")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[t("strong",[e._v("Returns: "),t("code",[e._v("String")])]),e._v(" Channel ID.")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("Object")]),e._v(" "),t("code",[e._v("message")]),e._v(" A message object.")]),e._v(" "),t("li",[t("code",[e._v("Boolean")]),e._v(" "),t("code",[e._v("discord")]),e._v(" True if platform is Discord.")])]),e._v(" "),t("h2",{attrs:{id:"events"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#events","aria-hidden":"true"}},[e._v("#")]),e._v(" Events")]),e._v(" "),t("h3",{attrs:{id:"raid"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#raid","aria-hidden":"true"}},[e._v("#")]),e._v(" "),t("code",[e._v("raid")])]),e._v(" "),t("ul",[t("li",[t("code",[e._v("String")]),e._v(" "),t("code",[e._v("channel")]),e._v(" Channel name.")]),e._v(" "),t("li",[t("code",[e._v("String")]),e._v(" "),t("code",[e._v("raider")]),e._v(" Raider name.")]),e._v(" "),t("li",[t("code",[e._v("String")]),e._v(" "),t("code",[e._v("viewers")]),e._v(" Raid viewers.")]),e._v(" "),t("li",[t("code",[e._v("Object")]),e._v(" "),t("code",[e._v("userstate")]),e._v(" Twitch userstate.")])]),e._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("emit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'raid'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" channel"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" raider"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" viewers"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" userstate "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h3",{attrs:{id:"subscription"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#subscription","aria-hidden":"true"}},[e._v("#")]),e._v(" "),t("code",[e._v("subscription")])]),e._v(" "),t("p",[e._v("Sent upon a subscription in a channel. Can be any of the following Twitch message types: "),t("code",[e._v("sub")]),e._v(", "),t("code",[e._v("resub")]),e._v(", "),t("code",[e._v("subgift")]),e._v(", "),t("code",[e._v("anonsubgift")]),e._v(", "),t("code",[e._v("giftpaidupgrade")]),e._v(".")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("String")]),e._v(" "),t("code",[e._v("channel")]),e._v(" Channel name.")]),e._v(" "),t("li",[t("code",[e._v("String")]),e._v(" "),t("code",[e._v("message")]),e._v(" Resubscription message.")]),e._v(" "),t("li",[t("code",[e._v("Object")]),e._v(" "),t("code",[e._v("userstate")]),e._v(" Twitch userstate.")])]),e._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("emit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'subscription'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("channel"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" message"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" userstate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h3",{attrs:{id:"cheer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cheer","aria-hidden":"true"}},[e._v("#")]),e._v(" "),t("code",[e._v("cheer")])]),e._v(" "),t("p",[e._v("Sent upon cheering in a channel. Can be anonymous.")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("String")]),e._v(" "),t("code",[e._v("channel")]),e._v(" Channel name.")]),e._v(" "),t("li",[t("code",[e._v("String")]),e._v(" "),t("code",[e._v("message")]),e._v(" Cheer message.")]),e._v(" "),t("li",[t("code",[e._v("Object")]),e._v(" "),t("code",[e._v("userstate")]),e._v(" Twitch userstate.")])]),e._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("emit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'cheer'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("channel"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" message"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" userstate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])])])},[],!1,null,null,null);s.default=n.exports}}]);