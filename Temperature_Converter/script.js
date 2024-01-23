function convertTemperature() {
    const temperatureInput = document.getElementById('temperatureInput').value;
    const unitSelect = document.getElementById('unitSelect');
    const selectedUnit = unitSelect.options[unitSelect.selectedIndex].value;

    if (isNaN(temperatureInput)) {
        alert('Please enter a valid number for temperature.');
        return;
    }

    let convertedTemperature;
    let resultUnit;

    if (selectedUnit === 'celsius') {
        convertedTemperature = (parseFloat(temperatureInput) * 9 / 5) + 32;
        resultUnit = 'Fahrenheit';
    } else {
        convertedTemperature = (parseFloat(temperatureInput) - 32) * 5 / 9;
        resultUnit = 'Celsius';
    }

    document.getElementById('result').innerText = `Converted Temperature: ${convertedTemperature.toFixed(2)}° ${resultUnit}`;
}
