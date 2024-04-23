function car_info(manufacturer: string, model: string, ...options: any) {
    const car = {
        manufacturer: manufacturer,
        model: model
    };

    options.forEach(option => {
        const [key, value] = Object.keys(option)[0];
        car [key] = value;
    });

    return car;
}

console.log(car_info('Toyota', 'Camry', {color: 'red'}, {features: 'GPS'}));