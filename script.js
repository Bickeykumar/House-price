document.getElementById('predictionForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const area = parseFloat(document.getElementById('area').value);
    const bedrooms = parseFloat(document.getElementById('bedrooms').value);
    const bathrooms = parseFloat(document.getElementById('bathrooms').value);
    const age = parseFloat(document.getElementById('age').value);

    // Simple linear regression model (example coefficients)
    const basePrice = 50000; // Base price for a house
    const areaCoefficient = 200; // Price per square foot
    const bedroomCoefficient = 10000; // Price per bedroom
    const bathroomCoefficient = 15000; // Price per bathroom
    const ageCoefficient = -3000; // Price reduction per year of age

    // Calculate predicted price
    const predictedPrice = basePrice +
        (areaCoefficient * area) +
        (bedroomCoefficient * bedrooms) +
        (bathroomCoefficient * bathrooms) +
        (ageCoefficient * age);

    // Display result
    document.getElementById('result').innerText = `Estimated House Price: $${predictedPrice.toFixed(2)}`;
});
