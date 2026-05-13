goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___21274 = arguments.length;
var i__5727__auto___21275 = (0);
while(true){
if((i__5727__auto___21275 < len__5726__auto___21274)){
args__5732__auto__.push((arguments[i__5727__auto___21275]));

var G__21276 = (i__5727__auto___21275 + (1));
i__5727__auto___21275 = G__21276;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq20979){
var G__20980 = cljs.core.first(seq20979);
var seq20979__$1 = cljs.core.next(seq20979);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20980,seq20979__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__20982 = cljs.core.seq(sources);
var chunk__20983 = null;
var count__20984 = (0);
var i__20985 = (0);
while(true){
if((i__20985 < count__20984)){
var map__20992 = chunk__20983.cljs$core$IIndexed$_nth$arity$2(null,i__20985);
var map__20992__$1 = cljs.core.__destructure_map(map__20992);
var src = map__20992__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20992__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20992__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20992__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20992__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20993){var e_21277 = e20993;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21277);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21277.message)].join('')));
}

var G__21278 = seq__20982;
var G__21279 = chunk__20983;
var G__21280 = count__20984;
var G__21281 = (i__20985 + (1));
seq__20982 = G__21278;
chunk__20983 = G__21279;
count__20984 = G__21280;
i__20985 = G__21281;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20982);
if(temp__5804__auto__){
var seq__20982__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20982__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20982__$1);
var G__21282 = cljs.core.chunk_rest(seq__20982__$1);
var G__21283 = c__5525__auto__;
var G__21284 = cljs.core.count(c__5525__auto__);
var G__21285 = (0);
seq__20982 = G__21282;
chunk__20983 = G__21283;
count__20984 = G__21284;
i__20985 = G__21285;
continue;
} else {
var map__20994 = cljs.core.first(seq__20982__$1);
var map__20994__$1 = cljs.core.__destructure_map(map__20994);
var src = map__20994__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20994__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20994__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20994__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20994__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20995){var e_21286 = e20995;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21286);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21286.message)].join('')));
}

var G__21287 = cljs.core.next(seq__20982__$1);
var G__21288 = null;
var G__21289 = (0);
var G__21290 = (0);
seq__20982 = G__21287;
chunk__20983 = G__21288;
count__20984 = G__21289;
i__20985 = G__21290;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (next){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__21001 = cljs.core.seq(js_requires);
var chunk__21002 = null;
var count__21003 = (0);
var i__21004 = (0);
while(true){
if((i__21004 < count__21003)){
var js_ns = chunk__21002.cljs$core$IIndexed$_nth$arity$2(null,i__21004);
var require_str_21291 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21291);


var G__21292 = seq__21001;
var G__21293 = chunk__21002;
var G__21294 = count__21003;
var G__21295 = (i__21004 + (1));
seq__21001 = G__21292;
chunk__21002 = G__21293;
count__21003 = G__21294;
i__21004 = G__21295;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21001);
if(temp__5804__auto__){
var seq__21001__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21001__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21001__$1);
var G__21296 = cljs.core.chunk_rest(seq__21001__$1);
var G__21297 = c__5525__auto__;
var G__21298 = cljs.core.count(c__5525__auto__);
var G__21299 = (0);
seq__21001 = G__21296;
chunk__21002 = G__21297;
count__21003 = G__21298;
i__21004 = G__21299;
continue;
} else {
var js_ns = cljs.core.first(seq__21001__$1);
var require_str_21300 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21300);


