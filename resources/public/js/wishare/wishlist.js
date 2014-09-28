// Compiled by ClojureScript 0.0-2356
goog.provide('wishare.wishlist');
goog.require('cljs.core');
goog.require('quiescent.dom');
goog.require('quiescent.dom');
goog.require('quiescent');
goog.require('quiescent');
/**
* Wishlist item prototype
*/
wishare.wishlist.Wish = (function Wish(extension){return quiescent.component.call(null,(function (data){var vec__11242 = extension.call(null,data);var map__11243 = cljs.core.nth.call(null,vec__11242,(0),null);var map__11243__$1 = ((cljs.core.seq_QMARK_.call(null,map__11243))?cljs.core.apply.call(null,cljs.core.hash_map,map__11243):map__11243);var image = cljs.core.get.call(null,map__11243__$1,new cljs.core.Keyword(null,"image","image",-58725096));var title = cljs.core.get.call(null,map__11243__$1,new cljs.core.Keyword(null,"title","title",636505583));var id = cljs.core.get.call(null,map__11243__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var elems = cljs.core.nthnext.call(null,vec__11242,(1));return cljs.core.apply.call(null,quiescent.dom.li,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"list-group-item wish-item"], null),quiescent.dom.img.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",-1983287057),"img-thumbnail photo image32x32",new cljs.core.Keyword(null,"src","src",-1651076051),(function (){var or__3639__auto__ = image;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "/img/nophoto.png";
}
})(),new cljs.core.Keyword(null,"alt","alt",-3214426),"Wish image thumbnail"], null)),(cljs.core.truth_(id)?quiescent.dom.a.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"className","className",-1983287057),"title"], null),title):quiescent.dom.span.call(null,cljs.core.PersistentArrayMap.EMPTY,title)),elems);
}));
});
/**
* Read-only wish
*/
wishare.wishlist.ROWish = wishare.wishlist.Wish.call(null,(function (data){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.dissoc.call(null,data,new cljs.core.Keyword(null,"id","id",-1388402092))], null);
}));
/**
* Current user's wish
*/
wishare.wishlist.MyWish = (function (){var btn = (function btn(cls,text){return quiescent.dom.button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),("btn badge "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cls)),new cljs.core.Keyword(null,"type","type",1174270348),"button"], null),quiescent.dom.span.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"glyphicon glyphicon-edit"], null)),text);
});
return wishare.wishlist.Wish.call(null,(function (data){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [data,btn.call(null,"edit","Edit"),btn.call(null,"remove","Remove")], null);
}));
})();
/**
* Friend's wish
*/
wishare.wishlist.FriendWish = wishare.wishlist.Wish.call(null,(function (data){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [data], null);
}));
/**
* Wishlist
*/
wishare.wishlist.Wishlist = quiescent.component.call(null,(function (heading,readonly_QMARK_,p__11244){var map__11245 = p__11244;var map__11245__$1 = ((cljs.core.seq_QMARK_.call(null,map__11245))?cljs.core.apply.call(null,cljs.core.hash_map,map__11245):map__11245);var my_own_QMARK_ = cljs.core.get.call(null,map__11245__$1,new cljs.core.Keyword(null,"my-own?","my-own?",1784340277),false);var items = cljs.core.get.call(null,map__11245__$1,new cljs.core.Keyword(null,"items","items",1031954938));return quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"panel panel-default wishlist"], null),heading,cljs.core.apply.call(null,cljs.core.partial.call(null,quiescent.dom.ul,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"wishlist list-group"], null),(cljs.core.truth_(readonly_QMARK_)?null:(cljs.core.truth_(my_own_QMARK_)?quiescent.dom.li.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"list-group-item add-wish"], null),quiescent.dom.button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"className","className",-1983287057),"btn btn-default btn-block add-wish"], null),"Add Wish Item")):null))),(function (){var item = (cljs.core.truth_(readonly_QMARK_)?wishare.wishlist.ROWish:(cljs.core.truth_(my_own_QMARK_)?wishare.wishlist.MyWish:wishare.wishlist.FriendWish
));return cljs.core.map.call(null,item,items);
})()));
}));
