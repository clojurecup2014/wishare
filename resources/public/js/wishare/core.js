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
wishare.core.dashboard = (function dashboard(tabs){var config = cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),tabs));var tabs__$1 = cljs.core.map.call(null,cljs.core.first,config);var config__$1 = cljs.core.reduce.call(null,cljs.core.conj,cljs.core.PersistentArrayMap.EMPTY,config);return quiescent.component.call(null,((function (config,tabs__$1,config__$1){
return (function (mode,p__12698){var map__12699 = p__12698;var map__12699__$1 = ((cljs.core.seq_QMARK_.call(null,map__12699))?cljs.core.apply.call(null,cljs.core.hash_map,map__12699):map__12699);var items = cljs.core.get.call(null,map__12699__$1,new cljs.core.Keyword(null,"items","items",1031954938));var active = cljs.core.get.call(null,map__12699__$1,new cljs.core.Keyword(null,"active","active",1895962068));var heading = quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"panel-heading"], null),cljs.core.apply.call(null,quiescent.dom.ul,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"nav nav-pills nav-justified",new cljs.core.Keyword(null,"role","role",-736691072),"tablist"], null),(function (){var iter__4377__auto__ = ((function (map__12699,map__12699__$1,items,active,config,tabs__$1,config__$1){
return (function iter__12700(s__12701){return (new cljs.core.LazySeq(null,((function (map__12699,map__12699__$1,items,active,config,tabs__$1,config__$1){
return (function (){var s__12701__$1 = s__12701;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12701__$1);if(temp__4126__auto__)
{var s__12701__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12701__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__12701__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__12703 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__12702 = (0);while(true){
if((i__12702 < size__4376__auto__))
{var tab = cljs.core._nth.call(null,c__4375__auto__,i__12702);var map__12706 = config__$1.call(null,tab);var map__12706__$1 = ((cljs.core.seq_QMARK_.call(null,map__12706))?cljs.core.apply.call(null,cljs.core.hash_map,map__12706):map__12706);var modes = cljs.core.get.call(null,map__12706__$1,new cljs.core.Keyword(null,"modes","modes",-1377787092));var title = cljs.core.get.call(null,map__12706__$1,new cljs.core.Keyword(null,"title","title",636505583));if(cljs.core.truth_(modes.call(null,mode)))
{cljs.core.chunk_append.call(null,b__12703,((cljs.core._EQ_.call(null,tab,active))?quiescent.dom.li.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"active"], null),quiescent.dom.a.call(null,cljs.core.PersistentArrayMap.EMPTY,title)):quiescent.dom.li.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.a.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),title))));
{
var G__12708 = (i__12702 + (1));
i__12702 = G__12708;
continue;
}
} else
{{
var G__12709 = (i__12702 + (1));
i__12702 = G__12709;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12703),iter__12700.call(null,cljs.core.chunk_rest.call(null,s__12701__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12703),null);
}
} else
{var tab = cljs.core.first.call(null,s__12701__$2);var map__12707 = config__$1.call(null,tab);var map__12707__$1 = ((cljs.core.seq_QMARK_.call(null,map__12707))?cljs.core.apply.call(null,cljs.core.hash_map,map__12707):map__12707);var modes = cljs.core.get.call(null,map__12707__$1,new cljs.core.Keyword(null,"modes","modes",-1377787092));var title = cljs.core.get.call(null,map__12707__$1,new cljs.core.Keyword(null,"title","title",636505583));if(cljs.core.truth_(modes.call(null,mode)))
{return cljs.core.cons.call(null,((cljs.core._EQ_.call(null,tab,active))?quiescent.dom.li.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"active"], null),quiescent.dom.a.call(null,cljs.core.PersistentArrayMap.EMPTY,title)):quiescent.dom.li.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.a.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),title))),iter__12700.call(null,cljs.core.rest.call(null,s__12701__$2)));
} else
{{
var G__12710 = cljs.core.rest.call(null,s__12701__$2);
s__12701__$1 = G__12710;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(map__12699,map__12699__$1,items,active,config,tabs__$1,config__$1))
,null,null));
});})(map__12699,map__12699__$1,items,active,config,tabs__$1,config__$1))
;return iter__4377__auto__.call(null,tabs__$1);
})()));var comp = cljs.core.get_in.call(null,config__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [active,new cljs.core.Keyword(null,"comp","comp",1191953630)], null));var available_modes = cljs.core.get_in.call(null,config__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [active,new cljs.core.Keyword(null,"modes","modes",-1377787092)], null));if(cljs.core.truth_(available_modes.call(null,mode)))
{return quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"col-md-8 dashboard"], null),comp.call(null,mode,heading,items));
} else
{throw ("Tab "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(active)+" is not available in mode "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(mode)+"!");
}
});})(config,tabs__$1,config__$1))
);
});
/**
* 
*/
wishare.core.STUB = quiescent.component.call(null,(function() { 
var G__12711__delegate = function (whatever){return quiescent.dom.div.call(null,cljs.core.PersistentArrayMap.EMPTY,"STUB!");
};
var G__12711 = function (var_args){
var whatever = null;if (arguments.length > 0) {
  whatever = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__12711__delegate.call(this,whatever);};
G__12711.cljs$lang$maxFixedArity = 0;
G__12711.cljs$lang$applyTo = (function (arglist__12712){
var whatever = cljs.core.seq(arglist__12712);
return G__12711__delegate(whatever);
});
G__12711.cljs$core$IFn$_invoke$arity$variadic = G__12711__delegate;
return G__12711;
})()
);
/**
* Typical page with header, dashboard and timeline
*/
wishare.core.Page = quiescent.component.call(null,(function (header_comp,dashboard_comp,timeline_comp,mode,p__12713){var map__12714 = p__12713;var map__12714__$1 = ((cljs.core.seq_QMARK_.call(null,map__12714))?cljs.core.apply.call(null,cljs.core.hash_map,map__12714):map__12714);var data = map__12714__$1;var timeline = cljs.core.get.call(null,map__12714__$1,new cljs.core.Keyword(null,"timeline","timeline",192903161));var dashboard = cljs.core.get.call(null,map__12714__$1,new cljs.core.Keyword(null,"dashboard","dashboard",-631747508));var header = cljs.core.get.call(null,map__12714__$1,new cljs.core.Keyword(null,"header","header",119441134));return quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"container"], null),header_comp.call(null,mode,header),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"content col-md-12 panel panel-default"], null),dashboard_comp.call(null,mode,dashboard),timeline_comp.call(null,mode,timeline)));
}));
wishare.core.ProfilePage = cljs.core.partial.call(null,wishare.core.Page,wishare.profile.UserHeader,wishare.core.dashboard.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wishlist","wishlist",352427404),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"comp","comp",1191953630),wishare.wishlist.Wishlist,new cljs.core.Keyword(null,"title","title",636505583),"Wishlist",new cljs.core.Keyword(null,"modes","modes",-1377787092),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"my-own","my-own",-1841146167),null,new cljs.core.Keyword(null,"readonly","readonly",-1101398934),null,new cljs.core.Keyword(null,"friend","friend",-286879240),null], null), null)], null),new cljs.core.Keyword(null,"friends","friends",-127631374),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"comp","comp",1191953630),wishare.friends.FriendList,new cljs.core.Keyword(null,"title","title",636505583),"Friends",new cljs.core.Keyword(null,"modes","modes",-1377787092),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"my-own","my-own",-1841146167),null,new cljs.core.Keyword(null,"friend","friend",-286879240),null], null), null)], null)], null)),wishare.timeline.Timeline);
wishare.core.renderProfile = (function renderProfile(){var frs = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"friends","friends",-127631374),new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"real-name","real-name",301436383),"John Dowe",new cljs.core.Keyword(null,"login","login",55217519),"jd",new cljs.core.Keyword(null,"id","id",-1388402092),(100)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"real-name","real-name",301436383),"Moe",new cljs.core.Keyword(null,"login","login",55217519),"moe",new cljs.core.Keyword(null,"id","id",-1388402092),(101)], null)], null)], null);var wss = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"wishlist","wishlist",352427404),new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"PipBoy 3K",new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"image","image",-58725096),"http://www.fordesigner.com/imguploads/Image/cjbc/zcool/png20080526/1211811605.png"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Tesla",new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"image","image",-58725096),"http://ev-cars.ru/sites/default/files/styles/icon-64x64/public/gallery/2012/12/04/2013-Tesla-Model-S-front-1.jpg"], null)], null)], null);var fake = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Vault Boy",new cljs.core.Keyword(null,"nickname","nickname",-802027190),"vault_boy",new cljs.core.Keyword(null,"avatar","avatar",-1607499307),"http://www.g0l.ru/imgs/avatars/263.jpg"], null),new cljs.core.Keyword(null,"dashboard","dashboard",-631747508),cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),wss,new cljs.core.Keyword(null,"f","f",-1597136552),frs], null),new cljs.core.Keyword(null,"w","w",354169001)),new cljs.core.Keyword(null,"timeline","timeline",192903161),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Wish the PipBoy 3K",new cljs.core.Keyword(null,"timestamp","timestamp",579478971),"5 min"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Gifted a bramin",new cljs.core.Keyword(null,"timestamp","timestamp",579478971),"30 days"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Gifted a health kit",new cljs.core.Keyword(null,"timestamp","timestamp",579478971),"1 day"], null)], null)], null);return quiescent.render.call(null,wishare.core.ProfilePage.call(null,new cljs.core.Keyword(null,"my-own","my-own",-1841146167),fake),document.getElementById("root"));
});
goog.exportSymbol('wishare.core.renderProfile', wishare.core.renderProfile);
