# SunnySideUp Solar Panel Calculator

## Overview

The Praximous Solar Panel Calculator is a cutting-edge web-based application meticulously designed to revolutionize the solar sales process. It equips our sales team with an indispensable tool for generating **rapid, accurate, and compelling solar installation quotes**. By streamlining complex calculations and integrating essential support features, this system empowers sellers to provide immediate, transparent value to potential customers, significantly accelerating decision-making and driving substantial sales growth for Praximous.

This MVP (Minimum Viable Product) focuses on core quoting functionality, efficient panel layout, financial projections, and critical sales support via an integrated knowledge base and streamlined quote delivery. Future versions will build upon this robust foundation with advanced visualization and deeper analytical capabilities.

## Key Features

The Praximous Solar Panel Calculator is packed with features engineered to enhance efficiency, accuracy, and customer engagement:

### Core Quoting & Calculation

* **Intuitive Graphical User Interface (GUI):** A user-friendly and responsive interface designed for quick data entry and clear output visualization, ensuring ease of use for sales personnel.
* **Comprehensive Data Input:** Allows for detailed input of crucial parameters, including:
  * **Customer Information:** Name, address (for location-specific solar data).
  * **Energy Consumption:** Average monthly electricity bill or annual consumption (kWh) for precise savings calculations.
  * **Roof Measurements:** Detailed dimensions (length, width) of usable roof sections.
  * **Roof Type & Characteristics:** Selection from common roof types (pitched, flat, gable, hip) influencing panel placement and mounting.
  * **Obstruction Mapping:** Ability to mark areas for chimneys, skylights, vents, etc., that cannot accommodate panels, ensuring realistic layouts.
  * **Roof Pitch/Angle:** Input or estimation of roof angle, critical for optimal solar energy capture.
  * **Azimuth/Orientation:** Direction the roof faces (e.g., South, East, West) for accurate generation forecasting in the UK.
* **Smart Panel Layout Optimization:**
  * Calculates the **net usable roof area** based on input dimensions and identified obstructions.
  * Intelligently determines the **optimal number of solar panels** that can be fitted.
  * Considers panel dimensions (from product database), required setbacks from edges, and building code compliance.
  * Provides a **visual representation** of the estimated panel layout on the roof, making the proposal tangible.
* **Accurate System Sizing:** Automatically calculates the **Total System Size (kWp)** based on the number of panels and their wattage, adhering to industry standards.
* **Estimated Annual Generation (kWh):** Leverages **location-specific solar irradiance data** (e.g., from PVGIS for the UK) combined with roof characteristics, shading factors, and system efficiency losses to project annual electricity production.
* **Comprehensive Financial Projections:**
  * **Total Installation Cost:** Generates a detailed estimate including costs for panels, inverters, mounting hardware, labor, electrical work, permits, and a contingency.
  * **Installation Time:** Projects the overall time required for system setup and installation in days, aiding scheduling and customer expectation management.
  * **Potential Annual Savings:** Calculates estimated annual savings on electricity bills, factoring in current electricity prices and potential income from the **Smart Export Guarantee (SEG)** scheme.
  * **Return on Investment (ROI) / Payback Period:** Provides a clear estimate of how long it will take for the system's savings to offset the initial investment.

### Seller & Customer Engagement

* **Interactive Hints (`?` Icons):** Small, intuitive question mark icons placed next to input fields and key results. Hovering over or clicking these icons reveals **concise tooltips or pop-up explanations**, clarifying terminology, data requirements, and the significance of various metrics. This acts as an instant training and reference guide for sellers.
* **"Send Quote" Functionality:**
  * A dedicated button that, upon click, triggers the generation and dispatch of a **professional, branded PDF quote**.
  * The quote is sent simultaneously to the **potential buyer** (via email) and the **seller** (for their records and follow-up).
  * The PDF quote includes the Praximous logo, a clear breakdown of the proposed system, financial projections, visual layout, and next steps, ensuring a consistent and high-quality presentation.
  * All generated quotes are securely **stored in the backend database**, enabling historical tracking and easy retrieval.
* **Integrated FAQ/Knowledge Base:**
  * A searchable and filterable database of **Frequently Asked Questions (FAQs)** and key information directly accessible within the application via a "Help" or "FAQ" button.
  * Allows sellers to **quickly search for answers** to common customer questions during a live sales interaction.
  * FAQs are organized by **categories** (e.g., "Costs & Savings", "Technical Details", "Installation Process", "Warranty & Maintenance", "UK Regulations") and feature **expandable answers** for a clean interface.
  * Ensures **consistent and accurate information delivery** across the sales team.
* **Print-Friendly Quote Preview:**
  * A dedicated **"Preview Quote" button** allows sellers to view a static, print-optimized version of the generated quote directly within the browser **before** sending it.
  * This preview closely mirrors the layout and content of the final PDF document, ensuring a **final review opportunity** for accuracy, branding consistency, and overall presentation.
  * Provides peace of mind to the seller and helps catch any last-minute discrepancies.

## Technologies Used (Proposed)

