goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__19036){
var map__19037 = p__19036;
var map__19037__$1 = cljs.core.__destructure_map(map__19037);
var m = map__19037__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19037__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19037__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19038_19431 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19039_19432 = null;
var count__19040_19433 = (0);
var i__19041_19434 = (0);
while(true){
if((i__19041_19434 < count__19040_19433)){
var f_19435 = chunk__19039_19432.cljs$core$IIndexed$_nth$arity$2(null,i__19041_19434);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19435], 0));


var G__19436 = seq__19038_19431;
var G__19437 = chunk__19039_19432;
var G__19438 = count__19040_19433;
var G__19439 = (i__19041_19434 + (1));
seq__19038_19431 = G__19436;
chunk__19039_19432 = G__19437;
count__19040_19433 = G__19438;
i__19041_19434 = G__19439;
continue;
} else {
var temp__5804__auto___19440 = cljs.core.seq(seq__19038_19431);
if(temp__5804__auto___19440){
var seq__19038_19441__$1 = temp__5804__auto___19440;
if(cljs.core.chunked_seq_QMARK_(seq__19038_19441__$1)){
var c__5525__auto___19442 = cljs.core.chunk_first(seq__19038_19441__$1);
var G__19443 = cljs.core.chunk_rest(seq__19038_19441__$1);
var G__19444 = c__5525__auto___19442;
var G__19445 = cljs.core.count(c__5525__auto___19442);
var G__19446 = (0);
seq__19038_19431 = G__19443;
chunk__19039_19432 = G__19444;
count__19040_19433 = G__19445;
i__19041_19434 = G__19446;
continue;
} else {
var f_19447 = cljs.core.first(seq__19038_19441__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19447], 0));


var G__19448 = cljs.core.next(seq__19038_19441__$1);
var G__19449 = null;
var G__19450 = (0);
var G__19451 = (0);
seq__19038_19431 = G__19448;
chunk__19039_19432 = G__19449;
count__19040_19433 = G__19450;
i__19041_19434 = G__19451;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19452 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19452], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_19452)))?cljs.core.second(arglists_19452):arglists_19452)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19046_19457 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19047_19458 = null;
var count__19048_19459 = (0);
var i__19049_19460 = (0);
while(true){
if((i__19049_19460 < count__19048_19459)){
var vec__19060_19461 = chunk__19047_19458.cljs$core$IIndexed$_nth$arity$2(null,i__19049_19460);
var name_19462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19060_19461,(0),null);
var map__19063_19463 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19060_19461,(1),null);
var map__19063_19464__$1 = cljs.core.__destructure_map(map__19063_19463);
var doc_19465 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19063_19464__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19466 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19063_19464__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19462], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19466], 0));

if(cljs.core.truth_(doc_19465)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19465], 0));
} else {
}


var G__19467 = seq__19046_19457;
var G__19468 = chunk__19047_19458;
var G__19469 = count__19048_19459;
var G__19470 = (i__19049_19460 + (1));
seq__19046_19457 = G__19467;
chunk__19047_19458 = G__19468;
count__19048_19459 = G__19469;
i__19049_19460 = G__19470;
continue;
} else {
var temp__5804__auto___19471 = cljs.core.seq(seq__19046_19457);
if(temp__5804__auto___19471){
var seq__19046_19472__$1 = temp__5804__auto___19471;
if(cljs.core.chunked_seq_QMARK_(seq__19046_19472__$1)){
var c__5525__auto___19473 = cljs.core.chunk_first(seq__19046_19472__$1);
var G__19474 = cljs.core.chunk_rest(seq__19046_19472__$1);
var G__19475 = c__5525__auto___19473;
var G__19476 = cljs.core.count(c__5525__auto___19473);
var G__19477 = (0);
seq__19046_19457 = G__19474;
chunk__19047_19458 = G__19475;
count__19048_19459 = G__19476;
i__19049_19460 = G__19477;
continue;
} else {
var vec__19064_19478 = cljs.core.first(seq__19046_19472__$1);
var name_19479 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19064_19478,(0),null);
var map__19067_19480 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19064_19478,(1),null);
var map__19067_19481__$1 = cljs.core.__destructure_map(map__19067_19480);
var doc_19482 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19067_19481__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19483 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19067_19481__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19479], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19483], 0));

if(cljs.core.truth_(doc_19482)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19482], 0));
} else {
}


var G__19484 = cljs.core.next(seq__19046_19472__$1);
var G__19485 = null;
var G__19486 = (0);
var G__19487 = (0);
seq__19046_19457 = G__19484;
chunk__19047_19458 = G__19485;
count__19048_19459 = G__19486;
i__19049_19460 = G__19487;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__19094 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19095 = null;
var count__19096 = (0);
var i__19097 = (0);
while(true){
if((i__19097 < count__19096)){
var role = chunk__19095.cljs$core$IIndexed$_nth$arity$2(null,i__19097);
var temp__5804__auto___19488__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19488__$1)){
var spec_19489 = temp__5804__auto___19488__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19489)], 0));
} else {
}


