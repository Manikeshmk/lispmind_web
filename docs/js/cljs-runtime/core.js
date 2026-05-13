goog.provide('core');
/**
 * Global memory atom to store user information.
 * Maps user-identifiable info like :name, :mood, :symptoms, etc.
 */
core.memory = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Store a key-value pair in memory.
 * Example: (remember :name "Alice")
 */
core.remember = (function core$remember(key,value){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(core.memory,cljs.core.assoc,key,value);
});
/**
 * Retrieve a value from memory by key.
 * Example: (recall :name)
 */
core.recall = (function core$recall(key){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(core.memory),key);
});
/**
 * Clear all stored memory.
 */
core.clear_memory = (function core$clear_memory(){
return cljs.core.reset_BANG_(core.memory,cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * Convert string to lowercase for consistent pattern matching.
 * Example: (normalize "Hello WORLD") => "hello world"
 */
core.normalize = (function core$normalize(text){
return clojure.string.lower_case(text);
});
/**
 * Extract a name from user input.
 * Example: (extract-name "my name is alice") => "alice"
 */
core.extract_name = (function core$extract_name(text){
var temp__5804__auto__ = cljs.core.re_find(/my name is\s+(\w+)/,text);
if(cljs.core.truth_(temp__5804__auto__)){
var parts = temp__5804__auto__;
return cljs.core.second(parts);
} else {
return null;
}
});
/**
 * Extract symptoms from user input as a list.
 * Example: (extract-symptom-list "I have fever and cough") => ["fever" "cough"]
 */
core.extract_symptom_list = (function core$extract_symptom_list(text){
return cljs.core.re_seq(/(?:have|with|and)\s+(\w+)/,text);
});
/**
 * Knowledge base containing AI domain facts
 */
core.knowledge_base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lisp","lisp",-250290683),"Lisp is a symbolic programming language used in AI systems. Created by John McCarthy in 1958, it emphasizes code-as-data and homoiconicity.",new cljs.core.Keyword(null,"ai","ai",760454697),"Artificial Intelligence is the simulation of human intelligence by machines. It includes machine learning, reasoning, perception, and natural language understanding.",new cljs.core.Keyword(null,"clojure","clojure",438975815),"Clojure is a modern dialect of Lisp running on the JVM, offering immutability, functional programming, and concurrency features.",new cljs.core.Keyword(null,"rule-based-ai","rule-based-ai",541850328),"Rule-based AI systems use explicit rules to make decisions. Experts define if-then rules, and the system applies them to solve problems.",new cljs.core.Keyword(null,"inference","inference",1425333267),"Inference is the process of applying logical rules to derive new conclusions from known facts. It is central to symbolic AI."], null);
/**
 * Look up a concept in the knowledge base.
 * Example: (lookup-knowledge :lisp)
 */
core.lookup_knowledge = (function core$lookup_knowledge(concept){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(core.knowledge_base,concept,"I don't have information about that topic.");
});
/**
 * Map emotions to keyword patterns
 */
core.emotion_keywords = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"happy","happy",2026698856),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["happy","great","wonderful","awesome","excellent","amazing"], null),new cljs.core.Keyword(null,"sad","sad",427137188),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sad","depressed","unhappy","miserable","terrible"], null),new cljs.core.Keyword(null,"angry","angry",1114596831),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["angry","furious","mad","irritated","annoyed","frustrated"], null),new cljs.core.Keyword(null,"tired","tired",1830089184),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tired","exhausted","fatigued","sleepy","weary"], null),new cljs.core.Keyword(null,"confused","confused",-425593592),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["confused","puzzled","lost","unclear","don't understand"], null)], null);
/**
 * Detect user emotion from text.
 * Returns the detected emotion keyword or nil.
 * Example: (detect-emotion "I am so sad") => :sad
 */
core.detect_emotion = (function core$detect_emotion(text){
var normalized = core.normalize(text);
return cljs.core.some((function (p__20888){
var vec__20893 = p__20888;
var emotion = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20893,(0),null);
var keywords = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20893,(1),null);
if(cljs.core.truth_(cljs.core.some((function (p1__20876_SHARP_){
return clojure.string.includes_QMARK_(normalized,p1__20876_SHARP_);
}),keywords))){
return emotion;
} else {
return null;
}
}),core.emotion_keywords);
});
/**
 * Generate a response based on detected emotion.
 * Example: (emotion-response :sad)
 */
