AUI.add("aui-datatable-edit",function(au){var ad=au.Lang,be=au.Array,e=ad.isArray,aR=ad.isBoolean,aN=ad.isFunction,J=ad.isObject,aW=ad.isString,aM=ad.String,a8=au.DataType,a3=function(A){return(A instanceof au.BaseCellEditor);},aq=au.WidgetStdMod,B=au.getClassName,aY="activeCell",af="add",a4="addOption",aL="baseCellEditor",s="boundingBox",R="calendar",am="cancel",aP="cell",ay="celleditor",C="checkboxCellEditor",p="checked",aH="click",w="contentBox",aE="data",Q="datatable",M="dateCellEditor",al="dd",V="delete",ap="disk",aG="dotted",aO="dropDownCellEditor",N="edit",G="editEvent",ai="editOptions",Z="editable",g="editor",I="element",aD="elementName",c="grip",F="handle",v="hide",aw="hideOnSave",ah="icon",o="initEdit",bd="initToolbar",av="initValidator",ab="input",d="inputFormatter",bc="key",ax="label",ar="link",X="mousedown",aa="multiple",m="name",aK="only",aT="option",aZ="options",u="optionsCellEditor",a9="outputFormatter",l="pencil",aj="radioCellEditor",i="read",ak="readOnly",ba="remove",f="render",a6="rendered",ag="return",n="row",aJ="save",aU="selected",aB="selectedAttrName",Y="showToolbar",aX="submit",S="textAreaCellEditor",y="textCellEditor",P="toolbar",z="unescapeValue",W="validator",a2="value",at="vertical",ae="visible",a0="wrapper",D="zIndex",bh=",",j=".",T="",a5="\n",bb=" ",t=/<br\s*\/?>/gi,E=/[\r\n]/g,b=B(ay,N),h=B(ay,N,af,aT),bg=B(ay,N,al,F),aS=B(ay,N,V,aT),a7=B(ay,N,v,aT),az=B(ay,N,ab,m),aI=B(ay,N,ab,a2),ao=B(ay,N,ax),q=B(ay,N,ar),aC=B(ay,N,aT,n),U=B(ay,I),aV=B(ay,ax),L=B(ay,aT),x=B(ay,a0),H=B(Q,Z),k=B(ah),ac=B(ah,c,aG,at),aQ="<br/>";var a1=function(){};a1.NAME="dataTableCellEditorSupport";a1.EDITOR_ZINDEX=9999;a1.ATTRS={editEvent:{setter:"_setEditEvent",validator:aW,value:aH}};au.mix(a1.prototype,{initializer:function(){var A=this,bi=A.get(G);A.CLASS_NAMES_CELL_EDITOR_SUPPORT={cell:A.getClassName(aP),readOnly:A.getClassName(i,aK)};A.after(f,A._afterCellEditorSupportRender);A.delegate(bi,A._onEditCell,j+A.CLASS_NAMES_CELL_EDITOR_SUPPORT.cell,A);},getEditor:function(bi,bk){var A=this,bj=bk.editor,bl=bi.get(g);if(bj===false||bl===false){return null;}return bl||bj;},_afterCellEditorSupportRender:function(){var A=this;A._syncModelsReadOnlyUI();A.body.after(au.bind(A._syncModelsReadOnlyUI,A),A.body,f);},_onEditCell:function(bn){var A=this,bk=A.get(aY),bj=bn.alignNode||bk,bm=A.getColumn(bj),bi=A.getRecord(bj),bl=A.getEditor(bi,bm);if(a3(bl)&&!bi.get(ak)){if(!bl.get(a6)){bl.on({visibleChange:au.bind(A._onEditorVisibleChange,A),save:au.bind(A._onEditorSave,A)});bl.set(D,a1.EDITOR_ZINDEX);bl.render();}bl.set(a2,bi.get(bm.key));bl.show().move(bj.getXY());}},_onEditorSave:function(bl){var A=this,bk=bl.currentTarget,bj=A.getActiveColumn(),bi=A.getActiveRecord();bk.set(a2,bl.newVal);A.set(aY,A.get(aY));bi.set(bj.key,bl.newVal);if(A.highlight){A.highlight.clear();}},_onEditorVisibleChange:function(bj){var A=this,bi=bj.currentTarget;if(bj.newVal){bi._syncFocus();}},_syncModelReadOnlyUI:function(bi){var A=this,bj=A.getRow(bi);bj.toggleClass(A.CLASS_NAMES_CELL_EDITOR_SUPPORT[ak],bi.get(ak)===true);},_syncModelsReadOnlyUI:function(){var A=this;A.get(aE).each(function(bi){A._syncModelReadOnlyUI(bi);});},getCellEditor:function(){return this.getEditor.apply(this,arguments);},getRecordColumnValue:function(A,bi){return A.get(bi.key);}});au.DataTable.CellEditorSupport=a1;au.Base.mix(au.DataTable,[a1]);var r=au.Component.create({NAME:aL,ATTRS:{editable:{value:false,validator:aR},elementName:{value:a2,validator:aW},footerContent:{value:T},hideOnSave:{value:true,validator:aR},inputFormatter:{value:function(A){if(aW(A)){A=A.replace(E,aQ);}return A;}},outputFormatter:{value:function(bi){var A=this;if(aW(bi)){if(A.get(z)){bi=aM.unescapeEntities(bi);}bi=bi.replace(t,a5);}return bi;}},showToolbar:{value:true,validator:aR},strings:{value:{edit:"Edit",save:"Save",cancel:"Cancel"}},tabIndex:{value:1},toolbar:{setter:"_setToolbar",validator:J,value:null},unescapeValue:{value:true,validator:aR},validator:{setter:"_setValidator",validator:J,value:null},value:{value:T},visible:{value:false}},EXTENDS:au.Overlay,UI_ATTRS:[Z,Y,a2],prototype:{CONTENT_TEMPLATE:"<form></form>",ELEMENT_TEMPLATE:null,elements:null,validator:null,_hDocMouseDownEv:null,initializer:function(bi){var A=this;A._initEvents();},destructor:function(){var bi=this;var A=bi._hDocMouseDownEv;var bk=bi.toolbar;var bj=bi.validator;if(A){A.detach();}if(bk){bk.destroy();}if(bj){bj.destroy();}},bindUI:function(){var A=this;A.get(s).on(bc,au.bind(A._onEscKey,A),"down:27");},formatValue:function(bi,bj){var A=this;if(aN(bi)){bj=bi.call(A,bj);}return bj;},getValue:function(){var A=this;return A.formatValue(A.get(d),A.getElementsValue());},_initEvents:function(){var A=this;A.publish({cancel:{defaultFn:A._defCancelFn},initEdit:{defaultFn:A._defInitEditFn,fireOnce:true},initValidator:{defaultFn:A._defInitValidatorFn,fireOnce:true},initToolbar:{defaultFn:A._defInitToolbarFn,fireOnce:true},save:{defaultFn:A._defSaveFn}});A.after({render:A._afterRender,visibleChange:au.debounce(A._debounceVisibleChange,350,A)});A.on({"form-validator:submit":au.bind(A._onSubmit,A)});},_afterRender:function(){var A=this;A._handleInitValidatorEvent();A._handleInitToolbarEvent();},_defCancelFn:function(bi){var A=this;A.hide();},_defInitValidatorFn:function(bi){var A=this;A.validator=new au.FormValidator(A.get(W));},_defInitToolbarFn:function(bj){var A=this;var bi=A.get(Z);A.toolbar=new au.Toolbar(A.get(P)).render(A.footerNode);if(bi){A._uiSetEditable(bi);}},_defSaveFn:function(bi){var A=this;if(A.get(aw)){A.hide();}},_debounceVisibleChange:function(bj){var bi=this;var A=bi._hDocMouseDownEv;if(bj.newVal){if(!A){bi._hDocMouseDownEv=au.getDoc().on(X,au.bind(bi._onDocMouseDownExt,bi));}}else{if(A){A.detach();bi._hDocMouseDownEv=null;}}},_handleCancelEvent:function(){var A=this;A.fire(am);},_handleEditEvent:function(){var A=this;A.fire(N);},_handleInitEditEvent:function(){var A=this;if(A.get(a6)){this.fire(o);}},_handleInitValidatorEvent:function(){var A=this;if(A.get(a6)){this.fire(av);}},_handleInitToolbarEvent:function(){var A=this;
if(A.get(a6)&&A.get(Y)){this.fire(bd);}},_handleSaveEvent:function(){var A=this;if(!A.validator.hasErrors()){A.fire(aJ,{newVal:A.getValue(),prevVal:A.get(a2)});}},_onDocMouseDownExt:function(bj){var A=this;var bi=A.get(s);if(!bi.contains(bj.target)){A.set(ae,false);}},_onEscKey:function(bi){var A=this;A.hide();},_onSubmit:function(bj){var A=this;var bi=bj.validator;A._handleSaveEvent();if(bi){bi.formEvent.halt();}},_setToolbar:function(bj){var bi=this;var A=bi.getStrings();return au.merge({activeState:false,children:[{label:A[aJ],icon:ap,type:aX},{handler:au.bind(bi._handleCancelEvent,bi),label:A[am]}]},bj);},_setValidator:function(bi){var A=this;return au.merge({boundingBox:A.get(w),bubbleTargets:A},bi);},_uiSetShowToolbar:function(bj){var A=this;var bi=A.footerNode;if(bj){bi.show();}else{bi.hide();}A._handleInitToolbarEvent();},getElementsValue:function(){var A=this;var bi=A.elements;if(bi){return bi.get(a2);}return T;},renderUI:function(){var A=this;if(A.ELEMENT_TEMPLATE){A.elements=au.Node.create(A.ELEMENT_TEMPLATE);A._syncElementsName();A.setStdModContent(aq.BODY,A.elements);}},_defInitEditFn:function(A){},_syncElementsFocus:function(){var A=this;A.elements.selectText();},_syncElementsName:function(){var A=this;A.elements.setAttribute(m,A.get(aD));},_syncFocus:function(){var A=this;au.later(0,A,A._syncElementsFocus);},_uiSetEditable:function(bj){var A=this;var bi=A.toolbar;if(A.get(a6)&&bi){if(bj){bi.add({handler:au.bind(A._handleEditEvent,A),icon:l,label:A.getString(N)},1);}else{bi.remove(1);}}},_uiSetValue:function(bj){var A=this;var bi=A.elements;if(bi){bi.val(A.formatValue(A.get(a9),bj));}}}});au.BaseCellEditor=r;var bf=au.Component.create({NAME:u,ATTRS:{inputFormatter:{value:null},options:{setter:"_setOptions",value:{},validator:J},outputFormatter:{value:null},selectedAttrName:{value:aU,validator:aW},strings:{value:{add:"Add",cancel:"Cancel",addOption:"Add option",edit:"Edit options",editOptions:"Edit option(s)",name:"Name",remove:"Remove",save:"Save",stopEditing:"Stop editing",value:"Value"}}},EXTENDS:au.BaseCellEditor,UI_ATTRS:[aZ],prototype:{EDIT_TEMPLATE:'<div class="'+b+'"></div>',EDIT_OPTION_ROW_TEMPLATE:'<div class="'+aC+'">'+'<span class="'+[bg,k,ac].join(bb)+'"></span>'+'<input class="'+az+'" size="7" placeholder="{titleName}" title="{titleName}" type="text" value="{valueName}" /> '+'<input class="'+aI+'" size="7" placeholder="{titleValue}" title="{titleValue}" type="text" value="{valueValue}" /> '+'<a class="'+[q,aS].join(bb)+'" href="javascript:void(0);">{remove}</a> '+"</div>",EDIT_ADD_LINK_TEMPLATE:'<a class="'+[q,h].join(bb)+'" href="javascript:void(0);">{addOption}</a> ',EDIT_LABEL_TEMPLATE:'<div class="'+ao+'">{editOptions}</div>',editContainer:null,editSortable:null,options:null,initializer:function(){var A=this;A.on(N,A._onEditEvent);A.on(aJ,A._onSave);A.after(bd,A._afterInitToolbar);},addNewOption:function(bk,bl){var A=this;var bj=A.editContainer.one(j+h);var bi=au.Node.create(A._createEditOption(bk||T,bl||T));bj.placeBefore(bi);bi.one(ab).focus();},removeOption:function(A){A.remove();},saveOptions:function(){var A=this;var bl=A.editContainer;if(bl){var bk=bl.all(j+az);var bi=bl.all(j+aI);var bj={};bk.each(function(bo,bn){var bm=bo.val();var bp=bi.item(bn).val();if(bm&&bp){bj[bp]=bm;}});A.set(aZ,bj);A._uiSetValue(A.get(a2));A.toggleEdit();}},toggleEdit:function(){var A=this;A.editContainer.toggle();},_createOptions:function(bj){var bn=this;var A=bn.elements;var bl=[];var bi=[];var bk=bn.OPTION_TEMPLATE;var bo=bn.OPTION_WRAPPER;au.each(bj,function(bs,br){var bq={id:au.guid(),label:bs,name:br,value:br};if(bk){bl.push(ad.sub(bk,bq));}if(bo){bi.push(ad.sub(bo,bq));}});var bp=au.NodeList.create(bl.join(T));var bm=au.NodeList.create(bi.join(T));if(bm.size()){bm.each(function(br,bq){br.prepend(bp.item(bq));});A.setContent(bm);}else{A.setContent(bp);}bn.options=bp;},_createEditBuffer:function(){var bi=this;var A=bi.getStrings();var bj=[];bj.push(ad.sub(bi.EDIT_LABEL_TEMPLATE,{editOptions:A[ai]}));au.each(bi.get(aZ),function(bk,bl){bj.push(bi._createEditOption(bk,bl));});bj.push(ad.sub(bi.EDIT_ADD_LINK_TEMPLATE,{addOption:A[a4]}));return bj.join(T);},_createEditOption:function(bj,bk){var bi=this;var A=bi.getStrings();return ad.sub(bi.EDIT_OPTION_ROW_TEMPLATE,{remove:A[ba],titleName:A[m],titleValue:A[a2],valueName:bj,valueValue:bk});},_defInitEditFn:function(bi){var A=this;var bj=au.Node.create(A.EDIT_TEMPLATE);bj.delegate("click",au.bind(A._onEditLinkClickEvent,A),j+q);bj.delegate("keydown",au.bind(A._onEditKeyEvent,A),ab);A.editContainer=bj;A.setStdModContent(aq.BODY,bj.hide(),aq.AFTER);A.editSortable=new au.Sortable({container:bj,handles:[j+bg],nodes:j+aC,opacity:".3"}).delegate.dd.plug(au.Plugin.DDConstrained,{constrain:bj,stickY:true});A._syncEditOptionsUI();},_getSelectedOptions:function(){var A=this;var bi=[];A.options.each(function(bj){if(bj.get(A.get(aB))){bi.push(bj);}});return au.all(bi);},_onEditEvent:function(bi){var A=this;A._handleInitEditEvent();A.toggleEdit();A._syncEditOptionsUI();},_onEditLinkClickEvent:function(bi){var A=this;var bj=bi.currentTarget;if(bj.test(j+h)){A.addNewOption();}else{if(bj.test(j+a7)){A.toggleEdit();}else{if(bj.test(j+aS)){A.removeOption(bj.ancestor(j+aC));}}}bi.halt();},_onEditKeyEvent:function(bi){var A=this;var bj=bi.currentTarget;if(bi.isKey(ag)){var bk=bj.next(ab);if(bk){bk.selectText();}else{A.addNewOption();}bi.halt();}},_onSave:function(bi){var A=this;A.saveOptions();},_setOptions:function(bi){var A={};if(e(bi)){be.each(bi,function(bj){A[bj]=bj;});}else{if(J(bi)){A=bi;}}return A;},_syncEditOptionsUI:function(){var A=this;A.editContainer.setContent(A._createEditBuffer());},_uiSetOptions:function(bi){var A=this;A._uiSetValue(A.get(a2));A._createOptions(bi);A._syncElementsName();},_uiSetValue:function(bj){var A=this;var bi=A.options;if(bi&&bi.size()){bi.set(A.get(aB),false);if(bj){if(!e(bj)){bj=String(bj).split(bh);}be.each(bj,function(bk){bi.filter('[value="'+ad.trim(bk)+'"]').set(A.get(aB),true);});}}return bj;}}});au.BaseOptionsCellEditor=bf;
var aA=au.Component.create({NAME:y,EXTENDS:au.BaseCellEditor,prototype:{ELEMENT_TEMPLATE:'<input autocomplete="off" class="'+U+'" type="text" />'}});au.TextCellEditor=aA;var aF=au.Component.create({NAME:S,EXTENDS:au.BaseCellEditor,prototype:{ELEMENT_TEMPLATE:'<textarea class="'+U+'"></textarea>'}});au.TextAreaCellEditor=aF;var O=au.Component.create({NAME:aO,ATTRS:{multiple:{value:false,validator:aR}},EXTENDS:au.BaseOptionsCellEditor,UI_ATTRS:[aa],prototype:{ELEMENT_TEMPLATE:'<select class="'+U+'"></select>',OPTION_TEMPLATE:'<option value="{value}">{label}</option>',getElementsValue:function(){var A=this;if(A.get(aa)){return A._getSelectedOptions().get(a2);}return A.elements.get(a2);},_syncElementsFocus:function(){var A=this;A.elements.focus();},_uiSetMultiple:function(bj){var A=this;var bi=A.elements;if(bj){bi.setAttribute(aa,aa);}else{bi.removeAttribute(aa);}}}});au.DropDownCellEditor=O;var an=au.Component.create({NAME:C,ATTRS:{selectedAttrName:{value:p}},EXTENDS:au.BaseOptionsCellEditor,prototype:{ELEMENT_TEMPLATE:'<div class="'+U+'"></div>',OPTION_TEMPLATE:'<input class="'+L+'" id="{id}" name="{name}" type="checkbox" value="{value}"/>',OPTION_WRAPPER:'<label class="'+x+'" for="{id}"><span class="'+aV+'">{label}</span></label>',getElementsValue:function(){var A=this;return A._getSelectedOptions().get(a2);},_syncElementsFocus:function(){var A=this;var bi=A.options;if(bi&&bi.size()){bi.item(0).focus();}},_syncElementsName:function(){var A=this;var bi=A.options;if(bi){bi.setAttribute(m,A.get(aD));}}}});au.CheckboxCellEditor=an;var K=au.Component.create({NAME:aj,EXTENDS:au.CheckboxCellEditor,prototype:{OPTION_TEMPLATE:'<input class="aui-field-input-choice" id="{id}" name="{name}" type="radio" value="{value}"/>',getElementsValue:function(){var A=this;return A._getSelectedOptions().get(a2)[0];}}});au.RadioCellEditor=K;var a=au.Component.create({NAME:M,EXTENDS:au.BaseCellEditor,ATTRS:{bodyContent:{value:T},calendar:{setter:"_setCalendar",validator:J,value:null},dateFormat:{value:"%D",validator:aW},inputFormatter:{value:function(bj){var A=this,bi=[];be.each(bj,function(bl,bk){bi.push(A.formatDate(bl).toString());});return bi;}},outputFormatter:{value:function(bj){var A=this,bi=[];be.each(bj,function(bl,bk){bi.push(a8.Date.parse(bl));});return bi;}}},prototype:{ELEMENT_TEMPLATE:'<input class="'+U+'" type="hidden" />',initializer:function(){var A=this;A.after("calendar:dateClick",au.bind(A._afterDateSelect,A));},getElementsValue:function(){var A=this;return A.calendar.get("selectedDates");},formatDate:function(bk){var bi=this,bj=bi.get("dateFormat"),A=bi.get("locale");return a8.Date.format(bk,{format:bj});},_afterDateSelect:function(bj){var A=this,bi=A.calendar.get("selectedDates");A.elements.val(be.invoke(bi,"getTime").join(bh));},_afterRender:function(){var A=this;au.DateCellEditor.superclass._afterRender.apply(A,arguments);A.calendar=new au.Calendar(A.get(R)).render(A.bodyNode);},_setCalendar:function(bi){var A=this;return au.merge({bubbleTargets:A},bi);},_uiSetValue:function(bk){var A=this,bj=A.calendar,bi;if(bj){if(!e(bk)){bk=[bk];}bi=A.formatValue(A.get(a9),bk);bj._clearSelection();bj.set("date",bi[0]);bj.selectDates(bi);}}}});au.DateCellEditor=a;},"@VERSION@",{skinnable:true,requires:["datatable-base","calendar","aui-datatype","aui-toolbar","aui-form-validator","overlay","sortable"]});