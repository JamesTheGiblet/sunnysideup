# SunnySideUp Solar Panel Calculator Development Roadmap

This roadmap outlines the phased development plan for the Praximous Solar Panel Calculator MVP, incorporating agile principles, modular design, and robust testing at each stage. It clearly marks the point at which the product will be ready for an MVP presentation.

## Core Principles

* **Asynchronous Development:** Teams/developers can work on different components concurrently, minimizing blocking dependencies.
* **Modular & Small Files:** Codebase will be broken down into small, single-responsibility modules/components/functions, promoting reusability, testability, and easier maintenance.
* **Full-Stack Cohesion:** While backend and frontend tasks are separated, consistent communication and API contract definition will ensure seamless integration. For the stack, we'll align with the proposed Python/Django (Backend) and React (Frontend) as it offers similar benefits to MERN for this project's scope (a robust backend and a dynamic frontend).
* **Bio-Driven Design (User-Centric & Intuitive):** Focus on designing user flows that feel natural and intuitive for the sales team. The GUI should mimic real-world interactions where possible, reducing cognitive load and training time.
* **Test-Driven Development (TDD) / Behavior-Driven Development (BDD) mindset:** Prioritize writing tests early in the development cycle.

---

## Phase 1: Foundation & Core Calculation Engine (MVP Critical)

**Goal:** Establish the backend infrastructure, define core data models, and build the calculation logic for solar proposals.

### Tasks to Complete (Phase 1)

* **1.1. Project Setup & Version Control**
  * Initialize Git repository (`solar-calculator`).
  * Set up `backend` (Django/Flask) and `frontend` (React) project structures.
  * Configure `.gitignore` files for both.
  * Establish project management board (e.g., Trello, Jira, Asana) for task tracking.
* **1.2. Backend (Data Models & Core Logic)**
  * **1.2.1. Database Design:** Define schemas for:
    * `Products`: Solar panels (wattage, dimensions, cost), Inverters, Mounting Hardware.
    * `Quotes`: Customer info, calculated values, timestamps.
    * `FAQs`: Question, Answer, Keywords, Category.
  * **1.2.2. API Endpoints (CRUD for Products & FAQs):**
    * Develop RESTful APIs to manage solar panel, inverter, and mounting hardware data.
    * Develop RESTful APIs to manage FAQ content.
  * **1.2.3. Core Calculation Engine:**
    * Implement `usable_roof_area_calculator` (based on dimensions & obstructions).
    * Implement `panel_layout_optimizer` (determines max panels for an area).
    * Implement `system_size_calculator`.
    * Implement `annual_generation_estimator` (integrating with PVGIS or similar data source).
    * Implement `cost_estimator` (pulling from product database).
    * Implement `savings_calculator` (factoring SEG and electricity price).
    * Implement `payback_period_calculator`.
* **1.3. Frontend (Basic UI & Data Fetching)**
  * **1.3.1. Initial UI Structure:** Set up basic React components for the main calculator page (input forms, result display areas).
  * **1.3.2. Product Selection:** Implement dropdowns/selectors for solar panel and inverter models, fetching data from backend APIs.
  * **1.3.3. Basic Input Forms:** Create controlled components for roof dimensions, customer info, etc.
* **1.4. API Integration (Initial)**
  * Connect frontend to backend to fetch product data.
  * Initial integration with PVGIS or similar solar irradiance data source (backend-to-external API).

---

### Test Phase 1: Unit & Integration Testing

**Goal:** Verify the accuracy and robustness of core calculations and API functionality.

* **Unit Tests:**
  * Write comprehensive unit tests for each calculation function (e.g., `test_panel_layout_optimizer_accuracy`, `test_payback_period_calculation`).
  * Test individual API endpoints for correct responses and error handling.
* **Integration Tests:**
  * Test the flow from frontend selection of a product to backend calculation.
  * Verify that data fetched from external APIs (PVGIS) is correctly processed.
* **Code Review:** Conduct internal peer code reviews for all completed tasks.

---

## Phase 2: User Interface & Interactive Elements (MVP Core)

**Goal:** Build out the main GUI, integrate calculations, and add interactive help and basic output visualization.

### Tasks to Complete

* **2.1. Frontend (Main Calculator GUI)**
  * **2.1.1. Input Form Enhancements:**
    * Implement dynamic fields based on roof type selection.
    * Add input validation (e.g., numeric input, positive values).
    * Develop obstruction input method (simple list or coordinate entry for MVP).
  * **2.1.2. Results Display:**
    * Clearly display calculated **Number of Panels**, **Installation Time**, **Total Cost**, **Annual Savings**, and **Payback Period**.
    * Implement basic **visual representation of panel layout** (2D simplified diagram).
  * **2.1.3. Interactive Hints (`?`):**
    * Implement tooltip/popover components.
    * Populate tooltip content for key input fields and output metrics.
* **2.2. FAQ/Knowledge Base Integration**
  * **2.2.1. Backend API:** Implement API endpoint for searching and fetching FAQs.
  * **2.2.2. Frontend UI:**
    * Create the "FAQ" button/icon.
    * Design the FAQ modal/panel with a search bar and category filters.
    * Implement expandable list of questions and answers.
    * Populate the database with a **core set of initial FAQ content**.