core.emotion_response = (function core$emotion_response(emotion){
var G__20897 = emotion;
var G__20897__$1 = (((G__20897 instanceof cljs.core.Keyword))?G__20897.fqn:null);
switch (G__20897__$1) {
case "happy":
return "That's wonderful! I'm glad you're feeling good. Keep up the positive energy!";

break;
case "sad":
return "I'm sorry to hear that. I hope things improve soon. Remember that better days are ahead.";

break;
case "angry":
return "I understand you're frustrated. Take a deep breath. Want to talk about what's bothering you?";

break;
case "tired":
return "It sounds like you need rest. Make sure to take care of yourself and get some sleep.";

break;
case "confused":
return "I can help clarify things. What specifically are you confused about?";

break;
default:
return null;

}
});
/**
 * Define inference rules for symptoms.
 * Each rule maps a set of symptoms to a diagnosis.
 */
core.symptom_rules = cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cough","cough",1031952259),null,new cljs.core.Keyword(null,"fever","fever",305404086),null], null), null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"diagnosis","diagnosis",745359844),"You may have flu symptoms.",new cljs.core.Keyword(null,"recommendation","recommendation",-776027791),"Rest and stay hydrated."], null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tired","tired",1830089184),null,new cljs.core.Keyword(null,"headache","headache",-1777993988),null], null), null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"diagnosis","diagnosis",745359844),"You seem to need rest.",new cljs.core.Keyword(null,"recommendation","recommendation",-776027791),"Get some sleep and relax."], null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fever","fever",305404086),null,new cljs.core.Keyword(null,"headache","headache",-1777993988),null], null), null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"diagnosis","diagnosis",745359844),"You might have an infection.",new cljs.core.Keyword(null,"recommendation","recommendation",-776027791),"Consider seeing a doctor."], null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cough","cough",1031952259),null,new cljs.core.Keyword(null,"sore-throat","sore-throat",1351590185),null], null), null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"diagnosis","diagnosis",745359844),"You may have a cold.",new cljs.core.Keyword(null,"recommendation","recommendation",-776027791),"Drink warm fluids and rest."], null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cough","cough",1031952259),null,new cljs.core.Keyword(null,"fever","fever",305404086),null,new cljs.core.Keyword(null,"headache","headache",-1777993988),null], null), null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"diagnosis","diagnosis",745359844),"These are symptoms of illness.",new cljs.core.Keyword(null,"recommendation","recommendation",-776027791),"Monitor your health and seek medical advice if needed."], null)]);
/**
 * Extract mentioned symptoms from user input.
 * Example: (extract-symptoms "I have fever and cough") => #{:fever :cough}
 */
core.extract_symptoms = (function core$extract_symptoms(text){
var normalized = core.normalize(text);
var symptom_keywords = new cljs.core.PersistentArrayMap(null, 7, ["fever",new cljs.core.Keyword(null,"fever","fever",305404086),"cough",new cljs.core.Keyword(null,"cough","cough",1031952259),"headache",new cljs.core.Keyword(null,"headache","headache",-1777993988),"sore throat",new cljs.core.Keyword(null,"sore-throat","sore-throat",1351590185),"sore-throat",new cljs.core.Keyword(null,"sore-throat","sore-throat",1351590185),"tired",new cljs.core.Keyword(null,"tired","tired",1830089184),"fatigue",new cljs.core.Keyword(null,"fatigue","fatigue",435886183)], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__20902){
var vec__20911 = p__20902;
var keyword = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20911,(0),null);
var symptom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20911,(1),null);
if(clojure.string.includes_QMARK_(normalized,keyword)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,symptom);
} else {
return acc;
}
}),cljs.core.PersistentHashSet.EMPTY,symptom_keywords);
});
/**
 * Apply inference rules to diagnose based on symptoms.
 * Example: (infer-diagnosis "I have fever and cough")
 */
