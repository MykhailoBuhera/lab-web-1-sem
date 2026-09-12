"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PRICES = { smal: 10, large: 25 };
const TOPPING_PRICES = {
    chocolate: 5,
    caramel: 6,
    berries: 10,
};
const MARSHMALLOW_PRICE = 5;
function calculateIceCreamPrice(size, toppings, marshmallow = false) {
    if (toppings.length === 0) {
        throw new Error("Потрібна мінімум одна начинка");
    }
    let total = PRICES[size];
    for (const topping of toppings) {
        total += TOPPING_PRICES[topping];
    }
    if (marshmallow) {
        total += MARSHMALLOW_PRICE;
    }
    return total;
}
const sizeInput = prompt("Розмір (smal/large)");
const toppingsInput = prompt("Начинки через кому (chocolate,caramel,berries)");
const toppings = (toppingsInput?.split(",").map(t => t.trim()) ?? []);
const marshmallowInput = prompt("Маршмелоу? (так/ні)");
const marshmallow = marshmallowInput?.toLowerCase() === "так";
const price = calculateIceCreamPrice(sizeInput, toppings, marshmallow);
console.log(`Вартість морозива ${price} грн`);
alert(`Вартість морозива ${price} грн`);
//# sourceMappingURL=ice.js.map