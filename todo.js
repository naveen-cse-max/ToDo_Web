let inp = document.getElementById('input')
let lis=document.getElementById('list')
let form=document.getElementById('form')

// For performing event on submit 

form.addEventListener("submit",function add(data)
{
    data.preventDefault()
    createItem(inp.value)
})

// For Creating the list

function createItem(d)
{

    template=`<li>${d}<button onclick="deleteItem(this)">Delete</button></li>`
    lis.insertAdjacentHTML("beforeend",template)
    inp.value=""
    inp.focus()
}

// For Deleting the list 

function deleteItem(d1)
{
    d1.parentElement.remove()
}