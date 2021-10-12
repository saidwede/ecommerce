(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5676],{3984:function(e,s,t){"use strict";var r=t(85893),a=t(6610),n=t(5991),c=t(65255),i=t(46070),l=t(77608),o=t(67294),d=t(30381),u=t.n(d);function m(e){var s=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=(0,l.Z)(e);if(s){var a=(0,l.Z)(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return(0,i.Z)(this,t)}}var h=function(e){(0,c.Z)(t,e);var s=m(t);function t(e){var r;return(0,a.Z)(this,t),(r=s.call(this,e)).state={seconds:null,minutes:null,hours:null,days:null},r}return(0,n.Z)(t,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){var s=e.props,t=s.time,r=s.format,a=u()(t,r),n=u()(),c=u()(a-n),i=c.format("D"),l=c.format("HH"),o=c.format("mm"),d=c.format("ss");e.setState({days:i,hours:l,minutes:o,seconds:d})}),1e3)}},{key:"componentWillUnmount",value:function(){this.interval&&clearInterval(this.interval)}},{key:"render",value:function(){var e=this.state,s=e.hours,t=e.minutes,a=e.seconds;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"ps-countdown",children:[(0,r.jsxs)("div",{className:"ps-countdown__block ps-countdown__hours",children:[(0,r.jsxs)("div",{className:"ps-countdown__number",children:[(0,r.jsx)("span",{className:"first",children:"string"===typeof s?s.slice(0,1):"0"}),(0,r.jsxs)("span",{className:"last",children:[" ","string"===typeof s?s.slice(-1):"0"]})]}),(0,r.jsx)("div",{className:"ps-countdown__ref",children:"Hours"})]}),(0,r.jsxs)("div",{className:"ps-countdown__block ps-countdown__minutes",children:[(0,r.jsxs)("div",{className:"ps-countdown__number",children:[(0,r.jsx)("span",{className:"first",children:"string"===typeof t?t.slice(0,1):"0"}),(0,r.jsxs)("span",{className:"last",children:[" ","string"===typeof t?t.slice(-1):"0"]})]}),(0,r.jsx)("div",{className:"ps-countdown__ref",children:"Mins"})]}),(0,r.jsxs)("div",{className:"ps-countdown__block ps-countdown__seconds",children:[(0,r.jsxs)("div",{className:"ps-countdown__number",children:[(0,r.jsx)("span",{className:"first",children:"string"===typeof a?a.slice(0,1):"0"}),(0,r.jsx)("span",{className:"last",children:"string"===typeof a?a.slice(-1):"0"})]}),(0,r.jsx)("div",{className:"ps-countdown__ref",children:"Secs"})]})]})})}}]),t}(o.Component);s.Z=h},96889:function(e,s,t){"use strict";var r=t(85893),a=(t(67294),t(41664));s.Z=function(e){var s=e.url,t=void 0===s?"/":s,n=e.type;return"white"==(void 0===n?"default":n)?(0,r.jsx)(a.default,{href:t,children:(0,r.jsx)("a",{className:"ps-logo",children:(0,r.jsx)("img",{src:"/static/img/logo-white.png",alt:"logo"})})}):(0,r.jsx)(a.default,{href:t,children:(0,r.jsx)("a",{className:"ps-logo",children:(0,r.jsx)("img",{src:"/static/img/logo.png",alt:"logo"})})})}},66576:function(e,s,t){"use strict";var r=t(85893),a=(t(67294),t(41664));s.Z=function(e){var s,t=e.source,n=e.classes,c=void 0===n?"mega-menu":n,i=e.onlyItems,l=void 0!==i&&i;return t&&(s=t.megaContent.map((function(e){return(0,r.jsxs)("div",{className:"mega-menu__column",children:[(0,r.jsx)("h4",{className:"mega-menu__heading",children:e.heading}),(0,r.jsx)("ul",{className:"mega-menu__list menu--single",children:e.megaItems.map((function(e){return(0,r.jsx)("li",{children:(0,r.jsx)(a.default,{href:e.url,as:e.url,children:(0,r.jsx)("a",{children:e.text})})},e.text)}))})]},e.heading)}))),l?(0,r.jsx)("div",{className:c,children:(0,r.jsx)("div",{className:"mega-menu__wrapper",children:s})}):(0,r.jsxs)("li",{className:"menu-item-has-children has-mega-menu",children:[(0,r.jsx)(a.default,{href:""!==t.url?t.url:"/",children:(0,r.jsxs)("a",{children:[t.icon&&(0,r.jsx)("i",{className:t.icon}),t.text]})}),(0,r.jsx)("div",{className:c,children:(0,r.jsx)("div",{className:"mega-menu__wrapper",children:s})})]})}},24899:function(e,s,t){"use strict";t.d(s,{Z:function(){return d}});var r=t(85893),a=(t(67294),t(41664)),n=function e(s){var t=s.source;return(0,r.jsxs)("li",{className:"menu-item-has-children dropdown",children:[(0,r.jsx)(a.default,{href:t.url,children:(0,r.jsx)("a",{children:t.text})}),t.subMenu&&(0,r.jsx)("ul",{className:t.subClass,children:t.subMenu.map((function(s,t){return(0,r.jsx)(e,{source:s},t)}))})]})},c=t(66576),i=t(76916),l=function(e){var s=e.source;return(0,r.jsx)("div",{className:"ps-block__item",children:(0,r.jsxs)("div",{className:"ps-block__wrapper",children:[(0,r.jsxs)("div",{className:"ps-block__thumbnail",children:[(0,r.jsx)("img",{src:s.image,alt:s.text}),(0,r.jsx)(a.default,{href:s.url,children:(0,r.jsx)("a",{className:"ps-block__overlay"})})]}),(0,r.jsx)(a.default,{href:s.url,children:(0,r.jsx)("a",{className:"ps-block__text",children:s.text})})]})})},o=function(){var e=i.LL.map((function(e){return(0,r.jsx)(l,{source:e},e.id)}));return(0,r.jsx)("div",{className:"ps-block--menu-demos",children:e})},d=function(e){var s,t=e.source,i=e.className;return s=t?t.map((function(e){return e.subMenu?(0,r.jsx)(n,{source:e},e.text):e.megaContent?(0,r.jsx)(c.Z,{source:e},e.text):e.external?"homepages"===e.module?(0,r.jsxs)("li",{className:"menu-item-has-children has-mega-menu",children:[(0,r.jsx)(a.default,{href:e.url,children:(0,r.jsx)("a",{children:e.text})}),(0,r.jsx)("div",{className:"mega-menu",children:(0,r.jsx)(o,{})})]},e.module):void 0:(0,r.jsx)("li",{children:(0,r.jsx)(a.default,{href:e.url,children:(0,r.jsxs)("a",{children:[e.icon&&(0,r.jsx)("i",{className:e.icon}),e.text]})})},e.text)})):(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#",onClick:function(e){return e.preventDefault()},children:"No menu item."})}),(0,r.jsx)("ul",{className:i,children:s})}},77753:function(e,s,t){"use strict";var r=t(85893),a=(t(67294),t(41664)),n=t(20872),c=t(36411),i=t(93164),l=t(77312);s.Z=function(e){var s=e.product,t=(0,c.Z)(),o=t.price,d=t.onSale;return(0,r.jsxs)("div",{className:"ps-product ps-product--grid",children:[(0,r.jsxs)("div",{className:"ps-product__thumbnail",children:[(0,r.jsx)(a.default,{href:"/product/[id]",as:"/product/".concat(s.id),children:(0,r.jsx)("a",{className:"ps-product__overlay"})}),(0,r.jsx)(l.Z,{product:s}),(0,r.jsx)(n.Z,{product:s}),d(s)]}),(0,r.jsxs)("div",{className:"ps-product__content",children:[(0,r.jsx)("h4",{className:"ps-product__title",children:(0,r.jsx)(a.default,{href:"/product/[id]",as:"/product/".concat(s.id),children:(0,r.jsx)("a",{children:s.name})})}),o(s),(0,r.jsx)(i.Z,{}),(0,r.jsxs)("div",{className:"ps-product__number-available",children:[(0,r.jsxs)("span",{children:["No of pcs ",(0,r.jsx)("br",{})," available"]}),(0,r.jsx)("strong",{children:"24"})]})]})]})}},75676:function(e,s,t){"use strict";t.d(s,{Z:function(){return v}});var r=t(85893),a=t(67294),n=t(9008),c=t(8569),i=t(11919),l=t(41593),o=t(63225),d=t(4919),u=t(15696),m=t(58124),h=function(){return(0,r.jsxs)("footer",{className:"ps-footer ps-footer--1",children:[(0,r.jsx)(i.Z,{}),(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)("div",{className:"ps-footer__middle",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-12 col-lg-7",children:(0,r.jsxs)("div",{className:"row ps-footer__information",children:[(0,r.jsx)("div",{className:"col-12 col-lg-4 col-md-4 col-sm-12",children:(0,r.jsx)(l.Z,{})}),(0,r.jsx)("div",{className:"col-12 col-lg-8 col-md-8 col-sm-12",children:(0,r.jsx)(o.Z,{})})]})}),(0,r.jsx)("div",{className:"col-12 col-lg-5",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-6 col-md-4",children:(0,r.jsx)(d.Z,{source:m.GD})}),(0,r.jsx)("div",{className:"col-6 col-md-4",children:(0,r.jsx)(d.Z,{source:m.JT})}),(0,r.jsx)("div",{className:"col-6 col-md-4",children:(0,r.jsx)(d.Z,{source:m.h})})]})})]})}),(0,r.jsx)(u.Z,{})]})]})},x=t(96889),p=t(7864),f=t(13011),j=t(62972),g=function(){var e,s=(0,a.useState)(!1),t=s[0],n=s[1];return(0,a.useEffect)((function(){window.addEventListener("scroll",p.tx)}),[]),t&&(e=(0,r.jsx)("div",{className:"header__searchbox",children:(0,r.jsx)(j.Z,{})})),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f.Z,{classes:"mobile-only"}),(0,r.jsxs)("header",{className:"header header--mobile","data-sticky":"true",id:"header-sticky-mobile",children:[(0,r.jsx)("div",{className:"header__left",children:(0,r.jsx)(x.Z,{})}),(0,r.jsx)("div",{className:"header__right",children:(0,r.jsx)("a",{className:"header__search",href:"#",onClick:function(e){return function(e){e.preventDefault(),n(!t)}(e)},children:(0,r.jsx)("i",{className:"icon-magnifier"})})}),e]})]})},v=function(e){var s,t=e.children,a=e.title,i=void 0===a?"Just a awesome website":a,l=e.header,o=void 0===l?(0,r.jsx)(c.Z,{}):l,d=e.footer,u=void 0===d?(0,r.jsx)(h,{}):d;return s=void 0!==i?"MyMedi | "+i:"MyMedi | React Ecomerce template with RESTFul API",(0,r.jsxs)("div",{className:"ps-root",children:[(0,r.jsx)(n.default,{children:(0,r.jsx)("title",{children:s})}),o,(0,r.jsx)(g,{}),t,u]})}},41593:function(e,s,t){"use strict";var r=t(85893),a=(t(67294),t(286),t(96889)),n=t(41664);s.Z=function(){return(0,r.jsxs)("div",{className:"ps-footer--address",children:[(0,r.jsx)(a.Z,{}),(0,r.jsx)("div",{className:"ps-footer__title",children:"Our store"}),(0,r.jsxs)("p",{children:["1487 Rocky Horse Carrefour",(0,r.jsx)("br",{}),"Arlington, TX 16819"]}),(0,r.jsx)("p",{children:(0,r.jsx)(n.default,{href:"/",children:(0,r.jsx)("a",{target:"_blank",children:"Show on map"})})}),(0,r.jsxs)("ul",{className:"ps-social",children:[(0,r.jsx)("li",{children:(0,r.jsxs)("a",{className:"ps-social__link facebook",href:"#",children:[(0,r.jsx)("i",{className:"fa fa-facebook",children:" "}),(0,r.jsx)("span",{className:"ps-tooltip",children:"Facebook"})]})}),(0,r.jsx)("li",{children:(0,r.jsxs)("a",{className:"ps-social__link instagram",href:"#",children:[(0,r.jsx)("i",{className:"fa fa-instagram"}),(0,r.jsx)("span",{className:"ps-tooltip",children:"Instagram"})]})}),(0,r.jsx)("li",{children:(0,r.jsxs)("a",{className:"ps-social__link youtube",href:"#",children:[(0,r.jsx)("i",{className:"fa fa-youtube-play"}),(0,r.jsx)("span",{className:"ps-tooltip",children:"Youtube"})]})}),(0,r.jsx)("li",{children:(0,r.jsxs)("a",{className:"ps-social__link pinterest",href:"#",children:[(0,r.jsx)("i",{className:"fa fa-pinterest-p"}),(0,r.jsx)("span",{className:"ps-tooltip",children:"Pinterest"})]})}),(0,r.jsx)("li",{children:(0,r.jsxs)("a",{className:"ps-social__link linkedin",href:"#",children:[(0,r.jsx)("i",{className:"fa fa-linkedin"}),(0,r.jsx)("span",{className:"ps-tooltip",children:"Linkedin"})]})})]})]})}},15696:function(e,s,t){"use strict";t.d(s,{Z:function(){return n}});var r=t(85893),a=(t(67294),function(){return(0,r.jsx)("p",{children:"Copyright \xa9 2021 Mymedi. All Rights Reserved"})}),n=function(){return(0,r.jsx)("div",{className:"ps-footer--bottom",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-12 col-md-6",children:(0,r.jsx)(a,{})}),(0,r.jsxs)("div",{className:"col-12 col-md-6 text-right",children:[(0,r.jsx)("img",{src:"/static/img/payment.png",alt:""}),(0,r.jsx)("img",{className:"payment-light",src:"/static/img/payment-light.png",alt:""})]})]})})}},63225:function(e,s,t){"use strict";var r=t(85893);t(67294);s.Z=function(){return(0,r.jsxs)("div",{className:"ps-footer--contact",children:[(0,r.jsx)("h5",{className:"ps-footer__title",children:"Need help"}),(0,r.jsxs)("div",{className:"ps-footer__fax",children:[(0,r.jsx)("i",{className:"icon-telephone"}),"0020 500 \u2013 MYMEDI \u2013 000"]}),(0,r.jsxs)("p",{className:"ps-footer__work",children:["Monday \u2013 Friday: 9:00-20:00",(0,r.jsx)("br",{}),"Saturday: 11:00 \u2013 15:00"]}),(0,r.jsx)("hr",{}),(0,r.jsx)("p",{children:(0,r.jsxs)("a",{className:"ps-footer__email",href:"mailto:contact@example.com",children:[" ",(0,r.jsx)("i",{className:"icon-envelope"}),"contact@example.com"," "]})})]})}},11919:function(e,s,t){"use strict";var r=t(85893);t(67294);s.Z=function(){return(0,r.jsx)("div",{className:"ps-footer--top ps-footer__top",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"row m-0",children:[(0,r.jsx)("div",{className:"col-12 col-sm-4 p-0",children:(0,r.jsx)("p",{className:"text-center",children:(0,r.jsxs)("a",{className:"ps-footer__link",href:"#",children:[(0,r.jsx)("i",{className:"icon-wallet"}),"100% Money back"]})})}),(0,r.jsx)("div",{className:"col-12 col-sm-4 p-0",children:(0,r.jsx)("p",{className:"text-center",children:(0,r.jsxs)("a",{className:"ps-footer__link",href:"#",children:[(0,r.jsx)("i",{className:"icon-bag2"}),"Non-contact shipping"]})})}),(0,r.jsx)("div",{className:"col-12 col-sm-4 p-0",children:(0,r.jsx)("p",{className:"text-center",children:(0,r.jsxs)("a",{className:"ps-footer__link",href:"#",children:[(0,r.jsx)("i",{className:"icon-truck"}),"Free delivery for order over $200"]})})})]})})})}},8569:function(e,s,t){"use strict";var r=t(85893),a=t(67294),n=t(62972),c=t(5857),i=t(13011),l=t(83945),o=t(96889),d=t(37944);s.Z=function(e){var s=e.classes,t=void 0===s?"":s,u=(0,a.useState)(!0),m=u[0],h=u[1];function x(){var e=window.pageXOffset||document.documentElement.scrollTop||document.body.scrollTop||0,s=document.getElementById("header-sticky");null!==s&&(e>=300?(s.classList.add("header--sticky"),h(!1)):(s.classList.remove("header--sticky"),h(!0)))}return(0,a.useEffect)((function(){window.addEventListener("scroll",x)}),[]),(0,r.jsxs)("header",{className:"header--desktop header--one ".concat(t),id:"header-sticky",children:[(0,r.jsx)(i.Z,{}),(0,r.jsx)("div",{className:"header__top",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsxs)("div",{className:"header__left",children:[(0,r.jsx)(o.Z,{}),(0,r.jsx)("a",{href:"#",className:"header__top-toggle",onClick:function(e){return function(e){e.preventDefault(),h(!m)}(e)},children:(0,r.jsx)("i",{className:"fa fa-bars"})})]}),(0,r.jsx)("div",{className:"header__center",children:(0,r.jsx)("div",{className:"ps-header__search",children:(0,r.jsx)(n.Z,{})})}),(0,r.jsxs)("div",{className:"header__right",children:[(0,r.jsx)(d.Z,{}),(0,r.jsx)(c.Z,{})]})]})}),(0,r.jsx)("div",{className:"header__bottom ".concat(m?"active":""),children:(0,r.jsx)(l.Z,{})})]})}},5857:function(e,s,t){"use strict";var r=t(85893),a=t(67294),n=t(98374),c=t(37703),i=t(41664),l=t(48807);s.Z=(0,c.$j)((function(e){return e}))((function(e){var s,t=e.ecomerce,o=e.search,d=void 0!==o&&o,u=(0,c.I0)(),m=(0,a.useState)(0),h=m[0],x=m[1],p=(0,a.useState)(0),f=p[0],j=p[1];return(0,a.useEffect)((function(){t.cartItems&&x((0,l.VK)(t.cartItems)),t.wishlistItems&&j((0,l.wk)(t.wishlistItems))}),[t]),d&&(s=(0,r.jsx)("li",{children:(0,r.jsx)("a",{className:"header__action",href:"#",children:(0,r.jsx)("i",{className:"icon-magnifier"})})})),(0,r.jsxs)("ul",{className:"header__actions",children:[s,(0,r.jsx)("li",{children:(0,r.jsx)(i.default,{href:"/my-account",children:(0,r.jsx)("a",{className:"header__action",children:(0,r.jsx)("i",{className:"icon-user"})})})}),(0,r.jsx)("li",{children:(0,r.jsx)(i.default,{href:"/shop/wishlist",children:(0,r.jsxs)("a",{className:"header__action",children:[(0,r.jsx)("i",{className:"fa fa-heart-o"}),(0,r.jsx)("span",{className:"header__action-badge",children:f||0})]})})}),(0,r.jsx)("li",{children:(0,r.jsxs)("a",{className:"header__action",href:"#",id:"cart-mini",onClick:function(e){return function(e){e.preventDefault(),u((0,n.wb)(!0))}(e)},children:[(0,r.jsx)("i",{className:"icon-cart-empty"}),(0,r.jsx)("span",{className:"header__action-badge",children:h||0})]})})]})}))},13766:function(e,s,t){"use strict";t.d(s,{Z:function(){return o}});var r=t(85893),a=(t(67294),t(66576)),n=t(76916),c=t(41664),i=function(e){var s=e.image;return(0,r.jsx)("div",{className:"ps-branch__item",children:(0,r.jsx)(c.default,{href:"/shop",children:(0,r.jsx)("img",{src:s.image,alt:s.image})})})},l=function(){return(0,r.jsxs)("div",{className:"ps-branch",children:[(0,r.jsx)("h3",{className:"ps-branch__title",children:"Popular Brands"}),(0,r.jsx)("div",{className:"ps-branch__box",children:[{image:"/static/img/branch/brand-1.jpg"},{image:"/static/img/branch/brand-2.jpg"},{image:"/static/img/branch/brand-3.jpg"},{image:"/static/img/branch/brand-4.jpg"},{image:"/static/img/branch/brand-5.jpg"},{image:"/static/img/branch/brand-6.jpg"},{image:"/static/img/branch/brand-7.jpg"},{image:"/static/img/branch/brand-8.jpg"},{image:"/static/img/branch/brand-9.jpg"},{image:"/static/img/branch/brand-10.jpg"}].map((function(e){return(0,r.jsx)(i,{image:e},e.image)}))})]})},o=function(){return(0,r.jsxs)("div",{className:"header__categories ps-dropdown--fullscreen",children:[(0,r.jsxs)("button",{className:"header__categories-toggle",children:[(0,r.jsx)("i",{className:"fa fa-bars"}),(0,r.jsx)("span",{children:"Products"})]}),(0,r.jsx)("div",{className:"ps-dropdown__content",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)(a.Z,{source:n.TH,onlyItems:!0,classes:"menu--mega with-6-columns"}),(0,r.jsx)(l,{})]})})]})}},13011:function(e,s,t){"use strict";var r=t(85893);t(67294);s.Z=function(e){var s=e.classes;return(0,r.jsxs)("div",{className:"ps-noti header__notice ".concat(s),children:[(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("p",{className:"m-0",children:["Due to the ",(0,r.jsx)("strong",{children:"COVID 19 "}),"epidemic, orders may be processed with a slight delay"]})}),(0,r.jsx)("a",{className:"ps-noti__close",children:(0,r.jsx)("i",{className:"icon-cross"})})]})}},55451:function(e,s,t){"use strict";t.d(s,{Z:function(){return m}});var r=t(85893),a=t(67294),n=t(41664),c=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"ps-promo",children:(0,r.jsxs)("div",{className:"ps-promo__item",children:[(0,r.jsx)("img",{className:"ps-promo__banner",src:"/static/img/promotion/bg-banner4.jpg",alt:"alt"}),(0,r.jsxs)("div",{className:"ps-promo__content",children:[(0,r.jsx)("span",{className:"ps-promo__badge",children:"New"}),(0,r.jsxs)("h4",{className:"mb-20 ps-promo__name",children:["Get rid of bacteria ",(0,r.jsx)("br",{}),"in your home"]}),(0,r.jsx)(n.default,{href:"/shop",children:(0,r.jsx)("a",{className:"ps-promo__btn",children:"More"})})]})]})}),(0,r.jsx)("div",{className:"ps-promo",children:(0,r.jsxs)("div",{className:"ps-promo__item",children:[(0,r.jsx)("img",{className:"ps-promo__banner",src:"/static/img/promotion/bg-banner5.jpg",alt:"alt"}),(0,r.jsxs)("div",{className:"ps-promo__content",children:[(0,r.jsxs)("h4",{className:"ps-promo__name",children:["Candid ",(0,r.jsx)("br",{}),"Whitening Kit"]}),(0,r.jsx)("div",{className:"ps-promo__sale",children:"-10%"}),(0,r.jsx)(n.default,{href:"/shop",children:(0,r.jsx)("a",{className:"ps-promo__btn",children:"More"})})]})]})})]})},i=t(24899),l=JSON.parse('{"B":[{"text":"Diagnosis","url":"/shop"},{"text":"Accessories Tools","url":"/shop"},{"text":"Bandages","url":"/shop"},{"text":"Biopsy tools","url":"/shop"},{"text":"Blades","url":"/shop"},{"text":"Blood pressure","url":"/shop"},{"text":"Capsules","url":"/shop"},{"text":"Dental","url":"/shop"},{"text":"Devices","url":"/shop"},{"text":"Diagnostic tests","url":"/shop"},{"text":"Disposable products","url":"/shop"},{"text":"Education","url":"/shop"},{"text":"Endoscopes","url":"/shop"},{"text":"Equipment","url":"/shop"},{"text":"Show all","url":"/shop"}]}'),o=t(3984),d=t(12639),u=t(77753),m=function(){var e=(0,d.Z)(),s=e.product,t=e.getProductById;return(0,a.useEffect)((function(){t(2)}),[]),(0,r.jsxs)("div",{className:"header__supplies ps-dropdown--fullscreen",children:[(0,r.jsx)("button",{className:"header__categories-toggle",children:(0,r.jsx)("span",{children:"Home medical supplies "})}),(0,r.jsx)("div",{className:"ps-dropdown__content",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"mega-menu__row",children:[(0,r.jsx)("div",{className:"mega-menu__column col-12 col-sm-3",children:(0,r.jsx)(i.Z,{source:l.B,className:"menu--single bold"})}),(0,r.jsx)("div",{className:"mega-menu__column col-12 col-sm-5 col-md-6",children:(0,r.jsx)(c,{})}),(0,r.jsx)("div",{className:"mega-menu__column col-12 col-sm-4 col-md-3",children:(0,r.jsxs)("div",{className:"mega-menu__product",children:[(0,r.jsx)(o.Z,{time:"12 31 2021, 6:00 am",format:"MM DD YYYY, h:mm a"}),s&&(0,r.jsx)(u.Z,{product:s})]})})]})})})]})}},83945:function(e,s,t){"use strict";var r=t(85893),a=(t(67294),t(94286)),n=t(13766),c=t(55451),i=t(24899),l=t(76916);s.Z=function(){return(0,r.jsx)("nav",{className:"navigation--primary",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsxs)("div",{className:"navigation__left",children:[(0,r.jsx)(n.Z,{}),(0,r.jsx)(c.Z,{}),(0,r.jsx)("div",{className:"navigation__menu",children:(0,r.jsx)(i.Z,{source:l.PA,className:"menu menu--desktop"})})]}),(0,r.jsx)("div",{className:"navigation__right",children:(0,r.jsx)(a.Z,{})})]})})}},4919:function(e,s,t){"use strict";var r=t(85893),a=(t(67294),t(41664));s.Z=function(e){var s=e.source,t=e.classes,n=void 0===t?"":t,c=s.items.map((function(e,s){return(0,r.jsx)("li",{children:(0,r.jsx)(a.default,{href:"/",children:(0,r.jsx)("a",{children:e.text})})},s)}));return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"ps-footer--block widget--footer widget--footer-links ".concat(n),children:[(0,r.jsx)("h5",{className:"ps-block__title",children:s.title}),(0,r.jsx)("ul",{className:"ps-block__list",children:c})]})})}},12639:function(e,s,t){"use strict";t.d(s,{Z:function(){return x}});var r=t(87757),a=t.n(r),n=t(92137),c=t(67294),i=t(6610),l=t(5991),o=t(53378),d=new(function(){function e(s){(0,i.Z)(this,e),this.callback=s}return(0,l.Z)(e,[{key:"getProductsByCollectionSlug",value:function(){var e=(0,n.Z)(a().mark((function e(s){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.ZP.get("".concat(o.EN,"/collections?slug_in=").concat(s)).then((function(e){return e.data&&e.data.length>0?(console.log(JSON.stringify(e)),{items:e.data[0].products}):null})).catch((function(e){return console.log(JSON.stringify(e)),null}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}()}]),e}()),u=t(21442);function m(e){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(a().mark((function e(s){var t,r,n,c=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=c.length>1&&void 0!==c[1]?c[1]:12,!s){e.next=7;break}return e.next=4,d.getProductsByCollectionSlug(s);case 4:r=e.sent,e.next=11;break;case 7:return n={_limit:t},e.next=10,u.ZP.getProducts(n);case 10:r=e.sent;case 11:if(!r){e.next=15;break}return e.abrupt("return",r);case 15:return e.abrupt("return",null);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(){var e=this,s=(0,c.useState)(!1),t=s[0],r=s[1],i=(0,c.useState)(null),l=i[0],o=i[1],d=(0,c.useState)(null),h=d[0],x=d[1],p=(0,c.useState)(null),f=p[0],j=p[1];return{loading:t,product:h,productItems:l,category:f,setLoading:function(e){r(e)},getProductsByCollection:function(){var s=(0,n.Z)(a().mark((function s(t){var n,c,i=arguments;return a().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:8,r(!0),s.next=4,m(t,n);case 4:(c=s.sent)&&(o(c.items),setTimeout(function(){r(!1)}.bind(e),250));case 6:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}(),getProducts:function(){var s=(0,n.Z)(a().mark((function s(t){var n,c;return a().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(r(!0),!t){s.next=7;break}return s.next=4,u.ZP.getProducts(t);case 4:n=s.sent,s.next=11;break;case 7:return c={_limit:12},s.next=10,u.ZP.getProducts(c);case 10:n=s.sent;case 11:n&&(o(n),setTimeout(function(){r(!1)}.bind(e),250));case 12:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}(),getProductById:function(){var s=(0,n.Z)(a().mark((function s(t){var n;return a().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return r(!0),s.next=3,u.ZP.getProductsById(t);case 3:(n=s.sent)&&(x(n),setTimeout(function(){r(!1)}.bind(e),250));case 5:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}(),getCategoryBySlug:function(){var s=(0,n.Z)(a().mark((function s(t){var n;return a().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return r(!0),s.next=3,u.ZP.getPrductCategoryBySlug(t);case 3:(n=s.sent)&&(j(n),setTimeout(function(){r(!1)}.bind(e),250));case 5:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}()}}},7864:function(e,s,t){"use strict";t.d(s,{_A:function(){return r},tx:function(){return a},Zn:function(){return n}});var r=function(){var e=window.pageXOffset||document.documentElement.scrollTop||document.body.scrollTop||0,s=document.getElementById("header-sticky");null!==s&&(e>=300?s.classList.add("header--sticky"):s.classList.remove("header--sticky"))},a=function(){var e=window.pageXOffset||document.documentElement.scrollTop||document.body.scrollTop||0,s=document.getElementById("header-sticky-mobile");null!==s&&(e>=300?s.classList.add("header--sticky"):s.classList.remove("header--sticky"))},n=function(e){for(var s=[],t=0;t<e;t++)s.push(t);return s}},58124:function(e){"use strict";e.exports=JSON.parse('{"GD":{"title":"Information","items":[{"text":"About us","url":"about-us.html"},{"text":"Delivery information","url":"#"},{"text":"Privacy Policy","url":"#"},{"text":"Sales","url":"#"},{"text":"Terms & Conditions","url":"#"}]},"JT":{"title":"Account","items":[{"text":"My account","url":"#"},{"text":"My orders","url":"#"},{"text":"Returns","url":"#"},{"text":"Shipping","url":"#"},{"text":"Wishlist","url":"wishlist.html"}]},"h":{"title":"Store","items":[{"text":"Affiliate","url":"#"},{"text":"Bestsellers","url":"#"},{"text":"Discount","url":"#"},{"text":"Latest products","url":"#"},{"text":"Sale","url":"#"}]},"EG":{"title":"Wound Care","items":[{"text":"Bandages","url":"category-grid.html"},{"text":"Gypsum foundations","url":"category-grid.html"},{"text":"Patches and tapes","url":"category-grid.html"},{"text":"Stomatology","url":"category-grid.html"},{"text":"Surgical sutures","url":"category-grid.html"},{"text":"Uniforms","url":"category-grid.html"},{"text":"Wound healing","url":"category-grid.html"}]},"dQ":{"title":"Higiene","items":[{"text":"Disposable products","url":"category-grid.html"},{"text":"Face masks","url":"category-grid.html"},{"text":"Gloves","url":"category-grid.html"},{"text":"Protective covers","url":"category-grid.html"},{"text":"Sterilization","url":"category-grid.html"},{"text":"Surgical foils","url":"category-grid.html"},{"text":"Uniforms","url":"category-grid.html"}]},"d4":{"title":"Laboratory","items":[{"text":"Devices","url":"category-grid.html"},{"text":"Diagnostic tests","url":"category-grid.html"},{"text":"Disinfectants","url":"category-grid.html"},{"text":"Dyes","url":"category-grid.html"},{"text":"Pipettes","url":"category-grid.html"},{"text":"Test-tubes","url":"category-grid.html"},{"text":"Tubes","url":"category-grid.html"}]},"rj":{"title":"Tools","items":[{"text":"Accessories Tools","url":"category-grid.html"},{"text":"Blood pressure","url":"category-grid.html"},{"text":"Capsules","url":"category-grid.html"},{"text":"Dental","url":"category-grid.html"},{"text":"Micrscope","url":"category-grid.html"},{"text":"Pressure","url":"category-grid.html"},{"text":"Sugar level","url":"category-grid.html"}]},"xx":{"title":"Diagnosis","items":[{"text":"Biopsy tools","url":"category-grid.html"},{"text":"Endoscopes","url":"category-grid.html"},{"text":"Monitoring","url":"category-grid.html"},{"text":"Otoscopes","url":"category-grid.html"},{"text":"Oxygen concentrators","url":"category-grid.html"},{"text":"Tables and assistants","url":"category-grid.html"},{"text":"Thermometer","url":"category-grid.html"}]},"vp":{"title":"Equipment","items":[{"text":"Blades","url":"category-grid.html"},{"text":"Education","url":"category-grid.html"},{"text":"Germicidal lamps","url":"category-grid.html"},{"text":"Heart Health","url":"category-grid.html"},{"text":"Infusion stands","url":"category-grid.html"},{"text":"Lighting","url":"category-grid.html"},{"text":"Machines","url":"category-grid.html"}]}}')}}]);