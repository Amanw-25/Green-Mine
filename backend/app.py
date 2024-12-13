from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Add the root route for the home page
@app.route('/')
def home():
    return 'Welcome to the CarbMine API!'

# Emission factors and other constants here
EXCAVATION_FACTOR = 94.6  # kg CO2 per ton of coal mined
TRANSPORTATION_FACTOR = 74.1  # kg CO2 per ton per km (for diesel-powered transportation)
EQUIPMENT_FACTOR = 73.3  # kg CO2 per hour of equipment operation

# Emission factors for various fuels
emissionFactors = {
  'coal': 2.42,        # kg CO2 per kg of coal
  'oil': 3.17,         # kg CO2 per liter of oil
  'naturalGas': 2.75,  # kg CO2 per cubic meter of natural gas
  'biomass': 0         # kg CO2 per kg of biomass
}

@app.route('/calculate', methods=['POST'])
def calculate_emissions():
    data = request.json
    
    # Inputs
    excavation = float(data['excavation'])
    transportation = float(data['transportation'])
    fuel = float(data['fuel'])
    equipment = float(data['equipment'])
    workers = int(data['workers'])
    output = float(data['output'])
    fueltype = data.get('fuelType', 'coal')
    reduced = float(data['reduction'])

    # Emission calculations
    excavation_emissions = excavation * EXCAVATION_FACTOR
    transportation_emissions = transportation * TRANSPORTATION_FACTOR * 0.5
    equipment_emissions = equipment * EQUIPMENT_FACTOR

    total_emissions = excavation_emissions + transportation_emissions + equipment_emissions
    # Individual per capita emissions
    excavation_per_capita = excavation_emissions / workers
    transportation_per_capita = transportation_emissions / workers
    equipment_per_capita = equipment_emissions / workers

    # Individual per output emissions
    excavation_per_output = excavation_emissions / output
    transportation_per_output = transportation_emissions / output
    equipment_per_output = equipment_emissions / output

    # calculated carbon credits
    annualcoal = output
    fuel_emission_factor = emissionFactors.get(fueltype, 2.2)
    fuel_emissions = fuel * fuel_emission_factor
    total =  annualcoal * 2.2 + fuel_emissions 
    baselineemissions = total
    carboncredits = baselineemissions - reduced
    worth = carboncredits * 42  # average cost per carbon credit
    return jsonify({
        'totalEmissions': total_emissions,
        'excavationEmissions': excavation_emissions,
        'transportationEmissions': transportation_emissions,
        'equipmentEmissions': equipment_emissions,
        'excavationPerCapita': excavation_per_capita,
        'transportationPerCapita': transportation_per_capita,
        'equipmentPerCapita': equipment_per_capita,
        'excavationPerOutput': excavation_per_output,
        'transportationPerOutput': transportation_per_output,
        'equipmentPerOutput': equipment_per_output,
        'perCapitaEmissions': total_emissions / workers,
        'perOutputEmissions': total_emissions / output,
        'baseline': baselineemissions,
        'carboncredits': carboncredits,
        'reduced': reduced,
        'worth': worth,
        'total': total
    })

# Add the neutralisation path calculation route
EV_CONSTANT = 0.20
GREEN_FUEL_CONSTANT = 0.50
SEQUESTRATION_RATE = 2.2
ELECTRICITY_REDUCTION_RATE = 0.3 

@app.route('/neutralise', methods=['POST'])
def calculate_neutralisation_pathways():
    data = request.json
    emissions = float(data['emissions'])
    transportation = float(data['transportation'])
    fuel = float(data['fuel'])
    
    green_fuel_percentage = float(data['green_fuel_percentage']) / 100
    neutralise_percentage = float(data['neutralise_percentage']) / 100
    ev_transportation_percentage = float(data['ev_transportation_percentage']) / 100

    emissions_to_be_neutralised = emissions * neutralise_percentage

    transportation_reduction = transportation * EV_CONSTANT * ev_transportation_percentage
    fuel_reduction = fuel * GREEN_FUEL_CONSTANT * green_fuel_percentage
    
    remaining_emissions = emissions_to_be_neutralised - (transportation_reduction + fuel_reduction)
    
    land_required = remaining_emissions / SEQUESTRATION_RATE
    electricity_consumption = emissions_to_be_neutralised * ELECTRICITY_REDUCTION_RATE
    
    overall_remaining_emissions = emissions - emissions_to_be_neutralised

    result = {
        'emissions': emissions,
        'emissions_to_be_neutralised': emissions_to_be_neutralised,
        'transportation_footprint_reduction': transportation_reduction,
        'fuel_footprint_reduction': fuel_reduction,
        'remaining_footprint_after_reduction': remaining_emissions,
        'land_required_for_afforestation_hectares': land_required,
        'estimated_electricity_savings_mwh': electricity_consumption,
        'overall_remaining_footprint': overall_remaining_emissions,
        'message': 'Carbon footprint neutralization pathways calculated successfully.'
    }
    
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
