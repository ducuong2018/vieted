(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[68234],{785356:function(e){e.exports="https://s.pinimg.com/webapp/empty-state-employees-2x-a5287565.png"},43544:function(e,s,t){"use strict";t.d(s,{Z:function(){return o}});var a=t(40660),l=function(e,s,t){var l=new window.Windows.Storage.Pickers.FileSavePicker;l.suggestedStartLocation=window.Windows.Storage.Pickers.PickerLocationId.documentsLibrary,l.fileTypeChoices.insert("Comma Seperated Values",[".csv"]),l.suggestedFileName=e,l.pickSaveFileAsync().then((function(e){e&&(window.Windows.Storage.CachedFileManager.deferUpdates(e),window.Windows.Storage.FileIO.writeTextAsync(e,s).then((function(){return window.Windows.Storage.CachedFileManager.completeUpdatesAsync(e)})).done((function(e){e===window.Windows.Storage.Provider.FileUpdateStatus.complete?a.Z.increment("".concat(t,".ui.export_csv.windows_completed_download"),1):a.Z.increment("".concat(t,".ui.export_csv.windows_unable_to_start_download"),1)})))}))},n=function(e,s){if(document.body){var t=document.body,a=document.createElement("a");a.setAttribute("href","data:text/csv;charset=utf-8,"+encodeURIComponent(s)),a.setAttribute("download",e),a.style.display="none",t.appendChild(a),a.click(),t.removeChild(a)}};function o(e,s){if(e&&"output"in e){var t=navigator;if(document.body)if(window.Windows)l(e.filename,e.output,s);else if(t.msSaveBlob){navigator.msSaveBlob(new Blob([e.output],{type:"text/csv;charset=utf-8"}),e.filename)}else n(e.filename,e.output);else a.Z.increment("".concat(s,".ui.export_csv.unable_to_start_download"),1)}}},528544:function(e,s,t){"use strict";t.d(s,{Z:function(){return A}});var a=t(658379),l=t(249444),n=t(629922),o=t(536042),r=t(846226),i=t(26079),c=t(363378),d=t.n(c),u=t(788739),p=t(11739),_=t(389282);function m(){var e=(0,o.ZP)();return(0,_.jsx)(p.Z,{header:e._('Your asset group list will appear here', '[m10n]AssetGroupsTable.emptyState.title', 'Header explaining where asset groups will go once added'),description:e._('You can manage permissions to your asset groups', '[m10n]AssetGroupsTable.emptyState.description', 'Description explaining what you can do on asset groups table'),image:(0,_.jsx)(l.Ee,{alt:e._('Example of asset groups', '[m10n]AssetGroupsTable.emptyState.image', 'Alternate text for image that shows an example of asset groups'),src:d(),naturalHeight:112,naturalWidth:418,color:"#FFF"})})}var h=function(e){var s=e.pageType,t=e.assetGroups,a=e.assetGroupsIsLoading,l=e.assetGroupsCurrentPageSelector,n=e.assetGroupsTotalCountSelector,r=e.assetGroupsPageSizeSelector,i=e.assetGroupsSearchTermSelector,c=e.assetGroupsFetchData,d=e.assetGroupsColumnDefs,p=e.assetGroupsTableConfiguration,h=e.assetGroupsOnRowClick,S=(0,o.ZP)();return(0,_.jsx)(u.Z,{pageType:s,searchPlaceholder:S._('Search asset groups', '[m10n]AssetGroupsTable.search', 'Placeholder text to hint user to search for asset groups by name or by business ID'),emptyState:(0,_.jsx)(m,{}),columnDefs:d,data:t,isLoading:a,fetchData:null!=c?c:function(){},searchTermSelector:i||(null==p?void 0:p.dataSearchTermSelector),currentPageSelector:l||(null==p?void 0:p.dataCurrentPageSelector),pageSizeSelector:r||(null==p?void 0:p.dataPageSizeSelector),totalCountSelector:n||(null==p?void 0:p.dataTotalCountSelector),onRowClick:h})},S=t(674145),f=t(262005);function b(e,s){return function(e){if(Array.isArray(e))return e}(e)||function(e,s){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var a,l,n=[],o=!0,r=!1;try{for(t=t.call(e);!(o=(a=t.next()).done)&&(n.push(a.value),!s||n.length!==s);o=!0);}catch(i){r=!0,l=i}finally{try{o||null==t.return||t.return()}finally{if(r)throw l}}return n}(e,s)||function(e,s){if(!e)return;if("string"==typeof e)return x(e,s);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return x(e,s)}(e,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,s){(null==s||s>e.length)&&(s=e.length);for(var t=0,a=new Array(s);t<s;t++)a[t]=e[t];return a}function A(e){var s=e.pageType,t=e.closePanels,c=e.adAccounts,d=e.adAccountsIsLoading,u=e.adAccountsFetchData,p=e.adAccountsColumnDefs,m=e.adAccountsTableConfiguration,x=e.adAccountsOnRowClick,A=e.profiles,y=e.profilesIsLoading,g=e.profilesTableConfiguration,C=e.profilesFetchData,P=e.profilesColumnDefs,w=e.profilesOnRowClick,v=e.profilesSearchTermSelector,E=e.owners,T=e.ownersError,I=e.assetGroupsTable,z=(0,o.ZP)(),j=b((0,a.useState)(null),2),N=j[0],D=j[1],L=b((0,a.useState)(null),2),O=L[0],F=L[1],Z=b((0,a.useState)(null),2),k=Z[0],U=Z[1],B=(0,n.ZP)((0,n.QK)(s));(0,a.useEffect)((function(){t&&(D(null),F(null),U(null))}),[t]);return(0,_.jsxs)(l.xu,{children:[(0,_.jsx)(r.Z,{id:"asset-groups-ad-accounts-expandable",children:(0,_.jsx)(l.Yl.Expandable,{id:"adAccountExpandable",accessibilityExpandLabel:z._('Show ad accounts', '[m10n]businessAccess.assets.adAccounts.expandable.expand', 'Accesibility label for expandable component to show ad accounts'),accessibilityCollapseLabel:z._('Hide ad accounts', '[m10n]businessAccess.assets.adAccounts.expandable.collapse', 'Accesibility label for expandable component to hide ad accounts'),expandedIndex:N,onExpandedChange:function(e){D(0===e?0:null),F(null),U(null),u&&!d&&0===e&&u({limit:f.T[0]}),B({eventName:"BUSINESS_ACCESS_ACTION",component:"BUSINESS_ACCESS_CONTAINER",componentId:"".concat(s.toLowerCase().replaceAll("_","-"),"-ad-accounts-expandable"),element:"BUSINESS_ACCESS_TAP",elementId:0===e?"expanded":"contracted"})},items:[{title:z._('Ad accounts', '[m10n]businessAccess.assets.adAccounts.expandable.title', 'ad account expandable title'),children:(0,_.jsx)(i.Z,{pageType:s,adAccountsTableConfiguration:m,adAccounts:c,adAccountsIsLoading:d,adAccountsFetchData:u,adAccountsColumnDefs:p,adAccountsOnRowClick:x,owners:E,ownersError:T})}]})}),I&&(0,_.jsx)(l.xu,{marginTop:4,children:(0,_.jsx)(r.Z,{id:"asset-groups-expandable",children:(0,_.jsx)(l.Yl.Expandable,{id:"assetGroupsExpandable",accessibilityExpandLabel:z._('Show asset groups', '[m10n]businessAccess.assets.groups.expandable.expand', 'Accesibility label for expandable component to show asset groups'),accessibilityCollapseLabel:z._('Hide asset groups', '[m10n]businessAccess.assets.groups.expandable.collapse', 'Accesibility label for expandable component to hide asset groups'),expandedIndex:O,onExpandedChange:function(e){D(null),F(0===e?0:null),U(null),null!=I&&I.assetGroupsFetchData&&!I.assetGroupsIsLoading&&0===e&&I.assetGroupsFetchData({limit:f.T[0]}),B({eventName:"BUSINESS_ACCESS_ACTION",component:"BUSINESS_ACCESS_CONTAINER",componentId:"".concat(s.toLowerCase().replaceAll("_","-"),"-asset-groups-expandable"),element:"BUSINESS_ACCESS_TAP",elementId:0===e?"expanded":"contracted"})},items:[{title:z._('Asset groups', '[m10n]businessAccess.assets.groups.expandable.title', 'profiles expandable title'),children:(0,_.jsx)(h,{pageType:s,assetGroups:I.assetGroups,assetGroupsIsLoading:I.assetGroupsIsLoading,assetGroupsTableConfiguration:I.assetGroupsTableConfiguration,assetGroupsFetchData:I.assetGroupsFetchData,assetGroupsColumnDefs:I.assetGroupsColumnDefs,assetGroupsSearchTermSelector:I.assetGroupsSearchTermSelector,assetGroupsOnRowClick:I.assetGroupsOnRowClick})}]})})}),(0,_.jsx)(l.xu,{marginTop:4,children:(0,_.jsx)(r.Z,{id:"asset-groups-profiles-expandable",children:(0,_.jsx)(l.Yl.Expandable,{id:"profilesExpandable",accessibilityExpandLabel:z._('Show profiles', '[m10n]businessAccess.assets.profiles.expandable.expand', 'Accesibility label for expandable component to show profiles'),accessibilityCollapseLabel:z._('Hide profiles', '[m10n]businessAccess.assets.profiles.expandable.collapse', 'Accesibility label for expandable component to hide profiles'),expandedIndex:k,onExpandedChange:function(e){U(0===e?0:null),F(null),D(null),C&&!y&&0===e&&C({limit:f.T[0]}),B({eventName:"BUSINESS_ACCESS_ACTION",component:"BUSINESS_ACCESS_CONTAINER",componentId:"".concat(s.toLowerCase().replaceAll("_","-"),"-profiles-expandable"),element:"BUSINESS_ACCESS_TAP",elementId:0===e?"expanded":"contracted"})},items:[{title:z._('Profiles', '[m10n]businessAccess.assets.profiles.expandable.title', 'profiles expandable title'),children:(0,_.jsx)(S.Z,{pageType:s,profiles:A,profilesIsLoading:y,profilesTableConfiguration:g,profilesFetchData:C,profilesColumnDefs:P,profilesOnRowClick:w,profilesSearchTermSelector:v})}]})})})]})}},789042:function(e,s,t){"use strict";var a=t(658379),l=t(261783),n=t(867221),o=t(249444),r=t(43544),i=t(970588),c=t(870243),d=t(550140),u=t(536042),p=t(988014),_=t(245410),m=t(846226),h=t(63262),S=t(516405),f=t(389282);function b(e,s,t,a,l,n,o){try{var r=e[n](o),i=r.value}catch(c){return void t(c)}r.done?s(i):Promise.resolve(i).then(a,l)}function x(e,s){return function(e){if(Array.isArray(e))return e}(e)||function(e,s){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var a,l,n=[],o=!0,r=!1;try{for(t=t.call(e);!(o=(a=t.next()).done)&&(n.push(a.value),!s||n.length!==s);o=!0);}catch(i){r=!0,l=i}finally{try{o||null==t.return||t.return()}finally{if(r)throw l}}return n}(e,s)||function(e,s){if(!e)return;if("string"==typeof e)return A(e,s);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return A(e,s)}(e,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,s){(null==s||s>e.length)&&(s=e.length);for(var t=0,a=new Array(s);t<s;t++)a[t]=e[t];return a}var y=function(e){var s,t,a,l,n=e.title,r=e.subtitle,i=e.isMarked,d=e.isSelected,u=e.isHovered,p=e.user,_=d?"inverse":"default",m=d?"inverse":"subtle",h=(d?"inverse":u&&"secondary")||void 0;return"USER"===(null==p?void 0:p.entity_type)?(a=p.full_name,l=p.image_medium_url):"BUSINESS_HIERARCHY"===(null==p?void 0:p.entity_type)&&(a=p.name,l=p.img_medium_url),(0,f.jsx)(o.xu,{padding:2,rounding:2,color:h,children:(0,f.jsxs)(o.kC,{gap:2,alignItems:"center",alignContent:"center",children:[p&&(0,f.jsx)(c.qE,{name:null!==(s=a)&&void 0!==s?s:"",src:null!==(t=l)&&void 0!==t?t:"",size:"sm"}),(0,f.jsxs)(o.kC.Item,{flex:"grow",children:[(0,f.jsx)(o.xv,{color:_,weight:"bold",size:"200",lineClamp:1,children:n}),(0,f.jsx)(o.xv,{color:m,size:"100",lineClamp:1,children:r})]}),i&&(0,f.jsx)(o.xu,{rounding:"circle",color:"primary",width:8,height:8})]})})};s.Z=function(e){var s=e.controls,t=e.parent,c=e.items,A=e.logger,g=e.searchBy,C=e.searchPlaceholder,P=e.showAudienceFiltersSheet,w=e.showSharedAudiencesFilterButton,v=e.setSharedAudiencesFilter,E=e.filterTag,T=e.onItemClick,I=e.titlePerItem,z=e.subtitlePerItem,j=e.markPerItem,N=e.maxHeight,D=e.shouldScroll,L=(0,u.ZP)(),O=(0,l.useSelector)(S.mW),F=x((0,a.useState)(null),2),Z=F[0],k=F[1],U=x((0,a.useState)(""),2),B=U[0],R=U[1],G=x((0,a.useState)(null),2),H=G[0],W=G[1],Y=(0,(0,_.F)().checkExperiment)("web_m10n_business_hierarchy_beta").anyEnabled,M=(0,h.F9)().showToast,K=(0,n.useLocation)(),Q=function(e){k(e),null==T||T(e)},$=function(e){return function(){Q(e),A&&A({eventName:"BUSINESS_ACCESS_ACTION",component:"BUSINESS_ACCESS_CONTAINER",componentId:"business-side-panel",element:"BUSINESS_ACCESS_LINK",elementId:"business-side-panel-list-item",selected_business_id:e.id})}},q=function(e){return function(){W(e)}},V=function(){W(null)},J=function(){M((function(e){var s=e.hideToast;return(0,f.jsx)(d.ZP,{duration:3e3,onHide:s,text:L._('Export error! Please try again.', '[m10n]bizAccess.sidePanel.toast.export.error', 'Informs the user that there was an error when attempting to export hierarchy permissions, in a toast.')})}))};(0,a.useEffect)((function(){if(c&&c.length>0){var e=c.findIndex((function(e){return e.id===O}));if(O&&e>=0)Q(c[e]);else if(Z&&c.includes(Z))Q(Z);else if(Y&&t)Q(t);else{var s=x(c,1)[0];Q(s)}}}),[c,Z,t]);var X=c&&g&&B?c.filter((function(e){return g(B.toLowerCase(),e)})):c||[],ee=(null==t?void 0:t.id)===(null==Z?void 0:Z.id),se=(null==t?void 0:t.id)===(null==H?void 0:H.id),te=function(){var e,s=(e=regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t){e.next=4;break}return J(),e.abrupt("return");case 4:return e.next=6,(0,i.Z)({url:"/ads/v4/business_access/business_hierarchy/".concat(t.id,"/export/"),method:"GET",callOptions:{async:!0}});case 6:(s=e.sent).resource_response?(0,r.Z)(s.resource_response.data,"business_hierarchy"):J(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),J();case 13:case"end":return e.stop()}}),e,null,[[0,10]])})),function(){var s=this,t=arguments;return new Promise((function(a,l){var n=e.apply(s,t);function o(e){b(n,a,l,o,r,"next",e)}function r(e){b(n,a,l,o,r,"throw",e)}o(void 0)}))});return function(){return s.apply(this,arguments)}}(),ae={ALL_AUDIENCES:"",OWNED_BY_YOU:L._('Owner: Owned by you', '[m10n]bizAccess.sidePanel.filterTag.ownedBy', 'Label for badge indicate audience list was filter by Owned by the user'),SHARED_WITH_YOU:L._('Owner: Shared with me', '[m10n]bizAccess.sidePanel.filterTag.sharedWith', 'Label for badge indicate audience list was filter by Shared with the user')};return(0,f.jsxs)(o.kC,{dataTestId:"business-side-panel",direction:"column",gap:2,maxHeight:N,height:"100%",overflow:"hidden",children:[(0,f.jsxs)(o.xu,{children:[!!g&&(0,f.jsx)(o.Um,{id:"business-side-panel-search",placeholder:C,accessibilityLabel:L._('Search items', '[m10n]bizAccess.sidePanel.search.a11y', 'A11y label for search items component'),value:B,onChange:function(e){var s=e.value;R(s),A&&A({eventName:"BUSINESS_ACCESS_ACTION",component:"BUSINESS_ACCESS_FORM",componentId:"business-side-panel",element:"BUSINESS_ACCESS_FIELD",elementId:"business-side-panel-search",search_value:s})},onFocus:function(){A&&A({eventName:"BUSINESS_ACCESS_ACTION",component:"BUSINESS_ACCESS_FORM",componentId:"business-side-panel",element:"BUSINESS_ACCESS_FIELD",elementId:"business-side-panel-search"})}}),(0,f.jsx)(o.xu,{marginTop:2}),!!s&&(0,f.jsx)(m.Z,{id:"business-side-panel-controls",children:s})]}),w&&(0,f.jsxs)(o.kC,{direction:"column",gap:{row:0,column:3},children:[(0,f.jsx)(o.xu,{children:(0,f.jsx)(o.zx,{text:"Filters",size:"lg",color:"gray",fullWidth:!0,onClick:function(){return P&&P()},iconEnd:"filter"})}),E&&ae[E]&&(0,f.jsx)(o.xu,{children:(0,f.jsx)(o.Vp,{onRemove:function(){return v&&v("ALL_AUDIENCES")},text:ae[E]})})]}),Y&&(0,p.dK)(K)&&(0,f.jsx)(m.Z,{id:"business-side-panel-export",children:(0,f.jsx)(o.u,{text:L._('Export .csv file of all employees and partners', '[m10n]bizAccess.sidePanel.button.export.tooltip', 'Explanation of what the export button will do when clicked, when hovered over in a tooltip.'),children:(0,f.jsx)(o.zx,{onClick:function(){A&&A({eventName:"BUSINESS_ACCESS_ACTION",component:"BUSINESS_ACCESS_FORM",componentId:"business-side-panel",element:"BUSINESS_ACCESS_BUTTON",elementId:"business-side-panel-export"}),te()},fullWidth:!0,size:"md",text:L._('Export', '[m10n]bizAccess.sidePanel.button.export.label', 'Text to display on the button that will export business hierarchy permissions'),iconEnd:"download"})})}),(0,f.jsx)(o.kC.Item,{flex:"grow",children:(0,f.jsx)(o.xu,{overflow:D?"auto":"visible",height:"100%",children:(0,f.jsxs)(m.Z,{id:"business-side-panel-list",children:[t&&(0,f.jsx)(o.iP,{onTap:$(t),onMouseEnter:q(t),onMouseLeave:V,children:(0,f.jsx)(m.Z,{id:"business-side-panel-parent",children:(0,f.jsx)(y,{isHovered:se,isSelected:ee,title:t.name,user:t})})},t.id),(0,f.jsx)(o.xu,{marginStart:t?8:0,children:X&&X.map((function(e){var s=e.id===(null==Z?void 0:Z.id),t=e.id===(null==H?void 0:H.id);return(0,f.jsx)(o.iP,{onTap:$(e),onMouseEnter:q(e),onMouseLeave:V,children:(0,f.jsx)(m.Z,{id:"business-side-panel-list-item-".concat(e.id),children:(0,f.jsx)(y,{isSelected:s,isHovered:t,title:I(e),subtitle:z(e),isMarked:null==j?void 0:j(e),user:e.user})})},e.id)}))})]})})})]})}},505719:function(e,s,t){"use strict";t.d(s,{Z:function(){return x}});var a=t(658379),l=t(261783),n=t(249444),o=t(914062),r=t(629922),i=t(536042),c=t(245410),d=t(846226),u=t(375724),p=t(263612),_=t(865586),m=t(516405),h=t(262005),S=t(389282);function f(e,s){return function(e){if(Array.isArray(e))return e}(e)||function(e,s){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var a,l,n=[],o=!0,r=!1;try{for(t=t.call(e);!(o=(a=t.next()).done)&&(n.push(a.value),!s||n.length!==s);o=!0);}catch(i){r=!0,l=i}finally{try{o||null==t.return||t.return()}finally{if(r)throw l}}return n}(e,s)||function(e,s){if(!e)return;if("string"==typeof e)return b(e,s);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return b(e,s)}(e,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,s){(null==s||s>e.length)&&(s=e.length);for(var t=0,a=new Array(s);t<s;t++)a[t]=e[t];return a}function x(e){var s=e.pageType,t=e.closePanels,b=e.employees,x=e.employeesIsLoading,A=e.employeesTableConfiguration,y=e.employeesFetchData,g=e.employeesColumnDefs,C=e.employeesOnRowClick,P=e.partners,w=e.partnersIsLoading,v=e.partnersTableConfiguration,E=e.partnersFetchData,T=e.partnersColumnDefs,I=e.partnersOnRowClick,z=(0,i.ZP)(),j=f((0,a.useState)(null),2),N=j[0],D=j[1],L=f((0,a.useState)(null),2),O=L[0],F=L[1],Z=(0,c.F)().checkExperiment("web_m10n_business_access_asset_groups_ga").anyEnabled,k=(0,u.Z)().containsSharedAssetOrAOAA,U=k&&Z&&s===o.Q6.ASSET_GROUPS,B=s!==o.Q6.ASSET_GROUPS||Z&&!k,R=(0,r.ZP)((0,r.QK)(s));(0,a.useEffect)((function(){t&&(D(null),F(null))}),[t]);var G=(0,l.useSelector)(m.mW);(0,a.useEffect)((function(){U&&(null==E||E({limit:h.T[0]}))}),[G]);return(0,S.jsxs)(n.xu,{children:[U?(0,S.jsxs)(n.xu,{children:[(0,S.jsx)(n.J0,{message:z._('Assets within this group are associated with one or more partners. You may only add employees.', '[m10n].businessAccess.assetGroups.PeopleSection.membersOnly.callout', 'callout to show user that they can only add partners because assets within asset group are associated with a partner')}),(0,S.jsx)(n.xu,{marginTop:4,children:(0,S.jsx)(p.Z,{pageType:s,employeesTableConfiguration:A,employees:b,employeesIsLoading:x,employeesFetchData:y,employeesColumnDefs:g,employeesOnRowClick:C})})]}):(0,S.jsx)(d.Z,{id:"asset-groups-employees-expandable",children:(0,S.jsx)(n.Yl.Expandable,{id:"employeesExpandable",accessibilityExpandLabel:z._('Show employees', '[m10n]businessAccess.businessHierarchy.members.employees.expandable.expand', 'Accesibility label for expandable component to show employees'),accessibilityCollapseLabel:z._('Hide employees', '[m10n]businessAccess.businessHierarchy.members.employees.expandable.collapse', 'Accesibility label for expandable component to hide employees'),expandedIndex:N,onExpandedChange:function(e){F(null),D(0===e?0:null),y&&!x&&0===e&&y({limit:h.T[0]}),R({eventName:"BUSINESS_ACCESS_ACTION",component:"BUSINESS_ACCESS_CONTAINER",componentId:"".concat(s.toLowerCase().replaceAll("_","-"),"-people-expandable"),element:"BUSINESS_ACCESS_TAP",elementId:0===e?"expanded":"contracted"})},items:[{title:z._('Employees', '[m10n]businessAccess.businessHierarchy.members.employees.expandable.title', 'employees expandable title'),children:(0,S.jsx)(p.Z,{pageType:s,employeesTableConfiguration:A,employees:b,employeesIsLoading:x,employeesFetchData:y,employeesColumnDefs:g,employeesOnRowClick:C})}]})}),B&&(0,S.jsx)(n.xu,{marginTop:4,children:(0,S.jsx)(d.Z,{id:"asset-groups-partners-expandable",children:(0,S.jsx)(n.Yl.Expandable,{id:"partnersExpandable",accessibilityExpandLabel:z._('Show partners', '[m10n]businessAccess.businessHierarchy.members.partners.expandable.expand', 'Accesibility label for expandable component to show partners'),accessibilityCollapseLabel:z._('Hide partners', '[m10n]businessAccess.businessHierarchy.members.partners.expandable.collapse', 'Accesibility label for expandable component to hide partners'),expandedIndex:O,onExpandedChange:function(e){F(0===e?0:null),D(null),E&&!w&&0===e&&E({limit:h.T[0]}),R({eventName:"BUSINESS_ACCESS_ACTION",component:"BUSINESS_ACCESS_CONTAINER",componentId:"".concat(s.toLowerCase().replaceAll("_","-"),"-partners-expandable"),element:"BUSINESS_ACCESS_TAP",elementId:0===e?"expanded":"contracted"})},items:[{title:z._('Partners', '[m10n]businessAccess.businessHierarchy.members.partners.expandable.title', 'partners expandable title'),children:(0,S.jsx)(_.Z,{pageType:s,partnersTableConfiguration:v,partners:P,partnersIsLoading:w,partnersFetchData:E,partnersColumnDefs:T,partnersOnRowClick:I})}]})})})]})}},263612:function(e,s,t){"use strict";var a=t(249444),l=t(536042),n=t(245410),o=t(785356),r=t.n(o),i=t(788739),c=t(11739),d=t(389282);function u(){var e=(0,l.ZP)();return(0,d.jsx)(c.Z,{header:e._('Your employee list will appear here', '[m10n]EmployeesTable.emptyState.title', 'Header explaining where employees will go once added'),description:e._('You can manage employee permissions to your assets and tools', '[m10n]EmployeesTable.emptyState.description', 'Description explaining what you can do on this page'),image:(0,d.jsx)(a.Ee,{alt:e._('Example of employees', '[m10n]EmployeesTable.emptyState.image', 'Alternate text for image that shows an example of employees'),src:r(),naturalHeight:186,naturalWidth:305,color:"#FFF"})})}s.Z=function(e){var s=e.pageType,t=e.employees,a=e.employeesIsLoading,o=e.employeesFetchData,r=e.employeesColumnDefs,c=e.employeesTableConfiguration,p=e.employeesOnRowClick,_=e.emptyState,m=(0,l.ZP)(),h=(0,(0,n.F)().checkExperiment)("business_access_employees_api_v4_migration").anyEnabled;return(0,d.jsx)(i.Z,{pageType:s,searchPlaceholder:h?m._('Search employees', '[m10n]EmployeesTable.search.internal', 'Placeholder text to hint user to search for employees by name or email'):m._('Search employees', '[m10n]EmployeesTable.search.new', 'Accessibility text to hint user to search for employees by name'),columnDefs:r,emptyState:_||(0,d.jsx)(u,{}),data:t,isLoading:a,searchTermSelector:null==c?void 0:c.dataSearchTermSelector,pageSizeSelector:null==c?void 0:c.dataPageSizeSelector,totalCountSelector:null==c?void 0:c.dataTotalCountSelector,currentPageSelector:null==c?void 0:c.dataCurrentPageSelector,fetchData:null!=o?o:function(){},onRowClick:p})}},865586:function(e,s,t){"use strict";var a=t(249444),l=t(536042),n=t(785356),o=t.n(n),r=t(788739),i=t(11739),c=t(389282);function d(){var e=(0,l.ZP)();return(0,c.jsx)(i.Z,{header:e._('Your partners list will appear here', '[m10n]PartnerTable.emptyState.title', 'Header explaining where partners will go once added'),description:e._('Invite this partner to access your ad accounts and tools', '[m10n]PartnerTable.emptyState.emptyState.description', 'Header suggesting inviting businesses to access your ad accounts and tools'),image:(0,c.jsx)(a.Ee,{alt:e._('Key and lock icon representing requesting access', '[m10n]PartnerTable.emptyState.emptyState.image', 'Alternate text for icon that shows a key and lock'),src:o(),naturalHeight:186,naturalWidth:305,color:"#FFF"})})}s.Z=function(e){var s=e.pageType,t=e.partners,a=e.partnersIsLoading,n=e.partnersFetchData,o=e.partnersColumnDefs,i=e.partnersTableConfiguration,u=e.partnersOnRowClick,p=e.emptyState,_=(0,l.ZP)();return(0,c.jsx)(r.Z,{pageType:s,searchPlaceholder:_._('Search partners', '[m10n]PartnerTable.search', 'Placeholder text to hint user to search for employees by name, username, or business ID'),columnDefs:o,emptyState:p||(0,c.jsx)(d,{}),data:t,isLoading:a,fetchData:null!=n?n:function(){},searchTermSelector:null==i?void 0:i.dataSearchTermSelector,pageSizeSelector:null==i?void 0:i.dataPageSizeSelector,totalCountSelector:null==i?void 0:i.dataTotalCountSelector,currentPageSelector:null==i?void 0:i.dataCurrentPageSelector,onRowClick:u})}},674145:function(e,s,t){"use strict";var a=t(249444),l=t(536042),n=t(363378),o=t.n(n),r=t(788739),i=t(11739),c=t(389282);function d(){var e=(0,l.ZP)();return(0,c.jsx)(i.Z,{header:e._('Your profiles list will appear here', '[m10n]ProfilesTable.emptyState.title', 'Header explaining where profiles will go once added'),description:e._('You can manage permissions to your profiles', '[m10n]ProfilesTable.emptyState.description', 'Description explaining what you can do on profiles table'),image:(0,c.jsx)(a.Ee,{alt:e._('Example of profiles', '[m10n]ProfilesTable.emptyState.image', 'Alternate text for image that shows an example of profiles'),src:o(),naturalHeight:112,naturalWidth:418,color:"#FFF"})})}s.Z=function(e){var s=e.pageType,t=e.profiles,a=e.profilesIsLoading,n=e.profilesCurrentPageSelector,o=e.profilesTotalCountSelector,i=e.profilesPageSizeSelector,u=e.profilesSearchTermSelector,p=e.profilesFetchData,_=e.profilesColumnDefs,m=e.profilesTableConfiguration,h=e.profilesOnRowClick,S=e.emptyState,f=(0,l.ZP)();return(0,c.jsx)(r.Z,{pageType:s,searchPlaceholder:f._('Search profiles', '[m10n]ProfilesTable.search', 'Placeholder text to hint user to search for profiles by name or by business ID'),emptyState:S||(0,c.jsx)(d,{}),columnDefs:_,data:t,isLoading:a,searchTermSelector:u||(null==m?void 0:m.dataSearchTermSelector),fetchData:null!=p?p:function(){},currentPageSelector:n||(null==m?void 0:m.dataCurrentPageSelector),pageSizeSelector:i||(null==m?void 0:m.dataPageSizeSelector),totalCountSelector:o||(null==m?void 0:m.dataTotalCountSelector),onRowClick:h})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/68234-4c4d056a64395a48.js.map