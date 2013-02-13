//Charles Aweida
//one object with all project data 
var projects = [];
$(document).ready(function () {
	//create each project
	projects = [{
		div: $('#cu07'),
		id: "1",
		name: "studio 07 colorado",
	    type: "environments",
	    year: "2008",
	    city: "Boulder, CO"
	}, {
	    div: $('#energydata'),
	    id: "1",
	    name: "information is beautiful competiton",
	    type: "data visualization",
	    year: "2012",
	    city: "Los Angeles, CA"
	}, {
	    div: $('#bcc'),
	    id: "1",
	    name: "boulder convention center",
	    type: "environments",
	    year: "2008",
	    city: "Boulder, CO"
	}, {
	    div: $('#jmc'),
	    id: "1",
	    name: "jmc medical center cg",
	    type: "environments",
	    year: "2010",
	    city: "Los Angeles, CA"
	}, {
	    div: $('#ddsp1'),
	    id: "1",
	    name: "data driven stadium panels pt.1",
	    type: "computational design",
	    year: "2011",
	    city: "Los Angeles, CA"	
	}, {
	    div: $('#genetic'),
	    id: "1",
	    name: "evolutionary form finding",
	    type: "computational design",
	    year: "2011",
	    city: "Los Angeles, CA"				    	    
	}, {
	    div: $('#meded'),
	    id: "1",
	    name: "tool path automation",
	    type: "computational design",
	    year: "2010",
	    city: "Los Angeles, CA"		
	}, {
	    div: $('#wall'),
	    id: "1",
	    name: "computational wall",
	    type: "computational design",
	    year: "2011",
	    city: "Los Angeles, CA"		
	}, {
	    div: $('#baloon'),
	    id: "1",
	    name: "digital baloon",
	    type: "hardware",
	    year: "2010",
	    city: "Los Angeles, CA"		
	}, {
	    div: $('#aperture'),
	    id: "1",
	    name: "ping ultrasonic aperture",
	    type: "hardware",
	    year: "2010",
	    city: "Los Angeles, CA"		
	}, {
	    div: $('#light'),
	    id: "1",
	    name: "ambient light data",
	    type: "hardware",
	    year: "2010",
	    city: "Los Angeles, CA"		
	}, {
	    div: $('#pxpan'),
	    id: "1",
	    name: "rotating pixel-panel",
	    type: "hardware",
	    year: "2009",
	    city: "Los Angeles, CA"		
	}, {
	    div: $('#frit'),
	    id: "1",
	    name: "fritting art",
	    type: "art",
	    year: "2011",
	    city: "Los Angeles, CA"		
	}, {
	    div: $('#archdata'),
	    id: "1",
	    name: "archdata.org",
	    type: "software",
	    year: "2013",
	    city: "World"		
	}, {
	    div: $('#cka'),
	    id: "1",
	    name: "cka.co blog",
	    type: "software",
	    year: "2012",
	    city: "Pittsburgh, PA"		
	}, {
	    div: $('#stadseat'),
	    id: "1",
	    name: "stadium seating tool",
	    type: "software",
	    year: "2011",
	    city: "Los Angeles, CA"		
	}, {
	    div: $('#modal'),
	    id: "1",
	    name: "modal nodes",
	    type: "software",
	    year: "2013",
	    city: "Pittsburgh, PA"		
	},/* {
	    div: $('#capstone'),
	    id: "1",
	    name: "BOA interactive finance",
	    type: "software",
	    year: "2013",
	    city: "Pittsburgh, PA"
	},*/ {
	    div: $('#ddsp2'),
	    id: "1",
	    name: "data driven stadium panels pt.2",
	    type: "computational design",
	    year: "2011",
	    city: "Los Angeles, CA"	
	}, {
	    div: $('#parttext'),
	    id: "1",
	    name: "particle text",
	    type: "software",
	    year: "2012",
	    city: "Pittsburgh, PA"	
	}];	
});



