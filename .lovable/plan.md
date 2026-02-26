
# Admin Dashboard Panel

## Overview
Create a frontend-only admin dashboard at `/admin` with a login modal, sidebar navigation, and two main views: **View Events** and **Create Event**. No backend -- all data stays in local state for now.

## Flow
1. User navigates to `/admin`
2. A login modal appears (hardcoded ID/password check, e.g. `admin` / `sanskriti2025`)
3. On successful login, the modal closes and the dashboard is shown
4. Sidebar has two options: "View Events" and "Create Event"
5. Session persists via React state (refreshing logs out)

## Pages and Components

### 1. Admin Login Modal
- Full-screen overlay modal that blocks access until authenticated
- Fields: Username (text input) and Password (password input)
- Hardcoded credentials check (frontend only)
- Error message on wrong credentials
- Styled to match the dark theme with gold accents

### 2. Admin Layout (`/admin`)
- Uses the existing `SidebarProvider` + `Sidebar` components from shadcn
- Sidebar with two menu items:
  - **View Events** (list icon) -- default view
  - **Create Event** (plus icon)
- `SidebarTrigger` in a top header bar for mobile collapse
- Dark themed to match the site

### 3. View Events Panel
- Displays all events from `src/data/events.ts` in a table/card grid
- Shows: title, type, deadline, coordinator count
- Each row has Edit/Delete action buttons (non-functional for now, just UI)

### 4. Create Event Form
- Form with all fields matching the `EventData` interface:
  - Title, Subtitle, Slug (auto-generated from title)
  - Type (dropdown: ON-STAGE / OFF-STAGE)
  - Banner image upload field (UI only)
  - Guidelines (dynamic list -- add/remove items)
  - Prelims: date, time, venue
  - Finals: date, time, venue
  - Coordinators (dynamic list -- add/remove name + phone pairs)
  - Registration deadline
- Submit button adds to local state (toast confirmation)

## Technical Details

### New Files
- `src/pages/AdminDashboard.tsx` -- main layout with sidebar, login gate, and content routing
- `src/components/admin/AdminLogin.tsx` -- login modal component
- `src/components/admin/ViewEvents.tsx` -- events table/list view
- `src/components/admin/CreateEvent.tsx` -- event creation form

### Modified Files
- `src/App.tsx` -- add `/admin` route

### Routing
- Internal tab switching via React state (not sub-routes), keeping it simple
- Sidebar selection controls which panel is shown

### Styling
- Reuses the existing dark theme variables (deep purple background, gold accents)
- Uses existing shadcn components: Dialog, Input, Button, Select, Table, Sidebar, Toast
- Form inputs styled with the dark card background and gold focus rings
