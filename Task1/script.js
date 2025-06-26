const box=document.getElementById('homee');

fetch('https://dummyjson.com/products')
    .then(res=>res.json())
    .then(data=>{
        const products=data.products;
        products.forEach(product=>{
            const card=document.createElement("div");
            card.className='cards'
            card.innerHTML=`
            <img src="${product.thumbnail}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>${product.description}</p>
            <strong>${product.price}</strong>
            `;
            box.appendChild(card);
        });
    })
    .catch(err=>{
        box.innerHTML="Cant get the API here...";
        console.error("Error Happened"+err);
    })


