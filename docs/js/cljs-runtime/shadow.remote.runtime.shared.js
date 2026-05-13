goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__14757){
var map__14758 = p__14757;
var map__14758__$1 = cljs.core.__destructure_map(map__14758);
var runtime = map__14758__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14758__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_14990 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_14990)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__14764 = runtime;
var G__14765 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_14990);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__14764,G__14765) : shadow.remote.runtime.shared.process.call(null,G__14764,G__14765));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__14766,res){
var map__14767 = p__14766;
var map__14767__$1 = cljs.core.__destructure_map(map__14767);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14767__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14767__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__14768 = res;
var G__14768__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14768,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__14768);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14768__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__14768__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__14770 = arguments.length;
switch (G__14770) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__14771,msg,handlers,timeout_after_ms){
var map__14772 = p__14771;
var map__14772__$1 = cljs.core.__destructure_map(map__14772);
var runtime = map__14772__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14772__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___15025 = arguments.length;
var i__5727__auto___15026 = (0);
while(true){
if((i__5727__auto___15026 < len__5726__auto___15025)){
args__5732__auto__.push((arguments[i__5727__auto___15026]));

var G__15027 = (i__5727__auto___15026 + (1));
i__5727__auto___15026 = G__15027;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__14854,ev,args){
var map__14855 = p__14854;
var map__14855__$1 = cljs.core.__destructure_map(map__14855);
var runtime = map__14855__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14855__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__14856 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14859 = null;
var count__14860 = (0);
var i__14861 = (0);
while(true){
if((i__14861 < count__14860)){
var ext = chunk__14859.cljs$core$IIndexed$_nth$arity$2(null,i__14861);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__15029 = seq__14856;
var G__15030 = chunk__14859;
var G__15031 = count__14860;
var G__15032 = (i__14861 + (1));
seq__14856 = G__15029;
chunk__14859 = G__15030;
count__14860 = G__15031;
i__14861 = G__15032;
continue;
} else {
var G__15033 = seq__14856;
var G__15034 = chunk__14859;
var G__15035 = count__14860;
var G__15036 = (i__14861 + (1));
seq__14856 = G__15033;
chunk__14859 = G__15034;
count__14860 = G__15035;
i__14861 = G__15036;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14856);
if(temp__5804__auto__){
var seq__14856__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14856__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14856__$1);
var G__15037 = cljs.core.chunk_rest(seq__14856__$1);
var G__15038 = c__5525__auto__;
var G__15039 = cljs.core.count(c__5525__auto__);
var G__15040 = (0);
seq__14856 = G__15037;
chunk__14859 = G__15038;
count__14860 = G__15039;
i__14861 = G__15040;
continue;
} else {
var ext = cljs.core.first(seq__14856__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__15041 = cljs.core.next(seq__14856__$1);
var G__15042 = null;
var G__15043 = (0);
var G__15044 = (0);
seq__14856 = G__15041;
chunk__14859 = G__15042;
count__14860 = G__15043;
i__14861 = G__15044;
continue;
} else {
var G__15045 = cljs.core.next(seq__14856__$1);
var G__15046 = null;
var G__15047 = (0);
var G__15048 = (0);
seq__14856 = G__15045;
chunk__14859 = G__15046;
count__14860 = G__15047;
i__14861 = G__15048;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq14773){
var G__14774 = cljs.core.first(seq14773);
var seq14773__$1 = cljs.core.next(seq14773);
var G__14775 = cljs.core.first(seq14773__$1);
var seq14773__$2 = cljs.core.next(seq14773__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14774,G__14775,seq14773__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__14864,p__14865){
var map__14866 = p__14864;
var map__14866__$1 = cljs.core.__destructure_map(map__14866);
var runtime = map__14866__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14866__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14867 = p__14865;
var map__14867__$1 = cljs.core.__destructure_map(map__14867);
var msg = map__14867__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14867__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__14869 = cljs.core.deref(state_ref);
var map__14869__$1 = cljs.core.__destructure_map(map__14869);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14869__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14869__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__14871,msg){
var map__14872 = p__14871;
var map__14872__$1 = cljs.core.__destructure_map(map__14872);
var runtime = map__14872__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14872__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__14873,key,p__14874){
var map__14875 = p__14873;
var map__14875__$1 = cljs.core.__destructure_map(map__14875);
var state = map__14875__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14875__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__14876 = p__14874;
var map__14876__$1 = cljs.core.__destructure_map(map__14876);
var spec = map__14876__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14876__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14876__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__14879,key,spec){
var map__14880 = p__14879;
var map__14880__$1 = cljs.core.__destructure_map(map__14880);
var runtime = map__14880__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14880__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5808__auto___15059 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5808__auto___15059 == null)){
} else {
var on_welcome_15060 = temp__5808__auto___15059;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_15060.cljs$core$IFn$_invoke$arity$0 ? on_welcome_15060.cljs$core$IFn$_invoke$arity$0() : on_welcome_15060.call(null));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__14881_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__14881_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__14882_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__14882_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__14883_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__14883_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__14884_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__14884_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__14885_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__14885_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__14934,key){
var map__14937 = p__14934;
var map__14937__$1 = cljs.core.__destructure_map(map__14937);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14937__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__14940,msg){
var map__14941 = p__14940;
var map__14941__$1 = cljs.core.__destructure_map(map__14941);
var runtime = map__14941__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14941__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__14942,p__14943){
var map__14944 = p__14942;
var map__14944__$1 = cljs.core.__destructure_map(map__14944);
var runtime = map__14944__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14944__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14945 = p__14943;
var map__14945__$1 = cljs.core.__destructure_map(map__14945);
var msg = map__14945__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14945__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14945__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__14968 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14970 = null;
var count__14971 = (0);
var i__14972 = (0);
while(true){
if((i__14972 < count__14971)){
var map__14978 = chunk__14970.cljs$core$IIndexed$_nth$arity$2(null,i__14972);
var map__14978__$1 = cljs.core.__destructure_map(map__14978);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14978__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__15075 = seq__14968;
var G__15076 = chunk__14970;
var G__15077 = count__14971;
var G__15078 = (i__14972 + (1));
seq__14968 = G__15075;
chunk__14970 = G__15076;
count__14971 = G__15077;
i__14972 = G__15078;
continue;
} else {
var G__15079 = seq__14968;
var G__15080 = chunk__14970;
var G__15081 = count__14971;
var G__15082 = (i__14972 + (1));
seq__14968 = G__15079;
chunk__14970 = G__15080;
count__14971 = G__15081;
i__14972 = G__15082;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14968);
if(temp__5804__auto__){
var seq__14968__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14968__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14968__$1);
var G__15084 = cljs.core.chunk_rest(seq__14968__$1);
var G__15085 = c__5525__auto__;
var G__15086 = cljs.core.count(c__5525__auto__);
var G__15087 = (0);
seq__14968 = G__15084;
chunk__14970 = G__15085;
count__14971 = G__15086;
i__14972 = G__15087;
continue;
} else {
var map__14981 = cljs.core.first(seq__14968__$1);
var map__14981__$1 = cljs.core.__destructure_map(map__14981);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14981__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__15088 = cljs.core.next(seq__14968__$1);
var G__15089 = null;
var G__15090 = (0);
var G__15091 = (0);
seq__14968 = G__15088;
chunk__14970 = G__15089;
count__14971 = G__15090;
i__14972 = G__15091;
continue;
} else {
var G__15092 = cljs.core.next(seq__14968__$1);
var G__15093 = null;
var G__15094 = (0);
var G__15095 = (0);
seq__14968 = G__15092;
chunk__14970 = G__15093;
count__14971 = G__15094;
i__14972 = G__15095;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