var G__19490 = seq__19094;
var G__19491 = chunk__19095;
var G__19492 = count__19096;
var G__19493 = (i__19097 + (1));
seq__19094 = G__19490;
chunk__19095 = G__19491;
count__19096 = G__19492;
i__19097 = G__19493;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__19094);
if(temp__5804__auto____$1){
var seq__19094__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__19094__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__19094__$1);
var G__19494 = cljs.core.chunk_rest(seq__19094__$1);
var G__19495 = c__5525__auto__;
var G__19496 = cljs.core.count(c__5525__auto__);
var G__19497 = (0);
seq__19094 = G__19494;
chunk__19095 = G__19495;
count__19096 = G__19496;
i__19097 = G__19497;
continue;
} else {
var role = cljs.core.first(seq__19094__$1);
var temp__5804__auto___19498__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19498__$2)){
var spec_19499 = temp__5804__auto___19498__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19499)], 0));
} else {
}


var G__19500 = cljs.core.next(seq__19094__$1);
var G__19501 = null;
var G__19502 = (0);
var G__19503 = (0);
seq__19094 = G__19500;
chunk__19095 = G__19501;
count__19096 = G__19502;
i__19097 = G__19503;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__19110 = datafied_throwable;
var map__19110__$1 = cljs.core.__destructure_map(map__19110);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19110__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19110__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19110__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__19111 = cljs.core.last(via);
var map__19111__$1 = cljs.core.__destructure_map(map__19111);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19111__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19111__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19111__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__19112 = data;
var map__19112__$1 = cljs.core.__destructure_map(map__19112);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19112__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19112__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19112__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__19113 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__19113__$1 = cljs.core.__destructure_map(map__19113);
var top_data = map__19113__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19113__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__19118 = phase;
var G__19118__$1 = (((G__19118 instanceof cljs.core.Keyword))?G__19118.fqn:null);
switch (G__19118__$1) {
case "read-source":
var map__19141 = data;
var map__19141__$1 = cljs.core.__destructure_map(map__19141);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19141__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19141__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__19158 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__19158__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19158,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19158);
var G__19158__$2 = (cljs.core.truth_((function (){var fexpr__19160 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19160.cljs$core$IFn$_invoke$arity$1 ? fexpr__19160.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19160.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19158__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19158__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19158__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19158__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19172 = top_data;
var G__19172__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19172,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19172);
var G__19172__$2 = (cljs.core.truth_((function (){var fexpr__19174 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19174.cljs$core$IFn$_invoke$arity$1 ? fexpr__19174.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19174.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19172__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19172__$1);
var G__19172__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19172__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19172__$2);
var G__19172__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19172__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19172__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19172__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19172__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19257 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19257,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19257,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19257,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19257,(3),null);
var G__19260 = top_data;
var G__19260__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19260,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__19260);
var G__19260__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19260__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__19260__$1);
var G__19260__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19260__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19260__$2);
var G__19260__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19260__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19260__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19260__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19260__$4;
}

break;
case "execution":
var vec__19261 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19261,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19261,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19261,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19261,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__19107_SHARP_){
var or__5002__auto__ = (p1__19107_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__19264 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19264.cljs$core$IFn$_invoke$arity$1 ? fexpr__19264.cljs$core$IFn$_invoke$arity$1(p1__19107_SHARP_) : fexpr__19264.call(null,p1__19107_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__19265 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__19265__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19265,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__19265);
var G__19265__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19265__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19265__$1);
var G__19265__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19265__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19265__$2);
var G__19265__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19265__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__19265__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19265__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19265__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19118__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19274){
var map__19275 = p__19274;
var map__19275__$1 = cljs.core.__destructure_map(map__19275);
var triage_data = map__19275__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19275__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19275__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19275__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19275__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19275__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19275__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19275__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19275__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__19278 = phase;
var G__19278__$1 = (((G__19278 instanceof cljs.core.Keyword))?G__19278.fqn:null);
switch (G__19278__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__19287 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__19288 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19289 = loc;
var G__19290 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19300_19515 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19301_19516 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19302_19517 = true;
var _STAR_print_fn_STAR__temp_val__19303_19518 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19302_19517);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19303_19518);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19270_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19270_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19301_19516);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19300_19515);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19287,G__19288,G__19289,G__19290) : format.call(null,G__19287,G__19288,G__19289,G__19290));

break;
case "macroexpansion":
var G__19338 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__19339 = cause_type;
var G__19340 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19341 = loc;
var G__19342 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19338,G__19339,G__19340,G__19341,G__19342) : format.call(null,G__19338,G__19339,G__19340,G__19341,G__19342));

break;
case "compile-syntax-check":
var G__19349 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__19350 = cause_type;
var G__19351 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19352 = loc;
var G__19353 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19349,G__19350,G__19351,G__19352,G__19353) : format.call(null,G__19349,G__19350,G__19351,G__19352,G__19353));

break;
case "compilation":
var G__19354 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__19355 = cause_type;
var G__19356 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19357 = loc;
var G__19358 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19354,G__19355,G__19356,G__19357,G__19358) : format.call(null,G__19354,G__19355,G__19356,G__19357,G__19358));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__19361 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__19362 = symbol;
var G__19363 = loc;
var G__19364 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19369_19519 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19370_19520 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19371_19521 = true;
var _STAR_print_fn_STAR__temp_val__19373_19522 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19371_19521);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19373_19522);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19272_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19272_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19370_19520);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19369_19519);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19361,G__19362,G__19363,G__19364) : format.call(null,G__19361,G__19362,G__19363,G__19364));
} else {
var G__19397 = "Execution error%s at %s(%s).\n%s\n";
var G__19398 = cause_type;
var G__19399 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19400 = loc;
var G__19401 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19397,G__19398,G__19399,G__19400,G__19401) : format.call(null,G__19397,G__19398,G__19399,G__19400,G__19401));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19278__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
