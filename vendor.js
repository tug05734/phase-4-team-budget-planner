var myData = [
    {"Vendor ID" : 0, "Vendor Name" : "Microsoft"},
    {"Vendor ID" : 1, "Vendor Name" : "Intel"},
    {"Vendor ID" : 2, "Vendor Name" : "Apple"}
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
    var clientName = document.getElementById("clientNameInput").value;
    // var projectName = document.getElementById("projectNameInput").value;
    // var projectManager = document.getElementById("projectManagerInput").value;
    // var projectCost = document.getElementById("projectCostInput").value;
    

    document.getElementById("clientNameInput").value = "";
    // document.getElementById("projectNameInput").value = "";
    // document.getElementById("projectManagerInput").value = "";
    // document.getElementById("projectCostInput").value = "";

    //console.log(clientName);

    InsertRow(currentDealId, clientName);

   // window.location.href = "product-display.html";
    

}

function InsertRow(dealId, clientName) {
    myData.push({"Vendor ID": dealId, "Vendor Name" : clientName})
    currentDealId++;
    //localStorage.setItem("test", myData);
    console.log("insert: " + myData.length);
    CreateTableFromJSON();

}

function EditDeal(){
    var vendorID = document.getElementById("vendorIDInput").value;
    var clientName = document.getElementById("clientNameInput2").value;
    // var projectName = document.getElementById("projectNameInput").value;
    // var projectManager = document.getElementById("projectManagerInput").value;
    // var projectCost = document.getElementById("projectCostInput").value;
    console.log(vendorID);
    for( var i = 0; i < myData.length; i++){ 
        console.log(myData[i]["Vendor ID"]);
        if ( myData[i]["Vendor ID"] == vendorID) { 
            myData[i]["Vendor Name"] = clientName;
            console.log("hello");
            // myData[i]["Project Name"] = projectName;
            // myData[i]["Project Manager"] = projectManager;
            // myData[i]["Project Cost"] = projectCost;
        }
    }
    document.getElementById("vendorIDInput").value = "";
    document.getElementById("clientNameInput2").value = "";

    CreateTableFromJSON();
    
}

function DeleteRow() {
    var vendorID = document.getElementById("vendorIDInput2").value; 

    for( var i = 0; i < myData.length; i++){ 
    
        if ( myData[i]["Vendor ID"] == vendorID) { 
    
            myData.splice(i, 1); 
        }
    }
    document.getElementById("vendorIDInput2").value = "";

    CreateTableFromJSON();
}

function CreateTableWithNewVendor(){

    console.log("New vendor: " + myData.length);
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
}