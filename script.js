



(function () {
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for(var i=0; i < names.length; i++){
var first= names[i].charAt(0).toLowerCase();
if(first==='j'){
	byespeaker.gb(names[i]);
} else{
	hlospeaker.hlo(names[i]);
} 

};


})();