// ==========================================
// ЗАВДАННЯ 1: Лампочка (className та classList)
// ==========================================
let isBulbOn = false;
let bulbInactivityTimer;

function toggleBulb() {
    let bulb = document.getElementById('bulb');
    isBulbOn = !isBulbOn;
    
    if (isBulbOn) {
        bulb.classList.add('on');
    } else {
        bulb.classList.remove('on');
    }
    resetAutoTurnOffTimer();
}

function changeBulbType() {
    let bulb = document.getElementById('bulb');
    let type = document.getElementById('bulb-type').value;
    // Видаляємо старі класи типів
    bulb.classList.remove('regular', 'eco', 'led');
    // Додаємо новий вибраний тип
    bulb.classList.add(type);
    resetAutoTurnOffTimer();
}

function changeBrightness() {
    // Зміна яскравості через prompt
    let brightness = prompt("Введіть яскравість (від 0.1 до 1.0):", "1.0");
    if (brightness !== null) {
        document.getElementById('bulb').style.opacity = brightness;
    }
    resetAutoTurnOffTimer();
}

function turnOffAutomatically() {
    if (isBulbOn) {
        toggleBulb();
        console.log("Лампочку автоматично вимкнено через 5 хвилин бездіяльності.");
    }
}

function resetAutoTurnOffTimer() {
    clearTimeout(bulbInactivityTimer);
    // 5 хвилин = 300000 мілісекунд
    bulbInactivityTimer = setTimeout(turnOffAutomatically, 300000); 
}

// ==========================================
// ЗАВДАННЯ 2: Світлофор (setTimeout)
// ==========================================
let tlState = -1; // -1: вимкнено, 0: червоний, 1: жовтий, 2: зелений, 3: миготливий жовтий
let tlTimeout;
let tlDurations = { red: 5000, yellow: 3000, green: 7000 };
let blinkCount = 0;

function updateTrafficLightUI(redOn, yellowOn, greenOn, text) {
    document.getElementById('tl-red').className = redOn ? 'light red' : 'light';
    document.getElementById('tl-yellow').className = yellowOn ? 'light yellow' : 'light';
    document.getElementById('tl-green').className = greenOn ? 'light green' : 'light';
    // Виведення словесного опису стану
    document.getElementById('tl-status').innerText = text;
}

function runTrafficLightState() {
    clearTimeout(tlTimeout);
    
    if (tlState === 0) {
        updateTrafficLightUI(true, false, false, "Червоний");
        tlTimeout = setTimeout(() => { tlState = 1; runTrafficLightState(); }, tlDurations.red);
    } 
    else if (tlState === 1) {
        updateTrafficLightUI(false, true, false, "Жовтий");
        tlTimeout = setTimeout(() => { tlState = 2; runTrafficLightState(); }, tlDurations.yellow);
    } 
    else if (tlState === 2) {
        updateTrafficLightUI(false, false, true, "Зелений");
        tlTimeout = setTimeout(() => { tlState = 3; blinkCount = 0; blinkYellowPhase(); }, tlDurations.green);
    }
}

function blinkYellowPhase() {
    if (blinkCount >= 6) { // 3 рази ввімкнути і вимкнути (разом 6 кроків)
        tlState = 0;
        runTrafficLightState();
        return;
    }
    
    let isYellowOn = (blinkCount % 2 === 0);
    updateTrafficLightUI(false, isYellowOn, false, "Миготливий жовтий");
    
    blinkCount++;
    tlTimeout = setTimeout(blinkYellowPhase, 500); // мигання кожні 0.5 сек
}

function startTrafficLight() {
    tlState = 0; // Починаємо з червоного
    runTrafficLightState();
}

function manualNextState() {
    clearTimeout(tlTimeout);
    if (tlState === 0) tlState = 1;
    else if (tlState === 1) tlState = 2;
    else if (tlState === 2) { tlState = 3; blinkCount = 0; blinkYellowPhase(); return; }
    else if (tlState === 3) tlState = 0;
    else tlState = 0;
    runTrafficLightState();
}

function setCustomDurations() {
    // Зміна тривалості через prompt
    let r = prompt("Час червоного (в секундах):", "5");
    let y = prompt("Час жовтого (в секундах):", "3");
    let g = prompt("Час зеленого (в секундах):", "7");
    if (r && y && g) {
        tlDurations.red = r * 1000;
        tlDurations.yellow = y * 1000;
        tlDurations.green = g * 1000;
    }
}

// ==========================================
// ЗАВДАННЯ 3: Дата та час
// ==========================================

// 3.1 Цифровий годинник із мигаючим індикатором
function updateDigitalClock() {
    let now = new Date();
    let hh = String(now.getHours()).padStart(2, '0');
    let mm = String(now.getMinutes()).padStart(2, '0');
    let ss = String(now.getSeconds()).padStart(2, '0');
    let blink = now.getSeconds() % 2 === 0 ? ':' : ' ';
    document.getElementById('clock').innerText = `${hh}${blink}${mm}${blink}${ss}`;
}
setInterval(updateDigitalClock, 500);

