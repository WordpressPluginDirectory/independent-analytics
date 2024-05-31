!function(e,t,n,r,i){var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o="function"==typeof a[r]&&a[r],s=o.cache||{},l="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function d(t,n){if(!s[t]){if(!e[t]){var i="function"==typeof a[r]&&a[r];if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(l&&"string"==typeof t)return l(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(n){var r=e[t][1][n];return null!=r?r:n},p.cache={};var u=s[t]=new d.Module(t);e[t][0].call(u.exports,p,u,u.exports,this)}return s[t].exports;function p(e){var t=p.resolve(e);return!1===t?{}:d(t)}}d.isParcelRequire=!0,d.Module=function(e){this.id=e,this.bundle=d,this.exports={}},d.modules=e,d.cache=s,d.parent=o,d.register=function(t,n){e[t]=[function(e,t){t.exports=n},{}]},Object.defineProperty(d,"root",{get:function(){return a[r]}}),a[r]=d;for(var c=0;c<t.length;c++)d(t[c]);if(n){var u=d(n);"object"==typeof exports&&"undefined"!=typeof module?module.exports=u:"function"==typeof define&&define.amd&&define((function(){return u}))}}({"49s9y":[function(e,t,n){var r=e("@parcel/transformer-js/src/esmodule-helpers.js"),i=e("@swc/helpers/lib/_object_spread.js"),a=r.interopDefault(i),o=e("./modules/user-roles"),s=e("./modules/duplicate-field"),l=e("./modules/email-reports"),d=e("./download");jQuery((function(e){o.UserRoles.setup(),s.FieldDuplicator.setup(),l.EmailReports.setup()})),document.addEventListener("DOMContentLoaded",(function(){document.getElementById("iawp-export-views").addEventListener("click",(function(e){var t=e.target;t.textContent=iawpText.exportingPages,t.setAttribute("disabled","disabled");var n=(0,a.default)({},iawpActions.export_pages);jQuery.post(ajaxurl,n,(function(e){(0,d.downloadCSV)("exported-pages.csv",e),t.textContent=iawpText.exportPages,t.removeAttribute("disabled")}))})),document.getElementById("iawp-export-referrers").addEventListener("click",(function(e){var t=e.target;t.textContent=iawpText.exportingReferrers,t.setAttribute("disabled","disabled");var n=(0,a.default)({},iawpActions.export_referrers);jQuery.post(ajaxurl,n,(function(e){(0,d.downloadCSV)("exported-referrers.csv",e),t.textContent=iawpText.exportReferrers,t.removeAttribute("disabled")}))})),document.getElementById("iawp-export-geo").addEventListener("click",(function(e){var t=e.target;t.textContent=iawpText.exportingGeolocations,t.setAttribute("disabled","disabled");var n=(0,a.default)({},iawpActions.export_geo);jQuery.post(ajaxurl,n,(function(e){(0,d.downloadCSV)("exported-geo.csv",e),t.textContent=iawpText.exportGeolocations,t.removeAttribute("disabled")}))})),document.getElementById("iawp-export-devices").addEventListener("click",(function(e){var t=e.target;t.textContent=iawpText.exportingDevices,t.setAttribute("disabled","disabled");var n=(0,a.default)({},iawpActions.export_devices);jQuery.post(ajaxurl,n,(function(e){(0,d.downloadCSV)("exported-devices.csv",e),t.textContent=iawpText.exportDevices,t.removeAttribute("disabled")}))}));var e=document.getElementById("iawp-export-campaigns");e&&e.addEventListener("click",(function(e){var t=e.target;t.textContent=iawpText.exportingCampaigns,t.setAttribute("disabled","disabled");var n=(0,a.default)({},iawpActions.export_campaigns);jQuery.post(ajaxurl,n,(function(e){(0,d.downloadCSV)("exported-campaigns.csv",e),t.textContent=iawpText.exportCampaigns,t.removeAttribute("disabled")}))}))}))},{"@swc/helpers/lib/_object_spread.js":"6Iw7d","./modules/user-roles":"3ea67","./modules/duplicate-field":"98igo","./modules/email-reports":"3SB0r","./download":"ce5U5","@parcel/transformer-js/src/esmodule-helpers.js":"kPSB8"}],"6Iw7d":[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i.default(e,t,n[t])}))}return e};var r,i=(r=e("./_define_property"))&&r.__esModule?r:{default:r}},{"./_define_property":"5UakF"}],"5UakF":[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}},{}],"3ea67":[function(e,t,n){var r=e("@parcel/transformer-js/src/esmodule-helpers.js");r.defineInteropFlag(n),r.export(n,"UserRoles",(function(){return s}));var i=e("@swc/helpers/lib/_object_spread.js"),a=r.interopDefault(i),o=jQuery,s={setup:function(){var e=this;o("#user-role-select").on("change",(function(){o(".role").removeClass("show"),o(".role-"+o(this).val()).addClass("show")})),o("#capabilities-form").on("submit",(function(t){t.preventDefault(),e.save()}))},save:function(){o("#save-permissions").addClass("saving");var e={};o(".role").each((function(){var t=o(this).find("select").attr("name"),n=o(this).find("select").val();e[t]=n})),e=JSON.stringify(e);var t=o("#iawp_white_label").prop("checked"),n=(0,a.default)({},iawpActions.update_capabilities,{capabilities:e,white_label:t});jQuery.post(ajaxurl,n,(function(e){o("#save-permissions").removeClass("saving")}))}}},{"@swc/helpers/lib/_object_spread.js":"6Iw7d","@parcel/transformer-js/src/esmodule-helpers.js":"kPSB8"}],kPSB8:[function(e,t,n){n.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},n.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.exportAll=function(e,t){return Object.keys(e).forEach((function(n){"default"===n||"__esModule"===n||t.hasOwnProperty(n)||Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[n]}})})),t},n.export=function(e,t,n){Object.defineProperty(e,t,{enumerable:!0,get:n})}},{}],"98igo":[function(e,t,n){var r=e("@parcel/transformer-js/src/esmodule-helpers.js");r.defineInteropFlag(n),r.export(n,"FieldDuplicator",(function(){return a}));var i=jQuery,a={setup:function(){var e=this;i(".duplicator").each((function(t,n){i(this).find(".duplicate-button").on("click",(function(t){t.preventDefault(),e.createNewEntry(i(n))}))})),i(".entry").each((function(){e.attachRemoveEvent(i(this))}))},createNewEntry:function(e){var t=e.find(".new-field");if(!this.errorChecks(t)){var n=e.find(".blueprint .entry").clone();n.find("input").val(t.val()),e.next().append(n),t.hasClass("select")?t.find('option[value="'+t.val()+'"').remove():t.val(""),this.resetIndex(e.next(".saved")),this.attachRemoveEvent(n),e.parents("form").removeClass("empty exists"),this.hideNoneMessage(e)}},attachRemoveEvent:function(e){var t=this;e.find(".remove").on("click",(function(n){n.preventDefault();var r=i(e).parent(".saved");i(this).parents("form").addClass("unsaved"),i(this).parent().remove(),t.resetIndex(r)}))},resetIndex:function(e){var t=0;e.find("input").each((function(){i(this).attr("name",i(this).attr("data-option")+"["+t+"]"),i(this).attr("id",i(this).attr("data-option")+"["+t+"]"),t++})),e.parents("form").addClass("unsaved")},errorChecks:function(e){if(""==e.val())return e.parents("form").addClass("empty"),!0;var t=[];return e.parent().parent().next(".saved").find(".entry").each((function(){t.push(i(this).find("input").val())})),!!t.includes(e.val())&&(e.parents("form").addClass("exists"),!0)},hideNoneMessage:function(e){e.parent().find(".none").hide()}}},{"@parcel/transformer-js/src/esmodule-helpers.js":"kPSB8"}],"3SB0r":[function(e,t,n){var r=e("@parcel/transformer-js/src/esmodule-helpers.js");r.defineInteropFlag(n),r.export(n,"EmailReports",(function(){return s}));var i=e("@swc/helpers/lib/_object_spread.js"),a=r.interopDefault(i),o=jQuery,s={setup:function(){var e=this;this.disableTestButtonIfEmpty(),o(".email-reports .new-address input").on("change",(function(){o("#test-email").attr("disabled",!0)})),o(".email-reports .saved .remove").on("click",(function(){e.disableTestButtonIfEmpty()})),o("#"+o("#iawp_email_report_interval").val()+"-interval-note").show(),o("#iawp_email_report_interval").on("change",(function(){o(".interval-note").hide(),o("#"+o(this).val()+"-interval-note").show()}));var t=o("#iawp_email_report_colors"),n=o(".iawp-color-picker"),r={change:function(e,r){var i=[];n.each((function(){i.push(o(this).iris("color"))})),t.val(i.join(","))}};n.each((function(){o(this).wpColorPicker(r)})),o("#test-email").on("click",(function(t){t.preventDefault(),e.sendTestEmail()})),o("#preview-email").on("click",(function(n){n.preventDefault(),e.previewEmail(t.val())})),o("#close-email-preview").on("click",(function(e){e.preventDefault(),o("#email-preview-container").removeClass("visible"),o("#email-preview").html("")}))},disableTestButtonIfEmpty:function(){0==o(".email-reports .saved input").length&&o("#test-email").attr("disabled",!0)},sendTestEmail:function(){var e=(0,a.default)({},iawpActions.test_email);o("#test-email").addClass("sending"),jQuery.post(ajaxurl,e,(function(e){o("#test-email").removeClass("sending"),e?o("#test-email").addClass("sent"):o("#test-email").addClass("failed"),setTimeout((function(){o("#test-email").removeClass("sent failed")}),1e3)}))},previewEmail:function(e){var t=(0,a.default)({},iawpActions.preview_email,{colors:e});o("#preview-email").addClass("sending"),jQuery.post(ajaxurl,t,(function(e){o("#preview-email").removeClass("sending"),e.success?(o("#preview-email").addClass("sent"),o("#email-preview").html(e.data.html),o("#email-preview-container").addClass("visible")):o("#preview-email").addClass("failed"),setTimeout((function(){o("#preview-email").removeClass("sent failed")}),1e3)}))}}},{"@swc/helpers/lib/_object_spread.js":"6Iw7d","@parcel/transformer-js/src/esmodule-helpers.js":"kPSB8"}],ce5U5:[function(e,t,n){t.exports={downloadCSV:function(e,t){var n=new Blob([t],{type:"text/csv"}),r=window.document.createElement("a");r.href=window.URL.createObjectURL(n),r.download=e,document.body.appendChild(r),r.click(),document.body.removeChild(r)},downloadJSON:function(e,t){var n=new Blob([t],{type:"application/json"}),r=window.document.createElement("a");r.href=window.URL.createObjectURL(n),r.download=e,document.body.appendChild(r),r.click(),document.body.removeChild(r)}}},{}]},["49s9y"],"49s9y","parcelRequirec571");