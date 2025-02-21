export function setCurrency(price) {
    return price.toLocaleString('us-US',{style: 'currency', currency: 'USD'});
}

export const totalPriceItems = order => order.price * order.count;