core.infer_diagnosis = (function core$infer_diagnosis(text){
var symptoms = core.extract_symptoms(text);
if(cljs.core.empty_QMARK_(symptoms)){
return null;
} else {
var or__5002__auto__ = (core.symptom_rules.cljs$core$IFn$_invoke$arity$1 ? core.symptom_rules.cljs$core$IFn$_invoke$arity$1(symptoms) : core.symptom_rules.call(null,symptoms));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.some((function (p__20918){
var vec__20919 = p__20918;
var rule_symptoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20919,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20919,(1),null);
if(cljs.core.truth_(cljs.core.some(symptoms,rule_symptoms))){
return result;
} else {
return null;
}
}),core.symptom_rules);
}
}
});
/**
 * Map greeting inputs to responses
 */
core.greeting_patterns = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"hello","hello",-245025397),"Hello! Nice to meet you.",new cljs.core.Keyword(null,"hi","hi",-1821422114),"Hi there! How can I help you?",new cljs.core.Keyword(null,"hey","hey",301812684),"Hey! What's on your mind?",new cljs.core.Keyword(null,"greet","greet",-535473050),"Nice to meet you!"], null);
/**
 * Detect if text is a greeting.
 * Example: (detect-greeting "hello there") => :hello
 */
core.detect_greeting = (function core$detect_greeting(text){
var normalized = core.normalize(text);
if(clojure.string.includes_QMARK_(normalized,"hello")){
return new cljs.core.Keyword(null,"hello","hello",-245025397);
} else {
if(clojure.string.includes_QMARK_(normalized,"hi ")){
return new cljs.core.Keyword(null,"hi","hi",-1821422114);
} else {
if(clojure.string.includes_QMARK_(normalized,"hey")){
return new cljs.core.Keyword(null,"hey","hey",301812684);
} else {
return null;

}
}
}
});
/**
 * Main inference engine that generates AI responses.
 * Applies rules in priority order:
 * 1. Name storage & recall
 * 2. Greeting detection
 * 3. Knowledge questions
 * 4. Emotion detection
 * 5. Symptom inference
 * 6. Fallback
 * 
 * Example: (respond "hello") => "Hello! Nice to meet you."
 */
