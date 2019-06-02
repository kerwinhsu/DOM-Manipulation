var tableData = data;
// console.log(data);
var tbody = d3.select("tbody");

function buildTable(data){
    tbody.html("");
    data.forEach((ufo)=>{
        var row = tbody.append("tr");
        Object.entries(ufo).forEach(([key,value])=>{
            var cell=row.append("td");
            cell.text(value);
        });        
    });
}

var date=d3.select("#date");
var button=d3.select("#filter-btn");

function handleSearch(){
    d3.event.preventDefault();
    // console.log(date);
    var dateinput = date._groups[0][0].value;
    var ufoTableSearch = tableData.filter(d=>d.datetime == dateinput);
    // console.log(ufoTableSearch);
    //tableData(ufoTableSearch);
    buildTable(ufoTableSearch);
}

button.on("click", handleSearch);
buildTable(data)