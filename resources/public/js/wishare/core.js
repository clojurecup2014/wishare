// Compiled by ClojureScript 0.0-2356
goog.provide('wishare.core');
goog.require('cljs.core');
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
wishare.core.dashboard = (function dashboard(inner){return quiescent.component.call(null,(function (readonly_QMARK_,data){var heading = quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"panel-heading"], null),quiescent.dom.ul.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"nav nav-pills nav-justified",new cljs.core.Keyword(null,"role","role",-736691072),"tablist"], null),quiescent.dom.li.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"active"], null),"Wishlist")));return quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"col-md-8 dashboard"], null),inner.call(null,heading,readonly_QMARK_,data));
}));
});
/**
* 
*/
wishare.core.STUB = quiescent.component.call(null,(function() { 
var G__11274__delegate = function (whatever){return quiescent.dom.div.call(null,cljs.core.PersistentArrayMap.EMPTY,"STUB!");
};
var G__11274 = function (var_args){
var whatever = null;if (arguments.length > 0) {
  whatever = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__11274__delegate.call(this,whatever);};
G__11274.cljs$lang$maxFixedArity = 0;
G__11274.cljs$lang$applyTo = (function (arglist__11275){
var whatever = cljs.core.seq(arglist__11275);
return G__11274__delegate(whatever);
});
G__11274.cljs$core$IFn$_invoke$arity$variadic = G__11274__delegate;
return G__11274;
})()
);
/**
* Typical page with header, dashboard and timeline
*/
wishare.core.Page = quiescent.component.call(null,(function (header_comp,dashboard_comp,timeline_comp,readonly_QMARK_,p__11276){var map__11277 = p__11276;var map__11277__$1 = ((cljs.core.seq_QMARK_.call(null,map__11277))?cljs.core.apply.call(null,cljs.core.hash_map,map__11277):map__11277);var data = map__11277__$1;var timeline = cljs.core.get.call(null,map__11277__$1,new cljs.core.Keyword(null,"timeline","timeline",192903161));var dashboard = cljs.core.get.call(null,map__11277__$1,new cljs.core.Keyword(null,"dashboard","dashboard",-631747508));var header = cljs.core.get.call(null,map__11277__$1,new cljs.core.Keyword(null,"header","header",119441134));return quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"container"], null),header_comp.call(null,readonly_QMARK_,header),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"content col-md-12 panel panel-default"], null),dashboard_comp.call(null,readonly_QMARK_,dashboard),timeline_comp.call(null,readonly_QMARK_,timeline)));
}));
wishare.core.ProfilePage = cljs.core.partial.call(null,wishare.core.Page,wishare.profile.UserHeader,wishare.core.dashboard.call(null,wishare.wishlist.Wishlist),wishare.core.STUB);
wishare.core.renderProfile = (function renderProfile(){var fake = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Vault Boy",new cljs.core.Keyword(null,"nickname","nickname",-802027190),"vault_boy",new cljs.core.Keyword(null,"avatar","avatar",-1607499307),"http://www.g0l.ru/imgs/avatars/263.jpg"], null),new cljs.core.Keyword(null,"dashboard","dashboard",-631747508),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"my-own?","my-own?",1784340277),true,new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"iPhone6",new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"image","image",-58725096),"http://www.fordesigner.com/imguploads/Image/cjbc/zcool/png20080526/1211811605.png"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Tesla",new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"image","image",-58725096),"http://ev-cars.ru/sites/default/files/styles/icon-64x64/public/gallery/2012/12/04/2013-Tesla-Model-S-front-1.jpg"], null)], null)], null)], null);return quiescent.render.call(null,wishare.core.ProfilePage.call(null,false,fake),document.getElementById("root"));
});
goog.exportSymbol('wishare.core.renderProfile', wishare.core.renderProfile);
