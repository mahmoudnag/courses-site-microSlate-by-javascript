// ----------------------------------------------------------------------------------------internal jason------------------------------------------------------------------------------------
// let courses =   {
//   "data": [
//     {
//       "courseName": "c#",
//       "category": "programing",
//      "price": "30",
//       "image": "photo/c.jpg"
//     },
//     {
//       "courseName": "Html",
//       "category": "programing",
//       "price": "49",
//      "image": "photo/dd.png"
//     },
//     {
//       "courseName": "android",
//       "category": "android",
//       "price": "99",
//       "image": "photo/android2.png"
//     },
//     {
//       "courseName": "advanced android",
//       "category": "android",
//       "price": "29",
//       "image": "photo/android.jfif"
//     },
//     {
//       "courseName": "Css",
//       "category": "programing",
//       "price": "129",
//       "image": "photo/css.png"
//     },
//     {
//       "courseName": "sql",
//       "category": "programing",
//       "price": "89",
//       "image": "photo/sql.jpg"
//     },
//     {
//       "courseName": "basic freelancing",
//       "category": "freelancing",
//       "price": "189",
//       "image": "photo/frealancing1.webp"
//     },
//     {
//       "courseName": "advanced freelancing",
//       "category": "freelancing",
//       "price": "49",
//       "image": "photo/freelancing2.jpg"
//     },
//     {
//       "courseName": "word",
//       "category": "icdl",
//       "price": "49",
//       "image": "photo/word.png"
//     },
//     {
//       "courseName": "powerpint",
//       "category": "icdl",
//       "price": "49",
//       "image": "photo/powerpoint.jpg"
//     }
//   ]
// };

// ------------------------------------------------------------------------------------------ external jason------------------------------------------------------------------------------------
var data1;
var courses2;
       // Create Request
       var XHR = new XMLHttpRequest();

       // Open Request
       XHR.open("get","http://127.0.0.1:5501/script/data.json",true);

     // check request
       XHR.onreadystatechange = function(){
           if(XHR.readyState == 4 && XHR.status == 200){
                data1 = JSON.parse(XHR.responseText);
                console.log("from json");
               console.log(data1);
               courses2=data1;
//  --------------------------------------------------------------------------------------------- add card to body------------------------------------------------------------------------------
  

               for (let i of courses2.data) {
                //Create Card
                let card = document.createElement("div");
                //add default class to div  and category as clas to  can filter them
                card.classList.add("card", i.category, "hide");
                //div for image
                let imgContainer = document.createElement("div");
                imgContainer.classList.add("image-container");
                //get image from object and add it to div
                let image = document.createElement("img");
                image.setAttribute("src", i.image);
                //for the pop form ALAA 
                image.setAttribute("onclick",`pop('${i.image}','${i.courseName}')`)
                imgContainer.appendChild(image);
                card.appendChild(imgContainer);
                //container is a div for porduct name
                let container = document.createElement("div");
                container.classList.add("container");
                //cours name
                let name = document.createElement("h5");
                name.classList.add("course-name");
                name.innerText = i.courseName.toUpperCase();
                container.appendChild(name);
                //price
                let price = document.createElement("h4");
                price.innerText = "$" + i.price;
                container.appendChild(price);
                // button for buy
                let b = document.createElement("a");
                b.innerText ="BUY";
                // b.setAttribute("href","welcom.html")
                b.setAttribute("id",`btn${i.courseName}`)
                b.setAttribute("onclick",`AddToCart('${i.courseName}','${i.category}','${i.image}','${i.price}')`)
                container.appendChild(b);
              
                card.appendChild(container);
                document.getElementById("courses").appendChild(card);
              }
              
              // document.getElementsByClassName("btn").onclick=function(){


              //   alert("courese add to cart")
              
              // }
            

               
           }
       }

       //4. Send the request
    
       XHR.send();
       

      




 // ----------------------------------------------------------------------------------------------------filtersection-----------------------------------------------------------------------
              
               
 function filterProduct(value) {
  //Button class code  set background for buttton
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("activee");
    } else {
      button.classList.remove("activee");
    }
  });
  
                                                                                         //fulter function
  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    }
    //Check if element contains category class 
    else {
      
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}
// ----------------------------------------------------------------------------------------------search function----------------------------------------------------------------------


document.getElementById("search").addEventListener("click", () => {
  // get element to search
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".course-name"); // course name is class that contain name of course
  let cards = document.querySelectorAll(".card");

  //loop through all elements with element and his index  (numer of element)
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});


// -----------------------------------------------------------------------------------Add to cart-----------------------------------------------------------------------------------------

function AddToCart(itemnaeme, itemcategory, itemImage, itemPrice){
  alert("course add to chart")
 
  var CartArr = {};
  if(localStorage.Cart){
      CartArr = JSON.parse(localStorage.Cart);
  }


  
      CartArr[itemnaeme] = {
        courseName :itemnaeme,
          image:itemImage,
          price:itemPrice,
          category:itemcategory
      };
 
  localStorage.Cart=JSON.stringify(CartArr);
}

//------------------------------------------------------------------------------------------to open the pop form----------------------------------------------------------------------------- 

function pop(x,y){
  
  var cc=document.getElementById("im1");
  cc.setAttribute("src",`${x}`);
  document.getElementById("hform").innerText=y;
  var nc = y;
  //innerText
  document.getElementById("myForm").style.display = "block";
}
//close the pop form
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Initially display all courses
window.onload = () => {
  filterProduct("all");
};

