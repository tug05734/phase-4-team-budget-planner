var myData = [
    {"Deal ID" : 0, "Vendor Name" : "Microsoft", "Project Name" : "Project Mercury", "Project Manager" : "Will"},
    {"Deal ID" : 1, "Vendor Name" : "Intel", "Project Name" : "Project Venus", "Project Manager" : "Susan"},
    {"Deal ID" : 2, "Vendor Name" : "Apple", "Project Name" : "Project Mars", "Project Manager" : "Mark"}
]


var currentDealId = myData.length;


function CreateTableFromJSON() {    

    // EXTRACT VALUE FOR HTML HEADER. 
    // ('Deal ID', 'Deal Name', 'Category' and 'Price')
    var col = [];
    for (var i = 0; i < myData.length; i++) {
        for (var key in myData[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    // CREATE DYNAMIC TABLE.
    var table = document.createElement("table");

    // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

    var tr = table.insertRow(-1);                   // TABLE ROW.

    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");      // TABLE HEADER.
        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    // ADD JSON DATA TO THE TABLE AS ROWS.
    for (var i = 0; i < myData.length; i++) {

        tr = table.insertRow(-1);

        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = myData[i][col[j]];
        }
        // Insert Extra Cell for the Delete Icon
        //TODO: Complete this
        //var tabCell = tr.insertCell(-1);
        //tabCell.innerHTML = '<button onclick="DeleteRow(' + myData[i].dealId + ')"> <img src="trashcan.png"> </button>'

    }

    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    var divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
}

function AddNewDeal() {
    var vendorName = document.getElementById("clientNameInput").value;
    var projectName = document.getElementById("projectNameInput").value;
    var projectManager = document.getElementById("projectManagerInput").value;
    

    document.getElementById("clientNameInput").value = "";
    document.getElementById("projectNameInput").value = "";
    document.getElementById("projectManagerInput").value = "";


    InsertRow(currentDealId, vendorName, projectName, projectManager);    

}

function InsertRow(dealId, vendorName, projectName, projectManager) {
    myData.push({"Deal ID": dealId, "Vendor Name" : vendorName, "Project Name" : projectName, "Project Manager" : projectManager})
    currentDealId++;
    CreateTableFromJSON();

}

function EditDeal(){
    var dealID = document.getElementById("vendorIDInput").value;
    var clientName = document.getElementById("clientNameInput2").value;
    var projectName = document.getElementById("projectNameInput2").value;
    var projectManager = document.getElementById("projectManagerInput2").value;

    for( var i = 0; i < myData.length; i++){ 
        if ( myData[i]["Deal ID"] == dealID) { 
            myData[i]["Vendor Name"] = clientName;
            myData[i]["Project Name"] = projectName;
            myData[i]["Project Manager"] = projectManager;
            
        }
    }
    document.getElementById("vendorIDInput").value = "";
    document.getElementById("clientNameInput2").value = "";
    document.getElementById("projectNameInput2").value = "";
    document.getElementById("projectManagerInput2").value = "";

    CreateTableFromJSON();
    
}

function DeleteRow() {
    var dealID = document.getElementById("vendorIDInput2").value; 

    for( var i = 0; i < myData.length; i++){ 
    
        if ( myData[i]["Deal ID"] == dealID) { 
    
            myData.splice(i, 1); 
        }
    }
    document.getElementById("vendorIDInput2").value = "";

    CreateTableFromJSON();
}