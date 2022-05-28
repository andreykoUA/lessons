// console.log(document.head);
// console.log(document.documentElement);
// console.log(document.body.childNodes);
// console.log(document.body.firstChild); // gives text node(ususally it will be (\n) elements)
// console.log(document.body.firstElementChild); // gives ELEMENT 
// console.log(document.body.lastChild);

// console.log(document.querySelector('#current').parentNode.parentNode)
// console.log(document.querySelector('#current').parentElement);

// console.log(document.querySelector('[data-current="3"]').nextElementSibling)

for (let node of document.body.childNodes) { // ignoring text nodes and only displaying html elements
    if (node.nodeName == '#text') {
        continue;
    }
    console.log(node);
}