var G__21301 = cljs.core.next(seq__21001__$1);
var G__21302 = null;
var G__21303 = (0);
var G__21304 = (0);
seq__21001 = G__21301;
chunk__21002 = G__21302;
count__21003 = G__21303;
i__21004 = G__21304;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__21007){
var map__21008 = p__21007;
var map__21008__$1 = cljs.core.__destructure_map(map__21008);
var msg = map__21008__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21008__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21008__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21009(s__21010){
return (new cljs.core.LazySeq(null,(function (){
var s__21010__$1 = s__21010;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__21010__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__21015 = cljs.core.first(xs__6360__auto__);
var map__21015__$1 = cljs.core.__destructure_map(map__21015);
var src = map__21015__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21015__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21015__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__21010__$1,map__21015,map__21015__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21008,map__21008__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21009_$_iter__21011(s__21012){
return (new cljs.core.LazySeq(null,((function (s__21010__$1,map__21015,map__21015__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21008,map__21008__$1,msg,info,reload_info){
return (function (){
var s__21012__$1 = s__21012;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__21012__$1);
if(temp__5804__auto____$1){
var s__21012__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21012__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__21012__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__21014 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__21013 = (0);
while(true){
if((i__21013 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__21013);
cljs.core.chunk_append(b__21014,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21305 = (i__21013 + (1));
i__21013 = G__21305;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21014),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21009_$_iter__21011(cljs.core.chunk_rest(s__21012__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21014),null);
}
} else {
var warning = cljs.core.first(s__21012__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21009_$_iter__21011(cljs.core.rest(s__21012__$2)));
}
} else {
return null;
}
break;
}
});})(s__21010__$1,map__21015,map__21015__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21008,map__21008__$1,msg,info,reload_info))
,null,null));
});})(s__21010__$1,map__21015,map__21015__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21008,map__21008__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21009(cljs.core.rest(s__21010__$1)));
} else {
var G__21306 = cljs.core.rest(s__21010__$1);
s__21010__$1 = G__21306;
continue;
}
} else {
var G__21307 = cljs.core.rest(s__21010__$1);
s__21010__$1 = G__21307;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__21018_21308 = cljs.core.seq(warnings);
var chunk__21019_21309 = null;
var count__21020_21310 = (0);
var i__21021_21311 = (0);
while(true){
if((i__21021_21311 < count__21020_21310)){
var map__21024_21312 = chunk__21019_21309.cljs$core$IIndexed$_nth$arity$2(null,i__21021_21311);
var map__21024_21313__$1 = cljs.core.__destructure_map(map__21024_21312);
var w_21314 = map__21024_21313__$1;
var msg_21315__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21024_21313__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21316 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21024_21313__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21317 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21024_21313__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21318 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21024_21313__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21318)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21316),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21317),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21315__$1)].join(''));


var G__21319 = seq__21018_21308;
var G__21320 = chunk__21019_21309;
var G__21321 = count__21020_21310;
var G__21322 = (i__21021_21311 + (1));
seq__21018_21308 = G__21319;
chunk__21019_21309 = G__21320;
count__21020_21310 = G__21321;
i__21021_21311 = G__21322;
continue;
} else {
var temp__5804__auto___21323 = cljs.core.seq(seq__21018_21308);
if(temp__5804__auto___21323){
var seq__21018_21324__$1 = temp__5804__auto___21323;
if(cljs.core.chunked_seq_QMARK_(seq__21018_21324__$1)){
var c__5525__auto___21325 = cljs.core.chunk_first(seq__21018_21324__$1);
var G__21326 = cljs.core.chunk_rest(seq__21018_21324__$1);
var G__21327 = c__5525__auto___21325;
var G__21328 = cljs.core.count(c__5525__auto___21325);
var G__21329 = (0);
seq__21018_21308 = G__21326;
chunk__21019_21309 = G__21327;
count__21020_21310 = G__21328;
i__21021_21311 = G__21329;
continue;
} else {
var map__21025_21330 = cljs.core.first(seq__21018_21324__$1);
var map__21025_21331__$1 = cljs.core.__destructure_map(map__21025_21330);
var w_21332 = map__21025_21331__$1;
var msg_21333__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21025_21331__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21334 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21025_21331__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21335 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21025_21331__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21336 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21025_21331__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21336)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21334),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21335),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21333__$1)].join(''));


var G__21337 = cljs.core.next(seq__21018_21324__$1);
var G__21338 = null;
var G__21339 = (0);
var G__21340 = (0);
seq__21018_21308 = G__21337;
chunk__21019_21309 = G__21338;
count__21020_21310 = G__21339;
i__21021_21311 = G__21340;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__21006_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__21006_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__21027 = node_uri;
G__21027.setQuery(null);

G__21027.setPath(new$);

