(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d63f1"],{7277:function(t,e,c){"use strict";c.r(e);var s=c("7a23"),a={class:"d-flex"},n={class:"bg-secondary d-flex flex-column justify-content-between p-5",style:{height:"100vh"}},o={class:"list-unstyled d-flex flex-column"},i=Object(s["h"])("li",{class:"btn p-0 btn-secondary w-100 text-start mb-1"},[Object(s["h"])("h4",{class:"m-2 text-dark"},[Object(s["h"])("i",{class:"fas fa-chart-bar me-3"}),Object(s["g"])("訂單列表")])],-1),l={class:"btn p-0 btn-secondary w-100 text-start mb-1"},r=Object(s["h"])("h4",{class:"m-2 text-dark"},[Object(s["h"])("i",{class:"fas fa-comments me-3"}),Object(s["g"])("優惠卷")],-1),h={class:"btn p-0 btn-secondary w-100 text-start mb-1"},b=Object(s["h"])("h4",{class:"m-2 text-dark"},[Object(s["h"])("i",{class:"fas fa-list-alt me-3"}),Object(s["g"])("最新消息 ")],-1),u={class:"btn p-0 btn-secondary w-100 text-start mb-1"},d=Object(s["h"])("h4",{class:"m-2 text-dark"},[Object(s["h"])("i",{class:"fas fa-play-circle me-3"}),Object(s["g"])("課程列表 ")],-1),f=Object(s["f"])('<li class="btn p-0 btn-secondary w-100 text-start mb-1"><h4 class="m-2 text-dark"><i class="fas fa-users me-3"></i>教師資料</h4></li><li class="btn p-0 btn-secondary w-100 text-start"><h4 class="m-2 text-dark"><i class="fas fa-cog me-3"></i>其他設定</h4></li>',2),j=Object(s["h"])("div",{class:"d-flex align-items-center"},[Object(s["h"])("div",null,[Object(s["h"])("h4",{class:"mb-1"},"Zweig Deng"),Object(s["h"])("h5",{class:"mb-0"},"oiuuiooiu@icloud.com")])],-1);function O(t,e,c,O,m,p){var x=Object(s["A"])("router-link"),k=Object(s["A"])("router-view");return Object(s["v"])(),Object(s["d"])("div",a,[Object(s["h"])("section",n,[Object(s["h"])("div",null,[Object(s["h"])("ul",o,[i,Object(s["h"])("li",l,[Object(s["h"])(x,{to:"/admin/coupons",class:"text-decoration-none"},{default:Object(s["N"])((function(){return[r]})),_:1})]),Object(s["h"])("li",h,[Object(s["h"])(x,{to:"/admin/news",class:"text-decoration-none"},{default:Object(s["N"])((function(){return[b]})),_:1})]),Object(s["h"])("li",u,[Object(s["h"])(x,{to:"/admin/products",class:"text-decoration-none"},{default:Object(s["N"])((function(){return[d]})),_:1})]),f])]),j]),Object(s["h"])(k)])}c("ac1f"),c("5319");var m={name:"Dashboard",data:function(){return{checkSuccess:!1}},created:function(){this.checkLogin()},methods:{checkLogin:function(){var t=this,e=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");if(e){this.$http.defaults.headers.common.Authorization="".concat(e);var c="".concat(Object({NODE_ENV:"production",VUE_APP_URL:"https://vue3-course-api.hexschool.io",VUE_APP_PATH:"jimnycourse",BASE_URL:""}).VUE_APP_API,"api/user/check");this.$http.post(c,{api_token:this.token}).then((function(e){e.data.success?t.checkSuccess=!0:(alert(e.data.message),t.$router.push("/login"))}))}else alert("您尚未登入。"),this.$router.push("/login")},signout:function(){document.cookie="hexToken=;expires=;",alert("token 已清除"),this.$router.push("/login")}}};m.render=O;e["default"]=m}}]);
//# sourceMappingURL=chunk-2d0d63f1.1d6dd284.js.map