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
//LOGICAL-PATH:aria/templates/TxtClassGenerator.js
//*******************
var e=require("../Aria"),t=require("./TxtParser"),i=require("./ClassGenerator");module.exports=e.classDefinition({$classpath:"aria.templates.TxtClassGenerator",$extends:i,$singleton:!0,$constructor:function(){this.$ClassGenerator.constructor.call(this),this._loadStatements(["TextTemplate"]),this._parser=t,this._superClass="aria.templates.TextTemplate",this._classType="TXT",this._rootStatement="TextTemplate",this._templateParamBean="aria.templates.CfgBeans.TextTemplateCfg"},$prototype:{_writeClassInit:function(e){e.enterBlock("classInit"),e.writeln(e.templateParam.$classpath,".processTextTemplate = aria.templates.TextTemplate.processTextTemplate;"),e.leaveBlock(),this.$ClassGenerator._writeClassInit.call(this,e)}}});
//*******************
//LOGICAL-PATH:aria/core/loaders/TxtPreprocessor.js
//*******************
var e=require("./TplBasePreprocessor");module.exports=e(require("../../templates/TxtClassGenerator.js"));
//*******************
//LOGICAL-PATH:aria/templates/TxtCtxt.js
//*******************
var e=require("../Aria"),t=require("./IBaseTemplate");require("./CfgBeans");var i=require("./BaseCtxt"),r=require("../core/JsonValidator");module.exports=e.classDefinition({$classpath:"aria.templates.TxtCtxt",$extends:i,$implements:[t],$constructor:function(){this.$BaseCtxt.constructor.apply(this,arguments),this.tplClasspath=null},$destructor:function(){if(this._tpl){try{this._tpl.$dispose()}catch(e){this.$logError(this.TEMPLATE_DESTR_ERROR,[this.tplClasspath],e)}t.prototype.$destructor.call(this._tpl),this._tpl=null}this.$BaseCtxt.$destructor.call(this)},$prototype:{initTemplate:function(i){if(!r.normalize({json:i,beanName:"aria.templates.CfgBeans.InitTxtTemplateCfg"}))return!1;this._cfg=i;var a;try{a=e.getClassInstance(i.classpath)}catch(s){return this.$logError(this.TEMPLATE_CONSTR_ERROR,[i.classpath],s),!1}this._tpl=a,this.tplClasspath=i.classpath,t.call(a,this);var n=this;return a.__$write=function(e){return n.__$write.call(n,e)},a.__$initTemplate()?(a.data=i.data,!0):!1},getTextTemplateContent:function(){this.$assert(19,null==this._out),this._out=[],this._callMacro(this._out,"main");var e=this._out.join("");return this._out=null,e},__$write:function(e){this._out.push(e)}}});
//*******************
//LOGICAL-PATH:aria/templates/TextTemplate.js
//*******************
var e=require("../Aria"),t=require("./TxtCtxt"),i=require("./BaseTemplate");module.exports=e.classDefinition({$classpath:"aria.templates.TextTemplate",$extends:i,$prototype:{data:{},$init:function(e,i){e.$BaseTemplate.constructor.classDefinition.$prototype.$init(e,i),aria.templates.TextTemplate.processTextTemplate=function(e){var i=new t;i.initTemplate({classpath:this.prototype.$classpath,data:e});var r=i.getTextTemplateContent();return i.$dispose(),r}}}});
//*******************
//LOGICAL-PATH:aria/templates/ViewCfgBeans.js
//*******************
var e=require("../Aria"),t=require("../core/JsonTypes");module.exports=e.beanDefinitions({$package:"aria.templates.ViewCfgBeans",$namespaces:{json:t},$beans:{Item:{$type:"json:Object",$properties:{value:{$type:"json:MultiTypes"},initIndex:{$type:"json:MultiTypes",$mandatory:!0,$contentTypes:[{$type:"json:Integer"},{$type:"json:String"}]},filteredIn:{$type:"json:Boolean",$mandatory:!0},sortKey:{$type:"json:String"},pageIndex:{$type:"json:Integer",$mandatory:!0}}},Pages:{$type:"json:Object",$properties:{pageIndex:{$type:"json:Integer"},pageNumber:{$type:"json:Integer"},firstItemIndex:{$type:"json:Integer"},lastItemIndex:{$type:"json:Integer"},firstItemNumber:{$type:"json:Integer"},lastItemNumber:{$type:"json:Integer"}}}}});
//*******************
//LOGICAL-PATH:aria/templates/environment/ImgUrlMappingCfgBeans.js
//*******************
var e=require("../../Aria"),t=require("../../core/JsonTypes");module.exports=e.beanDefinitions({$package:"aria.templates.environment.ImgUrlMappingCfgBeans",$namespaces:{json:t},$beans:{AppCfg:{$type:"json:Object",$restricted:!1,$properties:{imgUrlMapping:{$type:"json:FunctionRef",$default:null}}}}});
//*******************
//LOGICAL-PATH:aria/templates/environment/ImgUrlMapping.js
//*******************
var e=require("../../Aria");require("./ImgUrlMappingCfgBeans");var t=require("../../core/environment/EnvironmentBase"),i=require("../../utils/Json");module.exports=e.classDefinition({$classpath:"aria.templates.environment.ImgUrlMapping",$extends:t,$singleton:!0,$prototype:{_cfgPackage:"aria.templates.environment.ImgUrlMappingCfgBeans.AppCfg",getImgUrlMappingCfg:function(){return i.copy(this.checkApplicationSettings("imgUrlMapping"))}}});