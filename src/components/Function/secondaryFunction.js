export function setCurrency(price) {
    return price.toLocaleString('us-US',{style: 'currency', currency: 'USD'});
}

export const totalPriceItems = order => {

    const countTopping = order.topping && order.topping.filter(item => item.checked).length;

    const priceTopping = (order.price * 0.1) * countTopping;

    return (order.price + priceTopping) * order.count
};
