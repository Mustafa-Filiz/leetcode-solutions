/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let result = "";
    let control = "";

    const arr = s.split("");

    arr.forEach((letter) => {
        const foundIndex = control.indexOf(letter);

        if (foundIndex === -1) {
        control += letter;
        } else {
        control = control.slice(foundIndex + 1) + letter;
        }

        if (control.length > result.length) {
        result = control;
        }
    });

    return result.length;
};