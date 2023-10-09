function convertTemperature() {
    // Get input value in Celsius
    const celsiusInput = document.getElementById('celsius');
    const celsiusValue = parseFloat(celsiusInput.value);

    // Check if the input is a valid number
    if (!isNaN(celsiusValue)) {
        // Convert Celsius to Fahrenheit
        const fahrenheitValue = (celsiusValue * 9/5) + 32;

        // Display the converted value in Fahrenheit input
        const fahrenheitInput = document.getElementById('fahrenheit');
        fahrenheitInput.value = fahrenheitValue.toFixed(2);
    } else {
        // If the input is not a valid number, clear the Fahrenheit input
        const fahrenheitInput = document.getElementById('fahrenheit');
        fahrenheitInput.value = '';
    }
}
