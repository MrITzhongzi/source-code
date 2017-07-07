(function(a){a.extend(a.fn,{validate:function(b){if(!this.length){if(b&&b.debug&&window.console){console.warn("nothing selected, can't validate, returning nothing")}return}var c=a.data(this[0],"validator");if(c){return c}this.attr("novalidate","novalidate");c=new a.validator(b,this[0]);a.data(this[0],"validator",c);if(c.settings.onsubmit){this.validateDelegate(":submit","click",function(d){if(c.settings.submitHandler){c.submitButton=d.target}if(a(d.target).hasClass("cancel")){c.cancelSubmit=true}});this.submit(function(d){if(c.settings.debug){d.preventDefault()}function e(){var f;if(c.settings.submitHandler){if(c.submitButton){f=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(c.submitButton.value).appendTo(c.currentForm)}c.settings.submitHandler.call(c,c.currentForm,d);if(c.submitButton){f.remove()}return false}return true}if(c.cancelSubmit){c.cancelSubmit=false;return e()}if(c.form()){if(c.pendingRequest){c.formSubmitted=true;return false}return e()}else{c.focusInvalid();return false}})}return c},valid:function(){if(a(this[0]).is("form")){return this.validate().form()}else{var c=true;var b=a(this[0].form).validate();this.each(function(){c&=b.element(this)});return c}},removeAttrs:function(d){var b={},c=this;a.each(d.split(/\s/),function(e,f){b[f]=c.attr(f);c.removeAttr(f)});return b},rules:function(e,b){var g=this[0];if(e){var d=a.data(g.form,"validator").settings;var i=d.rules;var j=a.validator.staticRules(g);switch(e){case"add":a.extend(j,a.validator.normalizeRule(b));i[g.name]=j;if(b.messages){d.messages[g.name]=a.extend(d.messages[g.name],b.messages)}break;case"remove":if(!b){delete i[g.name];return j}var h={};a.each(b.split(/\s/),function(k,l){h[l]=j[l];delete j[l]});return h}}var f=a.validator.normalizeRules(a.extend({},a.validator.metadataRules(g),a.validator.classRules(g),a.validator.attributeRules(g),a.validator.staticRules(g)),g);if(f.required){var c=f.required;delete f.required;f=a.extend({required:c},f)}return f}});a.extend(a.expr[":"],{blank:function(b){return!a.trim(""+b.value)},filled:function(b){return!!a.trim(""+b.value)},unchecked:function(b){return!b.checked}});a.validator=function(b,c){this.settings=a.extend(true,{},a.validator.defaults,b);this.currentForm=c;this.init()};a.validator.format=function(b,c){if(arguments.length===1){return function(){var d=a.makeArray(arguments);d.unshift(b);return a.validator.format.apply(this,d)}}if(arguments.length>2&&c.constructor!==Array){c=a.makeArray(arguments).slice(1)}if(c.constructor!==Array){c=[c]}a.each(c,function(d,e){b=b.replace(new RegExp("\\{"+d+"\\}","g"),e)});return b};a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusInvalid:true,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:true,ignore:":hidden",ignoreTitle:false,onfocusin:function(b,c){this.lastActive=b;if(this.settings.focusCleanup&&!this.blockFocusCleanup){if(this.settings.unhighlight){this.settings.unhighlight.call(this,b,this.settings.errorClass,this.settings.validClass)}this.addWrapper(this.errorsFor(b)).hide()}},onfocusout:function(b,c){if(!this.checkable(b)&&(b.name in this.submitted||!this.optional(b))){this.element(b)}},onkeyup:function(b,c){if(c.which===9&&this.elementValue(b)===""){return}else{if(b.name in this.submitted||b===this.lastActive){this.element(b)}}},onclick:function(b,c){if(b.name in this.submitted){this.element(b)}else{if(b.parentNode.name in this.submitted){this.element(b.parentNode)}}},highlight:function(d,b,c){if(d.type==="radio"){this.findByName(d.name).addClass(b).removeClass(c)}else{a(d).addClass(b).removeClass(c)}},unhighlight:function(d,b,c){if(d.type==="radio"){this.findByName(d.name).removeClass(b).addClass(c)}else{a(d).removeClass(b).addClass(c)}}},setDefaults:function(b){a.extend(a.validator.defaults,b)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}."),nameFormat:"Please enter English word or Chinese word."},autoCreateRanges:false,prototype:{init:function(){this.labelContainer=a(this.settings.errorLabelContainer);this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm);this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer);this.submitted={};this.valueCache={};this.pendingRequest=0;this.pending={};this.invalid={};this.reset();var b=(this.groups={});a.each(this.settings.groups,function(e,f){a.each(f.split(/\s/),function(h,g){b[g]=e})});var d=this.settings.rules;a.each(d,function(e,f){d[e]=a.validator.normalizeRule(f)});function c(g){var f=a.data(this[0].form,"validator"),e="on"+g.type.replace(/^validate/,"");if(f.settings[e]){f.settings[e].call(f,this[0],g)}}a(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ","focusin focusout keyup",c).validateDelegate("[type='radio'], [type='checkbox'], select, option","click",c);if(this.settings.invalidHandler){a(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler)}},form:function(){this.checkForm();a.extend(this.submitted,this.errorMap);this.invalid=a.extend({},this.errorMap);if(!this.valid()){a(this.currentForm).triggerHandler("invalid-form",[this])}this.showErrors();return this.valid()},checkForm:function(){this.prepareForm();for(var b=0,c=(this.currentElements=this.elements());c[b];b++){this.check(c[b])}return this.valid()},element:function(c){c=this.validationTargetFor(this.clean(c));this.lastElement=c;this.prepareElement(c);this.currentElements=a(c);var b=this.check(c)!==false;if(b){delete this.invalid[c.name]}else{this.invalid[c.name]=true}if(!this.numberOfInvalids()){this.toHide=this.toHide.add(this.containers)}this.showErrors();return b},showErrors:function(c){if(c){a.extend(this.errorMap,c);this.errorList=[];for(var b in c){this.errorList.push({message:c[b],element:this.findByName(b)[0]})}this.successList=a.grep(this.successList,function(d){return!(d.name in c)})}if(this.settings.showErrors){this.settings.showErrors.call(this,this.errorMap,this.errorList)}else{this.defaultShowErrors()}},resetForm:function(){if(a.fn.resetForm){a(this.currentForm).resetForm()}this.submitted={};this.lastElement=null;this.prepareForm();this.hideErrors();this.elements().removeClass(this.settings.errorClass).removeData("previousValue")},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(d){var c=0;for(var b in d){c++}return c},hideErrors:function(){this.addWrapper(this.toHide).hide()},valid:function(){return this.size()===0},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid){try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(b){}}},findLastActive:function(){var b=this.lastActive;return b&&a.grep(this.errorList,function(c){return c.element.name===b.name}).length===1&&b},elements:function(){var c=this,b={};return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){if(!this.name&&c.settings.debug&&window.console){console.error("%o has no name assigned",this)}if(this.name in b||!c.objectLength(a(this).rules())){return false}b[this.name]=true;return true})},clean:function(b){return a(b)[0]},errors:function(){var b=this.settings.errorClass.replace(" ",".");return a(this.settings.errorElement+"."+b,this.errorContext)},reset:function(){this.successList=[];this.errorList=[];this.errorMap={};this.toShow=a([]);this.toHide=a([]);this.currentElements=a([])},prepareForm:function(){this.reset();this.toHide=this.errors().add(this.containers)},prepareElement:function(b){this.reset();this.toHide=this.errorsFor(b)},elementValue:function(b){var c=a(b).attr("type"),d=a(b).val();if(c==="radio"||c==="checkbox"){return a('input[name="'+a(b).attr("name")+'"]:checked').val()}if(typeof d==="string"){return d.replace(/\r/g,"")}return d},check:function(c){c=this.validationTargetFor(this.clean(c));var i=a(c).rules();var d=false;var h=this.elementValue(c);var b;for(var j in i){var g={method:j,parameters:i[j]};try{b=a.validator.methods[j].call(this,h,c,g.parameters);if(b==="dependency-mismatch"){d=true;continue}d=false;if(b==="pending"){this.toHide=this.toHide.not(this.errorsFor(c));return}if(!b){this.formatAndAdd(c,g);return false}}catch(f){if(this.settings.debug&&window.console){console.log("exception occured when checking element "+c.id+", check the '"+g.method+"' method",f)}throw f}}if(d){return}if(this.objectLength(i)){this.successList.push(c)}return true},customMetaMessage:function(b,d){if(!a.metadata){return}var c=this.settings.meta?a(b).metadata()[this.settings.meta]:a(b).metadata();return c&&c.messages&&c.messages[d]},customDataMessage:function(b,c){return a(b).data("msg-"+c.toLowerCase())||(b.attributes&&a(b).attr("data-msg-"+c.toLowerCase()))},customMessage:function(c,d){var b=this.settings.messages[c];return b&&(b.constructor===String?b:b[d])},findDefined:function(){for(var b=0;b<arguments.length;b++){if(arguments[b]!==undefined){return arguments[b]}}return undefined},defaultMessage:function(b,c){return this.findDefined(this.customMessage(b.name,c),this.customDataMessage(b,c),this.customMetaMessage(b,c),!this.settings.ignoreTitle&&b.title||undefined,a.validator.messages[c],"<strong>Warning: No message defined for "+b.name+"</strong>")},formatAndAdd:function(c,e){var d=this.defaultMessage(c,e.method),b=/\$?\{(\d+)\}/g;if(typeof d==="function"){d=d.call(this,e.parameters,c)}else{if(b.test(d)){d=a.validator.format(d.replace(b,"{$1}"),e.parameters)}}this.errorList.push({message:d,element:c});this.errorMap[c.name]=d;this.submitted[c.name]=d},addWrapper:function(b){if(this.settings.wrapper){b=b.add(b.parent(this.settings.wrapper))}return b},defaultShowErrors:function(){var c,d;for(c=0;this.errorList[c];c++){var b=this.errorList[c];if(this.settings.highlight){this.settings.highlight.call(this,b.element,this.settings.errorClass,this.settings.validClass)}this.showLabel(b.element,b.message)}if(this.errorList.length){this.toShow=this.toShow.add(this.containers)}if(this.settings.success){for(c=0;this.successList[c];c++){this.showLabel(this.successList[c])}}if(this.settings.unhighlight){for(c=0,d=this.validElements();d[c];c++){this.settings.unhighlight.call(this,d[c],this.settings.errorClass,this.settings.validClass)}}this.toHide=this.toHide.not(this.toShow);this.hideErrors();this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return a(this.errorList).map(function(){return this.element})},showLabel:function(c,d){var b=this.errorsFor(c);if(b.length){b.removeClass(this.settings.validClass).addClass(this.settings.errorClass);if(b.attr("generated")){b.html(d)}}else{b=a("<"+this.settings.errorElement+"/>").attr({"for":this.idOrName(c),generated:true}).addClass(this.settings.errorClass).html(d||"");if(this.settings.wrapper){b=b.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()}if(!this.labelContainer.append(b).length){if(this.settings.errorPlacement){this.settings.errorPlacement(b,a(c))}else{b.insertAfter(c)}}}if(!d&&this.settings.success){b.text("");if(typeof this.settings.success==="string"){b.addClass(this.settings.success)}else{this.settings.success(b,c)}}this.toShow=this.toShow.add(b)},errorsFor:function(c){var b=this.idOrName(c);return this.errors().filter(function(){return a(this).attr("for")===b})},idOrName:function(b){return this.groups[b.name]||(this.checkable(b)?b.name:b.id||b.name)},validationTargetFor:function(b){if(this.checkable(b)){b=this.findByName(b.name).not(this.settings.ignore)[0]}return b},checkable:function(b){return(/radio|checkbox/i).test(b.type)},findByName:function(b){return a(this.currentForm).find('[name="'+b+'"]')},getLength:function(c,b){switch(b.nodeName.toLowerCase()){case"select":return a("option:selected",b).length;case"input":if(this.checkable(b)){return this.findByName(b.name).filter(":checked").length}}return c.length},depend:function(c,b){return this.dependTypes[typeof c]?this.dependTypes[typeof c](c,b):true},dependTypes:{"boolean":function(c,b){return c},string:function(c,b){return!!a(c,b.form).length},"function":function(c,b){return c(b)}},optional:function(b){var c=this.elementValue(b);return!a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"},startRequest:function(b){if(!this.pending[b.name]){this.pendingRequest++;this.pending[b.name]=true}},stopRequest:function(b,c){this.pendingRequest--;if(this.pendingRequest<0){this.pendingRequest=0}delete this.pending[b.name];if(c&&this.pendingRequest===0&&this.formSubmitted&&this.form()){a(this.currentForm).submit();this.formSubmitted=false}else{if(!c&&this.pendingRequest===0&&this.formSubmitted){a(this.currentForm).triggerHandler("invalid-form",[this]);this.formSubmitted=false}}},previousValue:function(b){return a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:true,message:this.defaultMessage(b,"remote")})}},classRuleSettings:{required:{required:true},email:{email:true},url:{url:true},date:{date:true},dateISO:{dateISO:true},number:{number:true},digits:{digits:true},creditcard:{creditcard:true}},addClassRules:function(b,c){if(b.constructor===String){this.classRuleSettings[b]=c}else{a.extend(this.classRuleSettings,b)}},classRules:function(c){var d={};var b=a(c).attr("class");if(b){a.each(b.split(" "),function(){if(this in a.validator.classRuleSettings){a.extend(d,a.validator.classRuleSettings[this])}})}return d},attributeRules:function(c){var e={};var b=a(c);for(var f in a.validator.methods){var d;if(f==="required"){d=b.get(0).getAttribute(f);if(d===""){d=true}d=!!d}else{d=b.attr(f)}if(d){e[f]=d}else{if(b[0].getAttribute("type")===f){e[f]=true}}}if(e.maxlength&&/-1|2147483647|524288/.test(e.maxlength)){delete e.maxlength}return e},metadataRules:function(b){if(!a.metadata){return{}}var c=a.data(b.form,"validator").settings.meta;return c?a(b).metadata()[c]:a(b).metadata()},staticRules:function(c){var d={};var b=a.data(c.form,"validator");if(b.settings.rules){d=a.validator.normalizeRule(b.settings.rules[c.name])||{}}return d},normalizeRules:function(c,b){a.each(c,function(f,e){if(e===false){delete c[f];return}if(e.param||e.depends){var d=true;switch(typeof e.depends){case"string":d=!!a(e.depends,b.form).length;break;case"function":d=e.depends.call(b,b);break}if(d){c[f]=e.param!==undefined?e.param:true}else{delete c[f]}}});a.each(c,function(d,e){c[d]=a.isFunction(e)?e(b):e});a.each(["minlength","maxlength","min","max"],function(){if(c[this]){c[this]=Number(c[this])}});a.each(["rangelength","range"],function(){if(c[this]){c[this]=[Number(c[this][0]),Number(c[this][1])]}});if(a.validator.autoCreateRanges){if(c.min&&c.max){c.range=[c.min,c.max];delete c.min;delete c.max}if(c.minlength&&c.maxlength){c.rangelength=[c.minlength,c.maxlength];delete c.minlength;delete c.maxlength}}if(c.messages){delete c.messages}return c},normalizeRule:function(c){if(typeof c==="string"){var b={};a.each(c.split(/\s/),function(){b[this]=true});c=b}return c},addMethod:function(b,d,c){a.validator.methods[b]=d;a.validator.messages[b]=c!==undefined?c:a.validator.messages[b];if(d.length<3){a.validator.addClassRules(b,a.validator.normalizeRule(b))}},methods:{required:function(c,b,e){if(!this.depend(e,b)){return"dependency-mismatch"}if(b.nodeName.toLowerCase()==="select"){var d=a(b).val();return d&&d.length>0}if(this.checkable(b)){return this.getLength(c,b)>0}return a.trim(c).length>0},remote:function(f,c,g){if(this.optional(c)){return"dependency-mismatch"}var d=this.previousValue(c);if(!this.settings.messages[c.name]){this.settings.messages[c.name]={}}d.originalMessage=this.settings.messages[c.name].remote;this.settings.messages[c.name].remote=d.message;g=typeof g==="string"&&{url:g}||g;if(this.pending[c.name]){return"pending"}if(d.old===f){return d.valid}d.old=f;var b=this;this.startRequest(c);var e={};e[c.name]=f;a.ajax(a.extend(true,{url:g,mode:"abort",port:"validate"+c.name,dataType:"json",data:e,success:function(i){b.settings.messages[c.name].remote=d.originalMessage;var k=i===true||i==="true";if(k){var h=b.formSubmitted;b.prepareElement(c);b.formSubmitted=h;b.successList.push(c);delete b.invalid[c.name];b.showErrors()}else{var l={};var j=i||b.defaultMessage(c,"remote");l[c.name]=d.message=a.isFunction(j)?j(f):j;b.invalid[c.name]=true;b.showErrors(l)}d.valid=k;b.stopRequest(c,k)}},g));return"pending"},minlength:function(d,b,e){var c=a.isArray(d)?d.length:this.getLength(a.trim(d),b);return this.optional(b)||c>=e},maxlength:function(d,b,e){var c=a.isArray(d)?d.length:this.getLength(a.trim(d),b);return this.optional(b)||c<=e},rangelength:function(d,b,e){var c=a.isArray(d)?d.length:this.getLength(a.trim(d),b);return this.optional(b)||(c>=e[0]&&c<=e[1])},min:function(c,b,d){return this.optional(b)||c>=d},max:function(c,b,d){return this.optional(b)||c<=d},range:function(c,b,d){return this.optional(b)||(c>=d[0]&&c<=d[1])},email:function(c,b){return this.optional(b)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(c)},url:function(c,b){return this.optional(b)||/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(c)},date:function(c,b){return this.optional(b)||!/Invalid|NaN/.test(new Date(c))},dateISO:function(c,b){return this.optional(b)||/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(c)},number:function(c,b){return this.optional(b)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(c)},digits:function(c,b){return this.optional(b)||/^\d+$/.test(c)},creditcard:function(f,c){if(this.optional(c)){return"dependency-mismatch"}if(/[^0-9 \-]+/.test(f)){return false}var g=0,e=0,b=false;f=f.replace(/\D/g,"");for(var h=f.length-1;h>=0;h--){var d=f.charAt(h);e=parseInt(d,10);if(b){if((e*=2)>9){e-=9}}g+=e;b=!b}return(g%10)===0},equalTo:function(c,b,e){var d=a(e);if(this.settings.onfocusout){d.unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){a(b).valid()})}return c===d.val()},nameFormat:function(c,b,e){c=a.trim(c);var d=/^[a-zA-Z\u4e00-\u9fa5]+$/;return this.optional(b)||d.test(c)}}});a.format=a.validator.format}(jQuery));(function(c){var a={};if(c.ajaxPrefilter){c.ajaxPrefilter(function(f,e,g){var d=f.port;if(f.mode==="abort"){if(a[d]){a[d].abort()}a[d]=g}})}else{var b=c.ajax;c.ajax=function(e){var f=("mode"in e?e:c.ajaxSettings).mode,d=("port"in e?e:c.ajaxSettings).port;if(f==="abort"){if(a[d]){a[d].abort()}return(a[d]=b.apply(this,arguments))}return b.apply(this,arguments)}}}(jQuery));(function(a){if(!jQuery.event.special.focusin&&!jQuery.event.special.focusout&&document.addEventListener){a.each({focus:"focusin",blur:"focusout"},function(c,b){a.event.special[b]={setup:function(){this.addEventListener(c,d,true)},teardown:function(){this.removeEventListener(c,d,true)},handler:function(g){var f=arguments;f[0]=a.event.fix(g);f[0].type=b;return a.event.handle.apply(this,f)}};function d(f){f=a.event.fix(f);f.type=b;return a.event.handle.call(this,f)}})}a.extend(a.fn,{validateDelegate:function(d,c,b){return this.bind(c,function(e){var f=a(e.target);if(f.is(d)){return b.apply(f,arguments)}})}})}(jQuery));

/* jquery.metadata */
(function($){$.extend({metadata:{defaults:{type:'class',name:'metadata',cre:/({.*})/,single:'metadata'},setType:function(type,name){this.defaults.type=type;this.defaults.name=name},get:function(elem,opts){var settings=$.extend({},this.defaults,opts);if(!settings.single.length)settings.single='metadata';var data=$.data(elem,settings.single);if(data)return data;data="{}";if(settings.type=="class"){var m=settings.cre.exec(elem.className);if(m)data=m[1]}else if(settings.type=="elem"){if(!elem.getElementsByTagName)return undefined;var e=elem.getElementsByTagName(settings.name);if(e.length)data=$.trim(e[0].innerHTML)}else if(elem.getAttribute!=undefined){var attr=elem.getAttribute(settings.name);if(attr)data=attr}if(data.indexOf('{')<0)data="{"+data+"}";data=eval("("+data+")");$.data(elem,settings.single,data);return data}}});$.fn.metadata=function(opts){return $.metadata.get(this[0],opts)}})(jQuery);

jQuery.extend(jQuery.validator.messages, {
    required : "必须填写",
    remote : "错误",
    email : "格式错误",
    url : "不合法",
    date : "不合法",
    dateISO : "不合法",
    number : "只能输入数字",
    digits : "只能输入整数",
    creditcard : "不合法",
    equalTo : "两次输入值不相同",
    accept : "不合法的后缀",
    maxlength : "长度不能大于{0}",
    minlength : "长度不能小于{0}",
    rangelength : "长度只能在{0}-{1}之间",
    range : "数值只能在{0}-{1}之间",
    max : "数值不能大于{0}",
    min : "数值不能小于{0}"
});

// 添加validate标签属性
$(function() {
    $.metadata.setType('attr', 'validate');
});

/* 自定义校验方式 */
jQuery.fn.extend({
    baseValidate: function (submitHandler) {
        return this.validate({
            onkeyup: false,
            onclick: false,
            focusInvalid: false,
            showErrors: function (errorMap, errorList) {
                // 只显示第一条错误信息
                if (!!errorList && errorList.length > 0) {
                    var validateTitle = $(errorList[0].element).attr("validate-title");
                    var validateContent = errorList[0].message;
                    ht.message.toast(validateTitle + validateContent);
                }
            },
            submitHandler: submitHandler
        });
    }
});

//字段验证：英文、数字
jQuery.validator.addMethod("en_num", function(value, element) {
    value = value.trim();
    element.value = value;
    return this.optional(element) || /^[A-Za-z0-9]+$/.test(value);
}, "只能包括英文、数字");

//字段验证：英文、数字、下划线
jQuery.validator.addMethod("en_num_underline", function(value, element) {
    value = value.trim();
    element.value = value;
    return this.optional(element) || /^\w+$/.test(value);
}, "只能包括英文、数字、下划线");

//字段验证：英文、中文
jQuery.validator.addMethod("en_zh", function(value, element) {
    value = value.trim();
    element.value = value;
    return this.optional(element) || /^[a-zA-Z\u4e00-\u9fa5]+$/.test(value);
}, "只能输入英文、中文");

//字段验证：英文
jQuery.validator.addMethod("en", function(value, element) {
    value = value.trim();
    element.value = value;
    return this.optional(element) || /^[a-zA-Z]+$/.test(value);
}, "只能输入英文");

//字段验证：中文
jQuery.validator.addMethod("zh", function(value, element) {
    value = value.trim();
    element.value = value;
    return this.optional(element) || /^[\u4e00-\u9fa5]+$/.test(value);
}, "只能输入中文");

//字段验证：英文、中文、数字
jQuery.validator.addMethod("en_zh_num", function(value, element) {
    value = value.trim();
    element.value = value;
    return this.optional(element) || /^[a-zA-Z0-9\u4e00-\u9fa5]+$/.test(value);
}, "只能输入英文、中文、数字");

//身份证号验证
jQuery.validator.addMethod("card", function(value, element) {
    value = value.trim();
    element.value = value;
    return this.optional(element) || /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(value);
}, "格式错误,请重新输入");

//护照验证
jQuery.validator.addMethod("passport", function (value, element) {
    value = value.trim();
    element.value = value;
    return this.optional(element) || (/^(P\d{7}|G\d{8}|S\d{7,8}|D\d+|1[4,5]\d{7})$/.test(value));
}, "格式错误");

//军官证验证
jQuery.validator.addMethod("officerCard", function (value, element) {
    value = value.trim();
    element.value = value;
    return this.optional(element) || (/^[a-zA-Z0-9\u4e00-\u9fa5]{1,32}$/.test(value));
}, "格式错误");

//台胞证验证
jQuery.validator.addMethod("taiwanCard", function (value, element) {
    value = value.trim();
    element.value = value;
    return this.optional(element) || (/^[a-zA-Z0-9\u4e00-\u9fa5]{1,32}$/.test(value));
}, "格式错误");

//手机号码验证
jQuery.validator.addMethod("mobile", function(value, element) {
    var length = value.length;
    //var mobile = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    var mobile = /^1[34578]\d{9}$/;
    value = value.trim();
    element.value = value;
    return this.optional(element) || (length == 11 && mobile.test(value));
}, "格式错误，请重新输入");

//固定电话号码验证（支持分机号）
jQuery.validator.addMethod("tel", function(value, element) {
    var tel = /^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/;
    value = value.trim();
    element.value = value;
    return this.optional(element) || (tel.test(value));
}, "格式错误，请重新输入");

//联系电话(手机/固定电话皆可)验证
jQuery.validator.addMethod("phone", function(value,element) {
    var mobile = /^1[34578]\d{9}$/;
    var tel = /^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/;
    value = value.trim();
    element.value = value;
    return this.optional(element) || (tel.test(value) || mobile.test(value));
}, "联系电话格式错误，请重新输入");

//车牌验证
jQuery.validator.addMethod("carNoV", function(value,element) {
    var re=/^[\u4e00-\u9fa5]{1}[A-Z]{1}[A-Z_0-9]{5}$/;
    value = value.trim();
    element.value = value;
    return this.optional(element) || (re.test(value));
}, "车牌号格式错误，请重新输入");

// 验证失败的错误提示
var emsg;
var getEmsg = function(){
    return emsg;
};

//身份证男验证
jQuery.validator.addMethod("manByCard", function (value, element) {
    emsg = "证件号码错误，证件号码只可是男性";
    var res = parseCard(value);
    if ($(element).attr("emsg-manByCard")) {
        emsg = $(element).attr("emsg-manByCard");
    }
    value = value.trim();
    element.value = value;
    return this.optional(element) || res.sex === 1;
}, getEmsg);

//身份证女验证
jQuery.validator.addMethod("womanByCard", function (value, element) {
    emsg = "证件号码错误，证件号码只可是女性";
    var res = parseCard(value);
    if ($(element).attr("emsg-womanByCard")) {
        emsg = $(element).attr("emsg-womanByCard");
    }
    value = value.trim();
    element.value = value;
    return this.optional(element) || res.sex === 0;
}, getEmsg);

//出生日期验证年龄区间
jQuery.validator.addMethod("birthdayByAge", function (value, element) {
    var validateStr = $(element).attr("validate");
    var json = eval('(' + validateStr + ')');
    var success  = false;
    $.ajax({
        type: "post",
        url: ht.ip.bytcrm_api + "/product/age/validateProductAgeByBirthday",
        async: false,
        data: {
            "productId": json.birthdayByAge,
            "birthday": value
        },
        dataType: "json",
        success: function (data) {
            if(data && data.code === 0){
                success = true;
            } else {
                emsg = data.msg;
                success = false;
            }
        },
        error: function () {
            ht.message.toast("网络异常，请稍后再试");
        }
    });

    value = value.trim();
    element.value = value;
    return this.optional(element) || success;
}, getEmsg);

function parseCard(card) {
    var idxSexStart = card.length == 15 ? 14 : 16;
    var birthYearSpan = card.length == 15 ? 2 : 4;
    var res = {};
    var idxSex = 1 - card.substr(idxSexStart, 1) % 2;
    res.sex = idxSex == '1' ? 0 : 1;

    var year = (birthYearSpan == 2 ? '19' : '') +
        card.substr(6, birthYearSpan);
    var month = card.substr(6 + birthYearSpan, 2);
    var day = card.substr(8 + birthYearSpan, 2);
    res.birthday = year + '-' + month + '-' + day;

    var d = new Date(); //当然，在正式项目中，这里应该获取服务器的当前时间
    var monthFloor = ((d.getMonth() + 1) < parseInt(month, 10) || (d.getMonth() + 1) == parseInt(month, 10) && d.getDate() < parseInt(day, 10)) ? 1 : 0;
    res.age = d.getFullYear() - parseInt(year, 10) - monthFloor;
    return res;
}