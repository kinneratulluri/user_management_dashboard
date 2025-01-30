# React User Management Dashboard

A sleek and functional user management dashboard built with React, showcasing CRUD operations through simulated API interactions with JSONPlaceholder.

## Demo

🚀 Live Demo: [User Management Dashboard](https://kinneratulluri.github.io/user_management_dashboard/)

## Features

*   **View:** Display of paginated user lists with ID, Name, Email, and Department.
*   **Add:** Seamless addition of new users (simulated persistence).
*   **Edit:** Intuitive editing of existing user information.
*   **Delete:** Quick removal of users from the list.
*   **Modern UI:** Clean, responsive design with gradients, shadows, and hover effects.
*   **Robust Error Handling:** Clear error messages for API issues.
*   **Client-Side Validation:** Basic form validation to ensure data integrity.
*   **Notification:** Real-time notifications for actions (e.g., user added, edited, or deleted) using React Toastify.

## Technologies

*   React
*   Fetch API
*   CSS (with gradients, shadows, and transitions)
*   JSONPlaceholder (mock REST API)

## Setup

1.  Clone the repository:

    ```sh
    git clone https://github.com/kinneratulluri/user_management_dashboard.git
    ```

2.  Navigate to the project:

    ```sh
    cd user_management_dashboard
    ```

3.  Install dependencies:

    ```sh
    npm install
    ```

4.  Start the development server:

    ```sh
    npm start
    ```

5.  Open your browser at `http://localhost:3000`.

## Deployment

To deploy this project on GitHub Pages:

1. Ensure you have the correct `homepage` in `package.json`:
    ```json
    "homepage": "https://kinneratulluri.github.io/user_management_dashboard"
    ```

2. Run the following commands:

    ```sh
    npm install gh-pages --save-dev
    npm run deploy
    ```

Your app will be live at:  
🔗 [https://kinneratulluri.github.io/user_management_dashboard/](https://kinneratulluri.github.io/user_management_dashboard/)

## Challenges & Learnings

*   **API Interaction and State Management:** Managing state updates after simulated API calls for adding, editing, and deleting users.
*   **Unique ID Generation:** Implemented robust ID generation using `Math.max` in the absence of a backend.
*   **UI/UX Refinement:** Used CSS gradients, shadows, and transitions for a modern UI.
*   **Notification Integration:** Integrated Toastify for real-time notifications.

## Future Enhancements

*   **Advanced State Management:** Use Redux, Context API, or Zustand for better scalability.
*   **Comprehensive API Error Handling:** Improve logging and user-friendly error messages.
*   **Robust Form Validation:** Integrate a validation library like Yup or Zod.
*   **Real Backend Integration:** Connect to a backend API and database.
*   **Testing:** Implement unit and integration tests.
*   **UI Component Library:** Use Material UI or Tailwind for enhanced styling.

## Author

👩‍💻 **Kinnera Tulluri**  
📌 [GitHub](https://github.com/kinneratulluri)  

---

