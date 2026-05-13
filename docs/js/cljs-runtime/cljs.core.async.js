goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14660 = (function (f,blockable,meta14661){
this.f = f;
this.blockable = blockable;
this.meta14661 = meta14661;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14660.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14662,meta14661__$1){
var self__ = this;
var _14662__$1 = this;
return (new cljs.core.async.t_cljs$core$async14660(self__.f,self__.blockable,meta14661__$1));
}));

(cljs.core.async.t_cljs$core$async14660.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14662){
var self__ = this;
var _14662__$1 = this;
return self__.meta14661;
}));

(cljs.core.async.t_cljs$core$async14660.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14660.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14660.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14660.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14660.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14661","meta14661",439976597,null)], null);
}));

(cljs.core.async.t_cljs$core$async14660.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14660.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14660");

(cljs.core.async.t_cljs$core$async14660.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14660");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14660.
 */
cljs.core.async.__GT_t_cljs$core$async14660 = (function cljs$core$async$__GT_t_cljs$core$async14660(f,blockable,meta14661){
return (new cljs.core.async.t_cljs$core$async14660(f,blockable,meta14661));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14651 = arguments.length;
switch (G__14651) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async14660(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__14691 = arguments.length;
switch (G__14691) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__14701 = arguments.length;
switch (G__14701) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__14794 = arguments.length;
switch (G__14794) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_19527 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19527) : fn1.call(null,val_19527));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19527) : fn1.call(null,val_19527));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__14796 = arguments.length;
switch (G__14796) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___19530 = n;
var x_19531 = (0);
while(true){
if((x_19531 < n__5593__auto___19530)){
(a[x_19531] = x_19531);

var G__19532 = (x_19531 + (1));
x_19531 = G__19532;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14797 = (function (flag,meta14798){
this.flag = flag;
this.meta14798 = meta14798;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14797.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14799,meta14798__$1){
var self__ = this;
var _14799__$1 = this;
return (new cljs.core.async.t_cljs$core$async14797(self__.flag,meta14798__$1));
}));

(cljs.core.async.t_cljs$core$async14797.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14799){
var self__ = this;
var _14799__$1 = this;
return self__.meta14798;
}));

(cljs.core.async.t_cljs$core$async14797.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14797.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14797.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14797.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async14797.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14798","meta14798",-2103905180,null)], null);
}));

(cljs.core.async.t_cljs$core$async14797.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14797.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14797");

(cljs.core.async.t_cljs$core$async14797.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14797");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14797.
 */
cljs.core.async.__GT_t_cljs$core$async14797 = (function cljs$core$async$__GT_t_cljs$core$async14797(flag,meta14798){
return (new cljs.core.async.t_cljs$core$async14797(flag,meta14798));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async14797(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14800 = (function (flag,cb,meta14801){
this.flag = flag;
this.cb = cb;
this.meta14801 = meta14801;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14800.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14802,meta14801__$1){
var self__ = this;
var _14802__$1 = this;
return (new cljs.core.async.t_cljs$core$async14800(self__.flag,self__.cb,meta14801__$1));
}));

(cljs.core.async.t_cljs$core$async14800.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14802){
var self__ = this;
var _14802__$1 = this;
return self__.meta14801;
}));

(cljs.core.async.t_cljs$core$async14800.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14800.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14800.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14800.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async14800.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14801","meta14801",-721371747,null)], null);
}));

