define.class('$server/composition', function (require,  $server$, fileio,$ui$, numberbox,view, label, screen, speakergrid, splitcontainer,noisegrid,button, $$, map, urlfetch, acceleroremote,$3d$, ballrotate){
	
	this.places= [
	{text:"Amsterdam", place: "amsterdam", zoomlevel: 16},
	{text:"Amsterdam-17", place: "amsterdam", zoomlevel: 17},
	{text:"Amsterdam-10", place: "amsterdam", zoomlevel: 10},
	{text:"Seoul", place: "seoul", zoomlevel: 16},
	{text:"SF", place: "sanfrancisco", zoomlevel: 16},
	{text:"SF-10", place: "sanfrancisco", zoomlevel: 10},
	{text:"NY - Manhattan", place: "manhattan", zoomlevel: 16},
	{text:"SF - Golden Gate Park", place: "sanfrancisco_goldengatepark", zoomlevel: 17},
	]
	this.render = function(){
		
		var Buttons = [];
		for(var i = 0;i<this.places.length;i++){
			var p = this.places[i];
			Buttons.push(button({place:p.place, zoomlevel:p.zoomlevel, text:p.text,click:function(){this.find("themap").gotoCity(this.place,this.zoomlevel);}, margin:4}))
								
		}
		return [
			urlfetch({name:"urlfetch"}),
			screen({name:"index"
				,style:{$:{fontsize:12}}
			
					,acceleromove: function(x,y,z){console.log("moving:" , x,y,z);}
					,acceleropan: function(x,y,z){console.log("panning:", x,y,z);}
				}
				,view({flex: 1, bgcolor: "#5b5b5b"}
					,splitcontainer({bgcolor: "green"}					
						,view({bg:0, flex:0.2, overflow:"scroll" },	
							noisegrid({padding:20}
								,label({text:"Dreem Mapping",margin: 10,bold:true,fontsize:20, bg:0})
								,numberbox({value:16, onvalue:function(){}.bind(this), name:"numberbox", minvalue:0, stepvalue:1, maxvalue:18})
								,Buttons
								,noisegrid({bordercolor: "gray", flex:undefined, borderradius:10, margin:20,borderwidth:2, bgcolor:"black",  flexdirection:"column" , padding:5 }
								,label({text:"Rotation control",margin: 10,fontsize:12,  bg:0})
								,ballrotate({name:"ballrotate1", height:100, target:"mapinside"})
								)
							)
						)

						,view({bg:0, flex:0.8}, 
							noisegrid({ padding: 0, flex:1}
								,map({
										name: "themap"
								})
				
							)
						)
					)
				)
			)
			,screen({name:"acceleroremote"},acceleroremote({target:"index"}))
			
		];
	}
})