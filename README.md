## EShop

### Description
A simple web app that allow users to view orders, add items to them and pay.

Deployed at [https://eshop-test-kappa.vercel.app](https://eshop-test-kappa.vercel.app)

### Getting Started
Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### Dependencies
- Next.js
- React
- Tailwind CSS
- Zustand
- Axios
- React Hook Form
- shadcn

### Known Issues
- The api is showing a CORS error when trying to fetch the orders. This is because the api is not configured to allow requests from the client. To fix this, the api should be configured to allow requests from the client. **The only order that can be fetched is the number 1430**.