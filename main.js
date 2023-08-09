var names_of_people = [];
var h = 0;
    
function submit()
{
    var GuestName = document.getElementById("name1").value;
	names_of_people.push(GuestName);
	console.log(GuestName);    
    console.log(names_of_people);
    var lenght_of_name = names_of_people.length;
    console.log(lenght_of_name);
	if (h==0) {
	document.getElementById("name").innerHTML=names_of_people.toString();
	}
	document.getElementById("hider").style.display="inline-block";
   }

function hide() {
	h=1-h;
	if(h==1){
	document.getElementById("name").innerHTML="";
	document.getElementById("hider").innerHTML="Show"
	} else {
		document.getElementById("name").innerHTML=names_of_people;
		document.getElementById("hider").innerHTML="Hide";	
	}

}

function show()
{
	var i= names_of_people.join("<br>");
	console.log(names_of_people);
	document.getElementById("p1").innerHTML=i.toString();
	document.getElementById("sort_button").style.display="block";
	
}


function sorting()
	{
		names_of_people.sort();
		var i= names_of_people.join("<br>");
		console.log(names_of_people);		
		document.getElementById("sorted").innerHTML=i.toString();
		}


function searching()
{
	var s= document.getElementById("s1").value;
	var found=0;
	var j;
	for(j=0; j<names_of_people.length; j++)
		{
			if(s==names_of_people[j]){
				found=found+1;
			}	
		}
	document.getElementById("p2").innerHTML="Found \""+s+"\" "+found+" time/s";
	console.log("found name "+found+" times");
}
