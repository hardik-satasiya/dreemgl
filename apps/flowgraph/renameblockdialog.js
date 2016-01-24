/* Copyright 2015-2016 Teem. Licensed under the Apache License, Version 2.0 (the "License"); Dreem is a collaboration between Teem & Samsung Electronics, sponsored by Samsung. 
   You may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 
   Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
   either express or implied. See the License for the specific language governing permissions and limitations under the License.*/

define.class('$ui/view', function(require, $$, dialog, $ui$, textbox,view, icon, treeview, cadgrid, label, button, $$, ballbutton){
	this.bg = 0;
	this.attributes = {
		oldname:""	
	}
	this. flexdirection = "column";
	this.justifycontent = "flex-start";
	this.alignitems = "flex-start";
	this.render =function(){
		return [
			view({bg:0}, view({ 
					flexdirection:"column", 
					padding:20,
					bgcolor: vec4("#505050"),
					borderradius:20,
					dropshadowopacity:0.4,
					dropshadowhardness:0,
					dropshadowradius:20,
					dropshadowoffset:vec2(9,9)

				},
				view({margin:10, flexdirection:"row",bg:false}, 
					label({text:"old name:",bg:false}),
					textbox({value:this.oldname, enabled: false, marginleft: 20, bgcolor:"#202020", multiline:false})
				), 
				view({margin:10, flexdirection:"row",bg:false}, 
					label({text:"new name:",bg:false}),
					textbox({value:this.oldname, name:"newnamebox", marginleft: 20, bgcolor:"#202020", multiline:false})
				),
				view({flexdirection:"row",bg:false, alignitems: "flex-end", justifycontent:"flex-end", alignself:"flex-end"   }, 
					button({padding:10, text:"OK", icon:"check", click: function(){this.screen.closeModal(this.find("newnamebox").value);} }),
					button({padding: 10, marginleft:10, icon:"close", text:"Cancel", click: function(){this.screen.closeModal(false);} })
 				)
			)
			)
		]
	}
})