// Change document background color to
// silver
document.body.style.backgroundColor = 'silver';

//Change the font color for h1 title tag to
// green
document.getElementById('title').style.color = 'green';

//Change the font case for h3 title tags to
// uppercase
let heading=document.getElementsByTagName('h3')
for(let x =0; x<heading.length; x++){
    heading[x].style.textTransform = 'uppercase';
}
//Add one more fruit to the fruits list
let fruitList=document.getElementById('fruList');
let newFruit = document.newfruit("li");
newFruit.textContent = "Apples";
fruitList.appendChild(newFruit);

//Add one more vegetable to the vegetables
// list
let vegetableList=document.getElementById('vegList');
let newVeg=document.newVeg('li');
newVeg.textContent="Cabbages";
vegetableList.appendChild(newVeg);
