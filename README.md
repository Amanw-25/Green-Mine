# CarbMine

**CarbMine** is a comprehensive web application designed to help the Indian coal industry address climate change challenges. It empowers coal mine operators to make informed decisions by quantifying carbon footprints and offering pathways to achieve carbon neutrality. The tool features emission estimation, carbon neutrality simulations, data visualization, carbon credit calculations, and allows users to generate and store PDF reports of their analysis.

## Demo Video

Here is the working demo of CarbMine:

[Demo Video](https://youtu.be/T19DcbGDWgY?feature=shared)

## Features

- **Emission Estimation:** Calculate the carbon footprint of coal mining operations.
- **Carbon Neutrality Simulations:** Explore different strategies to achieve carbon neutrality.
- **Data Visualization:** Visualize emission data and simulations through interactive charts and graphs.
- **Carbon Credit Calculations:** Calculate potential carbon credits based on emissions and mitigation strategies.
- **PDF Reports:** Generate and store PDF reports of your analysis for future reference.
- **Past Insights:** View historical insights and analyses for ongoing tracking and evaluation.

## Tech Stack

### Frontend
- **React:** A popular JavaScript library for building dynamic and interactive user interfaces.
- **Tailwind CSS:** A utility-first CSS framework for designing responsive and visually appealing interfaces.
- **GSAP:** A powerful library for creating high-performance animations and transitions in the frontend.

### Backend
- **Python (Flask):** A lightweight WSGI web application framework for building the backend services.
- **Firebase:** A platform by Google that provides cloud-based services including authentication and real-time databases.

## Installation

To run the Coal Carbon Footprint Tool locally, follow these steps:

### Prerequisites

- **Node.js:** Required for running the React frontend.
- **Python:** Required for running the Flask backend.
- **Firebase Account:** Set up a Firebase project and configure the credentials.

### Setup

1. **Clone the repository:**
    ```bash
    git clone https://github.com/Geethika-Kancharla/CarbMine
    ```

2. **Navigate to the `frontend` directory:**
    ```bash
    cd frontend
    ```

3. **Create a `.env` file in the `frontend` directory to store your Firebase credentials:**
    ```bash
    touch .env
    ```

4. **Add your Firebase configuration to the `.env` file in the `frontend` directory:**
    ```bash
    REACT_APP_FIREBASE_API_KEY=your-api-key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
    REACT_APP_FIREBASE_PROJECT_ID=your-project-id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
    REACT_APP_FIREBASE_APP_ID=your-app-id
    ```

5. **Install the required dependencies for both the frontend and backend:**

    - **For the frontend:**
        ```bash
        npm install
        ```

    - **For the backend:**
        Navigate to the `backend` directory:
        ```bash
        cd backend
        ```

        Install the backend dependencies:
        ```bash
        pip install -r requirements.txt
        ```

6. **Start the development servers:**

    - **React frontend:**
        ```bash
        cd frontend
        npm start
        ```

    - **Flask backend:**
        ```bash
        cd backend
        flask run
        ```

    The application should now be running locally at [http://localhost:3000](http://localhost:3000).

## Usage

- **Estimate Emissions:** Input your data to calculate carbon emissions from coal mining activities.
- **Simulate Carbon Neutrality:** Experiment with different scenarios to see how to achieve carbon neutrality.
- **Generate Reports:** Create PDF reports of your analyses and store them for future reference.
- **View Past Insights:** Access historical data and previous analyses to track progress over time.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.





<section>
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">References</h2>
              <div className="space-y-6">
                {/* Reference 1 */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-transform duration-300 transform hover:scale-105">
                  <h3 className="text-2xl font-semibold text-gray-800">2006 IPCC Guidelines for National Greenhouse Gas Inventories</h3>
                  <p className="text-base text-gray-700 mt-4">
                    These guidelines provide methodologies for estimating greenhouse gas emissions and removals.
                    <br />
                    <a href="https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/2_Volume2/V2_3_Ch3_Mobile_Combustion.pdf"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer">Link to IPCC Mobile Combustion Guidelines</a>
                    <br />
                    <a href="https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/2_Volume2/V2_2_Ch2_Stationary_Combustion.pdf"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer">Link to IPCC Stationary Combustion Guidelines</a>
                  </p>
                </div>

                {/* Reference 2 */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-transform duration-300 transform hover:scale-105">
                  <h3 className="text-2xl font-semibold text-gray-800">Carbon Footprint Reduction from EVs</h3>
                  <p className="text-base text-gray-700 mt-4">
                    EVs typically reduce carbon emissions by 20%-30% compared to conventional vehicles.
                    <br />
                    <a href="https://www.iea.org/reports/global-ev-outlook-2023"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer">Link to IEA Global EV Outlook 2023</a>
                  </p>
                </div>

                {/* Reference 3 */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-transform duration-300 transform hover:scale-105">
                  <h3 className="text-2xl font-semibold text-gray-800">Carbon Footprint Reduction from Cleaner Fuels</h3>
                  <p className="text-base text-gray-700 mt-4">
                    Switching from coal to natural gas can reduce carbon emissions by about 50%.
                    <br />
                    <a href="https://www.epa.gov/greenvehicles/greenhouse-gas-emissions-typical-passenger-vehicle"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer">Link to EPA Greenhouse Gas Emissions from Passenger Vehicles</a>
                  </p>
                </div>

                {/* Reference 4 */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-transform duration-300 transform hover:scale-105">
                  <h3 className="text-2xl font-semibold text-gray-800">Afforestation Sequestration Rate</h3>
                  <p className="text-base text-gray-700 mt-4">
                    Afforestation sequesters approximately 2.2 tons of carbon per hectare per year.
                    <br />
                    <a href="https://www.ipcc.ch/srccl/"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer">Link to IPCC Special Report on Climate Change and Land</a>
                  </p>
                </div>

                {/* Reference 5 */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-transform duration-300 transform hover:scale-105">
                  <h3 className="text-2xl font-semibold text-gray-800">Renewable Energy Reduction</h3>
                  <p className="text-base text-gray-700 mt-4">
                    Renewable energy can reduce electricity consumption and carbon emissions by up to 30%.
                    <br />
                    <a href="https://www.irena.org/publications/2022/Dec/Renewable-Energy-and-Jobs-Annual-Review-2022"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer">Link to IRENA Renewable Energy and Jobs Annual Review 2022</a>
                  </p>
                </div>
              </div>
            </section>