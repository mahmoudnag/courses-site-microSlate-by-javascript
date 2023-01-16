if(localStorage.Cart){
    var CartArr = JSON.parse(localStorage.Cart);
    for(item in CartArr){
        var product = `
        <div class="card">
            <div class="image-container">
                <img src="${CartArr[item].image}" >
            </div>
            <div class="container">
                <h4 >${item}</h4>
                <br>
                <p style=" text-align: center; font-size: 19px;">${CartArr[item].price}$</p>
            </div>
            <div class="col-md-1 align-self-center">
                <input type="button" style=" 
                background-color: #1c1919;
                padding: 11px;
                width: 100%;
                color: white;
                font-size: 17px;
                border-radius: 20px;
                cursor: pointer;
            "  value="delete"  onclick="DeleteItem(this,'${item}')">  
            </div>
        </div>`;
        document.getElementById("CartProducts").innerHTML += product;
        document.getElementById("CartProducts").innerHTML += "<hr style='margin-left:15%; margin-right:15%'>";
    }
  
    var checkOut = document.createElement("button");
    checkOut.innerText = "Check Out";
    checkOut.classList.add("btn");
    checkOut.classList.add("btn-warning");
    checkOut.setAttribute("onclick","Buy()")
    document.getElementById("CartProducts").appendChild(checkOut);

}






// -----------------------------------------------------------------------------------------------delete button==============================================================================

function DeleteItem(input, courseTitle){
    
    var CartArr = JSON.parse(localStorage.Cart);
    
   
  
        var sure = confirm(`Are You sure You want to delete ${courseTitle}?`);
        if(!sure){
           
        }
        else{
            delete CartArr[courseTitle];
            var toBeDeletedDiv = input.parentNode.parentNode;
            var toBeDeletedHr = toBeDeletedDiv.nextElementSibling;
            document.getElementById("CartProducts").removeChild(toBeDeletedDiv);
            document.getElementById("CartProducts").removeChild(toBeDeletedHr);
        }
  

    localStorage.Cart = JSON.stringify(CartArr);
}
function Buy(){
    window.open("paypall.html")
}