return G__21027;
})());
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__21028){
var map__21029 = p__21028;
var map__21029__$1 = cljs.core.__destructure_map(map__21029);
var msg = map__21029__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21029__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21029__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__21030 = cljs.core.seq(updates);
var chunk__21032 = null;
var count__21033 = (0);
var i__21034 = (0);
while(true){
if((i__21034 < count__21033)){
var path = chunk__21032.cljs$core$IIndexed$_nth$arity$2(null,i__21034);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21144_21341 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21148_21342 = null;
var count__21149_21343 = (0);
var i__21150_21344 = (0);
while(true){
if((i__21150_21344 < count__21149_21343)){
var node_21345 = chunk__21148_21342.cljs$core$IIndexed$_nth$arity$2(null,i__21150_21344);
if(cljs.core.not(node_21345.shadow$old)){
var path_match_21346 = shadow.cljs.devtools.client.browser.match_paths(node_21345.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21346)){
var new_link_21347 = (function (){var G__21176 = node_21345.cloneNode(true);
G__21176.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21346),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21176;
})();
(node_21345.shadow$old = true);

(new_link_21347.onload = ((function (seq__21144_21341,chunk__21148_21342,count__21149_21343,i__21150_21344,seq__21030,chunk__21032,count__21033,i__21034,new_link_21347,path_match_21346,node_21345,path,map__21029,map__21029__$1,msg,updates,reload_info){
return (function (e){
var seq__21177_21348 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21179_21349 = null;
var count__21180_21350 = (0);
var i__21181_21351 = (0);
while(true){
if((i__21181_21351 < count__21180_21350)){
var map__21185_21352 = chunk__21179_21349.cljs$core$IIndexed$_nth$arity$2(null,i__21181_21351);
var map__21185_21353__$1 = cljs.core.__destructure_map(map__21185_21352);
var task_21354 = map__21185_21353__$1;
var fn_str_21355 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21185_21353__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21356 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21185_21353__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21357 = goog.getObjectByName(fn_str_21355,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21356)].join(''));

(fn_obj_21357.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21357.cljs$core$IFn$_invoke$arity$2(path,new_link_21347) : fn_obj_21357.call(null,path,new_link_21347));


var G__21358 = seq__21177_21348;
var G__21359 = chunk__21179_21349;
var G__21360 = count__21180_21350;
var G__21361 = (i__21181_21351 + (1));
seq__21177_21348 = G__21358;
chunk__21179_21349 = G__21359;
count__21180_21350 = G__21360;
i__21181_21351 = G__21361;
continue;
} else {
var temp__5804__auto___21362 = cljs.core.seq(seq__21177_21348);
if(temp__5804__auto___21362){
var seq__21177_21363__$1 = temp__5804__auto___21362;
if(cljs.core.chunked_seq_QMARK_(seq__21177_21363__$1)){
var c__5525__auto___21364 = cljs.core.chunk_first(seq__21177_21363__$1);
var G__21365 = cljs.core.chunk_rest(seq__21177_21363__$1);
var G__21366 = c__5525__auto___21364;
var G__21367 = cljs.core.count(c__5525__auto___21364);
var G__21368 = (0);
seq__21177_21348 = G__21365;
chunk__21179_21349 = G__21366;
count__21180_21350 = G__21367;
i__21181_21351 = G__21368;
continue;
} else {
var map__21186_21369 = cljs.core.first(seq__21177_21363__$1);
var map__21186_21370__$1 = cljs.core.__destructure_map(map__21186_21369);
var task_21371 = map__21186_21370__$1;
var fn_str_21372 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21186_21370__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21373 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21186_21370__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21374 = goog.getObjectByName(fn_str_21372,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21373)].join(''));

(fn_obj_21374.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21374.cljs$core$IFn$_invoke$arity$2(path,new_link_21347) : fn_obj_21374.call(null,path,new_link_21347));


var G__21375 = cljs.core.next(seq__21177_21363__$1);
var G__21376 = null;
var G__21377 = (0);
var G__21378 = (0);
seq__21177_21348 = G__21375;
chunk__21179_21349 = G__21376;
count__21180_21350 = G__21377;
i__21181_21351 = G__21378;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21345);
});})(seq__21144_21341,chunk__21148_21342,count__21149_21343,i__21150_21344,seq__21030,chunk__21032,count__21033,i__21034,new_link_21347,path_match_21346,node_21345,path,map__21029,map__21029__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21346], 0));

goog.dom.insertSiblingAfter(new_link_21347,node_21345);


var G__21379 = seq__21144_21341;
var G__21380 = chunk__21148_21342;
var G__21381 = count__21149_21343;
var G__21382 = (i__21150_21344 + (1));
seq__21144_21341 = G__21379;
chunk__21148_21342 = G__21380;
count__21149_21343 = G__21381;
i__21150_21344 = G__21382;
continue;
} else {
var G__21383 = seq__21144_21341;
var G__21384 = chunk__21148_21342;
var G__21385 = count__21149_21343;
var G__21386 = (i__21150_21344 + (1));
seq__21144_21341 = G__21383;
chunk__21148_21342 = G__21384;
count__21149_21343 = G__21385;
i__21150_21344 = G__21386;
continue;
}
} else {
var G__21387 = seq__21144_21341;
var G__21388 = chunk__21148_21342;
var G__21389 = count__21149_21343;
var G__21390 = (i__21150_21344 + (1));
seq__21144_21341 = G__21387;
chunk__21148_21342 = G__21388;
count__21149_21343 = G__21389;
i__21150_21344 = G__21390;
continue;
}
} else {
var temp__5804__auto___21391 = cljs.core.seq(seq__21144_21341);
if(temp__5804__auto___21391){
var seq__21144_21392__$1 = temp__5804__auto___21391;
if(cljs.core.chunked_seq_QMARK_(seq__21144_21392__$1)){
var c__5525__auto___21393 = cljs.core.chunk_first(seq__21144_21392__$1);
var G__21394 = cljs.core.chunk_rest(seq__21144_21392__$1);
var G__21395 = c__5525__auto___21393;
var G__21396 = cljs.core.count(c__5525__auto___21393);
var G__21397 = (0);
seq__21144_21341 = G__21394;
chunk__21148_21342 = G__21395;
count__21149_21343 = G__21396;
i__21150_21344 = G__21397;
continue;
} else {
var node_21398 = cljs.core.first(seq__21144_21392__$1);
if(cljs.core.not(node_21398.shadow$old)){
var path_match_21399 = shadow.cljs.devtools.client.browser.match_paths(node_21398.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21399)){
var new_link_21400 = (function (){var G__21187 = node_21398.cloneNode(true);
G__21187.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21399),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21187;
})();
(node_21398.shadow$old = true);

(new_link_21400.onload = ((function (seq__21144_21341,chunk__21148_21342,count__21149_21343,i__21150_21344,seq__21030,chunk__21032,count__21033,i__21034,new_link_21400,path_match_21399,node_21398,seq__21144_21392__$1,temp__5804__auto___21391,path,map__21029,map__21029__$1,msg,updates,reload_info){
return (function (e){
var seq__21188_21401 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21190_21402 = null;
var count__21191_21403 = (0);
var i__21192_21404 = (0);
while(true){
if((i__21192_21404 < count__21191_21403)){
var map__21196_21405 = chunk__21190_21402.cljs$core$IIndexed$_nth$arity$2(null,i__21192_21404);
var map__21196_21406__$1 = cljs.core.__destructure_map(map__21196_21405);
var task_21407 = map__21196_21406__$1;
var fn_str_21408 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21196_21406__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21409 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21196_21406__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21410 = goog.getObjectByName(fn_str_21408,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21409)].join(''));

(fn_obj_21410.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21410.cljs$core$IFn$_invoke$arity$2(path,new_link_21400) : fn_obj_21410.call(null,path,new_link_21400));


var G__21411 = seq__21188_21401;
var G__21412 = chunk__21190_21402;
var G__21413 = count__21191_21403;
var G__21414 = (i__21192_21404 + (1));
seq__21188_21401 = G__21411;
chunk__21190_21402 = G__21412;
count__21191_21403 = G__21413;
i__21192_21404 = G__21414;
continue;
} else {
var temp__5804__auto___21415__$1 = cljs.core.seq(seq__21188_21401);
if(temp__5804__auto___21415__$1){
var seq__21188_21416__$1 = temp__5804__auto___21415__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21188_21416__$1)){
var c__5525__auto___21417 = cljs.core.chunk_first(seq__21188_21416__$1);
var G__21418 = cljs.core.chunk_rest(seq__21188_21416__$1);
var G__21419 = c__5525__auto___21417;
var G__21420 = cljs.core.count(c__5525__auto___21417);
var G__21421 = (0);
seq__21188_21401 = G__21418;
chunk__21190_21402 = G__21419;
count__21191_21403 = G__21420;
i__21192_21404 = G__21421;
continue;
} else {
var map__21197_21422 = cljs.core.first(seq__21188_21416__$1);
var map__21197_21423__$1 = cljs.core.__destructure_map(map__21197_21422);
var task_21424 = map__21197_21423__$1;
var fn_str_21425 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21197_21423__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21426 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21197_21423__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21427 = goog.getObjectByName(fn_str_21425,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21426)].join(''));

(fn_obj_21427.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21427.cljs$core$IFn$_invoke$arity$2(path,new_link_21400) : fn_obj_21427.call(null,path,new_link_21400));


var G__21428 = cljs.core.next(seq__21188_21416__$1);
var G__21429 = null;
var G__21430 = (0);
var G__21431 = (0);
seq__21188_21401 = G__21428;
chunk__21190_21402 = G__21429;
count__21191_21403 = G__21430;
i__21192_21404 = G__21431;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21398);
});})(seq__21144_21341,chunk__21148_21342,count__21149_21343,i__21150_21344,seq__21030,chunk__21032,count__21033,i__21034,new_link_21400,path_match_21399,node_21398,seq__21144_21392__$1,temp__5804__auto___21391,path,map__21029,map__21029__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21399], 0));

goog.dom.insertSiblingAfter(new_link_21400,node_21398);


var G__21432 = cljs.core.next(seq__21144_21392__$1);
var G__21433 = null;
var G__21434 = (0);
var G__21435 = (0);
seq__21144_21341 = G__21432;
chunk__21148_21342 = G__21433;
count__21149_21343 = G__21434;
i__21150_21344 = G__21435;
continue;
} else {
var G__21436 = cljs.core.next(seq__21144_21392__$1);
var G__21437 = null;
var G__21438 = (0);
var G__21439 = (0);
seq__21144_21341 = G__21436;
chunk__21148_21342 = G__21437;
count__21149_21343 = G__21438;
i__21150_21344 = G__21439;
continue;
}
} else {
var G__21440 = cljs.core.next(seq__21144_21392__$1);
var G__21441 = null;
var G__21442 = (0);
var G__21443 = (0);
seq__21144_21341 = G__21440;
chunk__21148_21342 = G__21441;
count__21149_21343 = G__21442;
i__21150_21344 = G__21443;
continue;
}
}
} else {
}
}
break;
}


