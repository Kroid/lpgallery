(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{166:function(t,n,i){},167:function(t,n){},170:function(t,n,i){"use strict";var a=i(166);i.n(a).a},171:function(t,n,i){"use strict";var a=i(167),l=i.n(a);n.default=l.a},174:function(t,n,i){"use strict";i.r(n);i(30);var a={data:function(){return{modal:{landing:null,resolution:null}}},methods:{show:function(t,n){this.modal.landing=t,this.modal.resolution=n,this.$modal.push("landing")},hide:function(){this.$modal.pop("landing"),this.modal.landing=null,this.modal.resolution=null},thumbnailUrl:function(t,n){return"/landings/".concat(t,"/").concat(n,"-cropped.png")},fullUrl:function(t,n){return"/landings/".concat(t,"/").concat(n,".png")}}},l=(i(170),i(24)),s=i(171),e=Object(l.a)(a,(function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("Layout",[i("h1",{staticClass:"text-center"},[t._v("\n    "+t._s(t.$page.landing.id)+"\n  ")]),i("div",{staticClass:"thumbnail-container"},[i("div",{staticClass:"thumbnail thumbnail-1366x768"},[i("div",{staticClass:"text-center resolution"},[t._v("1366x768")]),i("g-image",{attrs:{src:t.thumbnailUrl(t.$page.landing.id,"1366x768")},on:{click:function(n){return t.show(t.$page.landing.id,"1366x768")}}})],1),i("div",{staticClass:"thumbnail thumbnail-360x640"},[i("div",{staticClass:"text-center resolution"},[t._v("360x640")]),i("g-image",{attrs:{src:t.thumbnailUrl(t.$page.landing.id,"360x640")},on:{click:function(n){return t.show(t.$page.landing.id,"360x640")}}})],1),i("div",{staticClass:"thumbnail thumbnail-768x1024"},[i("div",{staticClass:"text-center resolution"},[t._v("768x1024")]),i("g-image",{attrs:{src:t.thumbnailUrl(t.$page.landing.id,"768x1024")},on:{click:function(n){return t.show(t.$page.landing.id,"768x1024")}}})],1),i("div",{staticClass:"thumbnail thumbnail-1024x1366"},[i("div",{staticClass:"text-center resolution"},[t._v("1024x1366")]),i("g-image",{attrs:{src:t.thumbnailUrl(t.$page.landing.id,"1024x1366")},on:{click:function(n){return t.show(t.$page.landing.id,"1024x1366")}}})],1),i("div",{staticClass:"thumbnail thumbnail-1920x1080"},[i("div",{staticClass:"text-center resolution"},[t._v("1920x1080")]),i("g-image",{attrs:{src:t.thumbnailUrl(t.$page.landing.id,"1920x1080")},on:{click:function(n){return t.show(t.$page.landing.id,"1920x1080")}}})],1)]),i("modal",{attrs:{name:"landing"}},[i("figure",{staticClass:"pointer",on:{click:function(n){return t.hide()}}},[i("div",{staticClass:"text-center modal-resolution"},[t._v("\n        "+t._s(t.modal.resolution)+"\n      ")]),i("g-image",{staticClass:"max-width-100 pointer",attrs:{src:t.fullUrl(t.modal.landing,t.modal.resolution),alt:""}}),i("div",{staticClass:"text-center modal-resolution"},[t._v("\n        "+t._s(t.modal.resolution)+"\n      ")])],1)])],1)}),[],!1,null,"568fe919",null);"function"==typeof s.default&&Object(s.default)(e);n.default=e.exports}}]);