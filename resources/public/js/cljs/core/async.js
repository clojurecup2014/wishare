// Compiled by ClojureScript 0.0-2356
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11603 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11603 = (function (f,fn_handler,meta11604){
this.f = f;
this.fn_handler = fn_handler;
this.meta11604 = meta11604;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11603.cljs$lang$type = true;
cljs.core.async.t11603.cljs$lang$ctorStr = "cljs.core.async/t11603";
cljs.core.async.t11603.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t11603");
});
cljs.core.async.t11603.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11603.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11603.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11603.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11605){var self__ = this;
var _11605__$1 = this;return self__.meta11604;
});
cljs.core.async.t11603.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11605,meta11604__$1){var self__ = this;
var _11605__$1 = this;return (new cljs.core.async.t11603(self__.f,self__.fn_handler,meta11604__$1));
});
cljs.core.async.__GT_t11603 = (function __GT_t11603(f__$1,fn_handler__$1,meta11604){return (new cljs.core.async.t11603(f__$1,fn_handler__$1,meta11604));
});
}
return (new cljs.core.async.t11603(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11607 = buff;if(G__11607)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__11607.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11607.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11607);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11607);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_11608 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11608);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_11608,ret){
return (function (){return fn1.call(null,val_11608);
});})(val_11608,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4508__auto___11609 = n;var x_11610 = (0);while(true){
if((x_11610 < n__4508__auto___11609))
{(a[x_11610] = (0));
{
var G__11611 = (x_11610 + (1));
x_11610 = G__11611;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__11612 = (i + (1));
i = G__11612;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11616 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11616 = (function (flag,alt_flag,meta11617){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11617 = meta11617;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11616.cljs$lang$type = true;
cljs.core.async.t11616.cljs$lang$ctorStr = "cljs.core.async/t11616";
cljs.core.async.t11616.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t11616");
});})(flag))
;
cljs.core.async.t11616.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11616.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t11616.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t11616.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_11618){var self__ = this;
var _11618__$1 = this;return self__.meta11617;
});})(flag))
;
cljs.core.async.t11616.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_11618,meta11617__$1){var self__ = this;
var _11618__$1 = this;return (new cljs.core.async.t11616(self__.flag,self__.alt_flag,meta11617__$1));
});})(flag))
;
cljs.core.async.__GT_t11616 = ((function (flag){
return (function __GT_t11616(flag__$1,alt_flag__$1,meta11617){return (new cljs.core.async.t11616(flag__$1,alt_flag__$1,meta11617));
});})(flag))
;
}
return (new cljs.core.async.t11616(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11622 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11622 = (function (cb,flag,alt_handler,meta11623){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11623 = meta11623;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11622.cljs$lang$type = true;
cljs.core.async.t11622.cljs$lang$ctorStr = "cljs.core.async/t11622";
cljs.core.async.t11622.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t11622");
});
cljs.core.async.t11622.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11622.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11622.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11622.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11624){var self__ = this;
var _11624__$1 = this;return self__.meta11623;
});
cljs.core.async.t11622.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11624,meta11623__$1){var self__ = this;
var _11624__$1 = this;return (new cljs.core.async.t11622(self__.cb,self__.flag,self__.alt_handler,meta11623__$1));
});
cljs.core.async.__GT_t11622 = (function __GT_t11622(cb__$1,flag__$1,alt_handler__$1,meta11623){return (new cljs.core.async.t11622(cb__$1,flag__$1,alt_handler__$1,meta11623));
});
}
return (new cljs.core.async.t11622(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11625_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11625_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11626_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11626_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3639__auto__ = wport;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__11627 = (i + (1));
i = G__11627;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3639__auto__ = ret;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3627__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3627__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3627__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__11628){var map__11630 = p__11628;var map__11630__$1 = ((cljs.core.seq_QMARK_.call(null,map__11630))?cljs.core.apply.call(null,cljs.core.hash_map,map__11630):map__11630);var opts = map__11630__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

};
var alts_BANG_ = function (ports,var_args){
var p__11628 = null;if (arguments.length > 1) {
  p__11628 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11628);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11631){
var ports = cljs.core.first(arglist__11631);
var p__11628 = cljs.core.rest(arglist__11631);
return alts_BANG___delegate(ports,p__11628);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t11639 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11639 = (function (ch,f,map_LT_,meta11640){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11640 = meta11640;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11639.cljs$lang$type = true;
cljs.core.async.t11639.cljs$lang$ctorStr = "cljs.core.async/t11639";
cljs.core.async.t11639.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t11639");
});
cljs.core.async.t11639.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11639.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t11639.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11639.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t11642 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11642 = (function (fn1,_,meta11640,ch,f,map_LT_,meta11643){
this.fn1 = fn1;
this._ = _;
this.meta11640 = meta11640;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11643 = meta11643;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11642.cljs$lang$type = true;
cljs.core.async.t11642.cljs$lang$ctorStr = "cljs.core.async/t11642";
cljs.core.async.t11642.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t11642");
});})(___$1))
;
cljs.core.async.t11642.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11642.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t11642.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t11642.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__11632_SHARP_){return f1.call(null,(((p1__11632_SHARP_ == null))?null:self__.f.call(null,p1__11632_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t11642.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_11644){var self__ = this;
var _11644__$1 = this;return self__.meta11643;
});})(___$1))
;
cljs.core.async.t11642.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_11644,meta11643__$1){var self__ = this;
var _11644__$1 = this;return (new cljs.core.async.t11642(self__.fn1,self__._,self__.meta11640,self__.ch,self__.f,self__.map_LT_,meta11643__$1));
});})(___$1))
;
cljs.core.async.__GT_t11642 = ((function (___$1){
return (function __GT_t11642(fn1__$1,___$2,meta11640__$1,ch__$2,f__$2,map_LT___$2,meta11643){return (new cljs.core.async.t11642(fn1__$1,___$2,meta11640__$1,ch__$2,f__$2,map_LT___$2,meta11643));
});})(___$1))
;
}
return (new cljs.core.async.t11642(fn1,___$1,self__.meta11640,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3627__auto__ = ret;if(cljs.core.truth_(and__3627__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3627__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t11639.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11639.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11639.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t11639.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11641){var self__ = this;
var _11641__$1 = this;return self__.meta11640;
});
cljs.core.async.t11639.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11641,meta11640__$1){var self__ = this;
var _11641__$1 = this;return (new cljs.core.async.t11639(self__.ch,self__.f,self__.map_LT_,meta11640__$1));
});
cljs.core.async.__GT_t11639 = (function __GT_t11639(ch__$1,f__$1,map_LT___$1,meta11640){return (new cljs.core.async.t11639(ch__$1,f__$1,map_LT___$1,meta11640));
});
}
return (new cljs.core.async.t11639(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t11648 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11648 = (function (ch,f,map_GT_,meta11649){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta11649 = meta11649;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11648.cljs$lang$type = true;
cljs.core.async.t11648.cljs$lang$ctorStr = "cljs.core.async/t11648";
cljs.core.async.t11648.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t11648");
});
cljs.core.async.t11648.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11648.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t11648.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11648.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11648.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11648.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11648.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11650){var self__ = this;
var _11650__$1 = this;return self__.meta11649;
});
cljs.core.async.t11648.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11650,meta11649__$1){var self__ = this;
var _11650__$1 = this;return (new cljs.core.async.t11648(self__.ch,self__.f,self__.map_GT_,meta11649__$1));
});
cljs.core.async.__GT_t11648 = (function __GT_t11648(ch__$1,f__$1,map_GT___$1,meta11649){return (new cljs.core.async.t11648(ch__$1,f__$1,map_GT___$1,meta11649));
});
}
return (new cljs.core.async.t11648(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t11654 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11654 = (function (ch,p,filter_GT_,meta11655){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta11655 = meta11655;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11654.cljs$lang$type = true;
cljs.core.async.t11654.cljs$lang$ctorStr = "cljs.core.async/t11654";
cljs.core.async.t11654.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t11654");
});
cljs.core.async.t11654.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11654.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t11654.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11654.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11654.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11654.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11654.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t11654.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11656){var self__ = this;
var _11656__$1 = this;return self__.meta11655;
});
cljs.core.async.t11654.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11656,meta11655__$1){var self__ = this;
var _11656__$1 = this;return (new cljs.core.async.t11654(self__.ch,self__.p,self__.filter_GT_,meta11655__$1));
});
cljs.core.async.__GT_t11654 = (function __GT_t11654(ch__$1,p__$1,filter_GT___$1,meta11655){return (new cljs.core.async.t11654(ch__$1,p__$1,filter_GT___$1,meta11655));
});
}
return (new cljs.core.async.t11654(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6395__auto___11739 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6395__auto___11739,out){
return (function (){var f__6396__auto__ = (function (){var switch__6330__auto__ = ((function (c__6395__auto___11739,out){
return (function (state_11718){var state_val_11719 = (state_11718[(1)]);if((state_val_11719 === (7)))
{var inst_11714 = (state_11718[(2)]);var state_11718__$1 = state_11718;var statearr_11720_11740 = state_11718__$1;(statearr_11720_11740[(2)] = inst_11714);
(statearr_11720_11740[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11719 === (1)))
{var state_11718__$1 = state_11718;var statearr_11721_11741 = state_11718__$1;(statearr_11721_11741[(2)] = null);
(statearr_11721_11741[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11719 === (4)))
{var inst_11700 = (state_11718[(7)]);var inst_11700__$1 = (state_11718[(2)]);var inst_11701 = (inst_11700__$1 == null);var state_11718__$1 = (function (){var statearr_11722 = state_11718;(statearr_11722[(7)] = inst_11700__$1);
return statearr_11722;
})();if(cljs.core.truth_(inst_11701))
{var statearr_11723_11742 = state_11718__$1;(statearr_11723_11742[(1)] = (5));
} else
{var statearr_11724_11743 = state_11718__$1;(statearr_11724_11743[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11719 === (6)))
{var inst_11700 = (state_11718[(7)]);var inst_11705 = p.call(null,inst_11700);var state_11718__$1 = state_11718;if(cljs.core.truth_(inst_11705))
{var statearr_11725_11744 = state_11718__$1;(statearr_11725_11744[(1)] = (8));
} else
{var statearr_11726_11745 = state_11718__$1;(statearr_11726_11745[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11719 === (3)))
{var inst_11716 = (state_11718[(2)]);var state_11718__$1 = state_11718;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11718__$1,inst_11716);
} else
{if((state_val_11719 === (2)))
{var state_11718__$1 = state_11718;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11718__$1,(4),ch);
} else
{if((state_val_11719 === (11)))
{var inst_11708 = (state_11718[(2)]);var state_11718__$1 = state_11718;var statearr_11727_11746 = state_11718__$1;(statearr_11727_11746[(2)] = inst_11708);
(statearr_11727_11746[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11719 === (9)))
{var state_11718__$1 = state_11718;var statearr_11728_11747 = state_11718__$1;(statearr_11728_11747[(2)] = null);
(statearr_11728_11747[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11719 === (5)))
{var inst_11703 = cljs.core.async.close_BANG_.call(null,out);var state_11718__$1 = state_11718;var statearr_11729_11748 = state_11718__$1;(statearr_11729_11748[(2)] = inst_11703);
(statearr_11729_11748[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11719 === (10)))
{var inst_11711 = (state_11718[(2)]);var state_11718__$1 = (function (){var statearr_11730 = state_11718;(statearr_11730[(8)] = inst_11711);
return statearr_11730;
})();var statearr_11731_11749 = state_11718__$1;(statearr_11731_11749[(2)] = null);
(statearr_11731_11749[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11719 === (8)))
{var inst_11700 = (state_11718[(7)]);var state_11718__$1 = state_11718;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11718__$1,(11),out,inst_11700);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6395__auto___11739,out))
;return ((function (switch__6330__auto__,c__6395__auto___11739,out){
return (function() {
var state_machine__6331__auto__ = null;
var state_machine__6331__auto____0 = (function (){var statearr_11735 = [null,null,null,null,null,null,null,null,null];(statearr_11735[(0)] = state_machine__6331__auto__);
(statearr_11735[(1)] = (1));
return statearr_11735;
});
var state_machine__6331__auto____1 = (function (state_11718){while(true){
var ret_value__6332__auto__ = (function (){try{while(true){
var result__6333__auto__ = switch__6330__auto__.call(null,state_11718);if(cljs.core.keyword_identical_QMARK_.call(null,result__6333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6333__auto__;
}
break;
}
}catch (e11736){if((e11736 instanceof Object))
{var ex__6334__auto__ = e11736;var statearr_11737_11750 = state_11718;(statearr_11737_11750[(5)] = ex__6334__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11718);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11736;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11751 = state_11718;
state_11718 = G__11751;
continue;
}
} else
{return ret_value__6332__auto__;
}
break;
}
});
state_machine__6331__auto__ = function(state_11718){
switch(arguments.length){
case 0:
return state_machine__6331__auto____0.call(this);
case 1:
return state_machine__6331__auto____1.call(this,state_11718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6331__auto____0;
state_machine__6331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6331__auto____1;
return state_machine__6331__auto__;
})()
;})(switch__6330__auto__,c__6395__auto___11739,out))
})();var state__6397__auto__ = (function (){var statearr_11738 = f__6396__auto__.call(null);(statearr_11738[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6395__auto___11739);
return statearr_11738;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6397__auto__);
});})(c__6395__auto___11739,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6395__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6395__auto__){
return (function (){var f__6396__auto__ = (function (){var switch__6330__auto__ = ((function (c__6395__auto__){
return (function (state_11917){var state_val_11918 = (state_11917[(1)]);if((state_val_11918 === (7)))
{var inst_11913 = (state_11917[(2)]);var state_11917__$1 = state_11917;var statearr_11919_11960 = state_11917__$1;(statearr_11919_11960[(2)] = inst_11913);
(statearr_11919_11960[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11918 === (20)))
{var inst_11883 = (state_11917[(7)]);var inst_11894 = (state_11917[(2)]);var inst_11895 = cljs.core.next.call(null,inst_11883);var inst_11869 = inst_11895;var inst_11870 = null;var inst_11871 = (0);var inst_11872 = (0);var state_11917__$1 = (function (){var statearr_11920 = state_11917;(statearr_11920[(8)] = inst_11870);
(statearr_11920[(9)] = inst_11872);
(statearr_11920[(10)] = inst_11869);
(statearr_11920[(11)] = inst_11871);
(statearr_11920[(12)] = inst_11894);
return statearr_11920;
})();var statearr_11921_11961 = state_11917__$1;(statearr_11921_11961[(2)] = null);
(statearr_11921_11961[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11918 === (1)))
{var state_11917__$1 = state_11917;var statearr_11922_11962 = state_11917__$1;(statearr_11922_11962[(2)] = null);
(statearr_11922_11962[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11918 === (4)))
{var inst_11858 = (state_11917[(13)]);var inst_11858__$1 = (state_11917[(2)]);var inst_11859 = (inst_11858__$1 == null);var state_11917__$1 = (function (){var statearr_11923 = state_11917;(statearr_11923[(13)] = inst_11858__$1);
return statearr_11923;
})();if(cljs.core.truth_(inst_11859))
{var statearr_11924_11963 = state_11917__$1;(statearr_11924_11963[(1)] = (5));
} else
{var statearr_11925_11964 = state_11917__$1;(statearr_11925_11964[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11918 === (15)))
{var state_11917__$1 = state_11917;var statearr_11929_11965 = state_11917__$1;(statearr_11929_11965[(2)] = null);
(statearr_11929_11965[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11918 === (21)))
{var state_11917__$1 = state_11917;var statearr_11930_11966 = state_11917__$1;(statearr_11930_11966[(2)] = null);
(statearr_11930_11966[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11918 === (13)))
{var inst_11870 = (state_11917[(8)]);var inst_11872 = (state_11917[(9)]);var inst_11869 = (state_11917[(10)]);var inst_11871 = (state_11917[(11)]);var inst_11879 = (state_11917[(2)]);var inst_11880 = (inst_11872 + (1));var tmp11926 = inst_11870;var tmp11927 = inst_11869;var tmp11928 = inst_11871;var inst_11869__$1 = tmp11927;var inst_11870__$1 = tmp11926;var inst_11871__$1 = tmp11928;var inst_11872__$1 = inst_11880;var state_11917__$1 = (function (){var statearr_11931 = state_11917;(statearr_11931[(8)] = inst_11870__$1);
(statearr_11931[(9)] = inst_11872__$1);
(statearr_11931[(14)] = inst_11879);
(statearr_11931[(10)] = inst_11869__$1);
(statearr_11931[(11)] = inst_11871__$1);
return statearr_11931;
})();var statearr_11932_11967 = state_11917__$1;(statearr_11932_11967[(2)] = null);
(statearr_11932_11967[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11918 === (22)))
{var state_11917__$1 = state_11917;var statearr_11933_11968 = state_11917__$1;(statearr_11933_11968[(2)] = null);
(statearr_11933_11968[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11918 === (6)))
{var inst_11858 = (state_11917[(13)]);var inst_11867 = f.call(null,inst_11858);var inst_11868 = cljs.core.seq.call(null,inst_11867);var inst_11869 = inst_11868;var inst_11870 = null;var inst_11871 = (0);var inst_11872 = (0);var state_11917__$1 = (function (){var statearr_11934 = state_11917;(statearr_11934[(8)] = inst_11870);
(statearr_11934[(9)] = inst_11872);
(statearr_11934[(10)] = inst_11869);
(statearr_11934[(11)] = inst_11871);
return statearr_11934;
})();var statearr_11935_11969 = state_11917__$1;(statearr_11935_11969[(2)] = null);
(statearr_11935_11969[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11918 === (17)))
{var inst_11883 = (state_11917[(7)]);var inst_11887 = cljs.core.chunk_first.call(null,inst_11883);var inst_11888 = cljs.core.chunk_rest.call(null,inst_11883);var inst_11889 = cljs.core.count.call(null,inst_11887);var inst_11869 = inst_11888;var inst_11870 = inst_11887;var inst_11871 = inst_11889;var inst_11872 = (0);var state_11917__$1 = (function (){var statearr_11936 = state_11917;(statearr_11936[(8)] = inst_11870);
(statearr_11936[(9)] = inst_11872);
(statearr_11936[(10)] = inst_11869);
(statearr_11936[(11)] = inst_11871);
return statearr_11936;
})();var statearr_11937_11970 = state_11917__$1;(statearr_11937_11970[(2)] = null);
(statearr_11937_11970[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11918 === (3)))
{var inst_11915 = (state_11917[(2)]);var state_11917__$1 = state_11917;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11917__$1,inst_11915);
} else
{if((state_val_11918 === (12)))
{var inst_11903 = (state_11917[(2)]);var state_11917__$1 = state_11917;var statearr_11938_11971 = state_11917__$1;(statearr_11938_11971[(2)] = inst_11903);
(statearr_11938_11971[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11918 === (2)))
{var state_11917__$1 = state_11917;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11917__$1,(4),in$);
} else
{if((state_val_11918 === (23)))
{var inst_11911 = (state_11917[(2)]);var state_11917__$1 = state_11917;var statearr_11939_11972 = state_11917__$1;(statearr_11939_11972[(2)] = inst_11911);
(statearr_11939_11972[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11918 === (19)))
{var inst_11898 = (state_11917[(2)]);var state_11917__$1 = state_11917;var statearr_11940_11973 = state_11917__$1;(statearr_11940_11973[(2)] = inst_11898);
(statearr_11940_11973[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11918 === (11)))
{var inst_11869 = (state_11917[(10)]);var inst_11883 = (state_11917[(7)]);var inst_11883__$1 = cljs.core.seq.call(null,inst_11869);var state_11917__$1 = (function (){var statearr_11941 = state_11917;(statearr_11941[(7)] = inst_11883__$1);
return statearr_11941;
})();if(inst_11883__$1)
{var statearr_11942_11974 = state_11917__$1;(statearr_11942_11974[(1)] = (14));
} else
{var statearr_11943_11975 = state_11917__$1;(statearr_11943_11975[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11918 === (9)))
{var inst_11905 = (state_11917[(2)]);var inst_11906 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_11917__$1 = (function (){var statearr_11944 = state_11917;(statearr_11944[(15)] = inst_11905);
return statearr_11944;
})();if(cljs.core.truth_(inst_11906))
{var statearr_11945_11976 = state_11917__$1;(statearr_11945_11976[(1)] = (21));
} else
{var statearr_11946_11977 = state_11917__$1;(statearr_11946_11977[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11918 === (5)))
{var inst_11861 = cljs.core.async.close_BANG_.call(null,out);var state_11917__$1 = state_11917;var statearr_11947_11978 = state_11917__$1;(statearr_11947_11978[(2)] = inst_11861);
(statearr_11947_11978[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11918 === (14)))
{var inst_11883 = (state_11917[(7)]);var inst_11885 = cljs.core.chunked_seq_QMARK_.call(null,inst_11883);var state_11917__$1 = state_11917;if(inst_11885)
{var statearr_11948_11979 = state_11917__$1;(statearr_11948_11979[(1)] = (17));
} else
{var statearr_11949_11980 = state_11917__$1;(statearr_11949_11980[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11918 === (16)))
{var inst_11901 = (state_11917[(2)]);var state_11917__$1 = state_11917;var statearr_11950_11981 = state_11917__$1;(statearr_11950_11981[(2)] = inst_11901);
(statearr_11950_11981[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11918 === (10)))
{var inst_11870 = (state_11917[(8)]);var inst_11872 = (state_11917[(9)]);var inst_11877 = cljs.core._nth.call(null,inst_11870,inst_11872);var state_11917__$1 = state_11917;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11917__$1,(13),out,inst_11877);
} else
{if((state_val_11918 === (18)))
{var inst_11883 = (state_11917[(7)]);var inst_11892 = cljs.core.first.call(null,inst_11883);var state_11917__$1 = state_11917;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11917__$1,(20),out,inst_11892);
} else
{if((state_val_11918 === (8)))
{var inst_11872 = (state_11917[(9)]);var inst_11871 = (state_11917[(11)]);var inst_11874 = (inst_11872 < inst_11871);var inst_11875 = inst_11874;var state_11917__$1 = state_11917;if(cljs.core.truth_(inst_11875))
{var statearr_11951_11982 = state_11917__$1;(statearr_11951_11982[(1)] = (10));
} else
{var statearr_11952_11983 = state_11917__$1;(statearr_11952_11983[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6395__auto__))
;return ((function (switch__6330__auto__,c__6395__auto__){
return (function() {
var state_machine__6331__auto__ = null;
var state_machine__6331__auto____0 = (function (){var statearr_11956 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11956[(0)] = state_machine__6331__auto__);
(statearr_11956[(1)] = (1));
return statearr_11956;
});
var state_machine__6331__auto____1 = (function (state_11917){while(true){
var ret_value__6332__auto__ = (function (){try{while(true){
var result__6333__auto__ = switch__6330__auto__.call(null,state_11917);if(cljs.core.keyword_identical_QMARK_.call(null,result__6333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6333__auto__;
}
break;
}
}catch (e11957){if((e11957 instanceof Object))
{var ex__6334__auto__ = e11957;var statearr_11958_11984 = state_11917;(statearr_11958_11984[(5)] = ex__6334__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11917);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11957;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11985 = state_11917;
state_11917 = G__11985;
continue;
}
} else
{return ret_value__6332__auto__;
}
break;
}
});
state_machine__6331__auto__ = function(state_11917){
switch(arguments.length){
case 0:
return state_machine__6331__auto____0.call(this);
case 1:
return state_machine__6331__auto____1.call(this,state_11917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6331__auto____0;
state_machine__6331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6331__auto____1;
return state_machine__6331__auto__;
})()
;})(switch__6330__auto__,c__6395__auto__))
})();var state__6397__auto__ = (function (){var statearr_11959 = f__6396__auto__.call(null);(statearr_11959[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6395__auto__);
return statearr_11959;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6397__auto__);
});})(c__6395__auto__))
);
return c__6395__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6395__auto___12080 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6395__auto___12080){
return (function (){var f__6396__auto__ = (function (){var switch__6330__auto__ = ((function (c__6395__auto___12080){
return (function (state_12056){var state_val_12057 = (state_12056[(1)]);if((state_val_12057 === (7)))
{var inst_12052 = (state_12056[(2)]);var state_12056__$1 = state_12056;var statearr_12058_12081 = state_12056__$1;(statearr_12058_12081[(2)] = inst_12052);
(statearr_12058_12081[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12057 === (1)))
{var state_12056__$1 = state_12056;var statearr_12059_12082 = state_12056__$1;(statearr_12059_12082[(2)] = null);
(statearr_12059_12082[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12057 === (4)))
{var inst_12035 = (state_12056[(7)]);var inst_12035__$1 = (state_12056[(2)]);var inst_12036 = (inst_12035__$1 == null);var state_12056__$1 = (function (){var statearr_12060 = state_12056;(statearr_12060[(7)] = inst_12035__$1);
return statearr_12060;
})();if(cljs.core.truth_(inst_12036))
{var statearr_12061_12083 = state_12056__$1;(statearr_12061_12083[(1)] = (5));
} else
{var statearr_12062_12084 = state_12056__$1;(statearr_12062_12084[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12057 === (13)))
{var state_12056__$1 = state_12056;var statearr_12063_12085 = state_12056__$1;(statearr_12063_12085[(2)] = null);
(statearr_12063_12085[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12057 === (6)))
{var inst_12035 = (state_12056[(7)]);var state_12056__$1 = state_12056;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12056__$1,(11),to,inst_12035);
} else
{if((state_val_12057 === (3)))
{var inst_12054 = (state_12056[(2)]);var state_12056__$1 = state_12056;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12056__$1,inst_12054);
} else
{if((state_val_12057 === (12)))
{var state_12056__$1 = state_12056;var statearr_12064_12086 = state_12056__$1;(statearr_12064_12086[(2)] = null);
(statearr_12064_12086[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12057 === (2)))
{var state_12056__$1 = state_12056;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12056__$1,(4),from);
} else
{if((state_val_12057 === (11)))
{var inst_12045 = (state_12056[(2)]);var state_12056__$1 = state_12056;if(cljs.core.truth_(inst_12045))
{var statearr_12065_12087 = state_12056__$1;(statearr_12065_12087[(1)] = (12));
} else
{var statearr_12066_12088 = state_12056__$1;(statearr_12066_12088[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12057 === (9)))
{var state_12056__$1 = state_12056;var statearr_12067_12089 = state_12056__$1;(statearr_12067_12089[(2)] = null);
(statearr_12067_12089[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12057 === (5)))
{var state_12056__$1 = state_12056;if(cljs.core.truth_(close_QMARK_))
{var statearr_12068_12090 = state_12056__$1;(statearr_12068_12090[(1)] = (8));
} else
{var statearr_12069_12091 = state_12056__$1;(statearr_12069_12091[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12057 === (14)))
{var inst_12050 = (state_12056[(2)]);var state_12056__$1 = state_12056;var statearr_12070_12092 = state_12056__$1;(statearr_12070_12092[(2)] = inst_12050);
(statearr_12070_12092[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12057 === (10)))
{var inst_12042 = (state_12056[(2)]);var state_12056__$1 = state_12056;var statearr_12071_12093 = state_12056__$1;(statearr_12071_12093[(2)] = inst_12042);
(statearr_12071_12093[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12057 === (8)))
{var inst_12039 = cljs.core.async.close_BANG_.call(null,to);var state_12056__$1 = state_12056;var statearr_12072_12094 = state_12056__$1;(statearr_12072_12094[(2)] = inst_12039);
(statearr_12072_12094[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6395__auto___12080))
;return ((function (switch__6330__auto__,c__6395__auto___12080){
return (function() {
var state_machine__6331__auto__ = null;
var state_machine__6331__auto____0 = (function (){var statearr_12076 = [null,null,null,null,null,null,null,null];(statearr_12076[(0)] = state_machine__6331__auto__);
(statearr_12076[(1)] = (1));
return statearr_12076;
});
var state_machine__6331__auto____1 = (function (state_12056){while(true){
var ret_value__6332__auto__ = (function (){try{while(true){
var result__6333__auto__ = switch__6330__auto__.call(null,state_12056);if(cljs.core.keyword_identical_QMARK_.call(null,result__6333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6333__auto__;
}
break;
}
}catch (e12077){if((e12077 instanceof Object))
{var ex__6334__auto__ = e12077;var statearr_12078_12095 = state_12056;(statearr_12078_12095[(5)] = ex__6334__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12056);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12077;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12096 = state_12056;
state_12056 = G__12096;
continue;
}
} else
{return ret_value__6332__auto__;
}
break;
}
});
state_machine__6331__auto__ = function(state_12056){
switch(arguments.length){
case 0:
return state_machine__6331__auto____0.call(this);
case 1:
return state_machine__6331__auto____1.call(this,state_12056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6331__auto____0;
state_machine__6331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6331__auto____1;
return state_machine__6331__auto__;
})()
;})(switch__6330__auto__,c__6395__auto___12080))
})();var state__6397__auto__ = (function (){var statearr_12079 = f__6396__auto__.call(null);(statearr_12079[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6395__auto___12080);
return statearr_12079;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6397__auto__);
});})(c__6395__auto___12080))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6395__auto___12197 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6395__auto___12197,tc,fc){
return (function (){var f__6396__auto__ = (function (){var switch__6330__auto__ = ((function (c__6395__auto___12197,tc,fc){
return (function (state_12172){var state_val_12173 = (state_12172[(1)]);if((state_val_12173 === (7)))
{var inst_12168 = (state_12172[(2)]);var state_12172__$1 = state_12172;var statearr_12174_12198 = state_12172__$1;(statearr_12174_12198[(2)] = inst_12168);
(statearr_12174_12198[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12173 === (1)))
{var state_12172__$1 = state_12172;var statearr_12175_12199 = state_12172__$1;(statearr_12175_12199[(2)] = null);
(statearr_12175_12199[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12173 === (4)))
{var inst_12149 = (state_12172[(7)]);var inst_12149__$1 = (state_12172[(2)]);var inst_12150 = (inst_12149__$1 == null);var state_12172__$1 = (function (){var statearr_12176 = state_12172;(statearr_12176[(7)] = inst_12149__$1);
return statearr_12176;
})();if(cljs.core.truth_(inst_12150))
{var statearr_12177_12200 = state_12172__$1;(statearr_12177_12200[(1)] = (5));
} else
{var statearr_12178_12201 = state_12172__$1;(statearr_12178_12201[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12173 === (13)))
{var state_12172__$1 = state_12172;var statearr_12179_12202 = state_12172__$1;(statearr_12179_12202[(2)] = null);
(statearr_12179_12202[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12173 === (6)))
{var inst_12149 = (state_12172[(7)]);var inst_12155 = p.call(null,inst_12149);var state_12172__$1 = state_12172;if(cljs.core.truth_(inst_12155))
{var statearr_12180_12203 = state_12172__$1;(statearr_12180_12203[(1)] = (9));
} else
{var statearr_12181_12204 = state_12172__$1;(statearr_12181_12204[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12173 === (3)))
{var inst_12170 = (state_12172[(2)]);var state_12172__$1 = state_12172;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12172__$1,inst_12170);
} else
{if((state_val_12173 === (12)))
{var state_12172__$1 = state_12172;var statearr_12182_12205 = state_12172__$1;(statearr_12182_12205[(2)] = null);
(statearr_12182_12205[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12173 === (2)))
{var state_12172__$1 = state_12172;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12172__$1,(4),ch);
} else
{if((state_val_12173 === (11)))
{var inst_12149 = (state_12172[(7)]);var inst_12159 = (state_12172[(2)]);var state_12172__$1 = state_12172;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12172__$1,(8),inst_12159,inst_12149);
} else
{if((state_val_12173 === (9)))
{var state_12172__$1 = state_12172;var statearr_12183_12206 = state_12172__$1;(statearr_12183_12206[(2)] = tc);
(statearr_12183_12206[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12173 === (5)))
{var inst_12152 = cljs.core.async.close_BANG_.call(null,tc);var inst_12153 = cljs.core.async.close_BANG_.call(null,fc);var state_12172__$1 = (function (){var statearr_12184 = state_12172;(statearr_12184[(8)] = inst_12152);
return statearr_12184;
})();var statearr_12185_12207 = state_12172__$1;(statearr_12185_12207[(2)] = inst_12153);
(statearr_12185_12207[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12173 === (14)))
{var inst_12166 = (state_12172[(2)]);var state_12172__$1 = state_12172;var statearr_12186_12208 = state_12172__$1;(statearr_12186_12208[(2)] = inst_12166);
(statearr_12186_12208[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12173 === (10)))
{var state_12172__$1 = state_12172;var statearr_12187_12209 = state_12172__$1;(statearr_12187_12209[(2)] = fc);
(statearr_12187_12209[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12173 === (8)))
{var inst_12161 = (state_12172[(2)]);var state_12172__$1 = state_12172;if(cljs.core.truth_(inst_12161))
{var statearr_12188_12210 = state_12172__$1;(statearr_12188_12210[(1)] = (12));
} else
{var statearr_12189_12211 = state_12172__$1;(statearr_12189_12211[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6395__auto___12197,tc,fc))
;return ((function (switch__6330__auto__,c__6395__auto___12197,tc,fc){
return (function() {
var state_machine__6331__auto__ = null;
var state_machine__6331__auto____0 = (function (){var statearr_12193 = [null,null,null,null,null,null,null,null,null];(statearr_12193[(0)] = state_machine__6331__auto__);
(statearr_12193[(1)] = (1));
return statearr_12193;
});
var state_machine__6331__auto____1 = (function (state_12172){while(true){
var ret_value__6332__auto__ = (function (){try{while(true){
var result__6333__auto__ = switch__6330__auto__.call(null,state_12172);if(cljs.core.keyword_identical_QMARK_.call(null,result__6333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6333__auto__;
}
break;
}
}catch (e12194){if((e12194 instanceof Object))
{var ex__6334__auto__ = e12194;var statearr_12195_12212 = state_12172;(statearr_12195_12212[(5)] = ex__6334__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12172);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12194;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12213 = state_12172;
state_12172 = G__12213;
continue;
}
} else
{return ret_value__6332__auto__;
}
break;
}
});
state_machine__6331__auto__ = function(state_12172){
switch(arguments.length){
case 0:
return state_machine__6331__auto____0.call(this);
case 1:
return state_machine__6331__auto____1.call(this,state_12172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6331__auto____0;
state_machine__6331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6331__auto____1;
return state_machine__6331__auto__;
})()
;})(switch__6330__auto__,c__6395__auto___12197,tc,fc))
})();var state__6397__auto__ = (function (){var statearr_12196 = f__6396__auto__.call(null);(statearr_12196[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6395__auto___12197);
return statearr_12196;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6397__auto__);
});})(c__6395__auto___12197,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6395__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6395__auto__){
return (function (){var f__6396__auto__ = (function (){var switch__6330__auto__ = ((function (c__6395__auto__){
return (function (state_12260){var state_val_12261 = (state_12260[(1)]);if((state_val_12261 === (7)))
{var inst_12256 = (state_12260[(2)]);var state_12260__$1 = state_12260;var statearr_12262_12278 = state_12260__$1;(statearr_12262_12278[(2)] = inst_12256);
(statearr_12262_12278[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12261 === (6)))
{var inst_12246 = (state_12260[(7)]);var inst_12249 = (state_12260[(8)]);var inst_12253 = f.call(null,inst_12246,inst_12249);var inst_12246__$1 = inst_12253;var state_12260__$1 = (function (){var statearr_12263 = state_12260;(statearr_12263[(7)] = inst_12246__$1);
return statearr_12263;
})();var statearr_12264_12279 = state_12260__$1;(statearr_12264_12279[(2)] = null);
(statearr_12264_12279[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12261 === (5)))
{var inst_12246 = (state_12260[(7)]);var state_12260__$1 = state_12260;var statearr_12265_12280 = state_12260__$1;(statearr_12265_12280[(2)] = inst_12246);
(statearr_12265_12280[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12261 === (4)))
{var inst_12249 = (state_12260[(8)]);var inst_12249__$1 = (state_12260[(2)]);var inst_12250 = (inst_12249__$1 == null);var state_12260__$1 = (function (){var statearr_12266 = state_12260;(statearr_12266[(8)] = inst_12249__$1);
return statearr_12266;
})();if(cljs.core.truth_(inst_12250))
{var statearr_12267_12281 = state_12260__$1;(statearr_12267_12281[(1)] = (5));
} else
{var statearr_12268_12282 = state_12260__$1;(statearr_12268_12282[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12261 === (3)))
{var inst_12258 = (state_12260[(2)]);var state_12260__$1 = state_12260;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12260__$1,inst_12258);
} else
{if((state_val_12261 === (2)))
{var state_12260__$1 = state_12260;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12260__$1,(4),ch);
} else
{if((state_val_12261 === (1)))
{var inst_12246 = init;var state_12260__$1 = (function (){var statearr_12269 = state_12260;(statearr_12269[(7)] = inst_12246);
return statearr_12269;
})();var statearr_12270_12283 = state_12260__$1;(statearr_12270_12283[(2)] = null);
(statearr_12270_12283[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__6395__auto__))
;return ((function (switch__6330__auto__,c__6395__auto__){
return (function() {
var state_machine__6331__auto__ = null;
var state_machine__6331__auto____0 = (function (){var statearr_12274 = [null,null,null,null,null,null,null,null,null];(statearr_12274[(0)] = state_machine__6331__auto__);
(statearr_12274[(1)] = (1));
return statearr_12274;
});
var state_machine__6331__auto____1 = (function (state_12260){while(true){
var ret_value__6332__auto__ = (function (){try{while(true){
var result__6333__auto__ = switch__6330__auto__.call(null,state_12260);if(cljs.core.keyword_identical_QMARK_.call(null,result__6333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6333__auto__;
}
break;
}
}catch (e12275){if((e12275 instanceof Object))
{var ex__6334__auto__ = e12275;var statearr_12276_12284 = state_12260;(statearr_12276_12284[(5)] = ex__6334__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12260);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12275;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12285 = state_12260;
state_12260 = G__12285;
continue;
}
} else
{return ret_value__6332__auto__;
}
break;
}
});
state_machine__6331__auto__ = function(state_12260){
switch(arguments.length){
case 0:
return state_machine__6331__auto____0.call(this);
case 1:
return state_machine__6331__auto____1.call(this,state_12260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6331__auto____0;
state_machine__6331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6331__auto____1;
return state_machine__6331__auto__;
})()
;})(switch__6330__auto__,c__6395__auto__))
})();var state__6397__auto__ = (function (){var statearr_12277 = f__6396__auto__.call(null);(statearr_12277[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6395__auto__);
return statearr_12277;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6397__auto__);
});})(c__6395__auto__))
);
return c__6395__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6395__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6395__auto__){
return (function (){var f__6396__auto__ = (function (){var switch__6330__auto__ = ((function (c__6395__auto__){
return (function (state_12359){var state_val_12360 = (state_12359[(1)]);if((state_val_12360 === (7)))
{var inst_12341 = (state_12359[(2)]);var state_12359__$1 = state_12359;var statearr_12361_12384 = state_12359__$1;(statearr_12361_12384[(2)] = inst_12341);
(statearr_12361_12384[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12360 === (1)))
{var inst_12335 = cljs.core.seq.call(null,coll);var inst_12336 = inst_12335;var state_12359__$1 = (function (){var statearr_12362 = state_12359;(statearr_12362[(7)] = inst_12336);
return statearr_12362;
})();var statearr_12363_12385 = state_12359__$1;(statearr_12363_12385[(2)] = null);
(statearr_12363_12385[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12360 === (4)))
{var inst_12336 = (state_12359[(7)]);var inst_12339 = cljs.core.first.call(null,inst_12336);var state_12359__$1 = state_12359;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12359__$1,(7),ch,inst_12339);
} else
{if((state_val_12360 === (13)))
{var inst_12353 = (state_12359[(2)]);var state_12359__$1 = state_12359;var statearr_12364_12386 = state_12359__$1;(statearr_12364_12386[(2)] = inst_12353);
(statearr_12364_12386[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12360 === (6)))
{var inst_12344 = (state_12359[(2)]);var state_12359__$1 = state_12359;if(cljs.core.truth_(inst_12344))
{var statearr_12365_12387 = state_12359__$1;(statearr_12365_12387[(1)] = (8));
} else
{var statearr_12366_12388 = state_12359__$1;(statearr_12366_12388[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12360 === (3)))
{var inst_12357 = (state_12359[(2)]);var state_12359__$1 = state_12359;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12359__$1,inst_12357);
} else
{if((state_val_12360 === (12)))
{var state_12359__$1 = state_12359;var statearr_12367_12389 = state_12359__$1;(statearr_12367_12389[(2)] = null);
(statearr_12367_12389[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12360 === (2)))
{var inst_12336 = (state_12359[(7)]);var state_12359__$1 = state_12359;if(cljs.core.truth_(inst_12336))
{var statearr_12368_12390 = state_12359__$1;(statearr_12368_12390[(1)] = (4));
} else
{var statearr_12369_12391 = state_12359__$1;(statearr_12369_12391[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12360 === (11)))
{var inst_12350 = cljs.core.async.close_BANG_.call(null,ch);var state_12359__$1 = state_12359;var statearr_12370_12392 = state_12359__$1;(statearr_12370_12392[(2)] = inst_12350);
(statearr_12370_12392[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12360 === (9)))
{var state_12359__$1 = state_12359;if(cljs.core.truth_(close_QMARK_))
{var statearr_12371_12393 = state_12359__$1;(statearr_12371_12393[(1)] = (11));
} else
{var statearr_12372_12394 = state_12359__$1;(statearr_12372_12394[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12360 === (5)))
{var inst_12336 = (state_12359[(7)]);var state_12359__$1 = state_12359;var statearr_12373_12395 = state_12359__$1;(statearr_12373_12395[(2)] = inst_12336);
(statearr_12373_12395[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12360 === (10)))
{var inst_12355 = (state_12359[(2)]);var state_12359__$1 = state_12359;var statearr_12374_12396 = state_12359__$1;(statearr_12374_12396[(2)] = inst_12355);
(statearr_12374_12396[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12360 === (8)))
{var inst_12336 = (state_12359[(7)]);var inst_12346 = cljs.core.next.call(null,inst_12336);var inst_12336__$1 = inst_12346;var state_12359__$1 = (function (){var statearr_12375 = state_12359;(statearr_12375[(7)] = inst_12336__$1);
return statearr_12375;
})();var statearr_12376_12397 = state_12359__$1;(statearr_12376_12397[(2)] = null);
(statearr_12376_12397[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6395__auto__))
;return ((function (switch__6330__auto__,c__6395__auto__){
return (function() {
var state_machine__6331__auto__ = null;
var state_machine__6331__auto____0 = (function (){var statearr_12380 = [null,null,null,null,null,null,null,null];(statearr_12380[(0)] = state_machine__6331__auto__);
(statearr_12380[(1)] = (1));
return statearr_12380;
});
var state_machine__6331__auto____1 = (function (state_12359){while(true){
var ret_value__6332__auto__ = (function (){try{while(true){
var result__6333__auto__ = switch__6330__auto__.call(null,state_12359);if(cljs.core.keyword_identical_QMARK_.call(null,result__6333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6333__auto__;
}
break;
}
}catch (e12381){if((e12381 instanceof Object))
{var ex__6334__auto__ = e12381;var statearr_12382_12398 = state_12359;(statearr_12382_12398[(5)] = ex__6334__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12359);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12381;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12399 = state_12359;
state_12359 = G__12399;
continue;
}
} else
{return ret_value__6332__auto__;
}
break;
}
});
state_machine__6331__auto__ = function(state_12359){
switch(arguments.length){
case 0:
return state_machine__6331__auto____0.call(this);
case 1:
return state_machine__6331__auto____1.call(this,state_12359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6331__auto____0;
state_machine__6331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6331__auto____1;
return state_machine__6331__auto__;
})()
;})(switch__6330__auto__,c__6395__auto__))
})();var state__6397__auto__ = (function (){var statearr_12383 = f__6396__auto__.call(null);(statearr_12383[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6395__auto__);
return statearr_12383;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6397__auto__);
});})(c__6395__auto__))
);
return c__6395__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj12401 = {};return obj12401;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3627__auto__ = _;if(and__3627__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3627__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4275__auto__ = (((_ == null))?null:_);return (function (){var or__3639__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj12403 = {};return obj12403;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12625 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12625 = (function (cs,ch,mult,meta12626){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12626 = meta12626;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12625.cljs$lang$type = true;
cljs.core.async.t12625.cljs$lang$ctorStr = "cljs.core.async/t12625";
cljs.core.async.t12625.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t12625");
});})(cs))
;
cljs.core.async.t12625.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12625.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12625.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12625.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12625.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12625.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12625.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12627){var self__ = this;
var _12627__$1 = this;return self__.meta12626;
});})(cs))
;
cljs.core.async.t12625.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12627,meta12626__$1){var self__ = this;
var _12627__$1 = this;return (new cljs.core.async.t12625(self__.cs,self__.ch,self__.mult,meta12626__$1));
});})(cs))
;
cljs.core.async.__GT_t12625 = ((function (cs){
return (function __GT_t12625(cs__$1,ch__$1,mult__$1,meta12626){return (new cljs.core.async.t12625(cs__$1,ch__$1,mult__$1,meta12626));
});})(cs))
;
}
return (new cljs.core.async.t12625(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6395__auto___12846 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6395__auto___12846,cs,m,dchan,dctr,done){
return (function (){var f__6396__auto__ = (function (){var switch__6330__auto__ = ((function (c__6395__auto___12846,cs,m,dchan,dctr,done){
return (function (state_12758){var state_val_12759 = (state_12758[(1)]);if((state_val_12759 === (7)))
{var inst_12754 = (state_12758[(2)]);var state_12758__$1 = state_12758;var statearr_12760_12847 = state_12758__$1;(statearr_12760_12847[(2)] = inst_12754);
(statearr_12760_12847[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12759 === (20)))
{var inst_12659 = (state_12758[(7)]);var inst_12669 = cljs.core.first.call(null,inst_12659);var inst_12670 = cljs.core.nth.call(null,inst_12669,(0),null);var inst_12671 = cljs.core.nth.call(null,inst_12669,(1),null);var state_12758__$1 = (function (){var statearr_12761 = state_12758;(statearr_12761[(8)] = inst_12670);
return statearr_12761;
})();if(cljs.core.truth_(inst_12671))
{var statearr_12762_12848 = state_12758__$1;(statearr_12762_12848[(1)] = (22));
} else
{var statearr_12763_12849 = state_12758__$1;(statearr_12763_12849[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12759 === (27)))
{var inst_12630 = (state_12758[(9)]);var inst_12699 = (state_12758[(10)]);var inst_12701 = (state_12758[(11)]);var inst_12706 = (state_12758[(12)]);var inst_12706__$1 = cljs.core._nth.call(null,inst_12699,inst_12701);var inst_12707 = cljs.core.async.put_BANG_.call(null,inst_12706__$1,inst_12630,done);var state_12758__$1 = (function (){var statearr_12764 = state_12758;(statearr_12764[(12)] = inst_12706__$1);
return statearr_12764;
})();if(cljs.core.truth_(inst_12707))
{var statearr_12765_12850 = state_12758__$1;(statearr_12765_12850[(1)] = (30));
} else
{var statearr_12766_12851 = state_12758__$1;(statearr_12766_12851[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12759 === (1)))
{var state_12758__$1 = state_12758;var statearr_12767_12852 = state_12758__$1;(statearr_12767_12852[(2)] = null);
(statearr_12767_12852[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12759 === (24)))
{var inst_12659 = (state_12758[(7)]);var inst_12676 = (state_12758[(2)]);var inst_12677 = cljs.core.next.call(null,inst_12659);var inst_12639 = inst_12677;var inst_12640 = null;var inst_12641 = (0);var inst_12642 = (0);var state_12758__$1 = (function (){var statearr_12768 = state_12758;(statearr_12768[(13)] = inst_12642);
(statearr_12768[(14)] = inst_12676);
(statearr_12768[(15)] = inst_12639);
(statearr_12768[(16)] = inst_12641);
(statearr_12768[(17)] = inst_12640);
return statearr_12768;
})();var statearr_12769_12853 = state_12758__$1;(statearr_12769_12853[(2)] = null);
(statearr_12769_12853[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12759 === (39)))
{var state_12758__$1 = state_12758;var statearr_12773_12854 = state_12758__$1;(statearr_12773_12854[(2)] = null);
(statearr_12773_12854[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12759 === (4)))
{var inst_12630 = (state_12758[(9)]);var inst_12630__$1 = (state_12758[(2)]);var inst_12631 = (inst_12630__$1 == null);var state_12758__$1 = (function (){var statearr_12774 = state_12758;(statearr_12774[(9)] = inst_12630__$1);
return statearr_12774;
})();if(cljs.core.truth_(inst_12631))
{var statearr_12775_12855 = state_12758__$1;(statearr_12775_12855[(1)] = (5));
} else
{var statearr_12776_12856 = state_12758__$1;(statearr_12776_12856[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12759 === (15)))
{var inst_12642 = (state_12758[(13)]);var inst_12639 = (state_12758[(15)]);var inst_12641 = (state_12758[(16)]);var inst_12640 = (state_12758[(17)]);var inst_12655 = (state_12758[(2)]);var inst_12656 = (inst_12642 + (1));var tmp12770 = inst_12639;var tmp12771 = inst_12641;var tmp12772 = inst_12640;var inst_12639__$1 = tmp12770;var inst_12640__$1 = tmp12772;var inst_12641__$1 = tmp12771;var inst_12642__$1 = inst_12656;var state_12758__$1 = (function (){var statearr_12777 = state_12758;(statearr_12777[(13)] = inst_12642__$1);
(statearr_12777[(15)] = inst_12639__$1);
(statearr_12777[(16)] = inst_12641__$1);
(statearr_12777[(18)] = inst_12655);
(statearr_12777[(17)] = inst_12640__$1);
return statearr_12777;
})();var statearr_12778_12857 = state_12758__$1;(statearr_12778_12857[(2)] = null);
(statearr_12778_12857[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12759 === (21)))
{var inst_12680 = (state_12758[(2)]);var state_12758__$1 = state_12758;var statearr_12782_12858 = state_12758__$1;(statearr_12782_12858[(2)] = inst_12680);
(statearr_12782_12858[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12759 === (31)))
{var inst_12706 = (state_12758[(12)]);var inst_12710 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12711 = cljs.core.async.untap_STAR_.call(null,m,inst_12706);var state_12758__$1 = (function (){var statearr_12783 = state_12758;(statearr_12783[(19)] = inst_12710);
return statearr_12783;
})();var statearr_12784_12859 = state_12758__$1;(statearr_12784_12859[(2)] = inst_12711);
(statearr_12784_12859[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12759 === (32)))
{var inst_12700 = (state_12758[(20)]);var inst_12699 = (state_12758[(10)]);var inst_12701 = (state_12758[(11)]);var inst_12698 = (state_12758[(21)]);var inst_12713 = (state_12758[(2)]);var inst_12714 = (inst_12701 + (1));var tmp12779 = inst_12700;var tmp12780 = inst_12699;var tmp12781 = inst_12698;var inst_12698__$1 = tmp12781;var inst_12699__$1 = tmp12780;var inst_12700__$1 = tmp12779;var inst_12701__$1 = inst_12714;var state_12758__$1 = (function (){var statearr_12785 = state_12758;(statearr_12785[(20)] = inst_12700__$1);
(statearr_12785[(10)] = inst_12699__$1);
(statearr_12785[(11)] = inst_12701__$1);
(statearr_12785[(22)] = inst_12713);
(statearr_12785[(21)] = inst_12698__$1);
return statearr_12785;
})();var statearr_12786_12860 = state_12758__$1;(statearr_12786_12860[(2)] = null);
(statearr_12786_12860[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12759 === (40)))
{var inst_12726 = (state_12758[(23)]);var inst_12730 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12731 = cljs.core.async.untap_STAR_.call(null,m,inst_12726);var state_12758__$1 = (function (){var statearr_12787 = state_12758;(statearr_12787[(24)] = inst_12730);
return statearr_12787;
})();var statearr_12788_12861 = state_12758__$1;(statearr_12788_12861[(2)] = inst_12731);
(statearr_12788_12861[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12759 === (33)))
{var inst_12717 = (state_12758[(25)]);var inst_12719 = cljs.core.chunked_seq_QMARK_.call(null,inst_12717);var state_12758__$1 = state_12758;if(inst_12719)
{var statearr_12789_12862 = state_12758__$1;(statearr_12789_12862[(1)] = (36));
} else
{var statearr_12790_12863 = state_12758__$1;(statearr_12790_12863[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12759 === (13)))
{var inst_12649 = (state_12758[(26)]);var inst_12652 = cljs.core.async.close_BANG_.call(null,inst_12649);var state_12758__$1 = state_12758;var statearr_12791_12864 = state_12758__$1;(statearr_12791_12864[(2)] = inst_12652);
(statearr_12791_12864[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12759 === (22)))
{var inst_12670 = (state_12758[(8)]);var inst_12673 = cljs.core.async.close_BANG_.call(null,inst_12670);var state_12758__$1 = state_12758;var statearr_12792_12865 = state_12758__$1;(statearr_12792_12865[(2)] = inst_12673);
(statearr_12792_12865[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12759 === (36)))
{var inst_12717 = (state_12758[(25)]);var inst_12721 = cljs.core.chunk_first.call(null,inst_12717);var inst_12722 = cljs.core.chunk_rest.call(null,inst_12717);var inst_12723 = cljs.core.count.call(null,inst_12721);var inst_12698 = inst_12722;var inst_12699 = inst_12721;var inst_12700 = inst_12723;var inst_12701 = (0);var state_12758__$1 = (function (){var statearr_12793 = state_12758;(statearr_12793[(20)] = inst_12700);
(statearr_12793[(10)] = inst_12699);
(statearr_12793[(11)] = inst_12701);
(statearr_12793[(21)] = inst_12698);
return statearr_12793;
})();var statearr_12794_12866 = state_12758__$1;(statearr_12794_12866[(2)] = null);
(statearr_12794_12866[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12759 === (41)))
{var inst_12717 = (state_12758[(25)]);var inst_12733 = (state_12758[(2)]);var inst_12734 = cljs.core.next.call(null,inst_12717);var inst_12698 = inst_12734;var inst_12699 = null;var inst_12700 = (0);var inst_12701 = (0);var state_12758__$1 = (function (){var statearr_12795 = state_12758;(statearr_12795[(20)] = inst_12700);
(statearr_12795[(10)] = inst_12699);
(statearr_12795[(27)] = inst_12733);
(statearr_12795[(11)] = inst_12701);
(statearr_12795[(21)] = inst_12698);
return statearr_12795;
})();var statearr_12796_12867 = state_12758__$1;(statearr_12796_12867[(2)] = null);
(statearr_12796_12867[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12759 === (43)))
{var state_12758__$1 = state_12758;var statearr_12797_12868 = state_12758__$1;(statearr_12797_12868[(2)] = null);
(statearr_12797_12868[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12759 === (29)))
{var inst_12742 = (state_12758[(2)]);var state_12758__$1 = state_12758;var statearr_12798_12869 = state_12758__$1;(statearr_12798_12869[(2)] = inst_12742);
(statearr_12798_12869[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12759 === (44)))
{var inst_12751 = (state_12758[(2)]);var state_12758__$1 = (function (){var statearr_12799 = state_12758;(statearr_12799[(28)] = inst_12751);
return statearr_12799;
})();var statearr_12800_12870 = state_12758__$1;(statearr_12800_12870[(2)] = null);
(statearr_12800_12870[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12759 === (6)))
{var inst_12690 = (state_12758[(29)]);var inst_12689 = cljs.core.deref.call(null,cs);var inst_12690__$1 = cljs.core.keys.call(null,inst_12689);var inst_12691 = cljs.core.count.call(null,inst_12690__$1);var inst_12692 = cljs.core.reset_BANG_.call(null,dctr,inst_12691);var inst_12697 = cljs.core.seq.call(null,inst_12690__$1);var inst_12698 = inst_12697;var inst_12699 = null;var inst_12700 = (0);var inst_12701 = (0);var state_12758__$1 = (function (){var statearr_12801 = state_12758;(statearr_12801[(20)] = inst_12700);
(statearr_12801[(10)] = inst_12699);
(statearr_12801[(29)] = inst_12690__$1);
(statearr_12801[(11)] = inst_12701);
(statearr_12801[(30)] = inst_12692);
(statearr_12801[(21)] = inst_12698);
return statearr_12801;
})();var statearr_12802_12871 = state_12758__$1;(statearr_12802_12871[(2)] = null);
(statearr_12802_12871[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12759 === (28)))
{var inst_12717 = (state_12758[(25)]);var inst_12698 = (state_12758[(21)]);var inst_12717__$1 = cljs.core.seq.call(null,inst_12698);var state_12758__$1 = (function (){var statearr_12803 = state_12758;(statearr_12803[(25)] = inst_12717__$1);
return statearr_12803;
})();if(inst_12717__$1)
{var statearr_12804_12872 = state_12758__$1;(statearr_12804_12872[(1)] = (33));
} else
{var statearr_12805_12873 = state_12758__$1;(statearr_12805_12873[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12759 === (25)))
{var inst_12700 = (state_12758[(20)]);var inst_12701 = (state_12758[(11)]);var inst_12703 = (inst_12701 < inst_12700);var inst_12704 = inst_12703;var state_12758__$1 = state_12758;if(cljs.core.truth_(inst_12704))
{var statearr_12806_12874 = state_12758__$1;(statearr_12806_12874[(1)] = (27));
} else
{var statearr_12807_12875 = state_12758__$1;(statearr_12807_12875[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12759 === (34)))
{var state_12758__$1 = state_12758;var statearr_12808_12876 = state_12758__$1;(statearr_12808_12876[(2)] = null);
(statearr_12808_12876[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12759 === (17)))
{var state_12758__$1 = state_12758;var statearr_12809_12877 = state_12758__$1;(statearr_12809_12877[(2)] = null);
(statearr_12809_12877[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12759 === (3)))
{var inst_12756 = (state_12758[(2)]);var state_12758__$1 = state_12758;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12758__$1,inst_12756);
} else
{if((state_val_12759 === (12)))
{var inst_12685 = (state_12758[(2)]);var state_12758__$1 = state_12758;var statearr_12810_12878 = state_12758__$1;(statearr_12810_12878[(2)] = inst_12685);
(statearr_12810_12878[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12759 === (2)))
{var state_12758__$1 = state_12758;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12758__$1,(4),ch);
} else
{if((state_val_12759 === (23)))
{var state_12758__$1 = state_12758;var statearr_12811_12879 = state_12758__$1;(statearr_12811_12879[(2)] = null);
(statearr_12811_12879[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12759 === (35)))
{var inst_12740 = (state_12758[(2)]);var state_12758__$1 = state_12758;var statearr_12812_12880 = state_12758__$1;(statearr_12812_12880[(2)] = inst_12740);
(statearr_12812_12880[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12759 === (19)))
{var inst_12659 = (state_12758[(7)]);var inst_12663 = cljs.core.chunk_first.call(null,inst_12659);var inst_12664 = cljs.core.chunk_rest.call(null,inst_12659);var inst_12665 = cljs.core.count.call(null,inst_12663);var inst_12639 = inst_12664;var inst_12640 = inst_12663;var inst_12641 = inst_12665;var inst_12642 = (0);var state_12758__$1 = (function (){var statearr_12813 = state_12758;(statearr_12813[(13)] = inst_12642);
(statearr_12813[(15)] = inst_12639);
(statearr_12813[(16)] = inst_12641);
(statearr_12813[(17)] = inst_12640);
return statearr_12813;
})();var statearr_12814_12881 = state_12758__$1;(statearr_12814_12881[(2)] = null);
(statearr_12814_12881[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12759 === (11)))
{var inst_12639 = (state_12758[(15)]);var inst_12659 = (state_12758[(7)]);var inst_12659__$1 = cljs.core.seq.call(null,inst_12639);var state_12758__$1 = (function (){var statearr_12815 = state_12758;(statearr_12815[(7)] = inst_12659__$1);
return statearr_12815;
})();if(inst_12659__$1)
{var statearr_12816_12882 = state_12758__$1;(statearr_12816_12882[(1)] = (16));
} else
{var statearr_12817_12883 = state_12758__$1;(statearr_12817_12883[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12759 === (9)))
{var inst_12687 = (state_12758[(2)]);var state_12758__$1 = state_12758;var statearr_12818_12884 = state_12758__$1;(statearr_12818_12884[(2)] = inst_12687);
(statearr_12818_12884[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12759 === (5)))
{var inst_12637 = cljs.core.deref.call(null,cs);var inst_12638 = cljs.core.seq.call(null,inst_12637);var inst_12639 = inst_12638;var inst_12640 = null;var inst_12641 = (0);var inst_12642 = (0);var state_12758__$1 = (function (){var statearr_12819 = state_12758;(statearr_12819[(13)] = inst_12642);
(statearr_12819[(15)] = inst_12639);
(statearr_12819[(16)] = inst_12641);
(statearr_12819[(17)] = inst_12640);
return statearr_12819;
})();var statearr_12820_12885 = state_12758__$1;(statearr_12820_12885[(2)] = null);
(statearr_12820_12885[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12759 === (14)))
{var state_12758__$1 = state_12758;var statearr_12821_12886 = state_12758__$1;(statearr_12821_12886[(2)] = null);
(statearr_12821_12886[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12759 === (45)))
{var inst_12748 = (state_12758[(2)]);var state_12758__$1 = state_12758;var statearr_12822_12887 = state_12758__$1;(statearr_12822_12887[(2)] = inst_12748);
(statearr_12822_12887[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12759 === (26)))
{var inst_12690 = (state_12758[(29)]);var inst_12744 = (state_12758[(2)]);var inst_12745 = cljs.core.seq.call(null,inst_12690);var state_12758__$1 = (function (){var statearr_12823 = state_12758;(statearr_12823[(31)] = inst_12744);
return statearr_12823;
})();if(inst_12745)
{var statearr_12824_12888 = state_12758__$1;(statearr_12824_12888[(1)] = (42));
} else
{var statearr_12825_12889 = state_12758__$1;(statearr_12825_12889[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12759 === (16)))
{var inst_12659 = (state_12758[(7)]);var inst_12661 = cljs.core.chunked_seq_QMARK_.call(null,inst_12659);var state_12758__$1 = state_12758;if(inst_12661)
{var statearr_12826_12890 = state_12758__$1;(statearr_12826_12890[(1)] = (19));
} else
{var statearr_12827_12891 = state_12758__$1;(statearr_12827_12891[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12759 === (38)))
{var inst_12737 = (state_12758[(2)]);var state_12758__$1 = state_12758;var statearr_12828_12892 = state_12758__$1;(statearr_12828_12892[(2)] = inst_12737);
(statearr_12828_12892[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12759 === (30)))
{var state_12758__$1 = state_12758;var statearr_12829_12893 = state_12758__$1;(statearr_12829_12893[(2)] = null);
(statearr_12829_12893[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12759 === (10)))
{var inst_12642 = (state_12758[(13)]);var inst_12640 = (state_12758[(17)]);var inst_12648 = cljs.core._nth.call(null,inst_12640,inst_12642);var inst_12649 = cljs.core.nth.call(null,inst_12648,(0),null);var inst_12650 = cljs.core.nth.call(null,inst_12648,(1),null);var state_12758__$1 = (function (){var statearr_12830 = state_12758;(statearr_12830[(26)] = inst_12649);
return statearr_12830;
})();if(cljs.core.truth_(inst_12650))
{var statearr_12831_12894 = state_12758__$1;(statearr_12831_12894[(1)] = (13));
} else
{var statearr_12832_12895 = state_12758__$1;(statearr_12832_12895[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12759 === (18)))
{var inst_12683 = (state_12758[(2)]);var state_12758__$1 = state_12758;var statearr_12833_12896 = state_12758__$1;(statearr_12833_12896[(2)] = inst_12683);
(statearr_12833_12896[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12759 === (42)))
{var state_12758__$1 = state_12758;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12758__$1,(45),dchan);
} else
{if((state_val_12759 === (37)))
{var inst_12717 = (state_12758[(25)]);var inst_12630 = (state_12758[(9)]);var inst_12726 = (state_12758[(23)]);var inst_12726__$1 = cljs.core.first.call(null,inst_12717);var inst_12727 = cljs.core.async.put_BANG_.call(null,inst_12726__$1,inst_12630,done);var state_12758__$1 = (function (){var statearr_12834 = state_12758;(statearr_12834[(23)] = inst_12726__$1);
return statearr_12834;
})();if(cljs.core.truth_(inst_12727))
{var statearr_12835_12897 = state_12758__$1;(statearr_12835_12897[(1)] = (39));
} else
{var statearr_12836_12898 = state_12758__$1;(statearr_12836_12898[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12759 === (8)))
{var inst_12642 = (state_12758[(13)]);var inst_12641 = (state_12758[(16)]);var inst_12644 = (inst_12642 < inst_12641);var inst_12645 = inst_12644;var state_12758__$1 = state_12758;if(cljs.core.truth_(inst_12645))
{var statearr_12837_12899 = state_12758__$1;(statearr_12837_12899[(1)] = (10));
} else
{var statearr_12838_12900 = state_12758__$1;(statearr_12838_12900[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6395__auto___12846,cs,m,dchan,dctr,done))
;return ((function (switch__6330__auto__,c__6395__auto___12846,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6331__auto__ = null;
var state_machine__6331__auto____0 = (function (){var statearr_12842 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12842[(0)] = state_machine__6331__auto__);
(statearr_12842[(1)] = (1));
return statearr_12842;
});
var state_machine__6331__auto____1 = (function (state_12758){while(true){
var ret_value__6332__auto__ = (function (){try{while(true){
var result__6333__auto__ = switch__6330__auto__.call(null,state_12758);if(cljs.core.keyword_identical_QMARK_.call(null,result__6333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6333__auto__;
}
break;
}
}catch (e12843){if((e12843 instanceof Object))
{var ex__6334__auto__ = e12843;var statearr_12844_12901 = state_12758;(statearr_12844_12901[(5)] = ex__6334__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12758);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12843;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12902 = state_12758;
state_12758 = G__12902;
continue;
}
} else
{return ret_value__6332__auto__;
}
break;
}
});
state_machine__6331__auto__ = function(state_12758){
switch(arguments.length){
case 0:
return state_machine__6331__auto____0.call(this);
case 1:
return state_machine__6331__auto____1.call(this,state_12758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6331__auto____0;
state_machine__6331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6331__auto____1;
return state_machine__6331__auto__;
})()
;})(switch__6330__auto__,c__6395__auto___12846,cs,m,dchan,dctr,done))
})();var state__6397__auto__ = (function (){var statearr_12845 = f__6396__auto__.call(null);(statearr_12845[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6395__auto___12846);
return statearr_12845;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6397__auto__);
});})(c__6395__auto___12846,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj12904 = {};return obj12904;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t13024 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13024 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13025){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta13025 = meta13025;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13024.cljs$lang$type = true;
cljs.core.async.t13024.cljs$lang$ctorStr = "cljs.core.async/t13024";
cljs.core.async.t13024.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t13024");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13024.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t13024.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13024.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13024.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13024.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13024.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13024.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13024.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13024.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13026){var self__ = this;
var _13026__$1 = this;return self__.meta13025;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13024.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13026,meta13025__$1){var self__ = this;
var _13026__$1 = this;return (new cljs.core.async.t13024(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta13025__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t13024 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13024(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13025){return (new cljs.core.async.t13024(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13025));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t13024(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6395__auto___13143 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6395__auto___13143,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6396__auto__ = (function (){var switch__6330__auto__ = ((function (c__6395__auto___13143,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_13096){var state_val_13097 = (state_13096[(1)]);if((state_val_13097 === (7)))
{var inst_13040 = (state_13096[(7)]);var inst_13045 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13040);var state_13096__$1 = state_13096;var statearr_13098_13144 = state_13096__$1;(statearr_13098_13144[(2)] = inst_13045);
(statearr_13098_13144[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13097 === (20)))
{var inst_13055 = (state_13096[(8)]);var state_13096__$1 = state_13096;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13096__$1,(23),out,inst_13055);
} else
{if((state_val_13097 === (1)))
{var inst_13030 = (state_13096[(9)]);var inst_13030__$1 = calc_state.call(null);var inst_13031 = cljs.core.seq_QMARK_.call(null,inst_13030__$1);var state_13096__$1 = (function (){var statearr_13099 = state_13096;(statearr_13099[(9)] = inst_13030__$1);
return statearr_13099;
})();if(inst_13031)
{var statearr_13100_13145 = state_13096__$1;(statearr_13100_13145[(1)] = (2));
} else
{var statearr_13101_13146 = state_13096__$1;(statearr_13101_13146[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13097 === (24)))
{var inst_13048 = (state_13096[(10)]);var inst_13040 = inst_13048;var state_13096__$1 = (function (){var statearr_13102 = state_13096;(statearr_13102[(7)] = inst_13040);
return statearr_13102;
})();var statearr_13103_13147 = state_13096__$1;(statearr_13103_13147[(2)] = null);
(statearr_13103_13147[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13097 === (4)))
{var inst_13030 = (state_13096[(9)]);var inst_13036 = (state_13096[(2)]);var inst_13037 = cljs.core.get.call(null,inst_13036,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_13038 = cljs.core.get.call(null,inst_13036,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_13039 = cljs.core.get.call(null,inst_13036,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_13040 = inst_13030;var state_13096__$1 = (function (){var statearr_13104 = state_13096;(statearr_13104[(11)] = inst_13038);
(statearr_13104[(7)] = inst_13040);
(statearr_13104[(12)] = inst_13039);
(statearr_13104[(13)] = inst_13037);
return statearr_13104;
})();var statearr_13105_13148 = state_13096__$1;(statearr_13105_13148[(2)] = null);
(statearr_13105_13148[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13097 === (15)))
{var state_13096__$1 = state_13096;var statearr_13106_13149 = state_13096__$1;(statearr_13106_13149[(2)] = null);
(statearr_13106_13149[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13097 === (21)))
{var inst_13048 = (state_13096[(10)]);var inst_13040 = inst_13048;var state_13096__$1 = (function (){var statearr_13107 = state_13096;(statearr_13107[(7)] = inst_13040);
return statearr_13107;
})();var statearr_13108_13150 = state_13096__$1;(statearr_13108_13150[(2)] = null);
(statearr_13108_13150[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13097 === (13)))
{var inst_13092 = (state_13096[(2)]);var state_13096__$1 = state_13096;var statearr_13109_13151 = state_13096__$1;(statearr_13109_13151[(2)] = inst_13092);
(statearr_13109_13151[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13097 === (22)))
{var inst_13090 = (state_13096[(2)]);var state_13096__$1 = state_13096;var statearr_13110_13152 = state_13096__$1;(statearr_13110_13152[(2)] = inst_13090);
(statearr_13110_13152[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13097 === (6)))
{var inst_13094 = (state_13096[(2)]);var state_13096__$1 = state_13096;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13096__$1,inst_13094);
} else
{if((state_val_13097 === (25)))
{var state_13096__$1 = state_13096;var statearr_13111_13153 = state_13096__$1;(statearr_13111_13153[(2)] = null);
(statearr_13111_13153[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13097 === (17)))
{var inst_13070 = (state_13096[(14)]);var state_13096__$1 = state_13096;var statearr_13112_13154 = state_13096__$1;(statearr_13112_13154[(2)] = inst_13070);
(statearr_13112_13154[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13097 === (3)))
{var inst_13030 = (state_13096[(9)]);var state_13096__$1 = state_13096;var statearr_13113_13155 = state_13096__$1;(statearr_13113_13155[(2)] = inst_13030);
(statearr_13113_13155[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13097 === (12)))
{var inst_13051 = (state_13096[(15)]);var inst_13056 = (state_13096[(16)]);var inst_13070 = (state_13096[(14)]);var inst_13070__$1 = inst_13051.call(null,inst_13056);var state_13096__$1 = (function (){var statearr_13114 = state_13096;(statearr_13114[(14)] = inst_13070__$1);
return statearr_13114;
})();if(cljs.core.truth_(inst_13070__$1))
{var statearr_13115_13156 = state_13096__$1;(statearr_13115_13156[(1)] = (17));
} else
{var statearr_13116_13157 = state_13096__$1;(statearr_13116_13157[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13097 === (2)))
{var inst_13030 = (state_13096[(9)]);var inst_13033 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13030);var state_13096__$1 = state_13096;var statearr_13117_13158 = state_13096__$1;(statearr_13117_13158[(2)] = inst_13033);
(statearr_13117_13158[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13097 === (23)))
{var inst_13081 = (state_13096[(2)]);var state_13096__$1 = state_13096;if(cljs.core.truth_(inst_13081))
{var statearr_13118_13159 = state_13096__$1;(statearr_13118_13159[(1)] = (24));
} else
{var statearr_13119_13160 = state_13096__$1;(statearr_13119_13160[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13097 === (19)))
{var inst_13078 = (state_13096[(2)]);var state_13096__$1 = state_13096;if(cljs.core.truth_(inst_13078))
{var statearr_13120_13161 = state_13096__$1;(statearr_13120_13161[(1)] = (20));
} else
{var statearr_13121_13162 = state_13096__$1;(statearr_13121_13162[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13097 === (11)))
{var inst_13055 = (state_13096[(8)]);var inst_13061 = (inst_13055 == null);var state_13096__$1 = state_13096;if(cljs.core.truth_(inst_13061))
{var statearr_13122_13163 = state_13096__$1;(statearr_13122_13163[(1)] = (14));
} else
{var statearr_13123_13164 = state_13096__$1;(statearr_13123_13164[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13097 === (9)))
{var inst_13048 = (state_13096[(10)]);var inst_13048__$1 = (state_13096[(2)]);var inst_13049 = cljs.core.get.call(null,inst_13048__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_13050 = cljs.core.get.call(null,inst_13048__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_13051 = cljs.core.get.call(null,inst_13048__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_13096__$1 = (function (){var statearr_13124 = state_13096;(statearr_13124[(15)] = inst_13051);
(statearr_13124[(17)] = inst_13050);
(statearr_13124[(10)] = inst_13048__$1);
return statearr_13124;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13096__$1,(10),inst_13049);
} else
{if((state_val_13097 === (5)))
{var inst_13040 = (state_13096[(7)]);var inst_13043 = cljs.core.seq_QMARK_.call(null,inst_13040);var state_13096__$1 = state_13096;if(inst_13043)
{var statearr_13125_13165 = state_13096__$1;(statearr_13125_13165[(1)] = (7));
} else
{var statearr_13126_13166 = state_13096__$1;(statearr_13126_13166[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13097 === (14)))
{var inst_13056 = (state_13096[(16)]);var inst_13063 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13056);var state_13096__$1 = state_13096;var statearr_13127_13167 = state_13096__$1;(statearr_13127_13167[(2)] = inst_13063);
(statearr_13127_13167[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13097 === (26)))
{var inst_13086 = (state_13096[(2)]);var state_13096__$1 = state_13096;var statearr_13128_13168 = state_13096__$1;(statearr_13128_13168[(2)] = inst_13086);
(statearr_13128_13168[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13097 === (16)))
{var inst_13066 = (state_13096[(2)]);var inst_13067 = calc_state.call(null);var inst_13040 = inst_13067;var state_13096__$1 = (function (){var statearr_13129 = state_13096;(statearr_13129[(18)] = inst_13066);
(statearr_13129[(7)] = inst_13040);
return statearr_13129;
})();var statearr_13130_13169 = state_13096__$1;(statearr_13130_13169[(2)] = null);
(statearr_13130_13169[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13097 === (10)))
{var inst_13055 = (state_13096[(8)]);var inst_13056 = (state_13096[(16)]);var inst_13054 = (state_13096[(2)]);var inst_13055__$1 = cljs.core.nth.call(null,inst_13054,(0),null);var inst_13056__$1 = cljs.core.nth.call(null,inst_13054,(1),null);var inst_13057 = (inst_13055__$1 == null);var inst_13058 = cljs.core._EQ_.call(null,inst_13056__$1,change);var inst_13059 = (inst_13057) || (inst_13058);var state_13096__$1 = (function (){var statearr_13131 = state_13096;(statearr_13131[(8)] = inst_13055__$1);
(statearr_13131[(16)] = inst_13056__$1);
return statearr_13131;
})();if(cljs.core.truth_(inst_13059))
{var statearr_13132_13170 = state_13096__$1;(statearr_13132_13170[(1)] = (11));
} else
{var statearr_13133_13171 = state_13096__$1;(statearr_13133_13171[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13097 === (18)))
{var inst_13051 = (state_13096[(15)]);var inst_13050 = (state_13096[(17)]);var inst_13056 = (state_13096[(16)]);var inst_13073 = cljs.core.empty_QMARK_.call(null,inst_13051);var inst_13074 = inst_13050.call(null,inst_13056);var inst_13075 = cljs.core.not.call(null,inst_13074);var inst_13076 = (inst_13073) && (inst_13075);var state_13096__$1 = state_13096;var statearr_13134_13172 = state_13096__$1;(statearr_13134_13172[(2)] = inst_13076);
(statearr_13134_13172[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13097 === (8)))
{var inst_13040 = (state_13096[(7)]);var state_13096__$1 = state_13096;var statearr_13135_13173 = state_13096__$1;(statearr_13135_13173[(2)] = inst_13040);
(statearr_13135_13173[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6395__auto___13143,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6330__auto__,c__6395__auto___13143,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6331__auto__ = null;
var state_machine__6331__auto____0 = (function (){var statearr_13139 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13139[(0)] = state_machine__6331__auto__);
(statearr_13139[(1)] = (1));
return statearr_13139;
});
var state_machine__6331__auto____1 = (function (state_13096){while(true){
var ret_value__6332__auto__ = (function (){try{while(true){
var result__6333__auto__ = switch__6330__auto__.call(null,state_13096);if(cljs.core.keyword_identical_QMARK_.call(null,result__6333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6333__auto__;
}
break;
}
}catch (e13140){if((e13140 instanceof Object))
{var ex__6334__auto__ = e13140;var statearr_13141_13174 = state_13096;(statearr_13141_13174[(5)] = ex__6334__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13096);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13140;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13175 = state_13096;
state_13096 = G__13175;
continue;
}
} else
{return ret_value__6332__auto__;
}
break;
}
});
state_machine__6331__auto__ = function(state_13096){
switch(arguments.length){
case 0:
return state_machine__6331__auto____0.call(this);
case 1:
return state_machine__6331__auto____1.call(this,state_13096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6331__auto____0;
state_machine__6331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6331__auto____1;
return state_machine__6331__auto__;
})()
;})(switch__6330__auto__,c__6395__auto___13143,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6397__auto__ = (function (){var statearr_13142 = f__6396__auto__.call(null);(statearr_13142[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6395__auto___13143);
return statearr_13142;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6397__auto__);
});})(c__6395__auto___13143,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj13177 = {};return obj13177;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3627__auto__ = p;if(and__3627__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3627__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4275__auto__ = (((p == null))?null:p);return (function (){var or__3639__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3627__auto__ = p;if(and__3627__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3627__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4275__auto__ = (((p == null))?null:p);return (function (){var or__3639__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3627__auto__ = p;if(and__3627__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3627__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4275__auto__ = (((p == null))?null:p);return (function (){var or__3639__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3627__auto__ = p;if(and__3627__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3627__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4275__auto__ = (((p == null))?null:p);return (function (){var or__3639__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3639__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3639__auto__,mults){
return (function (p1__13178_SHARP_){if(cljs.core.truth_(p1__13178_SHARP_.call(null,topic)))
{return p1__13178_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__13178_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3639__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13293 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13293 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13294){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13294 = meta13294;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13293.cljs$lang$type = true;
cljs.core.async.t13293.cljs$lang$ctorStr = "cljs.core.async/t13293";
cljs.core.async.t13293.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t13293");
});})(mults,ensure_mult))
;
cljs.core.async.t13293.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13293.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13293.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13293.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13293.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13293.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13293.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13293.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13295){var self__ = this;
var _13295__$1 = this;return self__.meta13294;
});})(mults,ensure_mult))
;
cljs.core.async.t13293.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13295,meta13294__$1){var self__ = this;
var _13295__$1 = this;return (new cljs.core.async.t13293(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13294__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13293 = ((function (mults,ensure_mult){
return (function __GT_t13293(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13294){return (new cljs.core.async.t13293(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13294));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13293(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6395__auto___13407 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6395__auto___13407,mults,ensure_mult,p){
return (function (){var f__6396__auto__ = (function (){var switch__6330__auto__ = ((function (c__6395__auto___13407,mults,ensure_mult,p){
return (function (state_13363){var state_val_13364 = (state_13363[(1)]);if((state_val_13364 === (7)))
{var inst_13359 = (state_13363[(2)]);var state_13363__$1 = state_13363;var statearr_13365_13408 = state_13363__$1;(statearr_13365_13408[(2)] = inst_13359);
(statearr_13365_13408[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13364 === (20)))
{var state_13363__$1 = state_13363;var statearr_13366_13409 = state_13363__$1;(statearr_13366_13409[(2)] = null);
(statearr_13366_13409[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13364 === (1)))
{var state_13363__$1 = state_13363;var statearr_13367_13410 = state_13363__$1;(statearr_13367_13410[(2)] = null);
(statearr_13367_13410[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13364 === (4)))
{var inst_13298 = (state_13363[(7)]);var inst_13298__$1 = (state_13363[(2)]);var inst_13299 = (inst_13298__$1 == null);var state_13363__$1 = (function (){var statearr_13368 = state_13363;(statearr_13368[(7)] = inst_13298__$1);
return statearr_13368;
})();if(cljs.core.truth_(inst_13299))
{var statearr_13369_13411 = state_13363__$1;(statearr_13369_13411[(1)] = (5));
} else
{var statearr_13370_13412 = state_13363__$1;(statearr_13370_13412[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13364 === (15)))
{var inst_13340 = (state_13363[(2)]);var state_13363__$1 = state_13363;var statearr_13371_13413 = state_13363__$1;(statearr_13371_13413[(2)] = inst_13340);
(statearr_13371_13413[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13364 === (21)))
{var inst_13346 = (state_13363[(8)]);var inst_13354 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13346);var state_13363__$1 = state_13363;var statearr_13372_13414 = state_13363__$1;(statearr_13372_13414[(2)] = inst_13354);
(statearr_13372_13414[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13364 === (13)))
{var inst_13322 = (state_13363[(9)]);var inst_13324 = cljs.core.chunked_seq_QMARK_.call(null,inst_13322);var state_13363__$1 = state_13363;if(inst_13324)
{var statearr_13373_13415 = state_13363__$1;(statearr_13373_13415[(1)] = (16));
} else
{var statearr_13374_13416 = state_13363__$1;(statearr_13374_13416[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13364 === (22)))
{var inst_13356 = (state_13363[(2)]);var state_13363__$1 = (function (){var statearr_13375 = state_13363;(statearr_13375[(10)] = inst_13356);
return statearr_13375;
})();var statearr_13376_13417 = state_13363__$1;(statearr_13376_13417[(2)] = null);
(statearr_13376_13417[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13364 === (6)))
{var inst_13346 = (state_13363[(8)]);var inst_13298 = (state_13363[(7)]);var inst_13346__$1 = topic_fn.call(null,inst_13298);var inst_13347 = cljs.core.deref.call(null,mults);var inst_13348 = cljs.core.get.call(null,inst_13347,inst_13346__$1);var inst_13349 = cljs.core.async.muxch_STAR_.call(null,inst_13348);var state_13363__$1 = (function (){var statearr_13377 = state_13363;(statearr_13377[(8)] = inst_13346__$1);
return statearr_13377;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13363__$1,(19),inst_13349,inst_13298);
} else
{if((state_val_13364 === (17)))
{var inst_13322 = (state_13363[(9)]);var inst_13331 = cljs.core.first.call(null,inst_13322);var inst_13332 = cljs.core.async.muxch_STAR_.call(null,inst_13331);var inst_13333 = cljs.core.async.close_BANG_.call(null,inst_13332);var inst_13334 = cljs.core.next.call(null,inst_13322);var inst_13308 = inst_13334;var inst_13309 = null;var inst_13310 = (0);var inst_13311 = (0);var state_13363__$1 = (function (){var statearr_13378 = state_13363;(statearr_13378[(11)] = inst_13311);
(statearr_13378[(12)] = inst_13333);
(statearr_13378[(13)] = inst_13308);
(statearr_13378[(14)] = inst_13310);
(statearr_13378[(15)] = inst_13309);
return statearr_13378;
})();var statearr_13379_13418 = state_13363__$1;(statearr_13379_13418[(2)] = null);
(statearr_13379_13418[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13364 === (3)))
{var inst_13361 = (state_13363[(2)]);var state_13363__$1 = state_13363;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13363__$1,inst_13361);
} else
{if((state_val_13364 === (12)))
{var inst_13342 = (state_13363[(2)]);var state_13363__$1 = state_13363;var statearr_13380_13419 = state_13363__$1;(statearr_13380_13419[(2)] = inst_13342);
(statearr_13380_13419[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13364 === (2)))
{var state_13363__$1 = state_13363;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13363__$1,(4),ch);
} else
{if((state_val_13364 === (19)))
{var inst_13351 = (state_13363[(2)]);var state_13363__$1 = state_13363;if(cljs.core.truth_(inst_13351))
{var statearr_13381_13420 = state_13363__$1;(statearr_13381_13420[(1)] = (20));
} else
{var statearr_13382_13421 = state_13363__$1;(statearr_13382_13421[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13364 === (11)))
{var inst_13308 = (state_13363[(13)]);var inst_13322 = (state_13363[(9)]);var inst_13322__$1 = cljs.core.seq.call(null,inst_13308);var state_13363__$1 = (function (){var statearr_13383 = state_13363;(statearr_13383[(9)] = inst_13322__$1);
return statearr_13383;
})();if(inst_13322__$1)
{var statearr_13384_13422 = state_13363__$1;(statearr_13384_13422[(1)] = (13));
} else
{var statearr_13385_13423 = state_13363__$1;(statearr_13385_13423[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13364 === (9)))
{var inst_13344 = (state_13363[(2)]);var state_13363__$1 = state_13363;var statearr_13386_13424 = state_13363__$1;(statearr_13386_13424[(2)] = inst_13344);
(statearr_13386_13424[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13364 === (5)))
{var inst_13305 = cljs.core.deref.call(null,mults);var inst_13306 = cljs.core.vals.call(null,inst_13305);var inst_13307 = cljs.core.seq.call(null,inst_13306);var inst_13308 = inst_13307;var inst_13309 = null;var inst_13310 = (0);var inst_13311 = (0);var state_13363__$1 = (function (){var statearr_13387 = state_13363;(statearr_13387[(11)] = inst_13311);
(statearr_13387[(13)] = inst_13308);
(statearr_13387[(14)] = inst_13310);
(statearr_13387[(15)] = inst_13309);
return statearr_13387;
})();var statearr_13388_13425 = state_13363__$1;(statearr_13388_13425[(2)] = null);
(statearr_13388_13425[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13364 === (14)))
{var state_13363__$1 = state_13363;var statearr_13392_13426 = state_13363__$1;(statearr_13392_13426[(2)] = null);
(statearr_13392_13426[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13364 === (16)))
{var inst_13322 = (state_13363[(9)]);var inst_13326 = cljs.core.chunk_first.call(null,inst_13322);var inst_13327 = cljs.core.chunk_rest.call(null,inst_13322);var inst_13328 = cljs.core.count.call(null,inst_13326);var inst_13308 = inst_13327;var inst_13309 = inst_13326;var inst_13310 = inst_13328;var inst_13311 = (0);var state_13363__$1 = (function (){var statearr_13393 = state_13363;(statearr_13393[(11)] = inst_13311);
(statearr_13393[(13)] = inst_13308);
(statearr_13393[(14)] = inst_13310);
(statearr_13393[(15)] = inst_13309);
return statearr_13393;
})();var statearr_13394_13427 = state_13363__$1;(statearr_13394_13427[(2)] = null);
(statearr_13394_13427[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13364 === (10)))
{var inst_13311 = (state_13363[(11)]);var inst_13308 = (state_13363[(13)]);var inst_13310 = (state_13363[(14)]);var inst_13309 = (state_13363[(15)]);var inst_13316 = cljs.core._nth.call(null,inst_13309,inst_13311);var inst_13317 = cljs.core.async.muxch_STAR_.call(null,inst_13316);var inst_13318 = cljs.core.async.close_BANG_.call(null,inst_13317);var inst_13319 = (inst_13311 + (1));var tmp13389 = inst_13308;var tmp13390 = inst_13310;var tmp13391 = inst_13309;var inst_13308__$1 = tmp13389;var inst_13309__$1 = tmp13391;var inst_13310__$1 = tmp13390;var inst_13311__$1 = inst_13319;var state_13363__$1 = (function (){var statearr_13395 = state_13363;(statearr_13395[(16)] = inst_13318);
(statearr_13395[(11)] = inst_13311__$1);
(statearr_13395[(13)] = inst_13308__$1);
(statearr_13395[(14)] = inst_13310__$1);
(statearr_13395[(15)] = inst_13309__$1);
return statearr_13395;
})();var statearr_13396_13428 = state_13363__$1;(statearr_13396_13428[(2)] = null);
(statearr_13396_13428[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13364 === (18)))
{var inst_13337 = (state_13363[(2)]);var state_13363__$1 = state_13363;var statearr_13397_13429 = state_13363__$1;(statearr_13397_13429[(2)] = inst_13337);
(statearr_13397_13429[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13364 === (8)))
{var inst_13311 = (state_13363[(11)]);var inst_13310 = (state_13363[(14)]);var inst_13313 = (inst_13311 < inst_13310);var inst_13314 = inst_13313;var state_13363__$1 = state_13363;if(cljs.core.truth_(inst_13314))
{var statearr_13398_13430 = state_13363__$1;(statearr_13398_13430[(1)] = (10));
} else
{var statearr_13399_13431 = state_13363__$1;(statearr_13399_13431[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6395__auto___13407,mults,ensure_mult,p))
;return ((function (switch__6330__auto__,c__6395__auto___13407,mults,ensure_mult,p){
return (function() {
var state_machine__6331__auto__ = null;
var state_machine__6331__auto____0 = (function (){var statearr_13403 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13403[(0)] = state_machine__6331__auto__);
(statearr_13403[(1)] = (1));
return statearr_13403;
});
var state_machine__6331__auto____1 = (function (state_13363){while(true){
var ret_value__6332__auto__ = (function (){try{while(true){
var result__6333__auto__ = switch__6330__auto__.call(null,state_13363);if(cljs.core.keyword_identical_QMARK_.call(null,result__6333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6333__auto__;
}
break;
}
}catch (e13404){if((e13404 instanceof Object))
{var ex__6334__auto__ = e13404;var statearr_13405_13432 = state_13363;(statearr_13405_13432[(5)] = ex__6334__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13363);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13404;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13433 = state_13363;
state_13363 = G__13433;
continue;
}
} else
{return ret_value__6332__auto__;
}
break;
}
});
state_machine__6331__auto__ = function(state_13363){
switch(arguments.length){
case 0:
return state_machine__6331__auto____0.call(this);
case 1:
return state_machine__6331__auto____1.call(this,state_13363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6331__auto____0;
state_machine__6331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6331__auto____1;
return state_machine__6331__auto__;
})()
;})(switch__6330__auto__,c__6395__auto___13407,mults,ensure_mult,p))
})();var state__6397__auto__ = (function (){var statearr_13406 = f__6396__auto__.call(null);(statearr_13406[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6395__auto___13407);
return statearr_13406;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6397__auto__);
});})(c__6395__auto___13407,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6395__auto___13570 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6395__auto___13570,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6396__auto__ = (function (){var switch__6330__auto__ = ((function (c__6395__auto___13570,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_13540){var state_val_13541 = (state_13540[(1)]);if((state_val_13541 === (7)))
{var state_13540__$1 = state_13540;var statearr_13542_13571 = state_13540__$1;(statearr_13542_13571[(2)] = null);
(statearr_13542_13571[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13541 === (1)))
{var state_13540__$1 = state_13540;var statearr_13543_13572 = state_13540__$1;(statearr_13543_13572[(2)] = null);
(statearr_13543_13572[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13541 === (4)))
{var inst_13504 = (state_13540[(7)]);var inst_13506 = (inst_13504 < cnt);var state_13540__$1 = state_13540;if(cljs.core.truth_(inst_13506))
{var statearr_13544_13573 = state_13540__$1;(statearr_13544_13573[(1)] = (6));
} else
{var statearr_13545_13574 = state_13540__$1;(statearr_13545_13574[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13541 === (15)))
{var inst_13536 = (state_13540[(2)]);var state_13540__$1 = state_13540;var statearr_13546_13575 = state_13540__$1;(statearr_13546_13575[(2)] = inst_13536);
(statearr_13546_13575[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13541 === (13)))
{var inst_13529 = cljs.core.async.close_BANG_.call(null,out);var state_13540__$1 = state_13540;var statearr_13547_13576 = state_13540__$1;(statearr_13547_13576[(2)] = inst_13529);
(statearr_13547_13576[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13541 === (6)))
{var state_13540__$1 = state_13540;var statearr_13548_13577 = state_13540__$1;(statearr_13548_13577[(2)] = null);
(statearr_13548_13577[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13541 === (3)))
{var inst_13538 = (state_13540[(2)]);var state_13540__$1 = state_13540;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13540__$1,inst_13538);
} else
{if((state_val_13541 === (12)))
{var inst_13526 = (state_13540[(8)]);var inst_13526__$1 = (state_13540[(2)]);var inst_13527 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13526__$1);var state_13540__$1 = (function (){var statearr_13549 = state_13540;(statearr_13549[(8)] = inst_13526__$1);
return statearr_13549;
})();if(cljs.core.truth_(inst_13527))
{var statearr_13550_13578 = state_13540__$1;(statearr_13550_13578[(1)] = (13));
} else
{var statearr_13551_13579 = state_13540__$1;(statearr_13551_13579[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13541 === (2)))
{var inst_13503 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13504 = (0);var state_13540__$1 = (function (){var statearr_13552 = state_13540;(statearr_13552[(7)] = inst_13504);
(statearr_13552[(9)] = inst_13503);
return statearr_13552;
})();var statearr_13553_13580 = state_13540__$1;(statearr_13553_13580[(2)] = null);
(statearr_13553_13580[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13541 === (11)))
{var inst_13504 = (state_13540[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13540,(10),Object,null,(9));var inst_13513 = chs__$1.call(null,inst_13504);var inst_13514 = done.call(null,inst_13504);var inst_13515 = cljs.core.async.take_BANG_.call(null,inst_13513,inst_13514);var state_13540__$1 = state_13540;var statearr_13554_13581 = state_13540__$1;(statearr_13554_13581[(2)] = inst_13515);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13540__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13541 === (9)))
{var inst_13504 = (state_13540[(7)]);var inst_13517 = (state_13540[(2)]);var inst_13518 = (inst_13504 + (1));var inst_13504__$1 = inst_13518;var state_13540__$1 = (function (){var statearr_13555 = state_13540;(statearr_13555[(7)] = inst_13504__$1);
(statearr_13555[(10)] = inst_13517);
return statearr_13555;
})();var statearr_13556_13582 = state_13540__$1;(statearr_13556_13582[(2)] = null);
(statearr_13556_13582[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13541 === (5)))
{var inst_13524 = (state_13540[(2)]);var state_13540__$1 = (function (){var statearr_13557 = state_13540;(statearr_13557[(11)] = inst_13524);
return statearr_13557;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13540__$1,(12),dchan);
} else
{if((state_val_13541 === (14)))
{var inst_13526 = (state_13540[(8)]);var inst_13531 = cljs.core.apply.call(null,f,inst_13526);var state_13540__$1 = state_13540;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13540__$1,(16),out,inst_13531);
} else
{if((state_val_13541 === (16)))
{var inst_13533 = (state_13540[(2)]);var state_13540__$1 = (function (){var statearr_13558 = state_13540;(statearr_13558[(12)] = inst_13533);
return statearr_13558;
})();var statearr_13559_13583 = state_13540__$1;(statearr_13559_13583[(2)] = null);
(statearr_13559_13583[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13541 === (10)))
{var inst_13508 = (state_13540[(2)]);var inst_13509 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13540__$1 = (function (){var statearr_13560 = state_13540;(statearr_13560[(13)] = inst_13508);
return statearr_13560;
})();var statearr_13561_13584 = state_13540__$1;(statearr_13561_13584[(2)] = inst_13509);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13540__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13541 === (8)))
{var inst_13522 = (state_13540[(2)]);var state_13540__$1 = state_13540;var statearr_13562_13585 = state_13540__$1;(statearr_13562_13585[(2)] = inst_13522);
(statearr_13562_13585[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6395__auto___13570,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6330__auto__,c__6395__auto___13570,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6331__auto__ = null;
var state_machine__6331__auto____0 = (function (){var statearr_13566 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13566[(0)] = state_machine__6331__auto__);
(statearr_13566[(1)] = (1));
return statearr_13566;
});
var state_machine__6331__auto____1 = (function (state_13540){while(true){
var ret_value__6332__auto__ = (function (){try{while(true){
var result__6333__auto__ = switch__6330__auto__.call(null,state_13540);if(cljs.core.keyword_identical_QMARK_.call(null,result__6333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6333__auto__;
}
break;
}
}catch (e13567){if((e13567 instanceof Object))
{var ex__6334__auto__ = e13567;var statearr_13568_13586 = state_13540;(statearr_13568_13586[(5)] = ex__6334__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13540);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13567;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13587 = state_13540;
state_13540 = G__13587;
continue;
}
} else
{return ret_value__6332__auto__;
}
break;
}
});
state_machine__6331__auto__ = function(state_13540){
switch(arguments.length){
case 0:
return state_machine__6331__auto____0.call(this);
case 1:
return state_machine__6331__auto____1.call(this,state_13540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6331__auto____0;
state_machine__6331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6331__auto____1;
return state_machine__6331__auto__;
})()
;})(switch__6330__auto__,c__6395__auto___13570,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6397__auto__ = (function (){var statearr_13569 = f__6396__auto__.call(null);(statearr_13569[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6395__auto___13570);
return statearr_13569;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6397__auto__);
});})(c__6395__auto___13570,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6395__auto___13695 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6395__auto___13695,out){
return (function (){var f__6396__auto__ = (function (){var switch__6330__auto__ = ((function (c__6395__auto___13695,out){
return (function (state_13671){var state_val_13672 = (state_13671[(1)]);if((state_val_13672 === (7)))
{var inst_13651 = (state_13671[(7)]);var inst_13650 = (state_13671[(8)]);var inst_13650__$1 = (state_13671[(2)]);var inst_13651__$1 = cljs.core.nth.call(null,inst_13650__$1,(0),null);var inst_13652 = cljs.core.nth.call(null,inst_13650__$1,(1),null);var inst_13653 = (inst_13651__$1 == null);var state_13671__$1 = (function (){var statearr_13673 = state_13671;(statearr_13673[(7)] = inst_13651__$1);
(statearr_13673[(8)] = inst_13650__$1);
(statearr_13673[(9)] = inst_13652);
return statearr_13673;
})();if(cljs.core.truth_(inst_13653))
{var statearr_13674_13696 = state_13671__$1;(statearr_13674_13696[(1)] = (8));
} else
{var statearr_13675_13697 = state_13671__$1;(statearr_13675_13697[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13672 === (1)))
{var inst_13642 = cljs.core.vec.call(null,chs);var inst_13643 = inst_13642;var state_13671__$1 = (function (){var statearr_13676 = state_13671;(statearr_13676[(10)] = inst_13643);
return statearr_13676;
})();var statearr_13677_13698 = state_13671__$1;(statearr_13677_13698[(2)] = null);
(statearr_13677_13698[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13672 === (4)))
{var inst_13643 = (state_13671[(10)]);var state_13671__$1 = state_13671;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13671__$1,(7),inst_13643);
} else
{if((state_val_13672 === (6)))
{var inst_13667 = (state_13671[(2)]);var state_13671__$1 = state_13671;var statearr_13678_13699 = state_13671__$1;(statearr_13678_13699[(2)] = inst_13667);
(statearr_13678_13699[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13672 === (3)))
{var inst_13669 = (state_13671[(2)]);var state_13671__$1 = state_13671;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13671__$1,inst_13669);
} else
{if((state_val_13672 === (2)))
{var inst_13643 = (state_13671[(10)]);var inst_13645 = cljs.core.count.call(null,inst_13643);var inst_13646 = (inst_13645 > (0));var state_13671__$1 = state_13671;if(cljs.core.truth_(inst_13646))
{var statearr_13680_13700 = state_13671__$1;(statearr_13680_13700[(1)] = (4));
} else
{var statearr_13681_13701 = state_13671__$1;(statearr_13681_13701[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13672 === (11)))
{var inst_13643 = (state_13671[(10)]);var inst_13660 = (state_13671[(2)]);var tmp13679 = inst_13643;var inst_13643__$1 = tmp13679;var state_13671__$1 = (function (){var statearr_13682 = state_13671;(statearr_13682[(11)] = inst_13660);
(statearr_13682[(10)] = inst_13643__$1);
return statearr_13682;
})();var statearr_13683_13702 = state_13671__$1;(statearr_13683_13702[(2)] = null);
(statearr_13683_13702[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13672 === (9)))
{var inst_13651 = (state_13671[(7)]);var state_13671__$1 = state_13671;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13671__$1,(11),out,inst_13651);
} else
{if((state_val_13672 === (5)))
{var inst_13665 = cljs.core.async.close_BANG_.call(null,out);var state_13671__$1 = state_13671;var statearr_13684_13703 = state_13671__$1;(statearr_13684_13703[(2)] = inst_13665);
(statearr_13684_13703[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13672 === (10)))
{var inst_13663 = (state_13671[(2)]);var state_13671__$1 = state_13671;var statearr_13685_13704 = state_13671__$1;(statearr_13685_13704[(2)] = inst_13663);
(statearr_13685_13704[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13672 === (8)))
{var inst_13651 = (state_13671[(7)]);var inst_13650 = (state_13671[(8)]);var inst_13643 = (state_13671[(10)]);var inst_13652 = (state_13671[(9)]);var inst_13655 = (function (){var c = inst_13652;var v = inst_13651;var vec__13648 = inst_13650;var cs = inst_13643;return ((function (c,v,vec__13648,cs,inst_13651,inst_13650,inst_13643,inst_13652,state_val_13672,c__6395__auto___13695,out){
return (function (p1__13588_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13588_SHARP_);
});
;})(c,v,vec__13648,cs,inst_13651,inst_13650,inst_13643,inst_13652,state_val_13672,c__6395__auto___13695,out))
})();var inst_13656 = cljs.core.filterv.call(null,inst_13655,inst_13643);var inst_13643__$1 = inst_13656;var state_13671__$1 = (function (){var statearr_13686 = state_13671;(statearr_13686[(10)] = inst_13643__$1);
return statearr_13686;
})();var statearr_13687_13705 = state_13671__$1;(statearr_13687_13705[(2)] = null);
(statearr_13687_13705[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6395__auto___13695,out))
;return ((function (switch__6330__auto__,c__6395__auto___13695,out){
return (function() {
var state_machine__6331__auto__ = null;
var state_machine__6331__auto____0 = (function (){var statearr_13691 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13691[(0)] = state_machine__6331__auto__);
(statearr_13691[(1)] = (1));
return statearr_13691;
});
var state_machine__6331__auto____1 = (function (state_13671){while(true){
var ret_value__6332__auto__ = (function (){try{while(true){
var result__6333__auto__ = switch__6330__auto__.call(null,state_13671);if(cljs.core.keyword_identical_QMARK_.call(null,result__6333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6333__auto__;
}
break;
}
}catch (e13692){if((e13692 instanceof Object))
{var ex__6334__auto__ = e13692;var statearr_13693_13706 = state_13671;(statearr_13693_13706[(5)] = ex__6334__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13671);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13692;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13707 = state_13671;
state_13671 = G__13707;
continue;
}
} else
{return ret_value__6332__auto__;
}
break;
}
});
state_machine__6331__auto__ = function(state_13671){
switch(arguments.length){
case 0:
return state_machine__6331__auto____0.call(this);
case 1:
return state_machine__6331__auto____1.call(this,state_13671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6331__auto____0;
state_machine__6331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6331__auto____1;
return state_machine__6331__auto__;
})()
;})(switch__6330__auto__,c__6395__auto___13695,out))
})();var state__6397__auto__ = (function (){var statearr_13694 = f__6396__auto__.call(null);(statearr_13694[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6395__auto___13695);
return statearr_13694;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6397__auto__);
});})(c__6395__auto___13695,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6395__auto___13800 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6395__auto___13800,out){
return (function (){var f__6396__auto__ = (function (){var switch__6330__auto__ = ((function (c__6395__auto___13800,out){
return (function (state_13777){var state_val_13778 = (state_13777[(1)]);if((state_val_13778 === (7)))
{var inst_13759 = (state_13777[(7)]);var inst_13759__$1 = (state_13777[(2)]);var inst_13760 = (inst_13759__$1 == null);var inst_13761 = cljs.core.not.call(null,inst_13760);var state_13777__$1 = (function (){var statearr_13779 = state_13777;(statearr_13779[(7)] = inst_13759__$1);
return statearr_13779;
})();if(inst_13761)
{var statearr_13780_13801 = state_13777__$1;(statearr_13780_13801[(1)] = (8));
} else
{var statearr_13781_13802 = state_13777__$1;(statearr_13781_13802[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13778 === (1)))
{var inst_13754 = (0);var state_13777__$1 = (function (){var statearr_13782 = state_13777;(statearr_13782[(8)] = inst_13754);
return statearr_13782;
})();var statearr_13783_13803 = state_13777__$1;(statearr_13783_13803[(2)] = null);
(statearr_13783_13803[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13778 === (4)))
{var state_13777__$1 = state_13777;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13777__$1,(7),ch);
} else
{if((state_val_13778 === (6)))
{var inst_13772 = (state_13777[(2)]);var state_13777__$1 = state_13777;var statearr_13784_13804 = state_13777__$1;(statearr_13784_13804[(2)] = inst_13772);
(statearr_13784_13804[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13778 === (3)))
{var inst_13774 = (state_13777[(2)]);var inst_13775 = cljs.core.async.close_BANG_.call(null,out);var state_13777__$1 = (function (){var statearr_13785 = state_13777;(statearr_13785[(9)] = inst_13774);
return statearr_13785;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13777__$1,inst_13775);
} else
{if((state_val_13778 === (2)))
{var inst_13754 = (state_13777[(8)]);var inst_13756 = (inst_13754 < n);var state_13777__$1 = state_13777;if(cljs.core.truth_(inst_13756))
{var statearr_13786_13805 = state_13777__$1;(statearr_13786_13805[(1)] = (4));
} else
{var statearr_13787_13806 = state_13777__$1;(statearr_13787_13806[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13778 === (11)))
{var inst_13754 = (state_13777[(8)]);var inst_13764 = (state_13777[(2)]);var inst_13765 = (inst_13754 + (1));var inst_13754__$1 = inst_13765;var state_13777__$1 = (function (){var statearr_13788 = state_13777;(statearr_13788[(10)] = inst_13764);
(statearr_13788[(8)] = inst_13754__$1);
return statearr_13788;
})();var statearr_13789_13807 = state_13777__$1;(statearr_13789_13807[(2)] = null);
(statearr_13789_13807[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13778 === (9)))
{var state_13777__$1 = state_13777;var statearr_13790_13808 = state_13777__$1;(statearr_13790_13808[(2)] = null);
(statearr_13790_13808[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13778 === (5)))
{var state_13777__$1 = state_13777;var statearr_13791_13809 = state_13777__$1;(statearr_13791_13809[(2)] = null);
(statearr_13791_13809[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13778 === (10)))
{var inst_13769 = (state_13777[(2)]);var state_13777__$1 = state_13777;var statearr_13792_13810 = state_13777__$1;(statearr_13792_13810[(2)] = inst_13769);
(statearr_13792_13810[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13778 === (8)))
{var inst_13759 = (state_13777[(7)]);var state_13777__$1 = state_13777;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13777__$1,(11),out,inst_13759);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6395__auto___13800,out))
;return ((function (switch__6330__auto__,c__6395__auto___13800,out){
return (function() {
var state_machine__6331__auto__ = null;
var state_machine__6331__auto____0 = (function (){var statearr_13796 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13796[(0)] = state_machine__6331__auto__);
(statearr_13796[(1)] = (1));
return statearr_13796;
});
var state_machine__6331__auto____1 = (function (state_13777){while(true){
var ret_value__6332__auto__ = (function (){try{while(true){
var result__6333__auto__ = switch__6330__auto__.call(null,state_13777);if(cljs.core.keyword_identical_QMARK_.call(null,result__6333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6333__auto__;
}
break;
}
}catch (e13797){if((e13797 instanceof Object))
{var ex__6334__auto__ = e13797;var statearr_13798_13811 = state_13777;(statearr_13798_13811[(5)] = ex__6334__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13777);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13797;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13812 = state_13777;
state_13777 = G__13812;
continue;
}
} else
{return ret_value__6332__auto__;
}
break;
}
});
state_machine__6331__auto__ = function(state_13777){
switch(arguments.length){
case 0:
return state_machine__6331__auto____0.call(this);
case 1:
return state_machine__6331__auto____1.call(this,state_13777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6331__auto____0;
state_machine__6331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6331__auto____1;
return state_machine__6331__auto__;
})()
;})(switch__6330__auto__,c__6395__auto___13800,out))
})();var state__6397__auto__ = (function (){var statearr_13799 = f__6396__auto__.call(null);(statearr_13799[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6395__auto___13800);
return statearr_13799;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6397__auto__);
});})(c__6395__auto___13800,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6395__auto___13909 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6395__auto___13909,out){
return (function (){var f__6396__auto__ = (function (){var switch__6330__auto__ = ((function (c__6395__auto___13909,out){
return (function (state_13884){var state_val_13885 = (state_13884[(1)]);if((state_val_13885 === (7)))
{var inst_13879 = (state_13884[(2)]);var state_13884__$1 = state_13884;var statearr_13886_13910 = state_13884__$1;(statearr_13886_13910[(2)] = inst_13879);
(statearr_13886_13910[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13885 === (1)))
{var inst_13861 = null;var state_13884__$1 = (function (){var statearr_13887 = state_13884;(statearr_13887[(7)] = inst_13861);
return statearr_13887;
})();var statearr_13888_13911 = state_13884__$1;(statearr_13888_13911[(2)] = null);
(statearr_13888_13911[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13885 === (4)))
{var inst_13864 = (state_13884[(8)]);var inst_13864__$1 = (state_13884[(2)]);var inst_13865 = (inst_13864__$1 == null);var inst_13866 = cljs.core.not.call(null,inst_13865);var state_13884__$1 = (function (){var statearr_13889 = state_13884;(statearr_13889[(8)] = inst_13864__$1);
return statearr_13889;
})();if(inst_13866)
{var statearr_13890_13912 = state_13884__$1;(statearr_13890_13912[(1)] = (5));
} else
{var statearr_13891_13913 = state_13884__$1;(statearr_13891_13913[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13885 === (6)))
{var state_13884__$1 = state_13884;var statearr_13892_13914 = state_13884__$1;(statearr_13892_13914[(2)] = null);
(statearr_13892_13914[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13885 === (3)))
{var inst_13881 = (state_13884[(2)]);var inst_13882 = cljs.core.async.close_BANG_.call(null,out);var state_13884__$1 = (function (){var statearr_13893 = state_13884;(statearr_13893[(9)] = inst_13881);
return statearr_13893;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13884__$1,inst_13882);
} else
{if((state_val_13885 === (2)))
{var state_13884__$1 = state_13884;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13884__$1,(4),ch);
} else
{if((state_val_13885 === (11)))
{var inst_13864 = (state_13884[(8)]);var inst_13873 = (state_13884[(2)]);var inst_13861 = inst_13864;var state_13884__$1 = (function (){var statearr_13894 = state_13884;(statearr_13894[(7)] = inst_13861);
(statearr_13894[(10)] = inst_13873);
return statearr_13894;
})();var statearr_13895_13915 = state_13884__$1;(statearr_13895_13915[(2)] = null);
(statearr_13895_13915[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13885 === (9)))
{var inst_13864 = (state_13884[(8)]);var state_13884__$1 = state_13884;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13884__$1,(11),out,inst_13864);
} else
{if((state_val_13885 === (5)))
{var inst_13864 = (state_13884[(8)]);var inst_13861 = (state_13884[(7)]);var inst_13868 = cljs.core._EQ_.call(null,inst_13864,inst_13861);var state_13884__$1 = state_13884;if(inst_13868)
{var statearr_13897_13916 = state_13884__$1;(statearr_13897_13916[(1)] = (8));
} else
{var statearr_13898_13917 = state_13884__$1;(statearr_13898_13917[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13885 === (10)))
{var inst_13876 = (state_13884[(2)]);var state_13884__$1 = state_13884;var statearr_13899_13918 = state_13884__$1;(statearr_13899_13918[(2)] = inst_13876);
(statearr_13899_13918[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13885 === (8)))
{var inst_13861 = (state_13884[(7)]);var tmp13896 = inst_13861;var inst_13861__$1 = tmp13896;var state_13884__$1 = (function (){var statearr_13900 = state_13884;(statearr_13900[(7)] = inst_13861__$1);
return statearr_13900;
})();var statearr_13901_13919 = state_13884__$1;(statearr_13901_13919[(2)] = null);
(statearr_13901_13919[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6395__auto___13909,out))
;return ((function (switch__6330__auto__,c__6395__auto___13909,out){
return (function() {
var state_machine__6331__auto__ = null;
var state_machine__6331__auto____0 = (function (){var statearr_13905 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13905[(0)] = state_machine__6331__auto__);
(statearr_13905[(1)] = (1));
return statearr_13905;
});
var state_machine__6331__auto____1 = (function (state_13884){while(true){
var ret_value__6332__auto__ = (function (){try{while(true){
var result__6333__auto__ = switch__6330__auto__.call(null,state_13884);if(cljs.core.keyword_identical_QMARK_.call(null,result__6333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6333__auto__;
}
break;
}
}catch (e13906){if((e13906 instanceof Object))
{var ex__6334__auto__ = e13906;var statearr_13907_13920 = state_13884;(statearr_13907_13920[(5)] = ex__6334__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13884);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13906;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13921 = state_13884;
state_13884 = G__13921;
continue;
}
} else
{return ret_value__6332__auto__;
}
break;
}
});
state_machine__6331__auto__ = function(state_13884){
switch(arguments.length){
case 0:
return state_machine__6331__auto____0.call(this);
case 1:
return state_machine__6331__auto____1.call(this,state_13884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6331__auto____0;
state_machine__6331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6331__auto____1;
return state_machine__6331__auto__;
})()
;})(switch__6330__auto__,c__6395__auto___13909,out))
})();var state__6397__auto__ = (function (){var statearr_13908 = f__6396__auto__.call(null);(statearr_13908[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6395__auto___13909);
return statearr_13908;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6397__auto__);
});})(c__6395__auto___13909,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6395__auto___14056 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6395__auto___14056,out){
return (function (){var f__6396__auto__ = (function (){var switch__6330__auto__ = ((function (c__6395__auto___14056,out){
return (function (state_14026){var state_val_14027 = (state_14026[(1)]);if((state_val_14027 === (7)))
{var inst_14022 = (state_14026[(2)]);var state_14026__$1 = state_14026;var statearr_14028_14057 = state_14026__$1;(statearr_14028_14057[(2)] = inst_14022);
(statearr_14028_14057[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14027 === (1)))
{var inst_13989 = (new Array(n));var inst_13990 = inst_13989;var inst_13991 = (0);var state_14026__$1 = (function (){var statearr_14029 = state_14026;(statearr_14029[(7)] = inst_13990);
(statearr_14029[(8)] = inst_13991);
return statearr_14029;
})();var statearr_14030_14058 = state_14026__$1;(statearr_14030_14058[(2)] = null);
(statearr_14030_14058[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14027 === (4)))
{var inst_13994 = (state_14026[(9)]);var inst_13994__$1 = (state_14026[(2)]);var inst_13995 = (inst_13994__$1 == null);var inst_13996 = cljs.core.not.call(null,inst_13995);var state_14026__$1 = (function (){var statearr_14031 = state_14026;(statearr_14031[(9)] = inst_13994__$1);
return statearr_14031;
})();if(inst_13996)
{var statearr_14032_14059 = state_14026__$1;(statearr_14032_14059[(1)] = (5));
} else
{var statearr_14033_14060 = state_14026__$1;(statearr_14033_14060[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14027 === (15)))
{var inst_14016 = (state_14026[(2)]);var state_14026__$1 = state_14026;var statearr_14034_14061 = state_14026__$1;(statearr_14034_14061[(2)] = inst_14016);
(statearr_14034_14061[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14027 === (13)))
{var state_14026__$1 = state_14026;var statearr_14035_14062 = state_14026__$1;(statearr_14035_14062[(2)] = null);
(statearr_14035_14062[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14027 === (6)))
{var inst_13991 = (state_14026[(8)]);var inst_14012 = (inst_13991 > (0));var state_14026__$1 = state_14026;if(cljs.core.truth_(inst_14012))
{var statearr_14036_14063 = state_14026__$1;(statearr_14036_14063[(1)] = (12));
} else
{var statearr_14037_14064 = state_14026__$1;(statearr_14037_14064[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14027 === (3)))
{var inst_14024 = (state_14026[(2)]);var state_14026__$1 = state_14026;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14026__$1,inst_14024);
} else
{if((state_val_14027 === (12)))
{var inst_13990 = (state_14026[(7)]);var inst_14014 = cljs.core.vec.call(null,inst_13990);var state_14026__$1 = state_14026;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14026__$1,(15),out,inst_14014);
} else
{if((state_val_14027 === (2)))
{var state_14026__$1 = state_14026;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14026__$1,(4),ch);
} else
{if((state_val_14027 === (11)))
{var inst_14006 = (state_14026[(2)]);var inst_14007 = (new Array(n));var inst_13990 = inst_14007;var inst_13991 = (0);var state_14026__$1 = (function (){var statearr_14038 = state_14026;(statearr_14038[(10)] = inst_14006);
(statearr_14038[(7)] = inst_13990);
(statearr_14038[(8)] = inst_13991);
return statearr_14038;
})();var statearr_14039_14065 = state_14026__$1;(statearr_14039_14065[(2)] = null);
(statearr_14039_14065[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14027 === (9)))
{var inst_13990 = (state_14026[(7)]);var inst_14004 = cljs.core.vec.call(null,inst_13990);var state_14026__$1 = state_14026;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14026__$1,(11),out,inst_14004);
} else
{if((state_val_14027 === (5)))
{var inst_13994 = (state_14026[(9)]);var inst_13990 = (state_14026[(7)]);var inst_13999 = (state_14026[(11)]);var inst_13991 = (state_14026[(8)]);var inst_13998 = (inst_13990[inst_13991] = inst_13994);var inst_13999__$1 = (inst_13991 + (1));var inst_14000 = (inst_13999__$1 < n);var state_14026__$1 = (function (){var statearr_14040 = state_14026;(statearr_14040[(12)] = inst_13998);
(statearr_14040[(11)] = inst_13999__$1);
return statearr_14040;
})();if(cljs.core.truth_(inst_14000))
{var statearr_14041_14066 = state_14026__$1;(statearr_14041_14066[(1)] = (8));
} else
{var statearr_14042_14067 = state_14026__$1;(statearr_14042_14067[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14027 === (14)))
{var inst_14019 = (state_14026[(2)]);var inst_14020 = cljs.core.async.close_BANG_.call(null,out);var state_14026__$1 = (function (){var statearr_14044 = state_14026;(statearr_14044[(13)] = inst_14019);
return statearr_14044;
})();var statearr_14045_14068 = state_14026__$1;(statearr_14045_14068[(2)] = inst_14020);
(statearr_14045_14068[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14027 === (10)))
{var inst_14010 = (state_14026[(2)]);var state_14026__$1 = state_14026;var statearr_14046_14069 = state_14026__$1;(statearr_14046_14069[(2)] = inst_14010);
(statearr_14046_14069[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14027 === (8)))
{var inst_13990 = (state_14026[(7)]);var inst_13999 = (state_14026[(11)]);var tmp14043 = inst_13990;var inst_13990__$1 = tmp14043;var inst_13991 = inst_13999;var state_14026__$1 = (function (){var statearr_14047 = state_14026;(statearr_14047[(7)] = inst_13990__$1);
(statearr_14047[(8)] = inst_13991);
return statearr_14047;
})();var statearr_14048_14070 = state_14026__$1;(statearr_14048_14070[(2)] = null);
(statearr_14048_14070[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6395__auto___14056,out))
;return ((function (switch__6330__auto__,c__6395__auto___14056,out){
return (function() {
var state_machine__6331__auto__ = null;
var state_machine__6331__auto____0 = (function (){var statearr_14052 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14052[(0)] = state_machine__6331__auto__);
(statearr_14052[(1)] = (1));
return statearr_14052;
});
var state_machine__6331__auto____1 = (function (state_14026){while(true){
var ret_value__6332__auto__ = (function (){try{while(true){
var result__6333__auto__ = switch__6330__auto__.call(null,state_14026);if(cljs.core.keyword_identical_QMARK_.call(null,result__6333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6333__auto__;
}
break;
}
}catch (e14053){if((e14053 instanceof Object))
{var ex__6334__auto__ = e14053;var statearr_14054_14071 = state_14026;(statearr_14054_14071[(5)] = ex__6334__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14026);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14053;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14072 = state_14026;
state_14026 = G__14072;
continue;
}
} else
{return ret_value__6332__auto__;
}
break;
}
});
state_machine__6331__auto__ = function(state_14026){
switch(arguments.length){
case 0:
return state_machine__6331__auto____0.call(this);
case 1:
return state_machine__6331__auto____1.call(this,state_14026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6331__auto____0;
state_machine__6331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6331__auto____1;
return state_machine__6331__auto__;
})()
;})(switch__6330__auto__,c__6395__auto___14056,out))
})();var state__6397__auto__ = (function (){var statearr_14055 = f__6396__auto__.call(null);(statearr_14055[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6395__auto___14056);
return statearr_14055;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6397__auto__);
});})(c__6395__auto___14056,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6395__auto___14215 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6395__auto___14215,out){
return (function (){var f__6396__auto__ = (function (){var switch__6330__auto__ = ((function (c__6395__auto___14215,out){
return (function (state_14185){var state_val_14186 = (state_14185[(1)]);if((state_val_14186 === (7)))
{var inst_14181 = (state_14185[(2)]);var state_14185__$1 = state_14185;var statearr_14187_14216 = state_14185__$1;(statearr_14187_14216[(2)] = inst_14181);
(statearr_14187_14216[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14186 === (1)))
{var inst_14144 = [];var inst_14145 = inst_14144;var inst_14146 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_14185__$1 = (function (){var statearr_14188 = state_14185;(statearr_14188[(7)] = inst_14146);
(statearr_14188[(8)] = inst_14145);
return statearr_14188;
})();var statearr_14189_14217 = state_14185__$1;(statearr_14189_14217[(2)] = null);
(statearr_14189_14217[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14186 === (4)))
{var inst_14149 = (state_14185[(9)]);var inst_14149__$1 = (state_14185[(2)]);var inst_14150 = (inst_14149__$1 == null);var inst_14151 = cljs.core.not.call(null,inst_14150);var state_14185__$1 = (function (){var statearr_14190 = state_14185;(statearr_14190[(9)] = inst_14149__$1);
return statearr_14190;
})();if(inst_14151)
{var statearr_14191_14218 = state_14185__$1;(statearr_14191_14218[(1)] = (5));
} else
{var statearr_14192_14219 = state_14185__$1;(statearr_14192_14219[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14186 === (15)))
{var inst_14175 = (state_14185[(2)]);var state_14185__$1 = state_14185;var statearr_14193_14220 = state_14185__$1;(statearr_14193_14220[(2)] = inst_14175);
(statearr_14193_14220[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14186 === (13)))
{var state_14185__$1 = state_14185;var statearr_14194_14221 = state_14185__$1;(statearr_14194_14221[(2)] = null);
(statearr_14194_14221[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14186 === (6)))
{var inst_14145 = (state_14185[(8)]);var inst_14170 = inst_14145.length;var inst_14171 = (inst_14170 > (0));var state_14185__$1 = state_14185;if(cljs.core.truth_(inst_14171))
{var statearr_14195_14222 = state_14185__$1;(statearr_14195_14222[(1)] = (12));
} else
{var statearr_14196_14223 = state_14185__$1;(statearr_14196_14223[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14186 === (3)))
{var inst_14183 = (state_14185[(2)]);var state_14185__$1 = state_14185;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14185__$1,inst_14183);
} else
{if((state_val_14186 === (12)))
{var inst_14145 = (state_14185[(8)]);var inst_14173 = cljs.core.vec.call(null,inst_14145);var state_14185__$1 = state_14185;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14185__$1,(15),out,inst_14173);
} else
{if((state_val_14186 === (2)))
{var state_14185__$1 = state_14185;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14185__$1,(4),ch);
} else
{if((state_val_14186 === (11)))
{var inst_14149 = (state_14185[(9)]);var inst_14153 = (state_14185[(10)]);var inst_14163 = (state_14185[(2)]);var inst_14164 = [];var inst_14165 = inst_14164.push(inst_14149);var inst_14145 = inst_14164;var inst_14146 = inst_14153;var state_14185__$1 = (function (){var statearr_14197 = state_14185;(statearr_14197[(7)] = inst_14146);
(statearr_14197[(11)] = inst_14163);
(statearr_14197[(12)] = inst_14165);
(statearr_14197[(8)] = inst_14145);
return statearr_14197;
})();var statearr_14198_14224 = state_14185__$1;(statearr_14198_14224[(2)] = null);
(statearr_14198_14224[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14186 === (9)))
{var inst_14145 = (state_14185[(8)]);var inst_14161 = cljs.core.vec.call(null,inst_14145);var state_14185__$1 = state_14185;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14185__$1,(11),out,inst_14161);
} else
{if((state_val_14186 === (5)))
{var inst_14146 = (state_14185[(7)]);var inst_14149 = (state_14185[(9)]);var inst_14153 = (state_14185[(10)]);var inst_14153__$1 = f.call(null,inst_14149);var inst_14154 = cljs.core._EQ_.call(null,inst_14153__$1,inst_14146);var inst_14155 = cljs.core.keyword_identical_QMARK_.call(null,inst_14146,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_14156 = (inst_14154) || (inst_14155);var state_14185__$1 = (function (){var statearr_14199 = state_14185;(statearr_14199[(10)] = inst_14153__$1);
return statearr_14199;
})();if(cljs.core.truth_(inst_14156))
{var statearr_14200_14225 = state_14185__$1;(statearr_14200_14225[(1)] = (8));
} else
{var statearr_14201_14226 = state_14185__$1;(statearr_14201_14226[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14186 === (14)))
{var inst_14178 = (state_14185[(2)]);var inst_14179 = cljs.core.async.close_BANG_.call(null,out);var state_14185__$1 = (function (){var statearr_14203 = state_14185;(statearr_14203[(13)] = inst_14178);
return statearr_14203;
})();var statearr_14204_14227 = state_14185__$1;(statearr_14204_14227[(2)] = inst_14179);
(statearr_14204_14227[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14186 === (10)))
{var inst_14168 = (state_14185[(2)]);var state_14185__$1 = state_14185;var statearr_14205_14228 = state_14185__$1;(statearr_14205_14228[(2)] = inst_14168);
(statearr_14205_14228[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14186 === (8)))
{var inst_14149 = (state_14185[(9)]);var inst_14153 = (state_14185[(10)]);var inst_14145 = (state_14185[(8)]);var inst_14158 = inst_14145.push(inst_14149);var tmp14202 = inst_14145;var inst_14145__$1 = tmp14202;var inst_14146 = inst_14153;var state_14185__$1 = (function (){var statearr_14206 = state_14185;(statearr_14206[(7)] = inst_14146);
(statearr_14206[(14)] = inst_14158);
(statearr_14206[(8)] = inst_14145__$1);
return statearr_14206;
})();var statearr_14207_14229 = state_14185__$1;(statearr_14207_14229[(2)] = null);
(statearr_14207_14229[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6395__auto___14215,out))
;return ((function (switch__6330__auto__,c__6395__auto___14215,out){
return (function() {
var state_machine__6331__auto__ = null;
var state_machine__6331__auto____0 = (function (){var statearr_14211 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14211[(0)] = state_machine__6331__auto__);
(statearr_14211[(1)] = (1));
return statearr_14211;
});
var state_machine__6331__auto____1 = (function (state_14185){while(true){
var ret_value__6332__auto__ = (function (){try{while(true){
var result__6333__auto__ = switch__6330__auto__.call(null,state_14185);if(cljs.core.keyword_identical_QMARK_.call(null,result__6333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6333__auto__;
}
break;
}
}catch (e14212){if((e14212 instanceof Object))
{var ex__6334__auto__ = e14212;var statearr_14213_14230 = state_14185;(statearr_14213_14230[(5)] = ex__6334__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14185);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14212;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14231 = state_14185;
state_14185 = G__14231;
continue;
}
} else
{return ret_value__6332__auto__;
}
break;
}
});
state_machine__6331__auto__ = function(state_14185){
switch(arguments.length){
case 0:
return state_machine__6331__auto____0.call(this);
case 1:
return state_machine__6331__auto____1.call(this,state_14185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6331__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6331__auto____0;
state_machine__6331__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6331__auto____1;
return state_machine__6331__auto__;
})()
;})(switch__6330__auto__,c__6395__auto___14215,out))
})();var state__6397__auto__ = (function (){var statearr_14214 = f__6396__auto__.call(null);(statearr_14214[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6395__auto___14215);
return statearr_14214;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6397__auto__);
});})(c__6395__auto___14215,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
