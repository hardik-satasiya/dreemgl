Ext.data.JsonP.livesource({"tagname":"class","name":"livesource","autodetected":{},"files":[{"filename":"livesource.js","href":"livesource.html#livesource"}],"extends":"dataset","members":[{"name":"addListener","tagname":"method","owner":"node","id":"method-addListener","meta":{}},{"name":"atAttributeAssign","tagname":"method","owner":"dataset","id":"method-atAttributeAssign","meta":{}},{"name":"definePersist","tagname":"method","owner":"node","id":"method-definePersist","meta":{}},{"name":"emit","tagname":"method","owner":"node","id":"method-emit","meta":{}},{"name":"emitForward","tagname":"method","owner":"node","id":"method-emitForward","meta":{}},{"name":"emitRecursive","tagname":"method","owner":"node","id":"method-emitRecursive","meta":{}},{"name":"find","tagname":"method","owner":"node","id":"method-find","meta":{}},{"name":"fork","tagname":"method","owner":"dataset","id":"method-fork","meta":{}},{"name":"getAttributeConfig","tagname":"method","owner":"node","id":"method-getAttributeConfig","meta":{}},{"name":"hasListenerProp","tagname":"method","owner":"node","id":"method-hasListenerProp","meta":{}},{"name":"hasListeners","tagname":"method","owner":"node","id":"method-hasListeners","meta":{}},{"name":"hasWires","tagname":"method","owner":"node","id":"method-hasWires","meta":{}},{"name":"hideProperty","tagname":"method","owner":"node","id":"method-hideProperty","meta":{}},{"name":"isAttribute","tagname":"method","owner":"node","id":"method-isAttribute","meta":{}},{"name":"notifyAssignedAttributes","tagname":"method","owner":"dataset","id":"method-notifyAssignedAttributes","meta":{}},{"name":"parse","tagname":"method","owner":"livesource","id":"method-parse","meta":{}},{"name":"redo","tagname":"method","owner":"dataset","id":"method-redo","meta":{}},{"name":"removeAllListeners","tagname":"method","owner":"node","id":"method-removeAllListeners","meta":{}},{"name":"removeListener","tagname":"method","owner":"node","id":"method-removeListener","meta":{}},{"name":"setWiredAttribute","tagname":"method","owner":"node","id":"method-setWiredAttribute","meta":{}},{"name":"silent","tagname":"method","owner":"dataset","id":"method-silent","meta":{}},{"name":"stringify","tagname":"method","owner":"livesource","id":"method-stringify","meta":{}},{"name":"undo","tagname":"method","owner":"dataset","id":"method-undo","meta":{}},{"name":"destroy","tagname":"event","owner":"node","id":"event-destroy","meta":{}},{"name":"init","tagname":"event","owner":"node","id":"event-init","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-livesource","component":false,"superclasses":["node","dataset"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/node' rel='node' class='docClass'>node</a><div class='subclass '><a href='#!/api/dataset' rel='dataset' class='docClass'>dataset</a><div class='subclass '><strong>livesource</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/livesource.html#livesource' target='_blank'>livesource.js</a></div></pre><div class='doc-contents'><p>Sourceset is a dataset-api on source</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addListener' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/node' rel='node' class='defined-in docClass'>node</a><br/><a href='source/node.html#node-method-addListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/node-method-addListener' class='name expandable'>addListener</a>( <span class='pre'>key, cb</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>add a listener to an attribute ...</div><div class='long'><p>add a listener to an attribute</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>cb</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-atAttributeAssign' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dataset' rel='dataset' class='defined-in docClass'>dataset</a><br/><a href='source/dataset.html#dataset-method-atAttributeAssign' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dataset-method-atAttributeAssign' class='name expandable'>atAttributeAssign</a>( <span class='pre'>obj, key</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Handles the binding of this dataset to the attribute of something else. ...</div><div class='long'><p>Handles the binding of this dataset to the attribute of something else.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>obj</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>key</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-definePersist' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/node' rel='node' class='defined-in docClass'>node</a><br/><a href='source/node.html#node-method-definePersist' target='_blank' class='view-source'>view source</a></div><a href='#!/api/node-method-definePersist' class='name expandable'>definePersist</a>( <span class='pre'>arg</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>mark an attribute as persistent accross live reload / renders ...</div><div class='long'><p>mark an attribute as persistent accross live reload / renders</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>arg</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-emit' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/node' rel='node' class='defined-in docClass'>node</a><br/><a href='source/node.html#node-method-emit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/node-method-emit' class='name expandable'>emit</a>( <span class='pre'>key, event</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>emit an event for an attribute key. ...</div><div class='long'><p>emit an event for an attribute key. the order</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>event</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-emitForward' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/node' rel='node' class='defined-in docClass'>node</a><br/><a href='source/node.html#node-method-emitForward' target='_blank' class='view-source'>view source</a></div><a href='#!/api/node-method-emitForward' class='name expandable'>emitForward</a>( <span class='pre'>key</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>return a function that can be assigned as a listener to any value, and then re-emit on this as attribute key ...</div><div class='long'><p>return a function that can be assigned as a listener to any value, and then re-emit on this as attribute key</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-emitRecursive' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/node' rel='node' class='defined-in docClass'>node</a><br/><a href='source/node.html#node-method-emitRecursive' target='_blank' class='view-source'>view source</a></div><a href='#!/api/node-method-emitRecursive' class='name expandable'>emitRecursive</a>( <span class='pre'>key, event, block</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>emits an event recursively on all children ...</div><div class='long'><p>emits an event recursively on all children</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>event</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>block</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-find' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/node' rel='node' class='defined-in docClass'>node</a><br/><a href='source/node.html#node-method-find' target='_blank' class='view-source'>view source</a></div><a href='#!/api/node-method-find' class='name expandable'>find</a>( <span class='pre'>name, ignore</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>find node by name, they look up the .name property or the name of the constructor (class name) by default ...</div><div class='long'><p>find node by name, they look up the .name property or the name of the constructor (class name) by default</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>ignore</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-fork' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dataset' rel='dataset' class='defined-in docClass'>dataset</a><br/><a href='source/dataset.html#dataset-method-fork' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dataset-method-fork' class='name expandable'>fork</a>( <span class='pre'>callback</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fork starts a new modification on a dataset; ...</div><div class='long'><p>Fork starts a new modification on a dataset;</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>callback</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getAttributeConfig' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/node' rel='node' class='defined-in docClass'>node</a><br/><a href='source/node.html#node-method-getAttributeConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/node-method-getAttributeConfig' class='name expandable'>getAttributeConfig</a>( <span class='pre'>key</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>returns the attribute config object (the one passed into this.attributes={attr:{config}} ...</div><div class='long'><p>returns the attribute config object (the one passed into this.attributes={attr:{config}}</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-hasListenerProp' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/node' rel='node' class='defined-in docClass'>node</a><br/><a href='source/node.html#node-method-hasListenerProp' target='_blank' class='view-source'>view source</a></div><a href='#!/api/node-method-hasListenerProp' class='name expandable'>hasListenerProp</a>( <span class='pre'>key, prop, value</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>check if an attribute has a listener with a .name property set to fnname ...</div><div class='long'><p>check if an attribute has a listener with a .name property set to fnname</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>prop</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>value</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-hasListeners' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/node' rel='node' class='defined-in docClass'>node</a><br/><a href='source/node.html#node-method-hasListeners' target='_blank' class='view-source'>view source</a></div><a href='#!/api/node-method-hasListeners' class='name expandable'>hasListeners</a>( <span class='pre'>key</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>returns true if attribute has any listeners ...</div><div class='long'><p>returns true if attribute has any listeners</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-hasWires' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/node' rel='node' class='defined-in docClass'>node</a><br/><a href='source/node.html#node-method-hasWires' target='_blank' class='view-source'>view source</a></div><a href='#!/api/node-method-hasWires' class='name expandable'>hasWires</a>( <span class='pre'>key</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>check if an attribute has wires connected ...</div><div class='long'><p>check if an attribute has wires connected</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-hideProperty' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/node' rel='node' class='defined-in docClass'>node</a><br/><a href='source/node.html#node-method-hideProperty' target='_blank' class='view-source'>view source</a></div><a href='#!/api/node-method-hideProperty' class='name expandable'>hideProperty</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>hide a property, pass in any set of strings ...</div><div class='long'><p>hide a property, pass in any set of strings</p>\n</div></div></div><div id='method-isAttribute' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/node' rel='node' class='defined-in docClass'>node</a><br/><a href='source/node.html#node-method-isAttribute' target='_blank' class='view-source'>view source</a></div><a href='#!/api/node-method-isAttribute' class='name expandable'>isAttribute</a>( <span class='pre'>key</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>check if property is an attribute ...</div><div class='long'><p>check if property is an attribute</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-notifyAssignedAttributes' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dataset' rel='dataset' class='defined-in docClass'>dataset</a><br/><a href='source/dataset.html#dataset-method-notifyAssignedAttributes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dataset-method-notifyAssignedAttributes' class='name expandable'>notifyAssignedAttributes</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Cause objects that have us assigned to reload ...</div><div class='long'><p>Cause objects that have us assigned to reload</p>\n</div></div></div><div id='method-parse' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='livesource'>livesource</span><br/><a href='source/livesource.html#livesource-method-parse' target='_blank' class='view-source'>view source</a></div><a href='#!/api/livesource-method-parse' class='name expandable'>parse</a>( <span class='pre'>classconstr</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>convert a string in to a meaningful javascript object for this dataset. ...</div><div class='long'><p>convert a string in to a meaningful javascript object for this dataset. The default is JSON, but you could use this function to accept any format of choice.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>classconstr</span> : Object<div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/dataset-method-parse\" rel=\"dataset-method-parse\" class=\"docClass\">dataset.parse</a></p></div></div></div><div id='method-redo' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dataset' rel='dataset' class='defined-in docClass'>dataset</a><br/><a href='source/dataset.html#dataset-method-redo' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dataset-method-redo' class='name expandable'>redo</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Go back to the previous state. ...</div><div class='long'><p>Go back to the previous state. All classes that have this dataset bound will get their assignment updated</p>\n</div></div></div><div id='method-removeAllListeners' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/node' rel='node' class='defined-in docClass'>node</a><br/><a href='source/node.html#node-method-removeAllListeners' target='_blank' class='view-source'>view source</a></div><a href='#!/api/node-method-removeAllListeners' class='name expandable'>removeAllListeners</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>remove all listeners from a node ...</div><div class='long'><p>remove all listeners from a node</p>\n</div></div></div><div id='method-removeListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/node' rel='node' class='defined-in docClass'>node</a><br/><a href='source/node.html#node-method-removeListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/node-method-removeListener' class='name expandable'>removeListener</a>( <span class='pre'>key, cb</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>remove a listener from an attribute, uses the actual function reference to find it\nif you dont pass in a function ref...</div><div class='long'><p>remove a listener from an attribute, uses the actual function reference to find it\nif you dont pass in a function reference it removes all listeners</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>cb</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setWiredAttribute' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/node' rel='node' class='defined-in docClass'>node</a><br/><a href='source/node.html#node-method-setWiredAttribute' target='_blank' class='view-source'>view source</a></div><a href='#!/api/node-method-setWiredAttribute' class='name expandable'>setWiredAttribute</a>( <span class='pre'>key, value</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>set the wired function for an attribute ...</div><div class='long'><p>set the wired function for an attribute</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>value</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-silent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dataset' rel='dataset' class='defined-in docClass'>dataset</a><br/><a href='source/dataset.html#dataset-method-silent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dataset-method-silent' class='name expandable'>silent</a>( <span class='pre'>callback</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Silent operates much the same as fork, but does not notify listeners bound to this dataset. ...</div><div class='long'><p>Silent operates much the same as <code>fork</code>, but does not notify listeners bound to this dataset. This can be used in case you are CERTAIN that this object is the only object in your application that listens to your changed property, but you still need to save the state to the undo stack\n'callback' the function that will be called with a modifyable javascript object. DO NOT under any circumstances directly modify this data property!</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>callback</span> : Object<div class='sub-desc'><p>function</p>\n</div></li></ul></div></div></div><div id='method-stringify' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='livesource'>livesource</span><br/><a href='source/livesource.html#livesource-method-stringify' target='_blank' class='view-source'>view source</a></div><a href='#!/api/livesource-method-stringify' class='name expandable'>stringify</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>convert an object in to a string. ...</div><div class='long'><p>convert an object in to a string. Defaults to standard JSON, but you could overload this function to provide a more efficient fileformat. Do not forget to convert the JSONParse function as well.</p>\n<p>Overrides: <a href=\"#!/api/dataset-method-stringify\" rel=\"dataset-method-stringify\" class=\"docClass\">dataset.stringify</a></p></div></div></div><div id='method-undo' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dataset' rel='dataset' class='defined-in docClass'>dataset</a><br/><a href='source/dataset.html#dataset-method-undo' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dataset-method-undo' class='name expandable'>undo</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Go back to the previous state. ...</div><div class='long'><p>Go back to the previous state. All classes that have this dataset bound will get their assignment updated</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-destroy' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/node' rel='node' class='defined-in docClass'>node</a><br/><a href='source/node.html#node-event-destroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/node-event-destroy' class='name expandable'>destroy</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>always define an init and deinit ...</div><div class='long'><p>always define an init and deinit</p>\n</div></div></div><div id='event-init' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/node' rel='node' class='defined-in docClass'>node</a><br/><a href='source/node.html#node-event-init' target='_blank' class='view-source'>view source</a></div><a href='#!/api/node-event-init' class='name expandable'>init</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>always define an init and deinit ...</div><div class='long'><p>always define an init and deinit</p>\n</div></div></div></div></div></div></div>","meta":{}});