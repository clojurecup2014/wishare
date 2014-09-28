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
wishare.core.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"flag","flag",1088647881),false,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"my-own","my-own",-1841146167),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Vault Boy",new cljs.core.Keyword(null,"nickname","nickname",-802027190),"vault_boy",new cljs.core.Keyword(null,"avatar","avatar",-1607499307),"http://www.g0l.ru/imgs/avatars/263.jpg"], null),new cljs.core.Keyword(null,"dashboard","dashboard",-631747508),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"wishlist","wishlist",352427404),new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"PipBoy 3K",new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"image","image",-58725096),"http://www.fordesigner.com/imguploads/Image/cjbc/zcool/png20080526/1211811605.png"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Tesla",new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"image","image",-58725096),"http://ev-cars.ru/sites/default/files/styles/icon-64x64/public/gallery/2012/12/04/2013-Tesla-Model-S-front-1.jpg"], null)], null)], null),new cljs.core.Keyword(null,"dashboard-backup","dashboard-backup",-639925098),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"friends","friends",-127631374),new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"real-name","real-name",301436383),"John Dowe",new cljs.core.Keyword(null,"login","login",55217519),"jd",new cljs.core.Keyword(null,"id","id",-1388402092),(100)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"real-name","real-name",301436383),"Moe",new cljs.core.Keyword(null,"login","login",55217519),"moe",new cljs.core.Keyword(null,"id","id",-1388402092),(101)], null)], null)], null),new cljs.core.Keyword(null,"timeline","timeline",192903161),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Wish the PipBoy 3K",new cljs.core.Keyword(null,"timestamp","timestamp",579478971),"5 min"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Gifted a bramin",new cljs.core.Keyword(null,"timestamp","timestamp",579478971),"30 days"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Gifted a health kit",new cljs.core.Keyword(null,"timestamp","timestamp",579478971),"1 day"], null)], null)], null));
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
return (function (p__14392,mode){var map__14393 = p__14392;var map__14393__$1 = ((cljs.core.seq_QMARK_.call(null,map__14393))?cljs.core.apply.call(null,cljs.core.hash_map,map__14393):map__14393);var items = cljs.core.get.call(null,map__14393__$1,new cljs.core.Keyword(null,"items","items",1031954938));var active = cljs.core.get.call(null,map__14393__$1,new cljs.core.Keyword(null,"active","active",1895962068));var heading = quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"panel-heading"], null),cljs.core.apply.call(null,quiescent.dom.ul,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"nav nav-pills nav-justified",new cljs.core.Keyword(null,"role","role",-736691072),"tablist"], null),(function (){var iter__4377__auto__ = ((function (map__14393,map__14393__$1,items,active,config,tabs__$1,config__$1){
return (function iter__14394(s__14395){return (new cljs.core.LazySeq(null,((function (map__14393,map__14393__$1,items,active,config,tabs__$1,config__$1){
return (function (){var s__14395__$1 = s__14395;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14395__$1);if(temp__4126__auto__)
{var s__14395__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14395__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__14395__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__14397 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__14396 = (0);while(true){
if((i__14396 < size__4376__auto__))
{var tab = cljs.core._nth.call(null,c__4375__auto__,i__14396);var map__14400 = config__$1.call(null,tab);var map__14400__$1 = ((cljs.core.seq_QMARK_.call(null,map__14400))?cljs.core.apply.call(null,cljs.core.hash_map,map__14400):map__14400);var modes = cljs.core.get.call(null,map__14400__$1,new cljs.core.Keyword(null,"modes","modes",-1377787092));var title = cljs.core.get.call(null,map__14400__$1,new cljs.core.Keyword(null,"title","title",636505583));if(cljs.core.truth_(modes.call(null,mode)))
{cljs.core.chunk_append.call(null,b__14397,((cljs.core._EQ_.call(null,tab,active))?quiescent.dom.li.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"active"], null),quiescent.dom.a.call(null,cljs.core.PersistentArrayMap.EMPTY,title)):quiescent.dom.li.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.a.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (i__14396,s__14395__$1,map__14400,map__14400__$1,modes,title,tab,c__4375__auto__,size__4376__auto__,b__14397,s__14395__$2,temp__4126__auto__,map__14393,map__14393__$1,items,active,config,tabs__$1,config__$1){
return (function (_){return wishare.core.switch_dashboard_to_BANG_.call(null,tab);
});})(i__14396,s__14395__$1,map__14400,map__14400__$1,modes,title,tab,c__4375__auto__,size__4376__auto__,b__14397,s__14395__$2,temp__4126__auto__,map__14393,map__14393__$1,items,active,config,tabs__$1,config__$1))
], null),title))));
{
var G__14402 = (i__14396 + (1));
i__14396 = G__14402;
continue;
}
} else
{{
var G__14403 = (i__14396 + (1));
i__14396 = G__14403;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14397),iter__14394.call(null,cljs.core.chunk_rest.call(null,s__14395__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14397),null);
}
} else
{var tab = cljs.core.first.call(null,s__14395__$2);var map__14401 = config__$1.call(null,tab);var map__14401__$1 = ((cljs.core.seq_QMARK_.call(null,map__14401))?cljs.core.apply.call(null,cljs.core.hash_map,map__14401):map__14401);var modes = cljs.core.get.call(null,map__14401__$1,new cljs.core.Keyword(null,"modes","modes",-1377787092));var title = cljs.core.get.call(null,map__14401__$1,new cljs.core.Keyword(null,"title","title",636505583));if(cljs.core.truth_(modes.call(null,mode)))
{return cljs.core.cons.call(null,((cljs.core._EQ_.call(null,tab,active))?quiescent.dom.li.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"active"], null),quiescent.dom.a.call(null,cljs.core.PersistentArrayMap.EMPTY,title)):quiescent.dom.li.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.a.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (s__14395__$1,map__14401,map__14401__$1,modes,title,tab,s__14395__$2,temp__4126__auto__,map__14393,map__14393__$1,items,active,config,tabs__$1,config__$1){
return (function (_){return wishare.core.switch_dashboard_to_BANG_.call(null,tab);
});})(s__14395__$1,map__14401,map__14401__$1,modes,title,tab,s__14395__$2,temp__4126__auto__,map__14393,map__14393__$1,items,active,config,tabs__$1,config__$1))
], null),title))),iter__14394.call(null,cljs.core.rest.call(null,s__14395__$2)));
} else
{{
var G__14404 = cljs.core.rest.call(null,s__14395__$2);
s__14395__$1 = G__14404;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(map__14393,map__14393__$1,items,active,config,tabs__$1,config__$1))
,null,null));
});})(map__14393,map__14393__$1,items,active,config,tabs__$1,config__$1))
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
wishare.core.mk_page = (function mk_page(header_comp,dashboard_comp,timeline_comp){return quiescent.component.call(null,(function (p__14407,mode){var map__14408 = p__14407;var map__14408__$1 = ((cljs.core.seq_QMARK_.call(null,map__14408))?cljs.core.apply.call(null,cljs.core.hash_map,map__14408):map__14408);var data = map__14408__$1;var timeline = cljs.core.get.call(null,map__14408__$1,new cljs.core.Keyword(null,"timeline","timeline",192903161));var dashboard = cljs.core.get.call(null,map__14408__$1,new cljs.core.Keyword(null,"dashboard","dashboard",-631747508));var header = cljs.core.get.call(null,map__14408__$1,new cljs.core.Keyword(null,"header","header",119441134));var mode__$1 = cljs.core.get.call(null,map__14408__$1,new cljs.core.Keyword(null,"mode","mode",654403691));return quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"container"], null),header_comp.call(null,header,mode__$1),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"content col-md-12 panel panel-default"], null),dashboard_comp.call(null,dashboard,mode__$1),timeline_comp.call(null,timeline,mode__$1)));
}));
});
wishare.core.Page = wishare.core.mk_page.call(null,wishare.profile.UserHeader,wishare.core.dashboard.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wishlist","wishlist",352427404),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"comp","comp",1191953630),wishare.wishlist.Wishlist,new cljs.core.Keyword(null,"title","title",636505583),"Wishlist",new cljs.core.Keyword(null,"modes","modes",-1377787092),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"my-own","my-own",-1841146167),null,new cljs.core.Keyword(null,"readonly","readonly",-1101398934),null,new cljs.core.Keyword(null,"friend","friend",-286879240),null], null), null)], null),new cljs.core.Keyword(null,"friends","friends",-127631374),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"comp","comp",1191953630),wishare.friends.FriendList,new cljs.core.Keyword(null,"title","title",636505583),"Friends",new cljs.core.Keyword(null,"modes","modes",-1377787092),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"my-own","my-own",-1841146167),null,new cljs.core.Keyword(null,"friend","friend",-286879240),null], null), null)], null)], null)),wishare.timeline.Timeline);
cljs.core.add_watch.call(null,wishare.core.state,new cljs.core.Keyword("wishare.core","render","wishare.core/render",1676163762),(function (_,atm,___$1,data){return quiescent.render.call(null,wishare.core.Page.call(null,data),document.getElementById("root"));
}));
wishare.core.renderProfile = (function renderProfile(){return wishare.core.use_the_force_BANG_.call(null);
});
goog.exportSymbol('wishare.core.renderProfile', wishare.core.renderProfile);
