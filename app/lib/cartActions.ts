export async function onClickSubmitCart(cart: any) {
    console.log('onClickSubmitCart', cart);
    const rawResponse = await fetch('/api/cart', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cart)
    });
    return await rawResponse.json();
}