var G__21444 = seq__21030;
var G__21445 = chunk__21032;
var G__21446 = count__21033;
var G__21447 = (i__21034 + (1));
seq__21030 = G__21444;
chunk__21032 = G__21445;
count__21033 = G__21446;
i__21034 = G__21447;
continue;
} else {
var G__21448 = seq__21030;
var G__21449 = chunk__21032;
var G__21450 = count__21033;
var G__21451 = (i__21034 + (1));
seq__21030 = G__21448;
chunk__21032 = G__21449;
count__21033 = G__21450;
i__21034 = G__21451;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21030);
if(temp__5804__auto__){
var seq__21030__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21030__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21030__$1);
var G__21452 = cljs.core.chunk_rest(seq__21030__$1);
var G__21453 = c__5525__auto__;
var G__21454 = cljs.core.count(c__5525__auto__);
var G__21455 = (0);
seq__21030 = G__21452;
chunk__21032 = G__21453;
count__21033 = G__21454;
i__21034 = G__21455;
continue;
} else {
var path = cljs.core.first(seq__21030__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21198_21456 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21202_21457 = null;
var count__21203_21458 = (0);
var i__21204_21459 = (0);
while(true){
if((i__21204_21459 < count__21203_21458)){
var node_21460 = chunk__21202_21457.cljs$core$IIndexed$_nth$arity$2(null,i__21204_21459);
if(cljs.core.not(node_21460.shadow$old)){
var path_match_21461 = shadow.cljs.devtools.client.browser.match_paths(node_21460.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21461)){
var new_link_21462 = (function (){var G__21230 = node_21460.cloneNode(true);
G__21230.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21461),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21230;
})();
(node_21460.shadow$old = true);

(new_link_21462.onload = ((function (seq__21198_21456,chunk__21202_21457,count__21203_21458,i__21204_21459,seq__21030,chunk__21032,count__21033,i__21034,new_link_21462,path_match_21461,node_21460,path,seq__21030__$1,temp__5804__auto__,map__21029,map__21029__$1,msg,updates,reload_info){
return (function (e){
var seq__21231_21463 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21233_21464 = null;
var count__21234_21465 = (0);
var i__21235_21466 = (0);
while(true){
if((i__21235_21466 < count__21234_21465)){
var map__21239_21467 = chunk__21233_21464.cljs$core$IIndexed$_nth$arity$2(null,i__21235_21466);
var map__21239_21468__$1 = cljs.core.__destructure_map(map__21239_21467);
var task_21469 = map__21239_21468__$1;
var fn_str_21470 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21239_21468__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21471 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21239_21468__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21472 = goog.getObjectByName(fn_str_21470,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21471)].join(''));

(fn_obj_21472.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21472.cljs$core$IFn$_invoke$arity$2(path,new_link_21462) : fn_obj_21472.call(null,path,new_link_21462));


var G__21473 = seq__21231_21463;
var G__21474 = chunk__21233_21464;
var G__21475 = count__21234_21465;
var G__21476 = (i__21235_21466 + (1));
seq__21231_21463 = G__21473;
chunk__21233_21464 = G__21474;
count__21234_21465 = G__21475;
i__21235_21466 = G__21476;
continue;
} else {
var temp__5804__auto___21477__$1 = cljs.core.seq(seq__21231_21463);
if(temp__5804__auto___21477__$1){
var seq__21231_21478__$1 = temp__5804__auto___21477__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21231_21478__$1)){
var c__5525__auto___21479 = cljs.core.chunk_first(seq__21231_21478__$1);
var G__21480 = cljs.core.chunk_rest(seq__21231_21478__$1);
var G__21481 = c__5525__auto___21479;
var G__21482 = cljs.core.count(c__5525__auto___21479);
var G__21483 = (0);
seq__21231_21463 = G__21480;
chunk__21233_21464 = G__21481;
count__21234_21465 = G__21482;
i__21235_21466 = G__21483;
continue;
} else {
var map__21240_21484 = cljs.core.first(seq__21231_21478__$1);
var map__21240_21485__$1 = cljs.core.__destructure_map(map__21240_21484);
var task_21486 = map__21240_21485__$1;
var fn_str_21487 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21240_21485__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21488 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21240_21485__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21489 = goog.getObjectByName(fn_str_21487,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21488)].join(''));

(fn_obj_21489.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21489.cljs$core$IFn$_invoke$arity$2(path,new_link_21462) : fn_obj_21489.call(null,path,new_link_21462));


var G__21490 = cljs.core.next(seq__21231_21478__$1);
var G__21491 = null;
var G__21492 = (0);
var G__21493 = (0);
seq__21231_21463 = G__21490;
chunk__21233_21464 = G__21491;
count__21234_21465 = G__21492;
i__21235_21466 = G__21493;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21460);
});})(seq__21198_21456,chunk__21202_21457,count__21203_21458,i__21204_21459,seq__21030,chunk__21032,count__21033,i__21034,new_link_21462,path_match_21461,node_21460,path,seq__21030__$1,temp__5804__auto__,map__21029,map__21029__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21461], 0));

goog.dom.insertSiblingAfter(new_link_21462,node_21460);


var G__21494 = seq__21198_21456;
var G__21495 = chunk__21202_21457;
var G__21496 = count__21203_21458;
var G__21497 = (i__21204_21459 + (1));
seq__21198_21456 = G__21494;
chunk__21202_21457 = G__21495;
count__21203_21458 = G__21496;
i__21204_21459 = G__21497;
continue;
} else {
var G__21498 = seq__21198_21456;
var G__21499 = chunk__21202_21457;
var G__21500 = count__21203_21458;
var G__21501 = (i__21204_21459 + (1));
seq__21198_21456 = G__21498;
chunk__21202_21457 = G__21499;
count__21203_21458 = G__21500;
i__21204_21459 = G__21501;
continue;
}
} else {
var G__21502 = seq__21198_21456;
var G__21503 = chunk__21202_21457;
var G__21504 = count__21203_21458;
var G__21505 = (i__21204_21459 + (1));
seq__21198_21456 = G__21502;
chunk__21202_21457 = G__21503;
count__21203_21458 = G__21504;
i__21204_21459 = G__21505;
continue;
}
} else {
var temp__5804__auto___21506__$1 = cljs.core.seq(seq__21198_21456);
if(temp__5804__auto___21506__$1){
var seq__21198_21507__$1 = temp__5804__auto___21506__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21198_21507__$1)){
var c__5525__auto___21508 = cljs.core.chunk_first(seq__21198_21507__$1);
var G__21509 = cljs.core.chunk_rest(seq__21198_21507__$1);
var G__21510 = c__5525__auto___21508;
var G__21511 = cljs.core.count(c__5525__auto___21508);
var G__21512 = (0);
seq__21198_21456 = G__21509;
chunk__21202_21457 = G__21510;
count__21203_21458 = G__21511;
i__21204_21459 = G__21512;
continue;
} else {
var node_21513 = cljs.core.first(seq__21198_21507__$1);
if(cljs.core.not(node_21513.shadow$old)){
var path_match_21514 = shadow.cljs.devtools.client.browser.match_paths(node_21513.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21514)){
var new_link_21515 = (function (){var G__21241 = node_21513.cloneNode(true);
G__21241.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21514),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21241;
})();
(node_21513.shadow$old = true);

(new_link_21515.onload = ((function (seq__21198_21456,chunk__21202_21457,count__21203_21458,i__21204_21459,seq__21030,chunk__21032,count__21033,i__21034,new_link_21515,path_match_21514,node_21513,seq__21198_21507__$1,temp__5804__auto___21506__$1,path,seq__21030__$1,temp__5804__auto__,map__21029,map__21029__$1,msg,updates,reload_info){
return (function (e){
var seq__21242_21516 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21244_21517 = null;
var count__21245_21518 = (0);
var i__21246_21519 = (0);
while(true){
if((i__21246_21519 < count__21245_21518)){
var map__21250_21520 = chunk__21244_21517.cljs$core$IIndexed$_nth$arity$2(null,i__21246_21519);
var map__21250_21521__$1 = cljs.core.__destructure_map(map__21250_21520);
var task_21522 = map__21250_21521__$1;
var fn_str_21523 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21250_21521__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21524 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21250_21521__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21525 = goog.getObjectByName(fn_str_21523,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21524)].join(''));

(fn_obj_21525.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21525.cljs$core$IFn$_invoke$arity$2(path,new_link_21515) : fn_obj_21525.call(null,path,new_link_21515));


var G__21526 = seq__21242_21516;
var G__21527 = chunk__21244_21517;
var G__21528 = count__21245_21518;
var G__21529 = (i__21246_21519 + (1));
seq__21242_21516 = G__21526;
chunk__21244_21517 = G__21527;
count__21245_21518 = G__21528;
i__21246_21519 = G__21529;
continue;
} else {
var temp__5804__auto___21530__$2 = cljs.core.seq(seq__21242_21516);
if(temp__5804__auto___21530__$2){
var seq__21242_21531__$1 = temp__5804__auto___21530__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21242_21531__$1)){
var c__5525__auto___21532 = cljs.core.chunk_first(seq__21242_21531__$1);
var G__21533 = cljs.core.chunk_rest(seq__21242_21531__$1);
var G__21534 = c__5525__auto___21532;
var G__21535 = cljs.core.count(c__5525__auto___21532);
var G__21536 = (0);
seq__21242_21516 = G__21533;
chunk__21244_21517 = G__21534;
count__21245_21518 = G__21535;
i__21246_21519 = G__21536;
continue;
} else {
var map__21251_21537 = cljs.core.first(seq__21242_21531__$1);
var map__21251_21538__$1 = cljs.core.__destructure_map(map__21251_21537);
var task_21539 = map__21251_21538__$1;
var fn_str_21540 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21251_21538__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21541 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21251_21538__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21542 = goog.getObjectByName(fn_str_21540,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21541)].join(''));

(fn_obj_21542.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21542.cljs$core$IFn$_invoke$arity$2(path,new_link_21515) : fn_obj_21542.call(null,path,new_link_21515));


var G__21543 = cljs.core.next(seq__21242_21531__$1);
var G__21544 = null;
var G__21545 = (0);
var G__21546 = (0);
seq__21242_21516 = G__21543;
chunk__21244_21517 = G__21544;
count__21245_21518 = G__21545;
i__21246_21519 = G__21546;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21513);
});})(seq__21198_21456,chunk__21202_21457,count__21203_21458,i__21204_21459,seq__21030,chunk__21032,count__21033,i__21034,new_link_21515,path_match_21514,node_21513,seq__21198_21507__$1,temp__5804__auto___21506__$1,path,seq__21030__$1,temp__5804__auto__,map__21029,map__21029__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21514], 0));

