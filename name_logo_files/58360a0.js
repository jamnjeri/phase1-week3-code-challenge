(window.webpackJsonp=window.webpackJsonp||[]).push([[266,360],{1024:function(t){t.exports=JSON.parse('{"order":["industry","colors","fonts","type","keywords"]}')},1169:function(t,e,n){"use strict";var r=n(112);e.a={filters:{render:r.a},methods:{render:function(t){return this.$options.filters.render(t,this.ctx||this._self)}}}},1207:function(t,e,n){"use strict";var r=n(1169),o=n(28),c={mixins:[r.a],props:{page:{type:Object,default:function(){return{}}},ctx:{type:Object,default:function(){return null}},align:{type:String,default:"text-center"}},computed:Object(o.e)(["enterprise"])},l=n(8),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("header",{directives:[{name:"show",rawName:"v-show",value:t.page.show_intro,expression:"page.show_intro"}],staticClass:"mb-6",class:t.align},[e("div",{class:{"flex flex-col-reverse sm:flex-row sm:justify-between sm:items-center":t.$slots["header-content"]}},[e("h1",{staticClass:"text-3xl md:text-4xl"},[t._v(t._s(t.render(t.page.title)))]),t._v(" "),t._t("header-content")],2),t._v(" "),t.page.intro_text?e("div",{staticClass:"mb-6 mt-2 article",domProps:{innerHTML:t._s(t.render(t.page.intro_text))}}):t._e()])}),[],!1,null,null,null);e.a=component.exports},1228:function(t,e,n){"use strict";var r=n(122),o=n.n(r),c=n(1207),l={components:{ArrowRight:o.a,Intro:c.a},props:{input:{type:[String,Array],default:""},page:{type:Object,default:function(){return{}}},name:{type:String,required:!0},loading:Boolean},beforeDestroy:function(){window.removeEventListener("keypress",this.onKeyPress)},mounted:function(){window.addEventListener("keypress",this.onKeyPress)},computed:{skip:function(){var t;return!(null!==(t=this.input)&&void 0!==t&&t.length)},buttonText:function(){var t,e,n,r;return this.skip?null===(t=this.page)||void 0===t||null===(e=t.button)||void 0===e?void 0:e.empty_text:null===(n=this.page)||void 0===n||null===(r=n.button)||void 0===r?void 0:r.text}},methods:{handleContinue:function(t){this.$emit("continue",t)},onKeyPress:function(t){"Enter"===(null==t?void 0:t.key)&&this.handleContinue()}}},d=n(8),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"mb-auto pt-6 pb-12"},[e("div",{staticClass:"max-w-xl mx-auto"},[e("Intro",{attrs:{page:t.page,align:"text-left"}},[e("button",{staticClass:"btn text-left justify-start -ml-2 sm:ml-2",attrs:{slot:"header-content",type:"button",disabled:t.loading,loading:t.loading},on:{click:t.handleContinue},slot:"header-content"},[t._v("\n        "+t._s(t.buttonText)+"\n\n        "),e("ArrowRight",{staticClass:"w-3.5 h-3.5 ml-1 flex-shrink-0"})],1)]),t._v(" "),t.$slots.default?e("div",{staticClass:"mb-5"},[t._t("default")],2):t._e(),t._v(" "),t._t("button",(function(){return[e("button",{staticClass:"btn btn-primary btn-large w-full",attrs:{type:"button",disabled:t.loading,loading:t.loading},on:{click:t.handleContinue}},[t._v("\n        "+t._s(t.buttonText)+"\n\n        "),e("ArrowRight",{staticClass:"btn-icon-right"})],1)]}))],2)])}),[],!1,null,null,null);e.a=component.exports},1257:function(t,e,n){"use strict";n(16),n(15),n(17),n(18);var r=n(3),o=(n(68),n(12),n(43),n(47),n(174),n(41),n(13)),c=n(1024),l=n(1228),d=n(81),f=n(28);n(94);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}e.a={transition:"fade",layout:"progress",components:{StepPage:l.a},mixins:[d.e],data:function(){return{order:c.order,flowStartingProgress:40,flowEndingProgress:75}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({pages:function(){var t=[];return"force-invisible"===this.$store.state.editor.icon_visibility&&t.push("keywords"),this.$store.state.flags.enable_skip_icons&&t.push("type","keywords"),this.$store.state.flags.enable_skip_keywords_on_skip&&t.push("keywords"),this.order.filter((function(e){return!t.includes(e)}))},currentProgressStepAmount:function(){var t=(this.flowEndingProgress-this.flowStartingProgress)/this.pages.length;return this.flowStartingProgress+t*(this.currentPageIndex+1)},slug:function(){return this.$route.path.split("/")[2]},currentPageIndex:function(){var t=this;return this.pages.findIndex((function(e){return e===t.slug}))},nextPage:function(){var t=null;return this.currentPageIndex>=0&&(t=this.pages[this.currentPageIndex+1]),t}},Object(f.e)(["flags"])),mounted:function(){o.a.$emit(o.b.StepSetProgress,this.currentProgressStepAmount)},methods:{nextStep:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},path="/editor/ideas";this.nextPage?path="/flow/"+this.nextPage:this.flags.skip_editor_ideas?path=this.flags.editor_start_with_colors?"/editor/colors":"/editor/templates":this.flags.enable_standalone_ideas&&(path="/ideas"),t.replace?this.$router.replace(path):this.$router.push(path)}}}},1351:function(t,e,n){"use strict";n(16),n(15),n(12),n(17),n(18);var r=n(3),o=n(13),c=n(28);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}e.a={computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({value:{get:function(){return this.get},set:function(t){t!==this.value&&(this.set(t),o.a.$emit(o.b.EditorFetchIdeas))}}},Object(c.e)(["editor"])),methods:Object(c.b)({refreshLogos:"app/refreshLogos"})}},2120:function(t,e,n){"use strict";n.r(e);n(16),n(15),n(12),n(17),n(18);var r=n(3),o=(n(31),n(13)),c=n(1351),l=n(61),d=n(28),content=n(81),f=n(1257);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y={mixins:[Object(content.d)(["flow/type"]),c.a,f.a],data:function(){return{loading:!1,type:"Icon",iconOptions:["force-visible","force-invisible"]}},computed:v(v({},Object(d.e)("editor",["selected_icons"])),{},{get:function(){return this.editor.icon_visibility},options:function(){var t=this;return this.iconOptions.map((function(option,i){var e,n;return{label:(null===(e=t.page.options[i])||void 0===e?void 0:e.label)||option,text:(null===(n=t.page.options[i])||void 0===n?void 0:n.text)||"",value:option}}))}}),created:function(){this.editor.selected_icons.length>0&&this.nextStep({replace:!0})},methods:v({selectType:function(t){o.a.$emit(o.b.EnhancedFlowLogoTypeSelected,t),this.loading=!0,this.value=t,this.nextStep()},slugify:l.e},Object(d.d)({set:"editor/SET_ICON_VISIBILITY"}))},O=n(8),component=Object(O.a)(y,(function(){var t=this,e=t._self._c;return e("StepPage",{attrs:{page:t.page,name:"Logo Type",loading:t.loading},on:{continue:function(e){return t.selectType("default")}}},[e("div",{staticClass:"grid gap-5 grid-cols-2"},t._l(t.options,(function(option){return e("button",{key:option.value,staticClass:"btn flex-col items-stretch text-left bg-white rounded-xl border-2 border-gray-300 p-4 pt-8 overflow-hidden",class:{"shadow-primary":t.value===option.value},attrs:{type:"button"},on:{click:function(e){return t.selectType(option.value)}}},[e("div",{staticClass:"flex justify-center items-center mb-8",staticStyle:{"aspect-ratio":"5 / 2"}},[e("img",{staticStyle:{"max-width":"8rem"},attrs:{src:"https://cdn.logo.com/hotlink-ok/app/".concat(t.slugify(option.label),".svg"),alt:"Show Logos ".concat(option.label)}})]),t._v(" "),e("p",{staticClass:"font-semibold mt-auto"},[t._v("\n        "+t._s(option.label)+"\n      ")]),t._v(" "),e("p",{staticClass:"font-medium text-gray-700 text-xs"},[t._v("\n        "+t._s(option.text)+"\n      ")])])})),0)])}),[],!1,null,null,null);e.default=component.exports}}]);