The Praximous Solar Panel Calculator will be built with a modern, scalable, and maintainable technology stack:

-----

### Frontend

* **Framework:** **React.js** (or Angular/Vue.js) - Chosen for its component-based architecture, strong community support, and efficient UI rendering, enabling a dynamic and responsive user experience.
* **Styling:** **Tailwind CSS** / **CSS Modules** / **Styled Components** - For rapid and consistent styling, ensuring a clean and branded interface.
* **Charting/Visualization:** **Chart.js** / **D3.js** (for advanced future visualizations) - For presenting financial projections and generation data clearly.

### Backend

* **Language:** **Python** - A powerful, versatile language ideal for complex calculations, data processing, and robust API development.
* **Framework:** **Django** / **Flask** - A high-level Python web framework (Django for larger, more structured apps; Flask for lighter APIs), providing secure and efficient API endpoints for data management and calculations.
* **Database:** **PostgreSQL** - A highly reliable, open-source relational database, perfect for storing product specifications, customer data, quotes, and FAQ content.
* **API Integrations:**
  * **Solar Irradiance Data:** Integration with services like **PVGIS** (Photovoltaic Geographical Information System – an EU-backed tool widely used for European solar data) for accurate, location-specific solar generation estimates in the UK.
  * **Mapping API:** Potentially **Google Maps API** (or OpenStreetMap) for initial location verification and potential future integration with satellite imagery for roof analysis.
  * **Email Service API:** Services like **SendGrid**, **Mailgun**, or **AWS SES** for reliable and scalable delivery of PDF quotes to customers and sellers.
  * **PDF Generation Library:** Tools like **ReportLab** (Python) or similar for dynamic, server-side PDF creation, ensuring professional quote documents.

### Deployment & Infrastructure (Future Consideration)

* **Cloud Provider:** **AWS**, **Google Cloud Platform (GCP)**, or **Microsoft Azure** - For scalable, secure, and reliable hosting of the application.
* **Containerization:** **Docker** - To package the application and its dependencies into isolated containers, ensuring consistent environments across development, testing, and production.
* **Orchestration:** **Kubernetes** - For automated deployment, scaling, and management of containerized applications (for larger-scale, high-availability deployments).

## Installation & Setup (For Developers)

To get a local development environment up and running for the Praximous Solar Panel Calculator, please follow these detailed steps.

### Prerequisites

Ensure you have the following installed on your development machine:

* **Git:** For cloning the repository.
* **Node.js (LTS version):** Required for frontend development (`npm` or `yarn` is bundled with Node.js).
* **Python 3.9+:** Required for backend development.
* **pip:** Python package installer (comes with Python).
* **PostgreSQL:** Database server instance running locally or accessible.
* **Docker & Docker Compose:** (Highly Recommended) For consistent environment setup and running services in isolation.

### 1\. Clone the Repository

First, clone the Praximous Solar Calculator repository to your local machine:

```bash
git clone https://github.com/Praximous/solar-calculator.git
cd solar-calculator
```

### 2\. Backend Setup

Navigate into the `backend` directory and set up the Python environment:

```bash
cd backend
```

#### Using Docker Compose (Recommended)

This is the easiest way to get the database and backend running without local installs.

1. **Create `.env` file:** Create a file named `.env` in the `backend` directory. Populate it with the necessary environment variables.

    ```env
    # Database connection for Docker
    POSTGRES_DB=solar_db
    POSTGRES_USER=solar_user
    POSTGRES_PASSWORD=solar_password

    # Django specific
    SECRET_KEY='your_very_secret_key_here_for_django' # IMPORTANT: Change this for production!
    DEBUG=True # Set to False in production
    ALLOWED_HOSTS='localhost,127.0.0.1' # Add your domain in production

    # API Keys (replace with your actual keys)
    Maps_API_KEY='your_Maps_api_key'
    PVGIS_API_KEY='your_pvgis_api_key' # If PVGIS requires one (often not, but good to plan)
    EMAIL_HOST='smtp.your-email-provider.com'
    EMAIL_PORT=587
    EMAIL_USE_TLS=True
    EMAIL_HOST_USER='your_email_username'
    EMAIL_HOST_PASSWORD='your_email_password'
    DEFAULT_FROM_EMAIL='no-reply@praximous.com'
    ```

2. **Build and run services:**

    ```bash
    docker-compose up --build
    ```

    This will build the Docker images, create the database, run migrations, and start the backend server.
3. **Access Backend:** The backend API should be accessible at `http://127.0.0.1:8000`.

#### Manual Backend Setup (Without Docker)

1. **Create a Python virtual environment:**

    ```bash
    python -m venv venv
    source venv/bin/activate # On Windows: `venv\Scripts\activate`
    ```

2. **Install Python dependencies:**

    ```bash
    pip install -r requirements.txt
    ```