goog.dom.insertSiblingAfter(new_link_21515,node_21513);


var G__21547 = cljs.core.next(seq__21198_21507__$1);
var G__21548 = null;
var G__21549 = (0);
var G__21550 = (0);
seq__21198_21456 = G__21547;
chunk__21202_21457 = G__21548;
count__21203_21458 = G__21549;
i__21204_21459 = G__21550;
continue;
} else {
var G__21551 = cljs.core.next(seq__21198_21507__$1);
var G__21552 = null;
var G__21553 = (0);
var G__21554 = (0);
seq__21198_21456 = G__21551;
chunk__21202_21457 = G__21552;
count__21203_21458 = G__21553;
i__21204_21459 = G__21554;
continue;
}
} else {
var G__21555 = cljs.core.next(seq__21198_21507__$1);
var G__21556 = null;
var G__21557 = (0);
var G__21558 = (0);
seq__21198_21456 = G__21555;
chunk__21202_21457 = G__21556;
count__21203_21458 = G__21557;
i__21204_21459 = G__21558;
continue;
}
}
} else {
}
}
break;
}


var G__21559 = cljs.core.next(seq__21030__$1);
var G__21560 = null;
var G__21561 = (0);
var G__21562 = (0);
seq__21030 = G__21559;
chunk__21032 = G__21560;
count__21033 = G__21561;
i__21034 = G__21562;
continue;
} else {
var G__21563 = cljs.core.next(seq__21030__$1);
var G__21564 = null;
var G__21565 = (0);
var G__21566 = (0);
seq__21030 = G__21563;
chunk__21032 = G__21564;
count__21033 = G__21565;
i__21034 = G__21566;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$4 = (function (this$,code,success,fail){
var this$__$1 = this;
try{var G__21253 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21253) : success.call(null,G__21253));
}catch (e21252){var e = e21252;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__21254,success,fail){
var map__21255 = p__21254;
var map__21255__$1 = cljs.core.__destructure_map(map__21255);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21255__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__21257 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21257) : success.call(null,G__21257));
}catch (e21256){var e = e21256;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21258,done,error){
var map__21259 = p__21258;
var map__21259__$1 = cljs.core.__destructure_map(map__21259);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21259__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21260,done,error){
var map__21261 = p__21260;
var map__21261__$1 = cljs.core.__destructure_map(map__21261);
var msg = map__21261__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21261__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21261__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21261__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21262){
var map__21263 = p__21262;
var map__21263__$1 = cljs.core.__destructure_map(map__21263);
var src = map__21263__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21263__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21264 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21264) : done.call(null,G__21264));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21265){
var map__21266 = p__21265;
var map__21266__$1 = cljs.core.__destructure_map(map__21266);
var msg__$1 = map__21266__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21266__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e21267){var ex = e21267;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21268){
var map__21269 = p__21268;
var map__21269__$1 = cljs.core.__destructure_map(map__21269);
var env = map__21269__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21269__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21270){
var map__21271 = p__21270;
var map__21271__$1 = cljs.core.__destructure_map(map__21271);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21271__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21271__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__21272){
var map__21273 = p__21272;
var map__21273__$1 = cljs.core.__destructure_map(map__21273);
var svc = map__21273__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21273__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
