import{_ as t,a as n,b as e,c as a,i as c,s as r,d as i,e as o,S as s,f as u,t as l,g as f,h,j as d,k as v,l as m,m as p,n as g,o as w,p as $,q as E,r as y,u as _,v as D,w as R,x as T,y as I,z as b,A as k,B as S,C as L,D as M,E as x,F as N,G as A,H,I as B,J as O,K as V,L as U,M as P,N as C,O as F,P as j,Q as Y}from"./client.2b19fd18.js";import{c as W,_ as z,h as G,a as q,L as J}from"./createOctokit.f3301eb6.js";function K(t){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var c,r=n(t);if(a){var i=n(this).constructor;c=Reflect.construct(r,arguments,i)}else c=r.apply(this,arguments);return e(this,c)}}function Q(t,n,e){var a=t.slice();return a[5]=n[e],a}function X(t){var n,e,a,c=k.i18n.allSystemsOperational+"";return{c:function(){n=u("article"),e=l("✅   "),a=l(c),this.h()},l:function(t){n=f(t,"ARTICLE",{class:!0});var r=h(n);e=d(r,"✅   "),a=d(r,c),r.forEach(v),this.h()},h:function(){m(n,"class","up")},m:function(t,c){p(t,n,c),g(n,e),g(n,a)},p:w,d:function(t){t&&v(n)}}}function Z(t){for(var n,e,a,c,r=k.i18n.activeIncidents+"",i=t[1],o=[],s=0;s<i.length;s+=1)o[s]=nt(Q(t,i,s));return{c:function(){n=u("h2"),e=l(r),a=$();for(var t=0;t<o.length;t+=1)o[t].c();c=L()},l:function(t){n=f(t,"H2",{});var i=h(n);e=d(i,r),i.forEach(v),a=E(t);for(var s=0;s<o.length;s+=1)o[s].l(t);c=L()},m:function(t,r){p(t,n,r),g(n,e),p(t,a,r);for(var i=0;i<o.length;i+=1)o[i].m(t,r);p(t,c,r)},p:function(t,n){if(2&n){var e;for(i=t[1],e=0;e<i.length;e+=1){var a=Q(t,i,e);o[e]?o[e].p(a,n):(o[e]=nt(a),o[e].c(),o[e].m(c.parentNode,c))}for(;e<o.length;e+=1)o[e].d(1);o.length=i.length}},i:w,o:w,d:function(t){t&&v(n),t&&v(a),M(o,t),t&&v(c)}}}function tt(t){var n,e;return n=new J({}),{c:function(){x(n.$$.fragment)},l:function(t){N(n.$$.fragment,t)},m:function(t,a){A(n,t,a),e=!0},p:w,i:function(t){e||(T(n.$$.fragment,t),e=!0)},o:function(t){D(n.$$.fragment,t),e=!1},d:function(t){H(n,t)}}}function nt(t){var n,e,a,c,r,i,o,s,w,y,_,D,R,T,I,b=t[5].title.replace("🛑","").replace("⚠️","").trim()+"",L=k.i18n.activeIncidentSummary.replace(/\$DATE/g,new Date(t[5].created_at).toLocaleString()).replace(/\$POSTS/g,t[5].comments)+"",M=k.i18n.incidentReport.replace(/\$NUMBER/g,t[5].number)+"";return{c:function(){n=u("article"),e=u("div"),a=u("div"),c=u("h4"),r=l(b),i=$(),o=u("div"),s=l(L),w=$(),y=u("div"),_=u("a"),D=l(M),T=$(),this.h()},l:function(t){n=f(t,"ARTICLE",{class:!0});var u=h(n);e=f(u,"DIV",{class:!0});var l=h(e);a=f(l,"DIV",{});var m=h(a);c=f(m,"H4",{});var p=h(c);r=d(p,b),p.forEach(v),i=E(m),o=f(m,"DIV",{});var g=h(o);s=d(g,L),g.forEach(v),m.forEach(v),w=E(l),y=f(l,"DIV",{class:!0});var $=h(y);_=f($,"A",{href:!0});var R=h(_);D=d(R,M),R.forEach(v),$.forEach(v),l.forEach(v),T=E(u),u.forEach(v),this.h()},h:function(){m(_,"href",R="".concat(k.path,"/incident/").concat(t[5].number)),m(y,"class","f r"),m(e,"class","f"),m(n,"class",I="down down-active link "+(t[5].title.includes("degraded")?"degraded":""))},m:function(t,u){p(t,n,u),g(n,e),g(e,a),g(a,c),g(c,r),g(a,i),g(a,o),g(o,s),g(e,w),g(e,y),g(y,_),g(_,D),g(n,T)},p:function(t,e){2&e&&b!==(b=t[5].title.replace("🛑","").replace("⚠️","").trim()+"")&&S(r,b),2&e&&L!==(L=k.i18n.activeIncidentSummary.replace(/\$DATE/g,new Date(t[5].created_at).toLocaleString()).replace(/\$POSTS/g,t[5].comments)+"")&&S(s,L),2&e&&M!==(M=k.i18n.incidentReport.replace(/\$NUMBER/g,t[5].number)+"")&&S(D,M),2&e&&R!==(R="".concat(k.path,"/incident/").concat(t[5].number))&&m(_,"href",R),2&e&&I!==(I="down down-active link "+(t[5].title.includes("degraded")?"degraded":""))&&m(n,"class",I)},d:function(t){t&&v(n)}}}function et(t){var n,e,a,c,r,i=!t[1].length&&!t[0]&&X(),o=[tt,Z],s=[];function l(t,n){return t[0]?0:t[1].length?1:-1}return~(a=l(t))&&(c=s[a]=o[a](t)),{c:function(){i&&i.c(),n=$(),e=u("section"),c&&c.c(),this.h()},l:function(t){i&&i.l(t),n=E(t),e=f(t,"SECTION",{class:!0});var a=h(e);c&&c.l(a),a.forEach(v),this.h()},h:function(){m(e,"class","svelte-8lnl4f")},m:function(t,c){i&&i.m(t,c),p(t,n,c),p(t,e,c),~a&&s[a].m(e,null),r=!0},p:function(t,r){var u=y(r,1)[0];t[1].length||t[0]?i&&(i.d(1),i=null):i?i.p(t,u):((i=X()).c(),i.m(n.parentNode,n));var f=a;(a=l(t))===f?~a&&s[a].p(t,u):(c&&(_(),D(s[f],1,1,(function(){s[f]=null})),R()),~a?((c=s[a])?c.p(t,u):(c=s[a]=o[a](t)).c(),T(c,1),c.m(e,null)):c=null)},i:function(t){r||(T(c),r=!0)},o:function(t){D(c),r=!1},d:function(t){i&&i.d(t),t&&v(n),t&&v(e),~a&&s[a].d()}}}function at(t,n,e){var a=!0,c=W(),r=k.owner,i=k.repo,o=[];return I(z(b.mark((function t(){return b.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.t0=e,t.next=4,q("issues-".concat(r,"-").concat(i),(function(){return c.issues.listForRepo({owner:r,repo:i,state:"open",filter:"all",sort:"created",direction:"desc",labels:"status"})}));case 4:t.t1=o=t.sent.data,(0,t.t0)(1,t.t1),e(1,o=o.map((function(t,n){return t.showHeading=0===n||new Date(o[n-1].created_at).toLocaleDateString()!==new Date(t.created_at).toLocaleDateString(),t}))),t.next=12;break;case 9:t.prev=9,t.t2=t.catch(0),G(t.t2);case 12:e(0,a=!1);case 13:case"end":return t.stop()}}),t,null,[[0,9]])})))),[a,o]}var ct=function(n){t(u,s);var e=K(u);function u(t){var n;return a(this,u),n=e.call(this),c(i(n),t,at,et,r,{}),n}return o(u)}();function rt(t){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var c,r=n(t);if(a){var i=n(this).constructor;c=Reflect.construct(r,arguments,i)}else c=r.apply(this,arguments);return e(this,c)}}function it(t,n,e){var a=t.slice();return a[5]=n[e],a}function ot(t){for(var n,e,a,c,r=k.i18n.scheduledMaintenance+"",i=t[1],o=[],s=0;s<i.length;s+=1)o[s]=lt(it(t,i,s));return{c:function(){n=u("h2"),e=l(r),a=$();for(var t=0;t<o.length;t+=1)o[t].c();c=L()},l:function(t){n=f(t,"H2",{});var i=h(n);e=d(i,r),i.forEach(v),a=E(t);for(var s=0;s<o.length;s+=1)o[s].l(t);c=L()},m:function(t,r){p(t,n,r),g(n,e),p(t,a,r);for(var i=0;i<o.length;i+=1)o[i].m(t,r);p(t,c,r)},p:function(t,n){if(2&n){var e;for(i=t[1],e=0;e<i.length;e+=1){var a=it(t,i,e);o[e]?o[e].p(a,n):(o[e]=lt(a),o[e].c(),o[e].m(c.parentNode,c))}for(;e<o.length;e+=1)o[e].d(1);o.length=i.length}},i:w,o:w,d:function(t){t&&v(n),t&&v(a),M(o,t),t&&v(c)}}}function st(t){var n,e;return n=new J({}),{c:function(){x(n.$$.fragment)},l:function(t){N(n.$$.fragment,t)},m:function(t,a){A(n,t,a),e=!0},p:w,i:function(t){e||(T(n.$$.fragment,t),e=!0)},o:function(t){D(n.$$.fragment,t),e=!1},d:function(t){H(n,t)}}}function ut(t){var n,e,a=(new Date(t[5].metadata.start).getTime()<(new Date).getTime()?k.i18n.scheduledMaintenanceSummaryStarted:k.i18n.scheduledMaintenanceSummaryStarts).replace(/\$DATE/g,new Date(t[5].metadata.start).toLocaleString()).replace(/\$DURATION/g,Math.floor((new Date(t[5].metadata.end).getTime()-new Date(t[5].metadata.start).getTime())/6e4))+"";return{c:function(){n=u("div"),e=l(a)},l:function(t){n=f(t,"DIV",{});var c=h(n);e=d(c,a),c.forEach(v)},m:function(t,a){p(t,n,a),g(n,e)},p:function(t,n){2&n&&a!==(a=(new Date(t[5].metadata.start).getTime()<(new Date).getTime()?k.i18n.scheduledMaintenanceSummaryStarted:k.i18n.scheduledMaintenanceSummaryStarts).replace(/\$DATE/g,new Date(t[5].metadata.start).toLocaleString()).replace(/\$DURATION/g,Math.floor((new Date(t[5].metadata.end).getTime()-new Date(t[5].metadata.start).getTime())/6e4))+"")&&S(e,a)},d:function(t){t&&v(n)}}}function lt(t){var n,e,a,c,r,i,o,s,w,y,_,D,R=t[5].title.replace("🛑","").replace("⚠️","").trim()+"",T=k.i18n.incidentReport.replace(/\$NUMBER/g,t[5].number)+"",I=t[5].metadata.start&&t[5].metadata.end&&ut(t);return{c:function(){n=u("article"),e=u("div"),a=u("div"),c=u("h4"),r=l(R),i=$(),I&&I.c(),o=$(),s=u("div"),w=u("a"),y=l(T),D=$(),this.h()},l:function(t){n=f(t,"ARTICLE",{class:!0});var u=h(n);e=f(u,"DIV",{class:!0});var l=h(e);a=f(l,"DIV",{});var m=h(a);c=f(m,"H4",{});var p=h(c);r=d(p,R),p.forEach(v),i=E(m),I&&I.l(m),m.forEach(v),o=E(l),s=f(l,"DIV",{class:!0});var g=h(s);w=f(g,"A",{href:!0});var $=h(w);y=d($,T),$.forEach(v),g.forEach(v),l.forEach(v),D=E(u),u.forEach(v),this.h()},h:function(){m(w,"href",_="".concat(k.path,"/incident/").concat(t[5].number)),m(s,"class","f r"),m(e,"class","f"),m(n,"class","degraded degraded-active link")},m:function(t,u){p(t,n,u),g(n,e),g(e,a),g(a,c),g(c,r),g(a,i),I&&I.m(a,null),g(e,o),g(e,s),g(s,w),g(w,y),g(n,D)},p:function(t,n){2&n&&R!==(R=t[5].title.replace("🛑","").replace("⚠️","").trim()+"")&&S(r,R),t[5].metadata.start&&t[5].metadata.end?I?I.p(t,n):((I=ut(t)).c(),I.m(a,null)):I&&(I.d(1),I=null),2&n&&T!==(T=k.i18n.incidentReport.replace(/\$NUMBER/g,t[5].number)+"")&&S(y,T),2&n&&_!==(_="".concat(k.path,"/incident/").concat(t[5].number))&&m(w,"href",_)},d:function(t){t&&v(n),I&&I.d()}}}function ft(t){var n,e,a,c,r=[st,ot],i=[];function o(t,n){return t[0]?0:t[1].length?1:-1}return~(e=o(t))&&(a=i[e]=r[e](t)),{c:function(){n=u("section"),a&&a.c(),this.h()},l:function(t){n=f(t,"SECTION",{class:!0});var e=h(n);a&&a.l(e),e.forEach(v),this.h()},h:function(){m(n,"class","svelte-8lnl4f")},m:function(t,a){p(t,n,a),~e&&i[e].m(n,null),c=!0},p:function(t,c){var s=y(c,1)[0],u=e;(e=o(t))===u?~e&&i[e].p(t,s):(a&&(_(),D(i[u],1,1,(function(){i[u]=null})),R()),~e?((a=i[e])?a.p(t,s):(a=i[e]=r[e](t)).c(),T(a,1),a.m(n,null)):a=null)},i:function(t){c||(T(a),c=!0)},o:function(t){D(a),c=!1},d:function(t){t&&v(n),~e&&i[e].d()}}}function ht(t,n,e){var a=!0,c=W(),r=k.owner,i=k.repo,o=[];return I(z(b.mark((function t(){return b.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.t0=e,t.next=4,q("scheduled-current-".concat(r,"-").concat(i),(function(){return c.issues.listForRepo({owner:r,repo:i,state:"open",filter:"all",sort:"created",direction:"desc",labels:"maintenance"})}));case 4:t.t1=o=t.sent.data,(0,t.t0)(1,t.t1),e(1,o=o.map((function(t,n){(t.showHeading=0===n||new Date(o[n-1].created_at).toLocaleDateString()!==new Date(t.created_at).toLocaleDateString(),t.metadata={},t.body.includes("\x3c!--"))&&t.body.split("\x3c!--")[1].split("--\x3e")[0].split("\n").filter((function(t){return t.trim()})).filter((function(t){return t.includes(":")})).forEach((function(n){t.metadata[n.split(/:(.+)/)[0].trim()]=n.split(/:(.+)/)[1].trim()}));return t}))),t.next=12;break;case 9:t.prev=9,t.t2=t.catch(0),G(t.t2);case 12:e(0,a=!1);case 13:case"end":return t.stop()}}),t,null,[[0,9]])})))),[a,o]}var dt=function(n){t(u,s);var e=rt(u);function u(t){var n;return a(this,u),n=e.call(this),c(i(n),t,ht,ft,r,{}),n}return o(u)}();function vt(t){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var c,r=n(t);if(a){var i=n(this).constructor;c=Reflect.construct(r,arguments,i)}else c=r.apply(this,arguments);return e(this,c)}}function mt(t,n,e){var a=t.slice();return a[5]=n[e],a}function pt(t){for(var n,e,a,c,r=k.i18n.pastIncidents+"",i=t[1],o=[],s=0;s<i.length;s+=1)o[s]=$t(mt(t,i,s));return{c:function(){n=u("h2"),e=l(r),a=$();for(var t=0;t<o.length;t+=1)o[t].c();c=L(),this.h()},l:function(t){n=f(t,"H2",{class:!0});var i=h(n);e=d(i,r),i.forEach(v),a=E(t);for(var s=0;s<o.length;s+=1)o[s].l(t);c=L(),this.h()},h:function(){m(n,"class","svelte-18y4uo2")},m:function(t,r){p(t,n,r),g(n,e),p(t,a,r);for(var i=0;i<o.length;i+=1)o[i].m(t,r);p(t,c,r)},p:function(t,n){if(2&n){var e;for(i=t[1],e=0;e<i.length;e+=1){var a=mt(t,i,e);o[e]?o[e].p(a,n):(o[e]=$t(a),o[e].c(),o[e].m(c.parentNode,c))}for(;e<o.length;e+=1)o[e].d(1);o.length=i.length}},i:w,o:w,d:function(t){t&&v(n),t&&v(a),M(o,t),t&&v(c)}}}function gt(t){var n,e;return n=new J({}),{c:function(){x(n.$$.fragment)},l:function(t){N(n.$$.fragment,t)},m:function(t,a){A(n,t,a),e=!0},p:w,i:function(t){e||(T(n.$$.fragment,t),e=!0)},o:function(t){D(n.$$.fragment,t),e=!1},d:function(t){H(n,t)}}}function wt(t){var n,e,a=new Date(t[5].created_at).toLocaleDateString()+"";return{c:function(){n=u("h3"),e=l(a)},l:function(t){n=f(t,"H3",{});var c=h(n);e=d(c,a),c.forEach(v)},m:function(t,a){p(t,n,a),g(n,e)},p:function(t,n){2&n&&a!==(a=new Date(t[5].created_at).toLocaleDateString()+"")&&S(e,a)},d:function(t){t&&v(n)}}}function $t(t){var n,e,a,c,r,i,o,s,w,y,_,D,R,T,I,b=t[5].title.replace("🛑","").replace("⚠️","").trim()+"",L=k.i18n.pastIncidentsResolved.replace(/\$MINUTES/g,((new Date(t[5].closed_at).getTime()-new Date(t[5].created_at).getTime())/6e4).toFixed(0)).replace(/\$POSTS/g,t[5].comments)+"",M=k.i18n.incidentReport.replace(/\$NUMBER/g,t[5].number)+"",x=t[5].showHeading&&wt(t);return{c:function(){x&&x.c(),n=$(),e=u("article"),a=u("div"),c=u("div"),r=u("h4"),i=l(b),o=$(),s=u("div"),w=$(),y=u("div"),_=u("a"),D=l(M),T=$(),this.h()},l:function(t){x&&x.l(t),n=E(t),e=f(t,"ARTICLE",{class:!0});var u=h(e);a=f(u,"DIV",{class:!0});var l=h(a);c=f(l,"DIV",{});var m=h(c);r=f(m,"H4",{});var p=h(r);i=d(p,b),p.forEach(v),o=E(m),s=f(m,"DIV",{}),h(s).forEach(v),m.forEach(v),w=E(l),y=f(l,"DIV",{class:!0});var g=h(y);_=f(g,"A",{href:!0});var $=h(_);D=d($,M),$.forEach(v),g.forEach(v),l.forEach(v),T=E(u),u.forEach(v),this.h()},h:function(){m(_,"href",R="".concat(k.path,"/incident/").concat(t[5].number)),m(y,"class","f r"),m(a,"class","f"),m(e,"class",I="down link "+(t[5].title.includes("degraded")?"degraded":""))},m:function(t,u){x&&x.m(t,u),p(t,n,u),p(t,e,u),g(e,a),g(a,c),g(c,r),g(r,i),g(c,o),g(c,s),s.innerHTML=L,g(a,w),g(a,y),g(y,_),g(_,D),g(e,T)},p:function(t,a){t[5].showHeading?x?x.p(t,a):((x=wt(t)).c(),x.m(n.parentNode,n)):x&&(x.d(1),x=null),2&a&&b!==(b=t[5].title.replace("🛑","").replace("⚠️","").trim()+"")&&S(i,b),2&a&&L!==(L=k.i18n.pastIncidentsResolved.replace(/\$MINUTES/g,((new Date(t[5].closed_at).getTime()-new Date(t[5].created_at).getTime())/6e4).toFixed(0)).replace(/\$POSTS/g,t[5].comments)+"")&&(s.innerHTML=L),2&a&&M!==(M=k.i18n.incidentReport.replace(/\$NUMBER/g,t[5].number)+"")&&S(D,M),2&a&&R!==(R="".concat(k.path,"/incident/").concat(t[5].number))&&m(_,"href",R),2&a&&I!==(I="down link "+(t[5].title.includes("degraded")?"degraded":""))&&m(e,"class",I)},d:function(t){x&&x.d(t),t&&v(n),t&&v(e)}}}function Et(t){var n,e,a,c,r=[gt,pt],i=[];function o(t,n){return t[0]?0:t[1].length?1:-1}return~(e=o(t))&&(a=i[e]=r[e](t)),{c:function(){n=u("section"),a&&a.c()},l:function(t){n=f(t,"SECTION",{});var e=h(n);a&&a.l(e),e.forEach(v)},m:function(t,a){p(t,n,a),~e&&i[e].m(n,null),c=!0},p:function(t,c){var s=y(c,1)[0],u=e;(e=o(t))===u?~e&&i[e].p(t,s):(a&&(_(),D(i[u],1,1,(function(){i[u]=null})),R()),~e?((a=i[e])?a.p(t,s):(a=i[e]=r[e](t)).c(),T(a,1),a.m(n,null)):a=null)},i:function(t){c||(T(a),c=!0)},o:function(t){D(a),c=!1},d:function(t){t&&v(n),~e&&i[e].d()}}}function yt(t,n,e){var a=!0,c=W(),r=k.owner,i=k.repo,o=[];return I(z(b.mark((function t(){return b.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.t0=e,t.next=4,q("closed-issues-".concat(r,"-").concat(i),(function(){return c.issues.listForRepo({owner:r,repo:i,state:"closed",filter:"all",sort:"created",direction:"desc",labels:"status"})}));case 4:t.t1=o=t.sent.data,(0,t.t0)(1,t.t1),t.next=11;break;case 8:t.prev=8,t.t2=t.catch(0),G(t.t2);case 11:e(1,o=o.map((function(t,n){return t.showHeading=0===n||new Date(o[n-1].created_at).toLocaleDateString()!==new Date(t.created_at).toLocaleDateString(),t}))),e(0,a=!1);case 13:case"end":return t.stop()}}),t,null,[[0,8]])})))),[a,o]}var _t=function(n){t(u,s);var e=vt(u);function u(t){var n;return a(this,u),n=e.call(this),c(i(n),t,yt,Et,r,{}),n}return o(u)}();function Dt(t){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var c,r=n(t);if(a){var i=n(this).constructor;c=Reflect.construct(r,arguments,i)}else c=r.apply(this,arguments);return e(this,c)}}function Rt(t,n,e){var a=t.slice();return a[18]=n[e],a}function Tt(t){for(var n,e=t[1],a=[],c=0;c<e.length;c+=1)a[c]=kt(Rt(t,e,c));return{c:function(){for(var t=0;t<a.length;t+=1)a[t].c();n=L()},l:function(t){for(var e=0;e<a.length;e+=1)a[e].l(t);n=L()},m:function(t,e){for(var c=0;c<a.length;c+=1)a[c].m(t,e);p(t,n,e)},p:function(t,c){if(26&c){var r;for(e=t[1],r=0;r<e.length;r+=1){var i=Rt(t,e,r);a[r]?a[r].p(i,c):(a[r]=kt(i),a[r].c(),a[r].m(n.parentNode,n))}for(;r<a.length;r+=1)a[r].d(1);a.length=e.length}},i:w,o:w,d:function(t){M(a,t),t&&v(n)}}}function It(t){var n,e;return n=new J({}),{c:function(){x(n.$$.fragment)},l:function(t){N(n.$$.fragment,t)},m:function(t,a){A(n,t,a),e=!0},p:w,i:function(t){e||(T(n.$$.fragment,t),e=!0)},o:function(t){D(n.$$.fragment,t),e=!1},d:function(t){H(n,t)}}}function bt(t){var n,e,a,c,r,i,o,s=k.i18n.averageResponseTime.split("$TIME")[0]+"",w=("day"===t[3]?t[18].timeDay:"week"===t[3]?t[18].timeWeek:"month"===t[3]?t[18].timeMonth:"year"===t[3]?t[18].timeYear:t[18].time)+"",y=k.i18n.averageResponseTime.split("$TIME")[1]+"";return{c:function(){n=u("div"),e=new U(!1),a=$(),c=u("span"),r=l(w),i=$(),o=new U(!1),this.h()},l:function(t){n=f(t,"DIV",{class:!0});var s=h(n);e=P(s,!1),a=E(s),c=f(s,"SPAN",{class:!0});var u=h(c);r=d(u,w),i=E(u),o=P(u,!1),u.forEach(v),s.forEach(v),this.h()},h:function(){e.a=a,o.a=null,m(c,"class","data svelte-14gfn20"),m(n,"class","svelte-14gfn20")},m:function(t,u){p(t,n,u),e.m(s,n),g(n,a),g(n,c),g(c,r),g(c,i),o.m(y,c)},p:function(t,n){10&n&&w!==(w=("day"===t[3]?t[18].timeDay:"week"===t[3]?t[18].timeWeek:"month"===t[3]?t[18].timeMonth:"year"===t[3]?t[18].timeYear:t[18].time)+"")&&S(r,w)},d:function(t){t&&v(n)}}}function kt(t){var n,e,a,c,r,i,o,s,w,y,_,D,R,T,I,b,L,M,x,N,A,H,B=t[18].name+"",O=k.i18n.overallUptime.split("$UPTIME")[0]+"",V=("day"===t[3]?t[18].uptimeDay:"week"===t[3]?t[18].uptimeWeek:"month"===t[3]?t[18].uptimeMonth:"year"===t[3]?t[18].uptimeYear:t[18].uptime)+"",j=k.i18n.overallUptime.split("$UPTIME")[1]+"",Y=(void 0===t[18].showAverageResponseTime||t[18].showAverageResponseTime)&&bt(t);return{c:function(){n=u("article"),e=u("h4"),a=u("img"),r=$(),i=u("a"),o=l(B),w=$(),y=u("img"),D=$(),R=u("div"),T=new U(!1),I=$(),b=u("span"),L=l(V),M=$(),x=new U(!1),N=$(),Y&&Y.c(),A=$(),this.h()},l:function(t){n=f(t,"ARTICLE",{class:!0});var c=h(n);e=f(c,"H4",{class:!0});var s=h(e);a=f(s,"IMG",{class:!0,alt:!0,src:!0}),r=E(s),i=f(s,"A",{href:!0,class:!0});var u=h(i);o=d(u,B),u.forEach(v),s.forEach(v),w=E(c),y=f(c,"IMG",{alt:!0,class:!0,src:!0}),D=E(c),R=f(c,"DIV",{class:!0});var l=h(R);T=P(l,!1),I=E(l),b=f(l,"SPAN",{class:!0});var m=h(b);L=d(m,V),M=E(m),x=P(m,!1),m.forEach(v),l.forEach(v),N=E(c),Y&&Y.l(c),A=E(c),c.forEach(v),this.h()},h:function(){m(a,"class","icon svelte-14gfn20"),m(a,"alt",""),C(a.src,c=t[18].icon)||m(a,"src",c),m(i,"href",s="".concat(k.path,"/history/").concat(t[18].slug)),m(i,"class","svelte-14gfn20"),m(e,"class","svelte-14gfn20"),m(y,"alt",""),m(y,"class","graph svelte-14gfn20"),C(y.src,_="".concat(t[4],"/").concat(t[18].slug,"/response-time").concat("day"===t[3]?"-day":"week"===t[3]?"-week":"month"===t[3]?"-month":"year"===t[3]?"-year":"",".png"))||m(y,"src",_),T.a=I,x.a=null,m(b,"class","data svelte-14gfn20"),m(R,"class","svelte-14gfn20"),m(n,"class",H=F("".concat(t[18].status," link"))+" svelte-14gfn20")},m:function(t,c){p(t,n,c),g(n,e),g(e,a),g(e,r),g(e,i),g(i,o),g(n,w),g(n,y),g(n,D),g(n,R),T.m(O,R),g(R,I),g(R,b),g(b,L),g(b,M),x.m(j,b),g(n,N),Y&&Y.m(n,null),g(n,A)},p:function(t,e){2&e&&!C(a.src,c=t[18].icon)&&m(a,"src",c),2&e&&B!==(B=t[18].name+"")&&S(o,B),2&e&&s!==(s="".concat(k.path,"/history/").concat(t[18].slug))&&m(i,"href",s),10&e&&!C(y.src,_="".concat(t[4],"/").concat(t[18].slug,"/response-time").concat("day"===t[3]?"-day":"week"===t[3]?"-week":"month"===t[3]?"-month":"year"===t[3]?"-year":"",".png"))&&m(y,"src",_),10&e&&V!==(V=("day"===t[3]?t[18].uptimeDay:"week"===t[3]?t[18].uptimeWeek:"month"===t[3]?t[18].uptimeMonth:"year"===t[3]?t[18].uptimeYear:t[18].uptime)+"")&&S(L,V),void 0===t[18].showAverageResponseTime||t[18].showAverageResponseTime?Y?Y.p(t,e):((Y=bt(t)).c(),Y.m(n,A)):Y&&(Y.d(1),Y=null),2&e&&H!==(H=F("".concat(t[18].status," link"))+" svelte-14gfn20")&&m(n,"class",H)},d:function(t){t&&v(n),Y&&Y.d()}}}function St(t){var n,e,a,c,r,i,o,s,w,I,b,S,L,M,x,N,A,H,V,U,P,C,F,j,Y,W,z,G,q,J,K,Q,X,Z,tt,nt,et=k.i18n.liveStatus+"",at=(k.i18n.duration24H||"24h")+"",ct=(k.i18n.duration7D||"7d")+"",rt=(k.i18n.duration30D||"30d")+"",it=(k.i18n.duration1Y||"1y")+"",ot=(k.i18n.durationAll||"all")+"",st=[It,Tt],ut=[];function lt(t,n){return t[0]?0:t[1].length?1:-1}return~(Q=lt(t))&&(X=ut[Q]=st[Q](t)),{c:function(){n=u("div"),e=u("h2"),a=l(et),c=$(),r=u("form"),i=u("div"),o=u("input"),s=u("label"),w=l(at),I=$(),b=u("div"),S=u("input"),L=u("label"),M=l(ct),x=$(),N=u("div"),A=u("input"),H=u("label"),V=l(rt),U=$(),P=u("div"),C=u("input"),F=u("label"),j=l(it),Y=$(),W=u("div"),z=u("input"),G=u("label"),q=l(ot),J=$(),K=u("section"),X&&X.c(),this.h()},l:function(t){n=f(t,"DIV",{class:!0});var u=h(n);e=f(u,"H2",{});var l=h(e);a=d(l,et),l.forEach(v),c=E(u),r=f(u,"FORM",{class:!0});var m=h(r);i=f(m,"DIV",{});var p=h(i);o=f(p,"INPUT",{name:!0,type:!0,id:!0,class:!0}),s=f(p,"LABEL",{for:!0,class:!0});var g=h(s);w=d(g,at),g.forEach(v),p.forEach(v),I=E(m),b=f(m,"DIV",{});var $=h(b);S=f($,"INPUT",{name:!0,type:!0,id:!0,class:!0}),L=f($,"LABEL",{for:!0,class:!0});var y=h(L);M=d(y,ct),y.forEach(v),$.forEach(v),x=E(m),N=f(m,"DIV",{});var _=h(N);A=f(_,"INPUT",{name:!0,type:!0,id:!0,class:!0}),H=f(_,"LABEL",{for:!0,class:!0});var D=h(H);V=d(D,rt),D.forEach(v),_.forEach(v),U=E(m),P=f(m,"DIV",{});var R=h(P);C=f(R,"INPUT",{name:!0,type:!0,id:!0,class:!0}),F=f(R,"LABEL",{for:!0,class:!0});var T=h(F);j=d(T,it),T.forEach(v),R.forEach(v),Y=E(m),W=f(m,"DIV",{});var k=h(W);z=f(k,"INPUT",{name:!0,type:!0,id:!0,class:!0}),G=f(k,"LABEL",{for:!0,class:!0});var B=h(G);q=d(B,ot),B.forEach(v),k.forEach(v),m.forEach(v),u.forEach(v),J=E(t),K=f(t,"SECTION",{class:!0});var O=h(K);X&&X.l(O),O.forEach(v),this.h()},h:function(){o.__value="day",o.value=o.__value,m(o,"name","d"),m(o,"type","radio"),m(o,"id","data_day"),m(o,"class","svelte-14gfn20"),t[7][0].push(o),m(s,"for","data_day"),m(s,"class","svelte-14gfn20"),S.__value="week",S.value=S.__value,m(S,"name","d"),m(S,"type","radio"),m(S,"id","data_week"),m(S,"class","svelte-14gfn20"),t[7][0].push(S),m(L,"for","data_week"),m(L,"class","svelte-14gfn20"),A.__value="month",A.value=A.__value,m(A,"name","d"),m(A,"type","radio"),m(A,"id","data_month"),m(A,"class","svelte-14gfn20"),t[7][0].push(A),m(H,"for","data_month"),m(H,"class","svelte-14gfn20"),C.__value="year",C.value=C.__value,m(C,"name","d"),m(C,"type","radio"),m(C,"id","data_year"),m(C,"class","svelte-14gfn20"),t[7][0].push(C),m(F,"for","data_year"),m(F,"class","svelte-14gfn20"),z.__value="all",z.value=z.__value,m(z,"name","d"),m(z,"type","radio"),m(z,"id","data_all"),m(z,"class","svelte-14gfn20"),t[7][0].push(z),m(G,"for","data_all"),m(G,"class","svelte-14gfn20"),m(r,"class","f r svelte-14gfn20"),m(n,"class","f changed svelte-14gfn20"),m(K,"class","live-status svelte-14gfn20")},m:function(u,l){p(u,n,l),g(n,e),g(e,a),g(n,c),g(n,r),g(r,i),g(i,o),o.checked=o.__value===t[3],g(i,s),g(s,w),g(r,I),g(r,b),g(b,S),S.checked=S.__value===t[3],g(b,L),g(L,M),g(r,x),g(r,N),g(N,A),A.checked=A.__value===t[3],g(N,H),g(H,V),g(r,U),g(r,P),g(P,C),C.checked=C.__value===t[3],g(P,F),g(F,j),g(r,Y),g(r,W),g(W,z),z.checked=z.__value===t[3],g(W,G),g(G,q),t[12](n),p(u,J,l),p(u,K,l),~Q&&ut[Q].m(K,null),Z=!0,tt||(nt=[B(o,"change",t[6]),B(o,"change",t[5]),B(S,"change",t[8]),B(S,"change",t[5]),B(A,"change",t[9]),B(A,"change",t[5]),B(C,"change",t[10]),B(C,"change",t[5]),B(z,"change",t[11]),B(z,"change",t[5])],tt=!0)},p:function(t,n){var e=y(n,1)[0];8&e&&(o.checked=o.__value===t[3]),8&e&&(S.checked=S.__value===t[3]),8&e&&(A.checked=A.__value===t[3]),8&e&&(C.checked=C.__value===t[3]),8&e&&(z.checked=z.__value===t[3]);var a=Q;(Q=lt(t))===a?~Q&&ut[Q].p(t,e):(X&&(_(),D(ut[a],1,1,(function(){ut[a]=null})),R()),~Q?((X=ut[Q])?X.p(t,e):(X=ut[Q]=st[Q](t)).c(),T(X,1),X.m(K,null)):X=null)},i:function(t){Z||(T(X),Z=!0)},o:function(t){D(X),Z=!1},d:function(e){e&&v(n),t[7][0].splice(t[7][0].indexOf(o),1),t[7][0].splice(t[7][0].indexOf(S),1),t[7][0].splice(t[7][0].indexOf(A),1),t[7][0].splice(t[7][0].indexOf(C),1),t[7][0].splice(t[7][0].indexOf(z),1),t[12](null),e&&v(J),e&&v(K),~Q&&ut[Q].d(),tt=!1,O(nt)}}}function Lt(t,n,e){var a=!0;W();var c=k.owner,r=k.repo,i=(k["status-website"]||{}).apiBaseUrl,o=[];i||(i="https://api.github.com");var s=i.includes("api.github.com")?"https://raw.githubusercontent.com":i,u="".concat(s,"/").concat(c,"/").concat(r,"/master/graphs"),l=null,f="week";I(z(b.mark((function t(){var n;return b.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(s,"/").concat(c,"/").concat(r,"/master/history/summary.json"));case 3:return n=t.sent,t.t0=e,t.next=7,n.json();case 7:t.t1=o=t.sent,(0,t.t0)(1,t.t1),t.next=14;break;case 11:t.prev=11,t.t2=t.catch(0),G(t.t2);case 14:e(0,a=!1),l&&l.classList.remove("changed");case 16:case"end":return t.stop()}}),t,null,[[0,11]])}))));return[a,o,l,f,u,function(){l&&(l.classList.add("changed"),setTimeout((function(){return l.classList.remove("changed")}),500))},function(){f=this.__value,e(3,f)},[[]],function(){f=this.__value,e(3,f)},function(){f=this.__value,e(3,f)},function(){f=this.__value,e(3,f)},function(){f=this.__value,e(3,f)},function(t){V[t?"unshift":"push"]((function(){e(2,l=t)}))}]}var Mt=function(n){t(u,s);var e=Dt(u);function u(t){var n;return a(this,u),n=e.call(this),c(i(n),t,Lt,St,r,{}),n}return o(u)}();function xt(t){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var c,r=n(t);if(a){var i=n(this).constructor;c=Reflect.construct(r,arguments,i)}else c=r.apply(this,arguments);return e(this,c)}}function Nt(t,n,e){var a=t.slice();return a[5]=n[e],a}function At(t){for(var n,e,a,c,r=k.i18n.pastScheduledMaintenance+"",i=t[1],o=[],s=0;s<i.length;s+=1)o[s]=Ot(Nt(t,i,s));return{c:function(){n=u("h2"),e=l(r),a=$();for(var t=0;t<o.length;t+=1)o[t].c();c=L(),this.h()},l:function(t){n=f(t,"H2",{class:!0});var i=h(n);e=d(i,r),i.forEach(v),a=E(t);for(var s=0;s<o.length;s+=1)o[s].l(t);c=L(),this.h()},h:function(){m(n,"class","svelte-18y4uo2")},m:function(t,r){p(t,n,r),g(n,e),p(t,a,r);for(var i=0;i<o.length;i+=1)o[i].m(t,r);p(t,c,r)},p:function(t,n){if(2&n){var e;for(i=t[1],e=0;e<i.length;e+=1){var a=Nt(t,i,e);o[e]?o[e].p(a,n):(o[e]=Ot(a),o[e].c(),o[e].m(c.parentNode,c))}for(;e<o.length;e+=1)o[e].d(1);o.length=i.length}},i:w,o:w,d:function(t){t&&v(n),t&&v(a),M(o,t),t&&v(c)}}}function Ht(t){var n,e;return n=new J({}),{c:function(){x(n.$$.fragment)},l:function(t){N(n.$$.fragment,t)},m:function(t,a){A(n,t,a),e=!0},p:w,i:function(t){e||(T(n.$$.fragment,t),e=!0)},o:function(t){D(n.$$.fragment,t),e=!1},d:function(t){H(n,t)}}}function Bt(t){var n,e,a=new Date(t[5].created_at).toLocaleDateString()+"";return{c:function(){n=u("h3"),e=l(a)},l:function(t){n=f(t,"H3",{});var c=h(n);e=d(c,a),c.forEach(v)},m:function(t,a){p(t,n,a),g(n,e)},p:function(t,n){2&n&&a!==(a=new Date(t[5].created_at).toLocaleDateString()+"")&&S(e,a)},d:function(t){t&&v(n)}}}function Ot(t){var n,e,a,c,r,i,o,s,w,y,_,D,R,T,I,b=t[5].title.replace("🛑","").replace("⚠️","").trim()+"",L=k.i18n.incidentReport.replace(/\$NUMBER/g,t[5].number)+"",M=t[5].showHeading&&Bt(t);return{c:function(){M&&M.c(),n=$(),e=u("article"),a=u("div"),c=u("div"),r=u("h4"),i=l(b),o=$(),s=u("div"),w=l("Completed"),y=$(),_=u("div"),D=u("a"),R=l(L),I=$(),this.h()},l:function(t){M&&M.l(t),n=E(t),e=f(t,"ARTICLE",{class:!0});var u=h(e);a=f(u,"DIV",{class:!0});var l=h(a);c=f(l,"DIV",{});var m=h(c);r=f(m,"H4",{});var p=h(r);i=d(p,b),p.forEach(v),o=E(m),s=f(m,"DIV",{});var g=h(s);w=d(g,"Completed"),g.forEach(v),m.forEach(v),y=E(l),_=f(l,"DIV",{class:!0});var $=h(_);D=f($,"A",{href:!0});var T=h(D);R=d(T,L),T.forEach(v),$.forEach(v),l.forEach(v),I=E(u),u.forEach(v),this.h()},h:function(){m(D,"href",T="".concat(k.path,"/incident/").concat(t[5].number)),m(_,"class","f r"),m(a,"class","f"),m(e,"class","link degraded")},m:function(t,u){M&&M.m(t,u),p(t,n,u),p(t,e,u),g(e,a),g(a,c),g(c,r),g(r,i),g(c,o),g(c,s),g(s,w),g(a,y),g(a,_),g(_,D),g(D,R),g(e,I)},p:function(t,e){t[5].showHeading?M?M.p(t,e):((M=Bt(t)).c(),M.m(n.parentNode,n)):M&&(M.d(1),M=null),2&e&&b!==(b=t[5].title.replace("🛑","").replace("⚠️","").trim()+"")&&S(i,b),2&e&&L!==(L=k.i18n.incidentReport.replace(/\$NUMBER/g,t[5].number)+"")&&S(R,L),2&e&&T!==(T="".concat(k.path,"/incident/").concat(t[5].number))&&m(D,"href",T)},d:function(t){M&&M.d(t),t&&v(n),t&&v(e)}}}function Vt(t){var n,e,a,c,r=[Ht,At],i=[];function o(t,n){return t[0]?0:t[1].length?1:-1}return~(e=o(t))&&(a=i[e]=r[e](t)),{c:function(){n=u("section"),a&&a.c()},l:function(t){n=f(t,"SECTION",{});var e=h(n);a&&a.l(e),e.forEach(v)},m:function(t,a){p(t,n,a),~e&&i[e].m(n,null),c=!0},p:function(t,c){var s=y(c,1)[0],u=e;(e=o(t))===u?~e&&i[e].p(t,s):(a&&(_(),D(i[u],1,1,(function(){i[u]=null})),R()),~e?((a=i[e])?a.p(t,s):(a=i[e]=r[e](t)).c(),T(a,1),a.m(n,null)):a=null)},i:function(t){c||(T(a),c=!0)},o:function(t){D(a),c=!1},d:function(t){t&&v(n),~e&&i[e].d()}}}function Ut(t,n,e){var a=!0,c=W(),r=k.owner,i=k.repo,o=[];return I(z(b.mark((function t(){return b.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.t0=e,t.next=4,q("maintenance-issues-".concat(r,"-").concat(i),(function(){return c.issues.listForRepo({owner:r,repo:i,state:"closed",filter:"all",sort:"created",direction:"desc",labels:"maintenance"})}));case 4:t.t1=o=t.sent.data,(0,t.t0)(1,t.t1),t.next=11;break;case 8:t.prev=8,t.t2=t.catch(0),G(t.t2);case 11:e(1,o=o.map((function(t,n){return t.showHeading=0===n||new Date(o[n-1].created_at).toLocaleDateString()!==new Date(t.created_at).toLocaleDateString(),t}))),e(0,a=!1);case 13:case"end":return t.stop()}}),t,null,[[0,8]])})))),[a,o]}var Pt=function(n){t(u,s);var e=xt(u);function u(t){var n;return a(this,u),n=e.call(this),c(i(n),t,Ut,Vt,r,{}),n}return o(u)}();function Ct(t){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var c,r=n(t);if(a){var i=n(this).constructor;c=Reflect.construct(r,arguments,i)}else c=r.apply(this,arguments);return e(this,c)}}function Ft(t){var n,e=Y(k["status-website"].introTitle)+"";return{c:function(){n=u("h1")},l:function(t){n=f(t,"H1",{}),h(n).forEach(v)},m:function(t,a){p(t,n,a),n.innerHTML=e},p:w,d:function(t){t&&v(n)}}}function jt(t){var n,e=Y(k["status-website"].introMessage)+"";return{c:function(){n=u("p"),this.h()},l:function(t){n=f(t,"P",{class:!0}),h(n).forEach(v),this.h()},h:function(){m(n,"class","lead svelte-ngkazm")},m:function(t,a){p(t,n,a),n.innerHTML=e},p:w,d:function(t){t&&v(n)}}}function Yt(t){var n,e,a,c,r,i,o,s,l,d,g,w,_,R;document.title=n=t[0];var I=k["status-website"]&&function(t){var n,e,a=k["status-website"].introTitle&&Ft(),c=k["status-website"].introMessage&&jt();return{c:function(){a&&a.c(),n=$(),c&&c.c(),e=L()},l:function(t){a&&a.l(t),n=E(t),c&&c.l(t),e=L()},m:function(t,r){a&&a.m(t,r),p(t,n,r),c&&c.m(t,r),p(t,e,r)},p:function(t,n){k["status-website"].introTitle&&a.p(t,n),k["status-website"].introMessage&&c.p(t,n)},d:function(t){a&&a.d(t),t&&v(n),c&&c.d(t),t&&v(e)}}}();return r=new ct({}),o=new dt({}),l=new Mt({}),g=new Pt({}),_=new _t({}),{c:function(){e=$(),a=u("header"),I&&I.c(),c=$(),x(r.$$.fragment),i=$(),x(o.$$.fragment),s=$(),x(l.$$.fragment),d=$(),x(g.$$.fragment),w=$(),x(_.$$.fragment),this.h()},l:function(t){j('[data-svelte="svelte-1258swp"]',document.head).forEach(v),e=E(t),a=f(t,"HEADER",{class:!0});var n=h(a);I&&I.l(n),n.forEach(v),c=E(t),N(r.$$.fragment,t),i=E(t),N(o.$$.fragment,t),s=E(t),N(l.$$.fragment,t),d=E(t),N(g.$$.fragment,t),w=E(t),N(_.$$.fragment,t),this.h()},h:function(){m(a,"class","svelte-ngkazm")},m:function(t,n){p(t,e,n),p(t,a,n),I&&I.m(a,null),p(t,c,n),A(r,t,n),p(t,i,n),A(o,t,n),p(t,s,n),A(l,t,n),p(t,d,n),A(g,t,n),p(t,w,n),A(_,t,n),R=!0},p:function(t,e){var a=y(e,1)[0];(!R||1&a)&&n!==(n=t[0])&&(document.title=n),k["status-website"]&&I.p(t,a)},i:function(t){R||(T(r.$$.fragment,t),T(o.$$.fragment,t),T(l.$$.fragment,t),T(g.$$.fragment,t),T(_.$$.fragment,t),R=!0)},o:function(t){D(r.$$.fragment,t),D(o.$$.fragment,t),D(l.$$.fragment,t),D(g.$$.fragment,t),D(_.$$.fragment,t),R=!1},d:function(t){t&&v(e),t&&v(a),I&&I.d(),t&&v(c),H(r,t),t&&v(i),H(o,t),t&&v(s),H(l,t),t&&v(d),H(g,t),t&&v(w),H(_,t)}}}function Wt(t,n,e){var a="Status";try{a=k["status-website"].name}catch(t){}return[a]}var zt=function(n){t(u,s);var e=Ct(u);function u(t){var n;return a(this,u),n=e.call(this),c(i(n),t,Wt,Yt,r,{}),n}return o(u)}();export{zt as default};
