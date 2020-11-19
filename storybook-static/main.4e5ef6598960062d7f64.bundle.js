(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1184:function(module,exports,__webpack_require__){"use strict";var _clientApi=__webpack_require__(61),_clientLogger=__webpack_require__(39),_configFilename=__webpack_require__(1185);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),_configFilename.loaders&&_configFilename.loaders.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1185:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"parameters",(function(){return parameters}));var parameters={actions:{argTypesRegex:"^on[A-Z].*"}}},1186:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(403).configure)([__webpack_require__(1187),__webpack_require__(1188)],module,!1)}).call(this,__webpack_require__(112)(module))},1187:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=1187},1188:function(module,exports,__webpack_require__){var map={"./stories/Button.stories.tsx":1197,"./stories/Task.stories.tsx":1190,"./stories/Tasklist.stories.tsx":1196};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1188},1190:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"Pinned",(function(){return Pinned})),__webpack_require__.d(__webpack_exports__,"Archived",(function(){return Archived}));var _home_jami_project11_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(49),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(32),_Components_Task__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(0),__webpack_require__(165));__webpack_exports__.default={component:_Components_Task__WEBPACK_IMPORTED_MODULE_3__.a,title:"Task",args:{task:{id:"1",title:"New Task",state:"TASK_INBOX"},onArchiveTask:function onArchiveTask(){console.log("task archived")},onPinTask:function onPinTask(){console.log("task pinned")},onUnpinTask:function onUnpinTask(){console.log("task unpinned")}}};var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Components_Task__WEBPACK_IMPORTED_MODULE_3__.a,Object(_home_jami_project11_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},args))},Default=Template.bind({});Default.args={task:{id:"1",title:"Test Task",state:"TASK_INBOX"}};var Pinned=Template.bind({});Pinned.args={task:{id:"1",title:"Test Task",state:"TASK_PINNED"}};var Archived=Template.bind({});Archived.args={task:{id:"1",title:"Test archive",state:"TASK_ARCHIVED"}},Default.parameters=Object(_home_jami_project11_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"args => <Task {...args}/>"}},Default.parameters),Pinned.parameters=Object(_home_jami_project11_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"args => <Task {...args}/>"}},Pinned.parameters),Archived.parameters=Object(_home_jami_project11_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"args => <Task {...args}/>"}},Archived.parameters)},1196:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"withPinnedTask",(function(){return withPinnedTask})),__webpack_require__.d(__webpack_exports__,"WithArchivedTask",(function(){return WithArchivedTask})),__webpack_require__.d(__webpack_exports__,"withArchivednPinnnedTask",(function(){return withArchivednPinnnedTask})),__webpack_require__.d(__webpack_exports__,"Loading",(function(){return Loading})),__webpack_require__.d(__webpack_exports__,"Empty",(function(){return Empty}));var objectSpread2=__webpack_require__(49),jsx_runtime=__webpack_require__(32),toConsumableArray=(__webpack_require__(0),__webpack_require__(228)),Task=__webpack_require__(165),CheckCircle=__webpack_require__(523),CheckCircle_default=__webpack_require__.n(CheckCircle),CircularProgress=__webpack_require__(1216);function Tasklist(_ref){var loading=_ref.loading,tasks=_ref.tasks,events={onPinned:_ref.onPinned,onArchived:_ref.onArchived,onUnpinned:_ref.onUnpinned};if(loading)return Object(jsx_runtime.jsx)("div",{children:Object(jsx_runtime.jsx)(CircularProgress.a,{})});if(0===tasks.length)return Object(jsx_runtime.jsxs)("div",{className:"emptyListWrapper",children:[Object(jsx_runtime.jsx)(CheckCircle_default.a,{className:"tickIcon"}),Object(jsx_runtime.jsx)("div",{className:"emptyListText",children:"You have no tasks"})]});var tasksInOrder=[].concat(Object(toConsumableArray.a)(tasks.filter((function(t){return"TASK_PINNED"===t.state}))),Object(toConsumableArray.a)(tasks.filter((function(t){return"TASK_INBOX"===t.state}))),Object(toConsumableArray.a)(tasks.filter((function(t){return"TASK_ARCHIVED"===t.state}))));return Object(jsx_runtime.jsx)("div",{children:tasksInOrder.map((function(task){return Object(jsx_runtime.jsx)(Task.a,Object(objectSpread2.a)({task:task},events),task.id)}))})}Tasklist.defaultProps={tasks:[{id:"1",title:"Task 1",state:"TASK_INBOX"},{id:"2",title:"Task 2",state:"TASK_INBOX"},{id:"3",title:"Task 3",state:"TASK_INBOX"},{id:"4",title:"Task 4",state:"TASK_INBOX"},{id:"5",title:"Task 5",state:"TASK_INBOX"},{id:"6",title:"Task 6",state:"TASK_INBOX"}],loading:!1,onArchived:function onArchived(){console.log("task archived")},onPinned:function onPinned(){console.log("task Pinned")},onUnpinned:function onUnpinned(){console.log("task unpinned")}};try{Tasklist.displayName="Tasklist",Tasklist.__docgenInfo={description:"",displayName:"Tasklist",props:{loading:{defaultValue:{value:!1},description:"",name:"loading",required:!1,type:{name:"boolean"}},tasks:{defaultValue:{value:'[\n        { id: "1", title: "Task 1", state: "TASK_INBOX" },\n\n        { id: "2", title: "Task 2", state: "TASK_INBOX" },\n    \n        { id: "3", title: "Task 3", state: "TASK_INBOX" },\n    \n        { id: "4", title: "Task 4", state: "TASK_INBOX" },\n    \n        { id: "5", title: "Task 5", state: "TASK_INBOX" },\n    \n        { id: "6", title: "Task 6", state: "TASK_INBOX" },\n    ]'},description:"",name:"tasks",required:!1,type:{name:"task[]"}},onPinned:{defaultValue:{value:'() => {\n        console.log("task Pinned")\n    }'},description:"",name:"onPinned",required:!1,type:{name:"(id: string) => void"}},onArchived:{defaultValue:{value:'() => {\n        console.log("task archived")\n    }'},description:"",name:"onArchived",required:!1,type:{name:"(id: string) => void"}},onUnpinned:{defaultValue:{value:'() => {\n        console.log("task unpinned")\n    }'},description:"",name:"onUnpinned",required:!1,type:{name:"(id: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Components/Tasklist.tsx#Tasklist"]={docgenInfo:Tasklist.__docgenInfo,name:"Tasklist",path:"src/Components/Tasklist.tsx#Tasklist"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={component:Tasklist,title:"Tasklist"};var Tasklist_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(Tasklist,Object(objectSpread2.a)({},args))},Default=Tasklist_stories_Template.bind({});Default.args={tasks:[{id:"1",title:"Task 1",state:"TASK_INBOX"},{id:"2",title:"Task 2",state:"TASK_INBOX"},{id:"3",title:"Task 3",state:"TASK_INBOX"},{id:"4",title:"Task 4",state:"TASK_INBOX"},{id:"5",title:"Task 5",state:"TASK_INBOX"}]};var withPinnedTask=Tasklist_stories_Template.bind({});withPinnedTask.args={tasks:[{id:"1",title:"Task 1",state:"TASK_INBOX"},{id:"2",title:"Task 2",state:"TASK_INBOX"},{id:"3",title:"Task 3",state:"TASK_INBOX"},{id:"4",title:"Task 4",state:"TASK_INBOX"},{id:"5",title:"Task 5",state:"TASK_INBOX"},{id:"6",title:"Task 6 (pinned)",state:"TASK_PINNED"}]};var WithArchivedTask=Tasklist_stories_Template.bind({});WithArchivedTask.args={tasks:[{id:"1",title:"Task 1 (archived)",state:"TASK_ARCHIVED"},{id:"2",title:"Task 2",state:"TASK_INBOX"},{id:"3",title:"Task 3",state:"TASK_INBOX"},{id:"4",title:"Task 4",state:"TASK_INBOX"},{id:"5",title:"Task 5",state:"TASK_INBOX"},{id:"6",title:"Task 6",state:"TASK_INBOX"}]};var withArchivednPinnnedTask=Tasklist_stories_Template.bind({});withArchivednPinnnedTask.args={tasks:[{id:"1",title:"Task 1",state:"TASK_INBOX"},{id:"2",title:"Task 2",state:"TASK_INBOX"},{id:"3",title:"Task 3",state:"TASK_INBOX"},{id:"4",title:"Task 4 (archived)",state:"TASK_ARCHIVED"},{id:"5",title:"Task 5 (pinned)",state:"TASK_PINNED"},{id:"6",title:"Task 6",state:"TASK_INBOX"}]};var Loading=Tasklist_stories_Template.bind({});Loading.args={loading:!0};var Empty=Tasklist_stories_Template.bind({});Empty.args={loading:!1,tasks:[]},Default.parameters=Object(objectSpread2.a)({storySource:{source:"args => <Tasklist{...args} />"}},Default.parameters),withPinnedTask.parameters=Object(objectSpread2.a)({storySource:{source:"args => <Tasklist{...args} />"}},withPinnedTask.parameters),WithArchivedTask.parameters=Object(objectSpread2.a)({storySource:{source:"args => <Tasklist{...args} />"}},WithArchivedTask.parameters),withArchivednPinnnedTask.parameters=Object(objectSpread2.a)({storySource:{source:"args => <Tasklist{...args} />"}},withArchivednPinnnedTask.parameters),Loading.parameters=Object(objectSpread2.a)({storySource:{source:"args => <Tasklist{...args} />"}},Loading.parameters),Empty.parameters=Object(objectSpread2.a)({storySource:{source:"args => <Tasklist{...args} />"}},Empty.parameters)},1197:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"BtnLg",(function(){return Button_stories_BtnLg})),__webpack_require__.d(__webpack_exports__,"BtnMd",(function(){return Button_stories_BtnMd})),__webpack_require__.d(__webpack_exports__,"BtnSm",(function(){return Button_stories_BtnSm}));var objectSpread2=__webpack_require__(49),jsx_runtime=__webpack_require__(32),Button_Button=(__webpack_require__(0),function Button(_ref){var value=_ref.value,style=_ref.style,onClick=_ref.onClick,className=_ref.className;return Object(jsx_runtime.jsx)("button",{style:style,onClick:onClick,className:className,children:value})});Button_Button.defaultProps={onClick:function onClick(){alert("clicked")},value:"check"};try{Button_Button.displayName="Button",Button_Button.__docgenInfo={description:"",displayName:"Button",props:{value:{defaultValue:{value:"check"},description:"",name:"value",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!0,type:{name:"any"}},onClick:{defaultValue:{value:"()=>{\n        alert('clicked')\n    }"},description:"",name:"onClick",required:!1,type:{name:"() => void"}},className:{defaultValue:null,description:"",name:"className",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Components/Button.tsx#Button"]={docgenInfo:Button_Button.__docgenInfo,name:"Button",path:"src/Components/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__(513),__webpack_exports__.default={component:Button_Button,title:"Button",argsTypes:{backgroundColor:{control:"color"}}};var Button_stories_BtnLg=function BtnLg(){return Object(jsx_runtime.jsx)(Button_Button,{value:"Large",style:{width:"250px",backgroundColor:"blue"},onClick:function onClick(){return alert("clicked")},className:"btn"})},Button_stories_BtnMd=function BtnMd(){return Object(jsx_runtime.jsx)(Button_Button,{value:"Medium",style:{width:"150px",backgroundColor:"red"},onClick:function onClick(){return alert("clicked")},className:"btn"})},Button_stories_BtnSm=function BtnSm(){return Object(jsx_runtime.jsx)(Button_Button,{value:"Small",style:{width:"75px",backgroundColor:"grey"},onClick:function onClick(){return alert("clicked")},className:"btn"})};Button_stories_BtnLg.parameters=Object(objectSpread2.a)({storySource:{source:'() => (\n  <Button value={"Large"} style={{width:"250px",backgroundColor:"blue",}}\n  onClick={()=>alert(\'clicked\')}\n  className="btn"\n  />\n  \n )'}},Button_stories_BtnLg.parameters),Button_stories_BtnMd.parameters=Object(objectSpread2.a)({storySource:{source:'() => (\n  <Button value={"Medium"} style={{width:"150px",backgroundColor:"red",}}\n  onClick={()=>alert(\'clicked\')}\n  className="btn"\n  />\n  \n )'}},Button_stories_BtnMd.parameters),Button_stories_BtnSm.parameters=Object(objectSpread2.a)({storySource:{source:'() => (\n  <Button value={"Small"} style={{width:"75px",backgroundColor:"grey",}}\n  onClick={()=>alert(\'clicked\')}\n  className="btn"\n  /> \n )'}},Button_stories_BtnSm.parameters)},165:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Task}));var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(32),_material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(0),__webpack_require__(522)),_material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_2__);__webpack_require__(513);function Task(props){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"list-item".concat(props.task.state),children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"checkbox_Text",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{type:"checkbox",defaultChecked:"TASK_ARCHIVED"===props.task.state,disabled:"TASK_ARCHIVED"===props.task.state,name:"checked",onClick:function onClick(){return props.onArchived(props.task.id)}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{className:"TASK_ARCHIVED"===props.task.state?"archived":void 0,children:[" ",props.task.title?props.task.title:"No Title added"," "]})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{onClick:function onClick(e){return e.stopPropagation()},children:"TASK_ARCHIVED"!==props.task.state&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_2___default.a,{className:"TASK_PINNED"!==props.task.state?"starUnpinned":"starPinned",onClick:function onClick(){!function handleChange(task){"TASK_PINNED"===task.state?props.onUnpinned(task.id):props.onPinned(task.id)}(props.task)}})})]})}try{Task.displayName="Task",Task.__docgenInfo={description:"",displayName:"Task",props:{task:{defaultValue:null,description:"",name:"task",required:!0,type:{name:"task"}},onArchived:{defaultValue:null,description:"",name:"onArchived",required:!0,type:{name:"(id: string) => void"}},onPinned:{defaultValue:null,description:"",name:"onPinned",required:!0,type:{name:"(id: string) => void"}},onUnpinned:{defaultValue:null,description:"",name:"onUnpinned",required:!0,type:{name:"(id: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Components/Task.tsx#Task"]={docgenInfo:Task.__docgenInfo,name:"Task",path:"src/Components/Task.tsx#Task"})}catch(__react_docgen_typescript_loader_error){}},513:function(module,exports,__webpack_require__){},527:function(module,exports,__webpack_require__){__webpack_require__(528),__webpack_require__(750),__webpack_require__(751),__webpack_require__(907),__webpack_require__(1126),__webpack_require__(1158),__webpack_require__(1163),__webpack_require__(1175),__webpack_require__(1177),__webpack_require__(1182),__webpack_require__(1184),module.exports=__webpack_require__(1186)},596:function(module,exports){},751:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(403)}},[[527,1,2]]]);
//# sourceMappingURL=main.4e5ef6598960062d7f64.bundle.js.map