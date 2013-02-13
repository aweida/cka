

$(document).ready(function () {
	var horProj = 4;
	var hor = 225 + 16;
	var vert = 125 + 16;
	var allProjects = ''; //print values
	//start slideshow
	//setSlideShow();
	//set each span to its corrisponding values base on the JSON object
	$.each(projects, function(i, project){
		$(project.div).append(
		'<span class="sT">' 
		//+ project.id  + "</br>" 
		+ project.name + "</br>" 
		+ '<' + project.year + '>' + "</br>" 
		+ project.type + "</br>" 
		+ project.city + "</br>" 
		+'</span>');
	});
	//control mouseenter event					
	var $container = $('.container'),
		$items = $('.item'),
		timeout;	
	//set and remove active/blur class based on event
	$items.on('mouseenter', function(event) {			
		var $item = $(this);
		clearTimeout(timeout);
		timeout = setTimeout(function() {
			if($item.hasClass('active')) {
				return false;
			}
		$items.not($item).removeClass('active').addClass('blur');
		$item.removeClass('blur').addClass('active');
		}, 75);
	});
	//remove blur on mouse leave	
	$items.on('mouseleave', function(event) {
		clearTimeout(timeout);
		$items.removeClass('active blur');
	});
	//add a click function to each nav item, call corisponding sorting function based on action
	$('.nav td').click(function(){
		switch ($(this).children('a').data('name')) {
			case 'city':
				sortByCity();
				break;
			case 'year':
				sortByYear();
				break;
			case 'type':
				sortByType();
				break;
			case 'name':
				sortByName();
				break;
			case 'random':
				sortRandom();
				break;
		}	
	});
	// choose a sorting function at random 
	/*
	function sortRandom(){
		var randomNumber=Math.floor(Math.random()*4);
		console.log(randomNumber);
		switch (randomNumber) {
			case 0:
				sortByCity();
				break;
			case 1:
				sortByYear();
				break;
			case 2:
				sortByType();
				break;
			case 3:
				sortByName();
				break;
		}
	}	
	*/
	//create loading animation with timeout, default to sort city	
	setTimeout(function(){
		sortByYear();
	}, 1000);
	
	//sortByYear function
	function sortByYear(){
		projects.sort(sort_by('year', true, parseInt));
		//store loactions   
		var locations = [];  
		var leftValues = []; //store values
		var topValues = [];
		var location; //value of alphabet
		var topValue = 0;
		var leftValue = 0; //incrament if different
		leftValues.push(leftValue);  
		topValues.push(topValue); 	
		var flip = false;
		var flip2 = false;
		//get the loaction in the alphabet of each project names first value
		//need to check each key in the array
	    $.each(projects, function(i, project){    
	    	locations.push(project.year);    	
	    	var current = locations[i];	    	    		   
	    	if (((leftValue % horProj) == 0) && leftValue != 0){
		    	leftValue = 0;
		    	topValue ++;
	    	}    	
	    	leftValues[i] = leftValue;
	    	topValues[i] = topValue;
	    	leftValue++; 
		    
	    });	
	    //function to reduce the amount of rows    
	    console.log(locations);
	    console.log(leftValues);
	    console.log(topValues);
	    //animation functions  	    
	    //MAKE EVEN THEN DIVIDE BY 2	    	
	    animateDiv();      	  	
	    function animateDiv(){
	    	$.each(projects, function(i, project) {
	    		topValues[i] = topValues[i] * (vert);
	    		leftValues[i] = leftValues[i] * (hor);
				$(project.div).css({top: topValues[i], left: leftValues[i], position: 'absolute'});
	    	});
		}		
		var wrapper = $('.sortText');
		wrapper.html('');
		wrapper.append($('<span></span>').html(allProjects).css({position: 'absolute', left:0}).fadeIn(1500));			
	}
	//sortByCity function
	function sortByCity(){				
		projects.sort(sort_by('city', false, function(a){return a.toUpperCase()}));
		//store loactions   
		var locations = [];  
		var leftValues = []; //store values
		var topValues = [];
		var location; //value of alphabet
		var topValue = 0;
		var leftValue = 0; //incrament if different
		var duplicates = 0; //keep track of duplicate values
		leftValues.push(leftValue);  
		topValues.push(topValue); 	
		var flip = false;
		var flip2 = false;
		//get the loaction in the alphabet of each project names first value
		//need to check each key in the array
	    $.each(projects, function(i, project){
	    	location = getPos((project.city.charAt(0)).toLowerCase(), false); //half the colums with 
	    	locations.push(location);
	    	var current = locations[i];	    	    	
	    	if (((leftValue % horProj) == 0) && leftValue != 0){
		    	leftValue = 0;
		    	topValue ++;
	    	}    	
	    	leftValues[i] = leftValue;
	    	topValues[i] = topValue;
	    	leftValue++; 
	    });
	    //function to reduce the amount of rows    
	    console.log(locations);
	    console.log(leftValues);
	    console.log(topValues);
	    console.log(flip);	    	    
	    //animation functions  	    
	    //MAKE EVEN THEN DIVIDE BY 2	    	
	    animateDiv();      	  	
	    function animateDiv(){
	    	$.each(projects, function(i, project) {
	    		topValues[i] = topValues[i] * (vert);
	    		leftValues[i] = leftValues[i] * (hor); 
				$(project.div).css({top: topValues[i], left: leftValues[i], position: 'absolute'});
	    	});
		}
		var wrapper = $('.sortText');
		wrapper.html('');
		wrapper.append($('<span></span>').html(allProjects).css({position: 'absolute', left:0}).fadeIn(1500));	
	}	
	//sortByName();
	function sortByName(){	
		//place corrisponding text to the screen	
		//sort by name
		projects.sort(sort_by('name', false, function(a){return a.toUpperCase()}));
		//store loactions   
		var locations = [];  
		var leftValues = []; //store values
		var topValues = [];
		var location; //value of alphabet
		var topValue = 0;
		var leftValue = 0; //incrament if different
		leftValues.push(leftValue);  
		topValues.push(topValue); 	
		var flip = false;
		//get the loaction in the alphabet of each project names first value
		//need to check each key in the array
	    $.each(projects, function(i, project){
	    	location = getPos(project.name.charAt(0), true); //half the colums with 
	    	locations.push(location);
	    	var current = locations[i];	    	    	
	    	if (((leftValue % horProj) == 0) && leftValue != 0){
		    	leftValue = 0;
		    	topValue ++;
	    	}    	
	    	leftValues[i] = leftValue;
	    	topValues[i] = topValue;
	    	leftValue++; 
	    });	
	    //function to reduce the amount of rows    
	    console.log(locations);
	    console.log(leftValues);
	    console.log(topValues);
	    console.log(flip);
	    //animation functions  	    
	    //MAKE EVEN THEN DIVIDE BY 2	    	
	    animateDiv();      	  	
	    function animateDiv(){
	    	$.each(projects, function(i, project) {
	    		topValues[i] = topValues[i] * (vert);
	    		leftValues[i] = leftValues[i] * (hor);
				$(project.div).css({top: topValues[i], left: leftValues[i], position: 'absolute'});
	    	});
		}		
	var wrapper = $('.sortText');
		wrapper.html('');
		wrapper.append($('<span></span>').html(allProjects).css({position: 'absolute', left:0}).fadeIn(1500));
			
	}	

	//sortByType();
	function sortByType(){
		//place corrisponding text to the screen		
		//sort by trype
		projects.sort(sort_by('type', false, function(a){return a.toUpperCase()}));
		//store loactions   
		var locations = [];  
		var leftValues = []; //store values
		var topValues = [];
		var location; //value of alphabet
		var topValue = 0;
		var leftValue = 0; //incrament if different
		leftValues.push(leftValue);  
		topValues.push(topValue); 	
		var flip = false;
		//get the loaction in the alphabet of each project names first value
		//need to check each key in the array
	    $.each(projects, function(i, project){
	    	location = getPos(project.type.charAt(0), false); //half the colums with //CHANGE TO TYPE
	    	locations.push(location);
	    	var current = locations[i];	    	    	
	    	if (((leftValue % horProj) == 0) && leftValue != 0){
		    	leftValue = 0;
		    	topValue ++;
	    	}    	
	    	leftValues[i] = leftValue;
	    	topValues[i] = topValue;
	    	leftValue++; 
	    });	
	    //function to reduce the amount of rows    
	    console.log(locations);
	    console.log(leftValues);
	    console.log(topValues);
	    console.log(flip);
	    //animation functions  	    
	    //MAKE EVEN THEN DIVIDE BY 2	    	
	    animateDiv();      	  	
	    function animateDiv(){
	    	$.each(projects, function(i, project) {
	    		topValues[i] = topValues[i] * (vert);
	    		leftValues[i] = leftValues[i] * (hor);
				$(project.div).css({top: topValues[i], left: leftValues[i], position: 'absolute'});
	    	});
		}		
		
		//place corrisponding text to the screen
		var wrapper = $('.sortText');
		wrapper.html('');
		wrapper.append($('<span></span>').html(allProjects).css({position: 'absolute', left:0}).fadeIn(1500));
	}		
	/*
	var myarray=[25, 8, "George", "John"]
	myarray.sort(function() {return 0.5 - Math.random()}) //Array elements now scrambled
	*/ 	
	function sortRandom() {
		projects.sort(function() {return 0.5 - Math.random()}); //Array elements now scrambled
		console.log(projects);
		
		var locations = [];  
		var leftValues = []; //store values
		var topValues = [];
		var location; //value of alphabet
		var topValue = 0;
		var leftValue = 0; //incrament if different
		leftValues.push(leftValue);  
		topValues.push(topValue); 	
		var flip = false;
		//get the loaction in the alphabet of each project names first value
		//need to check each key in the array
	    $.each(projects, function(i, project){
	    	location = getPos(project.name.charAt(0), true); //half the colums with 
	    	locations.push(location);
	    	var current = locations[i];	    	    	
	    	if (((leftValue % horProj) == 0) && leftValue != 0){
		    	leftValue = 0;
		    	topValue ++;
	    	}    	
	    	leftValues[i] = leftValue;
	    	topValues[i] = topValue;
	    	leftValue++; 
	    });	
	    //function to reduce the amount of rows    
	    console.log(locations);
	    console.log(leftValues);
	    console.log(topValues);
	    console.log(flip);
	    //animation functions  	    
	    //MAKE EVEN THEN DIVIDE BY 2	    	
	    animateDiv();      	  	
	    function animateDiv(){
	    	$.each(projects, function(i, project) {
	    		topValues[i] = topValues[i] * (vert);
	    		leftValues[i] = leftValues[i] * (hor);
				$(project.div).css({top: topValues[i], left: leftValues[i], position: 'absolute'});
	    	});
		}
		var wrapper = $('.sortText');
		wrapper.html('');
		wrapper.append($('<span></span>').html(allProjects).css({position: 'absolute', left:0}).fadeIn(1500));		
	}		  	
});


















//HELPER FUNCTIONS
//returns location of an array in the alphabet, if bool is true every other letter is combined to make space on the canvas
function getPos(val, divide){	
	var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	var letter = val;
	var letterPosition = alphabet.indexOf(val);	
	if (divide == true){
		if (isEven(letterPosition) != true) {
			letterPosition -= 1;
		}
		letterPosition = letterPosition/2;	
		return letterPosition;
	} else {
		return letterPosition;
	}
}
//return even
function isEven(value){
    if (value%2 == 0) { 
        return true;
    }else {
    	return false;
    }
}
//sorting function
var sort_by = function(field, reverse, primer){
	   var key = function (x) {return primer ? primer(x[field]) : x[field]};	
	   return function (a,b) {
	       var A = key(a), B = key(b);
	       return (A < B ? -1 : (A > B ? 1 : 0)) * [1,-1][+!!reverse];                
	   }
}
//remove duplicates
function removeDuplicates(myArray){
	var newArray = [];
	for (var i = 0; i < myArray.length; i++) {
		if (myArray[i] != myArray[i-1]) {
			newArray.push(myArray[i]);
		}
	}
	return newArray;
}













