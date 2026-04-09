# AppointmentRequests

A small Rails + React app for searching nutritionists, requesting appointments, and managing nutritionist appointment requests.

## What this app includes

- Guest search page with query and location filters
- Nutritionist list with services, location, duration, and schedule button
- Appointment request modal that collects guest name, email, service, date, and time
- Nutritionist dashboard for reviewing pending requests
- Accept / reject actions with email notifications
- Business rules enforced:
  - one pending request per guest email at a time
  - accepted appointments reject overlapping pending requests for the same nutritionist
- Tailwind-based React UI
- Locale files for backend translations

## Pages

- `GET /` — Guest search page
- `GET /dashboard` — Nutritionist request dashboard

## Requirements

- Ruby 3.3.5
- Rails 8.1.x
- PostgreSQL
- Node.js and NPM

## Setup

1. Install dependencies:

   ```bash
   bundle install
   npm install
   ```

2. Create and prepare the database:

   ```bash
   bin/rails db:create db:migrate db:seed
   ```

3. Start the application locally:

   ```bash
   bin/dev
   ```

4. Open the app:
   - guest search page: `http://localhost:3000`
   - nutritionist dashboard: `http://localhost:3000/dashboard`

## Running tests

### Backend tests

Run the full test suite:

```bash
bundle exec rspec
```

Run a targeted group:

```bash
bundle exec rspec spec/models/appointment_request_spec.rb
bundle exec rspec spec/services/appointment_requests/accept_request_spec.rb
bundle exec rspec spec/requests/api/appointment_requests_spec.rb
```

### React tests

Run all React component tests:

```bash
npm test
```

Run tests in watch mode:

```bash
npm test -- --watch
```

Run tests for a specific component:

```bash
npm test -- --testPathPattern=Button.test.jsx
```

Run tests with coverage report:

```bash
npm test -- --coverage
```

## Important routes

### Guest-facing API

- `GET /api/nutritionists?query=&location=` — search nutritionists by name, service name, and location (default `Braga` when blank)
- `POST /api/appointment_requests` — create a new appointment request
- `PATCH /api/appointment_requests/:id` — accept or reject a request

### Nutritionist API

- `GET /api/appointment_requests?nutritionist_id=1&status=pending` — list requests for a nutritionist

## Technical notes

- The search page is implemented in `app/javascript/components/SearchApp`
- The nutritionist dashboard is implemented in `app/javascript/components/DashboardApp`
- Appointment creation is handled by `app/javascript/components/AppointmentModal`
- The backend uses service objects for appointment creation and acceptance logic
- The app enforces one pending request per guest email with a partial unique index and transactional invalidation
- Overlapping appointment rejection is interval-based using request start/end times

## Advanced notes

- The app includes backend locale files in `config/locales/en.yml` and `config/locales/pt.yml`
- The React UI has React i18n integration with support for English and Portuguese. Locale files can be found in `app/javascript/i18n/locales/en.json` and `app/javascript/i18n/locales/pt.json`
- Email delivery is configured for background delivery via `deliver_later` and `solid_queue` in production
