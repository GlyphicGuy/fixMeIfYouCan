// Update shift display when slider moves
document.getElementById('shift-input').addEventListener('input', function () {
    document.getElementById('shift-display').textContent = this.value;
});

/**
 * Decodes a Caesar-shifted string by reversing the shift.
 * BUG 3: reads from element id 'cipher-text' — no such element exists.
 *        Should be 'encoded-text'.
 * BUG 4: modulo uses 25 instead of 26, causing one character to always decode wrong.
 */
function decode() {
    // BUG 3: wrong element ID — 'cipher-text' does not exist in index.html
    const input = document.getElementById('cipher-text').textContent;
    const shift = parseInt(document.getElementById('shift-input').value);

    let result = '';

    for (let i = 0; i < input.length; i++) {
        const charCode = input.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) {
            // BUG 4: should be % 26 — using 25 corrupts every letter that wraps around
            result += String.fromCharCode(((charCode - 65 - shift + 26) % 25) + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            // BUG 4: same modulo bug for lowercase letters
            result += String.fromCharCode(((charCode - 97 - shift + 26) % 25) + 97);
        } else {
            result += input[i];
        }
    }

    const resultBox = document.getElementById('result-box');
    resultBox.style.display = 'block';
    document.getElementById('output').textContent = result;
}