* **2.3. Frontend-Backend Integration (Calculations)**
  * Connect input form data to backend calculation endpoints.
  * Display calculated results returned from the backend.

---

### Test Phase 2: Functional & User Acceptance Testing (UAT)

**Goal:** Ensure the GUI is functional, calculations are correctly displayed, and interactive elements work as expected.

* **Functional Testing:**
  * Test all input fields for proper behavior and validation.
  * Verify that all calculated results update correctly based on input changes.
  * Test the "Interactive Hints" (`?`) for correct content and display.
  * Verify the FAQ search, filtering, and expand/collapse functionality.
* **User Acceptance Testing (UAT - Internal Sales Team):**
  * Conduct internal UAT sessions with a small group of sales personnel.
  * Gather feedback on usability, clarity, and workflow.
  * Identify any missing information or confusing elements.
* **Performance Testing (Initial):** Basic checks to ensure the app doesn't lag significantly with common inputs.

---

## Phase 3: Quote Management & Presentation (MVP Completion & Ready for Demo)

**Goal:** Implement the "Send Quote" functionality, professional PDF generation, and the Quote Preview. **At the end of this phase, the MVP will be ready for presentation.**

### Tasks to Complete phase 3

* **3.1. Backend (Quote Generation & Email)**
  * **3.1.1. Quote Storage Logic:** Implement saving of final quotes to the database, linked to customer records.
  * **3.1.2. PDF Generation Service:**
    * Integrate a PDF generation library (e.g., ReportLab) into the backend.
    * **Design and implement the professional PDF template** with Praximous branding (logo, colors), all calculated details, panel layout, and contact information. Ensure it's clear and customer-friendly.
  * **3.1.3. Email Integration:**
    * Configure chosen email service API (SendGrid/Mailgun/AWS SES).
    * Implement logic to send the generated PDF quote as an attachment to the customer's email address.
    * Implement logic to send a copy/confirmation email to the seller.
* **3.2. Frontend (Quote Flow)**
  * **3.2.1. "Preview Quote" Button:**
    * Implement the button on the results page.
    * When clicked, fetch a preview from the backend (e.g., a temporary PDF URL, or a client-side rendering mirroring the PDF).
    * Display the preview in a new browser tab or modal for **seller review**.
  * **3.2.2. "Send Quote" Button:**
    * Implement the button.
    * Trigger backend API to generate, store, and email the quote.
    * Provide clear user feedback during the process (e.g., "Sending Quote...", "Quote Sent Successfully!").
* **3.3. Security & Environment Configuration**
  * Implement **basic API authentication** for internal use (e.g., API keys, simple token).
  * Refine `.env` files for production deployment settings (e.g., `DEBUG=False`, correct `ALLOWED_HOSTS`).
  * Set up a **staging/demo environment** ready for presentation.

---

### Test Phase 3: End-to-End & Acceptance Testing

**Goal:** Validate the entire quote generation and delivery pipeline, ensuring professional output and readiness for demonstration.

* **End-to-End Testing:**
  * Test the complete flow from user input through calculation, quote generation, preview, and **successful email delivery to both buyer and seller**.
  * Verify that PDFs are correctly generated and contain **all expected data, accurate branding, and professional formatting**.
  * Confirm emails are received, are well-formatted, and contain the correct attachments.
* **Security Testing (Basic):** Check for common vulnerabilities (e.g., input sanitization, basic authentication functionality).
* **Performance Testing:** Ensure the quote generation and email sending process is quick and non-blocking for a smooth demo.
* **Final UAT & Demo Readiness:** Conduct a final, rigorous round of UAT with sales leadership and key stakeholders. Ensure all features are stable, visually appealing, and the entire flow is smooth for a compelling presentation.

---

## 🎉 MVP READY FOR PRESENTATION 🎉

**Upon successful completion and sign-off of Phase 3, the Praximous Solar Panel Calculator MVP will be polished, functional, and ready to be presented to your potential buyer.** It will demonstrate core value proposition, ease of use, and professional output.

---

## Post-MVP / Future Phases (Conceptual - Phase 4+)

This section outlines potential future enhancements, to be implemented after the MVP is successfully deployed and validated.

* **Phase 4: Advanced Visualizations & Interaction**
  * Implement **Dynamic 3D Roof Visualizer** with drag-and-drop panel placement.
  * Integrate detailed **Shadow Analysis Simulation** (using external APIs or advanced algorithms).
  * Develop **Live Performance Monitoring Simulation** graphs (daily/monthly generation vs. consumption).
* **Phase 5: Financial & Sales Workflow Enhancements**
  * **Financial Scenarios & "What-If" Analysis** (loan options, energy inflation sliders).
  * **Multi-Option Comparison** for different system configurations.
  * Integration with **CRM systems** (e.g., Salesforce, HubSpot).
* **Phase 6: Continuous Improvement & Data Analytics**
  * **Carbon Footprint Reduction Visualizer**.
  * **Customer Profile Summary & History** (linking to stored quotes).
  * **Customer Testimonial/Case Study Integration**.
  * Dashboard for sales managers to track quote metrics, conversion rates, etc.

---
