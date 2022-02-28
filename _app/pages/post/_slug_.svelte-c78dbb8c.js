import{S as he,i as me,s as _e,e as m,t as T,c as _,a as v,h as N,d as h,b as p,g as ae,H as n,j as G,k as C,m as D,G as se,Q as pe,R as ne,P as oe,T as re}from"../../chunks/vendor-54fcb392.js";function ie(o,a,l){const s=o.slice();return s[1]=a[l],s}function ce(o,a,l){const s=o.slice();return s[4]=a[l],s}function ue(o){let a,l,s=o[4].name+"",c;return{c(){a=m("p"),l=T("# "),c=T(s),this.h()},l(r){a=_(r,"P",{class:!0});var i=v(a);l=N(i,"# "),c=N(i,s),i.forEach(h),this.h()},h(){p(a,"class","font-thin")},m(r,i){ae(r,a,i),n(a,l),n(a,c)},p(r,i){i&1&&s!==(s=r[4].name+"")&&G(c,s)},d(r){r&&h(a)}}}function de(o){let a,l,s=o[1].content+"",c;return{c(){a=m("div"),l=m("p"),c=C(),this.h()},l(r){a=_(r,"DIV",{class:!0});var i=v(a);l=_(i,"P",{class:!0});var g=v(l);g.forEach(h),c=D(i),i.forEach(h),this.h()},h(){p(l,"class","flex opacity-80 font-thin dark:opacity-50"),p(a,"class","flex")},m(r,i){ae(r,a,i),n(a,l),l.innerHTML=s,n(a,c)},p(r,i){i&1&&s!==(s=r[1].content+"")&&(l.innerHTML=s)},d(r){r&&h(a)}}}function ve(o){let a,l,s,c=o[0].title+"",r,i,g,b,A,F,I,y,K,L=o[0].author.node.firstName+"",Q,W,S=o[0].author.node.lastName+"",B,X,q,Y,$=o[0].commentCount+"",J,Z,P,x,H,R=o[0].content+"",ee,k,E,M=o[0].tags.nodes,u=[];for(let t=0;t<M.length;t+=1)u[t]=ue(ce(o,M,t));let U=o[0].comments.nodes,d=[];for(let t=0;t<U.length;t+=1)d[t]=de(ie(o,U,t));return{c(){a=m("div"),l=m("div"),s=m("h1"),r=T(c),i=C(),g=m("div"),b=m("img"),F=C(),I=m("div"),y=m("p"),K=T("Author: "),Q=T(L),W=C(),B=T(S),X=C(),q=m("p"),Y=T("Comments: "),J=T($),Z=C(),P=m("div");for(let t=0;t<u.length;t+=1)u[t].c();x=C(),H=m("p"),ee=C();for(let t=0;t<d.length;t+=1)d[t].c();this.h()},l(t){a=_(t,"DIV",{class:!0});var f=v(a);l=_(f,"DIV",{class:!0});var e=v(l);s=_(e,"H1",{class:!0});var w=v(s);r=N(w,c),w.forEach(h),i=D(e),g=_(e,"DIV",{class:!0});var z=v(g);b=_(z,"IMG",{class:!0,src:!0,alt:!0}),F=D(z),I=_(z,"DIV",{class:!0});var V=v(I);y=_(V,"P",{});var O=v(y);K=N(O,"Author: "),Q=N(O,L),W=D(O),B=N(O,S),O.forEach(h),X=D(V),q=_(V,"P",{});var te=v(q);Y=N(te,"Comments: "),J=N(te,$),te.forEach(h),Z=D(V),P=_(V,"DIV",{class:!0});var le=v(P);for(let j=0;j<u.length;j+=1)u[j].l(le);le.forEach(h),V.forEach(h),z.forEach(h),x=D(e),H=_(e,"P",{});var fe=v(H);fe.forEach(h),ee=D(e);for(let j=0;j<d.length;j+=1)d[j].l(e);e.forEach(h),f.forEach(h),this.h()},h(){p(s,"class","font-bold text-4xl"),p(b,"class","w-96"),se(b.src,A=`${o[0].featuredImage.node.mediaItemUrl}`)||p(b,"src",A),p(b,"alt",""),p(P,"class","flex gap-2 opacity-80 dark:opacity-50"),p(I,"class","grid grid-cols-1"),p(g,"class","flex gap-10"),p(l,"class","grid grid-cols-1 gap-10 w-10/12"),p(a,"class","flex justify-center items-center w-full min-h-screen")},m(t,f){ae(t,a,f),n(a,l),n(l,s),n(s,r),n(l,i),n(l,g),n(g,b),n(g,F),n(g,I),n(I,y),n(y,K),n(y,Q),n(y,W),n(y,B),n(I,X),n(I,q),n(q,Y),n(q,J),n(I,Z),n(I,P);for(let e=0;e<u.length;e+=1)u[e].m(P,null);n(l,x),n(l,H),H.innerHTML=R,n(l,ee);for(let e=0;e<d.length;e+=1)d[e].m(l,null);E=!0},p(t,[f]){if((!E||f&1)&&c!==(c=t[0].title+"")&&G(r,c),(!E||f&1&&!se(b.src,A=`${t[0].featuredImage.node.mediaItemUrl}`))&&p(b,"src",A),(!E||f&1)&&L!==(L=t[0].author.node.firstName+"")&&G(Q,L),(!E||f&1)&&S!==(S=t[0].author.node.lastName+"")&&G(B,S),(!E||f&1)&&$!==($=t[0].commentCount+"")&&G(J,$),f&1){M=t[0].tags.nodes;let e;for(e=0;e<M.length;e+=1){const w=ce(t,M,e);u[e]?u[e].p(w,f):(u[e]=ue(w),u[e].c(),u[e].m(P,null))}for(;e<u.length;e+=1)u[e].d(1);u.length=M.length}if((!E||f&1)&&R!==(R=t[0].content+"")&&(H.innerHTML=R),f&1){U=t[0].comments.nodes;let e;for(e=0;e<U.length;e+=1){const w=ie(t,U,e);d[e]?d[e].p(w,f):(d[e]=de(w),d[e].c(),d[e].m(l,null))}for(;e<d.length;e+=1)d[e].d(1);d.length=U.length}},i(t){E||(pe(()=>{k||(k=ne(a,re,{y:-150,duration:400},!0)),k.run(1)}),E=!0)},o(t){k||(k=ne(a,re,{y:-150,duration:400},!1)),k.run(0),E=!1},d(t){t&&h(a),oe(u,t),oe(d,t),t&&k&&k.end()}}}const be=!0,ge=`
    query MyQuery($slug: ID!) {
  post(id: $slug, idType: SLUG) {
    content
    title
    featuredImage {
      node {
        mediaItemUrl
      }
    }
    author {
      node {
        nickname
        username
        firstName
        lastName
      }
    }
    tags {
      nodes {
        name
      }
    }
    comments {
      nodes {
        content
        author {
          node {
            name
            ... on User {
              id
              email
              avatar {
                url
              }
            }
          }
        }
      }
    }
    commentCount
  }
}


	`;async function ye({url:o,params:a,fetch:l}){const s=await l("http://cm27339-wordpress-7mtqp.tw1.ru/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:ge,variables:{slug:a.slug}})});return s.ok?{props:{post:(await s.json()).data.post}}:{status:s.status,error:new Error(`Could not load ${o}`)}}function Ie(o,a,l){let{post:s}=a;return console.log(s),o.$$set=c=>{"post"in c&&l(0,s=c.post)},[s]}class ke extends he{constructor(a){super();me(this,a,Ie,ve,_e,{post:0})}}export{ke as default,ye as load,be as prerender};
