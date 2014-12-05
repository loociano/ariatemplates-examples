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
//LOGICAL-PATH:aria/embed/CfgBeans.js
//*******************
var e=require("../Aria"),t=require("../core/JsonTypes"),i=require("../templates/CfgBeans");module.exports=e.beanDefinitions({$package:"aria.embed.CfgBeans",$namespaces:{json:t,html:i},$beans:{ElementCfg:{$type:"json:Object",$properties:{controller:{$type:"json:ObjectRef"},type:{$type:"json:String",$default:"div"},attributes:{$type:"html:HtmlAttribute"},args:{$type:"json:MultiTypes"}}},PlaceholderCfg:{$type:"json:Object",$properties:{name:{$type:"json:String",$mandatory:!0},type:{$type:"json:String",$default:"div"},attributes:{$type:"html:HtmlAttribute"}}},MapCfg:{$type:"json:Object",$properties:{id:{$type:"json:String",$mandatory:!0},provider:{$type:"json:String",$mandatory:!0},initArgs:{$type:"json:MultiTypes"},loadingIndicator:{$type:"json:Boolean",$default:!1},type:{$type:"json:String",$default:"div"},attributes:{$type:"html:HtmlAttribute"}}}}});
//*******************
//LOGICAL-PATH:aria/embed/Element.js
//*******************
var e=require("../Aria");require("./CfgBeans");var t=require("../utils/Html"),i=require("../core/JsonValidator"),r=require("../utils/Dom"),a=require("../widgetLibs/BaseWidget");module.exports=e.classDefinition({$classpath:"aria.embed.Element",$extends:a,$constructor:function(e){this.$BaseWidget.constructor.apply(this,arguments),this._cfgOk=i.validateCfg(this._cfgBeanName,e)},$destructor:function(){this._domId&&(this._cfg.controller.onEmbededElementDispose?(this.$logWarn("onEmbededElementDispose has been deprecated, please use onEmbeddedElementDispose"),this._cfg.controller.onEmbededElementDispose(r.getElementById(this._domId),this._cfg.args)):this._cfg.controller.onEmbeddedElementDispose(r.getElementById(this._domId),this._cfg.args)),this.$BaseWidget.$destructor.apply(this,arguments)},$prototype:{_cfgBeanName:"aria.embed.CfgBeans.ElementCfg",writeMarkup:function(e){if(this._cfgOk){this._domId=this._createDynamicId();var i=this._cfg.type,r=["<",i,' id="',this._domId,'"'];this._cfg.attributes&&r.push(" "+t.buildAttributeList(this._cfg.attributes)),r.push("></"+i+">"),e.write(r.join(""))}},initWidget:function(){this._cfgOk&&(this._cfg.controller.onEmbededElementCreate?(this.$logWarn("onEmbededElementCreate has been deprecated, please use onEmbeddedElementCreate"),this._cfg.controller.onEmbededElementCreate(r.getElementById(this._domId),this._cfg.args)):this._cfg.controller.onEmbeddedElementCreate(r.getElementById(this._domId),this._cfg.args))}}});
//*******************
//LOGICAL-PATH:aria/embed/EmbedLib.js
//*******************
var e=require("../Aria"),t=require("../widgetLibs/WidgetLib");module.exports=e.classDefinition({$classpath:"aria.embed.EmbedLib",$extends:t,$singleton:!0,$prototype:{widgets:{Element:"aria.embed.Element",Map:"aria.embed.Map",Placeholder:"aria.embed.Placeholder"}}});
//*******************
//LOGICAL-PATH:aria/embed/IContentProvider.js
//*******************
var e=require("../Aria");module.exports=e.interfaceDefinition({$classpath:"aria.embed.IContentProvider",$events:{contentChange:""},$interface:{getContent:function(){}}});
//*******************
//LOGICAL-PATH:aria/embed/IEmbedController.js
//*******************
var e=require("../Aria");module.exports=e.interfaceDefinition({$classpath:"aria.embed.IEmbedController",$interface:{onEmbeddedElementCreate:function(){},onEmbeddedElementDispose:function(){}}});
//*******************
//LOGICAL-PATH:aria/embed/PlaceholderManager.js
//*******************
var e=require("../Aria"),t=require("../utils/Type"),i=require("../utils/Array");module.exports=e.classDefinition({$classpath:"aria.embed.PlaceholderManager",$singleton:!0,$constructor:function(){this._contentChangeListener={fn:this._onContentChange,scope:this},this._providers=[]},$destructor:function(){this.unregisterAll(),this._contentChangeListener=null},$events:{contentChange:""},$statics:{PLACEHOLDER_PATH_NOT_FOUND:"No content has been found for the placeholder path '%1'"},$prototype:{getContent:function(e){for(var i=[],r=t,a=this._providers,s=0,n=a.length;n>s;s++){var o=a[s],l=o.getContent(e);if(l)if(r.isArray(l))for(var u=0,c=l.length;c>u;u++)i.push(l[u]);else i.push(l)}return 0===i.length&&this.$logWarn(this.PLACEHOLDER_PATH_NOT_FOUND,[e]),i},register:function(e){var t=this._providers;i.contains(t,e)||(e.$addListeners({contentChange:this._contentChangeListener}),t.push(e))},unregister:function(e){var t=this._providers;i.remove(t,e)&&e.$removeListeners({contentChange:this._contentChangeListener})},unregisterAll:function(){for(var e=this._providers;e.length>0;)this.unregister(e[0])},_onContentChange:function(e){this.$raiseEvent({name:"contentChange",placeholderPaths:e.contentPaths})}}});
//*******************
//LOGICAL-PATH:aria/embed/Placeholder.js
//*******************
var e=require("../Aria");require("./CfgBeans");var t=require("../core/JsonValidator"),i=require("../html/Template"),r=require("./PlaceholderManager"),a=require("../utils/Array"),s=require("../widgetLibs/BaseWidget"),n=require("../utils/Type");module.exports=e.classDefinition({$classpath:"aria.embed.Placeholder",$extends:s,$constructor:function(e,i){this.$BaseWidget.constructor.apply(this,arguments),this._cfgOk=t.validateCfg(this._cfgBeanName,e),this._placeholderPath=this._getPlaceholderPath(i),this._sectionId="p_"+this._createDynamicId(),this._onContentChangeListener={fn:this._onContentChange,scope:this},this._placeholderManager=r,this._placeholderManager.$addListeners({contentChange:this._onContentChangeListener})},$destructor:function(){this._placeholderManager.$removeListeners({contentChange:this._onContentChangeListener}),this._onContentChangeListener=null,this.$BaseWidget.$destructor.apply(this,arguments)},$prototype:{_cfgBeanName:"aria.embed.CfgBeans.PlaceholderCfg",writeMarkup:function(e){if(this._cfgOk){var t=this._cfg,i={id:this._sectionId,type:t.type,attributes:t.attributes};e.beginSection(i),this._writePlaceholderContent(e),e.endSection()}},_writePlaceholderContent:function(e){for(var t=n,a=r,s=this._placeholderPath,o=a.getContent(s),l=0,c=o.length;c>l;l++){var u=o[l];if(t.isString(u))e.write(u);else{var h=new i(u,this._context,this._lineNumber);h.subTplCtxt.placeholderPath=s,e.registerBehavior(h),h.writeMarkup(e)}}},_onContentChange:function(e){var t=e.placeholderPaths;if(a.contains(t,this._placeholderPath)){var i=this._context.getRefreshedSection({section:this._sectionId,writerCallback:{fn:this._writePlaceholderContent,scope:this}});this._context.insertSection(i)}},_getPlaceholderPath:function(){for(var e="",t=this._context;t;){if(t.placeholderPath){e=t.placeholderPath+".";break}t=t.parent}return e+this._cfg.name}}});