(cljs.core.async.t_cljs$core$async14800.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14800.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14800");

(cljs.core.async.t_cljs$core$async14800.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14800");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14800.
 */
cljs.core.async.__GT_t_cljs$core$async14800 = (function cljs$core$async$__GT_t_cljs$core$async14800(flag,cb,meta14801){
return (new cljs.core.async.t_cljs$core$async14800(flag,cb,meta14801));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async14800(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14835_SHARP_){
var G__14837 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14835_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14837) : fret.call(null,G__14837));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14836_SHARP_){
var G__14838 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14836_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14838) : fret.call(null,G__14838));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19553 = (i + (1));
i = G__19553;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19554 = arguments.length;
var i__5727__auto___19555 = (0);
while(true){
if((i__5727__auto___19555 < len__5726__auto___19554)){
args__5732__auto__.push((arguments[i__5727__auto___19555]));

var G__19556 = (i__5727__auto___19555 + (1));
i__5727__auto___19555 = G__19556;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14845){
var map__14846 = p__14845;
var map__14846__$1 = cljs.core.__destructure_map(map__14846);
var opts = map__14846__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14839){
var G__14840 = cljs.core.first(seq14839);
var seq14839__$1 = cljs.core.next(seq14839);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14840,seq14839__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__14852 = arguments.length;
switch (G__14852) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14537__auto___19566 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14538__auto__ = (function (){var switch__14238__auto__ = (function (state_14974){
var state_val_14975 = (state_14974[(1)]);
if((state_val_14975 === (7))){
var inst_14964 = (state_14974[(2)]);
var state_14974__$1 = state_14974;
var statearr_14979_19567 = state_14974__$1;
(statearr_14979_19567[(2)] = inst_14964);

(statearr_14979_19567[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14975 === (1))){
var state_14974__$1 = state_14974;
var statearr_14980_19568 = state_14974__$1;
(statearr_14980_19568[(2)] = null);

(statearr_14980_19568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14975 === (4))){
var inst_14947 = (state_14974[(7)]);
var inst_14947__$1 = (state_14974[(2)]);
var inst_14948 = (inst_14947__$1 == null);
var state_14974__$1 = (function (){var statearr_14982 = state_14974;
(statearr_14982[(7)] = inst_14947__$1);

return statearr_14982;
})();
if(cljs.core.truth_(inst_14948)){
var statearr_14983_19569 = state_14974__$1;
(statearr_14983_19569[(1)] = (5));

} else {
var statearr_14984_19570 = state_14974__$1;
(statearr_14984_19570[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14975 === (13))){
var state_14974__$1 = state_14974;
var statearr_14989_19571 = state_14974__$1;
(statearr_14989_19571[(2)] = null);

(statearr_14989_19571[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14975 === (6))){
var inst_14947 = (state_14974[(7)]);
var state_14974__$1 = state_14974;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14974__$1,(11),to,inst_14947);
} else {
if((state_val_14975 === (3))){
var inst_14966 = (state_14974[(2)]);
var state_14974__$1 = state_14974;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14974__$1,inst_14966);
} else {
if((state_val_14975 === (12))){
var state_14974__$1 = state_14974;
var statearr_14992_19572 = state_14974__$1;
(statearr_14992_19572[(2)] = null);

(statearr_14992_19572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14975 === (2))){
var state_14974__$1 = state_14974;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14974__$1,(4),from);
} else {
if((state_val_14975 === (11))){
var inst_14957 = (state_14974[(2)]);
var state_14974__$1 = state_14974;
if(cljs.core.truth_(inst_14957)){
var statearr_14995_19573 = state_14974__$1;
(statearr_14995_19573[(1)] = (12));

} else {
var statearr_14996_19574 = state_14974__$1;
(statearr_14996_19574[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14975 === (9))){
var state_14974__$1 = state_14974;
var statearr_14997_19575 = state_14974__$1;
(statearr_14997_19575[(2)] = null);

(statearr_14997_19575[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14975 === (5))){
var state_14974__$1 = state_14974;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14998_19576 = state_14974__$1;
(statearr_14998_19576[(1)] = (8));

} else {
var statearr_15001_19577 = state_14974__$1;
(statearr_15001_19577[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14975 === (14))){
var inst_14962 = (state_14974[(2)]);
var state_14974__$1 = state_14974;
var statearr_15004_19578 = state_14974__$1;
(statearr_15004_19578[(2)] = inst_14962);

(statearr_15004_19578[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14975 === (10))){
var inst_14954 = (state_14974[(2)]);
var state_14974__$1 = state_14974;
var statearr_15005_19579 = state_14974__$1;
(statearr_15005_19579[(2)] = inst_14954);

(statearr_15005_19579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14975 === (8))){
var inst_14951 = cljs.core.async.close_BANG_(to);
var state_14974__$1 = state_14974;
var statearr_15007_19580 = state_14974__$1;
(statearr_15007_19580[(2)] = inst_14951);

(statearr_15007_19580[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__14239__auto__ = null;
var cljs$core$async$state_machine__14239__auto____0 = (function (){
var statearr_15009 = [null,null,null,null,null,null,null,null];
(statearr_15009[(0)] = cljs$core$async$state_machine__14239__auto__);

(statearr_15009[(1)] = (1));

return statearr_15009;
});
var cljs$core$async$state_machine__14239__auto____1 = (function (state_14974){
while(true){
var ret_value__14240__auto__ = (function (){try{while(true){
var result__14241__auto__ = switch__14238__auto__(state_14974);
if(cljs.core.keyword_identical_QMARK_(result__14241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14241__auto__;
}
break;
}
}catch (e15011){var ex__14242__auto__ = e15011;
var statearr_15013_19585 = state_14974;
(statearr_15013_19585[(2)] = ex__14242__auto__);


if(cljs.core.seq((state_14974[(4)]))){
var statearr_15014_19586 = state_14974;
(statearr_15014_19586[(1)] = cljs.core.first((state_14974[(4)])));

} else {
throw ex__14242__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19587 = state_14974;
state_14974 = G__19587;
continue;
} else {
return ret_value__14240__auto__;
}
break;
}
});
cljs$core$async$state_machine__14239__auto__ = function(state_14974){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14239__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14239__auto____1.call(this,state_14974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14239__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14239__auto____0;
cljs$core$async$state_machine__14239__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14239__auto____1;
return cljs$core$async$state_machine__14239__auto__;
})()
})();
var state__14539__auto__ = (function (){var statearr_15016 = f__14538__auto__();
(statearr_15016[(6)] = c__14537__auto___19566);

return statearr_15016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14539__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__15061){
var vec__15062 = p__15061;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15062,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15062,(1),null);
var job = vec__15062;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14537__auto___19592 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14538__auto__ = (function (){var switch__14238__auto__ = (function (state_15069){
var state_val_15070 = (state_15069[(1)]);
if((state_val_15070 === (1))){
var state_15069__$1 = state_15069;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15069__$1,(2),res,v);
} else {
if((state_val_15070 === (2))){
var inst_15066 = (state_15069[(2)]);
var inst_15067 = cljs.core.async.close_BANG_(res);
var state_15069__$1 = (function (){var statearr_15071 = state_15069;
(statearr_15071[(7)] = inst_15066);

return statearr_15071;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15069__$1,inst_15067);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14239__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14239__auto____0 = (function (){
var statearr_15072 = [null,null,null,null,null,null,null,null];
(statearr_15072[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14239__auto__);

(statearr_15072[(1)] = (1));

return statearr_15072;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14239__auto____1 = (function (state_15069){
while(true){
var ret_value__14240__auto__ = (function (){try{while(true){
var result__14241__auto__ = switch__14238__auto__(state_15069);
if(cljs.core.keyword_identical_QMARK_(result__14241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14241__auto__;
}
break;
}
}catch (e15073){var ex__14242__auto__ = e15073;
var statearr_15074_19597 = state_15069;
(statearr_15074_19597[(2)] = ex__14242__auto__);


if(cljs.core.seq((state_15069[(4)]))){
var statearr_15083_19598 = state_15069;
(statearr_15083_19598[(1)] = cljs.core.first((state_15069[(4)])));

} else {
throw ex__14242__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19599 = state_15069;
state_15069 = G__19599;
continue;
} else {
return ret_value__14240__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14239__auto__ = function(state_15069){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14239__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14239__auto____1.call(this,state_15069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14239__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14239__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14239__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14239__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14239__auto__;
})()
})();
var state__14539__auto__ = (function (){var statearr_15096 = f__14538__auto__();
(statearr_15096[(6)] = c__14537__auto___19592);

return statearr_15096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14539__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__15097){
var vec__15098 = p__15097;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15098,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15098,(1),null);
var job = vec__15098;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___19600 = n;
var __19601 = (0);
while(true){
if((__19601 < n__5593__auto___19600)){
var G__15102_19603 = type;
var G__15102_19604__$1 = (((G__15102_19603 instanceof cljs.core.Keyword))?G__15102_19603.fqn:null);
switch (G__15102_19604__$1) {
case "compute":
var c__14537__auto___19607 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19601,c__14537__auto___19607,G__15102_19603,G__15102_19604__$1,n__5593__auto___19600,jobs,results,process__$1,async){
return (function (){
var f__14538__auto__ = (function (){var switch__14238__auto__ = ((function (__19601,c__14537__auto___19607,G__15102_19603,G__15102_19604__$1,n__5593__auto___19600,jobs,results,process__$1,async){
return (function (state_15116){
var state_val_15117 = (state_15116[(1)]);
if((state_val_15117 === (1))){
var state_15116__$1 = state_15116;
var statearr_15118_19608 = state_15116__$1;
(statearr_15118_19608[(2)] = null);

(statearr_15118_19608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15117 === (2))){
var state_15116__$1 = state_15116;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15116__$1,(4),jobs);
} else {
if((state_val_15117 === (3))){
var inst_15114 = (state_15116[(2)]);
var state_15116__$1 = state_15116;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15116__$1,inst_15114);
} else {
if((state_val_15117 === (4))){
var inst_15106 = (state_15116[(2)]);
var inst_15107 = process__$1(inst_15106);
var state_15116__$1 = state_15116;
if(cljs.core.truth_(inst_15107)){
var statearr_15119_19609 = state_15116__$1;
(statearr_15119_19609[(1)] = (5));

} else {
var statearr_15143_19610 = state_15116__$1;
(statearr_15143_19610[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15117 === (5))){
var state_15116__$1 = state_15116;
var statearr_15144_19611 = state_15116__$1;
(statearr_15144_19611[(2)] = null);

(statearr_15144_19611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15117 === (6))){
var state_15116__$1 = state_15116;
var statearr_15145_19612 = state_15116__$1;
(statearr_15145_19612[(2)] = null);

(statearr_15145_19612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15117 === (7))){
var inst_15112 = (state_15116[(2)]);
var state_15116__$1 = state_15116;
var statearr_15146_19613 = state_15116__$1;
(statearr_15146_19613[(2)] = inst_15112);

(statearr_15146_19613[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__19601,c__14537__auto___19607,G__15102_19603,G__15102_19604__$1,n__5593__auto___19600,jobs,results,process__$1,async))
;
return ((function (__19601,switch__14238__auto__,c__14537__auto___19607,G__15102_19603,G__15102_19604__$1,n__5593__auto___19600,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14239__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14239__auto____0 = (function (){
var statearr_15147 = [null,null,null,null,null,null,null];
(statearr_15147[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14239__auto__);

(statearr_15147[(1)] = (1));

return statearr_15147;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14239__auto____1 = (function (state_15116){
while(true){
var ret_value__14240__auto__ = (function (){try{while(true){
var result__14241__auto__ = switch__14238__auto__(state_15116);
if(cljs.core.keyword_identical_QMARK_(result__14241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14241__auto__;
}
break;
}
}catch (e15148){var ex__14242__auto__ = e15148;
var statearr_15149_19614 = state_15116;
(statearr_15149_19614[(2)] = ex__14242__auto__);


if(cljs.core.seq((state_15116[(4)]))){
var statearr_15151_19615 = state_15116;
(statearr_15151_19615[(1)] = cljs.core.first((state_15116[(4)])));

} else {
throw ex__14242__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19616 = state_15116;
state_15116 = G__19616;
continue;
} else {
return ret_value__14240__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14239__auto__ = function(state_15116){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14239__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14239__auto____1.call(this,state_15116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14239__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14239__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14239__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14239__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14239__auto__;
})()
;})(__19601,switch__14238__auto__,c__14537__auto___19607,G__15102_19603,G__15102_19604__$1,n__5593__auto___19600,jobs,results,process__$1,async))
})();
var state__14539__auto__ = (function (){var statearr_15153 = f__14538__auto__();
(statearr_15153[(6)] = c__14537__auto___19607);

return statearr_15153;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14539__auto__);
});})(__19601,c__14537__auto___19607,G__15102_19603,G__15102_19604__$1,n__5593__auto___19600,jobs,results,process__$1,async))
);


break;
case "async":
var c__14537__auto___19618 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19601,c__14537__auto___19618,G__15102_19603,G__15102_19604__$1,n__5593__auto___19600,jobs,results,process__$1,async){
return (function (){
var f__14538__auto__ = (function (){var switch__14238__auto__ = ((function (__19601,c__14537__auto___19618,G__15102_19603,G__15102_19604__$1,n__5593__auto___19600,jobs,results,process__$1,async){
return (function (state_15169){
var state_val_15170 = (state_15169[(1)]);
if((state_val_15170 === (1))){
var state_15169__$1 = state_15169;
var statearr_15171_19621 = state_15169__$1;
(statearr_15171_19621[(2)] = null);

(statearr_15171_19621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15170 === (2))){
var state_15169__$1 = state_15169;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15169__$1,(4),jobs);
} else {
if((state_val_15170 === (3))){
var inst_15167 = (state_15169[(2)]);
var state_15169__$1 = state_15169;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15169__$1,inst_15167);
} else {
if((state_val_15170 === (4))){
var inst_15159 = (state_15169[(2)]);
var inst_15160 = async(inst_15159);
var state_15169__$1 = state_15169;
if(cljs.core.truth_(inst_15160)){
var statearr_15262_19623 = state_15169__$1;
(statearr_15262_19623[(1)] = (5));

} else {
var statearr_15267_19624 = state_15169__$1;
(statearr_15267_19624[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15170 === (5))){
var state_15169__$1 = state_15169;
var statearr_15268_19625 = state_15169__$1;
(statearr_15268_19625[(2)] = null);

(statearr_15268_19625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15170 === (6))){
var state_15169__$1 = state_15169;
var statearr_15269_19626 = state_15169__$1;
(statearr_15269_19626[(2)] = null);

(statearr_15269_19626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15170 === (7))){
var inst_15165 = (state_15169[(2)]);
var state_15169__$1 = state_15169;
var statearr_15270_19627 = state_15169__$1;
(statearr_15270_19627[(2)] = inst_15165);

(statearr_15270_19627[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__19601,c__14537__auto___19618,G__15102_19603,G__15102_19604__$1,n__5593__auto___19600,jobs,results,process__$1,async))
;
return ((function (__19601,switch__14238__auto__,c__14537__auto___19618,G__15102_19603,G__15102_19604__$1,n__5593__auto___19600,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14239__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14239__auto____0 = (function (){
var statearr_15272 = [null,null,null,null,null,null,null];
(statearr_15272[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14239__auto__);

(statearr_15272[(1)] = (1));

return statearr_15272;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14239__auto____1 = (function (state_15169){
while(true){
var ret_value__14240__auto__ = (function (){try{while(true){
var result__14241__auto__ = switch__14238__auto__(state_15169);
if(cljs.core.keyword_identical_QMARK_(result__14241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14241__auto__;
}
break;
}
}catch (e15273){var ex__14242__auto__ = e15273;
var statearr_15274_19630 = state_15169;
(statearr_15274_19630[(2)] = ex__14242__auto__);


if(cljs.core.seq((state_15169[(4)]))){
var statearr_15275_19631 = state_15169;
(statearr_15275_19631[(1)] = cljs.core.first((state_15169[(4)])));

} else {
throw ex__14242__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19632 = state_15169;
state_15169 = G__19632;
continue;
} else {
return ret_value__14240__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14239__auto__ = function(state_15169){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14239__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14239__auto____1.call(this,state_15169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14239__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14239__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14239__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14239__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14239__auto__;
})()
;})(__19601,switch__14238__auto__,c__14537__auto___19618,G__15102_19603,G__15102_19604__$1,n__5593__auto___19600,jobs,results,process__$1,async))
})();
var state__14539__auto__ = (function (){var statearr_15276 = f__14538__auto__();
(statearr_15276[(6)] = c__14537__auto___19618);

return statearr_15276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14539__auto__);
});})(__19601,c__14537__auto___19618,G__15102_19603,G__15102_19604__$1,n__5593__auto___19600,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15102_19604__$1)].join('')));

}

var G__19634 = (__19601 + (1));
__19601 = G__19634;
continue;
} else {
}
break;
}

var c__14537__auto___19636 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14538__auto__ = (function (){var switch__14238__auto__ = (function (state_15298){
var state_val_15299 = (state_15298[(1)]);
if((state_val_15299 === (7))){
var inst_15294 = (state_15298[(2)]);
var state_15298__$1 = state_15298;
var statearr_15300_19637 = state_15298__$1;
(statearr_15300_19637[(2)] = inst_15294);

(statearr_15300_19637[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15299 === (1))){
var state_15298__$1 = state_15298;
var statearr_15301_19638 = state_15298__$1;
(statearr_15301_19638[(2)] = null);

(statearr_15301_19638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15299 === (4))){
var inst_15279 = (state_15298[(7)]);
var inst_15279__$1 = (state_15298[(2)]);
var inst_15280 = (inst_15279__$1 == null);
var state_15298__$1 = (function (){var statearr_15302 = state_15298;
(statearr_15302[(7)] = inst_15279__$1);

return statearr_15302;
})();
if(cljs.core.truth_(inst_15280)){
var statearr_15303_19639 = state_15298__$1;
(statearr_15303_19639[(1)] = (5));

} else {
var statearr_15304_19640 = state_15298__$1;
(statearr_15304_19640[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15299 === (6))){
var inst_15284 = (state_15298[(8)]);
var inst_15279 = (state_15298[(7)]);
var inst_15284__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15285 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15286 = [inst_15279,inst_15284__$1];
var inst_15287 = (new cljs.core.PersistentVector(null,2,(5),inst_15285,inst_15286,null));
var state_15298__$1 = (function (){var statearr_15309 = state_15298;
(statearr_15309[(8)] = inst_15284__$1);

return statearr_15309;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15298__$1,(8),jobs,inst_15287);
} else {
if((state_val_15299 === (3))){
var inst_15296 = (state_15298[(2)]);
var state_15298__$1 = state_15298;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15298__$1,inst_15296);
} else {
if((state_val_15299 === (2))){
var state_15298__$1 = state_15298;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15298__$1,(4),from);
} else {
if((state_val_15299 === (9))){
var inst_15291 = (state_15298[(2)]);
var state_15298__$1 = (function (){var statearr_15314 = state_15298;
(statearr_15314[(9)] = inst_15291);

return statearr_15314;
})();
var statearr_15315_19643 = state_15298__$1;
(statearr_15315_19643[(2)] = null);

(statearr_15315_19643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15299 === (5))){
var inst_15282 = cljs.core.async.close_BANG_(jobs);
var state_15298__$1 = state_15298;
var statearr_15316_19644 = state_15298__$1;
(statearr_15316_19644[(2)] = inst_15282);

(statearr_15316_19644[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15299 === (8))){
var inst_15284 = (state_15298[(8)]);
var inst_15289 = (state_15298[(2)]);
var state_15298__$1 = (function (){var statearr_15317 = state_15298;
(statearr_15317[(10)] = inst_15289);

return statearr_15317;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15298__$1,(9),results,inst_15284);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14239__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14239__auto____0 = (function (){
var statearr_15318 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15318[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14239__auto__);

(statearr_15318[(1)] = (1));

return statearr_15318;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14239__auto____1 = (function (state_15298){
while(true){
var ret_value__14240__auto__ = (function (){try{while(true){
var result__14241__auto__ = switch__14238__auto__(state_15298);
if(cljs.core.keyword_identical_QMARK_(result__14241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14241__auto__;
}
break;
}
}catch (e15319){var ex__14242__auto__ = e15319;
var statearr_15322_19645 = state_15298;
(statearr_15322_19645[(2)] = ex__14242__auto__);


if(cljs.core.seq((state_15298[(4)]))){
var statearr_15323_19646 = state_15298;
(statearr_15323_19646[(1)] = cljs.core.first((state_15298[(4)])));

} else {
throw ex__14242__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19647 = state_15298;
state_15298 = G__19647;
continue;
} else {
return ret_value__14240__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14239__auto__ = function(state_15298){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14239__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14239__auto____1.call(this,state_15298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14239__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14239__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14239__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14239__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14239__auto__;
})()
})();
var state__14539__auto__ = (function (){var statearr_15327 = f__14538__auto__();
(statearr_15327[(6)] = c__14537__auto___19636);

return statearr_15327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14539__auto__);
}));


var c__14537__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14538__auto__ = (function (){var switch__14238__auto__ = (function (state_15373){
var state_val_15374 = (state_15373[(1)]);
if((state_val_15374 === (7))){
var inst_15369 = (state_15373[(2)]);
var state_15373__$1 = state_15373;
var statearr_15386_19648 = state_15373__$1;
(statearr_15386_19648[(2)] = inst_15369);

(statearr_15386_19648[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15374 === (20))){
var state_15373__$1 = state_15373;
var statearr_15387_19649 = state_15373__$1;
(statearr_15387_19649[(2)] = null);

(statearr_15387_19649[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15374 === (1))){
var state_15373__$1 = state_15373;
var statearr_15394_19650 = state_15373__$1;
(statearr_15394_19650[(2)] = null);

(statearr_15394_19650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15374 === (4))){
var inst_15330 = (state_15373[(7)]);
var inst_15330__$1 = (state_15373[(2)]);
var inst_15331 = (inst_15330__$1 == null);
var state_15373__$1 = (function (){var statearr_15395 = state_15373;
(statearr_15395[(7)] = inst_15330__$1);

return statearr_15395;
})();
if(cljs.core.truth_(inst_15331)){
var statearr_15396_19651 = state_15373__$1;
(statearr_15396_19651[(1)] = (5));

} else {
var statearr_15397_19652 = state_15373__$1;
(statearr_15397_19652[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15374 === (15))){
var inst_15344 = (state_15373[(8)]);
var state_15373__$1 = state_15373;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15373__$1,(18),to,inst_15344);
} else {
if((state_val_15374 === (21))){
var inst_15364 = (state_15373[(2)]);
var state_15373__$1 = state_15373;
var statearr_15398_19653 = state_15373__$1;
(statearr_15398_19653[(2)] = inst_15364);

(statearr_15398_19653[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15374 === (13))){
var inst_15366 = (state_15373[(2)]);
var state_15373__$1 = (function (){var statearr_15399 = state_15373;
(statearr_15399[(9)] = inst_15366);

return statearr_15399;
})();
var statearr_15400_19654 = state_15373__$1;
(statearr_15400_19654[(2)] = null);

(statearr_15400_19654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15374 === (6))){
var inst_15330 = (state_15373[(7)]);
var state_15373__$1 = state_15373;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15373__$1,(11),inst_15330);
} else {
if((state_val_15374 === (17))){
var inst_15359 = (state_15373[(2)]);
var state_15373__$1 = state_15373;
if(cljs.core.truth_(inst_15359)){
var statearr_15403_19655 = state_15373__$1;
(statearr_15403_19655[(1)] = (19));

} else {
var statearr_15404_19656 = state_15373__$1;
(statearr_15404_19656[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15374 === (3))){
var inst_15371 = (state_15373[(2)]);
var state_15373__$1 = state_15373;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15373__$1,inst_15371);
} else {
if((state_val_15374 === (12))){
var inst_15341 = (state_15373[(10)]);
var state_15373__$1 = state_15373;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15373__$1,(14),inst_15341);
} else {
if((state_val_15374 === (2))){
var state_15373__$1 = state_15373;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15373__$1,(4),results);
} else {
if((state_val_15374 === (19))){
var state_15373__$1 = state_15373;
var statearr_15405_19657 = state_15373__$1;
(statearr_15405_19657[(2)] = null);

(statearr_15405_19657[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15374 === (11))){
var inst_15341 = (state_15373[(2)]);
var state_15373__$1 = (function (){var statearr_15406 = state_15373;
(statearr_15406[(10)] = inst_15341);

return statearr_15406;
})();
var statearr_15407_19658 = state_15373__$1;
(statearr_15407_19658[(2)] = null);

(statearr_15407_19658[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15374 === (9))){
var state_15373__$1 = state_15373;
var statearr_15408_19659 = state_15373__$1;
(statearr_15408_19659[(2)] = null);

(statearr_15408_19659[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15374 === (5))){
var state_15373__$1 = state_15373;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15409_19660 = state_15373__$1;
(statearr_15409_19660[(1)] = (8));

} else {
var statearr_15412_19661 = state_15373__$1;
(statearr_15412_19661[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15374 === (14))){
var inst_15344 = (state_15373[(8)]);
var inst_15346 = (state_15373[(11)]);
var inst_15344__$1 = (state_15373[(2)]);
var inst_15345 = (inst_15344__$1 == null);
var inst_15346__$1 = cljs.core.not(inst_15345);
var state_15373__$1 = (function (){var statearr_15416 = state_15373;
(statearr_15416[(8)] = inst_15344__$1);

(statearr_15416[(11)] = inst_15346__$1);

return statearr_15416;
})();
if(inst_15346__$1){
var statearr_15417_19663 = state_15373__$1;
(statearr_15417_19663[(1)] = (15));

} else {
var statearr_15418_19664 = state_15373__$1;
(statearr_15418_19664[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15374 === (16))){
var inst_15346 = (state_15373[(11)]);
var state_15373__$1 = state_15373;
var statearr_15419_19665 = state_15373__$1;
(statearr_15419_19665[(2)] = inst_15346);

(statearr_15419_19665[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15374 === (10))){
var inst_15338 = (state_15373[(2)]);
var state_15373__$1 = state_15373;
var statearr_15421_19666 = state_15373__$1;
(statearr_15421_19666[(2)] = inst_15338);

(statearr_15421_19666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15374 === (18))){
var inst_15356 = (state_15373[(2)]);
var state_15373__$1 = state_15373;
var statearr_15422_19667 = state_15373__$1;
(statearr_15422_19667[(2)] = inst_15356);

(statearr_15422_19667[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15374 === (8))){
var inst_15335 = cljs.core.async.close_BANG_(to);
var state_15373__$1 = state_15373;
var statearr_15501_19668 = state_15373__$1;
(statearr_15501_19668[(2)] = inst_15335);

(statearr_15501_19668[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14239__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14239__auto____0 = (function (){
var statearr_15512 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15512[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14239__auto__);

(statearr_15512[(1)] = (1));

return statearr_15512;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14239__auto____1 = (function (state_15373){
while(true){
var ret_value__14240__auto__ = (function (){try{while(true){
var result__14241__auto__ = switch__14238__auto__(state_15373);
if(cljs.core.keyword_identical_QMARK_(result__14241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14241__auto__;
}
break;
}
}catch (e15515){var ex__14242__auto__ = e15515;
var statearr_15518_19670 = state_15373;
(statearr_15518_19670[(2)] = ex__14242__auto__);


if(cljs.core.seq((state_15373[(4)]))){
var statearr_15519_19671 = state_15373;
(statearr_15519_19671[(1)] = cljs.core.first((state_15373[(4)])));

} else {
throw ex__14242__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19672 = state_15373;
state_15373 = G__19672;
continue;
} else {
return ret_value__14240__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14239__auto__ = function(state_15373){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14239__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14239__auto____1.call(this,state_15373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14239__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14239__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14239__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14239__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14239__auto__;
})()
})();
var state__14539__auto__ = (function (){var statearr_15537 = f__14538__auto__();
(statearr_15537[(6)] = c__14537__auto__);

return statearr_15537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14539__auto__);
}));

return c__14537__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__15539 = arguments.length;
switch (G__15539) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__15672 = arguments.length;
switch (G__15672) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__15676 = arguments.length;
switch (G__15676) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14537__auto___19684 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14538__auto__ = (function (){var switch__14238__auto__ = (function (state_15708){
var state_val_15709 = (state_15708[(1)]);
if((state_val_15709 === (7))){
var inst_15704 = (state_15708[(2)]);
var state_15708__$1 = state_15708;
var statearr_15710_19685 = state_15708__$1;
(statearr_15710_19685[(2)] = inst_15704);

(statearr_15710_19685[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15709 === (1))){
var state_15708__$1 = state_15708;
var statearr_15711_19686 = state_15708__$1;
(statearr_15711_19686[(2)] = null);

(statearr_15711_19686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15709 === (4))){
var inst_15684 = (state_15708[(7)]);
var inst_15684__$1 = (state_15708[(2)]);
var inst_15685 = (inst_15684__$1 == null);
var state_15708__$1 = (function (){var statearr_15712 = state_15708;
(statearr_15712[(7)] = inst_15684__$1);

return statearr_15712;
})();
if(cljs.core.truth_(inst_15685)){
var statearr_15713_19687 = state_15708__$1;
(statearr_15713_19687[(1)] = (5));

} else {
var statearr_15714_19709 = state_15708__$1;
(statearr_15714_19709[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15709 === (13))){
var state_15708__$1 = state_15708;
var statearr_15716_19715 = state_15708__$1;
(statearr_15716_19715[(2)] = null);

(statearr_15716_19715[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15709 === (6))){
var inst_15684 = (state_15708[(7)]);
var inst_15691 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15684) : p.call(null,inst_15684));
var state_15708__$1 = state_15708;
if(cljs.core.truth_(inst_15691)){
var statearr_15717_19716 = state_15708__$1;
(statearr_15717_19716[(1)] = (9));

} else {
var statearr_15718_19717 = state_15708__$1;
(statearr_15718_19717[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15709 === (3))){
var inst_15706 = (state_15708[(2)]);
var state_15708__$1 = state_15708;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15708__$1,inst_15706);
} else {
if((state_val_15709 === (12))){
var state_15708__$1 = state_15708;
var statearr_15719_19718 = state_15708__$1;
(statearr_15719_19718[(2)] = null);

(statearr_15719_19718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15709 === (2))){
var state_15708__$1 = state_15708;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15708__$1,(4),ch);
} else {
if((state_val_15709 === (11))){
var inst_15684 = (state_15708[(7)]);
var inst_15695 = (state_15708[(2)]);
var state_15708__$1 = state_15708;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15708__$1,(8),inst_15695,inst_15684);
} else {
if((state_val_15709 === (9))){
var state_15708__$1 = state_15708;
var statearr_15721_19719 = state_15708__$1;
(statearr_15721_19719[(2)] = tc);

(statearr_15721_19719[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15709 === (5))){
var inst_15687 = cljs.core.async.close_BANG_(tc);
var inst_15689 = cljs.core.async.close_BANG_(fc);
var state_15708__$1 = (function (){var statearr_15722 = state_15708;
(statearr_15722[(8)] = inst_15687);

return statearr_15722;
})();
var statearr_15724_19720 = state_15708__$1;
(statearr_15724_19720[(2)] = inst_15689);

(statearr_15724_19720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15709 === (14))){
var inst_15702 = (state_15708[(2)]);
var state_15708__$1 = state_15708;
var statearr_15725_19721 = state_15708__$1;
(statearr_15725_19721[(2)] = inst_15702);

(statearr_15725_19721[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15709 === (10))){
var state_15708__$1 = state_15708;
var statearr_15726_19722 = state_15708__$1;
(statearr_15726_19722[(2)] = fc);

(statearr_15726_19722[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15709 === (8))){
var inst_15697 = (state_15708[(2)]);
var state_15708__$1 = state_15708;
if(cljs.core.truth_(inst_15697)){
var statearr_15727_19723 = state_15708__$1;
(statearr_15727_19723[(1)] = (12));

} else {
var statearr_15728_19724 = state_15708__$1;
(statearr_15728_19724[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__14239__auto__ = null;
var cljs$core$async$state_machine__14239__auto____0 = (function (){
var statearr_15730 = [null,null,null,null,null,null,null,null,null];
(statearr_15730[(0)] = cljs$core$async$state_machine__14239__auto__);

(statearr_15730[(1)] = (1));

return statearr_15730;
});
var cljs$core$async$state_machine__14239__auto____1 = (function (state_15708){
while(true){
var ret_value__14240__auto__ = (function (){try{while(true){
var result__14241__auto__ = switch__14238__auto__(state_15708);
if(cljs.core.keyword_identical_QMARK_(result__14241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14241__auto__;
}
break;
}
}catch (e15731){var ex__14242__auto__ = e15731;
var statearr_15732_19725 = state_15708;
(statearr_15732_19725[(2)] = ex__14242__auto__);


if(cljs.core.seq((state_15708[(4)]))){
var statearr_15733_19730 = state_15708;
(statearr_15733_19730[(1)] = cljs.core.first((state_15708[(4)])));

} else {
throw ex__14242__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19731 = state_15708;
state_15708 = G__19731;
continue;
} else {
return ret_value__14240__auto__;
}
break;
}
});
cljs$core$async$state_machine__14239__auto__ = function(state_15708){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14239__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14239__auto____1.call(this,state_15708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14239__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14239__auto____0;
cljs$core$async$state_machine__14239__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14239__auto____1;
return cljs$core$async$state_machine__14239__auto__;
})()
})();
var state__14539__auto__ = (function (){var statearr_15734 = f__14538__auto__();
(statearr_15734[(6)] = c__14537__auto___19684);

return statearr_15734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14539__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14537__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14538__auto__ = (function (){var switch__14238__auto__ = (function (state_15891){
var state_val_15892 = (state_15891[(1)]);
if((state_val_15892 === (7))){
var inst_15886 = (state_15891[(2)]);
var state_15891__$1 = state_15891;
var statearr_15903_19732 = state_15891__$1;
(statearr_15903_19732[(2)] = inst_15886);

(statearr_15903_19732[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15892 === (1))){
var inst_15856 = init;
var inst_15858 = inst_15856;
var state_15891__$1 = (function (){var statearr_15908 = state_15891;
(statearr_15908[(7)] = inst_15858);

return statearr_15908;
})();
var statearr_15914_19733 = state_15891__$1;
(statearr_15914_19733[(2)] = null);

(statearr_15914_19733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15892 === (4))){
var inst_15865 = (state_15891[(8)]);
var inst_15865__$1 = (state_15891[(2)]);
var inst_15866 = (inst_15865__$1 == null);
var state_15891__$1 = (function (){var statearr_15915 = state_15891;
(statearr_15915[(8)] = inst_15865__$1);

return statearr_15915;
})();
if(cljs.core.truth_(inst_15866)){
var statearr_15916_19734 = state_15891__$1;
(statearr_15916_19734[(1)] = (5));

} else {
var statearr_15920_19735 = state_15891__$1;
(statearr_15920_19735[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15892 === (6))){
var inst_15858 = (state_15891[(7)]);
var inst_15869 = (state_15891[(9)]);
var inst_15865 = (state_15891[(8)]);
var inst_15869__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15858,inst_15865) : f.call(null,inst_15858,inst_15865));
var inst_15874 = cljs.core.reduced_QMARK_(inst_15869__$1);
var state_15891__$1 = (function (){var statearr_15924 = state_15891;
(statearr_15924[(9)] = inst_15869__$1);

return statearr_15924;
})();
if(inst_15874){
var statearr_15930_19736 = state_15891__$1;
(statearr_15930_19736[(1)] = (8));

} else {
var statearr_15931_19737 = state_15891__$1;
(statearr_15931_19737[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15892 === (3))){
var inst_15888 = (state_15891[(2)]);
var state_15891__$1 = state_15891;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15891__$1,inst_15888);
} else {
if((state_val_15892 === (2))){
var state_15891__$1 = state_15891;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15891__$1,(4),ch);
} else {
if((state_val_15892 === (9))){
var inst_15869 = (state_15891[(9)]);
var inst_15858 = inst_15869;
var state_15891__$1 = (function (){var statearr_15944 = state_15891;
(statearr_15944[(7)] = inst_15858);

return statearr_15944;
})();
var statearr_15947_19738 = state_15891__$1;
(statearr_15947_19738[(2)] = null);

(statearr_15947_19738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15892 === (5))){
var inst_15858 = (state_15891[(7)]);
var state_15891__$1 = state_15891;
var statearr_15958_19739 = state_15891__$1;
(statearr_15958_19739[(2)] = inst_15858);

(statearr_15958_19739[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15892 === (10))){
var inst_15883 = (state_15891[(2)]);
var state_15891__$1 = state_15891;
var statearr_15959_19740 = state_15891__$1;
(statearr_15959_19740[(2)] = inst_15883);

(statearr_15959_19740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15892 === (8))){
var inst_15869 = (state_15891[(9)]);
var inst_15879 = cljs.core.deref(inst_15869);
var state_15891__$1 = state_15891;
var statearr_15960_19741 = state_15891__$1;
(statearr_15960_19741[(2)] = inst_15879);

(statearr_15960_19741[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__14239__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14239__auto____0 = (function (){
var statearr_15961 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15961[(0)] = cljs$core$async$reduce_$_state_machine__14239__auto__);

(statearr_15961[(1)] = (1));

return statearr_15961;
});
var cljs$core$async$reduce_$_state_machine__14239__auto____1 = (function (state_15891){
while(true){
var ret_value__14240__auto__ = (function (){try{while(true){
var result__14241__auto__ = switch__14238__auto__(state_15891);
if(cljs.core.keyword_identical_QMARK_(result__14241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14241__auto__;
}
break;
}
}catch (e15963){var ex__14242__auto__ = e15963;
var statearr_15964_19742 = state_15891;
(statearr_15964_19742[(2)] = ex__14242__auto__);


if(cljs.core.seq((state_15891[(4)]))){
var statearr_15967_19743 = state_15891;
(statearr_15967_19743[(1)] = cljs.core.first((state_15891[(4)])));

} else {
throw ex__14242__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19744 = state_15891;
state_15891 = G__19744;
continue;
} else {
return ret_value__14240__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14239__auto__ = function(state_15891){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14239__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14239__auto____1.call(this,state_15891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14239__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14239__auto____0;
cljs$core$async$reduce_$_state_machine__14239__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14239__auto____1;
return cljs$core$async$reduce_$_state_machine__14239__auto__;
})()
})();
var state__14539__auto__ = (function (){var statearr_15975 = f__14538__auto__();
(statearr_15975[(6)] = c__14537__auto__);

return statearr_15975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14539__auto__);
}));

return c__14537__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__14537__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14538__auto__ = (function (){var switch__14238__auto__ = (function (state_15995){
var state_val_15996 = (state_15995[(1)]);
if((state_val_15996 === (1))){
var inst_15988 = cljs.core.async.reduce(f__$1,init,ch);
var state_15995__$1 = state_15995;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15995__$1,(2),inst_15988);
} else {
if((state_val_15996 === (2))){
var inst_15990 = (state_15995[(2)]);
var inst_15991 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15990) : f__$1.call(null,inst_15990));
var state_15995__$1 = state_15995;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15995__$1,inst_15991);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__14239__auto__ = null;
var cljs$core$async$transduce_$_state_machine__14239__auto____0 = (function (){
var statearr_16009 = [null,null,null,null,null,null,null];
(statearr_16009[(0)] = cljs$core$async$transduce_$_state_machine__14239__auto__);

(statearr_16009[(1)] = (1));

return statearr_16009;
});
var cljs$core$async$transduce_$_state_machine__14239__auto____1 = (function (state_15995){
while(true){
var ret_value__14240__auto__ = (function (){try{while(true){
var result__14241__auto__ = switch__14238__auto__(state_15995);
if(cljs.core.keyword_identical_QMARK_(result__14241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14241__auto__;
}
break;
}
}catch (e16011){var ex__14242__auto__ = e16011;
var statearr_16014_19747 = state_15995;
(statearr_16014_19747[(2)] = ex__14242__auto__);


if(cljs.core.seq((state_15995[(4)]))){
var statearr_16016_19748 = state_15995;
(statearr_16016_19748[(1)] = cljs.core.first((state_15995[(4)])));

} else {
throw ex__14242__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19749 = state_15995;
state_15995 = G__19749;
continue;
} else {
return ret_value__14240__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__14239__auto__ = function(state_15995){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__14239__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__14239__auto____1.call(this,state_15995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__14239__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__14239__auto____0;
cljs$core$async$transduce_$_state_machine__14239__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__14239__auto____1;
return cljs$core$async$transduce_$_state_machine__14239__auto__;
})()
})();
var state__14539__auto__ = (function (){var statearr_16026 = f__14538__auto__();
(statearr_16026[(6)] = c__14537__auto__);

return statearr_16026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14539__auto__);
}));

return c__14537__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__16168 = arguments.length;
switch (G__16168) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14537__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14538__auto__ = (function (){var switch__14238__auto__ = (function (state_16324){
var state_val_16325 = (state_16324[(1)]);
if((state_val_16325 === (7))){
var inst_16303 = (state_16324[(2)]);
var state_16324__$1 = state_16324;
var statearr_16326_19754 = state_16324__$1;
(statearr_16326_19754[(2)] = inst_16303);

(statearr_16326_19754[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16325 === (1))){
var inst_16270 = cljs.core.seq(coll);
var inst_16271 = inst_16270;
var state_16324__$1 = (function (){var statearr_16327 = state_16324;
(statearr_16327[(7)] = inst_16271);

return statearr_16327;
})();
var statearr_16328_19758 = state_16324__$1;
(statearr_16328_19758[(2)] = null);

(statearr_16328_19758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16325 === (4))){
var inst_16271 = (state_16324[(7)]);
var inst_16299 = cljs.core.first(inst_16271);
var state_16324__$1 = state_16324;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16324__$1,(7),ch,inst_16299);
} else {
if((state_val_16325 === (13))){
var inst_16318 = (state_16324[(2)]);
var state_16324__$1 = state_16324;
var statearr_16360_19759 = state_16324__$1;
(statearr_16360_19759[(2)] = inst_16318);

(statearr_16360_19759[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16325 === (6))){
var inst_16306 = (state_16324[(2)]);
var state_16324__$1 = state_16324;
if(cljs.core.truth_(inst_16306)){
var statearr_16362_19760 = state_16324__$1;
(statearr_16362_19760[(1)] = (8));

} else {
var statearr_16363_19761 = state_16324__$1;
(statearr_16363_19761[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16325 === (3))){
var inst_16322 = (state_16324[(2)]);
var state_16324__$1 = state_16324;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16324__$1,inst_16322);
} else {
if((state_val_16325 === (12))){
var state_16324__$1 = state_16324;
var statearr_16364_19762 = state_16324__$1;
(statearr_16364_19762[(2)] = null);

(statearr_16364_19762[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16325 === (2))){
var inst_16271 = (state_16324[(7)]);
var state_16324__$1 = state_16324;
if(cljs.core.truth_(inst_16271)){
var statearr_16365_19763 = state_16324__$1;
(statearr_16365_19763[(1)] = (4));

} else {
var statearr_16366_19764 = state_16324__$1;
(statearr_16366_19764[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16325 === (11))){
var inst_16315 = cljs.core.async.close_BANG_(ch);
var state_16324__$1 = state_16324;
var statearr_16367_19765 = state_16324__$1;
(statearr_16367_19765[(2)] = inst_16315);

(statearr_16367_19765[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16325 === (9))){
var state_16324__$1 = state_16324;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16369_19766 = state_16324__$1;
(statearr_16369_19766[(1)] = (11));

} else {
var statearr_16373_19767 = state_16324__$1;
(statearr_16373_19767[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16325 === (5))){
var inst_16271 = (state_16324[(7)]);
var state_16324__$1 = state_16324;
var statearr_16374_19768 = state_16324__$1;
(statearr_16374_19768[(2)] = inst_16271);

(statearr_16374_19768[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16325 === (10))){
var inst_16320 = (state_16324[(2)]);
var state_16324__$1 = state_16324;
var statearr_16375_19769 = state_16324__$1;
(statearr_16375_19769[(2)] = inst_16320);

(statearr_16375_19769[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16325 === (8))){
var inst_16271 = (state_16324[(7)]);
var inst_16311 = cljs.core.next(inst_16271);
var inst_16271__$1 = inst_16311;
var state_16324__$1 = (function (){var statearr_16376 = state_16324;
(statearr_16376[(7)] = inst_16271__$1);

return statearr_16376;
})();
var statearr_16377_19770 = state_16324__$1;
(statearr_16377_19770[(2)] = null);

(statearr_16377_19770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__14239__auto__ = null;
var cljs$core$async$state_machine__14239__auto____0 = (function (){
var statearr_16378 = [null,null,null,null,null,null,null,null];
(statearr_16378[(0)] = cljs$core$async$state_machine__14239__auto__);

(statearr_16378[(1)] = (1));

return statearr_16378;
});
var cljs$core$async$state_machine__14239__auto____1 = (function (state_16324){
while(true){
var ret_value__14240__auto__ = (function (){try{while(true){
var result__14241__auto__ = switch__14238__auto__(state_16324);
if(cljs.core.keyword_identical_QMARK_(result__14241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14241__auto__;
}
break;
}
}catch (e16379){var ex__14242__auto__ = e16379;
var statearr_16380_19771 = state_16324;
(statearr_16380_19771[(2)] = ex__14242__auto__);


if(cljs.core.seq((state_16324[(4)]))){
var statearr_16381_19779 = state_16324;
(statearr_16381_19779[(1)] = cljs.core.first((state_16324[(4)])));

} else {
throw ex__14242__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19782 = state_16324;
state_16324 = G__19782;
continue;
} else {
return ret_value__14240__auto__;
}
break;
}
});
cljs$core$async$state_machine__14239__auto__ = function(state_16324){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14239__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14239__auto____1.call(this,state_16324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14239__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14239__auto____0;
cljs$core$async$state_machine__14239__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14239__auto____1;
return cljs$core$async$state_machine__14239__auto__;
})()
})();
var state__14539__auto__ = (function (){var statearr_16382 = f__14538__auto__();
(statearr_16382[(6)] = c__14537__auto__);

return statearr_16382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14539__auto__);
}));

return c__14537__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__16384 = arguments.length;
switch (G__16384) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_19784 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null,_));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_19784(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_19785 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_19785(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_19788 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_19788(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_19790 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null,m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_19790(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16428 = (function (ch,cs,meta16429){
this.ch = ch;
this.cs = cs;
this.meta16429 = meta16429;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16428.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16430,meta16429__$1){
var self__ = this;
var _16430__$1 = this;
return (new cljs.core.async.t_cljs$core$async16428(self__.ch,self__.cs,meta16429__$1));
}));

(cljs.core.async.t_cljs$core$async16428.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16430){
var self__ = this;
var _16430__$1 = this;
return self__.meta16429;
}));

(cljs.core.async.t_cljs$core$async16428.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16428.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16428.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16428.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async16428.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async16428.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async16428.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta16429","meta16429",-823453937,null)], null);
}));

(cljs.core.async.t_cljs$core$async16428.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16428.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16428");

(cljs.core.async.t_cljs$core$async16428.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16428");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16428.
 */
cljs.core.async.__GT_t_cljs$core$async16428 = (function cljs$core$async$__GT_t_cljs$core$async16428(ch,cs,meta16429){
return (new cljs.core.async.t_cljs$core$async16428(ch,cs,meta16429));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async16428(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14537__auto___19791 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14538__auto__ = (function (){var switch__14238__auto__ = (function (state_16699){
var state_val_16700 = (state_16699[(1)]);
if((state_val_16700 === (7))){
var inst_16693 = (state_16699[(2)]);
var state_16699__$1 = state_16699;
var statearr_16701_19795 = state_16699__$1;
(statearr_16701_19795[(2)] = inst_16693);

(statearr_16701_19795[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16700 === (20))){
var inst_16467 = (state_16699[(7)]);
var inst_16607 = cljs.core.first(inst_16467);
var inst_16608 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16607,(0),null);
var inst_16609 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16607,(1),null);
var state_16699__$1 = (function (){var statearr_16702 = state_16699;
(statearr_16702[(8)] = inst_16608);

return statearr_16702;
})();
if(cljs.core.truth_(inst_16609)){
var statearr_16703_19797 = state_16699__$1;
(statearr_16703_19797[(1)] = (22));

} else {
var statearr_16704_19798 = state_16699__$1;
(statearr_16704_19798[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16700 === (27))){
var inst_16637 = (state_16699[(9)]);
var inst_16644 = (state_16699[(10)]);
var inst_16639 = (state_16699[(11)]);
var inst_16436 = (state_16699[(12)]);
var inst_16644__$1 = cljs.core._nth(inst_16637,inst_16639);
var inst_16645 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16644__$1,inst_16436,done);
var state_16699__$1 = (function (){var statearr_16710 = state_16699;
(statearr_16710[(10)] = inst_16644__$1);

return statearr_16710;
})();
if(cljs.core.truth_(inst_16645)){
var statearr_16711_19814 = state_16699__$1;
(statearr_16711_19814[(1)] = (30));

} else {
var statearr_16712_19815 = state_16699__$1;
(statearr_16712_19815[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16700 === (1))){
var state_16699__$1 = state_16699;
var statearr_16713_19816 = state_16699__$1;
(statearr_16713_19816[(2)] = null);

(statearr_16713_19816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16700 === (24))){
var inst_16467 = (state_16699[(7)]);
var inst_16614 = (state_16699[(2)]);
var inst_16615 = cljs.core.next(inst_16467);
var inst_16445 = inst_16615;
var inst_16446 = null;
var inst_16447 = (0);
var inst_16448 = (0);
var state_16699__$1 = (function (){var statearr_16714 = state_16699;
(statearr_16714[(13)] = inst_16614);

(statearr_16714[(14)] = inst_16446);

(statearr_16714[(15)] = inst_16445);

(statearr_16714[(16)] = inst_16448);

(statearr_16714[(17)] = inst_16447);

return statearr_16714;
})();
var statearr_16715_19817 = state_16699__$1;
(statearr_16715_19817[(2)] = null);

(statearr_16715_19817[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16700 === (39))){
var state_16699__$1 = state_16699;
var statearr_16719_19818 = state_16699__$1;
(statearr_16719_19818[(2)] = null);

(statearr_16719_19818[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16700 === (4))){
var inst_16436 = (state_16699[(12)]);
var inst_16436__$1 = (state_16699[(2)]);
var inst_16437 = (inst_16436__$1 == null);
var state_16699__$1 = (function (){var statearr_16732 = state_16699;
(statearr_16732[(12)] = inst_16436__$1);

return statearr_16732;
})();
if(cljs.core.truth_(inst_16437)){
var statearr_16733_19819 = state_16699__$1;
(statearr_16733_19819[(1)] = (5));

} else {
var statearr_16734_19820 = state_16699__$1;
(statearr_16734_19820[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16700 === (15))){
var inst_16446 = (state_16699[(14)]);
var inst_16445 = (state_16699[(15)]);
var inst_16448 = (state_16699[(16)]);
var inst_16447 = (state_16699[(17)]);
var inst_16463 = (state_16699[(2)]);
var inst_16464 = (inst_16448 + (1));
var tmp16716 = inst_16446;
var tmp16717 = inst_16445;
var tmp16718 = inst_16447;
var inst_16445__$1 = tmp16717;
var inst_16446__$1 = tmp16716;
var inst_16447__$1 = tmp16718;
var inst_16448__$1 = inst_16464;
var state_16699__$1 = (function (){var statearr_16735 = state_16699;
(statearr_16735[(18)] = inst_16463);

(statearr_16735[(14)] = inst_16446__$1);

(statearr_16735[(15)] = inst_16445__$1);

(statearr_16735[(16)] = inst_16448__$1);

(statearr_16735[(17)] = inst_16447__$1);

return statearr_16735;
})();
var statearr_16736_19823 = state_16699__$1;
(statearr_16736_19823[(2)] = null);

(statearr_16736_19823[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16700 === (21))){
var inst_16618 = (state_16699[(2)]);
var state_16699__$1 = state_16699;
var statearr_16741_19824 = state_16699__$1;
(statearr_16741_19824[(2)] = inst_16618);

(statearr_16741_19824[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16700 === (31))){
var inst_16644 = (state_16699[(10)]);
var inst_16648 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16644);
var state_16699__$1 = state_16699;
var statearr_16743_19837 = state_16699__$1;
(statearr_16743_19837[(2)] = inst_16648);

(statearr_16743_19837[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16700 === (32))){
var inst_16637 = (state_16699[(9)]);
var inst_16638 = (state_16699[(19)]);
var inst_16639 = (state_16699[(11)]);
var inst_16636 = (state_16699[(20)]);
var inst_16650 = (state_16699[(2)]);
var inst_16651 = (inst_16639 + (1));
var tmp16738 = inst_16637;
var tmp16739 = inst_16638;
var tmp16740 = inst_16636;
var inst_16636__$1 = tmp16740;
var inst_16637__$1 = tmp16738;
var inst_16638__$1 = tmp16739;
var inst_16639__$1 = inst_16651;
var state_16699__$1 = (function (){var statearr_16744 = state_16699;
(statearr_16744[(9)] = inst_16637__$1);

(statearr_16744[(19)] = inst_16638__$1);

(statearr_16744[(11)] = inst_16639__$1);

(statearr_16744[(21)] = inst_16650);

(statearr_16744[(20)] = inst_16636__$1);

return statearr_16744;
})();
var statearr_16745_19841 = state_16699__$1;
(statearr_16745_19841[(2)] = null);

(statearr_16745_19841[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16700 === (40))){
var inst_16663 = (state_16699[(22)]);
var inst_16667 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16663);
var state_16699__$1 = state_16699;
var statearr_16746_19844 = state_16699__$1;
(statearr_16746_19844[(2)] = inst_16667);

(statearr_16746_19844[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16700 === (33))){
var inst_16654 = (state_16699[(23)]);
var inst_16656 = cljs.core.chunked_seq_QMARK_(inst_16654);
var state_16699__$1 = state_16699;
if(inst_16656){
var statearr_16747_19845 = state_16699__$1;
(statearr_16747_19845[(1)] = (36));

} else {
var statearr_16748_19846 = state_16699__$1;
(statearr_16748_19846[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16700 === (13))){
var inst_16457 = (state_16699[(24)]);
var inst_16460 = cljs.core.async.close_BANG_(inst_16457);
var state_16699__$1 = state_16699;
var statearr_16749_19847 = state_16699__$1;
(statearr_16749_19847[(2)] = inst_16460);

(statearr_16749_19847[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16700 === (22))){
var inst_16608 = (state_16699[(8)]);
var inst_16611 = cljs.core.async.close_BANG_(inst_16608);
var state_16699__$1 = state_16699;
var statearr_16750_19850 = state_16699__$1;
(statearr_16750_19850[(2)] = inst_16611);

(statearr_16750_19850[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16700 === (36))){
var inst_16654 = (state_16699[(23)]);
var inst_16658 = cljs.core.chunk_first(inst_16654);
var inst_16659 = cljs.core.chunk_rest(inst_16654);
var inst_16660 = cljs.core.count(inst_16658);
var inst_16636 = inst_16659;
var inst_16637 = inst_16658;
var inst_16638 = inst_16660;
var inst_16639 = (0);
var state_16699__$1 = (function (){var statearr_16751 = state_16699;
(statearr_16751[(9)] = inst_16637);

(statearr_16751[(19)] = inst_16638);

(statearr_16751[(11)] = inst_16639);

(statearr_16751[(20)] = inst_16636);

return statearr_16751;
})();
var statearr_16752_19857 = state_16699__$1;
(statearr_16752_19857[(2)] = null);

(statearr_16752_19857[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16700 === (41))){
var inst_16654 = (state_16699[(23)]);
var inst_16669 = (state_16699[(2)]);
var inst_16673 = cljs.core.next(inst_16654);
var inst_16636 = inst_16673;
var inst_16637 = null;
var inst_16638 = (0);
var inst_16639 = (0);
var state_16699__$1 = (function (){var statearr_16753 = state_16699;
(statearr_16753[(25)] = inst_16669);

(statearr_16753[(9)] = inst_16637);

(statearr_16753[(19)] = inst_16638);

(statearr_16753[(11)] = inst_16639);

(statearr_16753[(20)] = inst_16636);

return statearr_16753;
})();
var statearr_16755_19858 = state_16699__$1;
(statearr_16755_19858[(2)] = null);

(statearr_16755_19858[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16700 === (43))){
var state_16699__$1 = state_16699;
var statearr_16756_19859 = state_16699__$1;
(statearr_16756_19859[(2)] = null);

(statearr_16756_19859[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16700 === (29))){
var inst_16681 = (state_16699[(2)]);
var state_16699__$1 = state_16699;
var statearr_16758_19860 = state_16699__$1;
(statearr_16758_19860[(2)] = inst_16681);

(statearr_16758_19860[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16700 === (44))){
var inst_16690 = (state_16699[(2)]);
var state_16699__$1 = (function (){var statearr_16759 = state_16699;
(statearr_16759[(26)] = inst_16690);

return statearr_16759;
})();
var statearr_16760_19861 = state_16699__$1;
(statearr_16760_19861[(2)] = null);

(statearr_16760_19861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16700 === (6))){
var inst_16628 = (state_16699[(27)]);
var inst_16627 = cljs.core.deref(cs);
var inst_16628__$1 = cljs.core.keys(inst_16627);
var inst_16629 = cljs.core.count(inst_16628__$1);
var inst_16630 = cljs.core.reset_BANG_(dctr,inst_16629);
var inst_16635 = cljs.core.seq(inst_16628__$1);
var inst_16636 = inst_16635;
var inst_16637 = null;
var inst_16638 = (0);
var inst_16639 = (0);
var state_16699__$1 = (function (){var statearr_16764 = state_16699;
(statearr_16764[(9)] = inst_16637);

(statearr_16764[(27)] = inst_16628__$1);

(statearr_16764[(19)] = inst_16638);

(statearr_16764[(11)] = inst_16639);

(statearr_16764[(20)] = inst_16636);

(statearr_16764[(28)] = inst_16630);

return statearr_16764;
})();
var statearr_16765_19862 = state_16699__$1;
(statearr_16765_19862[(2)] = null);

(statearr_16765_19862[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16700 === (28))){
var inst_16654 = (state_16699[(23)]);
var inst_16636 = (state_16699[(20)]);
var inst_16654__$1 = cljs.core.seq(inst_16636);
var state_16699__$1 = (function (){var statearr_16766 = state_16699;
(statearr_16766[(23)] = inst_16654__$1);

return statearr_16766;
})();
if(inst_16654__$1){
var statearr_16767_19863 = state_16699__$1;
(statearr_16767_19863[(1)] = (33));

} else {
var statearr_16768_19864 = state_16699__$1;
(statearr_16768_19864[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16700 === (25))){
var inst_16638 = (state_16699[(19)]);
var inst_16639 = (state_16699[(11)]);
var inst_16641 = (inst_16639 < inst_16638);
var inst_16642 = inst_16641;
var state_16699__$1 = state_16699;
if(cljs.core.truth_(inst_16642)){
var statearr_16769_19866 = state_16699__$1;
(statearr_16769_19866[(1)] = (27));

} else {
var statearr_16773_19867 = state_16699__$1;
(statearr_16773_19867[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16700 === (34))){
var state_16699__$1 = state_16699;
var statearr_16777_19868 = state_16699__$1;
(statearr_16777_19868[(2)] = null);

(statearr_16777_19868[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16700 === (17))){
var state_16699__$1 = state_16699;
var statearr_16778_19870 = state_16699__$1;
(statearr_16778_19870[(2)] = null);

(statearr_16778_19870[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16700 === (3))){
var inst_16695 = (state_16699[(2)]);
var state_16699__$1 = state_16699;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16699__$1,inst_16695);
} else {
if((state_val_16700 === (12))){
var inst_16623 = (state_16699[(2)]);
var state_16699__$1 = state_16699;
var statearr_16779_19871 = state_16699__$1;
(statearr_16779_19871[(2)] = inst_16623);

(statearr_16779_19871[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16700 === (2))){
var state_16699__$1 = state_16699;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16699__$1,(4),ch);
} else {
if((state_val_16700 === (23))){
var state_16699__$1 = state_16699;
var statearr_16783_19874 = state_16699__$1;
(statearr_16783_19874[(2)] = null);

(statearr_16783_19874[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16700 === (35))){
var inst_16679 = (state_16699[(2)]);
var state_16699__$1 = state_16699;
var statearr_16784_19875 = state_16699__$1;
(statearr_16784_19875[(2)] = inst_16679);

(statearr_16784_19875[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16700 === (19))){
var inst_16467 = (state_16699[(7)]);
var inst_16471 = cljs.core.chunk_first(inst_16467);
var inst_16472 = cljs.core.chunk_rest(inst_16467);
var inst_16473 = cljs.core.count(inst_16471);
var inst_16445 = inst_16472;
var inst_16446 = inst_16471;
var inst_16447 = inst_16473;
var inst_16448 = (0);
var state_16699__$1 = (function (){var statearr_16793 = state_16699;
(statearr_16793[(14)] = inst_16446);

(statearr_16793[(15)] = inst_16445);

(statearr_16793[(16)] = inst_16448);

(statearr_16793[(17)] = inst_16447);

return statearr_16793;
})();
var statearr_16794_19876 = state_16699__$1;
(statearr_16794_19876[(2)] = null);

(statearr_16794_19876[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16700 === (11))){
var inst_16467 = (state_16699[(7)]);
var inst_16445 = (state_16699[(15)]);
var inst_16467__$1 = cljs.core.seq(inst_16445);
var state_16699__$1 = (function (){var statearr_16795 = state_16699;
(statearr_16795[(7)] = inst_16467__$1);

return statearr_16795;
})();
if(inst_16467__$1){
var statearr_16796_19877 = state_16699__$1;
(statearr_16796_19877[(1)] = (16));

} else {
var statearr_16797_19878 = state_16699__$1;
(statearr_16797_19878[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16700 === (9))){
var inst_16625 = (state_16699[(2)]);
var state_16699__$1 = state_16699;
var statearr_16798_19879 = state_16699__$1;
(statearr_16798_19879[(2)] = inst_16625);

(statearr_16798_19879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16700 === (5))){
var inst_16443 = cljs.core.deref(cs);
var inst_16444 = cljs.core.seq(inst_16443);
var inst_16445 = inst_16444;
var inst_16446 = null;
var inst_16447 = (0);
var inst_16448 = (0);
var state_16699__$1 = (function (){var statearr_16799 = state_16699;
(statearr_16799[(14)] = inst_16446);

(statearr_16799[(15)] = inst_16445);

(statearr_16799[(16)] = inst_16448);

(statearr_16799[(17)] = inst_16447);

return statearr_16799;
})();
var statearr_16800_19880 = state_16699__$1;
(statearr_16800_19880[(2)] = null);

(statearr_16800_19880[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16700 === (14))){
var state_16699__$1 = state_16699;
var statearr_16803_19881 = state_16699__$1;
(statearr_16803_19881[(2)] = null);

(statearr_16803_19881[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16700 === (45))){
var inst_16687 = (state_16699[(2)]);
var state_16699__$1 = state_16699;
var statearr_16804_19882 = state_16699__$1;
(statearr_16804_19882[(2)] = inst_16687);

(statearr_16804_19882[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16700 === (26))){
var inst_16628 = (state_16699[(27)]);
var inst_16683 = (state_16699[(2)]);
var inst_16684 = cljs.core.seq(inst_16628);
var state_16699__$1 = (function (){var statearr_16805 = state_16699;
(statearr_16805[(29)] = inst_16683);

return statearr_16805;
})();
if(inst_16684){
var statearr_16806_19883 = state_16699__$1;
(statearr_16806_19883[(1)] = (42));

} else {
var statearr_16807_19884 = state_16699__$1;
(statearr_16807_19884[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16700 === (16))){
var inst_16467 = (state_16699[(7)]);
var inst_16469 = cljs.core.chunked_seq_QMARK_(inst_16467);
var state_16699__$1 = state_16699;
if(inst_16469){
var statearr_16812_19885 = state_16699__$1;
(statearr_16812_19885[(1)] = (19));

} else {
var statearr_16959_19886 = state_16699__$1;
(statearr_16959_19886[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16700 === (38))){
var inst_16676 = (state_16699[(2)]);
var state_16699__$1 = state_16699;
var statearr_16960_19887 = state_16699__$1;
(statearr_16960_19887[(2)] = inst_16676);

(statearr_16960_19887[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16700 === (30))){
var state_16699__$1 = state_16699;
var statearr_16961_19888 = state_16699__$1;
(statearr_16961_19888[(2)] = null);

(statearr_16961_19888[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16700 === (10))){
var inst_16446 = (state_16699[(14)]);
var inst_16448 = (state_16699[(16)]);
var inst_16456 = cljs.core._nth(inst_16446,inst_16448);
var inst_16457 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16456,(0),null);
var inst_16458 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16456,(1),null);
var state_16699__$1 = (function (){var statearr_16962 = state_16699;
(statearr_16962[(24)] = inst_16457);

return statearr_16962;
})();
if(cljs.core.truth_(inst_16458)){
var statearr_16963_19889 = state_16699__$1;
(statearr_16963_19889[(1)] = (13));

} else {
var statearr_16964_19890 = state_16699__$1;
(statearr_16964_19890[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16700 === (18))){
var inst_16621 = (state_16699[(2)]);
var state_16699__$1 = state_16699;
var statearr_16965_19891 = state_16699__$1;
(statearr_16965_19891[(2)] = inst_16621);

(statearr_16965_19891[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16700 === (42))){
var state_16699__$1 = state_16699;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16699__$1,(45),dchan);
} else {
if((state_val_16700 === (37))){
var inst_16654 = (state_16699[(23)]);
var inst_16663 = (state_16699[(22)]);
var inst_16436 = (state_16699[(12)]);
var inst_16663__$1 = cljs.core.first(inst_16654);
var inst_16664 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16663__$1,inst_16436,done);
var state_16699__$1 = (function (){var statearr_16966 = state_16699;
(statearr_16966[(22)] = inst_16663__$1);

return statearr_16966;
})();
if(cljs.core.truth_(inst_16664)){
var statearr_16967_19892 = state_16699__$1;
(statearr_16967_19892[(1)] = (39));

} else {
var statearr_16968_19893 = state_16699__$1;
(statearr_16968_19893[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16700 === (8))){
var inst_16448 = (state_16699[(16)]);
var inst_16447 = (state_16699[(17)]);
var inst_16450 = (inst_16448 < inst_16447);
var inst_16451 = inst_16450;
var state_16699__$1 = state_16699;
if(cljs.core.truth_(inst_16451)){
var statearr_16969_19894 = state_16699__$1;
(statearr_16969_19894[(1)] = (10));

} else {
var statearr_16970_19897 = state_16699__$1;
(statearr_16970_19897[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$mult_$_state_machine__14239__auto__ = null;
var cljs$core$async$mult_$_state_machine__14239__auto____0 = (function (){
var statearr_17041 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17041[(0)] = cljs$core$async$mult_$_state_machine__14239__auto__);

(statearr_17041[(1)] = (1));

return statearr_17041;
});
var cljs$core$async$mult_$_state_machine__14239__auto____1 = (function (state_16699){
while(true){
var ret_value__14240__auto__ = (function (){try{while(true){
var result__14241__auto__ = switch__14238__auto__(state_16699);
if(cljs.core.keyword_identical_QMARK_(result__14241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14241__auto__;
}
break;
}
}catch (e17042){var ex__14242__auto__ = e17042;
var statearr_17043_19898 = state_16699;
(statearr_17043_19898[(2)] = ex__14242__auto__);


if(cljs.core.seq((state_16699[(4)]))){
var statearr_17048_19899 = state_16699;
(statearr_17048_19899[(1)] = cljs.core.first((state_16699[(4)])));

} else {
throw ex__14242__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19902 = state_16699;
state_16699 = G__19902;
continue;
} else {
return ret_value__14240__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14239__auto__ = function(state_16699){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14239__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14239__auto____1.call(this,state_16699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14239__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14239__auto____0;
cljs$core$async$mult_$_state_machine__14239__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14239__auto____1;
return cljs$core$async$mult_$_state_machine__14239__auto__;
})()
})();
var state__14539__auto__ = (function (){var statearr_17049 = f__14538__auto__();
(statearr_17049[(6)] = c__14537__auto___19791);

return statearr_17049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14539__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__17057 = arguments.length;
switch (G__17057) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_19906 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_19906(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_19941 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_19941(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_19942 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null,m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_19942(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_19943 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null,m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_19943(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_19946 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null,m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_19946(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19950 = arguments.length;
var i__5727__auto___19951 = (0);
while(true){
if((i__5727__auto___19951 < len__5726__auto___19950)){
args__5732__auto__.push((arguments[i__5727__auto___19951]));

var G__19952 = (i__5727__auto___19951 + (1));
i__5727__auto___19951 = G__19952;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__17252){
var map__17253 = p__17252;
var map__17253__$1 = cljs.core.__destructure_map(map__17253);
var opts = map__17253__$1;
var statearr_17254_19957 = state;
(statearr_17254_19957[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_17258_19958 = state;
(statearr_17258_19958[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_17263_19959 = state;
(statearr_17263_19959[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq17244){
var G__17245 = cljs.core.first(seq17244);
var seq17244__$1 = cljs.core.next(seq17244);
var G__17246 = cljs.core.first(seq17244__$1);
var seq17244__$2 = cljs.core.next(seq17244__$1);
var G__17247 = cljs.core.first(seq17244__$2);
var seq17244__$3 = cljs.core.next(seq17244__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17245,G__17246,G__17247,seq17244__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17280 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17281){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta17281 = meta17281;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17280.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17282,meta17281__$1){
var self__ = this;
var _17282__$1 = this;
return (new cljs.core.async.t_cljs$core$async17280(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta17281__$1));
}));

(cljs.core.async.t_cljs$core$async17280.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17282){
var self__ = this;
var _17282__$1 = this;
return self__.meta17281;
}));

(cljs.core.async.t_cljs$core$async17280.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17280.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async17280.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17280.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17280.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17280.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17280.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17280.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17280.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta17281","meta17281",1225346369,null)], null);
}));

(cljs.core.async.t_cljs$core$async17280.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17280.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17280");

(cljs.core.async.t_cljs$core$async17280.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17280");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17280.
 */
cljs.core.async.__GT_t_cljs$core$async17280 = (function cljs$core$async$__GT_t_cljs$core$async17280(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17281){
return (new cljs.core.async.t_cljs$core$async17280(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17281));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async17280(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__14537__auto___19975 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14538__auto__ = (function (){var switch__14238__auto__ = (function (state_17535){
var state_val_17536 = (state_17535[(1)]);
if((state_val_17536 === (7))){
var inst_17314 = (state_17535[(2)]);
var state_17535__$1 = state_17535;
if(cljs.core.truth_(inst_17314)){
var statearr_17542_19976 = state_17535__$1;
(statearr_17542_19976[(1)] = (8));

} else {
var statearr_17543_19978 = state_17535__$1;
(statearr_17543_19978[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17536 === (20))){
var inst_17307 = (state_17535[(7)]);
var state_17535__$1 = state_17535;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17535__$1,(23),out,inst_17307);
} else {
if((state_val_17536 === (1))){
var inst_17290 = calc_state();
var inst_17291 = cljs.core.__destructure_map(inst_17290);
var inst_17292 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17291,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17293 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17291,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17294 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17291,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_17295 = inst_17290;
var state_17535__$1 = (function (){var statearr_17546 = state_17535;
(statearr_17546[(8)] = inst_17293);

(statearr_17546[(9)] = inst_17295);

(statearr_17546[(10)] = inst_17294);

(statearr_17546[(11)] = inst_17292);

return statearr_17546;
})();
var statearr_17547_19979 = state_17535__$1;
(statearr_17547_19979[(2)] = null);

(statearr_17547_19979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17536 === (24))){
var inst_17298 = (state_17535[(12)]);
var inst_17295 = inst_17298;
var state_17535__$1 = (function (){var statearr_17549 = state_17535;
(statearr_17549[(9)] = inst_17295);

return statearr_17549;
})();
var statearr_17551_19980 = state_17535__$1;
(statearr_17551_19980[(2)] = null);

(statearr_17551_19980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17536 === (4))){
var inst_17309 = (state_17535[(13)]);
var inst_17307 = (state_17535[(7)]);
var inst_17306 = (state_17535[(2)]);
var inst_17307__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17306,(0),null);
var inst_17308 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17306,(1),null);
var inst_17309__$1 = (inst_17307__$1 == null);
var state_17535__$1 = (function (){var statearr_17555 = state_17535;
(statearr_17555[(14)] = inst_17308);

(statearr_17555[(13)] = inst_17309__$1);

(statearr_17555[(7)] = inst_17307__$1);

return statearr_17555;
})();
if(cljs.core.truth_(inst_17309__$1)){
var statearr_17557_19981 = state_17535__$1;
(statearr_17557_19981[(1)] = (5));

} else {
var statearr_17558_19982 = state_17535__$1;
(statearr_17558_19982[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17536 === (15))){
var inst_17328 = (state_17535[(15)]);
var inst_17299 = (state_17535[(16)]);
var inst_17328__$1 = cljs.core.empty_QMARK_(inst_17299);
var state_17535__$1 = (function (){var statearr_17560 = state_17535;
(statearr_17560[(15)] = inst_17328__$1);

return statearr_17560;
})();
if(inst_17328__$1){
var statearr_17561_19983 = state_17535__$1;
(statearr_17561_19983[(1)] = (17));

} else {
var statearr_17562_19984 = state_17535__$1;
(statearr_17562_19984[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17536 === (21))){
var inst_17298 = (state_17535[(12)]);
var inst_17295 = inst_17298;
var state_17535__$1 = (function (){var statearr_17563 = state_17535;
(statearr_17563[(9)] = inst_17295);

return statearr_17563;
})();
var statearr_17564_19985 = state_17535__$1;
(statearr_17564_19985[(2)] = null);

(statearr_17564_19985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17536 === (13))){
var inst_17321 = (state_17535[(2)]);
var inst_17322 = calc_state();
var inst_17295 = inst_17322;
var state_17535__$1 = (function (){var statearr_17565 = state_17535;
(statearr_17565[(9)] = inst_17295);

(statearr_17565[(17)] = inst_17321);

return statearr_17565;
})();
var statearr_17566_19986 = state_17535__$1;
(statearr_17566_19986[(2)] = null);

(statearr_17566_19986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17536 === (22))){
var inst_17348 = (state_17535[(2)]);
var state_17535__$1 = state_17535;
var statearr_17568_19987 = state_17535__$1;
(statearr_17568_19987[(2)] = inst_17348);

(statearr_17568_19987[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17536 === (6))){
var inst_17308 = (state_17535[(14)]);
var inst_17312 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17308,change);
var state_17535__$1 = state_17535;
var statearr_17574_19988 = state_17535__$1;
(statearr_17574_19988[(2)] = inst_17312);

(statearr_17574_19988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17536 === (25))){
var state_17535__$1 = state_17535;
var statearr_17575_19989 = state_17535__$1;
(statearr_17575_19989[(2)] = null);

(statearr_17575_19989[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17536 === (17))){
var inst_17308 = (state_17535[(14)]);
var inst_17300 = (state_17535[(18)]);
var inst_17330 = (inst_17300.cljs$core$IFn$_invoke$arity$1 ? inst_17300.cljs$core$IFn$_invoke$arity$1(inst_17308) : inst_17300.call(null,inst_17308));
var inst_17331 = cljs.core.not(inst_17330);
var state_17535__$1 = state_17535;
var statearr_17579_19990 = state_17535__$1;
(statearr_17579_19990[(2)] = inst_17331);

(statearr_17579_19990[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17536 === (3))){
var inst_17352 = (state_17535[(2)]);
var state_17535__$1 = state_17535;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17535__$1,inst_17352);
} else {
if((state_val_17536 === (12))){
var state_17535__$1 = state_17535;
var statearr_17581_19991 = state_17535__$1;
(statearr_17581_19991[(2)] = null);

(statearr_17581_19991[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17536 === (2))){
var inst_17298 = (state_17535[(12)]);
var inst_17295 = (state_17535[(9)]);
var inst_17298__$1 = cljs.core.__destructure_map(inst_17295);
var inst_17299 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17298__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17300 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17298__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17301 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17298__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_17535__$1 = (function (){var statearr_17589 = state_17535;
(statearr_17589[(12)] = inst_17298__$1);

(statearr_17589[(18)] = inst_17300);

(statearr_17589[(16)] = inst_17299);

return statearr_17589;
})();
return cljs.core.async.ioc_alts_BANG_(state_17535__$1,(4),inst_17301);
} else {
if((state_val_17536 === (23))){
var inst_17339 = (state_17535[(2)]);
var state_17535__$1 = state_17535;
if(cljs.core.truth_(inst_17339)){
var statearr_17594_19992 = state_17535__$1;
(statearr_17594_19992[(1)] = (24));

} else {
var statearr_17595_19993 = state_17535__$1;
(statearr_17595_19993[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17536 === (19))){
var inst_17334 = (state_17535[(2)]);
var state_17535__$1 = state_17535;
var statearr_17596_19994 = state_17535__$1;
(statearr_17596_19994[(2)] = inst_17334);

(statearr_17596_19994[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17536 === (11))){
var inst_17308 = (state_17535[(14)]);
var inst_17318 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_17308);
var state_17535__$1 = state_17535;
var statearr_17597_19995 = state_17535__$1;
(statearr_17597_19995[(2)] = inst_17318);

(statearr_17597_19995[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17536 === (9))){
var inst_17308 = (state_17535[(14)]);
var inst_17325 = (state_17535[(19)]);
var inst_17299 = (state_17535[(16)]);
var inst_17325__$1 = (inst_17299.cljs$core$IFn$_invoke$arity$1 ? inst_17299.cljs$core$IFn$_invoke$arity$1(inst_17308) : inst_17299.call(null,inst_17308));
var state_17535__$1 = (function (){var statearr_17598 = state_17535;
(statearr_17598[(19)] = inst_17325__$1);

return statearr_17598;
})();
if(cljs.core.truth_(inst_17325__$1)){
var statearr_17599_19996 = state_17535__$1;
(statearr_17599_19996[(1)] = (14));

} else {
var statearr_17600_19997 = state_17535__$1;
(statearr_17600_19997[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17536 === (5))){
var inst_17309 = (state_17535[(13)]);
var state_17535__$1 = state_17535;
var statearr_17601_19998 = state_17535__$1;
(statearr_17601_19998[(2)] = inst_17309);

(statearr_17601_19998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17536 === (14))){
var inst_17325 = (state_17535[(19)]);
var state_17535__$1 = state_17535;
var statearr_17602_19999 = state_17535__$1;
(statearr_17602_19999[(2)] = inst_17325);

(statearr_17602_19999[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17536 === (26))){
var inst_17344 = (state_17535[(2)]);
var state_17535__$1 = state_17535;
var statearr_17606_20000 = state_17535__$1;
(statearr_17606_20000[(2)] = inst_17344);

(statearr_17606_20000[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17536 === (16))){
var inst_17336 = (state_17535[(2)]);
var state_17535__$1 = state_17535;
if(cljs.core.truth_(inst_17336)){
var statearr_17610_20001 = state_17535__$1;
(statearr_17610_20001[(1)] = (20));

} else {
var statearr_17611_20002 = state_17535__$1;
(statearr_17611_20002[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17536 === (10))){
var inst_17350 = (state_17535[(2)]);
var state_17535__$1 = state_17535;
var statearr_17612_20003 = state_17535__$1;
(statearr_17612_20003[(2)] = inst_17350);

(statearr_17612_20003[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17536 === (18))){
var inst_17328 = (state_17535[(15)]);
var state_17535__$1 = state_17535;
var statearr_17613_20004 = state_17535__$1;
(statearr_17613_20004[(2)] = inst_17328);

(statearr_17613_20004[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17536 === (8))){
var inst_17307 = (state_17535[(7)]);
var inst_17316 = (inst_17307 == null);
var state_17535__$1 = state_17535;
if(cljs.core.truth_(inst_17316)){
var statearr_17618_20005 = state_17535__$1;
(statearr_17618_20005[(1)] = (11));

} else {
var statearr_17619_20006 = state_17535__$1;
(statearr_17619_20006[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$mix_$_state_machine__14239__auto__ = null;
var cljs$core$async$mix_$_state_machine__14239__auto____0 = (function (){
var statearr_17620 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17620[(0)] = cljs$core$async$mix_$_state_machine__14239__auto__);

(statearr_17620[(1)] = (1));

return statearr_17620;
});
var cljs$core$async$mix_$_state_machine__14239__auto____1 = (function (state_17535){
while(true){
var ret_value__14240__auto__ = (function (){try{while(true){
var result__14241__auto__ = switch__14238__auto__(state_17535);
if(cljs.core.keyword_identical_QMARK_(result__14241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14241__auto__;
}
break;
}
}catch (e17621){var ex__14242__auto__ = e17621;
var statearr_17622_20007 = state_17535;
(statearr_17622_20007[(2)] = ex__14242__auto__);


if(cljs.core.seq((state_17535[(4)]))){
var statearr_17623_20008 = state_17535;
(statearr_17623_20008[(1)] = cljs.core.first((state_17535[(4)])));

} else {
throw ex__14242__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20009 = state_17535;
state_17535 = G__20009;
continue;
} else {
return ret_value__14240__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14239__auto__ = function(state_17535){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14239__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14239__auto____1.call(this,state_17535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14239__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14239__auto____0;
cljs$core$async$mix_$_state_machine__14239__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14239__auto____1;
return cljs$core$async$mix_$_state_machine__14239__auto__;
})()
})();
var state__14539__auto__ = (function (){var statearr_17629 = f__14538__auto__();
(statearr_17629[(6)] = c__14537__auto___19975);

return statearr_17629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14539__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_20010 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_20010(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_20011 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null,p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_20011(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_20012 = (function() {
var G__20013 = null;
var G__20013__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null,p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__20013__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null,p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__20013 = function(p,v){
switch(arguments.length){
case 1:
return G__20013__1.call(this,p);
case 2:
return G__20013__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20013.cljs$core$IFn$_invoke$arity$1 = G__20013__1;
G__20013.cljs$core$IFn$_invoke$arity$2 = G__20013__2;
return G__20013;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__17753 = arguments.length;
switch (G__17753) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20012(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20012(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17762 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta17763){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta17763 = meta17763;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17762.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17764,meta17763__$1){
var self__ = this;
var _17764__$1 = this;
return (new cljs.core.async.t_cljs$core$async17762(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta17763__$1));
}));

(cljs.core.async.t_cljs$core$async17762.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17764){
var self__ = this;
var _17764__$1 = this;
return self__.meta17763;
}));

(cljs.core.async.t_cljs$core$async17762.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17762.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async17762.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17762.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async17762.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async17762.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async17762.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async17762.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta17763","meta17763",1323230425,null)], null);
}));

(cljs.core.async.t_cljs$core$async17762.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17762.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17762");

(cljs.core.async.t_cljs$core$async17762.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17762");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17762.
 */
cljs.core.async.__GT_t_cljs$core$async17762 = (function cljs$core$async$__GT_t_cljs$core$async17762(ch,topic_fn,buf_fn,mults,ensure_mult,meta17763){
return (new cljs.core.async.t_cljs$core$async17762(ch,topic_fn,buf_fn,mults,ensure_mult,meta17763));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__17757 = arguments.length;
switch (G__17757) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__17755_SHARP_){
if(cljs.core.truth_((p1__17755_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__17755_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__17755_SHARP_.call(null,topic)))){
return p1__17755_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17755_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async17762(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__14537__auto___20033 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14538__auto__ = (function (){var switch__14238__auto__ = (function (state_17906){
var state_val_17908 = (state_17906[(1)]);
if((state_val_17908 === (7))){
var inst_17902 = (state_17906[(2)]);
var state_17906__$1 = state_17906;
var statearr_17911_20034 = state_17906__$1;
(statearr_17911_20034[(2)] = inst_17902);

(statearr_17911_20034[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17908 === (20))){
var state_17906__$1 = state_17906;
var statearr_17913_20035 = state_17906__$1;
(statearr_17913_20035[(2)] = null);

(statearr_17913_20035[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17908 === (1))){
var state_17906__$1 = state_17906;
var statearr_17918_20036 = state_17906__$1;
(statearr_17918_20036[(2)] = null);

(statearr_17918_20036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17908 === (24))){
var inst_17882 = (state_17906[(7)]);
var inst_17893 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_17882);
var state_17906__$1 = state_17906;
var statearr_17921_20037 = state_17906__$1;
(statearr_17921_20037[(2)] = inst_17893);

(statearr_17921_20037[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17908 === (4))){
var inst_17800 = (state_17906[(8)]);
var inst_17800__$1 = (state_17906[(2)]);
var inst_17801 = (inst_17800__$1 == null);
var state_17906__$1 = (function (){var statearr_17924 = state_17906;
(statearr_17924[(8)] = inst_17800__$1);

return statearr_17924;
})();
if(cljs.core.truth_(inst_17801)){
var statearr_17925_20038 = state_17906__$1;
(statearr_17925_20038[(1)] = (5));

} else {
var statearr_17926_20039 = state_17906__$1;
(statearr_17926_20039[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17908 === (15))){
var inst_17875 = (state_17906[(2)]);
var state_17906__$1 = state_17906;
var statearr_17928_20040 = state_17906__$1;
(statearr_17928_20040[(2)] = inst_17875);

(statearr_17928_20040[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17908 === (21))){
var inst_17899 = (state_17906[(2)]);
var state_17906__$1 = (function (){var statearr_17929 = state_17906;
(statearr_17929[(9)] = inst_17899);

return statearr_17929;
})();
var statearr_17930_20041 = state_17906__$1;
(statearr_17930_20041[(2)] = null);

(statearr_17930_20041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17908 === (13))){
var inst_17856 = (state_17906[(10)]);
var inst_17858 = cljs.core.chunked_seq_QMARK_(inst_17856);
var state_17906__$1 = state_17906;
if(inst_17858){
var statearr_17933_20042 = state_17906__$1;
(statearr_17933_20042[(1)] = (16));

} else {
var statearr_17934_20043 = state_17906__$1;
(statearr_17934_20043[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17908 === (22))){
var inst_17889 = (state_17906[(2)]);
var state_17906__$1 = state_17906;
if(cljs.core.truth_(inst_17889)){
var statearr_17935_20044 = state_17906__$1;
(statearr_17935_20044[(1)] = (23));

} else {
var statearr_17936_20045 = state_17906__$1;
(statearr_17936_20045[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17908 === (6))){
var inst_17800 = (state_17906[(8)]);
var inst_17882 = (state_17906[(7)]);
var inst_17884 = (state_17906[(11)]);
var inst_17882__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_17800) : topic_fn.call(null,inst_17800));
var inst_17883 = cljs.core.deref(mults);
var inst_17884__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17883,inst_17882__$1);
var state_17906__$1 = (function (){var statearr_17937 = state_17906;
(statearr_17937[(7)] = inst_17882__$1);

(statearr_17937[(11)] = inst_17884__$1);

return statearr_17937;
})();
if(cljs.core.truth_(inst_17884__$1)){
var statearr_17938_20046 = state_17906__$1;
(statearr_17938_20046[(1)] = (19));

} else {
var statearr_17940_20047 = state_17906__$1;
(statearr_17940_20047[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17908 === (25))){
var inst_17895 = (state_17906[(2)]);
var state_17906__$1 = state_17906;
var statearr_17943_20048 = state_17906__$1;
(statearr_17943_20048[(2)] = inst_17895);

(statearr_17943_20048[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17908 === (17))){
var inst_17856 = (state_17906[(10)]);
var inst_17865 = cljs.core.first(inst_17856);
var inst_17866 = cljs.core.async.muxch_STAR_(inst_17865);
var inst_17867 = cljs.core.async.close_BANG_(inst_17866);
var inst_17869 = cljs.core.next(inst_17856);
var inst_17810 = inst_17869;
var inst_17811 = null;
var inst_17812 = (0);
var inst_17813 = (0);
var state_17906__$1 = (function (){var statearr_17947 = state_17906;
(statearr_17947[(12)] = inst_17811);

(statearr_17947[(13)] = inst_17812);

(statearr_17947[(14)] = inst_17813);

(statearr_17947[(15)] = inst_17810);

(statearr_17947[(16)] = inst_17867);

return statearr_17947;
})();
var statearr_17948_20049 = state_17906__$1;
(statearr_17948_20049[(2)] = null);

(statearr_17948_20049[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17908 === (3))){
var inst_17904 = (state_17906[(2)]);
var state_17906__$1 = state_17906;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17906__$1,inst_17904);
} else {
if((state_val_17908 === (12))){
var inst_17877 = (state_17906[(2)]);
var state_17906__$1 = state_17906;
var statearr_17950_20050 = state_17906__$1;
(statearr_17950_20050[(2)] = inst_17877);

(statearr_17950_20050[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17908 === (2))){
var state_17906__$1 = state_17906;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17906__$1,(4),ch);
} else {
if((state_val_17908 === (23))){
var state_17906__$1 = state_17906;
var statearr_17951_20051 = state_17906__$1;
(statearr_17951_20051[(2)] = null);

(statearr_17951_20051[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17908 === (19))){
var inst_17800 = (state_17906[(8)]);
var inst_17884 = (state_17906[(11)]);
var inst_17887 = cljs.core.async.muxch_STAR_(inst_17884);
var state_17906__$1 = state_17906;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17906__$1,(22),inst_17887,inst_17800);
} else {
if((state_val_17908 === (11))){
var inst_17856 = (state_17906[(10)]);
var inst_17810 = (state_17906[(15)]);
var inst_17856__$1 = cljs.core.seq(inst_17810);
var state_17906__$1 = (function (){var statearr_17955 = state_17906;
(statearr_17955[(10)] = inst_17856__$1);

return statearr_17955;
})();
if(inst_17856__$1){
var statearr_17956_20052 = state_17906__$1;
(statearr_17956_20052[(1)] = (13));

} else {
var statearr_17957_20053 = state_17906__$1;
(statearr_17957_20053[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17908 === (9))){
var inst_17879 = (state_17906[(2)]);
var state_17906__$1 = state_17906;
var statearr_17958_20054 = state_17906__$1;
(statearr_17958_20054[(2)] = inst_17879);

(statearr_17958_20054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17908 === (5))){
var inst_17807 = cljs.core.deref(mults);
var inst_17808 = cljs.core.vals(inst_17807);
var inst_17809 = cljs.core.seq(inst_17808);
var inst_17810 = inst_17809;
var inst_17811 = null;
var inst_17812 = (0);
var inst_17813 = (0);
var state_17906__$1 = (function (){var statearr_17959 = state_17906;
(statearr_17959[(12)] = inst_17811);

(statearr_17959[(13)] = inst_17812);

(statearr_17959[(14)] = inst_17813);

(statearr_17959[(15)] = inst_17810);

return statearr_17959;
})();
var statearr_17960_20055 = state_17906__$1;
(statearr_17960_20055[(2)] = null);

(statearr_17960_20055[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17908 === (14))){
var state_17906__$1 = state_17906;
var statearr_17964_20056 = state_17906__$1;
(statearr_17964_20056[(2)] = null);

(statearr_17964_20056[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17908 === (16))){
var inst_17856 = (state_17906[(10)]);
var inst_17860 = cljs.core.chunk_first(inst_17856);
var inst_17861 = cljs.core.chunk_rest(inst_17856);
var inst_17862 = cljs.core.count(inst_17860);
var inst_17810 = inst_17861;
var inst_17811 = inst_17860;
var inst_17812 = inst_17862;
var inst_17813 = (0);
var state_17906__$1 = (function (){var statearr_17972 = state_17906;
(statearr_17972[(12)] = inst_17811);

(statearr_17972[(13)] = inst_17812);

(statearr_17972[(14)] = inst_17813);

(statearr_17972[(15)] = inst_17810);

return statearr_17972;
})();
var statearr_17977_20057 = state_17906__$1;
(statearr_17977_20057[(2)] = null);

(statearr_17977_20057[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17908 === (10))){
var inst_17811 = (state_17906[(12)]);
var inst_17812 = (state_17906[(13)]);
var inst_17813 = (state_17906[(14)]);
var inst_17810 = (state_17906[(15)]);
var inst_17818 = cljs.core._nth(inst_17811,inst_17813);
var inst_17819 = cljs.core.async.muxch_STAR_(inst_17818);
var inst_17820 = cljs.core.async.close_BANG_(inst_17819);
var inst_17821 = (inst_17813 + (1));
var tmp17961 = inst_17811;
var tmp17962 = inst_17812;
var tmp17963 = inst_17810;
var inst_17810__$1 = tmp17963;
var inst_17811__$1 = tmp17961;
var inst_17812__$1 = tmp17962;
var inst_17813__$1 = inst_17821;
var state_17906__$1 = (function (){var statearr_17983 = state_17906;
(statearr_17983[(12)] = inst_17811__$1);

(statearr_17983[(13)] = inst_17812__$1);

(statearr_17983[(14)] = inst_17813__$1);

(statearr_17983[(17)] = inst_17820);

(statearr_17983[(15)] = inst_17810__$1);

return statearr_17983;
})();
var statearr_17984_20058 = state_17906__$1;
(statearr_17984_20058[(2)] = null);

(statearr_17984_20058[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17908 === (18))){
var inst_17872 = (state_17906[(2)]);
var state_17906__$1 = state_17906;
var statearr_17985_20059 = state_17906__$1;
(statearr_17985_20059[(2)] = inst_17872);

(statearr_17985_20059[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17908 === (8))){
var inst_17812 = (state_17906[(13)]);
var inst_17813 = (state_17906[(14)]);
var inst_17815 = (inst_17813 < inst_17812);
var inst_17816 = inst_17815;
var state_17906__$1 = state_17906;
if(cljs.core.truth_(inst_17816)){
var statearr_17990_20060 = state_17906__$1;
(statearr_17990_20060[(1)] = (10));

} else {
var statearr_17991_20061 = state_17906__$1;
(statearr_17991_20061[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__14239__auto__ = null;
var cljs$core$async$state_machine__14239__auto____0 = (function (){
var statearr_17999 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17999[(0)] = cljs$core$async$state_machine__14239__auto__);

(statearr_17999[(1)] = (1));

return statearr_17999;
});
var cljs$core$async$state_machine__14239__auto____1 = (function (state_17906){
while(true){
var ret_value__14240__auto__ = (function (){try{while(true){
var result__14241__auto__ = switch__14238__auto__(state_17906);
if(cljs.core.keyword_identical_QMARK_(result__14241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14241__auto__;
}
break;
}
}catch (e18001){var ex__14242__auto__ = e18001;
var statearr_18002_20062 = state_17906;
(statearr_18002_20062[(2)] = ex__14242__auto__);


if(cljs.core.seq((state_17906[(4)]))){
var statearr_18003_20063 = state_17906;
(statearr_18003_20063[(1)] = cljs.core.first((state_17906[(4)])));

} else {
throw ex__14242__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20064 = state_17906;
state_17906 = G__20064;
continue;
} else {
return ret_value__14240__auto__;
}
break;
}
});
cljs$core$async$state_machine__14239__auto__ = function(state_17906){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14239__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14239__auto____1.call(this,state_17906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14239__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14239__auto____0;
cljs$core$async$state_machine__14239__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14239__auto____1;
return cljs$core$async$state_machine__14239__auto__;
})()
})();
var state__14539__auto__ = (function (){var statearr_18012 = f__14538__auto__();
(statearr_18012[(6)] = c__14537__auto___20033);

return statearr_18012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14539__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__18026 = arguments.length;
switch (G__18026) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__18036 = arguments.length;
switch (G__18036) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__18039 = arguments.length;
switch (G__18039) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__14537__auto___20068 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14538__auto__ = (function (){var switch__14238__auto__ = (function (state_18089){
var state_val_18090 = (state_18089[(1)]);
if((state_val_18090 === (7))){
var state_18089__$1 = state_18089;
var statearr_18092_20069 = state_18089__$1;
(statearr_18092_20069[(2)] = null);

(statearr_18092_20069[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18090 === (1))){
var state_18089__$1 = state_18089;
var statearr_18093_20070 = state_18089__$1;
(statearr_18093_20070[(2)] = null);

(statearr_18093_20070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18090 === (4))){
var inst_18045 = (state_18089[(7)]);
var inst_18044 = (state_18089[(8)]);
var inst_18047 = (inst_18045 < inst_18044);
var state_18089__$1 = state_18089;
if(cljs.core.truth_(inst_18047)){
var statearr_18094_20071 = state_18089__$1;
(statearr_18094_20071[(1)] = (6));

} else {
var statearr_18095_20072 = state_18089__$1;
(statearr_18095_20072[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18090 === (15))){
var inst_18075 = (state_18089[(9)]);
var inst_18080 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_18075);
var state_18089__$1 = state_18089;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18089__$1,(17),out,inst_18080);
} else {
if((state_val_18090 === (13))){
var inst_18075 = (state_18089[(9)]);
var inst_18075__$1 = (state_18089[(2)]);
var inst_18076 = cljs.core.some(cljs.core.nil_QMARK_,inst_18075__$1);
var state_18089__$1 = (function (){var statearr_18096 = state_18089;
(statearr_18096[(9)] = inst_18075__$1);

return statearr_18096;
})();
if(cljs.core.truth_(inst_18076)){
var statearr_18097_20073 = state_18089__$1;
(statearr_18097_20073[(1)] = (14));

} else {
var statearr_18104_20074 = state_18089__$1;
(statearr_18104_20074[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18090 === (6))){
var state_18089__$1 = state_18089;
var statearr_18105_20075 = state_18089__$1;
(statearr_18105_20075[(2)] = null);

(statearr_18105_20075[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18090 === (17))){
var inst_18082 = (state_18089[(2)]);
var state_18089__$1 = (function (){var statearr_18113 = state_18089;
(statearr_18113[(10)] = inst_18082);

return statearr_18113;
})();
var statearr_18114_20076 = state_18089__$1;
(statearr_18114_20076[(2)] = null);

(statearr_18114_20076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18090 === (3))){
var inst_18087 = (state_18089[(2)]);
var state_18089__$1 = state_18089;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18089__$1,inst_18087);
} else {
if((state_val_18090 === (12))){
var _ = (function (){var statearr_18120 = state_18089;
(statearr_18120[(4)] = cljs.core.rest((state_18089[(4)])));

return statearr_18120;
})();
var state_18089__$1 = state_18089;
var ex18108 = (state_18089__$1[(2)]);
var statearr_18131_20077 = state_18089__$1;
(statearr_18131_20077[(5)] = ex18108);


if((ex18108 instanceof Object)){
var statearr_18207_20078 = state_18089__$1;
(statearr_18207_20078[(1)] = (11));

(statearr_18207_20078[(5)] = null);

} else {
throw ex18108;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18090 === (2))){
var inst_18043 = cljs.core.reset_BANG_(dctr,cnt);
var inst_18044 = cnt;
var inst_18045 = (0);
var state_18089__$1 = (function (){var statearr_18217 = state_18089;
(statearr_18217[(11)] = inst_18043);

(statearr_18217[(7)] = inst_18045);

(statearr_18217[(8)] = inst_18044);

return statearr_18217;
})();
var statearr_18218_20079 = state_18089__$1;
(statearr_18218_20079[(2)] = null);

(statearr_18218_20079[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18090 === (11))){
var inst_18052 = (state_18089[(2)]);
var inst_18054 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_18089__$1 = (function (){var statearr_18219 = state_18089;
(statearr_18219[(12)] = inst_18052);

return statearr_18219;
})();
var statearr_18220_20080 = state_18089__$1;
(statearr_18220_20080[(2)] = inst_18054);

(statearr_18220_20080[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18090 === (9))){
var inst_18045 = (state_18089[(7)]);
var _ = (function (){var statearr_18221 = state_18089;
(statearr_18221[(4)] = cljs.core.cons((12),(state_18089[(4)])));

return statearr_18221;
})();
var inst_18060 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_18045) : chs__$1.call(null,inst_18045));
var inst_18061 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_18045) : done.call(null,inst_18045));
var inst_18062 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_18060,inst_18061);
var ___$1 = (function (){var statearr_18224 = state_18089;
(statearr_18224[(4)] = cljs.core.rest((state_18089[(4)])));

return statearr_18224;
})();
var state_18089__$1 = state_18089;
var statearr_18225_20081 = state_18089__$1;
(statearr_18225_20081[(2)] = inst_18062);

(statearr_18225_20081[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18090 === (5))){
var inst_18072 = (state_18089[(2)]);
var state_18089__$1 = (function (){var statearr_18226 = state_18089;
(statearr_18226[(13)] = inst_18072);

return statearr_18226;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18089__$1,(13),dchan);
} else {
if((state_val_18090 === (14))){
var inst_18078 = cljs.core.async.close_BANG_(out);
var state_18089__$1 = state_18089;
var statearr_18231_20082 = state_18089__$1;
(statearr_18231_20082[(2)] = inst_18078);

(statearr_18231_20082[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18090 === (16))){
var inst_18085 = (state_18089[(2)]);
var state_18089__$1 = state_18089;
var statearr_18232_20083 = state_18089__$1;
(statearr_18232_20083[(2)] = inst_18085);

(statearr_18232_20083[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18090 === (10))){
var inst_18045 = (state_18089[(7)]);
var inst_18065 = (state_18089[(2)]);
var inst_18066 = (inst_18045 + (1));
var inst_18045__$1 = inst_18066;
var state_18089__$1 = (function (){var statearr_18234 = state_18089;
(statearr_18234[(7)] = inst_18045__$1);

(statearr_18234[(14)] = inst_18065);

return statearr_18234;
})();
var statearr_18235_20084 = state_18089__$1;
(statearr_18235_20084[(2)] = null);

(statearr_18235_20084[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18090 === (8))){
var inst_18070 = (state_18089[(2)]);
var state_18089__$1 = state_18089;
var statearr_18236_20085 = state_18089__$1;
(statearr_18236_20085[(2)] = inst_18070);

(statearr_18236_20085[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__14239__auto__ = null;
var cljs$core$async$state_machine__14239__auto____0 = (function (){
var statearr_18244 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18244[(0)] = cljs$core$async$state_machine__14239__auto__);

(statearr_18244[(1)] = (1));

return statearr_18244;
});
var cljs$core$async$state_machine__14239__auto____1 = (function (state_18089){
while(true){
var ret_value__14240__auto__ = (function (){try{while(true){
var result__14241__auto__ = switch__14238__auto__(state_18089);
if(cljs.core.keyword_identical_QMARK_(result__14241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14241__auto__;
}
break;
}
}catch (e18246){var ex__14242__auto__ = e18246;
var statearr_18247_20086 = state_18089;
(statearr_18247_20086[(2)] = ex__14242__auto__);


if(cljs.core.seq((state_18089[(4)]))){
var statearr_18287_20087 = state_18089;
(statearr_18287_20087[(1)] = cljs.core.first((state_18089[(4)])));

} else {
throw ex__14242__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20088 = state_18089;
state_18089 = G__20088;
continue;
} else {
return ret_value__14240__auto__;
}
break;
}
});
cljs$core$async$state_machine__14239__auto__ = function(state_18089){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14239__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14239__auto____1.call(this,state_18089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14239__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14239__auto____0;
cljs$core$async$state_machine__14239__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14239__auto____1;
return cljs$core$async$state_machine__14239__auto__;
})()
})();
var state__14539__auto__ = (function (){var statearr_18296 = f__14538__auto__();
(statearr_18296[(6)] = c__14537__auto___20068);

return statearr_18296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14539__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__18300 = arguments.length;
switch (G__18300) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14537__auto___20090 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14538__auto__ = (function (){var switch__14238__auto__ = (function (state_18336){
var state_val_18337 = (state_18336[(1)]);
if((state_val_18337 === (7))){
var inst_18313 = (state_18336[(7)]);
var inst_18314 = (state_18336[(8)]);
var inst_18313__$1 = (state_18336[(2)]);
var inst_18314__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18313__$1,(0),null);
var inst_18315 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18313__$1,(1),null);
var inst_18316 = (inst_18314__$1 == null);
var state_18336__$1 = (function (){var statearr_18344 = state_18336;
(statearr_18344[(9)] = inst_18315);

(statearr_18344[(7)] = inst_18313__$1);

(statearr_18344[(8)] = inst_18314__$1);

return statearr_18344;
})();
if(cljs.core.truth_(inst_18316)){
var statearr_18345_20096 = state_18336__$1;
(statearr_18345_20096[(1)] = (8));

} else {
var statearr_18346_20097 = state_18336__$1;
(statearr_18346_20097[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18337 === (1))){
var inst_18302 = cljs.core.vec(chs);
var inst_18303 = inst_18302;
var state_18336__$1 = (function (){var statearr_18348 = state_18336;
(statearr_18348[(10)] = inst_18303);

return statearr_18348;
})();
var statearr_18349_20146 = state_18336__$1;
(statearr_18349_20146[(2)] = null);

(statearr_18349_20146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18337 === (4))){
var inst_18303 = (state_18336[(10)]);
var state_18336__$1 = state_18336;
return cljs.core.async.ioc_alts_BANG_(state_18336__$1,(7),inst_18303);
} else {
if((state_val_18337 === (6))){
var inst_18330 = (state_18336[(2)]);
var state_18336__$1 = state_18336;
var statearr_18354_20147 = state_18336__$1;
(statearr_18354_20147[(2)] = inst_18330);

(statearr_18354_20147[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18337 === (3))){
var inst_18332 = (state_18336[(2)]);
var state_18336__$1 = state_18336;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18336__$1,inst_18332);
} else {
if((state_val_18337 === (2))){
var inst_18303 = (state_18336[(10)]);
var inst_18306 = cljs.core.count(inst_18303);
var inst_18307 = (inst_18306 > (0));
var state_18336__$1 = state_18336;
if(cljs.core.truth_(inst_18307)){
var statearr_18360_20148 = state_18336__$1;
(statearr_18360_20148[(1)] = (4));

} else {
var statearr_18361_20149 = state_18336__$1;
(statearr_18361_20149[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18337 === (11))){
var inst_18303 = (state_18336[(10)]);
var inst_18323 = (state_18336[(2)]);
var tmp18355 = inst_18303;
var inst_18303__$1 = tmp18355;
var state_18336__$1 = (function (){var statearr_18362 = state_18336;
(statearr_18362[(11)] = inst_18323);

(statearr_18362[(10)] = inst_18303__$1);

return statearr_18362;
})();
var statearr_18364_20150 = state_18336__$1;
(statearr_18364_20150[(2)] = null);

(statearr_18364_20150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18337 === (9))){
var inst_18314 = (state_18336[(8)]);
var state_18336__$1 = state_18336;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18336__$1,(11),out,inst_18314);
} else {
if((state_val_18337 === (5))){
var inst_18328 = cljs.core.async.close_BANG_(out);
var state_18336__$1 = state_18336;
var statearr_18370_20151 = state_18336__$1;
(statearr_18370_20151[(2)] = inst_18328);

(statearr_18370_20151[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18337 === (10))){
var inst_18326 = (state_18336[(2)]);
var state_18336__$1 = state_18336;
var statearr_18371_20152 = state_18336__$1;
(statearr_18371_20152[(2)] = inst_18326);

(statearr_18371_20152[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18337 === (8))){
var inst_18315 = (state_18336[(9)]);
var inst_18303 = (state_18336[(10)]);
var inst_18313 = (state_18336[(7)]);
var inst_18314 = (state_18336[(8)]);
var inst_18318 = (function (){var cs = inst_18303;
var vec__18309 = inst_18313;
var v = inst_18314;
var c = inst_18315;
return (function (p1__18298_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__18298_SHARP_);
});
})();
var inst_18319 = cljs.core.filterv(inst_18318,inst_18303);
var inst_18303__$1 = inst_18319;
var state_18336__$1 = (function (){var statearr_18495 = state_18336;
(statearr_18495[(10)] = inst_18303__$1);

return statearr_18495;
})();
var statearr_18496_20153 = state_18336__$1;
(statearr_18496_20153[(2)] = null);

(statearr_18496_20153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__14239__auto__ = null;
var cljs$core$async$state_machine__14239__auto____0 = (function (){
var statearr_18500 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18500[(0)] = cljs$core$async$state_machine__14239__auto__);

(statearr_18500[(1)] = (1));

return statearr_18500;
});
var cljs$core$async$state_machine__14239__auto____1 = (function (state_18336){
while(true){
var ret_value__14240__auto__ = (function (){try{while(true){
var result__14241__auto__ = switch__14238__auto__(state_18336);
if(cljs.core.keyword_identical_QMARK_(result__14241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14241__auto__;
}
break;
}
}catch (e18509){var ex__14242__auto__ = e18509;
var statearr_18514_20154 = state_18336;
(statearr_18514_20154[(2)] = ex__14242__auto__);


if(cljs.core.seq((state_18336[(4)]))){
var statearr_18515_20155 = state_18336;
(statearr_18515_20155[(1)] = cljs.core.first((state_18336[(4)])));

} else {
throw ex__14242__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20156 = state_18336;
state_18336 = G__20156;
continue;
} else {
return ret_value__14240__auto__;
}
break;
}
});
cljs$core$async$state_machine__14239__auto__ = function(state_18336){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14239__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14239__auto____1.call(this,state_18336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14239__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14239__auto____0;
cljs$core$async$state_machine__14239__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14239__auto____1;
return cljs$core$async$state_machine__14239__auto__;
})()
})();
var state__14539__auto__ = (function (){var statearr_18552 = f__14538__auto__();
(statearr_18552[(6)] = c__14537__auto___20090);

return statearr_18552;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14539__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__18571 = arguments.length;
switch (G__18571) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14537__auto___20158 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14538__auto__ = (function (){var switch__14238__auto__ = (function (state_18626){
var state_val_18627 = (state_18626[(1)]);
if((state_val_18627 === (7))){
var inst_18583 = (state_18626[(7)]);
var inst_18583__$1 = (state_18626[(2)]);
var inst_18584 = (inst_18583__$1 == null);
var inst_18585 = cljs.core.not(inst_18584);
var state_18626__$1 = (function (){var statearr_18640 = state_18626;
(statearr_18640[(7)] = inst_18583__$1);

return statearr_18640;
})();
if(inst_18585){
var statearr_18641_20159 = state_18626__$1;
(statearr_18641_20159[(1)] = (8));

} else {
var statearr_18642_20160 = state_18626__$1;
(statearr_18642_20160[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18627 === (1))){
var inst_18578 = (0);
var state_18626__$1 = (function (){var statearr_18643 = state_18626;
(statearr_18643[(8)] = inst_18578);

return statearr_18643;
})();
var statearr_18644_20161 = state_18626__$1;
(statearr_18644_20161[(2)] = null);

(statearr_18644_20161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18627 === (4))){
var state_18626__$1 = state_18626;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18626__$1,(7),ch);
} else {
if((state_val_18627 === (6))){
var inst_18621 = (state_18626[(2)]);
var state_18626__$1 = state_18626;
var statearr_18645_20162 = state_18626__$1;
(statearr_18645_20162[(2)] = inst_18621);

(statearr_18645_20162[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18627 === (3))){
var inst_18623 = (state_18626[(2)]);
var inst_18624 = cljs.core.async.close_BANG_(out);
var state_18626__$1 = (function (){var statearr_18646 = state_18626;
(statearr_18646[(9)] = inst_18623);

return statearr_18646;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18626__$1,inst_18624);
} else {
if((state_val_18627 === (2))){
var inst_18578 = (state_18626[(8)]);
var inst_18580 = (inst_18578 < n);
var state_18626__$1 = state_18626;
if(cljs.core.truth_(inst_18580)){
var statearr_18647_20163 = state_18626__$1;
(statearr_18647_20163[(1)] = (4));

} else {
var statearr_18648_20164 = state_18626__$1;
(statearr_18648_20164[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18627 === (11))){
var inst_18578 = (state_18626[(8)]);
var inst_18588 = (state_18626[(2)]);
var inst_18614 = (inst_18578 + (1));
var inst_18578__$1 = inst_18614;
var state_18626__$1 = (function (){var statearr_18649 = state_18626;
(statearr_18649[(10)] = inst_18588);

(statearr_18649[(8)] = inst_18578__$1);

return statearr_18649;
})();
var statearr_18650_20165 = state_18626__$1;
(statearr_18650_20165[(2)] = null);

(statearr_18650_20165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18627 === (9))){
var state_18626__$1 = state_18626;
var statearr_18651_20166 = state_18626__$1;
(statearr_18651_20166[(2)] = null);

(statearr_18651_20166[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18627 === (5))){
var state_18626__$1 = state_18626;
var statearr_18652_20167 = state_18626__$1;
(statearr_18652_20167[(2)] = null);

(statearr_18652_20167[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18627 === (10))){
var inst_18618 = (state_18626[(2)]);
var state_18626__$1 = state_18626;
var statearr_18653_20168 = state_18626__$1;
(statearr_18653_20168[(2)] = inst_18618);

(statearr_18653_20168[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18627 === (8))){
var inst_18583 = (state_18626[(7)]);
var state_18626__$1 = state_18626;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18626__$1,(11),out,inst_18583);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__14239__auto__ = null;
var cljs$core$async$state_machine__14239__auto____0 = (function (){
var statearr_18654 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18654[(0)] = cljs$core$async$state_machine__14239__auto__);

(statearr_18654[(1)] = (1));

return statearr_18654;
});
var cljs$core$async$state_machine__14239__auto____1 = (function (state_18626){
while(true){
var ret_value__14240__auto__ = (function (){try{while(true){
var result__14241__auto__ = switch__14238__auto__(state_18626);
if(cljs.core.keyword_identical_QMARK_(result__14241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14241__auto__;
}
break;
}
}catch (e18655){var ex__14242__auto__ = e18655;
var statearr_18656_20169 = state_18626;
(statearr_18656_20169[(2)] = ex__14242__auto__);


if(cljs.core.seq((state_18626[(4)]))){
var statearr_18657_20170 = state_18626;
(statearr_18657_20170[(1)] = cljs.core.first((state_18626[(4)])));

} else {
throw ex__14242__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20171 = state_18626;
state_18626 = G__20171;
continue;
} else {
return ret_value__14240__auto__;
}
break;
}
});
cljs$core$async$state_machine__14239__auto__ = function(state_18626){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14239__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14239__auto____1.call(this,state_18626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14239__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14239__auto____0;
cljs$core$async$state_machine__14239__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14239__auto____1;
return cljs$core$async$state_machine__14239__auto__;
})()
})();
var state__14539__auto__ = (function (){var statearr_18674 = f__14538__auto__();
(statearr_18674[(6)] = c__14537__auto___20158);

return statearr_18674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14539__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18725 = (function (f,ch,meta18688,_,fn1,meta18726){
this.f = f;
this.ch = ch;
this.meta18688 = meta18688;
this._ = _;
this.fn1 = fn1;
this.meta18726 = meta18726;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18725.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18727,meta18726__$1){
var self__ = this;
var _18727__$1 = this;
return (new cljs.core.async.t_cljs$core$async18725(self__.f,self__.ch,self__.meta18688,self__._,self__.fn1,meta18726__$1));
}));

(cljs.core.async.t_cljs$core$async18725.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18727){
var self__ = this;
var _18727__$1 = this;
return self__.meta18726;
}));

(cljs.core.async.t_cljs$core$async18725.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18725.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async18725.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18725.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__18680_SHARP_){
var G__18728 = (((p1__18680_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__18680_SHARP_) : self__.f.call(null,p1__18680_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__18728) : f1.call(null,G__18728));
});
}));

(cljs.core.async.t_cljs$core$async18725.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18688","meta18688",1128416433,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async18686","cljs.core.async/t_cljs$core$async18686",-824569577,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta18726","meta18726",645121836,null)], null);
}));

(cljs.core.async.t_cljs$core$async18725.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18725.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18725");

(cljs.core.async.t_cljs$core$async18725.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async18725");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18725.
 */
cljs.core.async.__GT_t_cljs$core$async18725 = (function cljs$core$async$__GT_t_cljs$core$async18725(f,ch,meta18688,_,fn1,meta18726){
return (new cljs.core.async.t_cljs$core$async18725(f,ch,meta18688,_,fn1,meta18726));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18686 = (function (f,ch,meta18688){
this.f = f;
this.ch = ch;
this.meta18688 = meta18688;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18686.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18690,meta18688__$1){
var self__ = this;
var _18690__$1 = this;
return (new cljs.core.async.t_cljs$core$async18686(self__.f,self__.ch,meta18688__$1));
}));

(cljs.core.async.t_cljs$core$async18686.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18690){
var self__ = this;
var _18690__$1 = this;
return self__.meta18688;
}));

(cljs.core.async.t_cljs$core$async18686.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18686.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18686.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18686.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18686.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async18725(self__.f,self__.ch,self__.meta18688,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__18729 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__18729) : self__.f.call(null,G__18729));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async18686.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18686.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async18686.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18688","meta18688",1128416433,null)], null);
}));

(cljs.core.async.t_cljs$core$async18686.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18686.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18686");

(cljs.core.async.t_cljs$core$async18686.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async18686");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18686.
 */
cljs.core.async.__GT_t_cljs$core$async18686 = (function cljs$core$async$__GT_t_cljs$core$async18686(f,ch,meta18688){
return (new cljs.core.async.t_cljs$core$async18686(f,ch,meta18688));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async18686(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18730 = (function (f,ch,meta18731){
this.f = f;
this.ch = ch;
this.meta18731 = meta18731;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18730.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18732,meta18731__$1){
var self__ = this;
var _18732__$1 = this;
return (new cljs.core.async.t_cljs$core$async18730(self__.f,self__.ch,meta18731__$1));
}));

(cljs.core.async.t_cljs$core$async18730.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18732){
var self__ = this;
var _18732__$1 = this;
return self__.meta18731;
}));

(cljs.core.async.t_cljs$core$async18730.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18730.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18730.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18730.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async18730.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18730.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async18730.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18731","meta18731",-1732933283,null)], null);
}));

(cljs.core.async.t_cljs$core$async18730.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18730.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18730");

(cljs.core.async.t_cljs$core$async18730.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async18730");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18730.
 */
cljs.core.async.__GT_t_cljs$core$async18730 = (function cljs$core$async$__GT_t_cljs$core$async18730(f,ch,meta18731){
return (new cljs.core.async.t_cljs$core$async18730(f,ch,meta18731));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async18730(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18754 = (function (p,ch,meta18755){
this.p = p;
this.ch = ch;
this.meta18755 = meta18755;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18754.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18756,meta18755__$1){
var self__ = this;
var _18756__$1 = this;
return (new cljs.core.async.t_cljs$core$async18754(self__.p,self__.ch,meta18755__$1));
}));

(cljs.core.async.t_cljs$core$async18754.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18756){
var self__ = this;
var _18756__$1 = this;
return self__.meta18755;
}));

(cljs.core.async.t_cljs$core$async18754.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18754.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18754.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18754.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18754.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async18754.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18754.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async18754.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18755","meta18755",1154978503,null)], null);
}));

(cljs.core.async.t_cljs$core$async18754.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18754.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18754");

(cljs.core.async.t_cljs$core$async18754.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async18754");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18754.
 */
cljs.core.async.__GT_t_cljs$core$async18754 = (function cljs$core$async$__GT_t_cljs$core$async18754(p,ch,meta18755){
return (new cljs.core.async.t_cljs$core$async18754(p,ch,meta18755));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async18754(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__18818 = arguments.length;
switch (G__18818) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14537__auto___20173 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14538__auto__ = (function (){var switch__14238__auto__ = (function (state_18839){
var state_val_18840 = (state_18839[(1)]);
if((state_val_18840 === (7))){
var inst_18835 = (state_18839[(2)]);
var state_18839__$1 = state_18839;
var statearr_18841_20174 = state_18839__$1;
(statearr_18841_20174[(2)] = inst_18835);

(statearr_18841_20174[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18840 === (1))){
var state_18839__$1 = state_18839;
var statearr_18842_20175 = state_18839__$1;
(statearr_18842_20175[(2)] = null);

(statearr_18842_20175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18840 === (4))){
var inst_18821 = (state_18839[(7)]);
var inst_18821__$1 = (state_18839[(2)]);
var inst_18822 = (inst_18821__$1 == null);
var state_18839__$1 = (function (){var statearr_18844 = state_18839;
(statearr_18844[(7)] = inst_18821__$1);

return statearr_18844;
})();
if(cljs.core.truth_(inst_18822)){
var statearr_18845_20176 = state_18839__$1;
(statearr_18845_20176[(1)] = (5));

} else {
var statearr_18846_20177 = state_18839__$1;
(statearr_18846_20177[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18840 === (6))){
var inst_18821 = (state_18839[(7)]);
var inst_18826 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18821) : p.call(null,inst_18821));
var state_18839__$1 = state_18839;
if(cljs.core.truth_(inst_18826)){
var statearr_18847_20178 = state_18839__$1;
(statearr_18847_20178[(1)] = (8));

} else {
var statearr_18848_20179 = state_18839__$1;
(statearr_18848_20179[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18840 === (3))){
var inst_18837 = (state_18839[(2)]);
var state_18839__$1 = state_18839;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18839__$1,inst_18837);
} else {
if((state_val_18840 === (2))){
var state_18839__$1 = state_18839;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18839__$1,(4),ch);
} else {
if((state_val_18840 === (11))){
var inst_18829 = (state_18839[(2)]);
var state_18839__$1 = state_18839;
var statearr_18849_20180 = state_18839__$1;
(statearr_18849_20180[(2)] = inst_18829);

(statearr_18849_20180[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18840 === (9))){
var state_18839__$1 = state_18839;
var statearr_18850_20181 = state_18839__$1;
(statearr_18850_20181[(2)] = null);

(statearr_18850_20181[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18840 === (5))){
var inst_18824 = cljs.core.async.close_BANG_(out);
var state_18839__$1 = state_18839;
var statearr_18855_20182 = state_18839__$1;
(statearr_18855_20182[(2)] = inst_18824);

(statearr_18855_20182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18840 === (10))){
var inst_18832 = (state_18839[(2)]);
var state_18839__$1 = (function (){var statearr_18856 = state_18839;
(statearr_18856[(8)] = inst_18832);

return statearr_18856;
})();
var statearr_18857_20183 = state_18839__$1;
(statearr_18857_20183[(2)] = null);

(statearr_18857_20183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18840 === (8))){
var inst_18821 = (state_18839[(7)]);
var state_18839__$1 = state_18839;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18839__$1,(11),out,inst_18821);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__14239__auto__ = null;
var cljs$core$async$state_machine__14239__auto____0 = (function (){
var statearr_18862 = [null,null,null,null,null,null,null,null,null];
(statearr_18862[(0)] = cljs$core$async$state_machine__14239__auto__);

(statearr_18862[(1)] = (1));

return statearr_18862;
});
var cljs$core$async$state_machine__14239__auto____1 = (function (state_18839){
while(true){
var ret_value__14240__auto__ = (function (){try{while(true){
var result__14241__auto__ = switch__14238__auto__(state_18839);
if(cljs.core.keyword_identical_QMARK_(result__14241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14241__auto__;
}
break;
}
}catch (e18865){var ex__14242__auto__ = e18865;
var statearr_18866_20184 = state_18839;
(statearr_18866_20184[(2)] = ex__14242__auto__);


if(cljs.core.seq((state_18839[(4)]))){
var statearr_18867_20185 = state_18839;
(statearr_18867_20185[(1)] = cljs.core.first((state_18839[(4)])));

} else {
throw ex__14242__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20186 = state_18839;
state_18839 = G__20186;
continue;
} else {
return ret_value__14240__auto__;
}
break;
}
});
cljs$core$async$state_machine__14239__auto__ = function(state_18839){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14239__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14239__auto____1.call(this,state_18839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14239__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14239__auto____0;
cljs$core$async$state_machine__14239__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14239__auto____1;
return cljs$core$async$state_machine__14239__auto__;
})()
})();
var state__14539__auto__ = (function (){var statearr_18868 = f__14538__auto__();
(statearr_18868[(6)] = c__14537__auto___20173);

return statearr_18868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14539__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__18870 = arguments.length;
switch (G__18870) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14537__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14538__auto__ = (function (){var switch__14238__auto__ = (function (state_18932){
var state_val_18933 = (state_18932[(1)]);
if((state_val_18933 === (7))){
var inst_18928 = (state_18932[(2)]);
var state_18932__$1 = state_18932;
var statearr_18934_20188 = state_18932__$1;
(statearr_18934_20188[(2)] = inst_18928);

(statearr_18934_20188[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18933 === (20))){
var inst_18898 = (state_18932[(7)]);
var inst_18909 = (state_18932[(2)]);
var inst_18910 = cljs.core.next(inst_18898);
var inst_18884 = inst_18910;
var inst_18885 = null;
var inst_18886 = (0);
var inst_18887 = (0);
var state_18932__$1 = (function (){var statearr_18935 = state_18932;
(statearr_18935[(8)] = inst_18909);

(statearr_18935[(9)] = inst_18885);

(statearr_18935[(10)] = inst_18884);

(statearr_18935[(11)] = inst_18886);

(statearr_18935[(12)] = inst_18887);

return statearr_18935;
})();
var statearr_18936_20189 = state_18932__$1;
(statearr_18936_20189[(2)] = null);

(statearr_18936_20189[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18933 === (1))){
var state_18932__$1 = state_18932;
var statearr_18937_20190 = state_18932__$1;
(statearr_18937_20190[(2)] = null);

(statearr_18937_20190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18933 === (4))){
var inst_18873 = (state_18932[(13)]);
var inst_18873__$1 = (state_18932[(2)]);
var inst_18874 = (inst_18873__$1 == null);
var state_18932__$1 = (function (){var statearr_18938 = state_18932;
(statearr_18938[(13)] = inst_18873__$1);

return statearr_18938;
})();
if(cljs.core.truth_(inst_18874)){
var statearr_18939_20191 = state_18932__$1;
(statearr_18939_20191[(1)] = (5));

} else {
var statearr_18940_20192 = state_18932__$1;
(statearr_18940_20192[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18933 === (15))){
var state_18932__$1 = state_18932;
var statearr_18944_20193 = state_18932__$1;
(statearr_18944_20193[(2)] = null);

(statearr_18944_20193[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18933 === (21))){
var state_18932__$1 = state_18932;
var statearr_18949_20194 = state_18932__$1;
(statearr_18949_20194[(2)] = null);

(statearr_18949_20194[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18933 === (13))){
var inst_18885 = (state_18932[(9)]);
var inst_18884 = (state_18932[(10)]);
var inst_18886 = (state_18932[(11)]);
var inst_18887 = (state_18932[(12)]);
var inst_18894 = (state_18932[(2)]);
var inst_18895 = (inst_18887 + (1));
var tmp18941 = inst_18885;
var tmp18942 = inst_18884;
var tmp18943 = inst_18886;
var inst_18884__$1 = tmp18942;
var inst_18885__$1 = tmp18941;
var inst_18886__$1 = tmp18943;
var inst_18887__$1 = inst_18895;
var state_18932__$1 = (function (){var statearr_18950 = state_18932;
(statearr_18950[(14)] = inst_18894);

(statearr_18950[(9)] = inst_18885__$1);

(statearr_18950[(10)] = inst_18884__$1);

(statearr_18950[(11)] = inst_18886__$1);

(statearr_18950[(12)] = inst_18887__$1);

return statearr_18950;
})();
var statearr_18951_20195 = state_18932__$1;
(statearr_18951_20195[(2)] = null);

(statearr_18951_20195[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18933 === (22))){
var state_18932__$1 = state_18932;
var statearr_18955_20197 = state_18932__$1;
(statearr_18955_20197[(2)] = null);

(statearr_18955_20197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18933 === (6))){
var inst_18873 = (state_18932[(13)]);
var inst_18882 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18873) : f.call(null,inst_18873));
var inst_18883 = cljs.core.seq(inst_18882);
var inst_18884 = inst_18883;
var inst_18885 = null;
var inst_18886 = (0);
var inst_18887 = (0);
var state_18932__$1 = (function (){var statearr_18956 = state_18932;
(statearr_18956[(9)] = inst_18885);

(statearr_18956[(10)] = inst_18884);

(statearr_18956[(11)] = inst_18886);

(statearr_18956[(12)] = inst_18887);

return statearr_18956;
})();
var statearr_18957_20205 = state_18932__$1;
(statearr_18957_20205[(2)] = null);

(statearr_18957_20205[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18933 === (17))){
var inst_18898 = (state_18932[(7)]);
var inst_18902 = cljs.core.chunk_first(inst_18898);
var inst_18903 = cljs.core.chunk_rest(inst_18898);
var inst_18904 = cljs.core.count(inst_18902);
var inst_18884 = inst_18903;
var inst_18885 = inst_18902;
var inst_18886 = inst_18904;
var inst_18887 = (0);
var state_18932__$1 = (function (){var statearr_18958 = state_18932;
(statearr_18958[(9)] = inst_18885);

(statearr_18958[(10)] = inst_18884);

(statearr_18958[(11)] = inst_18886);

(statearr_18958[(12)] = inst_18887);

return statearr_18958;
})();
var statearr_18959_20206 = state_18932__$1;
(statearr_18959_20206[(2)] = null);

(statearr_18959_20206[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18933 === (3))){
var inst_18930 = (state_18932[(2)]);
var state_18932__$1 = state_18932;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18932__$1,inst_18930);
} else {
if((state_val_18933 === (12))){
var inst_18918 = (state_18932[(2)]);
var state_18932__$1 = state_18932;
var statearr_18960_20207 = state_18932__$1;
(statearr_18960_20207[(2)] = inst_18918);

(statearr_18960_20207[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18933 === (2))){
var state_18932__$1 = state_18932;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18932__$1,(4),in$);
} else {
if((state_val_18933 === (23))){
var inst_18926 = (state_18932[(2)]);
var state_18932__$1 = state_18932;
var statearr_18961_20208 = state_18932__$1;
(statearr_18961_20208[(2)] = inst_18926);

(statearr_18961_20208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18933 === (19))){
var inst_18913 = (state_18932[(2)]);
var state_18932__$1 = state_18932;
var statearr_18962_20209 = state_18932__$1;
(statearr_18962_20209[(2)] = inst_18913);

(statearr_18962_20209[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18933 === (11))){
var inst_18898 = (state_18932[(7)]);
var inst_18884 = (state_18932[(10)]);
var inst_18898__$1 = cljs.core.seq(inst_18884);
var state_18932__$1 = (function (){var statearr_18963 = state_18932;
(statearr_18963[(7)] = inst_18898__$1);

return statearr_18963;
})();
if(inst_18898__$1){
var statearr_18964_20210 = state_18932__$1;
(statearr_18964_20210[(1)] = (14));

} else {
var statearr_18965_20211 = state_18932__$1;
(statearr_18965_20211[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18933 === (9))){
var inst_18920 = (state_18932[(2)]);
var inst_18921 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_18932__$1 = (function (){var statearr_18966 = state_18932;
(statearr_18966[(15)] = inst_18920);

return statearr_18966;
})();
if(cljs.core.truth_(inst_18921)){
var statearr_18967_20212 = state_18932__$1;
(statearr_18967_20212[(1)] = (21));

} else {
var statearr_18968_20213 = state_18932__$1;
(statearr_18968_20213[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18933 === (5))){
var inst_18876 = cljs.core.async.close_BANG_(out);
var state_18932__$1 = state_18932;
var statearr_18969_20214 = state_18932__$1;
(statearr_18969_20214[(2)] = inst_18876);

(statearr_18969_20214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18933 === (14))){
var inst_18898 = (state_18932[(7)]);
var inst_18900 = cljs.core.chunked_seq_QMARK_(inst_18898);
var state_18932__$1 = state_18932;
if(inst_18900){
var statearr_18970_20215 = state_18932__$1;
(statearr_18970_20215[(1)] = (17));

} else {
var statearr_18971_20216 = state_18932__$1;
(statearr_18971_20216[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18933 === (16))){
var inst_18916 = (state_18932[(2)]);
var state_18932__$1 = state_18932;
var statearr_18972_20217 = state_18932__$1;
(statearr_18972_20217[(2)] = inst_18916);

(statearr_18972_20217[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18933 === (10))){
var inst_18885 = (state_18932[(9)]);
var inst_18887 = (state_18932[(12)]);
var inst_18892 = cljs.core._nth(inst_18885,inst_18887);
var state_18932__$1 = state_18932;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18932__$1,(13),out,inst_18892);
} else {
if((state_val_18933 === (18))){
var inst_18898 = (state_18932[(7)]);
var inst_18907 = cljs.core.first(inst_18898);
var state_18932__$1 = state_18932;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18932__$1,(20),out,inst_18907);
} else {
if((state_val_18933 === (8))){
var inst_18886 = (state_18932[(11)]);
var inst_18887 = (state_18932[(12)]);
var inst_18889 = (inst_18887 < inst_18886);
var inst_18890 = inst_18889;
var state_18932__$1 = state_18932;
if(cljs.core.truth_(inst_18890)){
var statearr_18980_20218 = state_18932__$1;
(statearr_18980_20218[(1)] = (10));

} else {
var statearr_18981_20219 = state_18932__$1;
(statearr_18981_20219[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__14239__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14239__auto____0 = (function (){
var statearr_18982 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18982[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14239__auto__);

(statearr_18982[(1)] = (1));

return statearr_18982;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14239__auto____1 = (function (state_18932){
while(true){
var ret_value__14240__auto__ = (function (){try{while(true){
var result__14241__auto__ = switch__14238__auto__(state_18932);
if(cljs.core.keyword_identical_QMARK_(result__14241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14241__auto__;
}
break;
}
}catch (e18983){var ex__14242__auto__ = e18983;
var statearr_18984_20220 = state_18932;
(statearr_18984_20220[(2)] = ex__14242__auto__);


if(cljs.core.seq((state_18932[(4)]))){
var statearr_18985_20221 = state_18932;
(statearr_18985_20221[(1)] = cljs.core.first((state_18932[(4)])));

} else {
throw ex__14242__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20222 = state_18932;
state_18932 = G__20222;
continue;
} else {
return ret_value__14240__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14239__auto__ = function(state_18932){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14239__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14239__auto____1.call(this,state_18932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14239__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14239__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14239__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14239__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14239__auto__;
})()
})();
var state__14539__auto__ = (function (){var statearr_18986 = f__14538__auto__();
(statearr_18986[(6)] = c__14537__auto__);

return statearr_18986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14539__auto__);
}));

return c__14537__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__18988 = arguments.length;
switch (G__18988) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__18990 = arguments.length;
switch (G__18990) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__18992 = arguments.length;
switch (G__18992) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14537__auto___20227 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14538__auto__ = (function (){var switch__14238__auto__ = (function (state_19016){
var state_val_19017 = (state_19016[(1)]);
if((state_val_19017 === (7))){
var inst_19011 = (state_19016[(2)]);
var state_19016__$1 = state_19016;
var statearr_19025_20228 = state_19016__$1;
(statearr_19025_20228[(2)] = inst_19011);

(statearr_19025_20228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19017 === (1))){
var inst_18993 = null;
var state_19016__$1 = (function (){var statearr_19027 = state_19016;
(statearr_19027[(7)] = inst_18993);

return statearr_19027;
})();
var statearr_19028_20233 = state_19016__$1;
(statearr_19028_20233[(2)] = null);

(statearr_19028_20233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19017 === (4))){
var inst_18996 = (state_19016[(8)]);
var inst_18996__$1 = (state_19016[(2)]);
var inst_18997 = (inst_18996__$1 == null);
var inst_18998 = cljs.core.not(inst_18997);
var state_19016__$1 = (function (){var statearr_19029 = state_19016;
(statearr_19029[(8)] = inst_18996__$1);

return statearr_19029;
})();
if(inst_18998){
var statearr_19030_20234 = state_19016__$1;
(statearr_19030_20234[(1)] = (5));

} else {
var statearr_19031_20235 = state_19016__$1;
(statearr_19031_20235[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19017 === (6))){
var state_19016__$1 = state_19016;
var statearr_19032_20239 = state_19016__$1;
(statearr_19032_20239[(2)] = null);

(statearr_19032_20239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19017 === (3))){
var inst_19013 = (state_19016[(2)]);
var inst_19014 = cljs.core.async.close_BANG_(out);
var state_19016__$1 = (function (){var statearr_19033 = state_19016;
(statearr_19033[(9)] = inst_19013);

return statearr_19033;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19016__$1,inst_19014);
} else {
if((state_val_19017 === (2))){
var state_19016__$1 = state_19016;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19016__$1,(4),ch);
} else {
if((state_val_19017 === (11))){
var inst_18996 = (state_19016[(8)]);
var inst_19005 = (state_19016[(2)]);
var inst_18993 = inst_18996;
var state_19016__$1 = (function (){var statearr_19034 = state_19016;
(statearr_19034[(10)] = inst_19005);

(statearr_19034[(7)] = inst_18993);

return statearr_19034;
})();
var statearr_19042_20240 = state_19016__$1;
(statearr_19042_20240[(2)] = null);

(statearr_19042_20240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19017 === (9))){
var inst_18996 = (state_19016[(8)]);
var state_19016__$1 = state_19016;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19016__$1,(11),out,inst_18996);
} else {
if((state_val_19017 === (5))){
var inst_18996 = (state_19016[(8)]);
var inst_18993 = (state_19016[(7)]);
var inst_19000 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18996,inst_18993);
var state_19016__$1 = state_19016;
if(inst_19000){
var statearr_19044_20241 = state_19016__$1;
(statearr_19044_20241[(1)] = (8));

} else {
var statearr_19045_20242 = state_19016__$1;
(statearr_19045_20242[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19017 === (10))){
var inst_19008 = (state_19016[(2)]);
var state_19016__$1 = state_19016;
var statearr_19050_20243 = state_19016__$1;
(statearr_19050_20243[(2)] = inst_19008);

(statearr_19050_20243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19017 === (8))){
var inst_18993 = (state_19016[(7)]);
var tmp19043 = inst_18993;
var inst_18993__$1 = tmp19043;
var state_19016__$1 = (function (){var statearr_19059 = state_19016;
(statearr_19059[(7)] = inst_18993__$1);

return statearr_19059;
})();
var statearr_19068_20244 = state_19016__$1;
(statearr_19068_20244[(2)] = null);

(statearr_19068_20244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__14239__auto__ = null;
var cljs$core$async$state_machine__14239__auto____0 = (function (){
var statearr_19098 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19098[(0)] = cljs$core$async$state_machine__14239__auto__);

(statearr_19098[(1)] = (1));

return statearr_19098;
});
var cljs$core$async$state_machine__14239__auto____1 = (function (state_19016){
while(true){
var ret_value__14240__auto__ = (function (){try{while(true){
var result__14241__auto__ = switch__14238__auto__(state_19016);
if(cljs.core.keyword_identical_QMARK_(result__14241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14241__auto__;
}
break;
}
}catch (e19099){var ex__14242__auto__ = e19099;
var statearr_19100_20245 = state_19016;
(statearr_19100_20245[(2)] = ex__14242__auto__);


if(cljs.core.seq((state_19016[(4)]))){
var statearr_19101_20249 = state_19016;
(statearr_19101_20249[(1)] = cljs.core.first((state_19016[(4)])));

} else {
throw ex__14242__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20250 = state_19016;
state_19016 = G__20250;
continue;
} else {
return ret_value__14240__auto__;
}
break;
}
});
cljs$core$async$state_machine__14239__auto__ = function(state_19016){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14239__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14239__auto____1.call(this,state_19016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14239__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14239__auto____0;
cljs$core$async$state_machine__14239__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14239__auto____1;
return cljs$core$async$state_machine__14239__auto__;
})()
})();
var state__14539__auto__ = (function (){var statearr_19102 = f__14538__auto__();
(statearr_19102[(6)] = c__14537__auto___20227);

return statearr_19102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14539__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__19104 = arguments.length;
switch (G__19104) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14537__auto___20255 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14538__auto__ = (function (){var switch__14238__auto__ = (function (state_19156){
var state_val_19157 = (state_19156[(1)]);
if((state_val_19157 === (7))){
var inst_19152 = (state_19156[(2)]);
var state_19156__$1 = state_19156;
var statearr_19162_20256 = state_19156__$1;
(statearr_19162_20256[(2)] = inst_19152);

(statearr_19162_20256[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19157 === (1))){
var inst_19116 = (new Array(n));
var inst_19119 = inst_19116;
var inst_19120 = (0);
var state_19156__$1 = (function (){var statearr_19164 = state_19156;
(statearr_19164[(7)] = inst_19120);

(statearr_19164[(8)] = inst_19119);

return statearr_19164;
})();
var statearr_19165_20257 = state_19156__$1;
(statearr_19165_20257[(2)] = null);

(statearr_19165_20257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19157 === (4))){
var inst_19123 = (state_19156[(9)]);
var inst_19123__$1 = (state_19156[(2)]);
var inst_19124 = (inst_19123__$1 == null);
var inst_19125 = cljs.core.not(inst_19124);
var state_19156__$1 = (function (){var statearr_19166 = state_19156;
(statearr_19166[(9)] = inst_19123__$1);

return statearr_19166;
})();
if(inst_19125){
var statearr_19167_20258 = state_19156__$1;
(statearr_19167_20258[(1)] = (5));

} else {
var statearr_19168_20259 = state_19156__$1;
(statearr_19168_20259[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19157 === (15))){
var inst_19146 = (state_19156[(2)]);
var state_19156__$1 = state_19156;
var statearr_19171_20263 = state_19156__$1;
(statearr_19171_20263[(2)] = inst_19146);

(statearr_19171_20263[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19157 === (13))){
var state_19156__$1 = state_19156;
var statearr_19173_20264 = state_19156__$1;
(statearr_19173_20264[(2)] = null);

(statearr_19173_20264[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19157 === (6))){
var inst_19120 = (state_19156[(7)]);
var inst_19142 = (inst_19120 > (0));
var state_19156__$1 = state_19156;
if(cljs.core.truth_(inst_19142)){
var statearr_19175_20265 = state_19156__$1;
(statearr_19175_20265[(1)] = (12));

} else {
var statearr_19176_20266 = state_19156__$1;
(statearr_19176_20266[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19157 === (3))){
var inst_19154 = (state_19156[(2)]);
var state_19156__$1 = state_19156;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19156__$1,inst_19154);
} else {
if((state_val_19157 === (12))){
var inst_19119 = (state_19156[(8)]);
var inst_19144 = cljs.core.vec(inst_19119);
var state_19156__$1 = state_19156;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19156__$1,(15),out,inst_19144);
} else {
if((state_val_19157 === (2))){
var state_19156__$1 = state_19156;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19156__$1,(4),ch);
} else {
if((state_val_19157 === (11))){
var inst_19135 = (state_19156[(2)]);
var inst_19136 = (new Array(n));
var inst_19119 = inst_19136;
var inst_19120 = (0);
var state_19156__$1 = (function (){var statearr_19177 = state_19156;
(statearr_19177[(7)] = inst_19120);

(statearr_19177[(10)] = inst_19135);

(statearr_19177[(8)] = inst_19119);

return statearr_19177;
})();
var statearr_19178_20267 = state_19156__$1;
(statearr_19178_20267[(2)] = null);

(statearr_19178_20267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19157 === (9))){
var inst_19119 = (state_19156[(8)]);
var inst_19133 = cljs.core.vec(inst_19119);
var state_19156__$1 = state_19156;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19156__$1,(11),out,inst_19133);
} else {
if((state_val_19157 === (5))){
var inst_19120 = (state_19156[(7)]);
var inst_19128 = (state_19156[(11)]);
var inst_19119 = (state_19156[(8)]);
var inst_19123 = (state_19156[(9)]);
var inst_19127 = (inst_19119[inst_19120] = inst_19123);
var inst_19128__$1 = (inst_19120 + (1));
var inst_19129 = (inst_19128__$1 < n);
var state_19156__$1 = (function (){var statearr_19179 = state_19156;
(statearr_19179[(11)] = inst_19128__$1);

(statearr_19179[(12)] = inst_19127);

return statearr_19179;
})();
if(cljs.core.truth_(inst_19129)){
var statearr_19180_20269 = state_19156__$1;
(statearr_19180_20269[(1)] = (8));

} else {
var statearr_19181_20270 = state_19156__$1;
(statearr_19181_20270[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19157 === (14))){
var inst_19149 = (state_19156[(2)]);
var inst_19150 = cljs.core.async.close_BANG_(out);
var state_19156__$1 = (function (){var statearr_19183 = state_19156;
(statearr_19183[(13)] = inst_19149);

return statearr_19183;
})();
var statearr_19184_20271 = state_19156__$1;
(statearr_19184_20271[(2)] = inst_19150);

(statearr_19184_20271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19157 === (10))){
var inst_19139 = (state_19156[(2)]);
var state_19156__$1 = state_19156;
var statearr_19185_20272 = state_19156__$1;
(statearr_19185_20272[(2)] = inst_19139);

(statearr_19185_20272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19157 === (8))){
var inst_19128 = (state_19156[(11)]);
var inst_19119 = (state_19156[(8)]);
var tmp19182 = inst_19119;
var inst_19119__$1 = tmp19182;
var inst_19120 = inst_19128;
var state_19156__$1 = (function (){var statearr_19186 = state_19156;
(statearr_19186[(7)] = inst_19120);

(statearr_19186[(8)] = inst_19119__$1);

return statearr_19186;
})();
var statearr_19187_20274 = state_19156__$1;
(statearr_19187_20274[(2)] = null);

(statearr_19187_20274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__14239__auto__ = null;
var cljs$core$async$state_machine__14239__auto____0 = (function (){
var statearr_19266 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19266[(0)] = cljs$core$async$state_machine__14239__auto__);

(statearr_19266[(1)] = (1));

return statearr_19266;
});
var cljs$core$async$state_machine__14239__auto____1 = (function (state_19156){
while(true){
var ret_value__14240__auto__ = (function (){try{while(true){
var result__14241__auto__ = switch__14238__auto__(state_19156);
if(cljs.core.keyword_identical_QMARK_(result__14241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14241__auto__;
}
break;
}
}catch (e19267){var ex__14242__auto__ = e19267;
var statearr_19268_20276 = state_19156;
(statearr_19268_20276[(2)] = ex__14242__auto__);


if(cljs.core.seq((state_19156[(4)]))){
var statearr_19269_20277 = state_19156;
(statearr_19269_20277[(1)] = cljs.core.first((state_19156[(4)])));

} else {
throw ex__14242__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20278 = state_19156;
state_19156 = G__20278;
continue;
} else {
return ret_value__14240__auto__;
}
break;
}
});
cljs$core$async$state_machine__14239__auto__ = function(state_19156){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14239__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14239__auto____1.call(this,state_19156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14239__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14239__auto____0;
cljs$core$async$state_machine__14239__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14239__auto____1;
return cljs$core$async$state_machine__14239__auto__;
})()
})();
var state__14539__auto__ = (function (){var statearr_19271 = f__14538__auto__();
(statearr_19271[(6)] = c__14537__auto___20255);

return statearr_19271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14539__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__19276 = arguments.length;
switch (G__19276) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14537__auto___20280 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14538__auto__ = (function (){var switch__14238__auto__ = (function (state_19330){
var state_val_19331 = (state_19330[(1)]);
if((state_val_19331 === (7))){
var inst_19326 = (state_19330[(2)]);
var state_19330__$1 = state_19330;
var statearr_19332_20282 = state_19330__$1;
(statearr_19332_20282[(2)] = inst_19326);

(statearr_19332_20282[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19331 === (1))){
var inst_19277 = [];
var inst_19279 = inst_19277;
var inst_19280 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19330__$1 = (function (){var statearr_19333 = state_19330;
(statearr_19333[(7)] = inst_19279);

(statearr_19333[(8)] = inst_19280);

return statearr_19333;
})();
var statearr_19334_20283 = state_19330__$1;
(statearr_19334_20283[(2)] = null);

(statearr_19334_20283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19331 === (4))){
var inst_19283 = (state_19330[(9)]);
var inst_19283__$1 = (state_19330[(2)]);
var inst_19284 = (inst_19283__$1 == null);
var inst_19285 = cljs.core.not(inst_19284);
var state_19330__$1 = (function (){var statearr_19335 = state_19330;
(statearr_19335[(9)] = inst_19283__$1);

return statearr_19335;
})();
if(inst_19285){
var statearr_19336_20284 = state_19330__$1;
(statearr_19336_20284[(1)] = (5));

} else {
var statearr_19337_20285 = state_19330__$1;
(statearr_19337_20285[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19331 === (15))){
var inst_19279 = (state_19330[(7)]);
var inst_19318 = cljs.core.vec(inst_19279);
var state_19330__$1 = state_19330;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19330__$1,(18),out,inst_19318);
} else {
if((state_val_19331 === (13))){
var inst_19313 = (state_19330[(2)]);
var state_19330__$1 = state_19330;
var statearr_19343_20286 = state_19330__$1;
(statearr_19343_20286[(2)] = inst_19313);

(statearr_19343_20286[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19331 === (6))){
var inst_19279 = (state_19330[(7)]);
var inst_19315 = inst_19279.length;
var inst_19316 = (inst_19315 > (0));
var state_19330__$1 = state_19330;
if(cljs.core.truth_(inst_19316)){
var statearr_19344_20287 = state_19330__$1;
(statearr_19344_20287[(1)] = (15));

} else {
var statearr_19345_20288 = state_19330__$1;
(statearr_19345_20288[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19331 === (17))){
var inst_19323 = (state_19330[(2)]);
var inst_19324 = cljs.core.async.close_BANG_(out);
var state_19330__$1 = (function (){var statearr_19346 = state_19330;
(statearr_19346[(10)] = inst_19323);

return statearr_19346;
})();
var statearr_19347_20289 = state_19330__$1;
(statearr_19347_20289[(2)] = inst_19324);

(statearr_19347_20289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19331 === (3))){
var inst_19328 = (state_19330[(2)]);
var state_19330__$1 = state_19330;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19330__$1,inst_19328);
} else {
if((state_val_19331 === (12))){
var inst_19279 = (state_19330[(7)]);
var inst_19306 = cljs.core.vec(inst_19279);
var state_19330__$1 = state_19330;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19330__$1,(14),out,inst_19306);
} else {
if((state_val_19331 === (2))){
var state_19330__$1 = state_19330;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19330__$1,(4),ch);
} else {
if((state_val_19331 === (11))){
var inst_19279 = (state_19330[(7)]);
var inst_19283 = (state_19330[(9)]);
var inst_19291 = (state_19330[(11)]);
var inst_19299 = inst_19279.push(inst_19283);
var tmp19348 = inst_19279;
var inst_19279__$1 = tmp19348;
var inst_19280 = inst_19291;
var state_19330__$1 = (function (){var statearr_19359 = state_19330;
(statearr_19359[(12)] = inst_19299);

(statearr_19359[(7)] = inst_19279__$1);

(statearr_19359[(8)] = inst_19280);

return statearr_19359;
})();
var statearr_19360_20290 = state_19330__$1;
(statearr_19360_20290[(2)] = null);

(statearr_19360_20290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19331 === (9))){
var inst_19280 = (state_19330[(8)]);
var inst_19295 = cljs.core.keyword_identical_QMARK_(inst_19280,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_19330__$1 = state_19330;
var statearr_19375_20294 = state_19330__$1;
(statearr_19375_20294[(2)] = inst_19295);

(statearr_19375_20294[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19331 === (5))){
var inst_19292 = (state_19330[(13)]);
var inst_19280 = (state_19330[(8)]);
var inst_19283 = (state_19330[(9)]);
var inst_19291 = (state_19330[(11)]);
var inst_19291__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19283) : f.call(null,inst_19283));
var inst_19292__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19291__$1,inst_19280);
var state_19330__$1 = (function (){var statearr_19384 = state_19330;
(statearr_19384[(13)] = inst_19292__$1);

(statearr_19384[(11)] = inst_19291__$1);

return statearr_19384;
})();
if(inst_19292__$1){
var statearr_19389_20296 = state_19330__$1;
(statearr_19389_20296[(1)] = (8));

} else {
var statearr_19390_20297 = state_19330__$1;
(statearr_19390_20297[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19331 === (14))){
var inst_19283 = (state_19330[(9)]);
var inst_19291 = (state_19330[(11)]);
var inst_19308 = (state_19330[(2)]);
var inst_19309 = [];
var inst_19310 = inst_19309.push(inst_19283);
var inst_19279 = inst_19309;
var inst_19280 = inst_19291;
var state_19330__$1 = (function (){var statearr_19395 = state_19330;
(statearr_19395[(14)] = inst_19310);

(statearr_19395[(7)] = inst_19279);

(statearr_19395[(15)] = inst_19308);

(statearr_19395[(8)] = inst_19280);

return statearr_19395;
})();
var statearr_19396_20300 = state_19330__$1;
(statearr_19396_20300[(2)] = null);

(statearr_19396_20300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19331 === (16))){
var state_19330__$1 = state_19330;
var statearr_19402_20302 = state_19330__$1;
(statearr_19402_20302[(2)] = null);

(statearr_19402_20302[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19331 === (10))){
var inst_19297 = (state_19330[(2)]);
var state_19330__$1 = state_19330;
if(cljs.core.truth_(inst_19297)){
var statearr_19407_20303 = state_19330__$1;
(statearr_19407_20303[(1)] = (11));

} else {
var statearr_19408_20304 = state_19330__$1;
(statearr_19408_20304[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19331 === (18))){
var inst_19320 = (state_19330[(2)]);
var state_19330__$1 = state_19330;
var statearr_19409_20306 = state_19330__$1;
(statearr_19409_20306[(2)] = inst_19320);

(statearr_19409_20306[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19331 === (8))){
var inst_19292 = (state_19330[(13)]);
var state_19330__$1 = state_19330;
var statearr_19410_20307 = state_19330__$1;
(statearr_19410_20307[(2)] = inst_19292);

(statearr_19410_20307[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__14239__auto__ = null;
var cljs$core$async$state_machine__14239__auto____0 = (function (){
var statearr_19505 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19505[(0)] = cljs$core$async$state_machine__14239__auto__);

(statearr_19505[(1)] = (1));

return statearr_19505;
});
var cljs$core$async$state_machine__14239__auto____1 = (function (state_19330){
while(true){
var ret_value__14240__auto__ = (function (){try{while(true){
var result__14241__auto__ = switch__14238__auto__(state_19330);
if(cljs.core.keyword_identical_QMARK_(result__14241__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14241__auto__;
}
break;
}
}catch (e19506){var ex__14242__auto__ = e19506;
var statearr_19507_20310 = state_19330;
(statearr_19507_20310[(2)] = ex__14242__auto__);


if(cljs.core.seq((state_19330[(4)]))){
var statearr_19508_20315 = state_19330;
(statearr_19508_20315[(1)] = cljs.core.first((state_19330[(4)])));

} else {
throw ex__14242__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14240__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20316 = state_19330;
state_19330 = G__20316;
continue;
} else {
return ret_value__14240__auto__;
}
break;
}
});
cljs$core$async$state_machine__14239__auto__ = function(state_19330){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14239__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14239__auto____1.call(this,state_19330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14239__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14239__auto____0;
cljs$core$async$state_machine__14239__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14239__auto____1;
return cljs$core$async$state_machine__14239__auto__;
})()
})();
var state__14539__auto__ = (function (){var statearr_19510 = f__14538__auto__();
(statearr_19510[(6)] = c__14537__auto___20280);

return statearr_19510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14539__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
