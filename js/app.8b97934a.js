(function(){var t={4489:function(t,e,s){"use strict";var r=s(9242),i=s(3396);const o={class:"bg-hero-pattern"},a={class:"py-16"},n=(0,i._)("div",{class:"lg:px-32 px-8 lg:text-4xl text-2xl font-medium"},[(0,i._)("h2",{class:"text-[#333333]"},"Browser Our Category"),(0,i._)("h3",{class:"text-[#8BAC3E]"},"Receipt")],-1),l={class:"lg:px-32 px-8 lg:py-28 lg:pt-0 lg:pb-0 py-0 pt-10 pb-32"},c=(0,i._)("div",{class:"lg:text-4xl text-2xl font-medium"},[(0,i._)("h2",{class:"text-[#333333]"},"Browser Our Trending "),(0,i._)("h3",{class:"text-[#8BAC3E]"},"Receipt")],-1),u={class:"grid lg:grid-cols-4 grid-cols-1 lg:gap-4 gap-5 pt-14"},p=(0,i._)("div",{class:"lg:flex hidden justify-center py-10"},[(0,i._)("button",{class:"flex bg-[#8BAC3E] rounded-full text-white px-5 py-2 justify-center"}," All Receipt ")],-1);function g(t,e,s,r,g,d){const h=(0,i.up)("NavigationTop"),f=(0,i.up)("BannerDesktop"),v=(0,i.up)("BannerMobile"),m=(0,i.up)("CarouselComponent"),x=(0,i.up)("CardComponent"),w=(0,i.up)("FooterComponent");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",o,[(0,i.Wm)(h),(0,i.Wm)(f),(0,i.Wm)(v)]),(0,i._)("div",a,[n,(0,i.Wm)(m,{categories:g.categories},null,8,["categories"])]),(0,i._)("div",l,[c,(0,i._)("div",u,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(g.receipts,((t,e)=>((0,i.wg)(),(0,i.j4)(x,{key:e,image:t.image,title:t.title,category:t.category,rate:t.rate,color:t.color},null,8,["image","title","category","rate","color"])))),128))]),p]),(0,i.Wm)(w)],64)}var d=s(1546);const h={class:""},f=(0,i.uE)('<div class="flex justify-between justify-center w-full lg:gap-20 gap-5 lg:px-32 px-8 py-10"><div class="flex lg:w-1/4 w-1/2"><img alt="Elemes logo" src="'+d+'"></div><div class="lg:flex hidden justify-around items-center w-2/4 text-sm"><a href="#"> Home </a><a href="#"> About </a><div class="relative"><a href="#"> Promotions </a><div class="absolute -top-5 right-0 bg-[#E7462D] rounded-2xl px-2 text-[8px] text-white uppercase">hot</div></div><a href="#"> Blogs </a><a href="#"> Contact Us </a></div><div class="flex justify-around justify-center items-center lg:w-1/4 w-1/2"><a href="" class="lg:block hidden w-1/3 text-sm"> Masuk </a><a href="lg:w-2/3 w-full"><div class="flex bg-[#8BAC3E] rounded-full text-white px-5 py-2 justify-center w-full text-sm"> Daftar Sekarang </div></a></div></div>',1),v=[f];function m(t,e){return(0,i.wg)(),(0,i.iD)("div",h,v)}var x=s(89);const w={},b=(0,x.Z)(w,[["render",m]]);var C=b,y=s(7139);const k=["src","alt"],_={class:"flex flex-col gap-2"},j={class:"text-2xl pt-5 font-medium text-black"},E={class:"text-[#8BAC3E] text-lg font-medium"};function D(t,e,s,r,o,a){const n=(0,i.up)("RatingComponent");return(0,i.wg)(),(0,i.iD)("div",{class:(0,y.C_)(["card hover:bg-small-pattern cursor-pointer",{"card--blue":"blue"==s.color,"card--gray":"gray"==s.color,"card--yellow":"yellow"==s.color,"card--purple":"purple"==s.color,"card--broken-white":"broken-white"==s.color}])},[(0,i._)("img",{src:a.getReceiptImgUrl(s.image),class:"w-24 h-24 object-cover rounded-lg",alt:s.title},null,8,k),(0,i._)("div",_,[(0,i._)("h2",j,(0,y.zw)(s.title),1),(0,i._)("span",E,(0,y.zw)(s.category),1),(0,i.Wm)(n,{rate:s.rate},null,8,["rate"])])],2)}var z=s(8944),B=s(8655);const M={class:"flex"};function H(t,e,s,r,o,a){return(0,i.wg)(),(0,i.iD)("div",M,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(parseInt(s.rate),(t=>((0,i.wg)(),(0,i.iD)("img",{key:t,src:z,alt:""})))),128)),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(5-parseInt(s.rate),(t=>((0,i.wg)(),(0,i.iD)("img",{key:t,src:B,alt:""})))),128))])}var A={props:["rate"]};const Z=(0,x.Z)(A,[["render",H]]);var S=Z,L={components:{RatingComponent:S},props:["image","title","category","rate","color"],methods:{getReceiptImgUrl(t){return s(5459)("./"+t)}}};const O=(0,x.Z)(L,[["render",D]]);var T=O,Y=s(8192);const X={class:"carousel lg:ml-32 ml-0 mt-11"},F={class:"flex flex-col justify-center items-center text-black"},R=["src","alt"],K={class:"mt-5 font-medium text-base"},U={class:"mt-1 font-normal text-sm"},$={class:"lg:flex hidden absolute right-0 px-32 gap-3 mt-[46px]"},P=(0,i._)("img",{src:Y,class:"w-[25px]",alt:""},null,-1),I=(0,i._)("span",{class:"uppercase"},"Prev",-1),N=[P,I],W=(0,i._)("span",{class:"uppercase"},"Next",-1),V=(0,i._)("img",{src:Y,class:"w-[25px] rotate-180",alt:""},null,-1),G=[W,V];function J(t,e,s,r,o,a){return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",X,[(0,i._)("div",{class:"flex inner cursor-pointer",ref:"inner",style:(0,y.j5)(o.innerStyles)},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.cards,((e,s)=>((0,i.wg)(),(0,i.iD)("div",{key:s,class:(0,y.C_)(["shrink-0 card-carousel hover:bg-small-pattern",{"card--blue":"blue"==e.color,"card--gray":"gray"==e.color,"card--yellow":"yellow"==e.color,"card--purple":"purple"==e.color,"card--broken-white":"broken-white"==e.color}])},[(0,i._)("div",F,[(0,i._)("img",{src:a.getImgUrl(e.icon),class:"w-[47px] h-auto object-cover rounded-lg",alt:t.title},null,8,R),(0,i._)("span",K,(0,y.zw)(e.title),1),(0,i._)("span",U,(0,y.zw)(e.total),1)])],2)))),128))],4)]),(0,i._)("div",$,[(0,i._)("button",{onClick:e[0]||(e[0]=(...t)=>a.prev&&a.prev(...t)),class:"flex justify-center items-center justify-around bg-[#8BAC3E] w-28 rounded-full text-white px-3 py-2"},N),(0,i._)("button",{onClick:e[1]||(e[1]=(...t)=>a.next&&a.next(...t)),class:"flex justify-center items-center justify-around bg-[#8BAC3E] w-28 rounded-full text-white px-3 py-2"},G)])],64)}s(7658);var q={props:{categories:{type:Array,required:!0}},data(){return{cards:this.categories,innerStyles:{},step:"",transitioning:!1,isDragging:!1,startX:null,startY:null}},mounted(){const t=this.cards,e=[...t];new Promise((s=>{while(e.length<8)e.push(t[(e.length-t.length)%t.length]);this.cards=e,s()})).then((()=>{this.cards.unshift(this.cards.pop()),this.setStep(),this.resetTranslate(),this.$refs.inner.addEventListener("touchstart",this.dragStart),this.$refs.inner.addEventListener("touchmove",this.dragMove),this.$refs.inner.addEventListener("touchend",this.dragEnd),this.$refs.inner.addEventListener("mousedown",this.dragStart),this.$refs.inner.addEventListener("mousemove",this.dragMove),this.$refs.inner.addEventListener("mouseup",this.dragEnd)}))},methods:{setStep(){const t=this.$refs.inner.scrollWidth,e=this.cards.length;this.step=t/e+"px"},next(){this.transitioning||(this.transitioning=!0,this.moveLeft(),this.afterTransition((()=>{const t=this.cards.shift();this.cards.push(t),this.resetTranslate(),this.transitioning=!1})))},prev(){this.transitioning||(this.transitioning=!0,this.moveRight(),this.afterTransition((()=>{const t=this.cards.pop();this.cards.unshift(t),this.resetTranslate(),this.transitioning=!1})))},moveLeft(){this.innerStyles={transform:`translateX(-${this.step})\n                    translateX(-${this.step})`}},moveRight(){this.innerStyles={transform:`translateX(${this.step})\n                    translateX(-${this.step})`}},afterTransition(t){const e=()=>{t(),this.$refs.inner.removeEventListener("transitionend",e)};this.$refs.inner.addEventListener("transitionend",e)},resetTranslate(){this.innerStyles={transition:"none",transform:`translateX(-${this.step})`}},getImgUrl(t){return s(4449)("./"+t)},dragStart(t){this.transitioning=!1,"touchstart"===t.type?(this.startX=t.touches[0].pageX,this.startY=t.touches[0].pageY):(this.startX=t.clientX,this.startY=t.clientY)},dragMove(t){if(!this.startX||!this.startY||this.transitioning)return;let e,s,r,i;"touchmove"===t.type?(e=t.touches[0].pageX,s=t.touches[0].pageY,r=this.startX-e,i=this.startY-s):(e=t.clientX,s=t.clientY,r=this.startX-e,i=this.startY-s),Math.abs(r)>Math.abs(i)&&(t.preventDefault(),this.direction=r>0?"left":"right",this.innerStyles={transition:"none",transform:`translateX(-${this.step}px) translateX(${this.cardTranslate-r}px)`}),this.startX&&this.startY&&!this.transitioning&&("left"===this.direction?this.next():"right"===this.direction&&this.prev(),this.startX=null,this.startY=null,this.direction=null)},dragEnd(){this.startX=null,this.startY=null,this.direction=null}}};const Q=(0,x.Z)(q,[["render",J]]);var tt=Q;const et=(0,i.uE)('<div class="lg:block hidden px-16 py-10"><div class="px-16 py-10 flex gap-24 justify-between bg-[#F9FFF6] rounded-2xl"><div class="flex flex-col w-[40%] gap-5"><img alt="Elemes logo" src="'+d+'" class="w-52 h-auto"><p class="text-sm text-[#757575]">Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, Kecamatan Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12950</p><div class="flex gap-2 pt-5"><div class="flex justify-center items-center h-8 w-8 p-2 rounded-full bg-[#ffffff] hover:bg-[#8BAC3E] group"><svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 3.66675L8.075 8.05008C8.34888 8.23281 8.67075 8.33033 9 8.33033C9.32925 8.33033 9.65112 8.23281 9.925 8.05008L16.5 3.66675M3.16667 12.8334H14.8333C15.2754 12.8334 15.6993 12.6578 16.0118 12.3453C16.3244 12.0327 16.5 11.6088 16.5 11.1667V2.83341C16.5 2.39139 16.3244 1.96746 16.0118 1.6549C15.6993 1.34234 15.2754 1.16675 14.8333 1.16675H3.16667C2.72464 1.16675 2.30072 1.34234 1.98816 1.6549C1.67559 1.96746 1.5 2.39139 1.5 2.83341V11.1667C1.5 11.6088 1.67559 12.0327 1.98816 12.3453C2.30072 12.6578 2.72464 12.8334 3.16667 12.8334Z" stroke="#8BAC3E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:stroke-white"></path></svg></div><div class="flex justify-center items-center h-8 w-8 p-2 rounded-full bg-[#ffffff] hover:bg-[#8BAC3E] group"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.98816 1.98816C1.67559 2.30072 1.5 2.72464 1.5 3.16667V4C1.5 10.9033 7.09667 16.5 14 16.5H14.8333C15.2754 16.5 15.6993 16.3244 16.0118 16.0118C16.3244 15.6993 16.5 15.2754 16.5 14.8333V12.1008C16.5 11.9259 16.445 11.7553 16.3427 11.6134C16.2404 11.4714 16.096 11.3653 15.93 11.31L12.1858 10.0617C11.9956 9.99841 11.7888 10.0059 11.6036 10.0827C11.4184 10.1596 11.2671 10.3006 11.1775 10.48L10.2358 12.3608C8.19538 11.4389 6.5611 9.80462 5.63917 7.76417L7.52 6.8225C7.69938 6.73288 7.84042 6.58158 7.91726 6.39637C7.9941 6.21116 8.00158 6.00445 7.93833 5.81417L6.69 2.07C6.63475 1.90413 6.52874 1.75984 6.38696 1.65754C6.24519 1.55525 6.07483 1.50013 5.9 1.5H3.16667C2.72464 1.5 2.30072 1.67559 1.98816 1.98816Z" stroke="#8BAC3E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:stroke-white"></path></svg></div><div class="flex justify-center items-center h-8 w-8 p-2 rounded-full bg-[#ffffff] hover:bg-[#8BAC3E] group"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.99992 1.87187C9.99588 1.87187 10.2326 1.87935 11.0213 1.91548C13.0471 2.00768 13.9934 2.9689 14.0856 4.97982C14.1217 5.76786 14.1286 6.00458 14.1286 8.00054C14.1286 9.99712 14.1211 10.2332 14.0856 11.0213C13.9928 13.0303 13.049 13.9934 11.0213 14.0856C10.2326 14.1217 9.99712 14.1292 7.99992 14.1292C6.00396 14.1292 5.76723 14.1217 4.97919 14.0856C2.94835 13.9928 2.00706 13.0272 1.91486 11.0206C1.87873 10.2326 1.87125 9.9965 1.87125 7.99992C1.87125 6.00396 1.87935 5.76786 1.91486 4.97919C2.00768 2.9689 2.95146 2.00706 4.97919 1.91486C5.76786 1.87935 6.00396 1.87187 7.99992 1.87187ZM7.99992 0.524414C5.9697 0.524414 5.71553 0.533135 4.91814 0.569267C2.20329 0.693859 0.694482 2.20017 0.56989 4.91752C0.533135 5.71553 0.524414 5.9697 0.524414 7.99992C0.524414 10.0301 0.533135 10.2849 0.569267 11.0823C0.693859 13.7972 2.20017 15.306 4.91752 15.4306C5.71553 15.4667 5.9697 15.4754 7.99992 15.4754C10.0301 15.4754 10.2849 15.4667 11.0823 15.4306C13.7947 15.306 15.3072 13.7997 15.4299 11.0823C15.4667 10.2849 15.4754 10.0301 15.4754 7.99992C15.4754 5.9697 15.4667 5.71553 15.4306 4.91814C15.3085 2.20578 13.8003 0.694482 11.0829 0.56989C10.2849 0.533135 10.0301 0.524414 7.99992 0.524414V0.524414ZM7.99992 4.16125C5.87999 4.16125 4.16125 5.87999 4.16125 7.99992C4.16125 10.1198 5.87999 11.8392 7.99992 11.8392C10.1198 11.8392 11.8386 10.1205 11.8386 7.99992C11.8386 5.87999 10.1198 4.16125 7.99992 4.16125ZM7.99992 10.4918C6.6238 10.4918 5.50808 9.37666 5.50808 7.99992C5.50808 6.6238 6.6238 5.50808 7.99992 5.50808C9.37603 5.50808 10.4918 6.6238 10.4918 7.99992C10.4918 9.37666 9.37603 10.4918 7.99992 10.4918ZM11.9906 3.11281C11.4947 3.11281 11.0929 3.51462 11.0929 4.00987C11.0929 4.50512 11.4947 4.90693 11.9906 4.90693C12.4858 4.90693 12.887 4.50512 12.887 4.00987C12.887 3.51462 12.4858 3.11281 11.9906 3.11281Z" stroke="#8BAC3E" class="group-hover:stroke-white"></path></svg></div></div></div><div class="flex flex-col gap-3 w-[15%]"><h2 class="font-medium text-[#333333] text-lg">Categories</h2><ul class="flex flex-col text-sm gap-2 text-[#757575]"><li>Cupcake</li><li>Pizza</li><li>Kebab</li><li>Salmon</li><li>Doughnut</li></ul></div><div class="flex flex-col gap-3 w-[15%]"><h2 class="font-medium text-[#333333] text-lg">About Us</h2><ul class="flex flex-col text-sm gap-2 text-[#757575]"><li>About Us</li><li>FAQ</li><li>Report Problem</li></ul></div><div class="flex flex-col gap-3 w-[30%]"><h2 class="font-medium text-[#333333] text-lg">Newsletter</h2><p class="text-sm text-[#757575]">Get now free 50% discount for alll products on your first order</p><div class="relative flex flex-wrap items-stretch"><input type="text" class="relative text-sm m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l-lg border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-black outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-black focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-black dark:placeholder:text-black dark:focus:border-primary" placeholder="Your email address" aria-label="Your email address" aria-describedby="button-addon2"><button class="mt-0 z-[2] inline-block rounded-r-lg bg-[#8BAC3E] px-6 py-[0.25rem] text-xs font-medium uppercase leading-normal text-white" data-te-ripple-init type="button" id="button-addon2"> SEND </button></div><div class="flex flex-col gap-2"><div class="flex items-center gap-2"><svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 3.66675L8.075 8.05008C8.34888 8.23281 8.67075 8.33033 9 8.33033C9.32925 8.33033 9.65112 8.23281 9.925 8.05008L16.5 3.66675M3.16667 12.8334H14.8333C15.2754 12.8334 15.6993 12.6578 16.0118 12.3453C16.3244 12.0327 16.5 11.6088 16.5 11.1667V2.83341C16.5 2.39139 16.3244 1.96746 16.0118 1.6549C15.6993 1.34234 15.2754 1.16675 14.8333 1.16675H3.16667C2.72464 1.16675 2.30072 1.34234 1.98816 1.6549C1.67559 1.96746 1.5 2.39139 1.5 2.83341V11.1667C1.5 11.6088 1.67559 12.0327 1.98816 12.3453C2.30072 12.6578 2.72464 12.8334 3.16667 12.8334Z" stroke="#8BAC3E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><span class="text-sm">elemesid@gmail.com</span></div><div class="flex items-center gap-2"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.98816 1.98816C1.67559 2.30072 1.5 2.72464 1.5 3.16667V4C1.5 10.9033 7.09667 16.5 14 16.5H14.8333C15.2754 16.5 15.6993 16.3244 16.0118 16.0118C16.3244 15.6993 16.5 15.2754 16.5 14.8333V12.1008C16.5 11.9259 16.445 11.7553 16.3427 11.6134C16.2404 11.4714 16.096 11.3653 15.93 11.31L12.1858 10.0617C11.9956 9.99841 11.7888 10.0059 11.6036 10.0827C11.4184 10.1596 11.2671 10.3006 11.1775 10.48L10.2358 12.3608C8.19538 11.4389 6.5611 9.80462 5.63917 7.76417L7.52 6.8225C7.69938 6.73288 7.84042 6.58158 7.91726 6.39637C7.9941 6.21116 8.00158 6.00445 7.93833 5.81417L6.69 2.07C6.63475 1.90413 6.52874 1.75984 6.38696 1.65754C6.24519 1.55525 6.07483 1.50013 5.9 1.5H3.16667C2.72464 1.5 2.30072 1.67559 1.98816 1.98816Z" stroke="#8BAC3E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><span class="text-sm"> 0888 1111 2222 </span></div></div></div></div><div class="flex justify-center w-full"><span class="text-[#757575] text-xs">© 2021 Elemes id. All rights reserved</span></div></div><div class="lg:hidden flex bg-white w-full fixed bottom-0 justify-between px-8 py-2"><div class="flex flex-col justify-center items-center"><svg width="30" height="30" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M37.375 21.0913H1.625C0.727997 21.0913 0 20.3633 0 19.4663C0 18.5693 0.727997 17.8413 1.625 17.8413H37.375C38.272 17.8413 39 18.5693 39 19.4663C39 20.3633 38.272 21.0913 37.375 21.0913Z" fill="#757575"></path><path d="M37.375 8.63281H1.625C0.727997 8.63281 0 7.90482 0 7.00781C0 6.11081 0.727997 5.38281 1.625 5.38281H37.375C38.272 5.38281 39 6.11081 39 7.00781C39 7.90482 38.272 8.63281 37.375 8.63281Z" fill="#757575"></path><path d="M37.375 33.5493H1.625C0.727997 33.5493 0 32.8213 0 31.9243C0 31.0273 0.727997 30.2993 1.625 30.2993H37.375C38.272 30.2993 39 31.0273 39 31.9243C39 32.8213 38.272 33.5493 37.375 33.5493Z" fill="#757575"></path></svg><span>Home</span></div><div class="flex flex-col justify-center items-center"><svg width="30" height="30" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M37.375 21.0913H1.625C0.727997 21.0913 0 20.3633 0 19.4663C0 18.5693 0.727997 17.8413 1.625 17.8413H37.375C38.272 17.8413 39 18.5693 39 19.4663C39 20.3633 38.272 21.0913 37.375 21.0913Z" fill="#757575"></path><path d="M37.375 8.63281H1.625C0.727997 8.63281 0 7.90482 0 7.00781C0 6.11081 0.727997 5.38281 1.625 5.38281H37.375C38.272 5.38281 39 6.11081 39 7.00781C39 7.90482 38.272 8.63281 37.375 8.63281Z" fill="#757575"></path><path d="M37.375 33.5493H1.625C0.727997 33.5493 0 32.8213 0 31.9243C0 31.0273 0.727997 30.2993 1.625 30.2993H37.375C38.272 30.2993 39 31.0273 39 31.9243C39 32.8213 38.272 33.5493 37.375 33.5493Z" fill="#757575"></path></svg><span>Promotions</span></div><div class="flex flex-col justify-center items-center"><svg width="30" height="30" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M37.375 21.0913H1.625C0.727997 21.0913 0 20.3633 0 19.4663C0 18.5693 0.727997 17.8413 1.625 17.8413H37.375C38.272 17.8413 39 18.5693 39 19.4663C39 20.3633 38.272 21.0913 37.375 21.0913Z" fill="#757575"></path><path d="M37.375 8.63281H1.625C0.727997 8.63281 0 7.90482 0 7.00781C0 6.11081 0.727997 5.38281 1.625 5.38281H37.375C38.272 5.38281 39 6.11081 39 7.00781C39 7.90482 38.272 8.63281 37.375 8.63281Z" fill="#757575"></path><path d="M37.375 33.5493H1.625C0.727997 33.5493 0 32.8213 0 31.9243C0 31.0273 0.727997 30.2993 1.625 30.2993H37.375C38.272 30.2993 39 31.0273 39 31.9243C39 32.8213 38.272 33.5493 37.375 33.5493Z" fill="#757575"></path></svg><span>Others</span></div></div>',2);function st(t,e,s,r,i,o){return et}var rt={};const it=(0,x.Z)(rt,[["render",st]]);var ot=it,at=s(3968),nt=s(8345);const lt={class:"lg:flex hidden lg:px-32 px-8 pb-32"},ct=(0,i.uE)('<div class="flex flex-col justify-center items-center lg:w-1/2 w-full"><h1 class="font-medium lg:text-[64px] text-[48px] text-[#8BAC3E]">Good Food Us Good Mood</h1><p class="py-8 pr-20 text-[#757575] text-[18px]">I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.</p><div class="flex w-full gap-6"><a href="" class="flex bg-[#8BAC3E] rounded-full text-white px-5 py-2 justify-center drop-shadow-xl"> Daftar Sekarang </a><a href="" class="flex bg-[#F2F2F2] rounded-full px-5 py-2 text-black justify-center items-center"> About Us </a></div></div>',1),ut={class:"relative lg:w-1/2 w-full"},pt=(0,i._)("div",{class:"flex relative lg:justify-center justify-start"},[(0,i._)("div",{class:"bg-[#C4C4C4] opacity-25 p-5 lg:w-[500px] w-56 lg:h-[500px] h-56 rounded-full"}),(0,i._)("div",{class:"absolute z-2 p-12 lg:w-[500px] w-56 lg:h-[500px] h-56"},[(0,i._)("img",{src:at,alt:"",class:"lg:w-auto w-52"})])],-1),gt={class:"lg:flex hidden gap-5 backdrop-blur-sm bg-white/30 rounded-xl absolute w-[292px] h-auto p-5 bottom-0 -mb-5 -ml-10 left-0"},dt=(0,i._)("img",{src:nt,alt:""},null,-1),ht={class:"gap-1"},ft=(0,i._)("h2",{class:"text-sm"},"Green Salad Tomato",-1),vt=(0,i._)("span",{class:"text-xs"},"Tomato",-1),mt=(0,i.uE)('<div class="lg:hidden flex gap-5 backdrop-blur-sm bg-white/30 rounded-xl absolute w-auto h-auto p-5 bottom-0 -mb-10 right-0"><img src="'+nt+'" alt=""><div class="gap-1"><h2 class="text-sm">Green Salad Tomato</h2><span class="text-xs">Tomato</span><div class="flex"><img src="'+z+'" alt=""><img src="'+z+'" alt=""><img src="'+z+'" alt=""><img src="'+z+'" alt=""><img src="'+B+'" alt=""></div></div></div>',1);function xt(t,e,s,r,o,a){const n=(0,i.up)("RatingComponent");return(0,i.wg)(),(0,i.iD)("div",lt,[ct,(0,i._)("div",ut,[pt,(0,i._)("div",gt,[dt,(0,i._)("div",ht,[ft,vt,(0,i.Wm)(n,{rate:4})])]),mt])])}var wt={components:{RatingComponent:S}};const bt=(0,x.Z)(wt,[["render",xt]]);var Ct=bt;const yt={class:"lg:hidden flex flex-col lg:px-32 px-8 pb-14"},kt={class:"flex flex-col justify-center items-center lg:w-1/2 w-full"},_t=(0,i._)("h1",{class:"font-medium lg:text-[64px] text-[48px] text-[#8BAC3E]"},"Good Food Us Good Mood",-1),jt={class:"relative lg:w-1/2 w-full my-10"},Et=(0,i._)("div",{class:"flex relative lg:justify-center justify-start"},[(0,i._)("div",{class:"bg-[#C4C4C4] opacity-25 p-5 w-[249px] h-[249px] rounded-full"}),(0,i._)("div",{class:"absolute z-2 p-5 w-[249px] h-[249px]"},[(0,i._)("img",{src:at,alt:"",class:"lg:w-auto w-52"})])],-1),Dt={class:"flex gap-5 backdrop-blur-sm bg-white/30 rounded-xl absolute w-auto h-auto p-5 bottom-0 -mb-10 right-0"},zt=(0,i._)("img",{src:nt,alt:""},null,-1),Bt={class:"gap-1"},Mt=(0,i._)("h2",{class:"text-sm"},"Green Salad Tomato",-1),Ht=(0,i._)("span",{class:"text-xs"},"Tomato",-1),At=(0,i._)("p",{class:"py-10 text-[#757575] text-[18px]"},"I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.",-1),Zt=(0,i._)("div",{class:"flex w-full gap-6"},[(0,i._)("a",{href:"",class:"flex bg-[#8BAC3E] rounded-full text-white px-5 py-2 justify-center drop-shadow-xl"}," Daftar Sekarang "),(0,i._)("a",{href:"",class:"flex bg-[#F2F2F2] rounded-full px-5 py-2 text-black justify-center items-center"}," About Us ")],-1);function St(t,e,s,r,o,a){const n=(0,i.up)("RatingComponent");return(0,i.wg)(),(0,i.iD)("div",yt,[(0,i._)("div",kt,[_t,(0,i._)("div",jt,[Et,(0,i._)("div",Dt,[zt,(0,i._)("div",Bt,[Mt,Ht,(0,i.Wm)(n,{rate:4})])])]),At,Zt])])}var Lt={components:{RatingComponent:S}};const Ot=(0,x.Z)(Lt,[["render",St]]);var Tt=Ot,Yt={components:{NavigationTop:C,CardComponent:T,CarouselComponent:tt,FooterComponent:ot,BannerDesktop:Ct,BannerMobile:Tt},data(){return{receipts:[{image:"piza-paperoni.svg",title:"Pizza Paperoni",category:"Pizza",rate:"3",color:"blue"},{image:"pizza-meat.svg",title:"Pizza Meat",category:"Pizza",rate:"3",color:"blue"},{image:"doner-kebab.svg",title:"Doner Kebab",category:"Kebab",rate:"5",color:"gray"},{image:"salmon-roll.svg",title:"Salmon Roll",category:"Salmon",rate:"4",color:"purple"},{image:"cupcake-choco.svg",title:"Cupcake Choco",category:"Cupcake",rate:"4",color:"broken-white"},{image:"doughnut-milk.svg",title:"Doughnut Milk",category:"Doughnut",rate:"5",color:"yellow"},{image:"doughnut-unicorn.svg",title:"Doughnut Unicorn",category:"Doughnut",rate:"4",color:"yellow"},{image:"kathi-kebab.svg",title:"Kathi Kebab",category:"Kebab",rate:"4",color:"gray"}],categories:[{icon:"cupcake.svg",title:"Cupcake",total:"22 Items",color:"broken-white"},{icon:"pizza.svg",title:"Pizza",total:"25 Items",color:"blue"},{icon:"kebab.svg",title:"Kebab",total:"12 Items",color:"gray"},{icon:"salmon.svg",title:"Salmon",total:"22 Items",color:"purple"},{icon:"doughnut.svg",title:"Doughnut",total:"11 Items",color:"yellow"}]}}};const Xt=(0,x.Z)(Yt,[["render",g]]);var Ft=Xt;(0,r.ri)(Ft).mount("#app")},4449:function(t,e,s){var r={"./arrow-carousel.svg":8192,"./cupcake.svg":68,"./doughnut.svg":9347,"./kebab.svg":1216,"./menu.svg":5114,"./pizza.svg":9070,"./salmon.svg":8832,"./star-blank.svg":8655,"./star.svg":8944};function i(t){var e=o(t);return s(e)}function o(t){if(!s.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}i.keys=function(){return Object.keys(r)},i.resolve=o,t.exports=i,i.id=4449},5459:function(t,e,s){var r={"./bg-small.png":5646,"./bg-top.png":900,"./cupcake-choco.svg":6795,"./doner-kebab.svg":2698,"./doughnut-milk.svg":360,"./doughnut-unicorn.svg":1724,"./elemes-logo.svg":1546,"./green-salad-tomato-thumb.svg":8345,"./green-salad-tomato.svg":3968,"./kathi-kebab.svg":7613,"./piza-paperoni.svg":5368,"./pizza-meat.svg":728,"./salmon-roll.svg":5284};function i(t){var e=o(t);return s(e)}function o(t){if(!s.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}i.keys=function(){return Object.keys(r)},i.resolve=o,t.exports=i,i.id=5459},8192:function(t,e,s){"use strict";t.exports=s.p+"img/arrow-carousel.ea9e1796.svg"},68:function(t,e,s){"use strict";t.exports=s.p+"img/cupcake.571cd335.svg"},9347:function(t,e,s){"use strict";t.exports=s.p+"img/doughnut.83f2ee66.svg"},1216:function(t,e,s){"use strict";t.exports=s.p+"img/kebab.8522a85f.svg"},5114:function(t,e,s){"use strict";t.exports=s.p+"img/menu.80789be5.svg"},9070:function(t,e,s){"use strict";t.exports=s.p+"img/pizza.0ddc7b4a.svg"},8832:function(t,e,s){"use strict";t.exports=s.p+"img/salmon.ce23a1da.svg"},8655:function(t,e,s){"use strict";t.exports=s.p+"img/star-blank.26749d10.svg"},8944:function(t,e,s){"use strict";t.exports=s.p+"img/star.5fa24b5e.svg"},6795:function(t,e,s){"use strict";t.exports=s.p+"img/cupcake-choco.ce039a82.svg"},2698:function(t,e,s){"use strict";t.exports=s.p+"img/doner-kebab.3cd58260.svg"},360:function(t,e,s){"use strict";t.exports=s.p+"img/doughnut-milk.c896e4a2.svg"},1724:function(t,e,s){"use strict";t.exports=s.p+"img/doughnut-unicorn.57525e3a.svg"},1546:function(t,e,s){"use strict";t.exports=s.p+"img/elemes-logo.71f2d682.svg"},8345:function(t,e,s){"use strict";t.exports=s.p+"img/green-salad-tomato-thumb.493b46cc.svg"},3968:function(t,e,s){"use strict";t.exports=s.p+"img/green-salad-tomato.13d0db32.svg"},7613:function(t,e,s){"use strict";t.exports=s.p+"img/kathi-kebab.98c77519.svg"},5368:function(t,e,s){"use strict";t.exports=s.p+"img/piza-paperoni.8df1d348.svg"},728:function(t,e,s){"use strict";t.exports=s.p+"img/pizza-meat.e389eaeb.svg"},5284:function(t,e,s){"use strict";t.exports=s.p+"img/salmon-roll.2998040f.svg"},5646:function(t,e,s){"use strict";t.exports=s.p+"img/bg-small.4a149a56.png"},900:function(t,e,s){"use strict";t.exports=s.p+"img/bg-top.b213c753.png"}},e={};function s(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={exports:{}};return t[r].call(o.exports,o,o.exports,s),o.exports}s.m=t,function(){var t=[];s.O=function(e,r,i,o){if(!r){var a=1/0;for(u=0;u<t.length;u++){r=t[u][0],i=t[u][1],o=t[u][2];for(var n=!0,l=0;l<r.length;l++)(!1&o||a>=o)&&Object.keys(s.O).every((function(t){return s.O[t](r[l])}))?r.splice(l--,1):(n=!1,o<a&&(a=o));if(n){t.splice(u--,1);var c=i();void 0!==c&&(e=c)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[r,i,o]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var r in e)s.o(e,r)&&!s.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.p="/elemes-group-tech-test/"}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,r){var i,o,a=r[0],n=r[1],l=r[2],c=0;if(a.some((function(e){return 0!==t[e]}))){for(i in n)s.o(n,i)&&(s.m[i]=n[i]);if(l)var u=l(s)}for(e&&e(r);c<a.length;c++)o=a[c],s.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return s.O(u)},r=self["webpackChunkelemesgroup_tech_test"]=self["webpackChunkelemesgroup_tech_test"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=s.O(void 0,[998],(function(){return s(4489)}));r=s.O(r)})();
//# sourceMappingURL=app.8b97934a.js.map