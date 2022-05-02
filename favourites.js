// write js code here corresponding to favourites.html

var bookArr = JSON.parse(localStorage.getItem("favourites"))
 
displayData(bookArr)

var sum = bookArr.reduce(function(acc,elem){
    acc+elem
})

function displayData(data){
    data.forEach(function(elem){
        var tr = document.createElement("tr");
       

        var td1 = document.createElement("td");
        td1.innerText=elem=personNumber
        

        var td2 = document.createElement("td");
        td2.innerText=elem=personTeamA

        var td3 = document.createElement("td");
        td3.innerText=elem=personTeamB

        var td4 = document.createElement("td");
        td4.innerText=elem=personDate

        var td5 = document.createElement("td");
        td5.innerText=elem=personVenue

        var td6 = document.createElement("td")

        td6.innerText="Delete"
        td6.style.color = "red"
        td6.style.cursor = "pointer"
        document.addEventListener("click",deletf);
      
        

        tr.append(td1,td2,td3,td4,td5,td6);
           
        document.querySelector("tbody").append(tr);


    });
}
function deletf(){
    event.target.parentNode.remove
}