3. **Create `.env` file:** Create a file named `.env` in the `backend` directory. Populate it with the necessary environment variables, adjusting database connection details for your local PostgreSQL setup.

    ```env
    # Database connection for local PostgreSQL
    DATABASE_URL=postgresql://solar_user:solar_password@localhost:5432/solar_db

    # Django specific
    SECRET_KEY='your_very_secret_key_here_for_django' # IMPORTANT: Change this for production!
    DEBUG=True
    ALLOWED_HOSTS='localhost,127.0.0.1'

    # API Keys (replace with your actual keys)
    Maps_API_KEY='your_Maps_api_key'
    PVGIS_API_KEY='your_pvgis_api_key'
    EMAIL_HOST='smtp.your-email-provider.com'
    EMAIL_PORT=587
    EMAIL_USE_TLS=True
    EMAIL_HOST_USER='your_email_username'
    EMAIL_HOST_PASSWORD='your_email_password'
    DEFAULT_FROM_EMAIL='no-reply@praximous.com'
    ```

    **Note:** Make sure your `solar_db` database and `solar_user` with `solar_password` exist and have appropriate permissions in your local PostgreSQL instance.
4. **Run database migrations:**

    ```bash
    python manage.py migrate
    ```

5. **Create a superuser (optional, for admin access):**

    ```bash
    python manage.py createsuperuser
    ```

6. **Start the backend server:**

    ```bash
    python manage.py runserver
    ```

    The backend API will typically run on `http://127.0.0.1:8000`.

### 3\. Frontend Setup

Open a **new terminal window**, navigate to the `frontend` directory:

```bash
cd ../frontend
```

1. **Install Node.js dependencies:**

    ```bash
    npm install # or yarn install
    ```

2. **Create `.env` file:** Create a file named `.env` in the `frontend` directory:

    ```env
    # Points to your backend API
    REACT_APP_API_URL=http://127.0.0.1:8000/api
    ```

3. **Start the frontend development server:**

    ```bash
    npm start # or yarn start
    ```

    The frontend application will typically open in your browser at `http://localhost:3000`.

## Usage

Once both the frontend and backend servers are running, sales personnel can access the application through their web browser.

1. **Access the Application:** Open your web browser and navigate to `http://localhost:3000`.
2. **Input Customer Details:** Enter the potential customer's name, address, and average electricity consumption.
3. **Define Roof Parameters:** Input detailed roof dimensions, select the roof type, precisely mark any obstructions (chimneys, skylights, etc.), and specify the roof's pitch and orientation (azimuth).
4. **Select System Components:** Choose desired solar panel and inverter models from the pre-configured Praximous product database dropdowns.
5. **Generate Quote:** Click the "Generate Quote" button. The system will instantly perform all calculations and display:
      * The **optimal number of panels** that can be fitted.
      * The **estimated total installation time**.
      * The **total estimated installation cost**.
      * The **projected annual electricity savings**.
      * The **estimated payback period** for the investment.
      * A **visual overview** of the proposed panel layout.
6. **Utilize Interactive Hints:** Hover over or click the **`?` (question mark) icons** next to any input field or result to get instant explanations and clarification.
7. **Consult the FAQ/Knowledge Base:** Click the "FAQ" or "Help" button to open the integrated knowledge base. Use the search bar or category filters to quickly find answers to common customer questions during your discussion.
8. **Preview Quote:** Click the **"Preview Quote" button** to review the entire quote document in a print-friendly format directly in your browser before sending. This ensures accuracy and perfect presentation.
9. **Send Quote to Customer:** Once satisfied with the proposal, click the **"Send Quote" button**. A professional, branded PDF quote will be instantly emailed to both the customer and your sales inbox.

## Contributing

We welcome and encourage contributions to enhance the Praximous Solar Panel Calculator\! Please follow these guidelines to contribute:

1. **Fork the repository:** Start by forking the main Praximous repository to your personal GitHub account.
2. **Create a new branch:** For each new feature or bug fix, create a dedicated branch from `main`:

    ```bash
    git checkout -b feature/your-feature-name # for new features
    git checkout -b bugfix/issue-description # for bug fixes
    ```

3. **Implement your changes:** Write clear, concise code, following the existing coding style. Add comments where necessary.
4. **Write tests:** Ensure your new features or bug fixes are covered by appropriate unit and integration tests.
5. **Commit your changes:** Write clear and descriptive commit messages.

    ```bash
    git commit -m 'feat: Add new awesome feature'
    git commit -m 'fix: Resolve issue with panel layout calculation'
    ```

6. **Push to your fork:**

    ```bash
    git push origin feature/your-feature-name
    ```

7. **Open a Pull Request (PR):** Submit a pull request to the `main` branch of the original Praximous repository. Provide a detailed description of your changes and reference any related issues.
8. **Code Review:** Participate in the code review process, addressing any feedback from maintainers.

## License

This project is distributed under the **MIT License**. See the `LICENSE` file in the root of the repository for more details.

## Contact

For any questions, support, or business inquiries regarding the Praximous Solar Panel Calculator, please contact:

Praximous Business Development Team
[Your Specific Email Address for Inquiries, e.g., `solutions@praximous.com`]
[Your Praximous Website Link, if applicable]

-----
