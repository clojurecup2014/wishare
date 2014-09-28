// Compiled by ClojureScript 0.0-2356
goog.provide('wishare.timeline');
goog.require('cljs.core');
goog.require('quiescent.dom');
goog.require('quiescent.dom');
goog.require('quiescent');
goog.require('quiescent');
/**
* Timeline event
*/
wishare.timeline.Event = quiescent.component.call(null,(function (p__13806){var map__13807 = p__13806;var map__13807__$1 = ((cljs.core.seq_QMARK_.call(null,map__13807))?cljs.core.apply.call(null,cljs.core.hash_map,map__13807):map__13807);var timestamp = cljs.core.get.call(null,map__13807__$1,new cljs.core.Keyword(null,"timestamp","timestamp",579478971));var title = cljs.core.get.call(null,map__13807__$1,new cljs.core.Keyword(null,"title","title",636505583));return quiescent.dom.li.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"list-group-item"], null),quiescent.dom.p.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.span.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"description"], null),title),quiescent.dom.small.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"pull-right timestamp"], null),timestamp)));
}));
/**
* Timeline List
*/
wishare.timeline.Timeline = quiescent.component.call(null,(function (items,mode){return quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"col-md-4 side-pane"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"panel panel-default timeline"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"panel-heading"], null),quiescent.dom.h2.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"panel-title"], null),"Recent events")),cljs.core.apply.call(null,quiescent.dom.ul,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"list-group"], null),((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"readonly","readonly",-1101398934)))?null:cljs.core.map.call(null,wishare.timeline.Event,items)))));
}));
