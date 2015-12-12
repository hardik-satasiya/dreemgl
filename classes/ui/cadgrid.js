/* Copyright 2015 Teem2 LLC. Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.  
   You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 Unless required by applicable law or agreed to in writing, 
   software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, 
   either express or implied. See the License for the specific language governing permissions and limitations under the License.*/


define.class(function(view, label){
	// The CADGrid class provides a simple way to fill a frame with a classic engineering grid. 
	// todo:
	// - support zooming with incremental subdivision lines
	// - link up to 

	this.flex = 1;
	this.flexdirection = "column"
	this.alignitem = "stretch"
	this.alignself = "stretch"
	
	this.attributes = {
	
		minorsize:{type:float, value:25},
		minorline:{type:vec4, value: vec4("#e0f0ff"), meta:"color"},

		majorsize:{type:float, value:100},
		majorline:{type:vec4, value: vec4("#b0b0e0"), meta:"color"}
	}
	
	this.bgcolor = vec4("white")

	// CADGrid shader - uses various floored modulo functions to find out if either a major or minor gridline is being touched.
	this.bg = {
		position:function(){
			// do something here with view.scrollmatrix
			
			pos = vec2(mesh.x * view.layout.width, mesh.y * view.layout.height)
			
			majthres = 2.0/view.majorsize * view.zoom
			minthres = 2.0/view.minorsize * view.zoom
			uv = mesh.xy * view.zoom;
			uv += vec2(view.scroll.x/view.layout.width,view.scroll.y/view.layout.height);
			return vec4(pos, 0, 1) * view.totalmatrix * view.viewmatrix
			
		},
		grid: function(a){
			
			var horizmaj = mod(a.x ,view.majorsize)/view.majorsize;
			var vertmaj =  mod(a.y , view.majorsize)/view.majorsize;
			
			var horizmin = mod(a.x ,view.minorsize)/view.minorsize;
			var vertmin = mod(a.y ,view.minorsize)/view.minorsize;
			
			var major = min(horizmaj , vertmaj);
			var minor = min( horizmin , vertmin);
			
			if (major < majthres ) return view.majorline;
			if (minor < minthres ) return view.minorline;
			
			return view.bgcolor;
		},
		color:function(){
			return grid(vec2(uv.x * view.layout.width, uv.y * view.layout.height))
		}
	}

	var cadgrid = this.constructor
	
	// The CADGrid does not do anything to its children - plain passthrough
	this.render = function(){return this.constructor_children;}
	
	// Minimal usage example:
	this.constructor.examples = {
		Usage:function(){return cadgrid({width:200,height:200})}
	}
})