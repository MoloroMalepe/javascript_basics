//fetching data
fetch ('./data.json')
.then(res => res.json())
//object
.then(data =>{
    //appending
    const dataList = document.getElementById('data-list');

    //Getting items and create a list from datasource 
    data.array.forEach(item =>{//for each item in the array
        const itemlist = document.createElement('li');//list of items
        itemlist.innerHTML = ` <strong>Name:</strong> ${item.name}<br>
        <strong>Email:</strong> ${name.email}`
        dataList.appendChild(itemlist)
    });
})

//try to catch errors
.catch(error=>{
 console.error('Error detected while loading data  from data source',error);
})