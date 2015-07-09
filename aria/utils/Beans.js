/*
 * Aria Templates 1.7.8 - 08 Jun 2015
 *
 * Copyright 2009-2015 Amadeus s.a.s.
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
var Aria = require("../Aria");
var ariaCoreJsonTypes = require("../core/JsonTypes");
var ariaCoreEnvironmentEnvironmentBaseCfgBeans = require("../core/environment/EnvironmentBaseCfgBeans");


/**
 * @class aria.utils.Beans
 */
module.exports = Aria.beanDefinitions({
    $package : "aria.utils.Beans",
    $description : "",
    $namespaces : {
        "json" : ariaCoreJsonTypes,
        "environmentBase" : ariaCoreEnvironmentEnvironmentBaseCfgBeans
    },
    $beans : {
        "options" : {
            $type : "json:Object",
            $description : "Configuration bean used by the interpreter of Date.js",
            $properties : {
                "referenceDate" : {
                    $type : "json:Date",
                    $description : "Reference date from which value can be calculated."
                },
                "inputPattern" : {
                    $type : "environmentBase:inputFormatTypes",
                    $description : "Date pattern used to match user input to convert it in a Javascript valid date."
                }
            }
        }
    }
});