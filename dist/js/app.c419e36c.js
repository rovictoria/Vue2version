(function(){var t={3955:function(t,e,i){"use strict";var r=i(144),s=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("HeaderComp"),e("router-view"),e("FooterComp")],1)},a=[],o=function(){var t=this,e=t._self._c;return e("footer",{staticClass:"footer",class:{footer_none:t.isNotFoundPage(t.$route.name)}},[e("div",{staticClass:"footer__info"},[e("LogoComp"),e("p",{staticClass:"footer__text"},[t._v("It is a long established fact that a reader will be distracted lookings.")]),t._m(0)],1),e("div",{staticClass:"footer__links"},[e("h4",{staticClass:"footer__heading"},[t._v("Pages")]),e("MenuComp",{class:{menu_footer:t.isActive}})],1),t._m(1)])},n=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer__socials"},[e("a",{staticClass:"footer__twitter",attrs:{href:"#"}},[e("img",{staticClass:"footer__social",attrs:{src:i(996),alt:"twitter"}})]),e("a",{staticClass:"footer__social",attrs:{href:"#"}},[e("img",{staticClass:"footer__in",attrs:{src:i(7582),alt:"twitter"}})])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer__contacts"},[e("h4",{staticClass:"footer__heading"},[t._v("Contact")]),e("p",{staticClass:"footer__text"},[t._v("55 East Birchwood Ave. Brooklyn, New York 11201")]),e("p",{staticClass:"footer__text"},[t._v("contact@interno.com")]),e("p",{staticClass:"footer__text"},[t._v("(123) 456 - 7890")])])}],c=(i(7658),function(){var t=this,e=t._self._c;return e("div",{staticClass:"logo",on:{click:function(e){return t.$router.push({name:"home"})}}},[e("svg",{staticClass:"logo__image",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"34",height:"34",viewBox:"0 0 34 34",fill:"none"}},[e("path",{attrs:{d:"M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z",fill:"#CDA274"}})]),e("p",{staticClass:"logo__text"},[t._v("Interno")])])}),l=[],u={name:"LogoComp",data(){return{}},mounted(){},methods:{}},d=u,_=i(1001),g=(0,_.Z)(d,c,l,!1,null,"a6a69290",null),p=g.exports,m=function(){var t=this,e=t._self._c;return e("nav",{staticClass:"menu"},[e("p",{staticClass:"menu__link",on:{click:function(e){return t.$router.push({name:"home"})}}},[t._v("Home")]),e("p",{staticClass:"menu__link",on:{click:function(e){return t.$router.push({name:"project"})}}},[t._v("Project")]),e("p",{staticClass:"menu__link",on:{click:function(e){return t.$router.push({name:"blog"})}}},[t._v("Blog")])])},h=[],v={name:"MenuComp",data(){return{}},mounted(){},methods:{}},f=v,A=(0,_.Z)(f,m,h,!1,null,"6f25bae8",null),C=A.exports,j={name:"FooterComp",data(){return{isActive:!0}},mounted(){},methods:{isNotFoundPage(t){return"404"==t}},components:{LogoComp:p,MenuComp:C}},b=j,x=(0,_.Z)(b,o,n,!1,null,"a9861efa",null),y=x.exports,B=function(){var t=this,e=t._self._c;return e("header",{staticClass:"header"},[e("LogoComp"),e("MenuComp")],1)},k=[],w={name:"HeaderComp",data(){return{}},mounted(){},methods:{},components:{MenuComp:C,LogoComp:p}},L=w,M=(0,_.Z)(L,B,k,!1,null,"a20325e4",null),P=M.exports,Z={name:"App",components:{FooterComp:y,HeaderComp:P}},D=Z,S=(0,_.Z)(D,s,a,!1,null,null,null),F=S.exports,K=i(8345),T=function(){var t=this,e=t._self._c;return e("div",[e("MainBlog"),e("PostBlog"),e("ArticlesBlog")],1)},H=[],O=function(){var t=this,e=t._self._c;return e("section",{staticClass:"articles"},[e("h3",{staticClass:"articles__title"},[t._v("Articles & News")]),e("div",{staticClass:"articles__cards"},[t._l(t.arrayArticles,(function(t){return e("ArticleCard",{key:t.id,attrs:{card:t}})})),e("div",{staticClass:"articles__navigate"},[e("div",{staticClass:"articles__btns"},[e("button",{staticClass:"articles__btn",on:{click:t.getArticlesFirst}},[t._v("01")]),e("button",{staticClass:"articles__btn",on:{click:t.getArticlesSecond}},[t._v("02")]),e("button",{staticClass:"articles__btn",on:{click:t.getArticlesThird}},[t._v("03")]),e("button",{staticClass:"articles__btn",on:{click:t.showMoreArticles}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"20",viewBox:"0 0 320 512"}},[e("path",{attrs:{d:"M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"}})])])])])],2)])},q=[],I=function(){var t=this,e=t._self._c;return e("div",{staticClass:"article"},[e("div",{staticClass:"article__imageBox"},[e("img",{staticClass:"article__image",attrs:{src:i(7173)(`./${t.card.image}`),alt:"Kitchan Design"}}),e("p",{staticClass:"article__title"},[t._v("Kitchan Design")])]),e("div",{staticClass:"article__info"},[e("h4",{staticClass:"article__header"},[t._v(t._s(t.card.header)+" ")]),e("div",{staticClass:"article__nav"},[e("p",{staticClass:"article__date"},[t._v(t._s(t.card.date)+" ")]),e("div",{staticClass:"article__link",on:{click:function(e){return t.$router.push({name:"projectdetails"})}}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"52",height:"53",viewBox:"0 0 52 53",fill:"none"}},[e("circle",{attrs:{cx:"26",cy:"26.267",r:"26",fill:"#F4F0EC"}}),e("path",{attrs:{d:"M23.7714 32.9527L29.7143 26.267L23.7714 19.5813",stroke:"#292F36","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])])])])])},U=[],X={name:"ArticleCard",props:{card:{}},data(){return{}},mounted(){},methods:{}},V=X,N=(0,_.Z)(V,I,U,!1,null,"56437969",null),G=N.exports,R=i(629),E={name:"ArticlesHome",data(){return{arrayArticles:[],count:0}},mounted(){},methods:{add(){console.log(this.arrayArticles)},getArticlesFirst(){return this.arrayArticles=this.getArticlesBlog.slice(0).splice(0,2),this.count=1,this.arrayArticles},getArticlesSecond(){return this.arrayArticles=this.getArticlesBlog.slice(0).splice(2,2),this.count=2,this.arrayArticles},getArticlesThird(){return this.arrayArticles=this.getArticlesBlog.slice(0).splice(4,2),this.count=3,this.arrayArticles},showMoreArticles(){1===this.count?this.getArticlesSecond():2===this.count?this.getArticlesThird():3!==this.count&&0!==this.count||this.getArticlesFirst()}},created(){this.arrayArticles=this.getArticlesBlog},computed:{...(0,R.Se)(["getArticlesBlog"])},components:{ArticleCard:G}},W=E,z=(0,_.Z)(W,O,q,!1,null,"5eb5ad91",null),Y=z.exports,Q=function(){var t=this;t._self._c;return t._m(0)},$=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"banner"},[e("img",{staticClass:"banner__image",attrs:{src:i(9917),alt:"banner"}}),e("div",{staticClass:"banner__info"},[e("h2",{staticClass:"banner__title"},[t._v("Articles & News")]),e("p",{staticClass:"banner__subtitle"},[t._v("Home / Blog")])])])}],J={name:"VueSiteMainBlog",data(){return{}},mounted(){},methods:{}},tt=J,et=(0,_.Z)(tt,Q,$,!1,null,"05a3220c",null),it=et.exports,rt=function(){var t=this,e=t._self._c;return e("section",{staticClass:"post"},[e("h2",{staticClass:"post__title"},[t._v("Latest Post")]),e("div",{staticClass:"post__content"},[e("img",{staticClass:"post__image",attrs:{src:i(4650),alt:""}}),e("div",{staticClass:"post__info"},[e("h4",{staticClass:"post__header"},[t._v("Low Cost Latest Invented Interior Designing Ideas")]),t._m(0),e("div",{staticClass:"post__nav"},[e("p",{staticClass:"post__date"},[t._v("26 December,2022 ")]),e("div",{staticClass:"post__link",on:{click:function(e){return t.$router.push({name:"projectdetails"})}}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"52",height:"53",viewBox:"0 0 52 53",fill:"none"}},[e("circle",{attrs:{cx:"26",cy:"26.267",r:"26",fill:"#F4F0EC"}}),e("path",{attrs:{d:"M23.7714 32.9527L29.7143 26.267L23.7714 19.5813",stroke:"#292F36","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])])])])])])},st=[function(){var t=this,e=t._self._c;return e("p",{staticClass:"post__text"},[t._v("Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief. "),e("br"),t._v(" "),e("br"),t._v(" Lorem Ipsum is not simply random text. It has roots in a piece of classica. ")])}],at={name:"PostBlog",data(){return{}},mounted(){},methods:{}},ot=at,nt=(0,_.Z)(ot,rt,st,!1,null,"4cc70104",null),ct=nt.exports,lt={name:"PageBlog",data(){return{}},mounted(){},methods:{},components:{MainBlog:it,ArticlesBlog:Y,PostBlog:ct}},ut=lt,dt=(0,_.Z)(ut,T,H,!1,null,"3d035606",null),_t=dt.exports,gt=function(){var t=this,e=t._self._c;return e("div",[e("img",{staticClass:"details__banner",attrs:{src:i(7999),alt:"banner"}}),e("section",{staticClass:"details__content"},[e("section",{staticClass:"articles"},[t.buttons.kitchen?t._e():e("article",{staticClass:"building"},[e("h3",{staticClass:"building__header"},[t._v("Let’s Get Solution for Building Construction Work")]),e("img",{staticClass:"building__image",attrs:{src:i(2559),alt:"kitchen"}}),t._m(0),t._m(1),t._m(2)]),t.buttons.building?t._e():e("article",{staticClass:"design"},[e("h3",{staticClass:"design__header"},[t._v("Design sprints are great")]),e("p",{staticClass:"design__text"},[t._v("Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.")]),t._m(3),e("img",{staticClass:"design__image",attrs:{src:i(5160),alt:"kitchen"}}),e("p",{staticClass:"design__text"},[t._v("Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.")])])]),e("section",{staticClass:"tags"},[e("h4",{staticClass:"tags__header"},[t._v("Tags")]),e("button",{staticClass:"tags__btn",class:{active:t.buttons.kitchen},on:{click:t.setKitchen}},[t._v("Kitchen")]),e("button",{staticClass:"tags__btn",class:{active:t.buttons.bedroom},on:{click:t.setBedroom}},[t._v("Bedroom")]),e("button",{staticClass:"tags__btn",class:{active:t.buttons.building},on:{click:t.setBuilding}},[t._v("Building")]),e("button",{staticClass:"tags__btn",class:{active:t.buttons.architecture},on:{click:t.setArchitecture}},[t._v("Architecture")]),e("button",{staticClass:"tags__btn",class:{active:t.buttons.planning},on:{click:t.setPlanning}},[t._v("Kitchen Planning")]),e("button",{staticClass:"tags__btn",class:{active:t.buttons.bedroom},on:{click:t.setBedroom}},[t._v("Bedroom")])])])])},pt=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"building__info"},[e("p",{staticClass:"building__date"},[t._v("26 December,2022 ")]),e("p",{staticClass:"building__tags"},[t._v("Interior / Home / Decore")])])},function(){var t=this,e=t._self._c;return e("p",{staticClass:"building__text"},[t._v("Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. "),e("br"),e("br"),t._v(" Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary. ")])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"quote"},[e("div",{staticClass:"quote__content"},[e("h3",{staticClass:"quote__header"},[t._v("“")]),e("p",{staticClass:"quote__text"},[t._v("The details are not the details. "),e("br"),t._v(" They make the design. ")])])])},function(){var t=this,e=t._self._c;return e("ol",{staticClass:"design__list"},[e("li",{staticClass:"design__number"},[t._v("Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.")]),e("li",{staticClass:"design__number"},[t._v("Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.")]),e("li",{staticClass:"design__number"},[t._v("Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.")])])}],mt={name:"PageDetails",data(){return{buttons:{kitchen:!1,bedroom:!1,building:!1,architecture:!1,planning:!1}}},mounted(){},methods:{removeTag(){this.buttons.kitchen=!1,this.buttons.bedroom=!1,this.buttons.building=!1,this.buttons.architecture=!1,this.buttons.planning=!1},setKitchen(){this.removeTag(),this.buttons.kitchen=!this.buttons.kitchen},setBedroom(){this.removeTag(),this.buttons.bedroom=!this.buttons.bedroom},setArchitecture(){this.removeTag(),this.buttons.architecture=!this.buttons.architecture},setPlanning(){this.removeTag(),this.buttons.planning=!this.buttons.planning},setBuilding(){this.removeTag(),this.buttons.building=!this.buttons.building}},components:{}},ht=mt,vt=(0,_.Z)(ht,gt,pt,!1,null,"6226ffb2",null),ft=vt.exports,At=function(){var t=this,e=t._self._c;return e("div",[e("MainHome"),e("GalleryComp"),e("CounterComp"),e("ArticlesHome")],1)},Ct=[],jt=function(){var t=this,e=t._self._c;return e("section",{staticClass:"gallery"},[e("h1",{staticClass:"gallery__title"},[t._v("Follow Our Projects")]),e("p",{staticClass:"gallery__subtitle"},[t._v("It is a long established fact that a reader will be distracted by the of readable content of page lookings at its layouts points.")]),e("div",{staticClass:"gallery__cards"},t._l(t.getModernKitchen,(function(t){return e("GalleryCard",{key:t.id,attrs:{card:t}})})),1)])},bt=[],xt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"card"},[e("img",{staticClass:"card__image",attrs:{src:i(7173)(`./${t.card.image}`),alt:"Dream kitchen"}}),e("div",{staticClass:"card__content"},[e("div",{staticClass:"card__info"},[e("h4",{staticClass:"card__title"},[t._v(t._s(t.card.title))]),e("p",{staticClass:"card__text"},[t._v(t._s(t.card.subtitle))])]),e("div",{staticClass:"card__link",on:{click:function(e){return t.$router.push({name:"projectdetails"})}}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"70",height:"70",viewBox:"0 0 70 70",fill:"none"}},[e("circle",{attrs:{cx:"35",cy:"35",r:"35",fill:"#F4F0EC"}}),e("path",{attrs:{d:"M32 44L40 35L32 26",stroke:"#292F36","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])])])])},yt=[],Bt={name:"GalleryCard",props:{card:{}},data(){return{}},mounted(){},methods:{}},kt=Bt,wt=(0,_.Z)(kt,xt,yt,!1,null,"3b4f577c",null),Lt=wt.exports,Mt={name:"GalleryComp",data(){return{}},mounted(){},methods:{},computed:{...(0,R.Se)(["getModernKitchen"])},components:{GalleryCard:Lt}},Pt=Mt,Zt=(0,_.Z)(Pt,jt,bt,!1,null,"7499c888",null),Dt=Zt.exports,St=function(){var t=this;t._self._c;return t._m(0)},Ft=[function(){var t=this,e=t._self._c;return e("section",{staticClass:"counters"},[e("div",{staticClass:"counters__content"},[e("div",{staticClass:"counters__counter"},[e("h4",{staticClass:"counters__header"},[t._v("12")]),e("p",{staticClass:"counters__text"},[t._v("Years Of Experiance")])]),e("div",{staticClass:"counters__counter"},[e("h4",{staticClass:"counters__header"},[t._v("85")]),e("p",{staticClass:"counters__text"},[t._v("Success Project")])]),e("div",{staticClass:"counters__counter"},[e("h4",{staticClass:"counters__header"},[t._v("15")]),e("p",{staticClass:"counters__text"},[t._v("Active Project")])]),e("div",{staticClass:"counters__counter"},[e("h4",{staticClass:"counters__header"},[t._v("95")]),e("p",{staticClass:"counters__text"},[t._v("Happy CUstomers")])])])])}],Kt={name:"CounterComp",data(){return{}},mounted(){},methods:{}},Tt=Kt,Ht=(0,_.Z)(Tt,St,Ft,!1,null,"0316cdc6",null),Ot=Ht.exports,qt=function(){var t=this,e=t._self._c;return e("div",[e("section",{staticClass:"articles"},[e("h3",{staticClass:"articles__title"},[t._v("Articles & News")]),e("p",{staticClass:"articles__subtitle"},[t._v("It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.")]),e("div",{staticClass:"articles__cards"},t._l(t.getArticlesHome,(function(t){return e("ArticleCard",{key:t.id,attrs:{card:t}})})),1)])])},It=[],Ut={name:"ArticlesHome",data(){return{}},mounted(){},methods:{},computed:{...(0,R.Se)(["getArticlesBlog"]),getArticlesHome(){const t=this.getArticlesBlog.slice(0);return t.splice(0,3)}},components:{ArticleCard:G}},Xt=Ut,Vt=(0,_.Z)(Xt,qt,It,!1,null,"6ef24715",null),Nt=Vt.exports,Gt=function(){var t=this,e=t._self._c;return e("section",{staticClass:"main"},[e("img",{staticClass:"main__image",attrs:{src:i(294),alt:" kitchen"}}),e("div",{staticClass:"main__content"},[e("h1",{staticClass:"main__header"},[t._v("Let Your Home Be Unique")]),e("p",{staticClass:"main__subtitle"},[t._v("There are many variations of the passages of lorem Ipsum fromavailable, majority.")]),e("button",{staticClass:"main__btn",on:{click:function(e){return t.$router.push({name:"details"})}}},[t._v("Get Started "),e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"19",height:"17",viewBox:"0 0 19 17",fill:"none"}},[e("path",{attrs:{d:"M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887",stroke:"#CDA274","stroke-width":"2","stroke-linecap":"square","stroke-linejoin":"round"}})])])])])},Rt=[],Et={name:"MainComp",data(){return{}},mounted(){},methods:{}},Wt=Et,zt=(0,_.Z)(Wt,Gt,Rt,!1,null,"b17e8910",null),Yt=zt.exports,Qt={name:"PageHome",data(){return{}},mounted(){},methods:{},components:{GalleryComp:Dt,CounterComp:Ot,ArticlesHome:Nt,MainHome:Yt}},$t=Qt,Jt=(0,_.Z)($t,At,Ct,!1,null,null,null),te=Jt.exports,ee=function(){var t=this,e=t._self._c;return e("section",{staticClass:"banner"},[e("div",{staticClass:"banner__position"},[e("div",{staticClass:"banner__content"},[e("h1",{staticClass:"banner__header"},[t._v("404")]),e("p",{staticClass:"banner__text"},[t._v("We are sorry, but the page you requested was not found")]),e("button",{staticClass:"banner__btn",on:{click:function(e){return t.$router.push({name:"home"})}}},[t._v("Back To Home "),e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"19",height:"17",viewBox:"0 0 19 17",fill:"none"}},[e("path",{attrs:{d:"M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887",stroke:"#CDA274","stroke-width":"2","stroke-linecap":"square","stroke-linejoin":"round"}})])])]),e("img",{staticClass:"banner__image",attrs:{src:i(4999),alt:""}})])])},ie=[],re={name:"PageNotFound",data(){return{}},mounted(){},methods:{},components:{}},se=re,ae=(0,_.Z)(se,ee,ie,!1,null,"3c6bf247",null),oe=ae.exports,ne=function(){var t=this,e=t._self._c;return e("section",[e("MainProject"),e("ProjectGallery")],1)},ce=[],le=function(){var t=this;t._self._c;return t._m(0)},ue=[function(){var t=this,e=t._self._c;return e("section",{staticClass:"banner"},[e("img",{staticClass:"banner__image",attrs:{src:i(4674),alt:"banner"}}),e("div",{staticClass:"banner__info"},[e("h2",{staticClass:"banner__title"},[t._v("Our Project")]),e("p",{staticClass:"banner__subtitle"},[t._v("Home / Project")])])])}],de={name:"VueSiteMainProject",data(){return{}},mounted(){},methods:{}},_e=de,ge=(0,_.Z)(_e,le,ue,!1,null,"e1ef08f8",null),pe=ge.exports,me=function(){var t=this,e=t._self._c;return e("section",{staticClass:"content"},[e("div",{staticClass:"categories"},[e("button",{staticClass:"categories__btn",class:{categories__btn_active:t.isActiveBathroom},on:{click:function(e){return t.activateBtn("isActiveBathroom")}}},[t._v("Bathroom")]),e("button",{staticClass:"categories__btn",class:{categories__btn_active:t.isActiveBedRoom},on:{click:function(e){return t.activateBtn("isActiveBedRoom")}}},[t._v("Bed Room")]),e("button",{staticClass:"categories__btn",class:{categories__btn_active:t.isActiveKitchan},on:{click:function(e){return t.activateBtn("isActiveKitchan")}}},[t._v("Kitchan")]),e("button",{staticClass:"categories__btn",class:{categories__btn_active:t.isActiveLivingArea},on:{click:function(e){return t.activateBtn("isActiveLivingArea")}}},[t._v("Living Area")])]),e("div",{staticClass:"cards",class:{cards__small:t.isTenCards,cards__small2:t.isSmallCards}},t._l(t.arrayCards,(function(t){return e("ProjectCard",{key:t.id,staticClass:"card",attrs:{card:t}})})),1),e("div",{staticClass:"content__btns"},[e("button",{staticClass:"content__btn",on:{click:t.getCardsFirst}},[t._v("01")]),e("button",{staticClass:"content__btn",on:{click:t.getCardsSecond}},[t._v("02")]),e("button",{staticClass:"content__btn",on:{click:t.getCardsThird}},[t._v("03")]),e("button",{staticClass:"content__btn",on:{click:t.showMoreCards}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"20",viewBox:"0 0 320 512"}},[e("path",{attrs:{d:"M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"}})])])])])},he=[],ve=function(){var t=this,e=t._self._c;return e("div",{staticClass:"card"},[e("img",{staticClass:"card__image",attrs:{src:i(9666)(`./${t.card.image}`),alt:""}}),e("div",{staticClass:"card__content"},[e("div",{staticClass:"card__info"},[e("h4",{staticClass:"card__title"},[t._v(t._s(t.card.header))]),e("p",{staticClass:"card__subtitle"},[t._v(t._s(t.card.text))])]),e("div",{staticClass:"card__link",on:{click:function(e){return t.$router.push({name:"projectdetails"})}}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"52",height:"53",viewBox:"0 0 52 53",fill:"none"}},[e("circle",{attrs:{cx:"26",cy:"26.267",r:"26",fill:"#F4F0EC"}}),e("path",{attrs:{d:"M23.7714 32.9527L29.7143 26.267L23.7714 19.5813",stroke:"#292F36","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])])])])},fe=[],Ae={name:"ProjectCard",props:{card:{}},data(){return{}},mounted(){},methods:{}},Ce=Ae,je=(0,_.Z)(Ce,ve,fe,!1,null,"51dbc68f",null),be=je.exports,xe={name:"ProjectGallery",data(){return{arrayCards:[],arrayForNextBtn:[],count:0,isActiveBathroom:!1,isActiveBedRoom:!0,isActiveKitchan:!1,isActiveLivingArea:!1,isTenCards:!1,isSmallCards:!1,isActiveBtn:!1}},mounted(){},methods:{activateBtn(t){this.isActiveBathroom=!1,this.isActiveBedRoom=!1,this.isActiveKitchan=!1,this.isActiveLivingArea=!1,"isActiveBathroom"===t?this.isActiveBathroom=!0:"isActiveBedRoom"===t?this.isActiveBedRoom=!0:"isActiveKitchan"===t?this.isActiveKitchan=!0:"isActiveLivingArea"===t&&(this.isActiveLivingArea=!0),this.ChangeArray()},ChangeArray(){this.isActiveBathroom?this.arrayCards=this.getProjectBathroom:this.isActiveBedRoom?this.arrayCards=this.getProjectBedroom:this.isActiveKitchan?this.arrayCards=this.getProjectKitchen:this.isActiveLivingArea&&(this.arrayCards=this.getProjectLivingArea),this.arrayForNextBtn=this.arrayCards.slice(0)},getCardsFirst(){return this.arrayCards=this.arrayForNextBtn.slice(0).splice(0,2),this.count=1,this.isTenCards=!0,this.arrayCards},getCardsSecond(){return this.arrayCards=this.arrayForNextBtn.slice(0).splice(2,2),this.count=2,this.isSmallCards=!0,this.arrayCards},getCardsThird(){return this.arrayCards=this.arrayForNextBtn.slice(0).splice(4,2),this.count=3,this.isTenCards=!0,this.arrayCards},showMoreCards(){1===this.count?this.getCardsSecond():2===this.count?this.getCardsThird():3!==this.count&&0!==this.count||this.getCardsFirst()}},created(){this.arrayCards=this.getProjectBedroom,this.isTenCards=!1,this.isSmallCards=!1},computed:{...(0,R.Se)(["getProjectBedroom","getProjectKitchen","getProjectBathroom","getProjectLivingArea"])},components:{ProjectCard:be}},ye=xe,Be=(0,_.Z)(ye,me,he,!1,null,"fcdbd508",null),ke=Be.exports,we={name:"PageProject",data(){return{}},mounted(){},methods:{},components:{MainProject:pe,ProjectGallery:ke}},Le=we,Me=(0,_.Z)(Le,ne,ce,!1,null,"6326404f",null),Pe=Me.exports,Ze=function(){var t=this,e=t._self._c;return e("section",{staticClass:"details"},[e("img",{staticClass:"details__banner",attrs:{src:i(8512),alt:"banner"}}),e("section",{staticClass:"details__content"},[t._m(0),e("div",{staticClass:"slider"},[e("img",{staticClass:"slider__image",attrs:{src:i(7173)(`./${t.getSlider[t.counterSlide].image}`)}}),e("a",{attrs:{href:i(7173)(`./${t.getSlider[t.counterSlide].image}`)}},[e("svg",{staticClass:"slider__zoom",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"172",height:"172",viewBox:"0 0 172 172",fill:"none"}},[e("g",{attrs:{filter:"url(#filter0_d_1418_52)"}},[e("circle",{attrs:{cx:"86",cy:"76",r:"66",fill:"white"}}),e("path",{attrs:{d:"M104.433 90.2861L96.0452 81.8984C98.0646 79.21 99.1547 75.9378 99.151 72.5755C99.151 63.9872 92.1638 57 83.5755 57C74.9872 57 68 63.9872 68 72.5755C68 81.1638 74.9872 88.151 83.5755 88.151C86.9378 88.1547 90.21 87.0646 92.8984 85.0452L101.286 93.4329C101.711 93.8125 102.264 94.0151 102.834 93.9991C103.403 93.9832 103.945 93.7499 104.347 93.3472C104.75 92.9445 104.983 92.403 104.999 91.8337C105.015 91.2644 104.812 90.7107 104.433 90.2861ZM72.4501 72.5755C72.4501 70.3751 73.1026 68.2242 74.3251 66.3946C75.5476 64.565 77.2851 63.1391 79.318 62.297C81.3509 61.455 83.5879 61.2346 85.746 61.6639C87.9041 62.0932 89.8864 63.1528 91.4423 64.7087C92.9983 66.2646 94.0578 68.247 94.4871 70.4051C94.9164 72.5632 94.6961 74.8001 93.854 76.833C93.012 78.8659 91.586 80.6035 89.7564 81.8259C87.9269 83.0484 85.7759 83.7009 83.5755 83.7009C80.626 83.6974 77.7982 82.5241 75.7126 80.4384C73.627 78.3528 72.4537 75.5251 72.4501 72.5755Z",fill:"#CDA274"}})]),e("defs",[e("filter",{attrs:{id:"filter0_d_1418_52",x:"0",y:"0",width:"172",height:"172",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB"}},[e("feFlood",{attrs:{"flood-opacity":"0",result:"BackgroundImageFix"}}),e("feColorMatrix",{attrs:{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}}),e("feOffset",{attrs:{dy:"10"}}),e("feGaussianBlur",{attrs:{stdDeviation:"10"}}),e("feComposite",{attrs:{in2:"hardAlpha",operator:"out"}}),e("feColorMatrix",{attrs:{type:"matrix",values:"0 0 0 0 0.752941 0 0 0 0 0.752941 0 0 0 0 0.752941 0 0 0 0.25 0"}}),e("feBlend",{attrs:{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_1418_52"}}),e("feBlend",{attrs:{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_1418_52",result:"shape"}})],1)])])]),e("button",{staticClass:"slider__btn",attrs:{alt:"interier"},on:{click:t.clickSlide}},[e("img",{staticClass:"slider__next",attrs:{src:i(791),alt:"next"}})])])])])},De=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"details__info"},[e("h3",{staticClass:"details__header"},[t._v("Minimal Look Bedrooms")]),e("p",{staticClass:"details__text"},[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. "),e("br"),e("br"),t._v(" In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor. ")])])}],Se={name:"ProjectDetails",data(){return{counterSlide:0}},mounted(){},methods:{clickSlide(){this.counterSlide==this.getSlider.length-1?this.counterSlide=0:this.counterSlide++}},computed:{...(0,R.Se)(["getSlider"])},components:{}},Fe=Se,Ke=(0,_.Z)(Fe,Ze,De,!1,null,"49d6ea75",null),Te=Ke.exports;r.ZP.use(K.ZP);const He=[{path:"/",name:"home",component:te},{path:"/blog",name:"blog",component:_t},{path:"/details",name:"details",component:ft},{path:"/project",name:"project",component:Pe},{path:"/projectdetails",name:"projectdetails",component:Te},{path:"*",name:"404",component:oe}],Oe=new K.ZP({mode:"history",base:"/Vue_site/dist/",routes:He});var qe=Oe;r.ZP.use(R.ZP);var Ie=new R.ZP.Store({state:{modernKitchen:[{title:"Modern Kitchen",subtitle:"Decor / Artchitecture",image:"card__1.jpg"},{title:"Modern Kitchen",subtitle:"Decor / Artchitecture",image:"card__2.jpg"},{title:"Modern Kitchen",subtitle:"Decor / Artchitecture",image:"card__3.jpg"},{title:"Modern Kitchen",subtitle:"Decor / Artchitecture",image:"card__4.jpg"}],articlesBlog:[{header:"Let’s Get Solution For Building Construction Work",date:"26 December,2022",image:"article_1.jpg"},{header:"Low Cost Latest Invented Interior Designing ",date:"22 December,2022",image:"article_2.jpg"},{header:"Best For Any Office & Business Interior",date:"25 December,2022",image:"article_3.jpg"},{header:"Let’s Get Solution For Building Construction Work",date:"26 December,2022",image:"article_4.jpg"},{header:"Low Cost Latest Invented Interior Designing ",date:"22 December,2022",image:"article_5.jpg"},{header:"Best For Any Office & Business Interior",date:"25 December,2022",image:"article_6.jpg"}],slider:[{id:1,image:"projectDetails_slider1.jpg"},{id:2,image:"projectDetails_slider2.jpg"},{id:3,image:"projectDetails_slider3.jpg"}],projectBedroom:[{header:"Minimal Bedroom",text:"Decor / Artchitecture",image:"project_grid1.jpg"},{header:"Minimal Bedroom",text:"Decor / Artchitecture",image:"project_grid2.jpg"},{header:"Classic Minimal Bedroom",text:"Decor / Artchitecture",image:"project_grid3.jpg"},{header:"Modern Bedroom",text:"Decor / Artchitecture",image:"project_grid4.jpg"},{header:"Minimal Bedroom table",text:"Decor / Artchitecture",image:"project_grid5.jpg"},{header:"System Table",text:"Decor / Artchitecture",image:"project_grid6.jpg"},{header:"Modern Medroom",text:"Decor / Artchitecture",image:"project_grid7.jpg"},{header:"Modern Medroom",text:"Decor / Artchitecture",image:"project_grid8.jpg"}],projectKitchen:[{header:"Minimal Kitchen",text:"Kitchen / Artchitecture",image:"project_grid1.jpg"},{header:"Minimal Kitchen",text:"Kitchen / Artchitecture",image:"project_grid2.jpg"},{header:"Classic Minimal Kitchen",text:"Kitchen / Artchitecture",image:"project_grid3.jpg"},{header:"Modern Kitchen",text:"Kitchen / Artchitecture",image:"project_grid4.jpg"},{header:"Minimal Kitchen table",text:"Kitchen / Artchitecture",image:"project_grid5.jpg"},{header:"System Table",text:"Kitchen / Artchitecture",image:"project_grid6.jpg"},{header:"Modern Kitchen",text:"Kitchen / Artchitecture",image:"project_grid7.jpg"},{header:"Modern Kitchen",text:"Kitchen / Artchitecture",image:"project_grid8.jpg"}],projectBathroom:[{header:"Minimal Bathroom",text:"Bathroom / Artchitecture",image:"project_grid1.jpg"},{header:"Minimal Bathroom",text:"Bathroom / Artchitecture",image:"project_grid2.jpg"},{header:"Classic Minimal Bathroom",text:"Bathroom / Artchitecture",image:"project_grid3.jpg"},{header:"Modern Bathroom",text:"Bathroom / Artchitecture",image:"project_grid4.jpg"},{header:"Minimal Bathroom table",text:"Bathroom / Artchitecture",image:"project_grid5.jpg"},{header:"System Table",text:"Bathroom / Artchitecture",image:"project_grid6.jpg"},{header:"Modern Bathroom",text:"Bathroom / Artchitecture",image:"project_grid7.jpg"},{header:"Modern Bathroom",text:"Bathroom / Artchitecture",image:"project_grid8.jpg"}],projectLivingArea:[{header:"Minimal Living Area",text:"Living Area / Artchitecture",image:"project_grid1.jpg"},{header:"Minimal Living Area",text:"Living Area / Artchitecture",image:"project_grid2.jpg"},{header:"Classic Minimal Living Area",text:"Living Area / Artchitecture",image:"project_grid3.jpg"},{header:"Modern Living Area",text:"Living Area / Artchitecture",image:"project_grid4.jpg"},{header:"Minimal Living Area table",text:"Living Area / Artchitecture",image:"project_grid5.jpg"},{header:"System Table",text:"Living Area / Artchitecture",image:"project_grid6.jpg"},{header:"Modern Living Area",text:"Living Area / Artchitecture",image:"project_grid7.jpg"},{header:"Modern Living Area",text:"Living Area / Artchitecture",image:"project_grid8.jpg"}]},getters:{getModernKitchen:t=>t.modernKitchen,getArticlesBlog:t=>t.articlesBlog,getSlider:t=>t.slider,getProjectBedroom:t=>t.projectBedroom,getProjectKitchen:t=>t.projectKitchen,getProjectBathroom:t=>t.projectBathroom,getProjectLivingArea:t=>t.projectLivingArea},mutations:{},actions:{},modules:{}});r.ZP.use(K.ZP),r.ZP.config.productionTip=!1,new r.ZP({router:qe,store:Ie,render:t=>t(F)}).$mount("#app")},9666:function(t,e,i){var r={"./project_grid1.jpg":7024,"./project_grid2.jpg":3686,"./project_grid3.jpg":970,"./project_grid4.jpg":7800,"./project_grid5.jpg":5831,"./project_grid6.jpg":9116,"./project_grid7.jpg":7519,"./project_grid8.jpg":2073};function s(t){var e=a(t);return i(e)}function a(t){if(!i.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}s.keys=function(){return Object.keys(r)},s.resolve=a,t.exports=s,s.id=9666},7173:function(t,e,i){var r={"./Line.svg":8932,"./article_1.jpg":3543,"./article_2.jpg":8804,"./article_3.jpg":8375,"./article_4.jpg":5693,"./article_5.jpg":5349,"./article_6.jpg":9141,"./card__1.jpg":9633,"./card__2.jpg":4025,"./card__3.jpg":1490,"./card__4.jpg":8009,"./details_article1.jpg":2559,"./details_article2.jpg":5160,"./details_banner.jpg":7999,"./main_blog.jpg":9917,"./main_home.png":294,"./notFound.jpg":4999,"./post_blog.jpg":4650,"./projectDetails_banner.jpg":8512,"./projectDetails_slider1.jpg":4869,"./projectDetails_slider2.jpg":2751,"./projectDetails_slider3.jpg":1392,"./projectDetails_sliderBtn.png":791,"./project_banner.jpg":4674,"./project_grid/project_grid1.jpg":7024,"./project_grid/project_grid2.jpg":3686,"./project_grid/project_grid3.jpg":970,"./project_grid/project_grid4.jpg":7800,"./project_grid/project_grid5.jpg":5831,"./project_grid/project_grid6.jpg":9116,"./project_grid/project_grid7.jpg":7519,"./project_grid/project_grid8.jpg":2073,"./social_in.svg":7582,"./social_twitter.svg":996};function s(t){var e=a(t);return i(e)}function a(t){if(!i.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}s.keys=function(){return Object.keys(r)},s.resolve=a,t.exports=s,s.id=7173},8932:function(t,e,i){"use strict";t.exports=i.p+"img/Line.5989ccce.svg"},7582:function(t,e,i){"use strict";t.exports=i.p+"img/social_in.e55dfc92.svg"},996:function(t,e,i){"use strict";t.exports=i.p+"img/social_twitter.ad8ca39d.svg"},3543:function(t,e,i){"use strict";t.exports=i.p+"img/article_1.e483aa42.jpg"},8804:function(t,e,i){"use strict";t.exports=i.p+"img/article_2.934ffb25.jpg"},8375:function(t,e,i){"use strict";t.exports=i.p+"img/article_3.234f8268.jpg"},5693:function(t,e,i){"use strict";t.exports=i.p+"img/article_4.be3274c7.jpg"},5349:function(t,e,i){"use strict";t.exports=i.p+"img/article_5.1fbf868d.jpg"},9141:function(t,e,i){"use strict";t.exports=i.p+"img/article_6.939a0f8e.jpg"},9633:function(t,e,i){"use strict";t.exports=i.p+"img/card__1.8bbd4f72.jpg"},4025:function(t,e,i){"use strict";t.exports=i.p+"img/card__2.c31dcb6b.jpg"},1490:function(t,e,i){"use strict";t.exports=i.p+"img/card__3.5e79e65c.jpg"},8009:function(t,e,i){"use strict";t.exports=i.p+"img/card__4.b5e1944b.jpg"},2559:function(t,e,i){"use strict";t.exports=i.p+"img/details_article1.9fda845c.jpg"},5160:function(t,e,i){"use strict";t.exports=i.p+"img/details_article2.34df3653.jpg"},7999:function(t,e,i){"use strict";t.exports=i.p+"img/details_banner.360b1063.jpg"},9917:function(t,e,i){"use strict";t.exports=i.p+"img/main_blog.2f98630f.jpg"},294:function(t,e,i){"use strict";t.exports=i.p+"img/main_home.42b6fb81.png"},4999:function(t,e,i){"use strict";t.exports=i.p+"img/notFound.ac60909f.jpg"},4650:function(t,e,i){"use strict";t.exports=i.p+"img/post_blog.16d8ff2a.jpg"},8512:function(t,e,i){"use strict";t.exports=i.p+"img/projectDetails_banner.405ae8d7.jpg"},4869:function(t,e,i){"use strict";t.exports=i.p+"img/projectDetails_slider1.9f95d7d0.jpg"},2751:function(t,e,i){"use strict";t.exports=i.p+"img/projectDetails_slider2.f4184eeb.jpg"},1392:function(t,e,i){"use strict";t.exports=i.p+"img/projectDetails_slider3.f07a92dd.jpg"},791:function(t){"use strict";t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAAB/CAYAAADGvR0TAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAS9SURBVHgB7dpbiFVVHMfxX2ZlZfebXYdShOwiUT3UQzelt4rqIaJIKiGCHqKrgUFBBj0UQVAQEUhhFFEEpkHRgxQVkpSlFVpimFlW1tRkpU39f+y12cdxHNeaMx71nO8Hfpyjs/6zz9lr77XXXnskAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYE+xj3a/SZFZkXMjkyP/RtZG3ou8HNmgsXNQ5MLI5ZG+yPjID5EPI+9E1mvsHBA5LzIjMjVycGRTZHnkzcgq9bCJkecig5H/dpC/Ik+o6rR2uJOvj6wYYXvumMcjx6l950Q+UHUgD7ct/78P7D71IJ8JX6vZGQORBZGHI/Mir0f+aPn5Z5GTNDo+yBaq6Yi/I4si81OWDNmWP9ckjd79Lb/P2/wq8mrk+cjiyC8t2/IId4F6iM+sb9XsnLmR/YZpd1jkscjW1HZl5BCV8Rn/tpqd7c4+Yph2PrAeUHUJcDuPEKMZbe5WM7K8H5mpavhvNSEyO/JTaufL2lnqEW+oOQMvymh/TWRLqnlQZe5T0/H3ZLSfHlmX2i9SmWmRX1PtW5FDd9Leo9/a1N6jw+Hqcp5s1Z1xW0Hd3FSzMXJCZo13ft0Z85XvZjWf8ZKCuvqg/iZyYmaND/5/Ut2d6nKe5PiLfqyyOw0PnetT7e2ZNbeoGWFyDxilz7U81b6QWTNFzZziOpVZoGZeM15dyl9sjfKH4KGeSrWvZLZ/Uc0QXGpOqv0us/2tqf3P2v4avzMzUq0vbZPVQePUOZ7AHZXef6lym9LrlMz29Y78ROU+Ta8eMQ7MaF9/pi9UjTQlPJHdrOrk6NrOH6dme1tUrt6puUNjfQZuVrk/h/k9I5kwTF0ur2VsTe/bXc8o0snO/z3Sn973qVx9VuSu+K1LryerXF3jjunPaP9jevVIsa/KeJY/Mb3fqA7qZOd7R65M769QGZ9ZF6f3SzNrlqVX3yqWLmPPTK++ZAxmtK+3dVpKCV/z/fm8f1aoi9UzcH/Rswvqbkh1Hh7Pz6yZquaWbbbynaFq+HbdXZk1Xjiq1wfmKJ9Pvs9T3WJ1OU/6Vqv6sp4cHZ9R43vmValmocrU995ePj49o70npEtTje9MjlS+h1KdLxPTMmseUXOAXqYe4CHfM/f63vbUEdr6LK/PDN92lQ6pXratF3q8+DJ9hLa+zi9RszZwrcr4QFmW6r0mMdKavYf5eWo6Pnc9oSv4Cdtvqr64X5+O3Kjquu4Ov0rVDulPbTyhulSj41XFgfR7PPN/KXKlqsuCDzyfcU+qmkjWHX+vRscT2e/VXKL86HaWqkuJf3Zs5CZVB33d8X6cXLo2sNdzp7TuhB3Fq4Fnqj3e+auH/N5Bbf9416OLD8x2/s7hFDUjyNDttf7bB+Szkf3Vo7yA4rX0d7XtY1U/8XotcrXG7o7Ew/IdkY/UjASO19b9YOVR5c1Bcvjg8V2GVxf7W7bl9Y01kWeUPy/YZfaEv+Sp+bP4YYyHywHtOt7OMZGjVS0Y+fn6BjULLWPN9/C+//cCjtc6fFdQugoIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAdLn/AX6zPwV9vcJoAAAAAElFTkSuQmCC"},4674:function(t,e,i){"use strict";t.exports=i.p+"img/project_banner.c58b4244.jpg"},7024:function(t,e,i){"use strict";t.exports=i.p+"img/project_grid1.aff3e520.jpg"},3686:function(t,e,i){"use strict";t.exports=i.p+"img/project_grid2.98325619.jpg"},970:function(t,e,i){"use strict";t.exports=i.p+"img/project_grid3.b219a54e.jpg"},7800:function(t,e,i){"use strict";t.exports=i.p+"img/project_grid4.ab026e1f.jpg"},5831:function(t,e,i){"use strict";t.exports=i.p+"img/project_grid5.2d86a2cc.jpg"},9116:function(t,e,i){"use strict";t.exports=i.p+"img/project_grid6.453323c3.jpg"},7519:function(t,e,i){"use strict";t.exports=i.p+"img/project_grid7.dafdeb41.jpg"},2073:function(t,e,i){"use strict";t.exports=i.p+"img/project_grid8.35781d90.jpg"}},e={};function i(r){var s=e[r];if(void 0!==s)return s.exports;var a=e[r]={exports:{}};return t[r].call(a.exports,a,a.exports,i),a.exports}i.m=t,function(){var t=[];i.O=function(e,r,s,a){if(!r){var o=1/0;for(u=0;u<t.length;u++){r=t[u][0],s=t[u][1],a=t[u][2];for(var n=!0,c=0;c<r.length;c++)(!1&a||o>=a)&&Object.keys(i.O).every((function(t){return i.O[t](r[c])}))?r.splice(c--,1):(n=!1,a<o&&(o=a));if(n){t.splice(u--,1);var l=s();void 0!==l&&(e=l)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[r,s,a]}}(),function(){i.d=function(t,e){for(var r in e)i.o(e,r)&&!i.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){i.p="/Vue_site/dist/"}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,r){var s,a,o=r[0],n=r[1],c=r[2],l=0;if(o.some((function(e){return 0!==t[e]}))){for(s in n)i.o(n,s)&&(i.m[s]=n[s]);if(c)var u=c(i)}for(e&&e(r);l<o.length;l++)a=o[l],i.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return i.O(u)},r=self["webpackChunkvue_site"]=self["webpackChunkvue_site"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=i.O(void 0,[998],(function(){return i(3955)}));r=i.O(r)})();
//# sourceMappingURL=app.c419e36c.js.map