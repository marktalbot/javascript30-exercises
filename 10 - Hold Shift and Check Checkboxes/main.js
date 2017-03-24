const options         = Array.from(document.querySelectorAll('input[type="checkbox"]'));
let selectionKeyStart = null;
let selectionKeyEnd   = null;
let shiftKeyActive    = false;

options.forEach((checkbox, key) => {
    checkbox.addEventListener('click', function() {    
        // Set Start
        if (!event.shiftKey && this.checked) {
            selectionKeyStart = key;
        }
        // Set End
        if (event.shiftKey && this.checked) {
            selectionKeyEnd = key;
            selectMultipleOptions();
        }
    });
});

function selectMultipleOptions() {
    if (selectionKeyStart < selectionKeyEnd) {
        selectionDown();
    } else {
        selectionUp();
    }
}

function selectionDown() {
    for (var i = selectionKeyStart; i < selectionKeyEnd; i++) {
        options[i].checked = true;
    }
}

function selectionUp() {
    for (var i = selectionKeyStart; i > selectionKeyEnd; i--) {
        options[i].checked = true;
    }
}