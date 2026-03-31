// Update shift display when slider moves
document.getElementById('shift-input').addEventListener('input', function () {
    document.getElementById('shift-display').textContent = this.value;
});

/**
 * Applies a Caesar reverse-shift to a plain string (no URL handling).
 */
function shiftText(text, shift) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        const charCode = text.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            result += String.fromCharCode(((charCode - 65 - shift + 26) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            result += String.fromCharCode(((charCode - 97 - shift + 26) % 26) + 97);
        } else {
            result += text[i];
        }
    }
    return result;
}

/**
 * Decodes a Caesar-shifted string by reversing the shift.
 * Any URL present in the input is preserved as-is (not shifted),
 * while text before and after the URL is decoded normally.
 */
function decode() {
    const input = document.getElementById('encoded-text').textContent;
    const shift = parseInt(document.getElementById('shift-input').value);

    // Detect a URL in the input and preserve it unchanged
    const urlMatch = input.match(/https?:\/\/[^\s]+/);
    let result;

    if (urlMatch) {
        const urlStart = urlMatch.index;
        const urlEnd = urlStart + urlMatch[0].length;
        result = shiftText(input.substring(0, urlStart), shift)
               + urlMatch[0]
               + shiftText(input.substring(urlEnd), shift);
    } else {
        result = shiftText(input, shift);
    }

    const resultBox = document.getElementById('result-box');
    resultBox.style.display = 'block';
    document.getElementById('output').textContent = result;
}
