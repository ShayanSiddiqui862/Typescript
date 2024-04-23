"use strict";
function car_info(manufacturer, model, ...options) {
    const car = {
        manufacturer: manufacturer,
        model: model
    };
    options.forEach(option => {
        const [key, value] = Object.entries(option)[0];
        car[key] = value;
    });
    return car;
}
console.log(car_info('Toyota', 'Camry', { color: 'red' }, { features: 'GPS' }));
