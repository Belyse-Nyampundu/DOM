// // Change document background color to
// // silver
// document.body.style.backgroundColor = 'silver';

// //Change the font color for h1 title tag to
// // green
// document.getElementById('title').style.color = 'green';

// //Change the font case for h3 title tags to
// // uppercase
// let heading=document.getElementsByTagName('h3')
// for(let x =0; x<heading.length; x++){
//     heading[x].style.textTransform = 'uppercase';
// }
// //Add one more fruit to the fruits list
// let fruitList=document.getElementById('fruList');
// let newFruit = document.newfruit("li");
// newFruit.textContent = "Apples";
// fruitList.appendChild(newFruit);

// //Add one more vegetable to the vegetables
// // list
// let vegetableList=document.getElementById('vegList');
// let newVeg=document.newVeg('li');
// newVeg.textContent="Cabbages";
// vegetableList.appendChild(newVeg);

document.getElementById('title').innerHTML = "Hello world"
document.getElementById('title').onmouseover = function(){
    console.log("gggggggg");
    this.style.color = "red";
}
document.getElementById('title').onmouseout = function(){
    console.log("gke,qw");
    this.style.color = ""
}
document.getElementById('title').innerHTML = "Date :" +Date();
document.write(Date());


var paragaraphs=document.getElementsByTagName("li");

for(let i=0;i< paragaraphs.length;i++){
    console.log(paragaraphs[i].style.color = "green")
};
let images = document.getElementById('image');
images.style.border = "solid 2px"
images.style.borderRadius = "5px"
images.style.width = "10%"
images.style.height = "6%"    //that is how you style with multiple styles

images.setAttribute("src","for image.jpg");//it will cange the image you have used before



//You create new elements
let newElement = document.createElement("div");
let newHeading = document.createElement("h1");

newHeading.textContent = "Ilike apple and apple juice";
document.body.appendChild(newHeading);


// let remove = document.getElementsByTagName("p");
// for(let a = 0;a < remove.length;a++){
// remove[a].parentNode.removeChild(remove[a])
// }

// remove.removeAttribute(remove);

document.getElementById("myButton").onmouseover = function(){
    console.log("mouse over the element");
    this.style.borderRadius = "10px"
}
document.getElementById("myButton").onmouseout  = function(){
    console.log("mnvnb ")
    this.style.borderRadius = ""
}

