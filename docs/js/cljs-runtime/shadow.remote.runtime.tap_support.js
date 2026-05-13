goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__19953,p__19954){
var map__19955 = p__19953;
var map__19955__$1 = cljs.core.__destructure_map(map__19955);
var svc = map__19955__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19955__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19955__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19955__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__19956 = p__19954;
var map__19956__$1 = cljs.core.__destructure_map(map__19956);
var msg = map__19956__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19956__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19956__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19956__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19956__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__20015,p__20016){
var map__20017 = p__20015;
var map__20017__$1 = cljs.core.__destructure_map(map__20017);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20017__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__20018 = p__20016;
var map__20018__$1 = cljs.core.__destructure_map(map__20018);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20018__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__20019,p__20020){
var map__20022 = p__20019;
var map__20022__$1 = cljs.core.__destructure_map(map__20022);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20022__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20022__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__20023 = p__20020;
var map__20023__$1 = cljs.core.__destructure_map(map__20023);
var msg = map__20023__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20023__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__20098,tid){
var map__20099 = p__20098;
var map__20099__$1 = cljs.core.__destructure_map(map__20099);
var svc = map__20099__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20099__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__20104 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__20105 = null;
var count__20106 = (0);
var i__20107 = (0);
while(true){
if((i__20107 < count__20106)){
var vec__20114 = chunk__20105.cljs$core$IIndexed$_nth$arity$2(null,i__20107);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20114,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20114,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__20122 = seq__20104;
var G__20123 = chunk__20105;
var G__20124 = count__20106;
var G__20125 = (i__20107 + (1));
seq__20104 = G__20122;
chunk__20105 = G__20123;
count__20106 = G__20124;
i__20107 = G__20125;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20104);
if(temp__5804__auto__){
var seq__20104__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20104__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20104__$1);
var G__20126 = cljs.core.chunk_rest(seq__20104__$1);
var G__20127 = c__5525__auto__;
var G__20128 = cljs.core.count(c__5525__auto__);
var G__20129 = (0);
seq__20104 = G__20126;
chunk__20105 = G__20127;
count__20106 = G__20128;
i__20107 = G__20129;
continue;
} else {
var vec__20117 = cljs.core.first(seq__20104__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20117,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20117,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__20130 = cljs.core.next(seq__20104__$1);
var G__20131 = null;
var G__20132 = (0);
var G__20133 = (0);
seq__20104 = G__20130;
chunk__20105 = G__20131;
count__20106 = G__20132;
i__20107 = G__20133;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__20100_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__20100_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__20101_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__20101_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__20102_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__20102_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__20103_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__20103_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__20120){
var map__20121 = p__20120;
var map__20121__$1 = cljs.core.__destructure_map(map__20121);
var svc = map__20121__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20121__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20121__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
