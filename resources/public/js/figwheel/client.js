// Compiled by ClojureScript 0.0-2356
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.net.jsloader');
goog.require('goog.net.jsloader');
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__11213,args){var map__11215 = p__11213;var map__11215__$1 = ((cljs.core.seq_QMARK_.call(null,map__11215))?cljs.core.apply.call(null,cljs.core.hash_map,map__11215):map__11215);var debug = cljs.core.get.call(null,map__11215__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__11213,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__11213,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__11216){
var p__11213 = cljs.core.first(arglist__11216);
var args = cljs.core.rest(arglist__11216);
return log__delegate(p__11213,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__11217){var map__11219 = p__11217;var map__11219__$1 = ((cljs.core.seq_QMARK_.call(null,map__11219))?cljs.core.apply.call(null,cljs.core.hash_map,map__11219):map__11219);var websocket_url = cljs.core.get.call(null,map__11219__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__11220,callback){var map__11222 = p__11220;var map__11222__$1 = ((cljs.core.seq_QMARK_.call(null,map__11222))?cljs.core.apply.call(null,cljs.core.hash_map,map__11222):map__11222);var msg = map__11222__$1;var dependency_file = cljs.core.get.call(null,map__11222__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__11222__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__11222__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__3639__auto__ = dependency_file;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__11222,map__11222__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__11222,map__11222__$1,msg,dependency_file,namespace,request_url))
);
} else
{return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){var out = cljs.core.async.chan.call(null);figwheel.client.js_reload.call(null,file_msg,((function (out){
return (function (url){cljs.core.async.put_BANG_.call(null,out,url);
return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.reload_js_file,files))));
});
figwheel.client.add_request_url = (function add_request_url(p__11223,p__11224){var map__11227 = p__11223;var map__11227__$1 = ((cljs.core.seq_QMARK_.call(null,map__11227))?cljs.core.apply.call(null,cljs.core.hash_map,map__11227):map__11227);var opts = map__11227__$1;var url_rewriter = cljs.core.get.call(null,map__11227__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__11228 = p__11224;var map__11228__$1 = ((cljs.core.seq_QMARK_.call(null,map__11228))?cljs.core.apply.call(null,cljs.core.hash_map,map__11228):map__11228);var d = map__11228__$1;var file = cljs.core.get.call(null,map__11228__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__11229,p__11230){var map__11272 = p__11229;var map__11272__$1 = ((cljs.core.seq_QMARK_.call(null,map__11272))?cljs.core.apply.call(null,cljs.core.hash_map,map__11272):map__11272);var opts = map__11272__$1;var on_jsload = cljs.core.get.call(null,map__11272__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__11272__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__11273 = p__11230;var map__11273__$1 = ((cljs.core.seq_QMARK_.call(null,map__11273))?cljs.core.apply.call(null,cljs.core.hash_map,map__11273):map__11273);var files = cljs.core.get.call(null,map__11273__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__6395__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6395__auto__,map__11272,map__11272__$1,opts,on_jsload,before_jsload,map__11273,map__11273__$1,files){
return (function (){var f__6396__auto__ = (function (){var switch__6330__auto__ = ((function (c__6395__auto__,map__11272,map__11272__$1,opts,on_jsload,before_jsload,map__11273,map__11273__$1,files){
return (function (state_11296){var state_val_11297 = (state_11296[(1)]);if((state_val_11297 === (6)))
{var inst_11278 = (state_11296[(7)]);var inst_11287 = (state_11296[(2)]);var inst_11288 = cljs.core.PersistentVector.EMPTY_NODE;var inst_11289 = [inst_11278];var inst_11290 = (new cljs.core.PersistentVector(null,1,(5),inst_11288,inst_11289,null));var inst_11291 = cljs.core.apply.call(null,on_jsload,inst_11290);var state_11296__$1 = (function (){var statearr_11298 = state_11296;(statearr_11298[(8)] = inst_11287);
return statearr_11298;
})();var statearr_11299_11313 = state_11296__$1;(statearr_11299_11313[(2)] = inst_11291);
(statearr_11299_11313[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11297 === (5)))
{var inst_11294 = (state_11296[(2)]);var state_11296__$1 = state_11296;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11296__$1,inst_11294);
} else
{if((state_val_11297 === (4)))
{var state_11296__$1 = state_11296;var statearr_11300_11314 = state_11296__$1;(statearr_11300_11314[(2)] = null);
(statearr_11300_11314[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11297 === (3)))
{var inst_11278 = (state_11296[(7)]);var inst_11281 = console.debug("Figwheel: loaded these files");var inst_11282 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_11278);var inst_11283 = cljs.core.prn_str.call(null,inst_11282);var inst_11284 = console.log(inst_11283);var inst_11285 = cljs.core.async.timeout.call(null,(10));var state_11296__$1 = (function (){var statearr_11301 = state_11296;(statearr_11301[(9)] = inst_11281);
(statearr_11301[(10)] = inst_11284);
return statearr_11301;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11296__$1,(6),inst_11285);
} else
{if((state_val_11297 === (2)))
{var inst_11278 = (state_11296[(7)]);var inst_11278__$1 = (state_11296[(2)]);var inst_11279 = cljs.core.not_empty.call(null,inst_11278__$1);var state_11296__$1 = (function (){var statearr_11302 = state_11296;(statearr_11302[(7)] = inst_11278__$1);
return statearr_11302;
})();if(cljs.core.truth_(inst_11279))
{var statearr_11303_11315 = state_11296__$1;(statearr_11303_11315[(1)] = (3));
} else
{var statearr_11304_11316 = state_11296__$1;(statearr_11304_11316[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11297 === (1)))
{var inst_11274 = before_jsload.call(null,files);var inst_11275 = figwheel.client.add_request_urls.call(null,opts,files);var inst_11276 = figwheel.client.load_all_js_files.call(null,inst_11275);var state_11296__$1 = (function (){var statearr_11305 = state_11296;(statearr_11305[(11)] = inst_11274);
return statearr_11305;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11296__$1,(2),inst_11276);
} else
{return null;
}
}
}
}
}
}
});})(c__6395__auto__,map__11272,map__11272__$1,opts,on_jsload,before_jsload,map__11273,map__11273__$1,files))
;return ((function (switch__6330__auto__,c__6395__auto__,map__11272,map__11272__$1,opts,on_jsload,before_jsload,map__11273,map__11273__$1,files){
return (function() {
var state_machine__6331__auto__ = null;
var state_machine__6331__auto____0 = (function (){var statearr_11309 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11309[(0)] = state_machine__6331__auto__);
(statearr_11309[(1)] = (1));
return statearr_11309;
});
var state_machine__6331__auto____1 = (function (state_11296){while(true){
var ret_value__6332__auto__ = (function (){try{while(true){
var result__6333__auto__ = switch__6330__auto__.call(null,state_11296);if(cljs.core.keyword_identical_QMARK_.call(null,result__6333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6333__auto__;
}
break;
}
}catch (e11310){if((e11310 instanceof Object))
{var ex__6334__auto__ = e11310;var statearr_11311_11317 = state_11296;(statearr_11311_11317[(5)] = ex__6334__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11296);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11310;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11318 = state_11296;
state_11296 = G__11318;
continue;
}
} else
{return ret_value__6332__auto__;
}
break;
}
});
state_machine__6331__auto__ = function(state_11296){
switch(arguments.length){
case 0:
return state_machine__6331__auto____0.call(this);
case 1:
return state_machine__6331__auto____1.call(this,state_11296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6331__auto____0;
state_machine__6331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6331__auto____1;
return state_machine__6331__auto__;
})()
;})(switch__6330__auto__,c__6395__auto__,map__11272,map__11272__$1,opts,on_jsload,before_jsload,map__11273,map__11273__$1,files))
})();var state__6397__auto__ = (function (){var statearr_11312 = f__6396__auto__.call(null);(statearr_11312[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6395__auto__);
return statearr_11312;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6397__auto__);
});})(c__6395__auto__,map__11272,map__11272__$1,opts,on_jsload,before_jsload,map__11273,map__11273__$1,files))
);
return c__6395__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__11319,link_href){var map__11321 = p__11319;var map__11321__$1 = ((cljs.core.seq_QMARK_.call(null,map__11321))?cljs.core.apply.call(null,cljs.core.hash_map,map__11321):map__11321);var request_url = cljs.core.get.call(null,map__11321__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__11321__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.get_correct_link = (function get_correct_link(f_data){return cljs.core.some.call(null,(function (l){if(figwheel.client.matches_file_QMARK_.call(null,f_data,l.href))
{return l;
} else
{return null;
}
}),figwheel.client.current_links.call(null));
});
figwheel.client.clone_link = (function clone_link(link,url){var clone = document.createElement("link");clone.rel = "stylesheet";
clone.media = link.media;
clone.disabled = link.disabled;
clone.href = figwheel.client.add_cache_buster.call(null,url);
return clone;
});
figwheel.client.create_link = (function create_link(url){var link = document.createElement("link");link.rel = "stylesheet";
link.href = figwheel.client.add_cache_buster.call(null,url);
return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){var parent = orig_link.parentNode;if(cljs.core._EQ_.call(null,orig_link,parent.lastChild))
{parent.appendChild(klone);
} else
{parent.insertBefore(klone,orig_link.nextSibling);
}
var c__6395__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6395__auto__,parent){
return (function (){var f__6396__auto__ = (function (){var switch__6330__auto__ = ((function (c__6395__auto__,parent){
return (function (state_11342){var state_val_11343 = (state_11342[(1)]);if((state_val_11343 === (2)))
{var inst_11339 = (state_11342[(2)]);var inst_11340 = parent.removeChild(orig_link);var state_11342__$1 = (function (){var statearr_11344 = state_11342;(statearr_11344[(7)] = inst_11339);
return statearr_11344;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11342__$1,inst_11340);
} else
{if((state_val_11343 === (1)))
{var inst_11337 = cljs.core.async.timeout.call(null,(200));var state_11342__$1 = state_11342;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11342__$1,(2),inst_11337);
} else
{return null;
}
}
});})(c__6395__auto__,parent))
;return ((function (switch__6330__auto__,c__6395__auto__,parent){
return (function() {
var state_machine__6331__auto__ = null;
var state_machine__6331__auto____0 = (function (){var statearr_11348 = [null,null,null,null,null,null,null,null];(statearr_11348[(0)] = state_machine__6331__auto__);
(statearr_11348[(1)] = (1));
return statearr_11348;
});
var state_machine__6331__auto____1 = (function (state_11342){while(true){
var ret_value__6332__auto__ = (function (){try{while(true){
var result__6333__auto__ = switch__6330__auto__.call(null,state_11342);if(cljs.core.keyword_identical_QMARK_.call(null,result__6333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6333__auto__;
}
break;
}
}catch (e11349){if((e11349 instanceof Object))
{var ex__6334__auto__ = e11349;var statearr_11350_11352 = state_11342;(statearr_11350_11352[(5)] = ex__6334__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11342);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11349;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11353 = state_11342;
state_11342 = G__11353;
continue;
}
} else
{return ret_value__6332__auto__;
}
break;
}
});
state_machine__6331__auto__ = function(state_11342){
switch(arguments.length){
case 0:
return state_machine__6331__auto____0.call(this);
case 1:
return state_machine__6331__auto____1.call(this,state_11342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6331__auto____0;
state_machine__6331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6331__auto____1;
return state_machine__6331__auto__;
})()
;})(switch__6330__auto__,c__6395__auto__,parent))
})();var state__6397__auto__ = (function (){var statearr_11351 = f__6396__auto__.call(null);(statearr_11351[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6395__auto__);
return statearr_11351;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6397__auto__);
});})(c__6395__auto__,parent))
);
return c__6395__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.reload_css_file = (function reload_css_file(p__11354){var map__11356 = p__11354;var map__11356__$1 = ((cljs.core.seq_QMARK_.call(null,map__11356))?cljs.core.apply.call(null,cljs.core.hash_map,map__11356):map__11356);var f_data = map__11356__$1;var request_url = cljs.core.get.call(null,map__11356__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__11356__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__11357,files_msg){var map__11379 = p__11357;var map__11379__$1 = ((cljs.core.seq_QMARK_.call(null,map__11379))?cljs.core.apply.call(null,cljs.core.hash_map,map__11379):map__11379);var opts = map__11379__$1;var on_cssload = cljs.core.get.call(null,map__11379__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__11380_11400 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__11381_11401 = null;var count__11382_11402 = (0);var i__11383_11403 = (0);while(true){
if((i__11383_11403 < count__11382_11402))
{var f_11404 = cljs.core._nth.call(null,chunk__11381_11401,i__11383_11403);figwheel.client.reload_css_file.call(null,f_11404);
{
var G__11405 = seq__11380_11400;
var G__11406 = chunk__11381_11401;
var G__11407 = count__11382_11402;
var G__11408 = (i__11383_11403 + (1));
seq__11380_11400 = G__11405;
chunk__11381_11401 = G__11406;
count__11382_11402 = G__11407;
i__11383_11403 = G__11408;
continue;
}
} else
{var temp__4126__auto___11409 = cljs.core.seq.call(null,seq__11380_11400);if(temp__4126__auto___11409)
{var seq__11380_11410__$1 = temp__4126__auto___11409;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11380_11410__$1))
{var c__4408__auto___11411 = cljs.core.chunk_first.call(null,seq__11380_11410__$1);{
var G__11412 = cljs.core.chunk_rest.call(null,seq__11380_11410__$1);
var G__11413 = c__4408__auto___11411;
var G__11414 = cljs.core.count.call(null,c__4408__auto___11411);
var G__11415 = (0);
seq__11380_11400 = G__11412;
chunk__11381_11401 = G__11413;
count__11382_11402 = G__11414;
i__11383_11403 = G__11415;
continue;
}
} else
{var f_11416 = cljs.core.first.call(null,seq__11380_11410__$1);figwheel.client.reload_css_file.call(null,f_11416);
{
var G__11417 = cljs.core.next.call(null,seq__11380_11410__$1);
var G__11418 = null;
var G__11419 = (0);
var G__11420 = (0);
seq__11380_11400 = G__11417;
chunk__11381_11401 = G__11418;
count__11382_11402 = G__11419;
i__11383_11403 = G__11420;
continue;
}
}
} else
{}
}
break;
}
var c__6395__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6395__auto__,map__11379,map__11379__$1,opts,on_cssload){
return (function (){var f__6396__auto__ = (function (){var switch__6330__auto__ = ((function (c__6395__auto__,map__11379,map__11379__$1,opts,on_cssload){
return (function (state_11390){var state_val_11391 = (state_11390[(1)]);if((state_val_11391 === (2)))
{var inst_11386 = (state_11390[(2)]);var inst_11387 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_11388 = on_cssload.call(null,inst_11387);var state_11390__$1 = (function (){var statearr_11392 = state_11390;(statearr_11392[(7)] = inst_11386);
return statearr_11392;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11390__$1,inst_11388);
} else
{if((state_val_11391 === (1)))
{var inst_11384 = cljs.core.async.timeout.call(null,(100));var state_11390__$1 = state_11390;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11390__$1,(2),inst_11384);
} else
{return null;
}
}
});})(c__6395__auto__,map__11379,map__11379__$1,opts,on_cssload))
;return ((function (switch__6330__auto__,c__6395__auto__,map__11379,map__11379__$1,opts,on_cssload){
return (function() {
var state_machine__6331__auto__ = null;
var state_machine__6331__auto____0 = (function (){var statearr_11396 = [null,null,null,null,null,null,null,null];(statearr_11396[(0)] = state_machine__6331__auto__);
(statearr_11396[(1)] = (1));
return statearr_11396;
});
var state_machine__6331__auto____1 = (function (state_11390){while(true){
var ret_value__6332__auto__ = (function (){try{while(true){
var result__6333__auto__ = switch__6330__auto__.call(null,state_11390);if(cljs.core.keyword_identical_QMARK_.call(null,result__6333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6333__auto__;
}
break;
}
}catch (e11397){if((e11397 instanceof Object))
{var ex__6334__auto__ = e11397;var statearr_11398_11421 = state_11390;(statearr_11398_11421[(5)] = ex__6334__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11390);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11397;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11422 = state_11390;
state_11390 = G__11422;
continue;
}
} else
{return ret_value__6332__auto__;
}
break;
}
});
state_machine__6331__auto__ = function(state_11390){
switch(arguments.length){
case 0:
return state_machine__6331__auto____0.call(this);
case 1:
return state_machine__6331__auto____1.call(this,state_11390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6331__auto____0;
state_machine__6331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6331__auto____1;
return state_machine__6331__auto__;
})()
;})(switch__6330__auto__,c__6395__auto__,map__11379,map__11379__$1,opts,on_cssload))
})();var state__6397__auto__ = (function (){var statearr_11399 = f__6396__auto__.call(null);(statearr_11399[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6395__auto__);
return statearr_11399;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6397__auto__);
});})(c__6395__auto__,map__11379,map__11379__$1,opts,on_cssload))
);
return c__6395__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){return compile_fail_callback.call(null,cljs.core.dissoc.call(null,fail_msg,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){if(cljs.core.truth_(goog.inHtmlDocument_()))
{goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,src));
return true;
} else
{return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){goog.provide = goog.exportPath_;
return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__11423){var map__11428 = p__11423;var map__11428__$1 = ((cljs.core.seq_QMARK_.call(null,map__11428))?cljs.core.apply.call(null,cljs.core.hash_map,map__11428):map__11428);var opts = map__11428__$1;var on_compile_fail = cljs.core.get.call(null,map__11428__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__11428__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__11428__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__11428__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__11428,map__11428__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__11429 = cljs.core._EQ_;var expr__11430 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__11429.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__11430)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__11429.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__11430)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__11429.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__11430)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__11428,map__11428__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__11428,map__11428__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__11428,map__11428__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__11428,map__11428__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__11428,map__11428__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__11428,map__11428__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__11428,map__11428__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__11428,map__11428__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__11428,map__11428__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj11435 = {"detail":url};return obj11435;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__11436){var map__11438 = p__11436;var map__11438__$1 = ((cljs.core.seq_QMARK_.call(null,map__11438))?cljs.core.apply.call(null,cljs.core.hash_map,map__11438):map__11438);var class$ = cljs.core.get.call(null,map__11438__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__11438__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__11439){var map__11445 = p__11439;var map__11445__$1 = ((cljs.core.seq_QMARK_.call(null,map__11445))?cljs.core.apply.call(null,cljs.core.hash_map,map__11445):map__11445);var ed = map__11445__$1;var exception_data = cljs.core.get.call(null,map__11445__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__11445__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__11446_11450 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__11447_11451 = null;var count__11448_11452 = (0);var i__11449_11453 = (0);while(true){
if((i__11449_11453 < count__11448_11452))
{var msg_11454 = cljs.core._nth.call(null,chunk__11447_11451,i__11449_11453);console.log(msg_11454);
{
var G__11455 = seq__11446_11450;
var G__11456 = chunk__11447_11451;
var G__11457 = count__11448_11452;
var G__11458 = (i__11449_11453 + (1));
seq__11446_11450 = G__11455;
chunk__11447_11451 = G__11456;
count__11448_11452 = G__11457;
i__11449_11453 = G__11458;
continue;
}
} else
{var temp__4126__auto___11459 = cljs.core.seq.call(null,seq__11446_11450);if(temp__4126__auto___11459)
{var seq__11446_11460__$1 = temp__4126__auto___11459;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11446_11460__$1))
{var c__4408__auto___11461 = cljs.core.chunk_first.call(null,seq__11446_11460__$1);{
var G__11462 = cljs.core.chunk_rest.call(null,seq__11446_11460__$1);
var G__11463 = c__4408__auto___11461;
var G__11464 = cljs.core.count.call(null,c__4408__auto___11461);
var G__11465 = (0);
seq__11446_11450 = G__11462;
chunk__11447_11451 = G__11463;
count__11448_11452 = G__11464;
i__11449_11453 = G__11465;
continue;
}
} else
{var msg_11466 = cljs.core.first.call(null,seq__11446_11460__$1);console.log(msg_11466);
{
var G__11467 = cljs.core.next.call(null,seq__11446_11460__$1);
var G__11468 = null;
var G__11469 = (0);
var G__11470 = (0);
seq__11446_11450 = G__11467;
chunk__11447_11451 = G__11468;
count__11448_11452 = G__11469;
i__11449_11453 = G__11470;
continue;
}
}
} else
{}
}
break;
}
return ed;
});
figwheel.client.default_before_load = (function default_before_load(files){console.debug("Figwheel: loading files");
return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){console.debug("Figwheel: loaded CSS files");
console.log(cljs.core.prn_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(100),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){var or__3639__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return figwheel.client.default_on_jsload;
}
})(),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318),figwheel.client.default_on_cssload,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),figwheel.client.default_before_load,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),figwheel.client.default_on_compile_fail,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),cljs.core.identity,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),("ws://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host)+"/figwheel-ws")], null),opts));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__11471){var map__11473 = p__11471;var map__11473__$1 = ((cljs.core.seq_QMARK_.call(null,map__11473))?cljs.core.apply.call(null,cljs.core.hash_map,map__11473):map__11473);var opts = map__11473__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__11471 = null;if (arguments.length > 0) {
  p__11471 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__11471);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__11474){
var p__11471 = cljs.core.seq(arglist__11474);
return watch_and_reload__delegate(p__11471);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;
