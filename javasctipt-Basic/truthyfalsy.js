function checkTruthyFalsyValue(arr) {
    return arr.map((value) => {
        if (value) {
            return "truthy";
        } else {
            return "falsy";
        }
    });
}
const input = [1, 0, "", "hi", null, undefined, [], {}];
console.log(checkTruthyFalsyValue(input));

