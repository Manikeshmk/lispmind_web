goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_12327 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null,this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_12327(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_12333 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null,this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_12333(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__11676 = coll;
var G__11677 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__11676,G__11677) : shadow.dom.lazy_native_coll_seq.call(null,G__11676,G__11677));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__11696 = arguments.length;
switch (G__11696) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__11698 = arguments.length;
switch (G__11698) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__11701 = arguments.length;
switch (G__11701) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__11730 = arguments.length;
switch (G__11730) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__11741 = arguments.length;
switch (G__11741) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__11750 = arguments.length;
switch (G__11750) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e11751){if((e11751 instanceof Object)){
var e = e11751;
return console.log("didnt support attachEvent",el,e);
} else {
throw e11751;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__11753 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__11754 = null;
var count__11755 = (0);
var i__11756 = (0);
while(true){
if((i__11756 < count__11755)){
var el = chunk__11754.cljs$core$IIndexed$_nth$arity$2(null,i__11756);
var handler_12367__$1 = ((function (seq__11753,chunk__11754,count__11755,i__11756,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__11753,chunk__11754,count__11755,i__11756,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12367__$1);


var G__12382 = seq__11753;
var G__12383 = chunk__11754;
var G__12384 = count__11755;
var G__12385 = (i__11756 + (1));
seq__11753 = G__12382;
chunk__11754 = G__12383;
count__11755 = G__12384;
i__11756 = G__12385;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11753);
if(temp__5804__auto__){
var seq__11753__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11753__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11753__$1);
var G__12387 = cljs.core.chunk_rest(seq__11753__$1);
var G__12388 = c__5525__auto__;
var G__12389 = cljs.core.count(c__5525__auto__);
var G__12390 = (0);
seq__11753 = G__12387;
chunk__11754 = G__12388;
count__11755 = G__12389;
i__11756 = G__12390;
continue;
} else {
var el = cljs.core.first(seq__11753__$1);
var handler_12392__$1 = ((function (seq__11753,chunk__11754,count__11755,i__11756,el,seq__11753__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__11753,chunk__11754,count__11755,i__11756,el,seq__11753__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12392__$1);


var G__12393 = cljs.core.next(seq__11753__$1);
var G__12394 = null;
var G__12395 = (0);
var G__12396 = (0);
seq__11753 = G__12393;
chunk__11754 = G__12394;
count__11755 = G__12395;
i__11756 = G__12396;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__11778 = arguments.length;
switch (G__11778) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__11796 = cljs.core.seq(events);
var chunk__11797 = null;
var count__11798 = (0);
var i__11799 = (0);
while(true){
if((i__11799 < count__11798)){
var vec__11814 = chunk__11797.cljs$core$IIndexed$_nth$arity$2(null,i__11799);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11814,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11814,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12398 = seq__11796;
var G__12399 = chunk__11797;
var G__12400 = count__11798;
var G__12401 = (i__11799 + (1));
seq__11796 = G__12398;
chunk__11797 = G__12399;
count__11798 = G__12400;
i__11799 = G__12401;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11796);
if(temp__5804__auto__){
var seq__11796__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11796__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11796__$1);
var G__12402 = cljs.core.chunk_rest(seq__11796__$1);
var G__12403 = c__5525__auto__;
var G__12404 = cljs.core.count(c__5525__auto__);
var G__12405 = (0);
seq__11796 = G__12402;
chunk__11797 = G__12403;
count__11798 = G__12404;
i__11799 = G__12405;
continue;
} else {
var vec__11820 = cljs.core.first(seq__11796__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11820,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11820,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12406 = cljs.core.next(seq__11796__$1);
var G__12407 = null;
var G__12408 = (0);
var G__12409 = (0);
seq__11796 = G__12406;
chunk__11797 = G__12407;
count__11798 = G__12408;
i__11799 = G__12409;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__11827 = cljs.core.seq(styles);
var chunk__11828 = null;
var count__11829 = (0);
var i__11830 = (0);
while(true){
if((i__11830 < count__11829)){
var vec__11840 = chunk__11828.cljs$core$IIndexed$_nth$arity$2(null,i__11830);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11840,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11840,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12410 = seq__11827;
var G__12411 = chunk__11828;
var G__12412 = count__11829;
var G__12413 = (i__11830 + (1));
seq__11827 = G__12410;
chunk__11828 = G__12411;
count__11829 = G__12412;
i__11830 = G__12413;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11827);
if(temp__5804__auto__){
var seq__11827__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11827__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11827__$1);
var G__12414 = cljs.core.chunk_rest(seq__11827__$1);
var G__12415 = c__5525__auto__;
var G__12416 = cljs.core.count(c__5525__auto__);
var G__12417 = (0);
seq__11827 = G__12414;
chunk__11828 = G__12415;
count__11829 = G__12416;
i__11830 = G__12417;
continue;
} else {
var vec__11849 = cljs.core.first(seq__11827__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11849,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11849,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12418 = cljs.core.next(seq__11827__$1);
var G__12419 = null;
var G__12420 = (0);
var G__12421 = (0);
seq__11827 = G__12418;
chunk__11828 = G__12419;
count__11829 = G__12420;
i__11830 = G__12421;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__11881_12423 = key;
var G__11881_12424__$1 = (((G__11881_12423 instanceof cljs.core.Keyword))?G__11881_12423.fqn:null);
switch (G__11881_12424__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_12427 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_12427,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_12427,"aria-");
}
})())){
el.setAttribute(ks_12427,value);
} else {
(el[ks_12427] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__11904){
var map__11905 = p__11904;
var map__11905__$1 = cljs.core.__destructure_map(map__11905);
var props = map__11905__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11905__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__11907 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11907,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11907,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11907,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__11916 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__11916,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__11916;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__11919 = arguments.length;
switch (G__11919) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__11924){
var vec__11925 = p__11924;
var seq__11926 = cljs.core.seq(vec__11925);
var first__11927 = cljs.core.first(seq__11926);
var seq__11926__$1 = cljs.core.next(seq__11926);
var nn = first__11927;
var first__11927__$1 = cljs.core.first(seq__11926__$1);
var seq__11926__$2 = cljs.core.next(seq__11926__$1);
var np = first__11927__$1;
var nc = seq__11926__$2;
var node = vec__11925;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__11928 = nn;
var G__11929 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__11928,G__11929) : create_fn.call(null,G__11928,G__11929));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__11930 = nn;
var G__11931 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__11930,G__11931) : create_fn.call(null,G__11930,G__11931));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__11932 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11932,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11932,(1),null);
var seq__11935_12439 = cljs.core.seq(node_children);
var chunk__11936_12440 = null;
var count__11937_12441 = (0);
var i__11938_12442 = (0);
while(true){
if((i__11938_12442 < count__11937_12441)){
var child_struct_12444 = chunk__11936_12440.cljs$core$IIndexed$_nth$arity$2(null,i__11938_12442);
var children_12445 = shadow.dom.dom_node(child_struct_12444);
if(cljs.core.seq_QMARK_(children_12445)){
var seq__11956_12446 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12445));
var chunk__11958_12447 = null;
var count__11959_12448 = (0);
var i__11960_12449 = (0);
while(true){
if((i__11960_12449 < count__11959_12448)){
var child_12454 = chunk__11958_12447.cljs$core$IIndexed$_nth$arity$2(null,i__11960_12449);
if(cljs.core.truth_(child_12454)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12454);


var G__12455 = seq__11956_12446;
var G__12456 = chunk__11958_12447;
var G__12457 = count__11959_12448;
var G__12458 = (i__11960_12449 + (1));
seq__11956_12446 = G__12455;
chunk__11958_12447 = G__12456;
count__11959_12448 = G__12457;
i__11960_12449 = G__12458;
continue;
} else {
var G__12461 = seq__11956_12446;
var G__12462 = chunk__11958_12447;
var G__12463 = count__11959_12448;
var G__12464 = (i__11960_12449 + (1));
seq__11956_12446 = G__12461;
chunk__11958_12447 = G__12462;
count__11959_12448 = G__12463;
i__11960_12449 = G__12464;
continue;
}
} else {
var temp__5804__auto___12466 = cljs.core.seq(seq__11956_12446);
if(temp__5804__auto___12466){
var seq__11956_12467__$1 = temp__5804__auto___12466;
if(cljs.core.chunked_seq_QMARK_(seq__11956_12467__$1)){
var c__5525__auto___12468 = cljs.core.chunk_first(seq__11956_12467__$1);
var G__12469 = cljs.core.chunk_rest(seq__11956_12467__$1);
var G__12470 = c__5525__auto___12468;
var G__12471 = cljs.core.count(c__5525__auto___12468);
var G__12472 = (0);
seq__11956_12446 = G__12469;
chunk__11958_12447 = G__12470;
count__11959_12448 = G__12471;
i__11960_12449 = G__12472;
continue;
} else {
var child_12473 = cljs.core.first(seq__11956_12467__$1);
if(cljs.core.truth_(child_12473)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12473);


var G__12474 = cljs.core.next(seq__11956_12467__$1);
var G__12475 = null;
var G__12476 = (0);
var G__12477 = (0);
seq__11956_12446 = G__12474;
chunk__11958_12447 = G__12475;
count__11959_12448 = G__12476;
i__11960_12449 = G__12477;
continue;
} else {
var G__12478 = cljs.core.next(seq__11956_12467__$1);
var G__12479 = null;
var G__12480 = (0);
var G__12481 = (0);
seq__11956_12446 = G__12478;
chunk__11958_12447 = G__12479;
count__11959_12448 = G__12480;
i__11960_12449 = G__12481;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12445);
}


var G__12482 = seq__11935_12439;
var G__12483 = chunk__11936_12440;
var G__12484 = count__11937_12441;
var G__12485 = (i__11938_12442 + (1));
seq__11935_12439 = G__12482;
chunk__11936_12440 = G__12483;
count__11937_12441 = G__12484;
i__11938_12442 = G__12485;
continue;
} else {
var temp__5804__auto___12486 = cljs.core.seq(seq__11935_12439);
if(temp__5804__auto___12486){
var seq__11935_12487__$1 = temp__5804__auto___12486;
if(cljs.core.chunked_seq_QMARK_(seq__11935_12487__$1)){
var c__5525__auto___12488 = cljs.core.chunk_first(seq__11935_12487__$1);
var G__12489 = cljs.core.chunk_rest(seq__11935_12487__$1);
var G__12490 = c__5525__auto___12488;
var G__12491 = cljs.core.count(c__5525__auto___12488);
var G__12492 = (0);
seq__11935_12439 = G__12489;
chunk__11936_12440 = G__12490;
count__11937_12441 = G__12491;
i__11938_12442 = G__12492;
continue;
} else {
var child_struct_12493 = cljs.core.first(seq__11935_12487__$1);
var children_12494 = shadow.dom.dom_node(child_struct_12493);
if(cljs.core.seq_QMARK_(children_12494)){
var seq__11962_12495 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12494));
var chunk__11964_12496 = null;
var count__11965_12497 = (0);
var i__11966_12498 = (0);
while(true){
if((i__11966_12498 < count__11965_12497)){
var child_12500 = chunk__11964_12496.cljs$core$IIndexed$_nth$arity$2(null,i__11966_12498);
if(cljs.core.truth_(child_12500)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12500);


var G__12501 = seq__11962_12495;
var G__12502 = chunk__11964_12496;
var G__12503 = count__11965_12497;
var G__12504 = (i__11966_12498 + (1));
seq__11962_12495 = G__12501;
chunk__11964_12496 = G__12502;
count__11965_12497 = G__12503;
i__11966_12498 = G__12504;
continue;
} else {
var G__12505 = seq__11962_12495;
var G__12506 = chunk__11964_12496;
var G__12507 = count__11965_12497;
var G__12508 = (i__11966_12498 + (1));
seq__11962_12495 = G__12505;
chunk__11964_12496 = G__12506;
count__11965_12497 = G__12507;
i__11966_12498 = G__12508;
continue;
}
} else {
var temp__5804__auto___12509__$1 = cljs.core.seq(seq__11962_12495);
if(temp__5804__auto___12509__$1){
var seq__11962_12510__$1 = temp__5804__auto___12509__$1;
if(cljs.core.chunked_seq_QMARK_(seq__11962_12510__$1)){
var c__5525__auto___12511 = cljs.core.chunk_first(seq__11962_12510__$1);
var G__12512 = cljs.core.chunk_rest(seq__11962_12510__$1);
var G__12513 = c__5525__auto___12511;
var G__12514 = cljs.core.count(c__5525__auto___12511);
var G__12515 = (0);
seq__11962_12495 = G__12512;
chunk__11964_12496 = G__12513;
count__11965_12497 = G__12514;
i__11966_12498 = G__12515;
continue;
} else {
var child_12516 = cljs.core.first(seq__11962_12510__$1);
if(cljs.core.truth_(child_12516)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12516);


var G__12517 = cljs.core.next(seq__11962_12510__$1);
var G__12518 = null;
var G__12519 = (0);
var G__12520 = (0);
seq__11962_12495 = G__12517;
chunk__11964_12496 = G__12518;
count__11965_12497 = G__12519;
i__11966_12498 = G__12520;
continue;
} else {
var G__12521 = cljs.core.next(seq__11962_12510__$1);
var G__12522 = null;
var G__12523 = (0);
var G__12524 = (0);
seq__11962_12495 = G__12521;
chunk__11964_12496 = G__12522;
count__11965_12497 = G__12523;
i__11966_12498 = G__12524;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12494);
}


var G__12525 = cljs.core.next(seq__11935_12487__$1);
var G__12526 = null;
var G__12527 = (0);
var G__12528 = (0);
seq__11935_12439 = G__12525;
chunk__11936_12440 = G__12526;
count__11937_12441 = G__12527;
i__11938_12442 = G__12528;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__11988 = cljs.core.seq(node);
var chunk__11989 = null;
var count__11990 = (0);
var i__11991 = (0);
while(true){
if((i__11991 < count__11990)){
var n = chunk__11989.cljs$core$IIndexed$_nth$arity$2(null,i__11991);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__12534 = seq__11988;
var G__12535 = chunk__11989;
var G__12536 = count__11990;
var G__12537 = (i__11991 + (1));
seq__11988 = G__12534;
chunk__11989 = G__12535;
count__11990 = G__12536;
i__11991 = G__12537;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11988);
if(temp__5804__auto__){
var seq__11988__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11988__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11988__$1);
var G__12538 = cljs.core.chunk_rest(seq__11988__$1);
var G__12539 = c__5525__auto__;
var G__12540 = cljs.core.count(c__5525__auto__);
var G__12541 = (0);
seq__11988 = G__12538;
chunk__11989 = G__12539;
count__11990 = G__12540;
i__11991 = G__12541;
continue;
} else {
var n = cljs.core.first(seq__11988__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__12543 = cljs.core.next(seq__11988__$1);
var G__12544 = null;
var G__12545 = (0);
var G__12546 = (0);
seq__11988 = G__12543;
chunk__11989 = G__12544;
count__11990 = G__12545;
i__11991 = G__12546;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__11993 = arguments.length;
switch (G__11993) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__11995 = arguments.length;
switch (G__11995) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__11997 = arguments.length;
switch (G__11997) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12553 = arguments.length;
var i__5727__auto___12554 = (0);
while(true){
if((i__5727__auto___12554 < len__5726__auto___12553)){
args__5732__auto__.push((arguments[i__5727__auto___12554]));

var G__12556 = (i__5727__auto___12554 + (1));
i__5727__auto___12554 = G__12556;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__11999_12557 = cljs.core.seq(nodes);
var chunk__12000_12558 = null;
var count__12001_12559 = (0);
var i__12002_12560 = (0);
while(true){
if((i__12002_12560 < count__12001_12559)){
var node_12561 = chunk__12000_12558.cljs$core$IIndexed$_nth$arity$2(null,i__12002_12560);
fragment.appendChild(shadow.dom._to_dom(node_12561));


var G__12562 = seq__11999_12557;
var G__12563 = chunk__12000_12558;
var G__12564 = count__12001_12559;
var G__12565 = (i__12002_12560 + (1));
seq__11999_12557 = G__12562;
chunk__12000_12558 = G__12563;
count__12001_12559 = G__12564;
i__12002_12560 = G__12565;
continue;
} else {
var temp__5804__auto___12566 = cljs.core.seq(seq__11999_12557);
if(temp__5804__auto___12566){
var seq__11999_12567__$1 = temp__5804__auto___12566;
if(cljs.core.chunked_seq_QMARK_(seq__11999_12567__$1)){
var c__5525__auto___12568 = cljs.core.chunk_first(seq__11999_12567__$1);
var G__12569 = cljs.core.chunk_rest(seq__11999_12567__$1);
var G__12570 = c__5525__auto___12568;
var G__12571 = cljs.core.count(c__5525__auto___12568);
var G__12572 = (0);
seq__11999_12557 = G__12569;
chunk__12000_12558 = G__12570;
count__12001_12559 = G__12571;
i__12002_12560 = G__12572;
continue;
} else {
var node_12573 = cljs.core.first(seq__11999_12567__$1);
fragment.appendChild(shadow.dom._to_dom(node_12573));


var G__12574 = cljs.core.next(seq__11999_12567__$1);
var G__12575 = null;
var G__12576 = (0);
var G__12577 = (0);
seq__11999_12557 = G__12574;
chunk__12000_12558 = G__12575;
count__12001_12559 = G__12576;
i__12002_12560 = G__12577;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq11998){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq11998));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__12003_12578 = cljs.core.seq(scripts);
var chunk__12004_12579 = null;
var count__12005_12580 = (0);
var i__12006_12581 = (0);
while(true){
if((i__12006_12581 < count__12005_12580)){
var vec__12013_12582 = chunk__12004_12579.cljs$core$IIndexed$_nth$arity$2(null,i__12006_12581);
var script_tag_12583 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12013_12582,(0),null);
var script_body_12584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12013_12582,(1),null);
eval(script_body_12584);


var G__12585 = seq__12003_12578;
var G__12586 = chunk__12004_12579;
var G__12587 = count__12005_12580;
var G__12588 = (i__12006_12581 + (1));
seq__12003_12578 = G__12585;
chunk__12004_12579 = G__12586;
count__12005_12580 = G__12587;
i__12006_12581 = G__12588;
continue;
} else {
var temp__5804__auto___12589 = cljs.core.seq(seq__12003_12578);
if(temp__5804__auto___12589){
var seq__12003_12590__$1 = temp__5804__auto___12589;
if(cljs.core.chunked_seq_QMARK_(seq__12003_12590__$1)){
var c__5525__auto___12591 = cljs.core.chunk_first(seq__12003_12590__$1);
var G__12592 = cljs.core.chunk_rest(seq__12003_12590__$1);
var G__12593 = c__5525__auto___12591;
var G__12594 = cljs.core.count(c__5525__auto___12591);
var G__12595 = (0);
seq__12003_12578 = G__12592;
chunk__12004_12579 = G__12593;
count__12005_12580 = G__12594;
i__12006_12581 = G__12595;
continue;
} else {
var vec__12016_12596 = cljs.core.first(seq__12003_12590__$1);
var script_tag_12597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12016_12596,(0),null);
var script_body_12598 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12016_12596,(1),null);
eval(script_body_12598);


var G__12599 = cljs.core.next(seq__12003_12590__$1);
var G__12600 = null;
var G__12601 = (0);
var G__12602 = (0);
seq__12003_12578 = G__12599;
chunk__12004_12579 = G__12600;
count__12005_12580 = G__12601;
i__12006_12581 = G__12602;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__12019){
var vec__12020 = p__12019;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12020,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12020,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__12024 = arguments.length;
switch (G__12024) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__12025 = cljs.core.seq(style_keys);
var chunk__12026 = null;
var count__12027 = (0);
var i__12028 = (0);
while(true){
if((i__12028 < count__12027)){
var it = chunk__12026.cljs$core$IIndexed$_nth$arity$2(null,i__12028);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__12606 = seq__12025;
var G__12607 = chunk__12026;
var G__12608 = count__12027;
var G__12609 = (i__12028 + (1));
seq__12025 = G__12606;
chunk__12026 = G__12607;
count__12027 = G__12608;
i__12028 = G__12609;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12025);
if(temp__5804__auto__){
var seq__12025__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12025__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12025__$1);
var G__12611 = cljs.core.chunk_rest(seq__12025__$1);
var G__12612 = c__5525__auto__;
var G__12613 = cljs.core.count(c__5525__auto__);
var G__12614 = (0);
seq__12025 = G__12611;
chunk__12026 = G__12612;
count__12027 = G__12613;
i__12028 = G__12614;
continue;
} else {
var it = cljs.core.first(seq__12025__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__12615 = cljs.core.next(seq__12025__$1);
var G__12616 = null;
var G__12617 = (0);
var G__12618 = (0);
seq__12025 = G__12615;
chunk__12026 = G__12616;
count__12027 = G__12617;
i__12028 = G__12618;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k12030,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12035 = k12030;
var G__12035__$1 = (((G__12035 instanceof cljs.core.Keyword))?G__12035.fqn:null);
switch (G__12035__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12030,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12037){
var vec__12038 = p__12037;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12038,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12038,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12029){
var self__ = this;
var G__12029__$1 = this;
return (new cljs.core.RecordIter((0),G__12029__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12031,other12032){
var self__ = this;
var this12031__$1 = this;
return (((!((other12032 == null)))) && ((((this12031__$1.constructor === other12032.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12031__$1.x,other12032.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12031__$1.y,other12032.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12031__$1.__extmap,other12032.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k12030){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12044 = k12030;
var G__12044__$1 = (((G__12044 instanceof cljs.core.Keyword))?G__12044.fqn:null);
switch (G__12044__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12030);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__12029){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12046 = cljs.core.keyword_identical_QMARK_;
var expr__12047 = k__5309__auto__;
if(cljs.core.truth_((pred__12046.cljs$core$IFn$_invoke$arity$2 ? pred__12046.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__12047) : pred__12046.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__12047)))){
return (new shadow.dom.Coordinate(G__12029,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12046.cljs$core$IFn$_invoke$arity$2 ? pred__12046.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__12047) : pred__12046.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__12047)))){
return (new shadow.dom.Coordinate(self__.x,G__12029,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__12029),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__12029){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__12029,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__12034){
var extmap__5342__auto__ = (function (){var G__12053 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12034,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__12034)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12053);
} else {
return G__12053;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__12034),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__12034),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k12059,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12067 = k12059;
var G__12067__$1 = (((G__12067 instanceof cljs.core.Keyword))?G__12067.fqn:null);
switch (G__12067__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12059,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12069){
var vec__12071 = p__12069;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12071,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12071,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12058){
var self__ = this;
var G__12058__$1 = this;
return (new cljs.core.RecordIter((0),G__12058__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12060,other12061){
var self__ = this;
var this12060__$1 = this;
return (((!((other12061 == null)))) && ((((this12060__$1.constructor === other12061.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12060__$1.w,other12061.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12060__$1.h,other12061.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12060__$1.__extmap,other12061.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k12059){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12092 = k12059;
var G__12092__$1 = (((G__12092 instanceof cljs.core.Keyword))?G__12092.fqn:null);
switch (G__12092__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12059);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__12058){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12097 = cljs.core.keyword_identical_QMARK_;
var expr__12098 = k__5309__auto__;
if(cljs.core.truth_((pred__12097.cljs$core$IFn$_invoke$arity$2 ? pred__12097.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__12098) : pred__12097.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__12098)))){
return (new shadow.dom.Size(G__12058,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12097.cljs$core$IFn$_invoke$arity$2 ? pred__12097.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__12098) : pred__12097.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__12098)))){
return (new shadow.dom.Size(self__.w,G__12058,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__12058),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__12058){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__12058,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__12062){
var extmap__5342__auto__ = (function (){var G__12114 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12062,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__12062)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12114);
} else {
return G__12114;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__12062),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__12062),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__12650 = (i + (1));
var G__12651 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__12650;
ret = G__12651;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12128){
var vec__12129 = p__12128;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12129,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12129,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__12133 = arguments.length;
switch (G__12133) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__12665 = ps;
var G__12666 = (i + (1));
el__$1 = G__12665;
i = G__12666;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__12155 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12155,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12155,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12155,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__12158_12672 = cljs.core.seq(props);
var chunk__12159_12673 = null;
var count__12160_12674 = (0);
var i__12161_12675 = (0);
while(true){
if((i__12161_12675 < count__12160_12674)){
var vec__12173_12676 = chunk__12159_12673.cljs$core$IIndexed$_nth$arity$2(null,i__12161_12675);
var k_12677 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12173_12676,(0),null);
var v_12678 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12173_12676,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_12677);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_12677),v_12678);


var G__12680 = seq__12158_12672;
var G__12681 = chunk__12159_12673;
var G__12682 = count__12160_12674;
var G__12683 = (i__12161_12675 + (1));
seq__12158_12672 = G__12680;
chunk__12159_12673 = G__12681;
count__12160_12674 = G__12682;
i__12161_12675 = G__12683;
continue;
} else {
var temp__5804__auto___12684 = cljs.core.seq(seq__12158_12672);
if(temp__5804__auto___12684){
var seq__12158_12686__$1 = temp__5804__auto___12684;
if(cljs.core.chunked_seq_QMARK_(seq__12158_12686__$1)){
var c__5525__auto___12687 = cljs.core.chunk_first(seq__12158_12686__$1);
var G__12688 = cljs.core.chunk_rest(seq__12158_12686__$1);
var G__12689 = c__5525__auto___12687;
var G__12690 = cljs.core.count(c__5525__auto___12687);
var G__12691 = (0);
seq__12158_12672 = G__12688;
chunk__12159_12673 = G__12689;
count__12160_12674 = G__12690;
i__12161_12675 = G__12691;
continue;
} else {
var vec__12177_12693 = cljs.core.first(seq__12158_12686__$1);
var k_12694 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12177_12693,(0),null);
var v_12695 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12177_12693,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_12694);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_12694),v_12695);


var G__12696 = cljs.core.next(seq__12158_12686__$1);
var G__12697 = null;
var G__12698 = (0);
var G__12699 = (0);
seq__12158_12672 = G__12696;
chunk__12159_12673 = G__12697;
count__12160_12674 = G__12698;
i__12161_12675 = G__12699;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__12209 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12209,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12209,(1),null);
var seq__12213_12701 = cljs.core.seq(node_children);
var chunk__12215_12702 = null;
var count__12216_12703 = (0);
var i__12217_12704 = (0);
while(true){
if((i__12217_12704 < count__12216_12703)){
var child_struct_12705 = chunk__12215_12702.cljs$core$IIndexed$_nth$arity$2(null,i__12217_12704);
if((!((child_struct_12705 == null)))){
if(typeof child_struct_12705 === 'string'){
var text_12709 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_12709),child_struct_12705].join(''));
} else {
var children_12718 = shadow.dom.svg_node(child_struct_12705);
if(cljs.core.seq_QMARK_(children_12718)){
var seq__12259_12720 = cljs.core.seq(children_12718);
var chunk__12261_12721 = null;
var count__12262_12722 = (0);
var i__12263_12723 = (0);
while(true){
if((i__12263_12723 < count__12262_12722)){
var child_12724 = chunk__12261_12721.cljs$core$IIndexed$_nth$arity$2(null,i__12263_12723);
if(cljs.core.truth_(child_12724)){
node.appendChild(child_12724);


var G__12726 = seq__12259_12720;
var G__12727 = chunk__12261_12721;
var G__12728 = count__12262_12722;
var G__12729 = (i__12263_12723 + (1));
seq__12259_12720 = G__12726;
chunk__12261_12721 = G__12727;
count__12262_12722 = G__12728;
i__12263_12723 = G__12729;
continue;
} else {
var G__12730 = seq__12259_12720;
var G__12731 = chunk__12261_12721;
var G__12732 = count__12262_12722;
var G__12733 = (i__12263_12723 + (1));
seq__12259_12720 = G__12730;
chunk__12261_12721 = G__12731;
count__12262_12722 = G__12732;
i__12263_12723 = G__12733;
continue;
}
} else {
var temp__5804__auto___12735 = cljs.core.seq(seq__12259_12720);
if(temp__5804__auto___12735){
var seq__12259_12737__$1 = temp__5804__auto___12735;
if(cljs.core.chunked_seq_QMARK_(seq__12259_12737__$1)){
var c__5525__auto___12738 = cljs.core.chunk_first(seq__12259_12737__$1);
var G__12739 = cljs.core.chunk_rest(seq__12259_12737__$1);
var G__12740 = c__5525__auto___12738;
var G__12741 = cljs.core.count(c__5525__auto___12738);
var G__12742 = (0);
seq__12259_12720 = G__12739;
chunk__12261_12721 = G__12740;
count__12262_12722 = G__12741;
i__12263_12723 = G__12742;
continue;
} else {
var child_12744 = cljs.core.first(seq__12259_12737__$1);
if(cljs.core.truth_(child_12744)){
node.appendChild(child_12744);


var G__12745 = cljs.core.next(seq__12259_12737__$1);
var G__12746 = null;
var G__12747 = (0);
var G__12748 = (0);
seq__12259_12720 = G__12745;
chunk__12261_12721 = G__12746;
count__12262_12722 = G__12747;
i__12263_12723 = G__12748;
continue;
} else {
var G__12749 = cljs.core.next(seq__12259_12737__$1);
var G__12750 = null;
var G__12751 = (0);
var G__12752 = (0);
seq__12259_12720 = G__12749;
chunk__12261_12721 = G__12750;
count__12262_12722 = G__12751;
i__12263_12723 = G__12752;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_12718);
}
}


var G__12753 = seq__12213_12701;
var G__12754 = chunk__12215_12702;
var G__12755 = count__12216_12703;
var G__12756 = (i__12217_12704 + (1));
seq__12213_12701 = G__12753;
chunk__12215_12702 = G__12754;
count__12216_12703 = G__12755;
i__12217_12704 = G__12756;
continue;
} else {
var G__12757 = seq__12213_12701;
var G__12758 = chunk__12215_12702;
var G__12759 = count__12216_12703;
var G__12760 = (i__12217_12704 + (1));
seq__12213_12701 = G__12757;
chunk__12215_12702 = G__12758;
count__12216_12703 = G__12759;
i__12217_12704 = G__12760;
continue;
}
} else {
var temp__5804__auto___12761 = cljs.core.seq(seq__12213_12701);
if(temp__5804__auto___12761){
var seq__12213_12762__$1 = temp__5804__auto___12761;
if(cljs.core.chunked_seq_QMARK_(seq__12213_12762__$1)){
var c__5525__auto___12763 = cljs.core.chunk_first(seq__12213_12762__$1);
var G__12764 = cljs.core.chunk_rest(seq__12213_12762__$1);
var G__12765 = c__5525__auto___12763;
var G__12766 = cljs.core.count(c__5525__auto___12763);
var G__12767 = (0);
seq__12213_12701 = G__12764;
chunk__12215_12702 = G__12765;
count__12216_12703 = G__12766;
i__12217_12704 = G__12767;
continue;
} else {
var child_struct_12768 = cljs.core.first(seq__12213_12762__$1);
if((!((child_struct_12768 == null)))){
if(typeof child_struct_12768 === 'string'){
var text_12769 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_12769),child_struct_12768].join(''));
} else {
var children_12770 = shadow.dom.svg_node(child_struct_12768);
if(cljs.core.seq_QMARK_(children_12770)){
var seq__12273_12771 = cljs.core.seq(children_12770);
var chunk__12275_12772 = null;
var count__12276_12773 = (0);
var i__12277_12774 = (0);
while(true){
if((i__12277_12774 < count__12276_12773)){
var child_12775 = chunk__12275_12772.cljs$core$IIndexed$_nth$arity$2(null,i__12277_12774);
if(cljs.core.truth_(child_12775)){
node.appendChild(child_12775);


var G__12776 = seq__12273_12771;
var G__12777 = chunk__12275_12772;
var G__12778 = count__12276_12773;
var G__12779 = (i__12277_12774 + (1));
seq__12273_12771 = G__12776;
chunk__12275_12772 = G__12777;
count__12276_12773 = G__12778;
i__12277_12774 = G__12779;
continue;
} else {
var G__12781 = seq__12273_12771;
var G__12782 = chunk__12275_12772;
var G__12783 = count__12276_12773;
var G__12784 = (i__12277_12774 + (1));
seq__12273_12771 = G__12781;
chunk__12275_12772 = G__12782;
count__12276_12773 = G__12783;
i__12277_12774 = G__12784;
continue;
}
} else {
var temp__5804__auto___12785__$1 = cljs.core.seq(seq__12273_12771);
if(temp__5804__auto___12785__$1){
var seq__12273_12786__$1 = temp__5804__auto___12785__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12273_12786__$1)){
var c__5525__auto___12787 = cljs.core.chunk_first(seq__12273_12786__$1);
var G__12788 = cljs.core.chunk_rest(seq__12273_12786__$1);
var G__12789 = c__5525__auto___12787;
var G__12790 = cljs.core.count(c__5525__auto___12787);
var G__12791 = (0);
seq__12273_12771 = G__12788;
chunk__12275_12772 = G__12789;
count__12276_12773 = G__12790;
i__12277_12774 = G__12791;
continue;
} else {
var child_12792 = cljs.core.first(seq__12273_12786__$1);
if(cljs.core.truth_(child_12792)){
node.appendChild(child_12792);


var G__12793 = cljs.core.next(seq__12273_12786__$1);
var G__12794 = null;
var G__12795 = (0);
var G__12796 = (0);
seq__12273_12771 = G__12793;
chunk__12275_12772 = G__12794;
count__12276_12773 = G__12795;
i__12277_12774 = G__12796;
continue;
} else {
var G__12797 = cljs.core.next(seq__12273_12786__$1);
var G__12798 = null;
var G__12799 = (0);
var G__12800 = (0);
seq__12273_12771 = G__12797;
chunk__12275_12772 = G__12798;
count__12276_12773 = G__12799;
i__12277_12774 = G__12800;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_12770);
}
}


var G__12801 = cljs.core.next(seq__12213_12762__$1);
var G__12802 = null;
var G__12803 = (0);
var G__12804 = (0);
seq__12213_12701 = G__12801;
chunk__12215_12702 = G__12802;
count__12216_12703 = G__12803;
i__12217_12704 = G__12804;
continue;
} else {
var G__12806 = cljs.core.next(seq__12213_12762__$1);
var G__12807 = null;
var G__12808 = (0);
var G__12809 = (0);
seq__12213_12701 = G__12806;
chunk__12215_12702 = G__12807;
count__12216_12703 = G__12808;
i__12217_12704 = G__12809;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12813 = arguments.length;
var i__5727__auto___12814 = (0);
while(true){
if((i__5727__auto___12814 < len__5726__auto___12813)){
args__5732__auto__.push((arguments[i__5727__auto___12814]));

var G__12816 = (i__5727__auto___12814 + (1));
i__5727__auto___12814 = G__12816;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq12296){
var G__12297 = cljs.core.first(seq12296);
var seq12296__$1 = cljs.core.next(seq12296);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12297,seq12296__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
