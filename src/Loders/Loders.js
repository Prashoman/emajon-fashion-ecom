import { getShoppingCart } from "../utilities/fakedb";

const loadingProductData = async () =>{
    const apiData = await fetch('products.json');
    const data = await apiData.json();
    // console.log(data)
    
    const storedCart = getShoppingCart();
    
    const newCartData = [];
    for(const id in storedCart){
        const matchData = data.find(d => d.id == id);
        if(matchData){
            const quantity = storedCart[id];
            matchData.quantity = quantity;
            newCartData.push(matchData);
        }
    }
    return newCartData;
}
export default loadingProductData;