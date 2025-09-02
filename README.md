# Dashboard App

A simple dashboard application built with Next.js, TypeScript, Redux Toolkit (RTK Query), and Tailwind CSS.

## Features

- **Item List Page**: A paginated list of items displaying ID, Title, Description, and Status.
- **Search & Filter**: Search items by title using a text input and filter by status using a dropdown.
- **Item Details**: Click on an item to open a side panel showing detailed information.
- **Add Item Form**: A form to create new items with Title, Description, and Status.

## Tech Stack

- **Frontend**: Next.js, React, TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit with RTK Query
- **UI Components**: Headless UI for accessible modals and dropdowns

## Setup and Running

1. Clone the repository:

```bash
git clone <repository-url>
cd abdullah-task
```

2. Install dependencies:

```bash
yarn install
```

3. Run the development server:

```bash
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Implementation Details

- **Mock API**: Created a simple `/api/items` endpoint that serves mock data from an in-memory array.
- **State Management**: Used Redux Toolkit with RTK Query for efficient data fetching, caching, and state management.
- **Responsive Design**: The application is fully responsive and works well on all screen sizes.
- **Loading/Error States**: Implemented proper loading, error, and empty state handling for a better user experience.
- **Accessibility**: Used Headless UI components to ensure good accessibility practices.

## Project Structure

- `/src/app`: Next.js application directory
- `/src/components`: React components organized by feature
- `/src/redux`: Redux store setup, slices, and API configuration
- `/src/types`: TypeScript type definitions
- `/src/data`: Mock data for the application

## API Endpoints

- `GET /api/items`: Get a paginated list of items with optional filters
  - Query parameters: `title`, `status`, `page`, `limit`
- `POST /api/items`: Create a new item
  - Body: `{ title, description, status }`
