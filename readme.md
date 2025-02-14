# EVCarbon & Offset Platform

![EVCarbon & Offset](public/images/banner.png)

> **Note**: This is a rapid prototype developed to validate ideas and gather feedback. It demonstrates how modern development tools and AI can help quickly bring concepts to life for validation.

A next-generation platform connecting carbon credit buyers with real-world emission reduction through EV adoption in the gig economy sector.

## 🎯 Project Context

This project addresses critical challenges in Indonesia's urban transportation sector:

### Problem Statement

- **High Urban Transport Emissions**: Motorcycles are a major contributor to urban pollution, particularly in dense cities like Jakarta
- **High Upfront EV Costs**: The initial cost of electric motorcycles creates adoption barriers for gig economy workers
- **Limited Charging Infrastructure**: Inadequate charging stations hinder widespread EV adoption
- **Market Hesitation**: General reluctance to adopt EVs due to various constraints

### Solution Approach

The platform creates a sustainable impact by:
- Facilitating direct funding for EV transition
- Connecting carbon credit buyers with real emission reduction
- Supporting charging infrastructure development
- Providing incentives for early adopters

> **Reference Implementation**: A mock of the carbon-trading platform can be found in the [carbon-rider-connect repository](https://github.com/meong1234/carbon-rider-connect)

## 🌟 Features

- 🚀 Real-time carbon reduction tracking
- 🔄 Direct EV transition funding system
- 📊 Advanced analytics dashboard
- 💳 Carbon credit marketplace
- 📱 Responsive design for all devices
- ⚡ Built with Next.js 13 App Router

## 🛠️ Tech Stack

- **Framework:** [Next.js 13](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [Shadcn/ui](https://ui.shadcn.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide Icons](https://lucide.dev/)
- **Deployment:** [Vercel](https://vercel.com)

## 📁 Project Structure

```
carbon-v2/
├── app/
│   ├── page.tsx                # Home page
│   └── layout.tsx             # Root layout
├── components/
│   ├── ui/                    # Reusable UI components
│   ├── layout/               # Layout components
│   └── home/                 # Home page sections
├── public/
│   └── images/               # Static images
└── docs/                     # Documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/meong1234/ev-carbon-offset.git
cd ev-carbon-offset
```

2. Install dependencies:
```bash
pnpm install
```

3. Create a `.env.local` file:
```bash
cp .env.example .env.local
```

4. Start the development server:
```bash
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

## 🔧 Development

### Commands

- `pnpm dev` - Start development server
- `pnpm build` - Create production build
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier

### Code Style

- We use ESLint and Prettier for code formatting
- Follow the [Next.js Style Guide](https://nextjs.org/docs/basic-features/eslint)
- Use TypeScript for type safety

## 📚 Documentation

- [Executive Summary](docs/executive_summary.md)
- [Problem Analysis](docs/problem_analysis.md)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js Team](https://nextjs.org/)
- [Vercel](https://vercel.com)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn/ui](https://ui.shadcn.com/)

## 📧 Contact

Project Link: [https://github.com/meong1234/ev-carbon-offset](https://github.com/meong1234/ev-carbon-offset)

---

Made with ❤️ by EVCarbon & Offset Team

> Built rapidly with modern tools and AI assistance to validate real-world solutions for Indonesia's urban mobility challenges.
