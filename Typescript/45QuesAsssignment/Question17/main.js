var guests = ["Shaheer", "Uzair", "Bazil"];
console.log("Unfortunately, there is a problem and can only invite two people for dinner.");
for (var i = guests.length - 1; i >= 2; i--) {
    var removedGuest = guests.pop();
    console.log("Sorry, ".concat(removedGuest, ", I can't invite you to dinner."));
}
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you're still invited to dinner."));
});
