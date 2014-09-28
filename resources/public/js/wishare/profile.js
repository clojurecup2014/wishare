// Compiled by ClojureScript 0.0-2356
goog.provide('wishare.profile');
goog.require('cljs.core');
goog.require('quiescent.dom');
goog.require('quiescent.dom');
goog.require('quiescent');
goog.require('quiescent');
/**
* User profile header
*/
wishare.profile.UserHeader = quiescent.component.call(null,(function (p__13777,mode){var map__13778 = p__13777;var map__13778__$1 = ((cljs.core.seq_QMARK_.call(null,map__13778))?cljs.core.apply.call(null,cljs.core.hash_map,map__13778):map__13778);var friend_QMARK_ = cljs.core.get.call(null,map__13778__$1,new cljs.core.Keyword(null,"friend?","friend?",1903697798),false);var nickname = cljs.core.get.call(null,map__13778__$1,new cljs.core.Keyword(null,"nickname","nickname",-802027190));var name = cljs.core.get.call(null,map__13778__$1,new cljs.core.Keyword(null,"name","name",1843675177));var id = cljs.core.get.call(null,map__13778__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var avatar = cljs.core.get.call(null,map__13778__$1,new cljs.core.Keyword(null,"avatar","avatar",-1607499307),null);return quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"page-header panel panel-default col-md-12"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"panel-body"], null),quiescent.dom.img.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),(function (){var or__3639__auto__ = avatar;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "/img/noavatar.png";
}
})(),new cljs.core.Keyword(null,"alt","alt",-3214426),"avatar",new cljs.core.Keyword(null,"className","className",-1983287057),"img-thumbnail pull-left avatar image120x120"], null)),quiescent.dom.h1.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"user"], null),name,quiescent.dom.small.call(null,cljs.core.PersistentArrayMap.EMPTY,nickname)),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"my-own","my-own",-1841146167),null,new cljs.core.Keyword(null,"readonly","readonly",-1101398934),null], null), null).call(null,mode))?null:(cljs.core.truth_(friend_QMARK_)?quiescent.dom.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"btn btn-xs btn-danger remove-friend"], null),"Remove from friends"):quiescent.dom.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"btn btn-xs btn-success add-friend"], null),"Add to friends")))));
}));
