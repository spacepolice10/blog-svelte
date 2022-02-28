import{S as we,i as Ee,s as Ie,e as v,k as b,t as q,N as le,c as g,a as p,m as k,h as C,d as h,O as se,G as $,b as c,g as re,H as o,j as J,P as pe,Q as be,R as ue,T as de}from"../chunks/vendor-54fcb392.js";function he(u,e,t){const l=u.slice();return l[1]=e[t],l}function fe(u,e,t){const l=u.slice();return l[4]=e[t],l}function _e(u){let e,t,l=u[4].name+"",d;return{c(){e=v("p"),t=q("# "),d=q(l),this.h()},l(r){e=g(r,"P",{class:!0});var a=p(e);t=C(a,"# "),d=C(a,l),a.forEach(h),this.h()},h(){c(e,"class","font-thin")},m(r,a){re(r,e,a),o(e,t),o(e,d)},p(r,a){a&1&&l!==(l=r[4].name+"")&&J(d,l)},d(r){r&&h(e)}}}function me(u){let e,t,l,d,r,a,f,s,y,z,L,P=u[1].author.node.username+"",S,F,x,D=u[1].title+"",G,K,M,U=u[1].excerpt+"",W,E,B,I,w,O,X,V,Y,A,H=u[1].commentCount+"",N,ve,ee,Q,j=u[1].tags.nodes,_=[];for(let i=0;i<j.length;i+=1)_[i]=_e(fe(u,j,i));return{c(){e=v("a"),t=v("div"),l=v("img"),a=b(),f=v("div"),s=v("img"),z=b(),L=v("p"),S=q(P),F=b(),x=v("h1"),G=q(D),K=b(),M=v("p"),W=b(),E=v("div");for(let i=0;i<_.length;i+=1)_[i].c();B=b(),I=v("div"),w=le("svg"),O=le("title"),X=q("instagram-comment"),V=le("path"),Y=b(),A=v("p"),N=q(H),ee=b(),this.h()},l(i){e=g(i,"A",{"sveltekit:prefetch":!0,href:!0});var m=p(e);t=g(m,"DIV",{class:!0});var n=p(t);l=g(n,"IMG",{src:!0,alt:!0}),a=k(n),f=g(n,"DIV",{class:!0});var T=p(f);s=g(T,"IMG",{class:!0,src:!0,alt:!0}),z=k(T),L=g(T,"P",{});var ne=p(L);S=C(ne,P),ne.forEach(h),T.forEach(h),F=k(n),x=g(n,"H1",{class:!0});var oe=p(x);G=C(oe,D),oe.forEach(h),K=k(n),M=g(n,"P",{});var ge=p(M);ge.forEach(h),W=k(n),E=g(n,"DIV",{class:!0});var R=p(E);for(let ae=0;ae<_.length;ae+=1)_[ae].l(R);B=k(R),I=g(R,"DIV",{class:!0});var Z=p(I);w=se(Z,"svg",{class:!0,fill:!0,id:!0,"data-name":!0,xmlns:!0,viewBox:!0});var te=p(w);O=se(te,"title",{});var ie=p(O);X=C(ie,"instagram-comment"),ie.forEach(h),V=se(te,"path",{d:!0}),p(V).forEach(h),te.forEach(h),Y=k(Z),A=g(Z,"P",{});var ce=p(A);N=C(ce,H),ce.forEach(h),Z.forEach(h),R.forEach(h),n.forEach(h),ee=k(m),m.forEach(h),this.h()},h(){$(l.src,d=u[1].featuredImage.node.mediaItemUrl)||c(l,"src",d),c(l,"alt",r=u[1].featuredImage.node.altText),c(s,"class","rounded-full"),$(s.src,y=u[1].author.node.avatar.url)||c(s,"src",y),c(s,"alt","author's avatar"),c(f,"class","flex gap-2 w-5 h-5 my-2"),c(x,"class","font-bold text-2xl"),c(V,"d","M61.44,0a61.46,61.46,0,0,1,54.91,89l6.44,25.74a5.83,5.83,0,0,1-7.25,7L91.62,115A61.43,61.43,0,1,1,61.44,0ZM96.63,26.25a49.78,49.78,0,1,0-9,77.52A5.83,5.83,0,0,1,92.4,103L109,107.77l-4.5-18a5.86,5.86,0,0,1,.51-4.34,49.06,49.06,0,0,0,4.62-11.58,50,50,0,0,0-13-47.62Z"),c(w,"class","w-4 h-4"),c(w,"fill","white"),c(w,"id","Layer_1"),c(w,"data-name","Layer 1"),c(w,"xmlns","http://www.w3.org/2000/svg"),c(w,"viewBox","0 0 122.97 122.88"),c(I,"class","flex justify-between items-center gap-2 ml-4"),c(E,"class","flex gap-2 opacity-50"),c(t,"class",ve="flex flex-col hover:scale-105 duration-150"),c(e,"sveltekit:prefetch",""),c(e,"href",Q=`/post${u[1].uri}`)},m(i,m){re(i,e,m),o(e,t),o(t,l),o(t,a),o(t,f),o(f,s),o(f,z),o(f,L),o(L,S),o(t,F),o(t,x),o(x,G),o(t,K),o(t,M),M.innerHTML=U,o(t,W),o(t,E);for(let n=0;n<_.length;n+=1)_[n].m(E,null);o(E,B),o(E,I),o(I,w),o(w,O),o(O,X),o(w,V),o(I,Y),o(I,A),o(A,N),o(e,ee)},p(i,m){if(m&1&&!$(l.src,d=i[1].featuredImage.node.mediaItemUrl)&&c(l,"src",d),m&1&&r!==(r=i[1].featuredImage.node.altText)&&c(l,"alt",r),m&1&&!$(s.src,y=i[1].author.node.avatar.url)&&c(s,"src",y),m&1&&P!==(P=i[1].author.node.username+"")&&J(S,P),m&1&&D!==(D=i[1].title+"")&&J(G,D),m&1&&U!==(U=i[1].excerpt+"")&&(M.innerHTML=U),m&1){j=i[1].tags.nodes;let n;for(n=0;n<j.length;n+=1){const T=fe(i,j,n);_[n]?_[n].p(T,m):(_[n]=_e(T),_[n].c(),_[n].m(E,B))}for(;n<_.length;n+=1)_[n].d(1);_.length=j.length}m&1&&H!==(H=i[1].commentCount+"")&&J(N,H),m&1&&Q!==(Q=`/post${i[1].uri}`)&&c(e,"href",Q)},d(i){i&&h(e),pe(_,i)}}}function ke(u){let e,t,l,d=u[0],r=[];for(let a=0;a<d.length;a+=1)r[a]=me(he(u,d,a));return{c(){e=v("div");for(let a=0;a<r.length;a+=1)r[a].c();this.h()},l(a){e=g(a,"DIV",{class:!0});var f=p(e);for(let s=0;s<r.length;s+=1)r[s].l(f);f.forEach(h),this.h()},h(){c(e,"class","grid grid-cols-1 md:grid-cols-3 gap-5 p-5 duration-150")},m(a,f){re(a,e,f);for(let s=0;s<r.length;s+=1)r[s].m(e,null);l=!0},p(a,[f]){if(f&1){d=a[0];let s;for(s=0;s<d.length;s+=1){const y=he(a,d,s);r[s]?r[s].p(y,f):(r[s]=me(y),r[s].c(),r[s].m(e,null))}for(;s<r.length;s+=1)r[s].d(1);r.length=d.length}},i(a){l||(be(()=>{t||(t=ue(e,de,{y:100,duration:400},!0)),t.run(1)}),l=!0)},o(a){t||(t=ue(e,de,{y:100,duration:400},!1)),t.run(0),l=!1},d(a){a&&h(e),pe(r,a),a&&t&&t.end()}}}const ye=`
    query MyQuery {
        posts {
            nodes {
            title
            excerpt
            uri
            commentCount
            author {
                node {
                username
                avatar {
                    foundAvatar
                    url
                }
                }
            }
            tags {
                nodes {
                name
                }
            }
            featuredImage {
                node {
                mediaItemUrl
                altText
                }
            }
            }
        }
    }
	`;async function Me({fetch:u}){const e=await u("http://cm27339-wordpress-7mtqp.tw1.ru/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:ye})});return e.ok?{props:{posts:(await e.json()).data.posts.nodes}}:{status:e.status,error:new Error("Could not load")}}function Te(u,e,t){let{posts:l}=e;return console.log(l),u.$$set=d=>{"posts"in d&&t(0,l=d.posts)},[l]}class je extends we{constructor(e){super();Ee(this,e,Te,ke,Ie,{posts:0})}}export{je as default,Me as load};
