const product = [
    {
        id: 0,
        image: '1.jpg',
        title: 'Myglamm Lipstick',
        price: 359,
    },
    {
        id: 1,
        image: '2.jpg',
        title: 'Myglamm Concealer',
        price: 259,
    },
    {
        id: 2,
        image: '3.jpg',
        title: 'Myglamm Kajal',
        price: 199,
    },
    {
        id: 3,
        image: '4.jpg',
        title: 'Myglamm Compact',
        price: 299,
    },
    {
        id: 4,
        image: '5.jpg',
        title: 'Myglamm Nailenamel',
        price: 159,
    },
    {
        id: 5,
        image: '6.jpg',
        title: 'Myglamm Makeup set spray',
        price: 499,
    }
];

const categories = [...new Set(product.map((item) => 
    {return item}))]
let i = 0;

document.getElementById('root').innerHTML = categories.map((item) =>
 {
    var{image, title, price}=item;
    return(
        <div class='box'>
            <div class='img-box'>
                <img class='images' src='${image}'></img>
        </div>
        <div class='bottom'>
                <p>${title}</p>
                <h2>$ ${price}.00</h2>
                "<button onclick='addtocart(${i++})'>Add to cart</button>"+
        </div>
        </div>

    )
    
}).join('');

var cart = [];
function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function deElement(a){
    cart.splice(a,1);
    displaycart();

}

function displaycart(a) {
    let j=0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$"+0+".00";
         }
    else{
        document.getElementById('cartItem').innerHTML = cart.map((items)=>
        {
            var{image, title, price}=item;
            total=total=price;
            document.getElementById("total").innerHTML ="$"+total+".00";
         return `
                <div class='cart-items'>
                    <div class='row-img'>
                        <img class='rowing' src='${image}'></img>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size:15px;'>$ ${price}.00</h2>
                    <i class='fa-solid fa-trash' onclick='delElement(${index})'></i>
                </div>`;
        }).join('');

       
    }
}

