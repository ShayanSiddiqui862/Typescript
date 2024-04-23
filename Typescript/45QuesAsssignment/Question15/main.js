var guests = ["Uzair", "Shaheer", "Bazil"];
guests.forEach(function (guest) {
    console.log("".concat(guest, ",Can you eat the dinner with me."));
});
var unavailabeguest = "Bazil";
console.log("".concat(unavailabeguest, ", is unable to attend dinner."));
var newguest = "Fardan";
guests[guests.indexOf(unavailabeguest)] = newguest;
guests.forEach(function (guest) {
    console.log("".concat(guest, ",Can you eat the dinner with me."));
});
