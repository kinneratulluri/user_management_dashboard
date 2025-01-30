# React User Management Dashboard

A polished and efficient user management interface created with React, demonstrating CRUD functionalities through simulated API calls using JSONPlaceholder.

## Demo

🚀 Live Demo: [User Management Dashboard](https://kinneratulluri.github.io/user_management_dashboard/)

## Features

*   **User Display:** Presenting a paginated list of users, showing their ID, Name, Email, and Department.
*   **Add New User:** Effortlessly adding new users, with simulated data persistence.
*   **Edit User Info:** Smooth and user-friendly editing of existing user details.
*   **Remove User:** Easy removal of users from the list.
*   **Modern UI:**A sleek and responsive design featuring gradients, shadows, and hover effects for a contemporary look.
*   **Error Management:** Clear, informative error messages in case of API issues.
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

*   **API Interaction and State Management:** Handling state updates effectively after simulating API calls for adding, editing, and deleting users.
*   **Generating Unique IDs:**  Developed a custom solution for unique ID generation using Math.max in the absence of a backend.
*   **UI/UX Enhancements:** Leveraged CSS gradients, shadows, and transitions to create a modern and visually appealing user interface.
*   **Notification Setup:** Integrated React Toastify for real-time action notifications.

## Future Enhancements

*   **Advanced State Management:** Use Redux, Context API, or Zustand for better scalability.
*   **Improved API Error Handling:** Improve logging and user-friendly error messages.
*   **Enhanced Form Validation:** Integrate a validation library like Yup or Zod.
*   **Backend Integration:** Connect to a backend API and database.
*   **Testing:** Implement unit and integration tests.
*   **UI Component Library:** Use Material UI or Tailwind for enhanced styling.

## Author

👩‍💻 **Kinnera Tulluri**  
📌 [GitHub](https://github.com/kinneratulluri)  

---

