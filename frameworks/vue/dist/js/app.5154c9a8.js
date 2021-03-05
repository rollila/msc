(function(n){function e(e){for(var r,i,s=e[0],c=e[1],u=e[2],p=0,v=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&v.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(n[r]=c[r]);l&&l(e);while(v.length)v.shift()();return o.push.apply(o,u||[]),t()}function t(){for(var n,e=0;e<o.length;e++){for(var t=o[e],r=!0,s=1;s<t.length;s++){var c=t[s];0!==a[c]&&(r=!1)}r&&(o.splice(e--,1),n=i(i.s=t[0]))}return n}var r={},a={app:0},o=[];function i(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=r,i.d=function(n,e,t){i.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},i.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,e){if(1&e&&(n=i(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)i.d(t,r,function(e){return n[e]}.bind(null,r));return t},i.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return i.d(e,"a",e),e},i.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;o.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("56d7")},"56d7":function(n,e,t){"use strict";t.r(e);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("Main")],1)},o=[],i=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[n.selectedScenario?n._e():t("div",[t("h4",[n._v("Select scenario")]),t("div",[t("div",[t("label",[n._v("Scenario 1: Generate and delete components")]),t("button",{attrs:{id:"btn-scen-1"},on:{click:function(e){return n.selectScenario(1)}}},[n._v("Select")])]),t("div",[t("label",[n._v(" Scenario 2: Update components in a flat DOM tree "),t("button",{attrs:{id:"btn-scen-2"},on:{click:function(e){return n.selectScenario(2)}}},[n._v("Select")])])]),t("div",[t("label",[n._v(" Scenario 3: Update components in a branching DOM tree "),t("button",{attrs:{id:"btn-scen-3"},on:{click:function(e){return n.selectScenario(3)}}},[n._v("Select")])])]),t("div",[t("label",[n._v(" Scenario 4: Update components containing mostly static content "),t("button",{attrs:{id:"btn-scen-4"},on:{click:function(e){return n.selectScenario(4)}}},[n._v("Select")])])])])]),n.selectedScenario?t(n.scenarioComponent,{tag:"component"}):n._e()],1)},s=[],c=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("div",[t("label",[n._v("Number of components or elements to create")]),t("input",{attrs:{id:"input-num-to-create",type:"number",min:"1"},domProps:{value:n.numChildren},on:{change:n.onUpdateValue}}),t("button",{attrs:{id:"btn-generate-components"},on:{click:n.generateComponents}},[n._v(" Generate components ")]),t("button",{attrs:{id:"btn-generate-elements"},on:{click:n.generateElements}},[n._v(" Generate static elements ")])]),t("div",[t("button",{attrs:{id:"btn-delete"},on:{click:n.remove}},[n._v("Delete all components")]),t("button",{attrs:{id:"btn-add-one"},on:{click:n.addOne}},[n._v("Add one component")]),t("button",{attrs:{id:"btn-switch-child-type"},on:{click:n.switchType}},[n._v(" Change child component type ")])]),t("div",[1===n.childType?n._l(n.children,(function(n){return t("Child",{key:n.id,attrs:{id:n.id}})})):n._l(n.children,(function(n){return t("Child2",{key:n.id,attrs:{id:n.id}})})),n._l(n.elements,(function(e,r){return t("div",{key:r},[n._v("-")])}))],2)])},u=[],l=(t("cb29"),t("d81d"),function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[n._v(n._s(n.id))])}),p=[],v=(t("a9e3"),{props:{id:{type:Number,required:!0}}}),d=v,_=t("2877"),h=Object(_["a"])(d,l,p,!1,null,null,null),f=h.exports,m=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("span",[n._v(n._s(n.id))])},b=[],g={props:{id:{type:Number,required:!0}}},y=g,w=Object(_["a"])(y,m,b,!1,null,null,null),C=w.exports,S={components:{Child:f,Child2:C},data:function(){return{numChildren:0,children:[],elements:[],childType:1}},methods:{addOne:function(){this.children.push({id:this.children.length})},remove:function(){this.children=[]},switchType:function(){this.childType=2},generateComponents:function(){this.children=new Array(this.numChildren).fill(null).map((function(n,e){return{id:e}}))},generateElements:function(){this.elements=new Array(this.numChildren).fill(null)},onUpdateValue:function(n){this.numChildren=parseInt(n.target.value,10)}}},k=S,O=Object(_["a"])(k,c,u,!1,null,null,null),j=O.exports,U=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("div",[t("label",[n._v("Number of rows")]),t("input",{attrs:{id:"input-rows",type:"number",min:"1"},domProps:{value:n.numRows},on:{change:function(e){return n.onUpdateRows(e.target.value)}}}),t("label",[n._v("Number of columns")]),t("input",{attrs:{id:"input-columns",type:"number",min:"1"},domProps:{value:n.numColumns},on:{change:function(e){return n.onUpdateColumns(e.target.value)}}}),t("button",{attrs:{id:"btn-generate"},on:{click:n.generate}},[n._v(" Generate ")])]),t("div",n._l(n.rows,(function(n){return t("Row",{key:n.id,attrs:{columns:n.columns}})})),1)])},x=[],E=(t("99af"),function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("div",[n._v(" Row count: "+n._s(n.count)+" "),t("button",{staticClass:"row-btn-update-children",on:{click:n.updateRow}},[n._v(" Update children ")]),t("button",{staticClass:"row-btn-update-self",on:{click:n.onInput}},[n._v("Upate parent")])]),n._l(n.columns,(function(e,r){return t("Cell",{key:e.id,attrs:{value:r+n.offset}})}))],2)}),N=[],P=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("span",[n._v("Prop value: "+n._s(n.value)+", internal value: "+n._s(n.count)+" "),t("button",{staticClass:"cell-btn-increment",on:{click:n.increment}},[n._v(" Update child ")])])},$=[],D={props:{value:{type:Number,required:!0}},data:function(){return{count:0}},methods:{increment:function(){this.count+=1}}},M=D,R=Object(_["a"])(M,P,$,!1,null,null,null),F=R.exports,T={components:{Cell:F},props:{columns:{type:Array,required:!0}},data:function(){return{count:0,offset:0}},methods:{onInput:function(){this.count+=1},updateRow:function(){this.offset+=1}}},A=T,I=Object(_["a"])(A,E,N,!1,null,null,null),q=I.exports,G={components:{Row:q},data:function(){return{numRows:0,numColumns:0,rows:[]}},methods:{generate:function(){var n=this;this.rows=new Array(this.numRows).fill(null).map((function(e,t){return{id:t,columns:new Array(n.numColumns).fill(null).map((function(n,e){return{id:"row".concat(t,"-col").concat(e)}}))}}))},onUpdateColumns:function(n){this.numColumns=parseInt(n,10)},onUpdateRows:function(n){this.numRows=parseInt(n,10)}}},z=G,B=Object(_["a"])(z,U,x,!1,null,null,null),J=B.exports,V=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("label",[n._v("Select branching factor")]),t("input",{attrs:{id:"input-branching-factor",type:"number"},domProps:{value:n.branchingFactor},on:{change:n.onUpdateBranchingFactor}}),t("label",[n._v("Select tree depth")]),t("input",{attrs:{id:"input-tree-depth",type:"number'"},domProps:{value:n.treeDepth},on:{change:n.onUpdateTreeDepth}}),t("button",{attrs:{id:"btn-generate"},on:{click:n.generate}},[n._v("Generate tree")]),t("div",[n._v(n._s(n.count))]),t("button",{attrs:{id:"btn-increment-root"},on:{click:n.increment}},[n._v("Update root")]),n.initialized?t("div",n._l(n.branchingFactor,(function(e){return t("Node",{key:e,attrs:{"branching-factor":n.branchingFactor,"subtree-depth":n.treeDepth-1}})})),1):n._e()])},H=[],K=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[n.subtreeDepth>0?n._l(n.branchingFactor,(function(e){return t("Node",{key:e,attrs:{"subtree-depth":n.subtreeDepth-1,"branching-factor":n.branchingFactor}})})):t("div",[n._v(" "+n._s(n.count)+" "),t("button",{staticClass:"btn-increment-leaf",on:{click:n.increment}},[n._v("Update leaf")])])],2)},L=[],Q={name:"Node",props:{branchingFactor:{type:Number,required:!0},subtreeDepth:{type:Number,required:!0}},data:function(){return{count:0}},methods:{increment:function(){this.count+=1}}},W=Q,X=Object(_["a"])(W,K,L,!1,null,null,null),Y=X.exports,Z={components:{Node:Y},data:function(){return{branchingFactor:0,treeDepth:0,initialized:!1,count:0}},methods:{onUpdateBranchingFactor:function(n){this.branchingFactor=parseInt(n.target.value,10)},onUpdateTreeDepth:function(n){this.treeDepth=parseInt(n.target.value,10)},generate:function(){this.initialized=!0},increment:function(){this.count+=1}}},nn=Z,en=Object(_["a"])(nn,V,H,!1,null,null,null),tn=en.exports,rn=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("div",[t("label",[n._v("Number of components")]),t("input",{attrs:{id:"input-components",type:"number",min:"1"},domProps:{value:n.numChildren},on:{change:n.onChange}}),t("button",{attrs:{id:"btn-generate"},on:{click:n.generate}},[n._v(" Generate ")]),t("button",{attrs:{id:"btn-update"},on:{click:n.update}},[n._v("Update children")]),t("button",{attrs:{id:"btn-update-single"},on:{click:n.updateSingle}},[n._v(" Update single child ")])]),n._l(n.children,(function(n){return t("Child",{key:n.id,attrs:{value:n.value}})}))],2)},an=[],on=t("5530"),sn=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v(n._s(n.value))]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")]),t("span",[n._v("-")])])},cn=[],un={props:{value:{type:Number,required:!0}}},ln=un,pn=Object(_["a"])(ln,sn,cn,!1,null,null,null),vn=pn.exports,dn={components:{Child:vn},data:function(){return{numChildren:0,children:[]}},methods:{generate:function(){this.children=this.children=new Array(this.numChildren).fill(null).map((function(n,e){return{id:e,value:e}}))},update:function(){this.children=this.children.map((function(n){return Object(on["a"])({},n,{value:n.value+=1})}))},updateSingle:function(){var n=Math.floor(Math.random()*Math.floor(this.children.length));this.children[n].value+=1},onChange:function(n){this.numChildren=parseInt(n.target.value,10)}}},_n=dn,hn=Object(_["a"])(_n,rn,an,!1,null,null,null),fn=hn.exports,mn={components:{Scenario1:j,Scenario2:J,Scenario3:tn,Scenario4:fn},data:function(){return{selectedScenario:null}},computed:{scenarioComponent:function(){switch(this.selectedScenario){case 1:return j;case 2:return J;case 3:return tn;case 4:return fn;default:return null}}},methods:{selectScenario:function(n){this.selectedScenario=n}}},bn=mn,gn=Object(_["a"])(bn,i,s,!1,null,null,null),yn=gn.exports,wn={name:"App",components:{Main:yn}},Cn=wn,Sn=Object(_["a"])(Cn,a,o,!1,null,null,null),kn=Sn.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(n){return n(kn)}}).$mount("#app")}});
//# sourceMappingURL=app.5154c9a8.js.map