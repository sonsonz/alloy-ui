AUI.add("aui-form-validator",function(s){var ao=s.Lang,j=s.Object,Q=ao.isBoolean,G=ao.isDate,x=j.isEmpty,t=ao.isFunction,aa=ao.isObject,n=ao.isString,a=ao.trim,I="-",F=".",p="",o="form-validator",B="Invalid Date",K="|",ai="blurHandlers",g="checkbox",d="container",aj="containerErrorClass",U="containerValidClass",J="contentBox",S="error",al="errorClass",ak="extractCssPrefix",an="extractRules",r="field",ag="fieldContainer",Y="fieldStrings",e="inputHandlers",Z="message",b="messageContainer",R="name",X="radio",q="rules",ab="selectText",af="showAllMessages",y="showMessages",N="stack",l="stackErrorContainer",u="type",ae="valid",D="validateOnBlur",W="validateOnInput",V="validClass",m="blur",P="errorField",ac="input",H="reset",z="submit",E="submitError",i="validateField",C="validField",h=s.ClassNameManager.getClassName,am=h(o,S),w=h(o,S,d),f=h(o,ae),ad=h(o,ae,d),L=h(r),c=h(o,Z),v=h(o,N,S),ah='<div class="'+c+'"></div>',T='<label class="'+v+'"></label>',k=[an,D,W];YUI.AUI.defaults.FormValidator={STRINGS:{DEFAULT:"Please fix this field.",acceptFiles:"Please enter a value with a valid extension ({0}).",alpha:"Please enter only apha characters.",alphanum:"Please enter only aphanumeric characters.",date:"Please enter a valid date.",digits:"Please enter only digits.",email:"Please enter a valid email address.",equalTo:"Please enter the same value again.",max:"Please enter a value less than or equal to {0}.",maxLength:"Please enter no more than {0} characters.",min:"Please enter a value greater than or equal to {0}.",minLength:"Please enter at least {0} characters.",number:"Please enter a valid number.",range:"Please enter a value between {0} and {1}.",rangeLength:"Please enter a value between {0} and {1} characters long.",required:"This field is required.",url:"Please enter a valid URL."},REGEX:{alpha:/^[a-z_]+$/i,alphanum:/^\w+$/,digits:/^\d+$/,number:/^[+\-]?(\d+([.,]\d+)?)+$/,email:/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i,url:/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i},RULES:{acceptFiles:function(aq,ap,ar){var O=null;if(n(ar)){var A=ar.split(/,\s*|\b\s*/).join(K);O=new RegExp("[.]("+A+")$","i");}return O&&O.test(aq);},date:function(ap,O,aq){var A=new Date(ap);return(G(A)&&(A!=B)&&!isNaN(A));},equalTo:function(ap,O,aq){var A=s.one(aq);return A&&(a(A.val())==ap);},max:function(O,A,ap){return(M.toNumber(O)<=ap);},maxLength:function(O,A,ap){return(O.length<=ap);},min:function(O,A,ap){return(M.toNumber(O)>=ap);},minLength:function(O,A,ap){return(O.length>=ap);},range:function(ap,O,aq){var A=M.toNumber(ap);return(A>=aq[0])&&(A<=aq[1]);},rangeLength:function(ap,O,aq){var A=ap.length;return(A>=aq[0])&&(A<=aq[1]);},required:function(ar,ap,at){var A=this;if(s.FormValidator.isCheckable(ap)){var O=ap.get(R);var aq=A.getElementsByName(O);return(aq.filter(":checked").size()>0);}else{return !!ar;}}}};var M=s.Component.create({NAME:o,ATTRS:{containerErrorClass:{value:w,validator:n},containerValidClass:{value:ad,validator:n},errorClass:{value:am,validator:n},extractCssPrefix:{value:L+I,validator:n},extractRules:{value:true,validator:Q},fieldContainer:{value:F+L},fieldStrings:{value:{},validator:aa},messageContainer:{getter:function(A){return s.Node.create(A).clone();},value:ah},render:{value:true},strings:{valueFn:function(){return YUI.AUI.defaults.FormValidator.STRINGS;}},rules:{validator:aa,value:{}},selectText:{value:true,validator:Q},showMessages:{value:true,validator:Q},showAllMessages:{value:false,validator:Q},stackErrorContainer:{getter:function(A){return s.Node.create(A).clone();},value:T},validateOnBlur:{value:true,validator:Q},validateOnInput:{value:false,validator:Q},validClass:{value:f,validator:n}},isCheckable:function(O){var A=O.get(u).toLowerCase();return(A==g||A==X);},toNumber:function(A){return parseFloat(A)||0;},EXTENDS:s.Widget,UI_ATTRS:k,prototype:{CONTENT_TEMPLATE:null,UI_EVENTS:{},initializer:function(){var A=this;A.blurHandlers=[];A.errors={};A.inputHandlers=[];A.stackErrorContainers={};},bindUI:function(){var A=this;A._createEvents();
A._bindValidation();},addFieldError:function(aq,ap){var A=this;var ar=A.errors;var O=aq.get(R);if(!ar[O]){ar[O]=[];}ar[O].push(ap);},clearFieldError:function(O){var A=this;delete A.errors[O.get(R)];},eachRule:function(O){var A=this;s.each(A.get(q),function(ap,aq){if(t(O)){O.apply(A,[ap,aq]);}});},findFieldContainer:function(O){var A=this;var ap=A.get(ag);if(ap){return O.ancestor(ap);}},focusInvalidField:function(){var A=this;var O=A.get(J);var ap=O.one(F+am);if(ap){if(A.get(ab)){ap.selectText();}ap.focus();}},getElementsByName:function(O){var A=this;return A.get(J).all('[name="'+O+'"]');},getField:function(O){var A=this;if(n(O)){O=A.getElementsByName(O).item(0);}return O;},getFieldError:function(O){var A=this;return A.errors[O.get(R)];},getFieldStackErrorContainer:function(aq){var A=this;var O=aq.get(R);var ap=A.stackErrorContainers;if(!ap[O]){ap[O]=A.get(l);}return ap[O];},getFieldErrorMessage:function(at,ar){var au=this;var aw=at.get(R);var O=au.get(Y)[aw]||{};var A=au.get(q)[aw];var av=au.getStrings();var aq={};if(ar in A){var ap=s.Array(A[ar]);s.each(ap,function(az,ay){aq[ay]=[az].join(p);});}var ax=(O[ar]||av[ar]||av.DEFAULT);return ao.sub(ax,aq);},hasErrors:function(){var A=this;return !x(A.errors);},highlight:function(ap,O){var A=this;var aq=A.findFieldContainer(ap);A._highlightHelper(ap,A.get(al),A.get(V),O);A._highlightHelper(aq,A.get(aj),A.get(U),O);},unhighlight:function(O){var A=this;A.highlight(O,true);},printStackError:function(ap,O,aq){var A=this;if(!A.get(af)){aq=aq.slice(0,1);}O.empty();s.each(aq,function(at,ar){var au=A.getFieldErrorMessage(ap,at);var av=A.get(b).addClass(at);O.append(av.html(au));});},resetAllFields:function(){var A=this;A.eachRule(function(ap,aq){var O=A.getField(aq);A.resetField(O);});},resetField:function(ap){var A=this;var O=A.getFieldStackErrorContainer(ap);O.remove();A.resetFieldCss(ap);A.clearFieldError(ap);},resetFieldCss:function(ap){var O=this;var aq=O.findFieldContainer(ap);var A=function(at,ar){if(at){s.each(ar,function(au){at.removeClass(O.get(au));});}};A(ap,[V,al]);A(aq,[U,aj]);},validatable:function(ap){var A=this;var ar=A.get(q)[ap.get(R)];var aq=ar.required;var O=YUI.AUI.defaults.FormValidator.RULES.required.apply(A,[ap.val(),ap]);return(aq||(!aq&&O));},validate:function(){var A=this;A.eachRule(function(O,ap){A.validateField(ap);});A.focusInvalidField();},validateField:function(aq){var A=this;var ap=A.getField(aq);if(ap){var O=A.validatable(ap);A.resetField(ap);if(O){A.fire(i,{validator:{field:ap}});}}},_bindValidation:function(){var A=this;var O=A.get(J);O.on(H,s.bind(A._onFormReset,A));O.on(z,s.bind(A._onFormSubmit,A));},_createEvents:function(){var A=this;var O=function(ap,aq){A.publish(ap,{defaultFn:aq});};O(P,A._defErrorFieldFn);O(C,A._defValidFieldFn);O(i,A._defValidateFieldFn);},_defErrorFieldFn:function(aq){var A=this;var O=aq.validator;var ar=O.field;A.highlight(ar);if(A.get(y)){var ap=A.getFieldStackErrorContainer(ar);ar.placeBefore(ap);A.printStackError(ar,ap,O.errors);}},_defValidFieldFn:function(O){var A=this;var ap=O.validator.field;A.unhighlight(ap);},_defValidateFieldFn:function(ap){var O=this;var aq=ap.validator.field;var ar=O.get(q)[aq.get(R)];s.each(ar,function(aw,au){var av=YUI.AUI.defaults.FormValidator.RULES[au];var at=a(aq.val());if(t(av)&&!av.apply(O,[at,aq,aw])){O.addFieldError(aq,au);}});var A=O.getFieldError(aq);if(A){O.fire(P,{validator:{field:aq,errors:A}});}else{O.fire(C,{validator:{field:aq}});}},_highlightHelper:function(aq,A,O,ap){if(aq){if(ap){aq.removeClass(A).addClass(O);}else{aq.removeClass(O).addClass(A);}}},_onBlurField:function(O){var A=this;var ap=O.currentTarget.get(R);A.validateField(ap);},_onFieldInputChange:function(O){var A=this;A.validateField(O.currentTarget);},_onFormSubmit:function(O){var A=this;var ap={validator:{formEvent:O}};A.validate();if(A.hasErrors()){ap.validator.errors=A.errors;A.fire(E,ap);O.halt();}else{A.fire(z,ap);}},_onFormReset:function(O){var A=this;A.resetAllFields();},_bindValidateHelper:function(ar,aq,ap,O){var A=this;A._unbindHandlers(O);if(ar){A.eachRule(function(au,av){var at=A.getElementsByName(av);A[O].push(at.on(aq,s.bind(ap,A)));});}},_uiSetExtractRules:function(aF){var aD=this;if(aF){var O=aD.get(J);var az=aD.get(q);var aE=aD.get(ak);var aA=YUI.AUI.defaults.FormValidator.RULES;var ap=s.Object.keys(aA);var at=ap.join("|");var av=new RegExp("aui-field-"+at,"g");var ay=O.getDOM();var au=ay.elements;for(var aC=0;aC<au.length;aC++){var A=au[aC];var aq=A.className;var ar=A.name;var aw=aq.match(av);if(aw){if(!az[ar]){az[ar]={};}for(var aB=0;aB<aw.length;aB++){var ax=aw[aB];if(!(az[ar][ax] in aw)){az[ar][ax]=true;}}}}}},_uiSetValidateOnInput:function(O){var A=this;A._bindValidateHelper(O,ac,A._onFieldInputChange,e);},_uiSetValidateOnBlur:function(O){var A=this;A._bindValidateHelper(O,m,A._onBlurField,ai);},_unbindHandlers:function(O){var A=this;s.each(A[O],function(ap){ap.detach();});A[O]=[];}}});s.each(YUI.AUI.defaults.FormValidator.REGEX,function(O,A){YUI.AUI.defaults.FormValidator.RULES[A]=function(aq,ap,ar){return YUI.AUI.defaults.FormValidator.REGEX[A].test(aq);};});s.FormValidator=M;},"@VERSION@",{skinnable:false,requires:["aui-base","aui-event-input","selector-css3"]});