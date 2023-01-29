// TRAVERSING THE DOM

var itemList=document.querySelector('#items');

// // parentNode
// console.log(itemList.parentNode);

// itemList.parentNode.style.backgroundColor='#f4f4f4';

// // grandparent of items
// console.log(itemList.parentNode.parentNode);

// // parentElement(will do the same thing as parentNode for thee most part)
// console.log(itemList.parentElement);

// itemList.parentElement.style.backgroundColor='#f4f4f4';

// // grandparent of items
// console.log(itemList.parentElement.parentElement);


// // childNodes
// // Will give a nodeList of the childNodes(including the line breaks)
// console.log(itemList.childNodes);

// // children will give HTML collection instead of nodeList
// console.log(itemList.children);

// // Accessing a particular element from the HTML collection array
// console.log(itemList.children[1]);

// itemList.children[1].style.backgroundColor='yellow';

// // firstChild(first child from the nodeList)
// console.log(itemList.firstChild);

// // firstElementChild(will give the first element child)
// console.log(itemList.firstElementChild);


// // lastChild(first child from the nodeList)
// console.log(itemList.lastChild);

// // lastElementChild(will give the first element child)
// console.log(itemList.lastElementChild);

// // Changing text content of lastElement child
// itemList.lastElementChild.textContent="Hello 4";

// // nextSibling
// console.log(itemList.nextSibling);

// // nextElementSibling
// console.log(itemList.nextElementSibling);

// // previousSibling
// console.log(itemList.previousSibling);

// // previousElementSibling
// console.log(itemList.previousElementSibling);

// itemList.previousElementSibling.style.color='green';

// createElement

// Create a div
var newDiv=document.createElement('div');

// Adding class to the created element
newDiv.className='hello';

// Add id
newDiv.id='hello1';

// Add attribute
newDiv.setAttribute('title','Hello Div');

// Create text node
var newDivText=document.createTextNode('Hello World');

// Add text to div
newDiv.appendChild(newDivText);

var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize='30px';

// First parameter is what we are inserting and second parameter is what we are inserting before
// container implies where we are inserting
container.insertBefore(newDiv,h1);

