// collect number From input Field.......
function getValueFromField(valueField) {
    const getValue = document.getElementById(valueField);
    const YourValue = parseFloat(getValue.value);
    getValue.value = '';
    return YourValue;
}

// Collect Value From Html Elements....
function getValueFromElements(valueElements) {
    const getElement = document.getElementById(valueElements);
    const preValue = parseFloat(getElement.innerText);

    return preValue;
}

// set Value into Elements.......
function setValueToElements(setElementID, newValue) {
    const setPre = document.getElementById(setElementID);
    setPre.innerText = newValue;

}
