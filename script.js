let http = new XMLHttpRequest();

http.open('get', 'products.json', true);

http.send();

http.onload = function(){
    if(this.readyState == 4 && this.status == 200){
        let products = JSON.parse(this.responseText);

        let output = "";

        for(let item of products){
            output += `
                <div class="products">
                    <p class="nama">${item.name}</p>
                    <p class="desc">${item.desc}</p>
                    <p class="stok">${item.stok}</p>
                    <p class="harga">${item.harga}</p>
                    <p class="diskon">${item.diskon}</p>
                    <p class="gambar">${item.image}</p>
                </div>
            `;
        }

        document.querySelector(".products").innerHTML = output;
    }
}

// "name" : "nama1",
// "desc" : "deskripsi1 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores excepturi mollitia quidem adipisci",
// "stok" : "110",
// "harga" : "20000",
// "diskon" : "10%",
// "hargasetelahdiskom" : "18000",
// "image" : "gambar1"




// fetch('products.js')

// .then(function(response){
//     return response.json();
// })

// .then(function(products){
//     let placeholder = document.querySelector("#data-output");
//     let out = "";
//     for(let product of products){
//         out +=`
//             <tr>
//                 <td>${product.name}</td>
//                 <td>${product.desc}</td>
//                 <td>${product.stok}</td>
//                 <td>${product.harga}</td>
//                 <td>${product.diskon}</td>
//                 <td>${product.hargasetelahdiskon}</td>
//                 <td>${product.image}</td>
//             </tr>

//         `;
//     }

//     placeholder.innerHTML = out;
// })

