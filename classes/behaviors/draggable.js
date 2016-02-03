/* Copyright 2015-2016 Teeming Society. Licensed under the Apache License, Version 2.0 (the "License"); DreemGL is a collaboration between Teeming Society & Samsung Electronics, sponsored by Samsung and others.
 You may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 either express or implied. See the License for the specific language governing permissions and limitations under the License.*/

define.class(function(){
	this.pointerstart = function(event){
		this._dragstart = vec2(this.pos[0], this.pos[1])
	}
	this.pointermove = function(event){
		this.pos = vec2(this._dragstart[0] + event.value.delta[0], this._dragstart[1] + event.value.delta[1])
	}
})
