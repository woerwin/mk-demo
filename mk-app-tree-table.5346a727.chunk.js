webpackJsonp([1],{1624:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,i,o=n(2),u=a(o),d=n(58),f=a(d),l=n(5),c=a(l),s=n(10),p=a(s),h=n(7),m=a(h),g=n(8),v=a(g),_=n(0),y=(a(_),n(273)),w=n(641),T=a(w),R=(r=(0,y.wrapper)(T.default))(i=function(e){function t(){return(0,c.default)(this,t),(0,m.default)(this,(t.__proto__||(0,f.default)(t)).apply(this,arguments))}return(0,v.default)(t,e),(0,p.default)(t,[{key:"render",value:function(){return this.props.monkeyKing((0,u.default)({},this.props,{path:"root"}))}}]),t}(_.Component))||i;t.default=R,e.exports=t.default},1625:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=new m.action(e),n=new w((0,o.default)({},e,{metaAction:t})),a=(0,o.default)({},t,n);return t.config({metaHandlers:a}),a}Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),o=a(i),u=n(274),d=a(u),f=n(275),l=a(f),c=n(5),s=a(c);t.default=r;var p=n(0),h=a(p),m=n(273),g=(n(80),n(615)),v=a(g),_=n(9),y=(a(_),n(180)),w=function e(t){var n=this;(0,s.default)(this,e),this.onInit=function(e){var t=e.component,a=e.injections;n.component=t,n.injections=a,a.reduce("init");var r=n.metaAction.gf("data.pagination").toJS();n.load(r)},this.load=function(){var e=(0,l.default)(d.default.mark(function e(t){var a,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{type:1};return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.webapi.goods.init({pagination:t,filter:r});case 2:a=e.sent,a.filter=r,n.injections.reduce("load",a);case 5:case"end":return e.stop()}},e,n)}));return function(t){return e.apply(this,arguments)}}(),this.getListRowsCount=function(){return n.metaAction.gf("data.list").size},this.pageChanged=function(e,t){var a=n.metaAction.gf("data.filter").toJS();n.load({current:e,pageSize:t},a)},this.selectType=function(e,t){var a={current:1,total:0,pageSize:20},r={type:e[0]};n.load(a,r)},this.loopTreeChildren=function(e){return e?e.map(function(e){return e.children&&e.children.length?h.default.createElement(y.Tree.TreeNode,{key:e.id,title:e.name},n.loopTreeChildren(e.children)):h.default.createElement(y.Tree.TreeNode,{key:e.id,title:e.name})}):null},this.metaAction=t.metaAction,this.config=v.default.current,this.webapi=this.config.webapi};e.exports=t.default},1626:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=new l.reducer(e),n=new p((0,o.default)({},e,{metaReducer:t}));return(0,o.default)({},t,n)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),o=a(i),u=n(5),d=a(u);t.default=r;var f=n(80),l=n(273),c=n(615),s=(a(c),n(642)),p=function e(t){var n=this;(0,d.default)(this,e),this.init=function(e,t){return n.metaReducer.init(e,(0,s.getInitState)())},this.load=function(e,t){return e=n.metaReducer.sf(e,"data.list",(0,f.fromJS)(t.list)),e=n.metaReducer.sf(e,"data.pagination",(0,f.fromJS)(t.pagination)),e=n.metaReducer.sf(e,"data.filter",(0,f.fromJS)(t.filter)),t.goodsTypes&&(e=n.metaReducer.sf(e,"data.other.goodsTypes",(0,f.fromJS)(t.goodsTypes))),e},this.metaReducer=t.metaReducer};e.exports=t.default}});