/*
 * Aria Templates 1.7.15 - 11 Dec 2015
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
Aria.classDefinition({
    "$classpath": "aria.widgets.AriaSkin",
    "$singleton": true,
    "$prototype": {
        "skinName": "atFlatSkin",
        "skinObject": {
            "SortIndicator": {
                "std": {
                    "iconset": "sortIndicator",
                    "iconprefix": "si_"
                },
                "aria:skinNormalized": true
            },
            "Fieldset": {
                "std": {
                    "frame": {
                        "frameType": "Simple"
                    },
                    "states": {
                        "normal": {
                            "label": {
                                "left": 0,
                                "top": 0,
                                "paddingRight": 5,
                                "backgroundColor": "transparent",
                                "paddingTop": 0,
                                "paddingLeft": 0,
                                "paddingBottom": 0,
                                "fontWeight": "bold",
                                "color": "black"
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 10,
                                "paddingRight": 5,
                                "paddingBottom": 15,
                                "paddingLeft": 15,
                                "marginTop": 20,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderSize": 1,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 6,
                                "borderTopRightRadius": 6,
                                "borderBottomLeftRadius": 6,
                                "borderBottomRightRadius": 6,
                                "boxShadow": "none",
                                "backgroundColor": "#F8F8F8",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        }
                    }
                },
                "aria:skinNormalized": true
            },
            "MultiAutoComplete": {
                "std": {
                    "iconsRight": "dropdown",
                    "frame": {
                        "frameType": "Simple"
                    },
                    "states": {
                        "normal": {
                            "icons": {
                                "dropdown": "multiSelectNormalRight:multiselect"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderRight": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#FFF",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "normalFocused": {
                            "icons": {
                                "dropdown": "multiSelectNormalFocusedRight:multiselect"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderRight": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#34495E",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#FFF",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "normalError": {
                            "icons": {
                                "dropdown": "multiSelectErrorRight:multiselect"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderRight": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#d87e8b",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#f2dede",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "normalErrorFocused": {
                            "icons": {
                                "dropdown": "multiSelectErrorFocusedRight:multiselect"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderRight": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#be293f",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#f2dede",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "mandatory": {
                            "icons": {
                                "dropdown": "multiSelectMandatoryRight:multiselect"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderRight": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#FFC",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "mandatoryFocused": {
                            "icons": {
                                "dropdown": "multiSelectMandatoryFocusedRight:multiselect"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderRight": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#F1C40F",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#FFC",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "mandatoryError": {
                            "icons": {
                                "dropdown": "multiSelectErrorRight:multiselect"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderRight": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#d87e8b",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#f2dede",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "mandatoryErrorFocused": {
                            "icons": {
                                "dropdown": "multiSelectErrorFocusedRight:multiselect"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderRight": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#be293f",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#f2dede",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "readOnly": {
                            "icons": {
                                "dropdown": "multiSelectReadOnlyRight:multiselect"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderRight": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#F8F8F8",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "prefill": {
                            "icons": {
                                "dropdown": "multiSelectNormalRight:multiselect"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderRight": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#FFF",
                                "color": "gray",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "disabled": {
                            "icons": {
                                "dropdown": "multiSelectDisabledRight:multiselect"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderRight": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#DFDFDF",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        }
                    },
                    "helpText": {
                        "italics": true,
                        "color": "#b2b2b2",
                        "font": {}
                    },
                    "offsetTop": 1,
                    "optionsBackgroundColor": "#E4E4E4",
                    "optionsColor": "#333",
                    "optionsBorderWidth": 1,
                    "optionsBorderColor": "#AAAAAA",
                    "closeSpriteURL": "atflatskin/close.gif",
                    "closeSpriteHeight": 10,
                    "closeSpriteWidth": 9,
                    "optionsHighlightBackgroundColor": "#0088CC",
                    "optionsHighlightColor": "#FFF",
                    "optionsHighlightBorderWidth": 1,
                    "optionsHighlightBorderColor": "#AAAAAA",
                    "closeHighlightSpriteURL": "atflatskin/close.gif",
                    "offsetRight": 15,
                    "simpleHTML": false,
                    "label": {
                        "fontWeight": "normal"
                    },
                    "innerPaddingTop": 0,
                    "innerPaddingRight": 0,
                    "innerPaddingBottom": 0,
                    "innerPaddingLeft": 0
                },
                "aria:skinNormalized": true
            },
            "MultiSelect": {
                "std": {
                    "iconsRight": "dropdown",
                    "offsetRight": 0,
                    "frame": {
                        "frameType": "Simple"
                    },
                    "states": {
                        "normal": {
                            "icons": {
                                "dropdown": "multiSelectNormalRight:multiselect"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 0,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#FFF",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "normalFocused": {
                            "icons": {
                                "dropdown": "multiSelectNormalFocusedRight:multiselect"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#34495E",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 0,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#FFF",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "normalError": {
                            "icons": {
                                "dropdown": "multiSelectErrorRight:multiselect"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#d87e8b",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 0,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#f2dede",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "normalErrorFocused": {
                            "icons": {
                                "dropdown": "multiSelectErrorFocusedRight:multiselect"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#be293f",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 0,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#f2dede",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "mandatory": {
                            "icons": {
                                "dropdown": "multiSelectMandatoryRight:multiselect"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 0,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#FFC",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "mandatoryFocused": {
                            "icons": {
                                "dropdown": "multiSelectMandatoryFocusedRight:multiselect"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#F1C40F",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 0,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#FFC",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "mandatoryError": {
                            "icons": {
                                "dropdown": "multiSelectErrorRight:multiselect"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#d87e8b",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 0,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#f2dede",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "mandatoryErrorFocused": {
                            "icons": {
                                "dropdown": "multiSelectErrorFocusedRight:multiselect"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#be293f",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 0,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#f2dede",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "readOnly": {
                            "icons": {
                                "dropdown": "multiSelectReadOnlyRight:multiselect"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 0,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#F8F8F8",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "prefill": {
                            "icons": {
                                "dropdown": "multiSelectNormalRight:multiselect"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 0,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#FFF",
                                "color": "gray",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "disabled": {
                            "icons": {
                                "dropdown": "multiSelectDisabledRight:multiselect"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 0,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#DFDFDF",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        }
                    },
                    "helpText": {
                        "italics": true,
                        "color": "#b2b2b2",
                        "font": {}
                    },
                    "offsetTop": 1,
                    "iconsLeft": "",
                    "listSclass": "dropdown",
                    "simpleHTML": false,
                    "label": {
                        "fontWeight": "normal"
                    },
                    "innerPaddingTop": 0,
                    "innerPaddingRight": 0,
                    "innerPaddingBottom": 0,
                    "innerPaddingLeft": 0
                },
                "aria:skinNormalized": true
            },
            "Gauge": {
                "std": {
                    "labelMargins": "3px 0 0 0",
                    "sprHeight": 17,
                    "spriteUrl": "",
                    "borderTopLeftRadius": 25,
                    "borderBottomLeftRadius": 25,
                    "borderTopRightRadius": 25,
                    "borderBottomRightRadius": 25,
                    "labelFontSize": 12,
                    "backgroundColor": "#0e90d2",
                    "container": {
                        "borderTopLeftRadius": 25,
                        "borderBottomLeftRadius": 25,
                        "borderTopRightRadius": 25,
                        "borderBottomRightRadius": 25,
                        "backgroundColor": "#F7F7F7",
                        "boxShadow": "inset 0 1px 2px rgba(0, 0, 0, 0.1)"
                    }
                },
                "aria:skinNormalized": true
            },
            "Splitter": {
                "std": {
                    "borderColor": "#DFDFDF",
                    "borderTopRightRadius": 6,
                    "borderTopLeftRadius": 6,
                    "borderBottomRightRadius": 6,
                    "borderBottomLeftRadius": 6,
                    "backgroundColor": "#F8F8F8",
                    "borderTopWidth": 1,
                    "borderBottomWidth": 1,
                    "borderLeftWidth": 1,
                    "borderRightWidth": 1,
                    "handleBackgroundColor": "#DFDFDF",
                    "handleSpriteURLv": "atflatskin/handle-vertical.gif",
                    "handleSpriteURLh": "atflatskin/handle-horizontal.gif",
                    "proxyBackgroundColor": "#efefef",
                    "proxySpriteURLv": "atflatskin/handle-vertical-proxy.gif",
                    "proxySpriteURLh": "atflatskin/handle-horizontal-proxy.gif",
                    "separatorWidth": 10,
                    "separatorHeight": 10,
                    "separatorBorder": {
                        "topWidth": 0,
                        "bottomWidth": 0,
                        "leftWidth": 0,
                        "rightWidth": 0
                    },
                    "panelBorder": {
                        "topWidth": 0,
                        "bottomWidth": 0,
                        "leftWidth": 0,
                        "rightWidth": 0
                    }
                },
                "aria:skinNormalized": true
            },
            "DatePicker": {
                "simple": {
                    "innerPaddingTop": 0,
                    "iconsRight": "dropdown",
                    "innerPaddingRight": 0,
                    "states": {
                        "mandatoryErrorFocused": {
                            "icons": {
                                "dropdown": "dropdown:datepicker_normal"
                            },
                            "color": "#000",
                            "label": {
                                "font": {}
                            },
                            "frame": {}
                        },
                        "normalErrorFocused": {
                            "icons": {
                                "dropdown": "dropdown:datepicker_normal"
                            },
                            "color": "#000",
                            "label": {
                                "font": {}
                            },
                            "frame": {}
                        },
                        "normal": {
                            "icons": {
                                "dropdown": "dropdown:datepicker_normal"
                            },
                            "color": "#000",
                            "label": {
                                "font": {}
                            },
                            "frame": {}
                        },
                        "mandatoryError": {
                            "icons": {
                                "dropdown": "dropdown:datepicker_normal"
                            },
                            "color": "#000",
                            "label": {
                                "font": {}
                            },
                            "frame": {}
                        },
                        "normalFocused": {
                            "icons": {
                                "dropdown": "dropdown:datepicker_normal"
                            },
                            "color": "#000",
                            "label": {
                                "font": {}
                            },
                            "frame": {}
                        },
                        "normalError": {
                            "icons": {
                                "dropdown": "dropdown:datepicker_normal"
                            },
                            "color": "#000",
                            "label": {
                                "font": {}
                            },
                            "frame": {}
                        },
                        "mandatory": {
                            "color": "#000",
                            "icons": {
                                "dropdown": "datepickerMandatoryRight:datepicker"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {}
                        },
                        "mandatoryFocused": {
                            "color": "#000",
                            "icons": {
                                "dropdown": "datepickerMandatoryFocusedRight:datepicker"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {}
                        },
                        "disabled": {
                            "color": "#000",
                            "icons": {
                                "dropdown": "datepickerDisabledRight:datepicker"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {}
                        },
                        "readOnly": {
                            "color": "#000",
                            "icons": {
                                "dropdown": "datepickerReadOnlyRight:datepicker"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {}
                        },
                        "prefill": {
                            "color": "gray",
                            "icons": {
                                "dropdown": "dropdown:datepicker_normal"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {}
                        }
                    },
                    "offsetTop": 1,
                    "innerPaddingLeft": 0,
                    "simpleHTML": true,
                    "innerPaddingBottom": 0,
                    "iconsLeft": "",
                    "calendar": {
                        "showWeekNumbers": true,
                        "restrainedNavigation": true,
                        "showShortcuts": true,
                        "numberOfUnits": 3,
                        "sclass": "std"
                    },
                    "offsetRight": 15,
                    "label": {
                        "fontWeight": "normal"
                    },
                    "helpText": {
                        "color": "#b2b2b2",
                        "italics": true,
                        "font": {}
                    },
                    "frame": {
                        "frameType": "SimpleHTML"
                    }
                },
                "std": {
                    "iconsRight": "dropdown",
                    "frame": {
                        "frameType": "Simple"
                    },
                    "calendar": {
                        "sclass": "std",
                        "showWeekNumbers": true,
                        "restrainedNavigation": true,
                        "showShortcuts": true,
                        "numberOfUnits": 3
                    },
                    "states": {
                        "normal": {
                            "icons": {
                                "dropdown": "datepickerNormalRight:datepicker"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 0,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#FFF",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "normalFocused": {
                            "icons": {
                                "dropdown": "datepickerNormalFocusedRight:datepicker"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#34495E",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 0,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#FFF",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "normalError": {
                            "icons": {
                                "dropdown": "datepickerNormalErrorRight:datepicker"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#d87e8b",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 0,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#f2dede",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "normalErrorFocused": {
                            "icons": {
                                "dropdown": "datepickerNormalErrorFocusedRight:datepicker"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#be293f",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 0,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#f2dede",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "mandatory": {
                            "icons": {
                                "dropdown": "datepickerMandatoryRight:datepicker"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 0,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#FFC",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "mandatoryFocused": {
                            "icons": {
                                "dropdown": "datepickerMandatoryFocusedRight:datepicker"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#F1C40F",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 0,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#FFC",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "mandatoryError": {
                            "icons": {
                                "dropdown": "datepickerMandatoryErrorRight:datepicker"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#d87e8b",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 0,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#f2dede",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "mandatoryErrorFocused": {
                            "icons": {
                                "dropdown": "datepickerMandatoryErrorFocusedRight:datepicker"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#be293f",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 0,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#f2dede",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "readOnly": {
                            "icons": {
                                "dropdown": "datepickerReadOnlyRight:datepicker"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 0,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#F8F8F8",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "prefill": {
                            "icons": {
                                "dropdown": "datepickerNormalRight:datepicker"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 0,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#FFF",
                                "color": "gray",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "disabled": {
                            "icons": {
                                "dropdown": "datepickerDisabledRight:datepicker"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 0,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#DFDFDF",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        }
                    },
                    "helpText": {
                        "italics": true,
                        "color": "#b2b2b2",
                        "font": {}
                    },
                    "offsetTop": 1,
                    "iconsLeft": "",
                    "offsetRight": 15,
                    "simpleHTML": false,
                    "label": {
                        "fontWeight": "normal"
                    },
                    "innerPaddingTop": 0,
                    "innerPaddingRight": 0,
                    "innerPaddingBottom": 0,
                    "innerPaddingLeft": 0
                },
                "aria:skinNormalized": true
            },
            "RadioButton": {
                "simple": {
                    "simpleHTML": true,
                    "iconset": "radioButtons",
                    "iconprefix": "rb_",
                    "states": {
                        "normalSelected": {
                            "color": "#000",
                            "font": {}
                        },
                        "focused": {
                            "color": "#000",
                            "font": {}
                        },
                        "focusedSelected": {
                            "color": "#000",
                            "font": {}
                        },
                        "disabled": {
                            "color": "#999",
                            "font": {}
                        },
                        "disabledSelected": {
                            "color": "#999",
                            "font": {}
                        },
                        "readonly": {
                            "color": "#999",
                            "font": {}
                        },
                        "readonlySelected": {
                            "color": "#999",
                            "font": {}
                        },
                        "normal": {
                            "color": "#000",
                            "font": {}
                        }
                    }
                },
                "std": {
                    "iconset": "radioButtons",
                    "iconprefix": "rb_",
                    "states": {
                        "disabledSelected": {
                            "color": "#999",
                            "font": {}
                        },
                        "normal": {
                            "color": "#000",
                            "font": {}
                        },
                        "focusedSelected": {
                            "color": "#000",
                            "font": {}
                        },
                        "focused": {
                            "color": "#000",
                            "font": {}
                        },
                        "normalSelected": {
                            "color": "#000",
                            "font": {}
                        },
                        "readonlySelected": {
                            "color": "#999",
                            "font": {}
                        },
                        "readonly": {
                            "color": "#999",
                            "font": {}
                        },
                        "disabled": {
                            "color": "#999",
                            "font": {}
                        }
                    },
                    "simpleHTML": false
                },
                "aria:skinNormalized": true
            },
            "Textarea": {
                "std": {
                    "frame": {
                        "frameType": "Simple"
                    },
                    "states": {
                        "normal": {
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 5,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderSize": 1,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#FFF",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "normalFocused": {
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 5,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderSize": 1,
                                "borderColor": "#34495E",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#FFF",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "normalError": {
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 5,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderSize": 1,
                                "borderColor": "#d87e8b",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#f2dede",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "normalErrorFocused": {
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 5,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderSize": 1,
                                "borderColor": "#be293f",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#f2dede",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "mandatory": {
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 5,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderSize": 1,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#FFC",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "mandatoryFocused": {
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 5,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderSize": 1,
                                "borderColor": "#F1C40F",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#FFC",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "mandatoryError": {
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 5,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderSize": 1,
                                "borderColor": "#d87e8b",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#f2dede",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "mandatoryErrorFocused": {
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 5,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderSize": 1,
                                "borderColor": "#be293f",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#f2dede",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "readOnly": {
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 5,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderSize": 1,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#F8F8F8",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "disabled": {
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 5,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderSize": 1,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#DFDFDF",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "prefill": {
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 5,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderSize": 1,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#FFF",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        }
                    },
                    "helpText": {
                        "italics": true,
                        "color": "#b2b2b2",
                        "font": {}
                    },
                    "innerPaddingLeft": 2,
                    "simpleHTML": false,
                    "label": {
                        "fontWeight": "normal"
                    },
                    "innerPaddingTop": 0,
                    "innerPaddingRight": 0,
                    "innerPaddingBottom": 0
                },
                "aria:skinNormalized": true
            },
            "TabPanel": {
                "std": {
                    "frame": {
                        "frameType": "Simple"
                    },
                    "states": {
                        "normal": {
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 15,
                                "paddingBottom": 5,
                                "paddingLeft": 15,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "",
                                "borderSize": 0,
                                "borderColor": "",
                                "borderTopLeftRadius": 6,
                                "borderTopRightRadius": 6,
                                "borderBottomLeftRadius": 6,
                                "borderBottomRightRadius": 6,
                                "boxShadow": "none",
                                "backgroundColor": "#ECF0F1",
                                "color": "#34495c",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        }
                    }
                },
                "aria:skinNormalized": true
            },
            "Dialog": {
                "std": {
                    "titleBarLeft": 0,
                    "titleBarTop": 0,
                    "closeIcon": "std:close",
                    "maximizeIcon": "std:maximize",
                    "titleBarHeight": 32,
                    "titleColor": "#34495e",
                    "divsclass": "dlg",
                    "titleBarRight": 0,
                    "titleBackgroundColor": "#BDC3C7",
                    "titleBorderRadius": "6px 6px 0px 0px",
                    "titlePadding": "0px 10px 0px 0px",
                    "titleBorder": "0px 0px 1px 0px",
                    "titleBorderStyle": "solid",
                    "titleBorderColor": "#34495e"
                },
                "aria:skinNormalized": true
            },
            "Calendar": {
                "std": {
                    "previousPageIcon": "std:leftArrow",
                    "nextPageIcon": "std:rightArrow",
                    "fontSize": 14,
                    "defaultTemplate": "aria.widgets.calendar.CalendarTemplate",
                    "divsclass": "calendar",
                    "generalBackgroundColor": "#FFF",
                    "day": {
                        "borderColor": "#FFF",
                        "backgroundColor": "#FFF",
                        "color": "#000"
                    },
                    "dayPadding": "3px",
                    "monthTitleBackgroundColor": "#FFF",
                    "monthTitleBorderColor": "#FFF",
                    "monthTitleColor": "#34495E",
                    "monthTitlePaddingBottom": "3px",
                    "monthTitlePaddingTop": "3px",
                    "monthTitleFontSize": 16,
                    "weekDaysLabelBackgroundColor": "#FFF",
                    "weekDaysLabelBorderColor": "#FFF",
                    "weekDaysLabelColor": "#2C3E50",
                    "weekDaysLabelFontWeight": "bold",
                    "weekDaysLabelPadding": "3px",
                    "weekEnd": {
                        "backgroundColor": "#DFDFDF",
                        "borderColor": "#DFDFDF",
                        "color": "#000"
                    },
                    "weekNumberBackgroundColor": "#FFF",
                    "weekNumberBorderColor": "#FFF",
                    "selectedDate": {
                        "borderColor": "#E74C3C",
                        "backgroundColor": "#E74C3C",
                        "color": "#FFF"
                    },
                    "mouseOverDate": {
                        "borderColor": "#E74C3C",
                        "backgroundColor": "#FFF",
                        "color": "#000",
                        "borderStyle": "solid"
                    },
                    "today": {
                        "borderColor": "#34495E",
                        "backgroundColor": "#34495E",
                        "color": "#FFF"
                    },
                    "selectedFromDate": {
                        "borderColor": "#E74C3C",
                        "backgroundColor": "#E74C3C",
                        "color": "#FFF",
                        "borderStyle": "solid",
                        "fontWeight": "bold"
                    },
                    "selectedToDate": {
                        "borderColor": "#E74C3C",
                        "backgroundColor": "#E74C3C",
                        "color": "#FFF",
                        "borderStyle": "solid",
                        "fontWeight": "bold"
                    },
                    "selectedFromToDate": {
                        "borderColor": "#E74C3C",
                        "backgroundColor": "#E74C3C",
                        "color": "#FFF"
                    },
                    "selectedSameFromToDate": {
                        "borderColor": "#E74C3C",
                        "backgroundColor": "#E74C3C",
                        "color": "#FFF"
                    },
                    "focusedDate": {
                        "backgroundColor": "undefined",
                        "color": "undefined",
                        "borderStyle": "dotted",
                        "borderColor": "black"
                    },
                    "unselectableDate": {}
                },
                "aria:skinNormalized": true
            },
            "general": {
                "imagesRoot": "aria/css/",
                "colors": {
                    "disabled": "#DFDFDF"
                },
                "font": {
                    "family": "Arial,Tahoma, sans-serif",
                    "size": 14
                },
                "anchor": {
                    "states": {
                        "visited": {
                            "text": {
                                "decoration": "none"
                            },
                            "color": "#2478AD"
                        },
                        "normal": {
                            "text": {
                                "decoration": "none"
                            },
                            "color": "#2478AD"
                        },
                        "link": {
                            "text": {
                                "decoration": "none"
                            },
                            "color": "#2478AD"
                        },
                        "hover": {
                            "text": {
                                "decoration": "underline"
                            },
                            "color": "#2E99D9"
                        },
                        "focus": {
                            "color": "#2E99D9",
                            "outline": "#000 dotted 1px",
                            "text": {}
                        }
                    }
                },
                "overlay": {
                    "backgroundColor": "#F8F8F8",
                    "opacity": 80,
                    "border": "1px solid #DFDFDF",
                    "borderTopRightRadius": 6,
                    "borderTopLeftRadius": 6,
                    "borderBottomRightRadius": 6,
                    "borderBottomLeftRadius": 6
                },
                "loadingOverlay": {
                    "backgroundColor": "#FFF",
                    "opacity": 80,
                    "spriteURL": "atflatskin/loading.gif"
                },
                "dialogMask": {
                    "backgroundColor": "#000",
                    "opacity": 40
                },
                "externalCSS": [],
                "disable": {
                    "ul": {
                        "list": {}
                    }
                },
                "aria:skinNormalized": true
            },
            "Select": {
                "simple": {
                    "simpleHTML": true,
                    "iconsLeft": "",
                    "iconsRight": "dropdown",
                    "offsetTop": 1,
                    "offsetRight": 0,
                    "listSclass": "dropdown",
                    "frame": {
                        "frameType": "SimpleHTML"
                    },
                    "states": {
                        "normalFocused": {
                            "icons": {
                                "dropdown": "selectBoxNormalFocusedRight:selectbox"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {}
                        },
                        "mandatory": {
                            "icons": {
                                "dropdown": "selectBoxMandatoryRight:selectbox"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {}
                        },
                        "mandatoryFocused": {
                            "icons": {
                                "dropdown": "selectBoxMandatoryFocusedRight:selectbox"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {}
                        },
                        "disabled": {
                            "icons": {
                                "dropdown": "selectBoxDisabledRight:selectbox"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {}
                        },
                        "readOnly": {
                            "icons": {
                                "dropdown": "selectBoxReadOnlyRight:selectbox"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {}
                        },
                        "normalError": {
                            "icons": {
                                "dropdown": "selectBoxNormalErrorRight:selectbox"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {}
                        },
                        "normalErrorFocused": {
                            "icons": {
                                "dropdown": "selectBoxNormalErrorFocusedRight:selectbox"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {}
                        },
                        "mandatoryError": {
                            "icons": {
                                "dropdown": "selectBoxMandatoryErrorRight:selectbox"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {}
                        },
                        "mandatoryErrorFocused": {
                            "icons": {
                                "dropdown": "selectBoxMandatoryErrorFocusedRight:selectbox"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {}
                        },
                        "normal": {
                            "icons": {
                                "dropdown": "selectBoxNormalRight:selectbox"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {}
                        }
                    }
                },
                "std": {
                    "iconsRight": "dropdown",
                    "offsetRight": 0,
                    "frame": {
                        "frameType": "Simple"
                    },
                    "states": {
                        "normal": {
                            "icons": {
                                "dropdown": "selectBoxNormalRight:selectbox"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 0,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#FFF",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "normalFocused": {
                            "icons": {
                                "dropdown": "selectBoxNormalFocusedRight:selectbox"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#34495E",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 0,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#FFF",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "normalError": {
                            "icons": {
                                "dropdown": "selectBoxNormalErrorRight:selectbox"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#d87e8b",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 0,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#f2dede",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "normalErrorFocused": {
                            "icons": {
                                "dropdown": "selectBoxNormalErrorFocusedRight:selectbox"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#be293f",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 0,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#f2dede",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "mandatory": {
                            "icons": {
                                "dropdown": "selectBoxMandatoryRight:selectbox"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 0,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#FFC",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "mandatoryFocused": {
                            "icons": {
                                "dropdown": "selectBoxMandatoryFocusedRight:selectbox"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#F1C40F",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 0,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#FFC",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "mandatoryError": {
                            "icons": {
                                "dropdown": "selectBoxMandatoryErrorRight:selectbox"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#d87e8b",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 0,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#f2dede",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "mandatoryErrorFocused": {
                            "icons": {
                                "dropdown": "selectBoxMandatoryErrorFocusedRight:selectbox"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#be293f",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 0,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#f2dede",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "readOnly": {
                            "icons": {
                                "dropdown": "selectBoxReadOnlyRight:selectbox"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 0,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#F8F8F8",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "disabled": {
                            "icons": {
                                "dropdown": "selectBoxDisabledRight:selectbox"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 0,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#DFDFDF",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        }
                    },
                    "offsetTop": 1,
                    "iconsLeft": "",
                    "simpleHTML": false,
                    "listSclass": "dropdown"
                },
                "aria:skinNormalized": true
            },
            "Button": {
                "important": {
                    "frame": {
                        "frameType": "Simple"
                    },
                    "states": {
                        "normal": {
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 7,
                                "paddingRight": 15,
                                "paddingBottom": 7,
                                "paddingLeft": 15,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "none",
                                "borderSize": 0,
                                "borderColor": "",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#1abc9c",
                                "color": "#FFF",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "msdown": {
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 7,
                                "paddingRight": 15,
                                "paddingBottom": 7,
                                "paddingLeft": 15,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "none",
                                "borderSize": 0,
                                "borderColor": "",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#47c9af",
                                "color": "#FFF",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "msover": {
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 7,
                                "paddingRight": 15,
                                "paddingBottom": 7,
                                "paddingLeft": 15,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "none",
                                "borderSize": 0,
                                "borderColor": "",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#47c9af",
                                "color": "#FFF",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "msoverFocused": {
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 7,
                                "paddingRight": 15,
                                "paddingBottom": 7,
                                "paddingLeft": 15,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "none",
                                "borderSize": 0,
                                "borderColor": "",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#47c9af",
                                "color": "#FFF",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "normalFocused": {
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 7,
                                "paddingRight": 15,
                                "paddingBottom": 7,
                                "paddingLeft": 15,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "none",
                                "borderSize": 0,
                                "borderColor": "",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#0f90d2",
                                "color": "#FFF",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "disabled": {
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 7,
                                "paddingRight": 15,
                                "paddingBottom": 7,
                                "paddingLeft": 15,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "none",
                                "borderSize": 0,
                                "borderColor": "",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#bdc3c7",
                                "color": "#f8f8f8",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        }
                    },
                    "simpleHTML": false,
                    "label": {
                        "fontWeight": "normal"
                    }
                },
                "simple": {
                    "simpleHTML": true,
                    "label": {
                        "fontWeight": "normal"
                    },
                    "frame": {
                        "frameType": "SimpleHTML"
                    },
                    "states": {
                        "msdown": {
                            "frame": {}
                        },
                        "msover": {
                            "frame": {}
                        },
                        "normalFocused": {
                            "frame": {}
                        },
                        "msoverFocused": {
                            "frame": {}
                        },
                        "disabled": {
                            "frame": {}
                        },
                        "normal": {
                            "frame": {}
                        }
                    }
                },
                "std": {
                    "frame": {
                        "frameType": "Simple"
                    },
                    "states": {
                        "normal": {
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 7,
                                "paddingRight": 15,
                                "paddingBottom": 7,
                                "paddingLeft": 15,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "none",
                                "borderSize": 0,
                                "borderColor": "",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#0f90d2",
                                "color": "#FFF",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "normalFocused": {
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 7,
                                "paddingRight": 15,
                                "paddingBottom": 7,
                                "paddingLeft": 15,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "none",
                                "borderSize": 0,
                                "borderColor": "",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#0f90d2",
                                "color": "#FFF",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "disabled": {
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 7,
                                "paddingRight": 15,
                                "paddingBottom": 7,
                                "paddingLeft": 15,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "none",
                                "borderSize": 0,
                                "borderColor": "",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#bdc3c7",
                                "color": "#f8f8f8",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "msdown": {
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 7,
                                "paddingRight": 15,
                                "paddingBottom": 7,
                                "paddingLeft": 15,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "none",
                                "borderSize": 0,
                                "borderColor": "",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#3ea6db",
                                "color": "#FFF",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "msover": {
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 7,
                                "paddingRight": 15,
                                "paddingBottom": 7,
                                "paddingLeft": 15,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "none",
                                "borderSize": 0,
                                "borderColor": "",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#3ea6db",
                                "color": "#FFF",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "msoverFocused": {
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 7,
                                "paddingRight": 15,
                                "paddingBottom": 7,
                                "paddingLeft": 15,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "none",
                                "borderSize": 0,
                                "borderColor": "",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#3ea6db",
                                "color": "#FFF",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        }
                    },
                    "simpleHTML": false,
                    "label": {
                        "fontWeight": "normal"
                    }
                },
                "aria:skinNormalized": true
            },
            "Link": {
                "std": {
                    "states": {
                        "normal": {
                            "textDecoration": "none",
                            "color": "#2478AD"
                        },
                        "hover": {
                            "textDecoration": "underline",
                            "color": "#2E99D9"
                        },
                        "focus": {
                            "textDecoration": "underline",
                            "color": "#2E99D9"
                        }
                    }
                },
                "aria:skinNormalized": true
            },
            "SelectBox": {
                "important": {
                    "label": {
                        "fontWeight": "bold"
                    },
                    "listSclass": "dropdown",
                    "offsetTop": 1,
                    "offsetRight": 0,
                    "simpleHTML": false,
                    "iconsLeft": "",
                    "iconsRight": "dropdown",
                    "helpText": {
                        "color": "#b2b2b2",
                        "italics": true,
                        "font": {}
                    },
                    "innerPaddingTop": 0,
                    "innerPaddingRight": 0,
                    "innerPaddingBottom": 0,
                    "innerPaddingLeft": 0,
                    "frame": {
                        "frameType": "Simple"
                    },
                    "states": {
                        "normalFocused": {
                            "icons": {
                                "dropdown": "selectBoxNormalFocusedRight:selectbox"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#34495E",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 0,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#FFF",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "mandatory": {
                            "icons": {
                                "dropdown": "selectBoxMandatoryRight:selectbox"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 0,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#FFC",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "mandatoryFocused": {
                            "icons": {
                                "dropdown": "selectBoxMandatoryFocusedRight:selectbox"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#F1C40F",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 0,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#FFC",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "normalError": {
                            "icons": {
                                "dropdown": "selectBoxNormalErrorRight:selectbox"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#d87e8b",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 0,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#f2dede",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "normalErrorFocused": {
                            "icons": {
                                "dropdown": "selectBoxNormalErrorFocusedRight:selectbox"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#be293f",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 0,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#f2dede",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "mandatoryError": {
                            "icons": {
                                "dropdown": "selectBoxMandatoryErrorRight:selectbox"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#d87e8b",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 0,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#f2dede",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "mandatoryErrorFocused": {
                            "icons": {
                                "dropdown": "selectBoxMandatoryErrorFocusedRight:selectbox"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#be293f",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 0,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#f2dede",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "disabled": {
                            "icons": {
                                "dropdown": "selectBoxDisabledRight:selectbox"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 0,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#DFDFDF",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "readOnly": {
                            "icons": {
                                "dropdown": "selectBoxReadOnlyRight:selectbox"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 0,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#F8F8F8",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "prefill": {
                            "icons": {
                                "dropdown": "selectBoxNormalRight:selectbox"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 0,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#FFF",
                                "color": "gray",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "normal": {
                            "icons": {
                                "dropdown": "selectBoxNormalRight:selectbox"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 0,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#FFF",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        }
                    }
                },
                "simple": {
                    "innerPaddingTop": 0,
                    "iconsRight": "dropdown",
                    "innerPaddingRight": 0,
                    "states": {
                        "readOnly": {
                            "color": "#AB9B85",
                            "icons": {
                                "dropdown": "selectBoxReadOnlyRight:selectbox"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {}
                        },
                        "mandatoryErrorFocused": {
                            "icons": {
                                "dropdown": "dropdown:selectbox_normal"
                            },
                            "color": "#000000",
                            "label": {
                                "font": {}
                            },
                            "frame": {}
                        },
                        "normalErrorFocused": {
                            "icons": {
                                "dropdown": "dropdown:selectbox_normal"
                            },
                            "color": "#000000",
                            "label": {
                                "font": {}
                            },
                            "frame": {}
                        },
                        "normal": {
                            "color": "#000000",
                            "icons": {
                                "dropdown": "dropdown:selectbox_normal"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {}
                        },
                        "mandatoryError": {
                            "icons": {
                                "dropdown": "dropdown:selectbox_normal"
                            },
                            "color": "#000000",
                            "label": {
                                "font": {}
                            },
                            "frame": {}
                        },
                        "normalFocused": {
                            "icons": {
                                "dropdown": "dropdown:selectbox_normal"
                            },
                            "color": "#000000",
                            "label": {
                                "font": {}
                            },
                            "frame": {}
                        },
                        "disabled": {
                            "color": "#E6D9C6",
                            "label": {
                                "color": "#E6D9C6",
                                "font": {}
                            },
                            "icons": {
                                "dropdown": "selectBoxDisabledRight:selectbox"
                            },
                            "frame": {}
                        },
                        "normalError": {
                            "icons": {
                                "dropdown": "dropdown:selectbox_normal"
                            },
                            "color": "#000000",
                            "label": {
                                "font": {}
                            },
                            "frame": {}
                        },
                        "mandatory": {
                            "color": "#000000",
                            "icons": {
                                "dropdown": "selectBoxMandatoryRight:selectbox"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {}
                        },
                        "mandatoryFocused": {
                            "color": "#000000",
                            "icons": {
                                "dropdown": "selectBoxMandatoryFocusedRight:selectbox"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {}
                        },
                        "prefill": {
                            "color": "gray",
                            "icons": {
                                "dropdown": "dropdown:selectbox_normal"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {}
                        }
                    },
                    "helpText": {
                        "italics": true,
                        "color": "#b2b2b2",
                        "font": {}
                    },
                    "offsetTop": 1,
                    "innerPaddingLeft": 0,
                    "innerPaddingBottom": 0,
                    "simpleHTML": true,
                    "iconsLeft": "",
                    "listSclass": "dropdown",
                    "offsetRight": 0,
                    "label": {
                        "fontWeight": "normal"
                    },
                    "frame": {
                        "frameType": "SimpleHTML"
                    }
                },
                "std": {
                    "iconsRight": "dropdown",
                    "offsetRight": 0,
                    "frame": {
                        "frameType": "Simple"
                    },
                    "states": {
                        "normal": {
                            "icons": {
                                "dropdown": "selectBoxNormalRight:selectbox"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 0,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#FFF",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "normalFocused": {
                            "icons": {
                                "dropdown": "selectBoxNormalFocusedRight:selectbox"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#34495E",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 0,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#FFF",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "normalError": {
                            "icons": {
                                "dropdown": "selectBoxNormalErrorRight:selectbox"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#d87e8b",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 0,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#f2dede",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "normalErrorFocused": {
                            "icons": {
                                "dropdown": "selectBoxNormalErrorFocusedRight:selectbox"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#be293f",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 0,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#f2dede",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "mandatory": {
                            "icons": {
                                "dropdown": "selectBoxMandatoryRight:selectbox"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 0,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#FFC",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "mandatoryFocused": {
                            "icons": {
                                "dropdown": "selectBoxMandatoryFocusedRight:selectbox"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#F1C40F",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 0,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#FFC",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "mandatoryError": {
                            "icons": {
                                "dropdown": "selectBoxMandatoryErrorRight:selectbox"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#d87e8b",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 0,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#f2dede",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "mandatoryErrorFocused": {
                            "icons": {
                                "dropdown": "selectBoxMandatoryErrorFocusedRight:selectbox"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#be293f",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 0,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#f2dede",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "readOnly": {
                            "icons": {
                                "dropdown": "selectBoxReadOnlyRight:selectbox"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 0,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#F8F8F8",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "prefill": {
                            "icons": {
                                "dropdown": "selectBoxNormalRight:selectbox"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 0,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#FFF",
                                "color": "gray",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "disabled": {
                            "icons": {
                                "dropdown": "selectBoxDisabledRight:selectbox"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 0,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#DFDFDF",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        }
                    },
                    "helpText": {
                        "italics": true,
                        "color": "#b2b2b2",
                        "font": {}
                    },
                    "offsetTop": 1,
                    "iconsLeft": "",
                    "listSclass": "dropdown",
                    "simpleHTML": false,
                    "label": {
                        "fontWeight": "normal"
                    },
                    "innerPaddingTop": 0,
                    "innerPaddingRight": 0,
                    "innerPaddingBottom": 0,
                    "innerPaddingLeft": 0
                },
                "aria:skinNormalized": true
            },
            "TextInput": {
                "simpleIcon": {
                    "states": {
                        "normalError": {
                            "icons": {
                                "dropdown": "std:error"
                            },
                            "color": "#000",
                            "label": {
                                "font": {}
                            },
                            "frame": {}
                        },
                        "normal": {
                            "icons": {
                                "dropdown": "std:confirm"
                            },
                            "color": "#000",
                            "label": {
                                "font": {}
                            },
                            "frame": {}
                        },
                        "normalFocused": {
                            "color": "#000",
                            "icons": {
                                "dropdown": "std:confirm"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {}
                        },
                        "mandatory": {
                            "color": "#000",
                            "icons": {
                                "dropdown": "std:confirm"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {}
                        },
                        "mandatoryFocused": {
                            "color": "#000",
                            "icons": {
                                "dropdown": "std:confirm"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {}
                        },
                        "normalErrorFocused": {
                            "color": "#000",
                            "icons": {
                                "dropdown": "std:confirm"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {}
                        },
                        "mandatoryError": {
                            "color": "#000",
                            "icons": {
                                "dropdown": "std:confirm"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {}
                        },
                        "mandatoryErrorFocused": {
                            "color": "#000",
                            "icons": {
                                "dropdown": "std:confirm"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {}
                        },
                        "disabled": {
                            "color": "#000",
                            "icons": {
                                "dropdown": "std:confirm"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {}
                        },
                        "readOnly": {
                            "color": "#000",
                            "icons": {
                                "dropdown": "std:confirm"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {}
                        },
                        "prefill": {
                            "color": "gray",
                            "icons": {
                                "dropdown": "std:confirm"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {}
                        }
                    },
                    "helpText": {
                        "italics": true,
                        "color": "#b2b2b2",
                        "font": {}
                    },
                    "iconsLeft": "dropdown",
                    "simpleHTML": true,
                    "label": {
                        "fontWeight": "normal"
                    },
                    "innerPaddingTop": 0,
                    "innerPaddingRight": 0,
                    "innerPaddingBottom": 0,
                    "innerPaddingLeft": 0,
                    "frame": {
                        "frameType": "SimpleHTML"
                    }
                },
                "important": {
                    "label": {
                        "fontWeight": "bold"
                    },
                    "simpleHTML": false,
                    "helpText": {
                        "color": "#b2b2b2",
                        "italics": true,
                        "font": {}
                    },
                    "innerPaddingTop": 0,
                    "innerPaddingRight": 0,
                    "innerPaddingBottom": 0,
                    "innerPaddingLeft": 0,
                    "frame": {
                        "frameType": "Simple"
                    },
                    "states": {
                        "normalFocused": {
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderSize": 1,
                                "borderColor": "#34495E",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#FFF",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "mandatory": {
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderSize": 1,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#FFC",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "mandatoryFocused": {
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderSize": 1,
                                "borderColor": "#F1C40F",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#FFC",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "normalError": {
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderSize": 1,
                                "borderColor": "#d87e8b",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#f2dede",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "normalErrorFocused": {
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderSize": 1,
                                "borderColor": "#be293f",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#f2dede",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "mandatoryError": {
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderSize": 1,
                                "borderColor": "#d87e8b",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#f2dede",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "mandatoryErrorFocused": {
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderSize": 1,
                                "borderColor": "#be293f",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#f2dede",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "disabled": {
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderSize": 1,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#DFDFDF",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "readOnly": {
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderSize": 1,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#F8F8F8",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "prefill": {
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderSize": 1,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#FFF",
                                "color": "gray",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "normal": {
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderSize": 1,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#FFF",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        }
                    }
                },
                "simple": {
                    "simpleHTML": true,
                    "label": {
                        "fontWeight": "normal"
                    },
                    "helpText": {
                        "color": "#b2b2b2",
                        "italics": true,
                        "font": {}
                    },
                    "innerPaddingTop": 0,
                    "innerPaddingRight": 0,
                    "innerPaddingBottom": 0,
                    "innerPaddingLeft": 0,
                    "frame": {
                        "frameType": "SimpleHTML"
                    },
                    "states": {
                        "normalFocused": {
                            "color": "#000",
                            "label": {
                                "font": {}
                            },
                            "frame": {}
                        },
                        "mandatory": {
                            "color": "#000",
                            "label": {
                                "font": {}
                            },
                            "frame": {}
                        },
                        "mandatoryFocused": {
                            "color": "#000",
                            "label": {
                                "font": {}
                            },
                            "frame": {}
                        },
                        "normalError": {
                            "color": "#000",
                            "label": {
                                "font": {}
                            },
                            "frame": {}
                        },
                        "normalErrorFocused": {
                            "color": "#000",
                            "label": {
                                "font": {}
                            },
                            "frame": {}
                        },
                        "mandatoryError": {
                            "color": "#000",
                            "label": {
                                "font": {}
                            },
                            "frame": {}
                        },
                        "mandatoryErrorFocused": {
                            "color": "#000",
                            "label": {
                                "font": {}
                            },
                            "frame": {}
                        },
                        "disabled": {
                            "color": "#000",
                            "label": {
                                "font": {}
                            },
                            "frame": {}
                        },
                        "readOnly": {
                            "color": "#000",
                            "label": {
                                "font": {}
                            },
                            "frame": {}
                        },
                        "prefill": {
                            "color": "gray",
                            "label": {
                                "font": {}
                            },
                            "frame": {}
                        },
                        "normal": {
                            "color": "#000",
                            "label": {
                                "font": {}
                            },
                            "frame": {}
                        }
                    }
                },
                "std": {
                    "frame": {
                        "frameType": "Simple"
                    },
                    "states": {
                        "normal": {
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderSize": 1,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#FFF",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "normalFocused": {
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderSize": 1,
                                "borderColor": "#34495E",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#FFF",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "normalError": {
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderSize": 1,
                                "borderColor": "#d87e8b",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#f2dede",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "normalErrorFocused": {
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderSize": 1,
                                "borderColor": "#be293f",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#f2dede",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "mandatory": {
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderSize": 1,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#FFC",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "mandatoryFocused": {
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderSize": 1,
                                "borderColor": "#F1C40F",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#FFC",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "mandatoryError": {
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderSize": 1,
                                "borderColor": "#d87e8b",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#f2dede",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "mandatoryErrorFocused": {
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderSize": 1,
                                "borderColor": "#be293f",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#f2dede",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "readOnly": {
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderSize": 1,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#F8F8F8",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "prefill": {
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderSize": 1,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#FFF",
                                "color": "gray",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "disabled": {
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderSize": 1,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#DFDFDF",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        }
                    },
                    "helpText": {
                        "italics": true,
                        "color": "#b2b2b2",
                        "font": {}
                    },
                    "simpleHTML": false,
                    "label": {
                        "fontWeight": "normal"
                    },
                    "innerPaddingTop": 0,
                    "innerPaddingRight": 0,
                    "innerPaddingBottom": 0,
                    "innerPaddingLeft": 0
                },
                "aria:skinNormalized": true
            },
            "CheckBox": {
                "simple": {
                    "simpleHTML": true,
                    "iconset": "checkBoxes",
                    "iconprefix": "cb_",
                    "states": {
                        "normalSelected": {
                            "color": "#000",
                            "font": {}
                        },
                        "focused": {
                            "color": "#000",
                            "font": {}
                        },
                        "focusedSelected": {
                            "color": "#000",
                            "font": {}
                        },
                        "disabled": {
                            "color": "#999",
                            "font": {}
                        },
                        "disabledSelected": {
                            "color": "#999",
                            "font": {}
                        },
                        "readonly": {
                            "color": "#999",
                            "font": {}
                        },
                        "readonlySelected": {
                            "color": "#999",
                            "font": {}
                        },
                        "normal": {
                            "color": "#000",
                            "font": {}
                        }
                    }
                },
                "std": {
                    "iconset": "checkBoxes",
                    "iconprefix": "cb_",
                    "states": {
                        "disabledSelected": {
                            "color": "#999",
                            "font": {}
                        },
                        "normal": {
                            "color": "#000",
                            "font": {}
                        },
                        "focusedSelected": {
                            "color": "#000",
                            "font": {}
                        },
                        "focused": {
                            "color": "#000",
                            "font": {}
                        },
                        "normalSelected": {
                            "color": "#000",
                            "font": {}
                        },
                        "readonlySelected": {
                            "color": "#999",
                            "font": {}
                        },
                        "readonly": {
                            "color": "#999",
                            "font": {}
                        },
                        "disabled": {
                            "color": "#999",
                            "font": {}
                        }
                    },
                    "simpleHTML": false
                },
                "aria:skinNormalized": true
            },
            "Tab": {
                "demoMainTabs": {
                    "frame": {
                        "frameType": "Table"
                    },
                    "states": {
                        "selectedFocused": {
                            "frame": {
                                "sprWidth": 44,
                                "sprHeight": 24,
                                "sprIdx": 0,
                                "sprSpacing": 2,
                                "spcLeft": 22,
                                "spcTop": 14,
                                "spriteURL": "atskin/sprites/tabs.png",
                                "spriteURLv": "atskin/sprites/tabs_v.png",
                                "spriteURLh": "atskin/sprites/tabs_h.png",
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "color": "#4776A7",
                                "backgroundColor": "#FFFFFF",
                                "frameIcon": "",
                                "frameIconHPos": "left",
                                "frameIconVPos": "bottom",
                                "font": {}
                            }
                        },
                        "selected": {
                            "frame": {
                                "sprWidth": 44,
                                "sprHeight": 24,
                                "sprIdx": 0,
                                "sprSpacing": 2,
                                "spcLeft": 22,
                                "spcTop": 14,
                                "spriteURL": "atskin/sprites/tabs.png",
                                "spriteURLv": "atskin/sprites/tabs_v.png",
                                "spriteURLh": "atskin/sprites/tabs_h.png",
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "color": "#4776A7",
                                "backgroundColor": "#FFFFFF",
                                "frameIcon": "",
                                "frameIconHPos": "left",
                                "frameIconVPos": "bottom",
                                "font": {}
                            }
                        },
                        "normal": {
                            "frame": {
                                "sprWidth": 44,
                                "sprHeight": 24,
                                "sprIdx": 1,
                                "sprSpacing": 2,
                                "spcLeft": 22,
                                "spcTop": 17,
                                "spriteURL": "atskin/sprites/tabs.png",
                                "spriteURLv": "atskin/sprites/tabs_v.png",
                                "spriteURLh": "atskin/sprites/tabs_h.png",
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "color": "#fff",
                                "backgroundColor": "#4776A7",
                                "frameIcon": "",
                                "frameIconHPos": "left",
                                "frameIconVPos": "bottom",
                                "font": {}
                            }
                        },
                        "msoverFocused": {
                            "frame": {
                                "sprWidth": 44,
                                "sprHeight": 24,
                                "sprIdx": 2,
                                "sprSpacing": 2,
                                "spcLeft": 22,
                                "spcTop": 17,
                                "spriteURL": "atskin/sprites/tabs.png",
                                "spriteURLv": "atskin/sprites/tabs_v.png",
                                "spriteURLh": "atskin/sprites/tabs_h.png",
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "color": "#fff",
                                "backgroundColor": "#2f6093",
                                "frameIcon": "",
                                "frameIconHPos": "left",
                                "frameIconVPos": "bottom",
                                "font": {}
                            }
                        },
                        "msover": {
                            "frame": {
                                "sprWidth": 44,
                                "sprHeight": 24,
                                "sprIdx": 2,
                                "sprSpacing": 2,
                                "spcLeft": 22,
                                "spcTop": 17,
                                "spriteURL": "atskin/sprites/tabs.png",
                                "spriteURLv": "atskin/sprites/tabs_v.png",
                                "spriteURLh": "atskin/sprites/tabs_h.png",
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "color": "#fff",
                                "backgroundColor": "#2f6093",
                                "frameIcon": "",
                                "frameIconHPos": "left",
                                "frameIconVPos": "bottom",
                                "font": {}
                            }
                        },
                        "disabled": {
                            "frame": {
                                "sprWidth": 44,
                                "sprHeight": 40,
                                "sprIdx": 3,
                                "sprSpacing": 2,
                                "spcLeft": 22,
                                "spcTop": 17,
                                "spriteURL": "atskin/sprites/tabs.png",
                                "spriteURLv": "atskin/sprites/tabs_v.png",
                                "spriteURLh": "atskin/sprites/tabs_h.png",
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "color": "#4776A7",
                                "backgroundColor": "#444444",
                                "frameIcon": "",
                                "frameIconHPos": "left",
                                "frameIconVPos": "bottom",
                                "font": {}
                            }
                        },
                        "normalFocused": {
                            "frame": {
                                "sprWidth": 44,
                                "sprHeight": 24,
                                "sprIdx": 1,
                                "sprSpacing": 2,
                                "spcLeft": 22,
                                "spcTop": 17,
                                "spriteURL": "atskin/sprites/tabs.png",
                                "spriteURLv": "atskin/sprites/tabs_v.png",
                                "spriteURLh": "atskin/sprites/tabs_h.png",
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "color": "#fff",
                                "backgroundColor": "#4776A7",
                                "frameIcon": "",
                                "frameIconHPos": "left",
                                "frameIconVPos": "bottom",
                                "font": {}
                            }
                        }
                    }
                },
                "std": {
                    "frame": {
                        "frameType": "Simple"
                    },
                    "states": {
                        "selectedFocused": {
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 10,
                                "paddingRight": 20,
                                "paddingBottom": 10,
                                "paddingLeft": 20,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderRight": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#ECF0F1",
                                "borderTopLeftRadius": 6,
                                "borderTopRightRadius": 6,
                                "borderBottomLeftRadius": 0,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#ECF0F1",
                                "color": "#34495c",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "bold",
                                "font": {}
                            }
                        },
                        "selected": {
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 10,
                                "paddingRight": 20,
                                "paddingBottom": 10,
                                "paddingLeft": 20,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderRight": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#ECF0F1",
                                "borderTopLeftRadius": 6,
                                "borderTopRightRadius": 6,
                                "borderBottomLeftRadius": 0,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#ECF0F1",
                                "color": "#34495c",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "bold",
                                "font": {}
                            }
                        },
                        "normal": {
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 10,
                                "paddingRight": 20,
                                "paddingBottom": 10,
                                "paddingLeft": 20,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderRight": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#34495e",
                                "borderTopLeftRadius": 6,
                                "borderTopRightRadius": 6,
                                "borderBottomLeftRadius": 0,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#34495e",
                                "color": "#FFF",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "msoverFocused": {
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 10,
                                "paddingRight": 20,
                                "paddingBottom": 10,
                                "paddingLeft": 20,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderRight": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#485b6e",
                                "borderTopLeftRadius": 6,
                                "borderTopRightRadius": 6,
                                "borderBottomLeftRadius": 0,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#485b6e",
                                "color": "#FFF",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "msover": {
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 10,
                                "paddingRight": 20,
                                "paddingBottom": 10,
                                "paddingLeft": 20,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderRight": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#485b6e",
                                "borderTopLeftRadius": 6,
                                "borderTopRightRadius": 6,
                                "borderBottomLeftRadius": 0,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#485b6e",
                                "color": "#FFF",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "disabled": {
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 10,
                                "paddingRight": 20,
                                "paddingBottom": 10,
                                "paddingLeft": 20,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderRight": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 6,
                                "borderTopRightRadius": 6,
                                "borderBottomLeftRadius": 0,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#DFDFDF",
                                "color": "#999",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "normalFocused": {
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 10,
                                "paddingRight": 20,
                                "paddingBottom": 10,
                                "paddingLeft": 20,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderRight": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#34495e",
                                "borderTopLeftRadius": 6,
                                "borderTopRightRadius": 6,
                                "borderBottomLeftRadius": 0,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#34495e",
                                "color": "#FFF",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        }
                    }
                },
                "aria:skinNormalized": true
            },
            "List": {
                "std": {
                    "mouseOverBackgroundColor": "#0088CC",
                    "selectedItemColor": "#FFF",
                    "selectedItemBackgroundColor": "#0088CC",
                    "divsclass": "list",
                    "mouseOverColor": "#FFF",
                    "footer": {
                        "borderStyle": "none",
                        "backgroundColor": "transparent",
                        "padding": 5,
                        "borderColor": "#d3c3ab",
                        "borderTopOnly": false,
                        "borderWidth": 1,
                        "marginTop": 5,
                        "marginRight": 0,
                        "marginBottom": 0,
                        "marginLeft": -1
                    },
                    "enabledColor": "#666",
                    "highlightMouseOver": true,
                    "link": {
                        "marginLeft": 3,
                        "marginRight": 3
                    }
                },
                "dropdown": {
                    "highlightMouseOver": false,
                    "divsclass": "dropdown",
                    "enabledColor": "#666",
                    "mouseOverBackgroundColor": "#0088CC",
                    "mouseOverColor": "#FFF",
                    "selectedItemBackgroundColor": "#0088CC",
                    "selectedItemColor": "#FFF",
                    "link": {
                        "marginLeft": 3,
                        "marginRight": 3
                    },
                    "footer": {
                        "padding": 5,
                        "backgroundColor": "transparent",
                        "borderColor": "#d3c3ab",
                        "borderTopOnly": false,
                        "borderStyle": "none",
                        "borderWidth": 1,
                        "marginTop": 5,
                        "marginRight": 0,
                        "marginBottom": 0,
                        "marginLeft": -1
                    }
                },
                "aria:skinNormalized": true
            },
            "Icon": {
                "autoCompleteAirTrain": {
                    "content": {
                        "airport": 1,
                        "sub": 7,
                        "multiple_train": 5,
                        "star": 0,
                        "train": 4,
                        "multiple_airport": 2,
                        "city": 6,
                        "train_airport": 3
                    },
                    "spriteSpacing": 2,
                    "direction": "x",
                    "iconWidth": 16,
                    "spriteURL": "atskin/sprites/airtrainicons_16x16.gif",
                    "iconHeight": 16,
                    "biDimensional": false,
                    "backgroundColor": "",
                    "borderTopLeftRadius": 0,
                    "borderTopRightRadius": 0,
                    "borderBottomLeftRadius": 0,
                    "borderBottomRightRadius": 0,
                    "borderTop": 0,
                    "borderBottom": 0,
                    "borderRight": 0,
                    "borderLeft": 0
                },
                "datepickerNormalRight": {
                    "content": {
                        "datepicker": 0
                    },
                    "spriteSpacing": 1,
                    "direction": "x",
                    "iconWidth": 26,
                    "iconHeight": 26,
                    "spriteURL": "atflatskin/datepicker.gif",
                    "backgroundSize": 100,
                    "backgroundColor": "#FFF",
                    "borderTop": 1,
                    "borderRight": 1,
                    "borderBottom": 1,
                    "borderLeft": 0,
                    "borderStyle": "solid",
                    "borderColor": "#DFDFDF",
                    "borderBottomRightRadius": 3,
                    "borderTopRightRadius": 3,
                    "borderTopLeftRadius": 0,
                    "borderBottomLeftRadius": 0,
                    "biDimensional": false
                },
                "datepickerNormalFocusedRight": {
                    "content": {
                        "datepicker": 0
                    },
                    "spriteSpacing": 1,
                    "direction": "x",
                    "iconWidth": 26,
                    "iconHeight": 26,
                    "spriteURL": "atflatskin/datepicker.gif",
                    "backgroundSize": 100,
                    "backgroundColor": "#FFF",
                    "borderTop": 1,
                    "borderRight": 1,
                    "borderBottom": 1,
                    "borderLeft": 0,
                    "borderStyle": "solid",
                    "borderColor": "#34495E",
                    "borderBottomRightRadius": 3,
                    "borderTopRightRadius": 3,
                    "borderTopLeftRadius": 0,
                    "borderBottomLeftRadius": 0,
                    "biDimensional": false
                },
                "datepickerNormalErrorRight": {
                    "content": {
                        "datepicker": 0
                    },
                    "spriteSpacing": 1,
                    "direction": "x",
                    "iconWidth": 26,
                    "iconHeight": 26,
                    "spriteURL": "atflatskin/datepicker.gif",
                    "backgroundSize": 100,
                    "backgroundColor": "#f2dede",
                    "borderTop": 1,
                    "borderRight": 1,
                    "borderBottom": 1,
                    "borderLeft": 0,
                    "borderStyle": "solid",
                    "borderColor": "#d87e8b",
                    "borderBottomRightRadius": 3,
                    "borderTopRightRadius": 3,
                    "borderTopLeftRadius": 0,
                    "borderBottomLeftRadius": 0,
                    "biDimensional": false
                },
                "datepickerNormalErrorFocusedRight": {
                    "content": {
                        "datepicker": 0
                    },
                    "spriteSpacing": 1,
                    "direction": "x",
                    "iconWidth": 26,
                    "iconHeight": 26,
                    "spriteURL": "atflatskin/datepicker.gif",
                    "backgroundSize": 100,
                    "backgroundColor": "#f2dede",
                    "borderTop": 1,
                    "borderRight": 1,
                    "borderBottom": 1,
                    "borderLeft": 0,
                    "borderStyle": "solid",
                    "borderColor": "#be293f",
                    "borderBottomRightRadius": 3,
                    "borderTopRightRadius": 3,
                    "borderTopLeftRadius": 0,
                    "borderBottomLeftRadius": 0,
                    "biDimensional": false
                },
                "datepickerDisabledRight": {
                    "content": {
                        "datepicker": 0
                    },
                    "spriteSpacing": 1,
                    "direction": "x",
                    "iconWidth": 26,
                    "iconHeight": 26,
                    "spriteURL": "atflatskin/datepicker.gif",
                    "backgroundSize": 100,
                    "borderTop": 1,
                    "borderRight": 1,
                    "borderBottom": 1,
                    "borderLeft": 0,
                    "borderStyle": "solid",
                    "borderColor": "#DFDFDF",
                    "borderBottomRightRadius": 3,
                    "borderTopRightRadius": 3,
                    "borderTopLeftRadius": 0,
                    "borderBottomLeftRadius": 0,
                    "backgroundColor": "#DFDFDF",
                    "biDimensional": false
                },
                "datepickerMandatoryRight": {
                    "content": {
                        "datepicker": 0
                    },
                    "spriteSpacing": 1,
                    "direction": "x",
                    "iconWidth": 26,
                    "iconHeight": 26,
                    "spriteURL": "atflatskin/datepicker.gif",
                    "backgroundSize": 100,
                    "borderTop": 1,
                    "borderRight": 1,
                    "borderBottom": 1,
                    "borderLeft": 0,
                    "borderStyle": "solid",
                    "borderColor": "#DFDFDF",
                    "borderBottomRightRadius": 3,
                    "borderTopRightRadius": 3,
                    "borderTopLeftRadius": 0,
                    "borderBottomLeftRadius": 0,
                    "backgroundColor": "#FFC",
                    "biDimensional": false
                },
                "datepickerMandatoryFocusedRight": {
                    "content": {
                        "datepicker": 0
                    },
                    "spriteSpacing": 1,
                    "direction": "x",
                    "iconWidth": 26,
                    "iconHeight": 26,
                    "spriteURL": "atflatskin/datepicker.gif",
                    "backgroundSize": 100,
                    "borderTop": 1,
                    "borderRight": 1,
                    "borderBottom": 1,
                    "borderLeft": 0,
                    "borderStyle": "solid",
                    "borderColor": "#F1C40F",
                    "borderBottomRightRadius": 3,
                    "borderTopRightRadius": 3,
                    "borderTopLeftRadius": 0,
                    "borderBottomLeftRadius": 0,
                    "backgroundColor": "#FFC",
                    "biDimensional": false
                },
                "datepickerMandatoryErrorRight": {
                    "content": {
                        "datepicker": 0
                    },
                    "spriteSpacing": 1,
                    "direction": "x",
                    "iconWidth": 26,
                    "iconHeight": 26,
                    "spriteURL": "atflatskin/datepicker.gif",
                    "backgroundSize": 100,
                    "borderTop": 1,
                    "borderRight": 1,
                    "borderBottom": 1,
                    "borderLeft": 0,
                    "borderStyle": "solid",
                    "borderColor": "#d87e8b",
                    "borderBottomRightRadius": 3,
                    "borderTopRightRadius": 3,
                    "borderTopLeftRadius": 0,
                    "borderBottomLeftRadius": 0,
                    "backgroundColor": "#f2dede",
                    "biDimensional": false
                },
                "datepickerMandatoryErrorFocusedRight": {
                    "content": {
                        "datepicker": 0
                    },
                    "spriteSpacing": 1,
                    "direction": "x",
                    "iconWidth": 26,
                    "iconHeight": 26,
                    "spriteURL": "atflatskin/datepicker.gif",
                    "backgroundSize": 100,
                    "borderTop": 1,
                    "borderRight": 1,
                    "borderBottom": 1,
                    "borderLeft": 0,
                    "borderStyle": "solid",
                    "borderColor": "#be293f",
                    "borderBottomRightRadius": 3,
                    "borderTopRightRadius": 3,
                    "borderTopLeftRadius": 0,
                    "borderBottomLeftRadius": 0,
                    "backgroundColor": "#f2dede",
                    "biDimensional": false
                },
                "datepickerReadOnlyRight": {
                    "content": {
                        "datepicker": 0
                    },
                    "spriteSpacing": 1,
                    "direction": "x",
                    "iconWidth": 26,
                    "iconHeight": 26,
                    "spriteURL": "atflatskin/datepicker.gif",
                    "backgroundSize": 100,
                    "borderTop": 1,
                    "borderRight": 1,
                    "borderBottom": 1,
                    "borderLeft": 0,
                    "borderStyle": "solid",
                    "borderColor": "#DFDFDF",
                    "borderBottomRightRadius": 3,
                    "borderTopRightRadius": 3,
                    "borderTopLeftRadius": 0,
                    "borderBottomLeftRadius": 0,
                    "backgroundColor": "#F8F8F8",
                    "biDimensional": false
                },
                "multiSelectNormalRight": {
                    "content": {
                        "multiselect": 0
                    },
                    "spriteSpacing": 1,
                    "direction": "x",
                    "iconWidth": 26,
                    "iconHeight": 26,
                    "spriteURL": "atflatskin/multiselect-expand.gif",
                    "backgroundSize": 100,
                    "backgroundColor": "#FFF",
                    "borderTop": 1,
                    "borderRight": 1,
                    "borderBottom": 1,
                    "borderLeft": 0,
                    "borderStyle": "solid",
                    "borderColor": "#DFDFDF",
                    "borderBottomRightRadius": 3,
                    "borderTopRightRadius": 3,
                    "borderTopLeftRadius": 0,
                    "borderBottomLeftRadius": 0,
                    "biDimensional": false
                },
                "multiSelectNormalFocusedRight": {
                    "content": {
                        "multiselect": 0
                    },
                    "spriteSpacing": 1,
                    "direction": "x",
                    "iconWidth": 26,
                    "iconHeight": 26,
                    "spriteURL": "atflatskin/multiselect-expand.gif",
                    "backgroundSize": 100,
                    "backgroundColor": "#FFF",
                    "borderTop": 1,
                    "borderRight": 1,
                    "borderBottom": 1,
                    "borderLeft": 0,
                    "borderStyle": "solid",
                    "borderColor": "#34495E",
                    "borderBottomRightRadius": 3,
                    "borderTopRightRadius": 3,
                    "borderTopLeftRadius": 0,
                    "borderBottomLeftRadius": 0,
                    "biDimensional": false
                },
                "multiSelectNormalErrorRight": {
                    "content": {
                        "multiselect": 0
                    },
                    "spriteSpacing": 1,
                    "direction": "x",
                    "iconWidth": 26,
                    "iconHeight": 26,
                    "spriteURL": "atflatskin/multiselect-expand.gif",
                    "backgroundSize": 100,
                    "backgroundColor": "#f2dede",
                    "borderTop": 1,
                    "borderRight": 1,
                    "borderBottom": 1,
                    "borderLeft": 0,
                    "borderStyle": "solid",
                    "borderColor": "#d87e8b",
                    "borderBottomRightRadius": 3,
                    "borderTopRightRadius": 3,
                    "borderTopLeftRadius": 0,
                    "borderBottomLeftRadius": 0,
                    "biDimensional": false
                },
                "multiSelectNormalErrorFocusedRight": {
                    "content": {
                        "multiselect": 0
                    },
                    "spriteSpacing": 1,
                    "direction": "x",
                    "iconWidth": 26,
                    "iconHeight": 26,
                    "spriteURL": "atflatskin/multiselect-expand.gif",
                    "backgroundSize": 100,
                    "backgroundColor": "#f2dede",
                    "borderTop": 1,
                    "borderRight": 1,
                    "borderBottom": 1,
                    "borderLeft": 0,
                    "borderStyle": "solid",
                    "borderColor": "#be293f",
                    "borderBottomRightRadius": 3,
                    "borderTopRightRadius": 3,
                    "borderTopLeftRadius": 0,
                    "borderBottomLeftRadius": 0,
                    "biDimensional": false
                },
                "multiSelectDisabledRight": {
                    "content": {
                        "multiselect": 0
                    },
                    "spriteSpacing": 1,
                    "direction": "x",
                    "iconWidth": 26,
                    "iconHeight": 26,
                    "spriteURL": "atflatskin/multiselect-expand.gif",
                    "backgroundSize": 100,
                    "borderTop": 1,
                    "borderRight": 1,
                    "borderBottom": 1,
                    "borderLeft": 0,
                    "borderStyle": "solid",
                    "borderColor": "#DFDFDF",
                    "borderBottomRightRadius": 3,
                    "borderTopRightRadius": 3,
                    "borderTopLeftRadius": 0,
                    "borderBottomLeftRadius": 0,
                    "backgroundColor": "#DFDFDF",
                    "biDimensional": false
                },
                "multiSelectMandatoryRight": {
                    "content": {
                        "multiselect": 0
                    },
                    "spriteSpacing": 1,
                    "direction": "x",
                    "iconWidth": 26,
                    "iconHeight": 26,
                    "spriteURL": "atflatskin/multiselect-expand.gif",
                    "backgroundSize": 100,
                    "borderTop": 1,
                    "borderRight": 1,
                    "borderBottom": 1,
                    "borderLeft": 0,
                    "borderStyle": "solid",
                    "borderColor": "#DFDFDF",
                    "borderBottomRightRadius": 3,
                    "borderTopRightRadius": 3,
                    "borderTopLeftRadius": 0,
                    "borderBottomLeftRadius": 0,
                    "backgroundColor": "#FFC",
                    "biDimensional": false
                },
                "multiSelectMandatoryFocusedRight": {
                    "content": {
                        "multiselect": 0
                    },
                    "spriteSpacing": 1,
                    "direction": "x",
                    "iconWidth": 26,
                    "iconHeight": 26,
                    "spriteURL": "atflatskin/multiselect-expand.gif",
                    "backgroundSize": 100,
                    "borderTop": 1,
                    "borderRight": 1,
                    "borderBottom": 1,
                    "borderLeft": 0,
                    "borderStyle": "solid",
                    "borderColor": "#F1C40F",
                    "borderBottomRightRadius": 3,
                    "borderTopRightRadius": 3,
                    "borderTopLeftRadius": 0,
                    "borderBottomLeftRadius": 0,
                    "backgroundColor": "#FFC",
                    "biDimensional": false
                },
                "multiSelectMandatoryErrorRight": {
                    "content": {
                        "multiselect": 0
                    },
                    "spriteSpacing": 1,
                    "direction": "x",
                    "iconWidth": 26,
                    "iconHeight": 26,
                    "spriteURL": "atflatskin/multiselect-expand.gif",
                    "backgroundSize": 100,
                    "borderTop": 1,
                    "borderRight": 1,
                    "borderBottom": 1,
                    "borderLeft": 0,
                    "borderStyle": "solid",
                    "borderColor": "#d87e8b",
                    "borderBottomRightRadius": 3,
                    "borderTopRightRadius": 3,
                    "borderTopLeftRadius": 0,
                    "borderBottomLeftRadius": 0,
                    "backgroundColor": "#f2dede",
                    "biDimensional": false
                },
                "multiSelectMandatoryErrorFocusedRight": {
                    "content": {
                        "multiselect": 0
                    },
                    "spriteSpacing": 1,
                    "direction": "x",
                    "iconWidth": 26,
                    "iconHeight": 26,
                    "spriteURL": "atflatskin/multiselect-expand.gif",
                    "backgroundSize": 100,
                    "borderTop": 1,
                    "borderRight": 1,
                    "borderBottom": 1,
                    "borderLeft": 0,
                    "borderStyle": "solid",
                    "borderColor": "#be293f",
                    "borderBottomRightRadius": 3,
                    "borderTopRightRadius": 3,
                    "borderTopLeftRadius": 0,
                    "borderBottomLeftRadius": 0,
                    "backgroundColor": "#f2dede",
                    "biDimensional": false
                },
                "multiSelectReadOnlyRight": {
                    "content": {
                        "multiselect": 0
                    },
                    "spriteSpacing": 1,
                    "direction": "x",
                    "iconWidth": 26,
                    "iconHeight": 26,
                    "spriteURL": "atflatskin/multiselect-expand.gif",
                    "backgroundSize": 100,
                    "borderTop": 1,
                    "borderRight": 1,
                    "borderBottom": 1,
                    "borderLeft": 0,
                    "borderStyle": "solid",
                    "borderColor": "#DFDFDF",
                    "borderBottomRightRadius": 3,
                    "borderTopRightRadius": 3,
                    "borderTopLeftRadius": 0,
                    "borderBottomLeftRadius": 0,
                    "backgroundColor": "#F8F8F8",
                    "biDimensional": false
                },
                "selectBoxNormalRight": {
                    "content": {
                        "selectbox": 0
                    },
                    "spriteSpacing": 1,
                    "direction": "x",
                    "iconWidth": 26,
                    "iconHeight": 26,
                    "spriteURL": "atflatskin/expand.gif",
                    "backgroundSize": 100,
                    "backgroundColor": "#FFF",
                    "borderTop": 1,
                    "borderRight": 1,
                    "borderBottom": 1,
                    "borderLeft": 0,
                    "borderStyle": "solid",
                    "borderColor": "#DFDFDF",
                    "borderBottomRightRadius": 3,
                    "borderTopRightRadius": 3,
                    "borderTopLeftRadius": 0,
                    "borderBottomLeftRadius": 0,
                    "biDimensional": false
                },
                "selectBoxNormalFocusedRight": {
                    "content": {
                        "selectbox": 0
                    },
                    "spriteSpacing": 1,
                    "direction": "x",
                    "iconWidth": 26,
                    "iconHeight": 26,
                    "spriteURL": "atflatskin/expand.gif",
                    "backgroundSize": 100,
                    "backgroundColor": "#FFF",
                    "borderTop": 1,
                    "borderRight": 1,
                    "borderBottom": 1,
                    "borderLeft": 0,
                    "borderStyle": "solid",
                    "borderColor": "#34495E",
                    "borderBottomRightRadius": 3,
                    "borderTopRightRadius": 3,
                    "borderTopLeftRadius": 0,
                    "borderBottomLeftRadius": 0,
                    "biDimensional": false
                },
                "selectBoxNormalErrorRight": {
                    "content": {
                        "selectbox": 0
                    },
                    "spriteSpacing": 1,
                    "direction": "x",
                    "iconWidth": 26,
                    "iconHeight": 26,
                    "spriteURL": "atflatskin/expand.gif",
                    "backgroundSize": 100,
                    "backgroundColor": "#f2dede",
                    "borderTop": 1,
                    "borderRight": 1,
                    "borderBottom": 1,
                    "borderLeft": 0,
                    "borderStyle": "solid",
                    "borderColor": "#d87e8b",
                    "borderBottomRightRadius": 3,
                    "borderTopRightRadius": 3,
                    "borderTopLeftRadius": 0,
                    "borderBottomLeftRadius": 0,
                    "biDimensional": false
                },
                "selectBoxNormalErrorFocusedRight": {
                    "content": {
                        "selectbox": 0
                    },
                    "spriteSpacing": 1,
                    "direction": "x",
                    "iconWidth": 26,
                    "iconHeight": 26,
                    "spriteURL": "atflatskin/expand.gif",
                    "backgroundSize": 100,
                    "backgroundColor": "#f2dede",
                    "borderTop": 1,
                    "borderRight": 1,
                    "borderBottom": 1,
                    "borderLeft": 0,
                    "borderStyle": "solid",
                    "borderColor": "#be293f",
                    "borderBottomRightRadius": 3,
                    "borderTopRightRadius": 3,
                    "borderTopLeftRadius": 0,
                    "borderBottomLeftRadius": 0,
                    "biDimensional": false
                },
                "selectBoxDisabledRight": {
                    "content": {
                        "selectbox": 0
                    },
                    "spriteSpacing": 1,
                    "direction": "x",
                    "iconWidth": 26,
                    "iconHeight": 26,
                    "spriteURL": "atflatskin/expand.gif",
                    "backgroundSize": 100,
                    "borderTop": 1,
                    "borderRight": 1,
                    "borderBottom": 1,
                    "borderLeft": 0,
                    "borderStyle": "solid",
                    "borderColor": "#DFDFDF",
                    "borderBottomRightRadius": 3,
                    "borderTopRightRadius": 3,
                    "borderTopLeftRadius": 0,
                    "borderBottomLeftRadius": 0,
                    "backgroundColor": "#DFDFDF",
                    "biDimensional": false
                },
                "selectBoxMandatoryRight": {
                    "content": {
                        "selectbox": 0
                    },
                    "spriteSpacing": 1,
                    "direction": "x",
                    "iconWidth": 26,
                    "iconHeight": 26,
                    "spriteURL": "atflatskin/expand.gif",
                    "backgroundSize": 100,
                    "borderTop": 1,
                    "borderRight": 1,
                    "borderBottom": 1,
                    "borderLeft": 0,
                    "borderStyle": "solid",
                    "borderColor": "#DFDFDF",
                    "borderBottomRightRadius": 3,
                    "borderTopRightRadius": 3,
                    "borderTopLeftRadius": 0,
                    "borderBottomLeftRadius": 0,
                    "backgroundColor": "#FFC",
                    "biDimensional": false
                },
                "selectBoxMandatoryFocusedRight": {
                    "content": {
                        "selectbox": 0
                    },
                    "spriteSpacing": 1,
                    "direction": "x",
                    "iconWidth": 26,
                    "iconHeight": 26,
                    "spriteURL": "atflatskin/expand.gif",
                    "backgroundSize": 100,
                    "borderTop": 1,
                    "borderRight": 1,
                    "borderBottom": 1,
                    "borderLeft": 0,
                    "borderStyle": "solid",
                    "borderColor": "#F1C40F",
                    "borderBottomRightRadius": 3,
                    "borderTopRightRadius": 3,
                    "borderTopLeftRadius": 0,
                    "borderBottomLeftRadius": 0,
                    "backgroundColor": "#FFC",
                    "biDimensional": false
                },
                "selectBoxMandatoryErrorRight": {
                    "content": {
                        "selectbox": 0
                    },
                    "spriteSpacing": 1,
                    "direction": "x",
                    "iconWidth": 26,
                    "iconHeight": 26,
                    "spriteURL": "atflatskin/expand.gif",
                    "backgroundSize": 100,
                    "borderTop": 1,
                    "borderRight": 1,
                    "borderBottom": 1,
                    "borderLeft": 0,
                    "borderStyle": "solid",
                    "borderColor": "#d87e8b",
                    "borderBottomRightRadius": 3,
                    "borderTopRightRadius": 3,
                    "borderTopLeftRadius": 0,
                    "borderBottomLeftRadius": 0,
                    "backgroundColor": "#f2dede",
                    "biDimensional": false
                },
                "selectBoxMandatoryErrorFocusedRight": {
                    "content": {
                        "selectbox": 0
                    },
                    "spriteSpacing": 1,
                    "direction": "x",
                    "iconWidth": 26,
                    "iconHeight": 26,
                    "spriteURL": "atflatskin/expand.gif",
                    "backgroundSize": 100,
                    "borderTop": 1,
                    "borderRight": 1,
                    "borderBottom": 1,
                    "borderLeft": 0,
                    "borderStyle": "solid",
                    "borderColor": "#be293f",
                    "borderBottomRightRadius": 3,
                    "borderTopRightRadius": 3,
                    "borderTopLeftRadius": 0,
                    "borderBottomLeftRadius": 0,
                    "backgroundColor": "#f2dede",
                    "biDimensional": false
                },
                "selectBoxReadOnlyRight": {
                    "content": {
                        "selectbox": 0
                    },
                    "spriteSpacing": 1,
                    "direction": "x",
                    "iconWidth": 26,
                    "iconHeight": 26,
                    "spriteURL": "atflatskin/expand.gif",
                    "backgroundSize": 100,
                    "borderTop": 1,
                    "borderRight": 1,
                    "borderBottom": 1,
                    "borderLeft": 0,
                    "borderStyle": "solid",
                    "borderColor": "#DFDFDF",
                    "borderBottomRightRadius": 3,
                    "borderTopRightRadius": 3,
                    "borderTopLeftRadius": 0,
                    "borderBottomLeftRadius": 0,
                    "backgroundColor": "#F8F8F8",
                    "biDimensional": false
                },
                "autocompleteNormalRight": {
                    "content": {
                        "autocomplete": 0
                    },
                    "spriteSpacing": 1,
                    "direction": "x",
                    "iconWidth": 26,
                    "iconHeight": 26,
                    "spriteURL": "atflatskin/expand.gif",
                    "backgroundSize": 100,
                    "backgroundColor": "#FFF",
                    "borderTop": 1,
                    "borderRight": 1,
                    "borderBottom": 1,
                    "borderLeft": 0,
                    "borderStyle": "solid",
                    "borderColor": "#DFDFDF",
                    "borderBottomRightRadius": 3,
                    "borderTopRightRadius": 3,
                    "borderTopLeftRadius": 0,
                    "borderBottomLeftRadius": 0,
                    "biDimensional": false
                },
                "autocompleteNormalFocusedRight": {
                    "content": {
                        "autocomplete": 0
                    },
                    "spriteSpacing": 1,
                    "direction": "x",
                    "iconWidth": 26,
                    "iconHeight": 26,
                    "spriteURL": "atflatskin/expand.gif",
                    "backgroundSize": 100,
                    "backgroundColor": "#FFF",
                    "borderTop": 1,
                    "borderRight": 1,
                    "borderBottom": 1,
                    "borderLeft": 0,
                    "borderStyle": "solid",
                    "borderColor": "#34495E",
                    "borderBottomRightRadius": 3,
                    "borderTopRightRadius": 3,
                    "borderTopLeftRadius": 0,
                    "borderBottomLeftRadius": 0,
                    "biDimensional": false
                },
                "autocompleteNormalErrorRight": {
                    "content": {
                        "autocomplete": 0
                    },
                    "spriteSpacing": 1,
                    "direction": "x",
                    "iconWidth": 26,
                    "iconHeight": 26,
                    "spriteURL": "atflatskin/expand.gif",
                    "backgroundSize": 100,
                    "backgroundColor": "#f2dede",
                    "borderTop": 1,
                    "borderRight": 1,
                    "borderBottom": 1,
                    "borderLeft": 0,
                    "borderStyle": "solid",
                    "borderColor": "#d87e8b",
                    "borderBottomRightRadius": 3,
                    "borderTopRightRadius": 3,
                    "borderTopLeftRadius": 0,
                    "borderBottomLeftRadius": 0,
                    "biDimensional": false
                },
                "autocompleteNormalErrorFocusedRight": {
                    "content": {
                        "autocomplete": 0
                    },
                    "spriteSpacing": 1,
                    "direction": "x",
                    "iconWidth": 26,
                    "iconHeight": 26,
                    "spriteURL": "atflatskin/expand.gif",
                    "backgroundSize": 100,
                    "backgroundColor": "#f2dede",
                    "borderTop": 1,
                    "borderRight": 1,
                    "borderBottom": 1,
                    "borderLeft": 0,
                    "borderStyle": "solid",
                    "borderColor": "#be293f",
                    "borderBottomRightRadius": 3,
                    "borderTopRightRadius": 3,
                    "borderTopLeftRadius": 0,
                    "borderBottomLeftRadius": 0,
                    "biDimensional": false
                },
                "autocompleteDisabledRight": {
                    "content": {
                        "autocomplete": 0
                    },
                    "spriteSpacing": 1,
                    "direction": "x",
                    "iconWidth": 26,
                    "iconHeight": 26,
                    "spriteURL": "atflatskin/expand.gif",
                    "backgroundSize": 100,
                    "borderTop": 1,
                    "borderRight": 1,
                    "borderBottom": 1,
                    "borderLeft": 0,
                    "borderStyle": "solid",
                    "borderColor": "#DFDFDF",
                    "borderBottomRightRadius": 3,
                    "borderTopRightRadius": 3,
                    "borderTopLeftRadius": 0,
                    "borderBottomLeftRadius": 0,
                    "backgroundColor": "#DFDFDF",
                    "biDimensional": false
                },
                "autocompleteMandatoryRight": {
                    "content": {
                        "autocomplete": 0
                    },
                    "spriteSpacing": 1,
                    "direction": "x",
                    "iconWidth": 26,
                    "iconHeight": 26,
                    "spriteURL": "atflatskin/expand.gif",
                    "backgroundSize": 100,
                    "borderTop": 1,
                    "borderRight": 1,
                    "borderBottom": 1,
                    "borderLeft": 0,
                    "borderStyle": "solid",
                    "borderColor": "#DFDFDF",
                    "borderBottomRightRadius": 3,
                    "borderTopRightRadius": 3,
                    "borderTopLeftRadius": 0,
                    "borderBottomLeftRadius": 0,
                    "backgroundColor": "#FFC",
                    "biDimensional": false
                },
                "autocompleteMandatoryFocusedRight": {
                    "content": {
                        "autocomplete": 0
                    },
                    "spriteSpacing": 1,
                    "direction": "x",
                    "iconWidth": 26,
                    "iconHeight": 26,
                    "spriteURL": "atflatskin/expand.gif",
                    "backgroundSize": 100,
                    "borderTop": 1,
                    "borderRight": 1,
                    "borderBottom": 1,
                    "borderLeft": 0,
                    "borderStyle": "solid",
                    "borderColor": "#F1C40F",
                    "borderBottomRightRadius": 3,
                    "borderTopRightRadius": 3,
                    "borderTopLeftRadius": 0,
                    "borderBottomLeftRadius": 0,
                    "backgroundColor": "#FFC",
                    "biDimensional": false
                },
                "autocompleteMandatoryErrorRight": {
                    "content": {
                        "autocomplete": 0
                    },
                    "spriteSpacing": 1,
                    "direction": "x",
                    "iconWidth": 26,
                    "iconHeight": 26,
                    "spriteURL": "atflatskin/expand.gif",
                    "backgroundSize": 100,
                    "borderTop": 1,
                    "borderRight": 1,
                    "borderBottom": 1,
                    "borderLeft": 0,
                    "borderStyle": "solid",
                    "borderColor": "#d87e8b",
                    "borderBottomRightRadius": 3,
                    "borderTopRightRadius": 3,
                    "borderTopLeftRadius": 0,
                    "borderBottomLeftRadius": 0,
                    "backgroundColor": "#f2dede",
                    "biDimensional": false
                },
                "autocompleteMandatoryErrorFocusedRight": {
                    "content": {
                        "autocomplete": 0
                    },
                    "spriteSpacing": 1,
                    "direction": "x",
                    "iconWidth": 26,
                    "iconHeight": 26,
                    "spriteURL": "atflatskin/expand.gif",
                    "backgroundSize": 100,
                    "borderTop": 1,
                    "borderRight": 1,
                    "borderBottom": 1,
                    "borderLeft": 0,
                    "borderStyle": "solid",
                    "borderColor": "#be293f",
                    "borderBottomRightRadius": 3,
                    "borderTopRightRadius": 3,
                    "borderTopLeftRadius": 0,
                    "borderBottomLeftRadius": 0,
                    "backgroundColor": "#f2dede",
                    "biDimensional": false
                },
                "autocompleteReadOnlyRight": {
                    "content": {
                        "autocomplete": 0
                    },
                    "spriteSpacing": 1,
                    "direction": "x",
                    "iconWidth": 26,
                    "iconHeight": 26,
                    "spriteURL": "atflatskin/expand.gif",
                    "backgroundSize": 100,
                    "borderTop": 1,
                    "borderRight": 1,
                    "borderBottom": 1,
                    "borderLeft": 0,
                    "borderStyle": "solid",
                    "borderColor": "#DFDFDF",
                    "borderBottomRightRadius": 3,
                    "borderTopRightRadius": 3,
                    "borderTopLeftRadius": 0,
                    "borderBottomLeftRadius": 0,
                    "backgroundColor": "#F8F8F8",
                    "biDimensional": false
                },
                "checkBoxes": {
                    "content": {
                        "cb_normal": 1,
                        "cb_focused": 1,
                        "cb_focusedSelected": 0,
                        "cb_disabled": 2,
                        "cb_normalSelected": 0,
                        "cb_disabledSelected": 3,
                        "cb_readonly": 2,
                        "cb_readonlySelected": 3
                    },
                    "spriteSpacing": 0,
                    "direction": "y",
                    "iconWidth": 16,
                    "iconHeight": 16,
                    "spriteURL": "atflatskin/checkbox.gif",
                    "biDimensional": false,
                    "backgroundSize": 100,
                    "backgroundColor": "transparent",
                    "borderTopLeftRadius": 0,
                    "borderTopRightRadius": 0,
                    "borderBottomLeftRadius": 0,
                    "borderBottomRightRadius": 0,
                    "borderTop": 0,
                    "borderBottom": 0,
                    "borderRight": 0,
                    "borderLeft": 0
                },
                "radioButtons": {
                    "content": {
                        "rb_normal": 1,
                        "rb_focused": 1,
                        "rb_focusedSelected": 0,
                        "rb_disabled": 2,
                        "rb_normalSelected": 0,
                        "rb_disabledSelected": 3,
                        "rb_readonly": 2,
                        "rb_readonlySelected": 3
                    },
                    "spriteSpacing": 0,
                    "direction": "y",
                    "iconWidth": 16,
                    "iconHeight": 16,
                    "spriteURL": "atflatskin/radiobuttons.gif",
                    "biDimensional": false,
                    "borderBottomRightRadius": 3,
                    "borderTopRightRadius": 3,
                    "borderTopLeftRadius": 3,
                    "borderBottomLeftRadius": 3,
                    "backgroundSize": 100,
                    "backgroundColor": "transparent",
                    "borderTop": 0,
                    "borderBottom": 0,
                    "borderRight": 0,
                    "borderLeft": 0
                },
                "std": {
                    "content": {
                        "confirm": 1,
                        "error": 0,
                        "warning": 3,
                        "info": 2,
                        "save": 15,
                        "zoom_in": 18,
                        "zoom_out": 19,
                        "close": 4,
                        "maximize": 17,
                        "add_line": 5,
                        "rm_line": 16,
                        "up_arrow": 11,
                        "right_arrow": 14,
                        "down_arrow": 12,
                        "left_arrow": 13,
                        "upArrow": 7,
                        "rightArrow": 8,
                        "downArrow": 9,
                        "leftArrow": 10,
                        "expand": 20,
                        "collapse": 21,
                        "home": 6
                    },
                    "spriteSpacing": 0,
                    "direction": "y",
                    "iconWidth": 16,
                    "spriteURL": "atflatskin/standard-icons.gif",
                    "iconHeight": 16,
                    "biDimensional": false,
                    "backgroundColor": "transparent",
                    "borderTopLeftRadius": 0,
                    "borderTopRightRadius": 0,
                    "borderBottomLeftRadius": 0,
                    "borderBottomRightRadius": 0,
                    "borderTop": 0,
                    "borderBottom": 0,
                    "borderRight": 0,
                    "borderLeft": 0
                },
                "std23": {
                    "content": {
                        "confirm": 1,
                        "error": 0,
                        "warning": 3,
                        "info": 2,
                        "save": 15,
                        "zoom_in": 18,
                        "zoom_out": 19,
                        "close": 4,
                        "maximize": 17,
                        "add_line": 5,
                        "rm_line": 16,
                        "up_arrow": 11,
                        "right_arrow": 14,
                        "down_arrow": 12,
                        "left_arrow": 13,
                        "upArrow": 7,
                        "rightArrow": 8,
                        "downArrow": 9,
                        "leftArrow": 10,
                        "expand": 20,
                        "collapse": 21,
                        "home": 6
                    },
                    "spriteSpacing": 0,
                    "direction": "y",
                    "iconWidth": 23,
                    "spriteURL": "atflatskin/standard-icons-large.gif",
                    "iconHeight": 23,
                    "biDimensional": false,
                    "backgroundColor": "transparent",
                    "borderTopLeftRadius": 0,
                    "borderTopRightRadius": 0,
                    "borderBottomLeftRadius": 0,
                    "borderBottomRightRadius": 0,
                    "borderTop": 0,
                    "borderBottom": 0,
                    "borderRight": 0,
                    "borderLeft": 0
                },
                "dropdown": {
                    "content": {
                        "multiselect_error": 8,
                        "datepicker_focused": 4,
                        "selectbox_focused": 1,
                        "multiselect_focused": 7,
                        "datepicker_error": 5,
                        "datepicker_normal": 3,
                        "multiselect_normal": 6,
                        "selectbox_error": 2,
                        "selectbox_normal": 0
                    },
                    "spriteSpacing": 2,
                    "direction": "x",
                    "iconWidth": 14,
                    "spriteURL": "atskin/imgs/dropdownbtns.gif",
                    "iconHeight": 20,
                    "biDimensional": false,
                    "backgroundColor": "",
                    "borderTopLeftRadius": 0,
                    "borderTopRightRadius": 0,
                    "borderBottomLeftRadius": 0,
                    "borderBottomRightRadius": 0,
                    "borderTop": 0,
                    "borderBottom": 0,
                    "borderRight": 0,
                    "borderLeft": 0
                },
                "sortIndicator": {
                    "content": {
                        "si_normal": 0,
                        "si_ascending": 2,
                        "si_descending": 1
                    },
                    "spriteSpacing": 0,
                    "direction": "y",
                    "iconWidth": 23,
                    "spriteURL": "atflatskin/sortindicator.gif",
                    "iconHeight": 23,
                    "backgroundColor": "transparent",
                    "biDimensional": false,
                    "borderTopLeftRadius": 0,
                    "borderTopRightRadius": 0,
                    "borderBottomLeftRadius": 0,
                    "borderBottomRightRadius": 0,
                    "borderTop": 0,
                    "borderBottom": 0,
                    "borderRight": 0,
                    "borderLeft": 0
                },
                "aria:skinNormalized": true
            },
            "AutoComplete": {
                "important": {
                    "label": {
                        "fontWeight": "bold"
                    },
                    "listSclass": "dropdown",
                    "offsetTop": 1,
                    "offsetRight": 0,
                    "simpleHTML": false,
                    "iconsRight": "dropdown",
                    "helpText": {
                        "color": "#b2b2b2",
                        "italics": true,
                        "font": {}
                    },
                    "innerPaddingTop": 0,
                    "innerPaddingRight": 0,
                    "innerPaddingBottom": 0,
                    "innerPaddingLeft": 0,
                    "frame": {
                        "frameType": "Simple"
                    },
                    "states": {
                        "normalFocused": {
                            "icons": {
                                "dropdown": "autocompleteNormalFocusedRight:autocomplete"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderRight": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#34495E",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#FFF",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": "dependsOnIcon",
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "mandatory": {
                            "icons": {
                                "dropdown": "autocompleteMandatoryRight:autocomplete"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderRight": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#FFC",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": "dependsOnIcon",
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "mandatoryFocused": {
                            "icons": {
                                "dropdown": "autocompleteMandatoryFocusedRight:autocomplete"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderRight": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#F1C40F",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#FFC",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": "dependsOnIcon",
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "normalError": {
                            "icons": {
                                "dropdown": "autocompleteNormalErrorRight:autocomplete"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderRight": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#d87e8b",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#f2dede",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": "dependsOnIcon",
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "normalErrorFocused": {
                            "icons": {
                                "dropdown": "autocompleteNormalErrorFocusedRight:autocomplete"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderRight": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#be293f",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#f2dede",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": "dependsOnIcon",
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "mandatoryError": {
                            "icons": {
                                "dropdown": "autocompleteMandatoryErrorRight:autocomplete"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderRight": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#d87e8b",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#f2dede",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": "dependsOnIcon",
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "mandatoryErrorFocused": {
                            "icons": {
                                "dropdown": "autocompleteMandatoryErrorFocusedRight:autocomplete"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderRight": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#be293f",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#f2dede",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": "dependsOnIcon",
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "disabled": {
                            "icons": {
                                "dropdown": "autocompleteDisabledRight:autocomplete"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderRight": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#DFDFDF",
                                "color": "#b2b2b2",
                                "skipLeftBorder": false,
                                "skipRightBorder": "dependsOnIcon",
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "readOnly": {
                            "icons": {
                                "dropdown": "autocompleteReadOnlyRight:autocomplete"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderRight": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#F8F8F8",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": "dependsOnIcon",
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "prefill": {
                            "icons": {
                                "dropdown": "autocompleteNormalRight:autocomplete"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderRight": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#FFF",
                                "color": "gray",
                                "skipLeftBorder": false,
                                "skipRightBorder": "dependsOnIcon",
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "normal": {
                            "icons": {
                                "dropdown": "autocompleteNormalRight:autocomplete"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderRight": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#FFF",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": "dependsOnIcon",
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        }
                    }
                },
                "simple": {
                    "simpleHTML": true,
                    "listSclass": "dropdown",
                    "offsetTop": 1,
                    "offsetRight": 0,
                    "iconsRight": "dropdown",
                    "label": {
                        "fontWeight": "normal"
                    },
                    "helpText": {
                        "color": "#b2b2b2",
                        "italics": true,
                        "font": {}
                    },
                    "innerPaddingTop": 0,
                    "innerPaddingRight": 0,
                    "innerPaddingBottom": 0,
                    "innerPaddingLeft": 0,
                    "frame": {
                        "frameType": "SimpleHTML"
                    },
                    "states": {
                        "normalFocused": {
                            "color": "#000",
                            "icons": {
                                "dropdown": "autocompleteNormalFocusedRight:autocomplete"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {}
                        },
                        "mandatory": {
                            "color": "#000",
                            "icons": {
                                "dropdown": "autocompleteMandatoryRight:autocomplete"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {}
                        },
                        "mandatoryFocused": {
                            "color": "#000",
                            "icons": {
                                "dropdown": "autocompleteMandatoryFocusedRight:autocomplete"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {}
                        },
                        "normalError": {
                            "color": "#000",
                            "icons": {
                                "dropdown": "autocompleteNormalErrorRight:autocomplete"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {}
                        },
                        "normalErrorFocused": {
                            "color": "#000",
                            "icons": {
                                "dropdown": "autocompleteNormalErrorFocusedRight:autocomplete"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {}
                        },
                        "mandatoryError": {
                            "color": "#000",
                            "icons": {
                                "dropdown": "autocompleteMandatoryErrorRight:autocomplete"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {}
                        },
                        "mandatoryErrorFocused": {
                            "color": "#000",
                            "icons": {
                                "dropdown": "autocompleteMandatoryErrorFocusedRight:autocomplete"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {}
                        },
                        "disabled": {
                            "color": "#b2b2b2",
                            "icons": {
                                "dropdown": "autocompleteDisabledRight:autocomplete"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {}
                        },
                        "readOnly": {
                            "color": "#000",
                            "icons": {
                                "dropdown": "autocompleteReadOnlyRight:autocomplete"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {}
                        },
                        "prefill": {
                            "color": "gray",
                            "icons": {
                                "dropdown": "autocompleteNormalRight:autocomplete"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {}
                        },
                        "normal": {
                            "color": "#000",
                            "icons": {
                                "dropdown": "autocompleteNormalRight:autocomplete"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {}
                        }
                    }
                },
                "underlineError": {
                    "frame": {
                        "frameType": "Simple"
                    },
                    "states": {
                        "normal": {
                            "icons": {
                                "dropdown": "autocompleteNormalRight:autocomplete"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderRight": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#FFF",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": "dependsOnIcon",
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "normalFocused": {
                            "icons": {
                                "dropdown": "autocompleteNormalFocusedRight:autocomplete"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderRight": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#34495E",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#FFF",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": "dependsOnIcon",
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "normalError": {
                            "icons": {
                                "dropdown": "autocompleteNormalErrorRight:autocomplete"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderRight": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#d87e8b",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#f2dede",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": "dependsOnIcon",
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "normalErrorFocused": {
                            "icons": {
                                "dropdown": "autocompleteNormalErrorFocusedRight:autocomplete"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderRight": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#be293f",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#f2dede",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": "dependsOnIcon",
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "mandatory": {
                            "icons": {
                                "dropdown": "autocompleteMandatoryRight:autocomplete"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderRight": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#FFC",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": "dependsOnIcon",
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "mandatoryFocused": {
                            "icons": {
                                "dropdown": "autocompleteMandatoryFocusedRight:autocomplete"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderRight": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#F1C40F",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#FFC",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": "dependsOnIcon",
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "mandatoryError": {
                            "icons": {
                                "dropdown": "autocompleteMandatoryErrorRight:autocomplete"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderRight": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#d87e8b",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#f2dede",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": "dependsOnIcon",
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "mandatoryErrorFocused": {
                            "icons": {
                                "dropdown": "autocompleteMandatoryErrorFocusedRight:autocomplete"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderRight": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#be293f",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#f2dede",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": "dependsOnIcon",
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "readOnly": {
                            "icons": {
                                "dropdown": "autocompleteReadOnlyRight:autocomplete"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderRight": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#F8F8F8",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": "dependsOnIcon",
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "disabled": {
                            "icons": {
                                "dropdown": "autocompleteDisabledRight:autocomplete"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderRight": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#DFDFDF",
                                "color": "#b2b2b2",
                                "skipLeftBorder": false,
                                "skipRightBorder": "dependsOnIcon",
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "prefill": {
                            "icons": {
                                "dropdown": "autocompleteNormalRight:autocomplete"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderRight": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#FFF",
                                "color": "gray",
                                "skipLeftBorder": false,
                                "skipRightBorder": "dependsOnIcon",
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        }
                    },
                    "listSclass": "dropdown",
                    "offsetTop": 1,
                    "offsetRight": 0,
                    "simpleHTML": false,
                    "iconsRight": "dropdown",
                    "label": {
                        "fontWeight": "normal"
                    },
                    "helpText": {
                        "color": "#b2b2b2",
                        "italics": true,
                        "font": {}
                    },
                    "innerPaddingTop": 0,
                    "innerPaddingRight": 0,
                    "innerPaddingBottom": 0,
                    "innerPaddingLeft": 0
                },
                "std": {
                    "iconsRight": "dropdown",
                    "offsetRight": 0,
                    "frame": {
                        "frameType": "Simple"
                    },
                    "states": {
                        "normal": {
                            "icons": {
                                "dropdown": "autocompleteNormalRight:autocomplete"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderRight": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#FFF",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": "dependsOnIcon",
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "normalFocused": {
                            "icons": {
                                "dropdown": "autocompleteNormalFocusedRight:autocomplete"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderRight": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#34495E",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#FFF",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": "dependsOnIcon",
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "normalError": {
                            "icons": {
                                "dropdown": "autocompleteNormalErrorRight:autocomplete"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderRight": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#d87e8b",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#f2dede",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": "dependsOnIcon",
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "normalErrorFocused": {
                            "icons": {
                                "dropdown": "autocompleteNormalErrorFocusedRight:autocomplete"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderRight": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#be293f",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#f2dede",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": "dependsOnIcon",
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "mandatory": {
                            "icons": {
                                "dropdown": "autocompleteMandatoryRight:autocomplete"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderRight": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#FFC",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": "dependsOnIcon",
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "mandatoryFocused": {
                            "icons": {
                                "dropdown": "autocompleteMandatoryFocusedRight:autocomplete"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderRight": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#F1C40F",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#FFC",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": "dependsOnIcon",
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "mandatoryError": {
                            "icons": {
                                "dropdown": "autocompleteMandatoryErrorRight:autocomplete"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderRight": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#d87e8b",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#f2dede",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": "dependsOnIcon",
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "mandatoryErrorFocused": {
                            "icons": {
                                "dropdown": "autocompleteMandatoryErrorFocusedRight:autocomplete"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderRight": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#be293f",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#f2dede",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": "dependsOnIcon",
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "readOnly": {
                            "icons": {
                                "dropdown": "autocompleteReadOnlyRight:autocomplete"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderRight": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#F8F8F8",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": "dependsOnIcon",
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "prefill": {
                            "icons": {
                                "dropdown": "autocompleteNormalRight:autocomplete"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderRight": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#FFF",
                                "color": "gray",
                                "skipLeftBorder": false,
                                "skipRightBorder": "dependsOnIcon",
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        },
                        "disabled": {
                            "icons": {
                                "dropdown": "autocompleteDisabledRight:autocomplete"
                            },
                            "label": {
                                "font": {}
                            },
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 5,
                                "paddingRight": 10,
                                "paddingBottom": 5,
                                "paddingLeft": 10,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderTop": 1,
                                "borderBottom": 1,
                                "borderRight": 1,
                                "borderLeft": 1,
                                "borderSize": 0,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 3,
                                "borderTopRightRadius": 3,
                                "borderBottomLeftRadius": 3,
                                "borderBottomRightRadius": 3,
                                "boxShadow": "none",
                                "backgroundColor": "#DFDFDF",
                                "color": "#b2b2b2",
                                "skipLeftBorder": false,
                                "skipRightBorder": "dependsOnIcon",
                                "fontWeight": "normal",
                                "frameHeight": 16,
                                "font": {}
                            }
                        }
                    },
                    "helpText": {
                        "italics": true,
                        "color": "#b2b2b2",
                        "font": {}
                    },
                    "offsetTop": 1,
                    "listSclass": "dropdown",
                    "simpleHTML": false,
                    "label": {
                        "fontWeight": "normal"
                    },
                    "innerPaddingTop": 0,
                    "innerPaddingRight": 0,
                    "innerPaddingBottom": 0,
                    "innerPaddingLeft": 0
                },
                "aria:skinNormalized": true
            },
            "ErrorList": {
                "std": {
                    "divsclass": "errorlist"
                },
                "aria:skinNormalized": true
            },
            "Div": {
                "dlg": {
                    "frame": {
                        "frameType": "Simple"
                    },
                    "states": {
                        "normal": {
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 45,
                                "paddingRight": 12,
                                "paddingBottom": 12,
                                "paddingLeft": 12,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "",
                                "borderSize": 0,
                                "borderColor": "",
                                "borderTopLeftRadius": 6,
                                "borderTopRightRadius": 6,
                                "borderBottomLeftRadius": 6,
                                "borderBottomRightRadius": 6,
                                "boxShadow": "none",
                                "backgroundColor": "#F8F8F8",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "topLeft": {
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 45,
                                "paddingRight": 12,
                                "paddingBottom": 12,
                                "paddingLeft": 12,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "",
                                "borderSize": 0,
                                "borderColor": "",
                                "borderTopLeftRadius": 6,
                                "borderTopRightRadius": 6,
                                "borderBottomLeftRadius": 6,
                                "borderBottomRightRadius": 6,
                                "boxShadow": "none",
                                "backgroundColor": "#F8F8F8",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "bottomRight": {
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 45,
                                "paddingRight": 12,
                                "paddingBottom": 12,
                                "paddingLeft": 12,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "",
                                "borderSize": 0,
                                "borderColor": "",
                                "borderTopLeftRadius": 6,
                                "borderTopRightRadius": 6,
                                "borderBottomLeftRadius": 6,
                                "borderBottomRightRadius": 6,
                                "boxShadow": "none",
                                "backgroundColor": "#F8F8F8",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "bottomLeft": {
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 45,
                                "paddingRight": 12,
                                "paddingBottom": 12,
                                "paddingLeft": 12,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "",
                                "borderSize": 0,
                                "borderColor": "",
                                "borderTopLeftRadius": 6,
                                "borderTopRightRadius": 6,
                                "borderBottomLeftRadius": 6,
                                "borderBottomRightRadius": 6,
                                "boxShadow": "none",
                                "backgroundColor": "#F8F8F8",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        }
                    }
                },
                "errorlist": {
                    "frame": {
                        "frameType": "Simple"
                    },
                    "states": {
                        "normal": {
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 10,
                                "paddingRight": 15,
                                "paddingBottom": 10,
                                "paddingLeft": 15,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderSize": 1,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 6,
                                "borderTopRightRadius": 6,
                                "borderBottomLeftRadius": 6,
                                "borderBottomRightRadius": 6,
                                "boxShadow": "none",
                                "backgroundColor": "#F8F8F8",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "topLeft": {
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 10,
                                "paddingRight": 15,
                                "paddingBottom": 10,
                                "paddingLeft": 15,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderSize": 1,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 6,
                                "borderTopRightRadius": 6,
                                "borderBottomLeftRadius": 6,
                                "borderBottomRightRadius": 6,
                                "boxShadow": "none",
                                "backgroundColor": "#F8F8F8",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "bottomRight": {
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 10,
                                "paddingRight": 15,
                                "paddingBottom": 10,
                                "paddingLeft": 15,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderSize": 1,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 6,
                                "borderTopRightRadius": 6,
                                "borderBottomLeftRadius": 6,
                                "borderBottomRightRadius": 6,
                                "boxShadow": "none",
                                "backgroundColor": "#F8F8F8",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "bottomLeft": {
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 10,
                                "paddingRight": 15,
                                "paddingBottom": 10,
                                "paddingLeft": 15,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderSize": 1,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 6,
                                "borderTopRightRadius": 6,
                                "borderBottomLeftRadius": 6,
                                "borderBottomRightRadius": 6,
                                "boxShadow": "none",
                                "backgroundColor": "#F8F8F8",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        }
                    }
                },
                "basic": {
                    "frame": {
                        "frameType": "Simple"
                    },
                    "states": {
                        "normal": {
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 12,
                                "paddingRight": 12,
                                "paddingBottom": 12,
                                "paddingLeft": 12,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "",
                                "borderSize": 0,
                                "borderColor": "",
                                "borderTopLeftRadius": 6,
                                "borderTopRightRadius": 6,
                                "borderBottomLeftRadius": 6,
                                "borderBottomRightRadius": 6,
                                "boxShadow": "none",
                                "backgroundColor": "#F8F8F8",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "topLeft": {
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 12,
                                "paddingRight": 12,
                                "paddingBottom": 12,
                                "paddingLeft": 12,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "",
                                "borderSize": 0,
                                "borderColor": "",
                                "borderTopLeftRadius": 6,
                                "borderTopRightRadius": 6,
                                "borderBottomLeftRadius": 6,
                                "borderBottomRightRadius": 6,
                                "boxShadow": "none",
                                "backgroundColor": "#F8F8F8",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "bottomRight": {
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 12,
                                "paddingRight": 12,
                                "paddingBottom": 12,
                                "paddingLeft": 12,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "",
                                "borderSize": 0,
                                "borderColor": "",
                                "borderTopLeftRadius": 6,
                                "borderTopRightRadius": 6,
                                "borderBottomLeftRadius": 6,
                                "borderBottomRightRadius": 6,
                                "boxShadow": "none",
                                "backgroundColor": "#F8F8F8",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "bottomLeft": {
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 12,
                                "paddingRight": 12,
                                "paddingBottom": 12,
                                "paddingLeft": 12,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "",
                                "borderSize": 0,
                                "borderColor": "",
                                "borderTopLeftRadius": 6,
                                "borderTopRightRadius": 6,
                                "borderBottomLeftRadius": 6,
                                "borderBottomRightRadius": 6,
                                "boxShadow": "none",
                                "backgroundColor": "#F8F8F8",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        }
                    }
                },
                "std": {
                    "frame": {
                        "frameType": "Simple"
                    },
                    "states": {
                        "normal": {
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 0,
                                "paddingRight": 0,
                                "paddingBottom": 0,
                                "paddingLeft": 0,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "",
                                "borderSize": 0,
                                "borderColor": "",
                                "borderTopLeftRadius": 0,
                                "borderTopRightRadius": 0,
                                "borderBottomLeftRadius": 0,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#FFF",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "topLeft": {
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 0,
                                "paddingRight": 0,
                                "paddingBottom": 0,
                                "paddingLeft": 0,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "",
                                "borderSize": 0,
                                "borderColor": "",
                                "borderTopLeftRadius": 0,
                                "borderTopRightRadius": 0,
                                "borderBottomLeftRadius": 0,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#FFF",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "bottomRight": {
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 0,
                                "paddingRight": 0,
                                "paddingBottom": 0,
                                "paddingLeft": 0,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "",
                                "borderSize": 0,
                                "borderColor": "",
                                "borderTopLeftRadius": 0,
                                "borderTopRightRadius": 0,
                                "borderBottomLeftRadius": 0,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#FFF",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "bottomLeft": {
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 0,
                                "paddingRight": 0,
                                "paddingBottom": 0,
                                "paddingLeft": 0,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "",
                                "borderSize": 0,
                                "borderColor": "",
                                "borderTopLeftRadius": 0,
                                "borderTopRightRadius": 0,
                                "borderBottomLeftRadius": 0,
                                "borderBottomRightRadius": 0,
                                "boxShadow": "none",
                                "backgroundColor": "#FFF",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        }
                    }
                },
                "errortip": {
                    "frame": {
                        "frameType": "Simple"
                    },
                    "states": {
                        "normal": {
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 8,
                                "paddingRight": 8,
                                "paddingBottom": 8,
                                "paddingLeft": 8,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "",
                                "borderSize": 0,
                                "borderColor": "",
                                "borderTopLeftRadius": 6,
                                "borderTopRightRadius": 6,
                                "borderBottomLeftRadius": 6,
                                "borderBottomRightRadius": 6,
                                "boxShadow": "none",
                                "backgroundColor": "#E74C3C",
                                "color": "#FFF",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "topLeft": {
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 8,
                                "paddingRight": 8,
                                "paddingBottom": 8,
                                "paddingLeft": 8,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "",
                                "borderSize": 0,
                                "borderColor": "",
                                "borderTopLeftRadius": 6,
                                "borderTopRightRadius": 6,
                                "borderBottomLeftRadius": 6,
                                "borderBottomRightRadius": 6,
                                "boxShadow": "none",
                                "backgroundColor": "#E74C3C",
                                "color": "#FFF",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "bottomRight": {
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 8,
                                "paddingRight": 8,
                                "paddingBottom": 8,
                                "paddingLeft": 8,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "",
                                "borderSize": 0,
                                "borderColor": "",
                                "borderTopLeftRadius": 6,
                                "borderTopRightRadius": 6,
                                "borderBottomLeftRadius": 6,
                                "borderBottomRightRadius": 6,
                                "boxShadow": "none",
                                "backgroundColor": "#E74C3C",
                                "color": "#FFF",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "bottomLeft": {
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 8,
                                "paddingRight": 8,
                                "paddingBottom": 8,
                                "paddingLeft": 8,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "",
                                "borderSize": 0,
                                "borderColor": "",
                                "borderTopLeftRadius": 6,
                                "borderTopRightRadius": 6,
                                "borderBottomLeftRadius": 6,
                                "borderBottomRightRadius": 6,
                                "boxShadow": "none",
                                "backgroundColor": "#E74C3C",
                                "color": "#FFF",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        }
                    }
                },
                "list": {
                    "frame": {
                        "frameType": "Simple"
                    },
                    "states": {
                        "normal": {
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 10,
                                "paddingRight": 15,
                                "paddingBottom": 10,
                                "paddingLeft": 15,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderSize": 1,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 6,
                                "borderTopRightRadius": 6,
                                "borderBottomLeftRadius": 6,
                                "borderBottomRightRadius": 6,
                                "boxShadow": "none",
                                "backgroundColor": "#F8F8F8",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "topLeft": {
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 10,
                                "paddingRight": 15,
                                "paddingBottom": 10,
                                "paddingLeft": 15,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderSize": 1,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 6,
                                "borderTopRightRadius": 6,
                                "borderBottomLeftRadius": 6,
                                "borderBottomRightRadius": 6,
                                "boxShadow": "none",
                                "backgroundColor": "#F8F8F8",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "bottomRight": {
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 10,
                                "paddingRight": 15,
                                "paddingBottom": 10,
                                "paddingLeft": 15,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderSize": 1,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 6,
                                "borderTopRightRadius": 6,
                                "borderBottomLeftRadius": 6,
                                "borderBottomRightRadius": 6,
                                "boxShadow": "none",
                                "backgroundColor": "#F8F8F8",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "bottomLeft": {
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 10,
                                "paddingRight": 15,
                                "paddingBottom": 10,
                                "paddingLeft": 15,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderSize": 1,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 6,
                                "borderTopRightRadius": 6,
                                "borderBottomLeftRadius": 6,
                                "borderBottomRightRadius": 6,
                                "boxShadow": "none",
                                "backgroundColor": "#F8F8F8",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        }
                    }
                },
                "calendar": {
                    "frame": {
                        "frameType": "Simple"
                    },
                    "states": {
                        "normal": {
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 10,
                                "paddingRight": 15,
                                "paddingBottom": 10,
                                "paddingLeft": 15,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderSize": 1,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 6,
                                "borderTopRightRadius": 6,
                                "borderBottomLeftRadius": 6,
                                "borderBottomRightRadius": 6,
                                "boxShadow": "none",
                                "backgroundColor": "#FFF",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "topLeft": {
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 10,
                                "paddingRight": 15,
                                "paddingBottom": 10,
                                "paddingLeft": 15,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderSize": 1,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 6,
                                "borderTopRightRadius": 6,
                                "borderBottomLeftRadius": 6,
                                "borderBottomRightRadius": 6,
                                "boxShadow": "none",
                                "backgroundColor": "#FFF",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "bottomRight": {
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 10,
                                "paddingRight": 15,
                                "paddingBottom": 10,
                                "paddingLeft": 15,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderSize": 1,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 6,
                                "borderTopRightRadius": 6,
                                "borderBottomLeftRadius": 6,
                                "borderBottomRightRadius": 6,
                                "boxShadow": "none",
                                "backgroundColor": "#FFF",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "bottomLeft": {
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 10,
                                "paddingRight": 15,
                                "paddingBottom": 10,
                                "paddingLeft": 15,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderSize": 1,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 6,
                                "borderTopRightRadius": 6,
                                "borderBottomLeftRadius": 6,
                                "borderBottomRightRadius": 6,
                                "boxShadow": "none",
                                "backgroundColor": "#FFF",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        }
                    }
                },
                "dropdown": {
                    "frame": {
                        "frameType": "Simple"
                    },
                    "states": {
                        "normal": {
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 10,
                                "paddingRight": 15,
                                "paddingBottom": 10,
                                "paddingLeft": 15,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderSize": 1,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 6,
                                "borderTopRightRadius": 6,
                                "borderBottomLeftRadius": 6,
                                "borderBottomRightRadius": 6,
                                "boxShadow": "none",
                                "backgroundColor": "#F8F8F8",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "topLeft": {
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 10,
                                "paddingRight": 15,
                                "paddingBottom": 10,
                                "paddingLeft": 15,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderSize": 1,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 6,
                                "borderTopRightRadius": 6,
                                "borderBottomLeftRadius": 6,
                                "borderBottomRightRadius": 6,
                                "boxShadow": "none",
                                "backgroundColor": "#F8F8F8",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "bottomRight": {
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 10,
                                "paddingRight": 15,
                                "paddingBottom": 10,
                                "paddingLeft": 15,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderSize": 1,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 6,
                                "borderTopRightRadius": 6,
                                "borderBottomLeftRadius": 6,
                                "borderBottomRightRadius": 6,
                                "boxShadow": "none",
                                "backgroundColor": "#F8F8F8",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "bottomLeft": {
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 10,
                                "paddingRight": 15,
                                "paddingBottom": 10,
                                "paddingLeft": 15,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "solid",
                                "borderSize": 1,
                                "borderColor": "#DFDFDF",
                                "borderTopLeftRadius": 6,
                                "borderTopRightRadius": 6,
                                "borderBottomLeftRadius": 6,
                                "borderBottomRightRadius": 6,
                                "boxShadow": "none",
                                "backgroundColor": "#F8F8F8",
                                "color": "#000",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        }
                    }
                },
                "tooltip": {
                    "frame": {
                        "frameType": "Simple"
                    },
                    "states": {
                        "normal": {
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 8,
                                "paddingRight": 8,
                                "paddingBottom": 8,
                                "paddingLeft": 8,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "",
                                "borderSize": 0,
                                "borderColor": "",
                                "borderTopLeftRadius": 6,
                                "borderTopRightRadius": 6,
                                "borderBottomLeftRadius": 6,
                                "borderBottomRightRadius": 6,
                                "boxShadow": "none",
                                "backgroundColor": "#34495E",
                                "color": "#FFF",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "topLeft": {
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 8,
                                "paddingRight": 8,
                                "paddingBottom": 8,
                                "paddingLeft": 8,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "",
                                "borderSize": 0,
                                "borderColor": "",
                                "borderTopLeftRadius": 6,
                                "borderTopRightRadius": 6,
                                "borderBottomLeftRadius": 6,
                                "borderBottomRightRadius": 6,
                                "boxShadow": "none",
                                "backgroundColor": "#34495E",
                                "color": "#FFF",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "bottomRight": {
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 8,
                                "paddingRight": 8,
                                "paddingBottom": 8,
                                "paddingLeft": 8,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "",
                                "borderSize": 0,
                                "borderColor": "",
                                "borderTopLeftRadius": 6,
                                "borderTopRightRadius": 6,
                                "borderBottomLeftRadius": 6,
                                "borderBottomRightRadius": 6,
                                "boxShadow": "none",
                                "backgroundColor": "#34495E",
                                "color": "#FFF",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        },
                        "bottomLeft": {
                            "frame": {
                                "innerHeight": "normal",
                                "paddingTop": 8,
                                "paddingRight": 8,
                                "paddingBottom": 8,
                                "paddingLeft": 8,
                                "marginTop": 0,
                                "marginLeft": 0,
                                "marginRight": 0,
                                "marginBottom": 0,
                                "border": "",
                                "borderSize": 0,
                                "borderColor": "",
                                "borderTopLeftRadius": 6,
                                "borderTopRightRadius": 6,
                                "borderBottomLeftRadius": 6,
                                "borderBottomRightRadius": 6,
                                "boxShadow": "none",
                                "backgroundColor": "#34495E",
                                "color": "#FFF",
                                "skipLeftBorder": false,
                                "skipRightBorder": false,
                                "fontWeight": "normal",
                                "font": {}
                            }
                        }
                    }
                },
                "aria:skinNormalized": true
            },
            "aria:skinNormalized": true
        }
    }
});