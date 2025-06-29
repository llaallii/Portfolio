# Modern Portfolio Website

A stunning, responsive portfolio website built with the latest web technologies.

## 🚀 Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful icons

## ✨ Features

- **Modern Design** - Clean, professional layout with glassmorphism effects
- **Responsive** - Works perfectly on all devices
- **Animations** - Smooth scroll animations and hover effects
- **Performance** - Optimized for speed and SEO
- **Accessibility** - Built with accessibility best practices

## 🚁 3D Hero

The hero section supports interactive 3D elements rendered with WebGL. It uses
React Three Fiber and several helper libraries to handle animations, gestures,
and scene composition. The main packages are:

- `three` and `@react-three/fiber` for rendering the scene
- `@react-three/drei` for useful helpers and controls
- `@react-three/postprocessing` for visual effects
- `@react-spring/three` for spring-based animations
- `gsap` for timeline animations
- `zustand` for lightweight state management
- `leva` for on-screen controls
- `@use-gesture/react` for pointer and touch gestures
- `maath` for math utilities

## 🛠️ Getting Started

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Portfolio
```

2. Install dependencies (required before running the project):
```bash
npm install
# or
yarn install
# or
pnpm install
```
This command installs all packages, including the libraries used in the 3D hero
such as `three` and `@react-three/fiber`.

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization

### Personal Information
- Update your name, title, and description in `app/page.tsx`
- Replace social media links with your own
- Add your email address for the contact form

### Projects
- Replace the example projects with your own work
- Add project images, descriptions, and technologies used
- Update GitHub and live demo links

### Skills
- Update the skills section with your technologies
- Add or remove skills as needed

### Styling
- Customize colors in `tailwind.config.js`
- Modify the gradient backgrounds and theme colors
- Adjust animations and transitions

## 📱 Sections

- **Hero** - Introduction with name and role
- **About** - Brief description and key strengths
- **Projects** - Showcase of your best work
- **Skills** - Technologies you work with
- **Contact** - Get in touch section

### Contact Form
Set the `CONTACT_FORM_ENDPOINT` environment variable to the URL of your backend
or email service that will process form submissions. The app sends a POST
request with JSON `{ name, email, subject, message }` to this endpoint.

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with one click

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to [Netlify](https://netlify.com)

### GitHub Pages
1. Add `output: 'export'` to `next.config.js`
2. Build and export: `npm run build`
3. Deploy the `out` folder to GitHub Pages

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using Next.js and Tailwind CSS
