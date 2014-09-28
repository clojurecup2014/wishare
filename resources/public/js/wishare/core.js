// Compiled by ClojureScript 0.0-2356
goog.provide('wishare.core');
goog.require('cljs.core');
goog.require('wishare.timeline');
goog.require('wishare.timeline');
goog.require('wishare.profile');
goog.require('wishare.wishlist');
goog.require('quiescent');
goog.require('wishare.wishlist');
goog.require('quiescent.dom');
goog.require('wishare.friends');
goog.require('wishare.friends');
goog.require('quiescent');
goog.require('wishare.profile');
goog.require('quiescent.dom');
wishare.core.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"flag","flag",1088647881),false,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"my-own","my-own",-1841146167),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Vault Boy",new cljs.core.Keyword(null,"nickname","nickname",-802027190),"vault_boy",new cljs.core.Keyword(null,"avatar","avatar",-1607499307),"http://www.g0l.ru/imgs/avatars/263.jpg"], null),new cljs.core.Keyword(null,"dashboard","dashboard",-631747508),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"wishlist","wishlist",352427404),new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"PipBoy 3K",new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"image","image",-58725096),"http://www.fordesigner.com/imguploads/Image/cjbc/zcool/png20080526/1211811605.png"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Tesla",new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"image","image",-58725096),"http://ev-cars.ru/sites/default/files/styles/icon-64x64/public/gallery/2012/12/04/2013-Tesla-Model-S-front-1.jpg"], null)], null)], null),new cljs.core.Keyword(null,"dashboard-backup","dashboard-backup",-639925098),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"friends","friends",-127631374),new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"real-name","real-name",301436383),"John Dowe",new cljs.core.Keyword(null,"login","login",55217519),"jd",new cljs.core.Keyword(null,"id","id",-1388402092),(100)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"real-name","real-name",301436383),"Moe",new cljs.core.Keyword(null,"login","login",55217519),"moe",new cljs.core.Keyword(null,"id","id",-1388402092),(101)], null)], null)], null),new cljs.core.Keyword(null,"timeline","timeline",192903161),cljs.core.List.EMPTY], null));
wishare.core.switch_dashboard_to_BANG_ = (function switch_dashboard_to_BANG_(board){return cljs.core.swap_BANG_.call(null,wishare.core.state,(function (data){if(cljs.core._EQ_.call(null,board,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",-631747508),new cljs.core.Keyword(null,"active","active",1895962068)], null))))
{console.error(("Dashboard "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(board)+" is already active!"));
return data;
} else
{var backup = data.call(null,new cljs.core.Keyword(null,"dashboard-backup","dashboard-backup",-639925098));var current = data.call(null,new cljs.core.Keyword(null,"dashboard","dashboard",-631747508));return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"dashboard-backup","dashboard-backup",-639925098),current,new cljs.core.Keyword(null,"dashboard","dashboard",-631747508),backup);
}
}));
});
/**
* Use the force to refresh the UI!
*/
wishare.core.use_the_force_BANG_ = (function use_the_force_BANG_(){return cljs.core.swap_BANG_.call(null,wishare.core.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flag","flag",1088647881)], null),cljs.core.not);
});
wishare.core.dashboard = (function dashboard(tabs){var config = cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),tabs));var tabs__$1 = cljs.core.map.call(null,cljs.core.first,config);var config__$1 = cljs.core.reduce.call(null,cljs.core.conj,cljs.core.PersistentArrayMap.EMPTY,config);return quiescent.component.call(null,((function (config,tabs__$1,config__$1){
return (function (p__15243,mode){var map__15244 = p__15243;var map__15244__$1 = ((cljs.core.seq_QMARK_.call(null,map__15244))?cljs.core.apply.call(null,cljs.core.hash_map,map__15244):map__15244);var items = cljs.core.get.call(null,map__15244__$1,new cljs.core.Keyword(null,"items","items",1031954938));var active = cljs.core.get.call(null,map__15244__$1,new cljs.core.Keyword(null,"active","active",1895962068));var heading = quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"panel-heading"], null),cljs.core.apply.call(null,quiescent.dom.ul,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"nav nav-pills nav-justified",new cljs.core.Keyword(null,"role","role",-736691072),"tablist"], null),(function (){var iter__4377__auto__ = ((function (map__15244,map__15244__$1,items,active,config,tabs__$1,config__$1){
return (function iter__15245(s__15246){return (new cljs.core.LazySeq(null,((function (map__15244,map__15244__$1,items,active,config,tabs__$1,config__$1){
return (function (){var s__15246__$1 = s__15246;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__15246__$1);if(temp__4126__auto__)
{var s__15246__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15246__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__15246__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__15248 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__15247 = (0);while(true){
if((i__15247 < size__4376__auto__))
{var tab = cljs.core._nth.call(null,c__4375__auto__,i__15247);var map__15251 = config__$1.call(null,tab);var map__15251__$1 = ((cljs.core.seq_QMARK_.call(null,map__15251))?cljs.core.apply.call(null,cljs.core.hash_map,map__15251):map__15251);var modes = cljs.core.get.call(null,map__15251__$1,new cljs.core.Keyword(null,"modes","modes",-1377787092));var title = cljs.core.get.call(null,map__15251__$1,new cljs.core.Keyword(null,"title","title",636505583));if(cljs.core.truth_(modes.call(null,mode)))
{cljs.core.chunk_append.call(null,b__15248,((cljs.core._EQ_.call(null,tab,active))?quiescent.dom.li.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"active"], null),quiescent.dom.a.call(null,cljs.core.PersistentArrayMap.EMPTY,title)):quiescent.dom.li.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.a.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (i__15247,s__15246__$1,map__15251,map__15251__$1,modes,title,tab,c__4375__auto__,size__4376__auto__,b__15248,s__15246__$2,temp__4126__auto__,map__15244,map__15244__$1,items,active,config,tabs__$1,config__$1){
return (function (_){return wishare.core.switch_dashboard_to_BANG_.call(null,tab);
});})(i__15247,s__15246__$1,map__15251,map__15251__$1,modes,title,tab,c__4375__auto__,size__4376__auto__,b__15248,s__15246__$2,temp__4126__auto__,map__15244,map__15244__$1,items,active,config,tabs__$1,config__$1))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null),title))));
{
var G__15253 = (i__15247 + (1));
i__15247 = G__15253;
continue;
}
} else
{{
var G__15254 = (i__15247 + (1));
i__15247 = G__15254;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15248),iter__15245.call(null,cljs.core.chunk_rest.call(null,s__15246__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15248),null);
}
} else
{var tab = cljs.core.first.call(null,s__15246__$2);var map__15252 = config__$1.call(null,tab);var map__15252__$1 = ((cljs.core.seq_QMARK_.call(null,map__15252))?cljs.core.apply.call(null,cljs.core.hash_map,map__15252):map__15252);var modes = cljs.core.get.call(null,map__15252__$1,new cljs.core.Keyword(null,"modes","modes",-1377787092));var title = cljs.core.get.call(null,map__15252__$1,new cljs.core.Keyword(null,"title","title",636505583));if(cljs.core.truth_(modes.call(null,mode)))
{return cljs.core.cons.call(null,((cljs.core._EQ_.call(null,tab,active))?quiescent.dom.li.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"active"], null),quiescent.dom.a.call(null,cljs.core.PersistentArrayMap.EMPTY,title)):quiescent.dom.li.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.a.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (s__15246__$1,map__15252,map__15252__$1,modes,title,tab,s__15246__$2,temp__4126__auto__,map__15244,map__15244__$1,items,active,config,tabs__$1,config__$1){
return (function (_){return wishare.core.switch_dashboard_to_BANG_.call(null,tab);
});})(s__15246__$1,map__15252,map__15252__$1,modes,title,tab,s__15246__$2,temp__4126__auto__,map__15244,map__15244__$1,items,active,config,tabs__$1,config__$1))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null),title))),iter__15245.call(null,cljs.core.rest.call(null,s__15246__$2)));
} else
{{
var G__15255 = cljs.core.rest.call(null,s__15246__$2);
s__15246__$1 = G__15255;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(map__15244,map__15244__$1,items,active,config,tabs__$1,config__$1))
,null,null));
});})(map__15244,map__15244__$1,items,active,config,tabs__$1,config__$1))
;return iter__4377__auto__.call(null,tabs__$1);
})()));var comp = cljs.core.get_in.call(null,config__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [active,new cljs.core.Keyword(null,"comp","comp",1191953630)], null));var available_modes = cljs.core.get_in.call(null,config__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [active,new cljs.core.Keyword(null,"modes","modes",-1377787092)], null));if(cljs.core.truth_(available_modes.call(null,mode)))
{return quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"col-md-8 dashboard"], null),comp.call(null,items,heading,mode));
} else
{throw ("Tab "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(active)+" is not available in mode "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(mode)+"!");
}
});})(config,tabs__$1,config__$1))
);
});
/**
* Page maker.
* Makes the typical page with header, dashboard and timeline
*/
wishare.core.mk_page = (function mk_page(header_comp,dashboard_comp,timeline_comp){return quiescent.component.call(null,(function (p__15258,mode){var map__15259 = p__15258;var map__15259__$1 = ((cljs.core.seq_QMARK_.call(null,map__15259))?cljs.core.apply.call(null,cljs.core.hash_map,map__15259):map__15259);var data = map__15259__$1;var timeline = cljs.core.get.call(null,map__15259__$1,new cljs.core.Keyword(null,"timeline","timeline",192903161));var dashboard = cljs.core.get.call(null,map__15259__$1,new cljs.core.Keyword(null,"dashboard","dashboard",-631747508));var header = cljs.core.get.call(null,map__15259__$1,new cljs.core.Keyword(null,"header","header",119441134));var mode__$1 = cljs.core.get.call(null,map__15259__$1,new cljs.core.Keyword(null,"mode","mode",654403691));return quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"container"], null),quiescent.dom.nav.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"navbar navbar-default"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"container-fluid"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"navbar-header"], null),quiescent.dom.a.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"navbar-brand",new cljs.core.Keyword(null,"href","href",-793805698),"/"], null),quiescent.dom.img.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/img/logo128x128.png"], null)))),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"collapse navbar-collapse"], null),quiescent.dom.ul.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"nav navbar-nav"], null),quiescent.dom.li.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.h1.call(null,cljs.core.PersistentArrayMap.EMPTY,"WiShare")))))),header_comp.call(null,header,mode__$1),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"content col-md-12 panel panel-default"], null),dashboard_comp.call(null,dashboard,mode__$1),timeline_comp.call(null,timeline,mode__$1)));
}));
});
wishare.core.Page = wishare.core.mk_page.call(null,wishare.profile.UserHeader,wishare.core.dashboard.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wishlist","wishlist",352427404),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"comp","comp",1191953630),wishare.wishlist.Wishlist,new cljs.core.Keyword(null,"title","title",636505583),"Wishlist",new cljs.core.Keyword(null,"modes","modes",-1377787092),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"my-own","my-own",-1841146167),null,new cljs.core.Keyword(null,"readonly","readonly",-1101398934),null,new cljs.core.Keyword(null,"friend","friend",-286879240),null], null), null)], null),new cljs.core.Keyword(null,"friends","friends",-127631374),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"comp","comp",1191953630),wishare.friends.FriendList,new cljs.core.Keyword(null,"title","title",636505583),"Friends",new cljs.core.Keyword(null,"modes","modes",-1377787092),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"my-own","my-own",-1841146167),null,new cljs.core.Keyword(null,"friend","friend",-286879240),null], null), null)], null)], null)),wishare.timeline.Timeline);
cljs.core.add_watch.call(null,wishare.core.state,new cljs.core.Keyword("wishare.core","render","wishare.core/render",1676163762),(function (_,atm,___$1,data){return quiescent.render.call(null,wishare.core.Page.call(null,data),document.getElementById("root"));
}));
wishare.core.renderProfile = (function renderProfile(){wishare.core.use_the_force_BANG_.call(null);
var cnt = cljs.core.atom.call(null,(9));return window.setInterval(((function (cnt){
return (function() { 
var G__15260__delegate = function (_){var x = cljs.core.swap_BANG_.call(null,cnt,((function (cnt){
return (function (n){if((n > (-1)))
{return (n - (1));
} else
{return (10);
}
});})(cnt))
);return cljs.core.swap_BANG_.call(null,wishare.core.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timeline","timeline",192903161)], null),((function (x,cnt){
return (function (l){if((x < (0)))
{return cljs.core.List.EMPTY;
} else
{return cljs.core.take.call(null,(5),cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),(((x > (0)))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((x - (1)))+"..."):"BOOM!")], null),l));
}
});})(x,cnt))
);
};
var G__15260 = function (var_args){
var _ = null;if (arguments.length > 0) {
  _ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__15260__delegate.call(this,_);};
G__15260.cljs$lang$maxFixedArity = 0;
G__15260.cljs$lang$applyTo = (function (arglist__15261){
var _ = cljs.core.seq(arglist__15261);
return G__15260__delegate(_);
});
G__15260.cljs$core$IFn$_invoke$arity$variadic = G__15260__delegate;
return G__15260;
})()
;})(cnt))
,(500));
});
goog.exportSymbol('wishare.core.renderProfile', wishare.core.renderProfile);
