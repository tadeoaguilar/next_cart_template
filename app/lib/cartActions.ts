export async function onClickSubmitCart(cart: any[]) {
    if (cart.length === 0) {
        
        return {msg:"Cart is empty"};
    }
    console.log('onClickSubmitCart', cart);
    const rawResponse = await fetch('/api/cart', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cart)
    });
    const response = await rawResponse.json();
   
    return await response;


}
