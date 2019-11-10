function returnRenderString(groupName){
	data = `
	    <div id=Group>
            <div id="render">
                <div>
                    <h3>${groupName}</h3>
                </div>
                <div>
                    <input type="text" />
                    <span onClick="deleteInput(this)">delete</span>
                </div>
            </div>
            <a href="#" onClick="addNewItem(this)">add new</a>
        </div>
	`
	return data
}

function deleteInput(elm){
	$(elm).parent().remove()
}

function submit(){
	data = ""
	$("#sortable #Group").each(function(index,elm){
		console.log('index ', index)
		data += "index = "+ index
		$(elm).find('h3').each(function(i, h3Elm){
			console.log('title = ',$(h3Elm).html())
			data += "</br>title = " + $(h3Elm).html()
		});
		$(elm).find('input').each(function(i, inputElm){
			console.log($(inputElm).val())
			data += "</br>val = " + $(inputElm).val()
		});
		data +="<hr>"
	});	
	$("#output").html(data)
}

function addNewItem(elm){
	data = `
		<div>
	        <input type="text" />
	        <span onClick="deleteInput(this)">delete</span>
        </div>
	`
	$(elm).closest("#Group").children('#render').append(data)
}

function addGroup(){
  	var groupName = prompt("Please enter group name:", "");
  	if(groupName){
  		$("#sortable").append(returnRenderString(groupName))
  	}else{
  		console.error('enter group name')
  	}
}

function sortable(){
 	$("#sortable").sortable({
        stop: setPriority
    });
    setPriority();

    function setPriority() {
    	$("#sortable #Group").each( function(index, elm){
            $(elm).attr("index", index);
        });
    }

}// sortable


$(document).ready(function(){
	sortable();
});