# Naman Jain - 3D DevOps Portfolio

Welcome to the repository for my personal portfolio website. This project showcases my skills and experience as a DevOps Engineer, presented in a modern, interactive, and visually appealing format. The portfolio is a single-page application featuring a dynamic 3D hero section, detailed sections about my professional background, and a working contact form.


## ✨ Features

-   **Interactive 3D Hero:** A captivating hero section built with **Three.js** and animated with **GSAP** for a memorable first impression.
-   **Fully Responsive:** The layout is optimized for all screen sizes, from mobile phones to desktop monitors.
-   **Smooth Scrolling:** Clean navigation between sections with smooth scrolling behavior.
-   **Comprehensive Sections:**
    -   **About Me:** A personal introduction and professional summary.
    -   **Experience:** A timeline of my work history and key responsibilities.
    -   **Skills:** A categorized list of my technical skills with associated icons.
    -   **Education:** Details about my academic background.
    -   **Strengths & Languages:** Highlighting my core competencies and linguistic abilities.
    -   **Contact:** A fully functional contact form to get in touch.
-   **Modern UI/UX:** Built with sleek and modern UI components from **ShadCN UI**.

## 🚀 Technologies Used

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logo=shadcnui&logoColor=white" alt="Shadcn/UI">
  <img src="https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white" alt="Three.js">
  <img src="https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=gsap&logoColor=white" alt="GSAP">
  <img src="https://img.shields.io/badge/React_Hook_Form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white" alt="React Hook Form">
  <img src="https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge&logo=zod&logoColor=white" alt="Zod">
</p>

-   **Framework:** [Next.js](https://nextjs.org/) (App Router)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components:** [ShadCN UI](https://ui.shadcn.com/)
-   **3D & Animation:** [Three.js](https://threejs.org/) & [GSAP](httpss://gsap.com/)
-   **Form Handling:** [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/) for validation
-   **Icons:** [Lucide React](https://lucide.dev/guide/packages/lucide-react)

## 📂 Project Structure

The project follows a standard Next.js App Router structure:

```
/
├── src/
│   ├── app/                # Main application routes and layout
│   ├── components/         # Reusable React components (UI, sections, etc.)
│   │   ├── sections/       # Components for each portfolio section
│   │   ├── three/          # Three.js scene component
│   │   └── ui/             # ShadCN UI components
│   ├── lib/                # Shared libraries, data, and utilities
│   │   ├── data.ts         # Centralized data for portfolio content
│   │   └── actions.ts      # Next.js server actions (for contact form)
│   └── public/             # Static assets
└── tailwind.config.ts      # Tailwind CSS configuration
```

## 🛠️ Getting Started

To run this project locally, follow these steps:

### Prerequisites

-   Node.js (v18 or later recommended)
-   npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Running the Development Server

Execute the following command to start the development server:

```bash
npm run dev
```

Open [http://localhost:9002](http://localhost:9002) in your browser to see the result.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
