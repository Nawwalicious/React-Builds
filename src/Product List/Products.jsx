import './Products.css'
function Products()
{

    var Products = [
        {id:1, name:"Samsung S23", price:3500, instock:true, image:"S23.jpg", memory:"512GB"},
        {id:2, name:"Samsung S23", price:3249, instock:true, image:"S21.jpg", memory:"256GB"},
        {id:3, name:"Samsung S22", price:2500, instock:true, image:"S22.jpg", memory:"512GB"},
        {id:4, name:"Samsung S22", price:2249, instock:true, image:"S23.jpg", memory:"256GB"},
        {id:5, name:"Samsung S21", price:1500, instock:true, image:"S21.jpg", memory:"512GB"},
        {id:6, name:"Samsung S21", price:1249, instock:true, image:"S23.jpg", memory:"256GB"}
    ];
    return(
        <div>

            <h2>Product Page List:</h2>

            <div className='product-container'>

                <hr></hr>

                {
                    Products.map((Products, i) =>
                        <div className="product" key={i}>
                            <img src={Products.image} alt="S23"/>
                            <p><span>Model:</span>{Products.name}</p>
                            <p><span>Price:</span>${Products.price}</p>
                            <p><span>Memory:</span>{Products.memory}</p>
                            <button>Buy Now</button>
                        </div>
                    )
                }

            </div>
        </div>
    );
}

export default Products;