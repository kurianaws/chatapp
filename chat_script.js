var app= new Vue({
				el:"#chat",
				created: function(){
					self=this
					var date=Date.now();
					var dateUpper=date/100000;
					var dateLower=date%100000;
					this.username=(Math.floor(dateLower*Math.random()%dateUpper));
					//this.ws= new WebSocket('ws://localhost:5000/ws');
					this.ws= new WebSocket('wss://search-api-2020.herokuapp.com/ws');
					this.ws.addEventListener('message',function(e){
					data=JSON.parse(e.data);
						self.chatContent.push(data);
					});
				},
				data:{
				ws:null,
				newMsg:'',
				chatContent:[],
				email:null,
				username:null,
				joined:false
				},
				methods:{
					"send": function(){
						if (this.newMsg!=''){
							this.ws.send(JSON.stringify({username: this.username,message: this.newMsg, email:'test@mail.com'}));
						}	
						this.newMsg='';
					}
				}
});
