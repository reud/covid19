(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{481:function(t,e,o){var content=o(623);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(13).default)("fc62f2bc",content,!0,{sourceMap:!1})},487:function(t){t.exports=JSON.parse('{"date":"2020/03/18 08:00","data":[{"date":"20200201","population":364000,"holiday":true},{"date":"20200202","population":283000,"holiday":true},{"date":"20200203","population":646000,"holiday":false},{"date":"20200204","population":653000,"holiday":false},{"date":"20200205","population":644000,"holiday":false},{"date":"20200206","population":652000,"holiday":false},{"date":"20200207","population":658000,"holiday":false},{"date":"20200208","population":356000,"holiday":true},{"date":"20200209","population":277000,"holiday":true},{"date":"20200210","population":614000,"holiday":false},{"date":"20200211","population":306000,"holiday":true},{"date":"20200212","population":644000,"holiday":false},{"date":"20200213","population":648000,"holiday":false},{"date":"20200214","population":663000,"holiday":false},{"date":"20200215","population":362000,"holiday":true},{"date":"20200216","population":268000,"holiday":true},{"date":"20200217","population":640000,"holiday":false},{"date":"20200218","population":642000,"holiday":false},{"date":"20200219","population":632000,"holiday":false},{"date":"20200220","population":641000,"holiday":false},{"date":"20200221","population":645000,"holiday":false},{"date":"20200222","population":345000,"holiday":true},{"date":"20200223","population":273000,"holiday":true},{"date":"20200224","population":276000,"holiday":true},{"date":"20200225","population":636000,"holiday":false},{"date":"20200226","population":630000,"holiday":false},{"date":"20200227","population":622000,"holiday":false},{"date":"20200228","population":624000,"holiday":false},{"date":"20200229","population":308000,"holiday":true},{"date":"20200301","population":230000,"holiday":true},{"date":"20200302","population":597000,"holiday":false},{"date":"20200303","population":598000,"holiday":false},{"date":"20200304","population":581000,"holiday":false},{"date":"20200305","population":589000,"holiday":false},{"date":"20200306","population":591000,"holiday":false},{"date":"20200307","population":293000,"holiday":true},{"date":"20200308","population":218000,"holiday":true},{"date":"20200309","population":594000,"holiday":false},{"date":"20200310","population":589000,"holiday":false},{"date":"20200311","population":582000,"holiday":false},{"date":"20200312","population":588000,"holiday":false},{"date":"20200313","population":595000,"holiday":false},{"date":"20200314","population":286000,"holiday":true},{"date":"20200315","population":237000,"holiday":true},{"date":"20200316","population":601000,"holiday":false},{"date":"20200317","population":607000,"holiday":false},{"date":"20200318","population":601000,"holiday":false}]}')},488:function(t){t.exports=JSON.parse('{"date":"2020/03/18 08:00","data":[{"date":"20200201","population":400000,"holiday":true},{"date":"20200202","population":302000,"holiday":true},{"date":"20200203","population":974000,"holiday":false},{"date":"20200204","population":985000,"holiday":false},{"date":"20200205","population":977000,"holiday":false},{"date":"20200206","population":989000,"holiday":false},{"date":"20200207","population":987000,"holiday":false},{"date":"20200208","population":399000,"holiday":true},{"date":"20200209","population":302000,"holiday":true},{"date":"20200210","population":904000,"holiday":false},{"date":"20200211","population":345000,"holiday":true},{"date":"20200212","population":980000,"holiday":false},{"date":"20200213","population":987000,"holiday":false},{"date":"20200214","population":995000,"holiday":false},{"date":"20200215","population":404000,"holiday":true},{"date":"20200216","population":282000,"holiday":true},{"date":"20200217","population":969000,"holiday":false},{"date":"20200218","population":970000,"holiday":false},{"date":"20200219","population":960000,"holiday":false},{"date":"20200220","population":970000,"holiday":false},{"date":"20200221","population":968000,"holiday":false},{"date":"20200222","population":379000,"holiday":true},{"date":"20200223","population":291000,"holiday":true},{"date":"20200224","population":299000,"holiday":true},{"date":"20200225","population":957000,"holiday":false},{"date":"20200226","population":949000,"holiday":false},{"date":"20200227","population":937000,"holiday":false},{"date":"20200228","population":932000,"holiday":false},{"date":"20200229","population":329000,"holiday":true},{"date":"20200301","population":232000,"holiday":true},{"date":"20200302","population":889000,"holiday":false},{"date":"20200303","population":883000,"holiday":false},{"date":"20200304","population":859000,"holiday":false},{"date":"20200305","population":867000,"holiday":false},{"date":"20200306","population":865000,"holiday":false},{"date":"20200307","population":308000,"holiday":true},{"date":"20200308","population":213000,"holiday":true},{"date":"20200309","population":872000,"holiday":false},{"date":"20200310","population":864000,"holiday":false},{"date":"20200311","population":858000,"holiday":false},{"date":"20200312","population":862000,"holiday":false},{"date":"20200313","population":865000,"holiday":false},{"date":"20200314","population":300000,"holiday":true},{"date":"20200315","population":240000,"holiday":true},{"date":"20200316","population":890000,"holiday":false},{"date":"20200317","population":889000,"holiday":false},{"date":"20200318","population":884000,"holiday":false}]}')},618:function(t,e,o){t.exports=function(){"use strict";return{name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")}}()},619:function(t,e,o){t.exports=function(){"use strict";var t="week",e="year";return function(i,o){var r=o.prototype;r.week=function(i){if(void 0===i&&(i=null),null!==i)return this.add(7*(i-this.week()),"day");var o=this.$locale().yearStart||1;if(11===this.month()&&this.date()>25){var r=this.startOf(e).add(1,e).date(o),n=this.endOf(t);if(r.isBefore(n))return 1}var s=this.startOf(e).date(o).startOf(t).subtract(1,"millisecond"),a=this.diff(s,t,!0);return a<0?this.startOf("week").week():Math.ceil(a)},r.weeks=function(t){return void 0===t&&(t=null),this.week(t)}}}()},620:function(t,e,o){t.exports=function(){"use strict";return function(t,e,o){o.updateLocale=function(t,e){var r=o.Ls[t];if(r)return(e?Object.keys(e):[]).forEach((function(t){r[t]=e[t]})),r}}}()},621:function(t,e,o){t.exports=function(){"use strict";return function(t,e,o){var i=function(t,e){if(!e.length)return o();var i;1===e.length&&e[0].length>0&&(e=e[0]),i=e[0];for(var r=1;r<e.length;r+=1)e[r].isValid()&&!e[r][t](i)||(i=e[r]);return i};o.max=function(){var t=[].slice.call(arguments,0);return i("isAfter",t)},o.min=function(){var t=[].slice.call(arguments,0);return i("isBefore",t)}}}()},622:function(t,e,o){"use strict";var r=o(481),n=o.n(r);e.default=n.a},623:function(t,e,o){(e=o(12)(!1)).push([t.i,".Text_IU70w{margin:0 !important}",""]),e.locals={Text:"Text_IU70w"},t.exports=e},630:function(t,e,o){"use strict";o.r(e);var r=o(425),n=o(486),d=o(478),l=o(487),c=o(488),h=o(491),f=o(490),y=o(497),m=o(492),v=o(493),k=o(498),_=o(499),$=o(500),D=o(495),x=o(494),C=(o(306),o(7),o(6),o(10),o(136)),w=o(1),O=o(465),j=o.n(O),S=(o(618),o(619)),T=o.n(S),V=o(620),A=o.n(V),B=o(621),M=o.n(B),I=o(427),N=o(435);j.a.extend(A.a),j.a.extend(T.a),j.a.extend(M.a),j.a.updateLocale("en",{weekStart:1});var J={created:function(){this.canvas=!0},components:{DataView:I.a},props:{title:{type:String,required:!1,default:""},titleId:{type:String,required:!1,default:""},chartId:{type:String,required:!1,default:""},chartData:{type:Array,required:!0,default:function(){return[]}},date:{type:String,required:!1,default:""},standardDate:{type:String,required:!0,default:""},startDate:{type:String,required:!0,default:""}},computed:{groupByWeekData:function(){var t=this,e=this.chartData.map((function(t){return j()(t.date)})).filter((function(t){return 0===t.day()})),o=j.a.max.apply(j.a,Object(C.a)(e));return this.chartData.filter((function(e){return!e.holiday&&(!j()(e.date).isBefore(t.standardDate,"day")&&!j()(e.date).isAfter(o,"day"))})).reduce((function(t,e){var o=j()(e.date).week();return t[o]||(t[o]=[]),t[o].push(e)&&t}),{})},labels:function(){var t=this;return Object.keys(this.targetData).map((function(e){var o=j()(t.startDate).week(e).startOf("week").format("M/D"),r=j()(t.startDate).week(e).endOf("week").format("M/D");return"".concat(o,"~").concat(r)}))},standardValue:function(){var t=this.groupByWeekData[j()(this.standardDate).week()];return t.reduce((function(t,e){return t+e.population}),0)/t.length},targetData:function(){var t=this;return Object.keys(this.groupByWeekData).reduce((function(e,o){return j()(t.startDate).week()<=o&&(e[o]=t.groupByWeekData[o]),e}),{})},targetValues:function(){return Object.values(this.targetData).map((function(t){return t.reduce((function(t,e){return t+e.population}),0)/t.length}))},displayData:function(){var t=this,e=this.targetValues.map((function(e){return(e-t.standardValue)/t.standardValue*100}));return{labels:this.labels,datasets:[{data:e,backgroundColor:N.b}]}},tableHeaders:function(){return[{text:"",value:"header"},{text:this.title,value:"visitor"}]},tableData:function(){var t=this;return this.displayData.datasets[0].data.map((function(e,i){return Object.assign({header:t.displayData.labels[i]},{visitor:t.displayData.datasets[0].data[i]})}))},displayOptions:function(){return{responsive:!0,legend:{display:!1},tooltips:{displayColors:!1,callbacks:{title:this.tooltipTitle,label:function(t){var e=t.yLabel;return"".concat(e.toFixed(2),"%")}}},scales:{xAxes:[{gridLines:{display:!1},ticks:{fontSize:11,fontColor:"#808080"}}],yAxes:[{ticks:{fontSize:11,fontColor:"#808080",maxTicksLimit:8,suggestedMin:0,callback:function(t){return"".concat(t.toFixed(2),"%")}}}]}}}},methods:{tooltipTitle:function(t){var label=t[0].label;return this.$t("期間: {duration}",{duration:this.$t(label)})}}},L=w.a.extend(J),E=o(622),W=o(9),F=o(44),z=o.n(F),H=o(629);var component=Object(W.a)(L,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("data-view",{attrs:{title:t.title,"title-id":t.titleId,date:t.date},scopedSlots:t._u([{key:"description",fn:function(){return[o("p",{class:t.$style.Text},[t._v("\n      "+t._s(t.$t("2月3日～2月7日の来訪者数 (※1) の平均値 (※2) を 基準としたときの相対値"))+"\n    ")]),t._v(" "),o("ol",[o("li",[t._v("\n        "+t._s(t.$t("※1) ヤフーに蓄積された位置情報データなどを元に算出した参考値"))+"\n      ")]),t._v(" "),o("li",[t._v(t._s(t.$t("※2) 土・日・祝日を除く7:30~8:30の1週間平均値")))])])]},proxy:!0},{key:"footer-description",fn:function(){return[o("p",[t._v("\n      "+t._s(t.$t("※本データは2020年3月31日までの掲載となります"))+"\n    ")]),t._v(" "),o("p",[t._v("\n      "+t._s(t.$t("出典"))+"：\n      "),o("a",{attrs:{href:"https://ds.yahoo.co.jp/datapolicy/",target:"_blank",rel:"noopenner"}},[t._v(t._s(t.$t("ヤフー・データソリューション")))])])]},proxy:!0}])},[t._v(" "),o("bar",{style:{display:t.canvas?"block":"none"},attrs:{"chart-id":t.chartId,"chart-data":t.displayData,options:t.displayOptions,height:240}}),t._v(" "),o("v-data-table",{staticClass:"cardTable",style:{top:"-9999px",position:t.canvas?"fixed":"static"},attrs:{headers:t.tableHeaders,items:t.tableData,"items-per-page":-1,"hide-default-footer":!0,height:240,"fixed-header":!0,"mobile-breakpoint":0,"item-key":"name"}})],1)}),[],!1,(function(t){this.$style=E.default.locals||E.default}),null,null),R=component.exports;z()(component,{VDataTable:H.a});var U={components:{VisitorsBarChart:R},data:function(){return{chartData:l}}},P=o(417),G=Object(W.a)(U,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[e("visitors-bar-chart",{attrs:{title:this.$t("新宿区エリアの来訪者推移（参考値）"),"title-id":"shinjuku-visitors","chart-id":"shinjuku-visitors","chart-data":this.chartData.data,date:this.chartData.date,"standard-date":"2020-02-03","start-date":"2020-02-10"}})],1)}),[],!1,null,null,null),K=G.exports;z()(G,{VCol:P.a});var Q={components:{VisitorsBarChart:R},data:function(){return{chartData:c}}},X=Object(W.a)(Q,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[e("visitors-bar-chart",{attrs:{title:this.$t("千代田区エリアの来訪者推移（参考値）"),"title-id":"chiyoda-visitors","chart-id":"chiyoda-visitors","chart-data":this.chartData.data,date:this.chartData.date,"standard-date":"2020-02-03","start-date":"2020-02-10"}})],1)}),[],!1,null,null,null),Y=X.exports;z()(X,{VCol:P.a});var Z={components:{ConfirmedCasesDetailsCard:h.a,TestedCasesDetailsCard:f.a,ConfirmedCasesNumberCard:y.a,ConfirmedCasesAttributesCard:m.a,TestedNumberCard:v.a,InspectionPersonsNumberCard:k.a,TelephoneAdvisoryReportsNumberCard:_.a,ConsultationDeskReportsNumberCard:$.a,MetroCard:D.a,AgencyCard:x.a,ShinjukuVisitorsCard:K,ChiyodaVisitorsCard:Y},data:function(){var title,t;switch(this.$route.params.card){case"details-of-confirmed-cases":title=this.$t("検査陽性者の状況"),t=r.inspections_summary.date;break;case"details-of-tested-cases":title=this.$t("検査実施状況"),t=r.inspection_status_summary.date;break;case"number-of-confirmed-cases":title=this.$t("陽性患者数"),t=r.patients.date;break;case"attributes-of-confirmed-cases":title=this.$t("陽性患者の属性"),t=r.patients.date;break;case"number-of-tested":title=this.$t("検査実施件数"),t=r.inspections_summary.date;break;case"number-of-inspection-persons":title=this.$t("検査実施人数"),t=r.inspection_persons.date;break;case"number-of-reports-to-covid19-telephone-advisory-center":title=this.$t("新型コロナコールセンター相談件数"),t=r.contacts.date;break;case"number-of-reports-to-covid19-consultation-desk":title=this.$t("新型コロナ受診相談窓口相談件数"),t=r.querents.date;break;case"predicted-number-of-toei-subway-passengers":title=this.$t("都営地下鉄の利用者数の推移"),t=n.date;break;case"agency":title=this.$t("都庁来庁者数の推移"),t=d.date;break;case"shinjuku-visitors":title=this.$t("新宿区エリアの来訪者数の推移（参考値）"),t=l.date;break;case"chiyoda-visitors":title=this.$t("千代田区エリアの来訪者数の推移（参考値）"),t=c.date}var data={title:title,updatedAt:t};return data},head:function(){var t="https://stopcovid19.metro.tokyo.lg.jp",e=(new Date).getTime(),o="ja"===this.$i18n.locale?"".concat(t,"/ogp/").concat(this.$route.params.card,".png?t=").concat(e):"".concat(t,"/ogp/").concat(this.$i18n.locale,"/").concat(this.$route.params.card,".png?t=").concat(e),r="".concat(this.updatedAt," | ").concat(this.$t("当サイトは新型コロナウイルス感染症 (COVID-19) に関する最新情報を提供するために、東京都が開設したものです。"));return{title:this.title,meta:[{hid:"og:url",property:"og:url",content:t+this.$route.path+"/"},{hid:"og:title",property:"og:title",content:this.title+" | "+this.$t("東京都")+" "+this.$t("新型コロナウイルス感染症")+this.$t("対策サイト")},{hid:"description",name:"description",content:r},{hid:"og:description",property:"og:description",content:r},{hid:"og:image",property:"og:image",content:o},{hid:"twitter:image",name:"twitter:image",content:o}]}}},tt=Object(W.a)(Z,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",["details-of-confirmed-cases"==this.$route.params.card?e("confirmed-cases-details-card"):"details-of-tested-cases"==this.$route.params.card?e("tested-cases-details-card"):"number-of-confirmed-cases"==this.$route.params.card?e("confirmed-cases-number-card"):"attributes-of-confirmed-cases"==this.$route.params.card?e("confirmed-cases-attributes-card"):"number-of-tested"==this.$route.params.card?e("tested-number-card"):"number-of-inspection-persons"==this.$route.params.card?e("inspection-persons-number-card"):"number-of-reports-to-covid19-telephone-advisory-center"==this.$route.params.card?e("telephone-advisory-reports-number-card"):"number-of-reports-to-covid19-consultation-desk"==this.$route.params.card?e("consultation-desk-reports-number-card"):"predicted-number-of-toei-subway-passengers"==this.$route.params.card?e("metro-card"):"agency"==this.$route.params.card?e("agency-card"):"shinjuku-visitors"==this.$route.params.card?e("shinjuku-visitors-card"):"chiyoda-visitors"==this.$route.params.card?e("chiyoda-visitors-card"):this._e()],1)}),[],!1,null,null,null);e.default=tt.exports}}]);