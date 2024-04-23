var guests = ["Shaheer", "Uzair", "Bazil"];
console.log("I have arranged a bigger table for dinner.");
guests.splice(guests.length / 2, 0, "Abdullah");
guests.push("Fardan");
guests.push("Hassan");
guests.push("Mubashir");
guests.push("Umer");
guests.forEach(function (guest) {
    console.log("".concat(guest, ",Could you join me at the dinner."));
});
