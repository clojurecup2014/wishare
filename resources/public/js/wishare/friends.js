// Compiled by ClojureScript 0.0-2356
goog.provide('wishare.friends');
goog.require('cljs.core');
goog.require('quiescent.dom');
goog.require('quiescent.dom');
goog.require('quiescent');
goog.require('quiescent');
/**
* Friend list item
*/
wishare.friends.Friend = quiescent.component.call(null,(function (p__13808){var map__13809 = p__13808;var map__13809__$1 = ((cljs.core.seq_QMARK_.call(null,map__13809))?cljs.core.apply.call(null,cljs.core.hash_map,map__13809):map__13809);var to_me_QMARK_ = cljs.core.get.call(null,map__13809__$1,new cljs.core.Keyword(null,"to-me?","to-me?",-2077154767),false);var avatar_url = cljs.core.get.call(null,map__13809__$1,new cljs.core.Keyword(null,"avatar-url","avatar-url",-1034626103));var real_name = cljs.core.get.call(null,map__13809__$1,new cljs.core.Keyword(null,"real-name","real-name",301436383));var login = cljs.core.get.call(null,map__13809__$1,new cljs.core.Keyword(null,"login","login",55217519));var btn = ((function (map__13809,map__13809__$1,to_me_QMARK_,avatar_url,real_name,login){
return (function btn(cls,text){return quiescent.dom.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),("badge btn pull-right "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cls))], null),text);
});})(map__13809,map__13809__$1,to_me_QMARK_,avatar_url,real_name,login))
;
return quiescent.dom.li.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"list-group-item friend"], null),quiescent.dom.img.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",-1983287057),"img-thumbnail image64x64",new cljs.core.Keyword(null,"src","src",-1651076051),(function (){var or__3639__auto__ = avatar_url;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "/img/noavatar.png";
}
})(),new cljs.core.Keyword(null,"alt","alt",-3214426),"avatar"], null)),quiescent.dom.h4.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"inline"], null)], null),real_name,quiescent.dom.small.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.a.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),login))),(cljs.core.truth_(to_me_QMARK_)?btn.call(null,"remove-friend","Remove from friends"):btn.call(null,"add-friend","Add to friends")));
}));
/**
* 
*/
wishare.friends.FriendList = quiescent.component.call(null,(function (items,heading,mode){return quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"panel panel-default friends"], null),heading,((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"read-only","read-only",-191706886)))?null:cljs.core.apply.call(null,quiescent.dom.ul,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"friends list-group"], null),cljs.core.map.call(null,wishare.friends.Friend,items))));
}));