core.respond = (function core$respond(input){
var normalized = core.normalize(input);
if(clojure.string.includes_QMARK_(normalized,"my name is")){
var name = core.extract_name(normalized);
if(cljs.core.truth_(name)){
core.remember(new cljs.core.Keyword(null,"name","name",1843675177),name);

return ["I will remember your name ",clojure.string.capitalize(name),". Nice to meet you!"].join('');
} else {
return "Could you tell me your name clearly?";
}
} else {
if(clojure.string.includes_QMARK_(normalized,"what is my name")){
var temp__5802__auto__ = core.recall(new cljs.core.Keyword(null,"name","name",1843675177));
if(cljs.core.truth_(temp__5802__auto__)){
var name = temp__5802__auto__;
return ["Your name is ",clojure.string.capitalize(name),"."].join('');
} else {
return "I don't know your name yet. Tell me your name!";
}
} else {
if(cljs.core.truth_(core.detect_greeting(input))){
var G__20927 = core.detect_greeting(input);
return (core.greeting_patterns.cljs$core$IFn$_invoke$arity$1 ? core.greeting_patterns.cljs$core$IFn$_invoke$arity$1(G__20927) : core.greeting_patterns.call(null,G__20927));
} else {
if(clojure.string.includes_QMARK_(normalized,"what is lisp")){
return core.lookup_knowledge(new cljs.core.Keyword(null,"lisp","lisp",-250290683));
} else {
if(clojure.string.includes_QMARK_(normalized,"what is ai")){
return core.lookup_knowledge(new cljs.core.Keyword(null,"ai","ai",760454697));
} else {
if(clojure.string.includes_QMARK_(normalized,"what is clojure")){
return core.lookup_knowledge(new cljs.core.Keyword(null,"clojure","clojure",438975815));
} else {
if(clojure.string.includes_QMARK_(normalized,"what is rule")){
return core.lookup_knowledge(new cljs.core.Keyword(null,"rule-based-ai","rule-based-ai",541850328));
} else {
if(clojure.string.includes_QMARK_(normalized,"what is inference")){
return core.lookup_knowledge(new cljs.core.Keyword(null,"inference","inference",1425333267));
} else {
if(cljs.core.truth_(core.detect_emotion(input))){
return core.emotion_response(core.detect_emotion(input));
} else {
if(cljs.core.truth_(core.extract_symptoms(normalized))){
var diagnosis = core.infer_diagnosis(normalized);
if(cljs.core.truth_(diagnosis)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"diagnosis","diagnosis",745359844).cljs$core$IFn$_invoke$arity$1(diagnosis))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"recommendation","recommendation",-776027791).cljs$core$IFn$_invoke$arity$1(diagnosis))].join('');
} else {
return "I detected some symptoms. You might want to consult a doctor.";
}
} else {
if(((clojure.string.includes_QMARK_(normalized,"bye")) || (clojure.string.includes_QMARK_(normalized,"goodbye")))){
return "Goodbye! Come back soon!";
} else {
if(clojure.string.includes_QMARK_(normalized,"help")){
return "I can help you with:\n\u2022 Storing your name\n\u2022 Detecting emotions\n\u2022 Analyzing symptoms\n\u2022 Answering questions about Lisp and AI\n\nTry asking me something!";
} else {
return "I do not understand. Could you rephrase that? Try saying 'help' for suggestions.";

}
}
}
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
/**
 * Get current timestamp for messages
 */
core.current_timestamp = (function core$current_timestamp(){
var now = (new Date());
var hours = now.getHours();
var minutes = now.getMinutes();
return [(((hours < (10)))?"0":""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hours),":",(((minutes < (10)))?"0":""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(minutes)].join('');
});
/**
 * Add a message to the chat area.
 * sender: :user or :ai
 * text: message content
 */
core.add_message = (function core$add_message(sender,text){
var messages_container = goog.dom.getElement("messages");
var message_div = goog.dom.createElement("div");
var bubble = goog.dom.createElement("div");
var timestamp = goog.dom.createElement("span");
goog.dom.classes(message_div,["message ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sender,new cljs.core.Keyword(null,"user","user",1532431356)))?"user-message":"ai-message")].join(''));

goog.dom.classes(bubble,"message-bubble");

goog.dom.setTextContent(bubble,text);

goog.dom.classes(timestamp,"message-timestamp");

goog.dom.setTextContent(timestamp,core.current_timestamp());

goog.dom.appendChild(message_div,bubble);

goog.dom.appendChild(message_div,timestamp);

goog.dom.appendChild(messages_container,message_div);

return (messages_container.scrollTop = messages_container.scrollHeight);
});
/**
 * Process user message and generate AI response
 */
core.handle_send_message = (function core$handle_send_message(){
var input_element = goog.dom.getElement("user-input");
var user_message = input_element.value;
if(clojure.string.blank_QMARK_(user_message)){
return null;
} else {
core.add_message(new cljs.core.Keyword(null,"user","user",1532431356),user_message);

(input_element.value = "");

var ai_response = core.respond(user_message);
return setTimeout((function (){
return core.add_message(new cljs.core.Keyword(null,"ai","ai",760454697),ai_response);
}),(300));
}
});
/**
 * Attach event handlers to UI elements
 */
core.setup_event_listeners = (function core$setup_event_listeners(){
var input_element = goog.dom.getElement("user-input");
var send_button = goog.dom.getElement("send-btn");
goog.events.listen(send_button,"click",(function (_){
return core.handle_send_message();
}));

return goog.events.listen(input_element,"keypress",(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.key,"Enter")){
e.preventDefault();

return core.handle_send_message();
} else {
return null;
}
}));
});
/**
 * Initialize the LispMind chatbot.
 * Called on page load and during development reload.
 */
core.init = (function core$init(){
console.log("\uD83E\uDDE0 LispMind Web \u2014 Symbolic AI Assistant Initialized!");

console.log("\uD83D\uDCDA Built with ClojureScript & Rule-Based Reasoning");

return core.setup_event_listeners();
});
core.init();

//# sourceMappingURL=core.js.map