// 3.2 Таймер зворотного відліку
let customCountdownTimer;
function startCustomCountdown() {
    clearInterval(customCountdownTimer);
    let targetVal = document.getElementById('timer-target').value;
    if (!targetVal) return alert("Введіть дату!");
    let targetDate = new Date(targetVal).getTime();

    customCountdownTimer = setInterval(() => {
        let now = new Date().getTime();
        let distance = targetDate - now;

        if (distance < 0) {
            clearInterval(customCountdownTimer);
            document.getElementById('timer-output').innerText = "Час вийшов!";
            return;
        }
        let d = Math.floor(distance / (1000 * 60 * 60 * 24));
        let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let s = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById('timer-output').innerText = `Залишилося: ${d}д ${h}г ${m}хв ${s}с`;
    }, 1000);
}

// 3.4 Підрахунок часу до дня народження
function calculateBirthday() {
    let bdayVal = document.getElementById('bday-input').value;
    if (!bdayVal) return alert("Введіть дату народження!");
    
    let target = new Date(bdayVal);
    let now = new Date();
    
    // Встановлюємо поточний рік для дня народження
    target.setFullYear(now.getFullYear());
    if (now > target) {
        target.setFullYear(now.getFullYear() + 1); // Якщо вже пройшло цього року, беремо наступний
    }

    let diffMs = target.getTime() - now.getTime();
    
    let totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    let months = Math.floor(totalDays / 30);
    let days = totalDays % 30;
    let hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let mins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    let secs = Math.floor((diffMs % (1000 * 60)) / 1000);

    document.getElementById('bday-output').innerText = 
        `До дня народження: ${months} міс, ${days} днів, ${hours} год, ${mins} хв, ${secs} сек.`;
}

// ==========================================
// ЗАВДАННЯ 4: Інтернет-магазин (Map, Set, WeakMap, WeakSet)
// ==========================================

let catalog = new Map();              // Зберігання товарів (ключ - ID, значення - об'єкт)
let ordersArchive = new Set();        // Зберігання унікальних номерів замовлень
let productHistory = new WeakMap();   // Історія змін ціни/кількості (об'єкт -> масив історії)
let processedOrders = new WeakSet();  // Відстеження оброблених об'єктів-замовлень

function displayElement(text) {
    console.log(text);
}

function addProductToCatalog(id, name, price, stock) {
    let productObj = { id: id, name: name, price: price, stock: stock };
    catalog.set(id, productObj);
    productHistory.set(productObj, ["Додано до каталогу"]);
    return productObj;
}

function deleteProductFromCatalog(id) {
    catalog.delete(id);
}

function updateProductInfo(id, newPrice, newStock) {
    if (catalog.has(id)) {
        let productObj = catalog.get(id);
        productObj.price = newPrice;
        productObj.stock = newStock;
        
        // Оновлення історії у WeakMap
        let history = productHistory.get(productObj);
        history.push(`Оновлено: ціна ${newPrice}, кількість на складі ${newStock}`);
        productHistory.set(productObj, history);
    }
}

function findProductByName(name) {
    for (let [id, product] of catalog) {
        if (product.name === name) {
            return product;
        }
    }
    return null;
}

function placeOrder(orderId, productId, amount) {
    let orderObj = { orderId: orderId, product: productId, amount: amount };
    ordersArchive.add(orderId); // Записуємо унікальне замовлення у Set
    
    if (catalog.has(productId)) {
        let productObj = catalog.get(productId);
        if (productObj.stock >= amount) {
            productObj.stock -= amount; // Зменшуємо кількість товару на складі
            processedOrders.add(orderObj); // Помічаємо об'єкт у WeakSet
            displayElement(`Замовлення ${orderId} успішно оформлене.`);
        } else {
            displayElement(`Помилка: недостатньо товару на складі для замовлення ${orderId}.`);
        }
    }
}

// --- ДЕМОНСТРАЦІЯ ЗАВДАННЯ 4 В КОНСОЛІ ---
console.log("--- ЗАВДАННЯ 4: МАГАЗИН (Map, Set) ---");

console.log("1. Додавання продуктів:");
let p1 = addProductToCatalog(101, "Ноутбук", 25000, 10);
let p2 = addProductToCatalog(102, "Мишка", 800, 50);
console.log(catalog);
console.log("\n");

console.log("2. Оновлення продукту (ID: 101):");
updateProductInfo(101, 24000, 15);
console.log("Історія змін ноутбука (отримано з WeakMap):", productHistory.get(p1));
console.log("\n");

console.log("3. Пошук продукту за назвою 'Мишка':");
console.log(findProductByName("Мишка"));
console.log("\n");

console.log("4. Відстеження замовлень (Купуємо 2 Ноутбуки):");
placeOrder("ORD-001", 101, 2);
console.log("Залишок ноутбуків на складі після замовлення:", catalog.get(101).stock);
console.log("Унікальні замовлення (Set):", ordersArchive);
console.log("\n");

console.log("5. Видалення продукту (ID: 102):");
deleteProductFromCatalog(102);
console.log("Каталог після видалення:", catalog);
console.log("\n");