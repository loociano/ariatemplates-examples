/*
 * Copyright 2009-2014 Amadeus s.a.s.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
//***MULTI-PART
//*******************
//LOGICAL-PATH:aria/storage/EventBus.js
//*******************
var e=require("../Aria");module.exports=e.classDefinition({$classpath:"aria.storage.EventBus",$singleton:!0,$events:{change:""},$prototype:{stop:!1,notifyChange:function(t,i,r,s,a){this.$raiseEvent({name:"change",location:t,namespace:a,key:i,newValue:r,oldValue:s,url:e.$window.location})}}});
//*******************
//LOGICAL-PATH:aria/storage/IStorage.js
//*******************
var e=require("../Aria");module.exports=e.interfaceDefinition({$classpath:"aria.storage.IStorage",$events:{change:""},$interface:{getItem:function(){},setItem:function(){},removeItem:function(){},clear:function(){}}});
//*******************
//LOGICAL-PATH:aria/storage/AbstractStorage.js
//*******************
var e=require("../Aria"),t=require("./EventBus"),i=require("../utils/json/JsonSerializer"),r=require("../utils/Type"),s=require("./IStorage"),a=require("../utils/Json");module.exports=e.classDefinition({$classpath:"aria.storage.AbstractStorage",$implements:[s],$statics:{INVALID_SERIALIZER:"Invalid serializer configuration. Make sure it implements aria.utils.json.ISerializer",INVALID_NAMESPACE:"Inavlid namespace configuration. Must be a string.",EVENT_KEYS:["name","key","oldValue","newValue","url"]},$constructor:function(e){this._disposeSerializer=!1,this._eventCallback={fn:this._onStorageEvent,scope:this},t.$on({change:this._eventCallback});var s=e?e.serializer:null,a=!0;s&&("serialize"in s&&"parse"in s?a=!1:this.$logError(this.INVALID_SERIALIZER)),a&&(s=new i(!0),this._disposeSerializer=!0),this.serializer=s;var n="";e&&e.namespace&&(r.isString(e.namespace)?n=e.namespace+"$":this.$logError(this.INVALID_NAMESPACE)),this.namespace=n},$destructor:function(){t.$removeListeners({change:this._eventCallback}),this._disposeSerializer&&this.serializer&&this.serializer.$dispose(),this.serializer=null,this._eventCallback=null},$prototype:{getItem:function(e){var t=this._get(this.namespace+e);return this.serializer.parse(t)},setItem:function(e,i){var r=this.getItem(e),s=this.serializer.serialize(i,{reversible:!0,keepMetadata:!1});t.stop=!0,this._set(this.namespace+e,s),t.stop=!1,i=this.serializer.parse(s),t.notifyChange(this.type,e,i,r,this.namespace)},removeItem:function(e){var i=this.getItem(e);null!==i&&(t.stop=!0,this._remove(this.namespace+e),t.stop=!1,t.notifyChange(this.type,e,null,i,this.namespace))},clear:function(){t.stop=!0,this._clear(),t.stop=!1,t.notifyChange(this.type,null,null,null)},_onStorageEvent:function(e){if(null===e.key||e.namespace===this.namespace){var t=a.copy(e,!1,this.EVENT_KEYS);this.$raiseEvent(t)}}}});
//*******************
//LOGICAL-PATH:aria/storage/Beans.js
//*******************
var e=require("../Aria"),t=require("../core/JsonTypes");module.exports=e.beanDefinitions({$package:"aria.storage.Beans",$namespaces:{json:t},$beans:{ConstructorArgs:{$type:"json:Object",$properties:{namespace:{$type:"json:String"},serializer:{$type:"json:ObjectRef"}}}}});
//*******************
//LOGICAL-PATH:aria/storage/HTML5Storage.js
//*******************
var e=require("../Aria"),t=require("../utils/Event"),i=require("./AbstractStorage"),r=require("../core/Browser");module.exports=e.classDefinition({$classpath:"aria.storage.HTML5Storage",$extends:i,$statics:{UNAVAILABLE:"%1 not supported by the browser."},$constructor:function(i,r,s){if(this.$AbstractStorage.constructor.call(this,i),this.type=r,this.storage=e.$window[r],this._browserEventCb={fn:this._browserEvent,scope:this},this.storage)t.addListener(e.$window,"storage",this._browserEventCb);else if(s!==!1)throw this._disposeSerializer&&this.serializer&&this.serializer.$dispose(),this.$logError(this.UNAVAILABLE,[this.type]),new Error(this.type)},$destructor:function(){t.removeListener(e.$window,"storage",this._browserEventCb),this._browserEventCb=null,this.__target=null,this.$AbstractStorage.$destructor.call(this)},$prototype:{_get:function(e){return this.storage.getItem(e)},_set:function(e,t){this.storage.setItem(e,t)},_remove:function(e){this.storage.removeItem(e)},_clear:function(){this.storage.clear()},_browserEvent:function(e){if(!aria.storage.EventBus.stop){var t=this.namespace?e.key.substring(0,this.namespace.length)===this.namespace:!0;if(t){var i=e.oldValue,r=e.newValue;i&&(i=this.serializer.parse(i)),r&&(r=this.serializer.parse(r)),this._onStorageEvent({name:"change",key:e.key,oldValue:i,newValue:r,url:e.url,namespace:this.namespace})}}},$on:function(e){r.isIE8&&this.$logWarn(this.UNAVAILABLE,"change event"),this.$AbstractStorage.$on.call(this,e)}}});
//*******************
//LOGICAL-PATH:aria/storage/UserData.js
//*******************
var e=require("../Aria"),t=require("../utils/json/JsonSerializer"),i=require("../core/Browser"),r=require("./IStorage"),s=require("./AbstractStorage");!function(){function a(){c||(c=new t(!0));var e=l.getAttribute("kMap");return e?c.parse(e):{}}function n(e,t){e?h[t]=e:delete h[t],l.setAttribute("kMap",c.serialize(h)),l.save("JSONPersist")}function o(e,t){if(h=a(),!t||e in h)return h[e];var i="uD"+u++;return n(i,e),i}var l,c,h={},u=4;module.exports=e.classDefinition({$classpath:"aria.storage.UserData",$implements:[r],$extends:s,$onload:function(){if(i.isOldIE)try{var t=e.$frameworkWindow.document.createElement("form");t.innerHTML="<input type='hidden' id='__aria_storage_UserData__' style='behavior:url(#default#userData)'>",e.$frameworkWindow.document.body.appendChild(t),l=t.firstChild,l.load("JSONPersist"),a()}catch(r){}},$onunload:function(){i.isOldIE&&(l&&l.parentNode.removeChild(l),l=null),c&&c.$dispose(),c=null},$prototype:{_get:function(e){var t=o(e);return t?l.getAttribute(t):null},_set:function(e,t){var i=o(e,!0);l.setAttribute(i,t),l.save("JSONPersist")},_remove:function(e){l.removeAttribute(o(e)),n(null,e),l.save("JSONPersist")},_clear:function(){var e=a();h={},l.removeAttribute("kMap");for(var t in e)e.hasOwnProperty(t)&&l.removeAttribute(e[t]);l.save("JSONPersist")}}})}();
//*******************
//LOGICAL-PATH:aria/storage/LocalStorage.js
//*******************
var e=require("../Aria"),t=require("../core/Browser"),i=require("./UserData"),r=require("./HTML5Storage");!function(){function s(e,t){e._get=t._get,e._set=t._set,e._remove=t._remove,e._clear=t._clear,e.storage=i._STORAGE,e.__keys=i._ALL_KEYS}module.exports=e.classDefinition({$classpath:"aria.storage.LocalStorage",$extends:r,$constructor:function(e){var r=t.isIE7;if(this.$HTML5Storage.constructor.call(this,e,"localStorage",!r),!this.storage&&r){var a=new i(e);s(this,a),this._fallback=a}},$destructor:function(){this._fallback&&(this._fallback.$dispose(),this._fallback=null),this.$HTML5Storage.$destructor.call(this)}})}();
//*******************
//LOGICAL-PATH:aria/storage/SessionStorage.js
//*******************
var e=require("../Aria"),t=require("./HTML5Storage");module.exports=e.classDefinition({$classpath:"aria.storage.SessionStorage",$extends:t,$constructor:function(e){this.$HTML5Storage.constructor.call(this,e,"sessionStorage")}});