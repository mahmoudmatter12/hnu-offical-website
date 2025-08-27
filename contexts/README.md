# Context Providers & Utilities

This directory contains all the context providers and utilities for the HNU Official Website.

## Setup

### 1. Wrap your app with Providers

In your root layout (`app/layout.tsx` or `app/[locale]/layout.tsx`):

```tsx
import { Providers } from "@/contexts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
```

## Available Providers

### React Query (TanStack Query)

- **QueryClient**: Configured with sensible defaults
- **Stale Time**: 1 minute
- **Retry**: 1 attempt
- **Refetch on Window Focus**: Disabled

### Theme Management

- **next-themes**: System theme detection
- **Custom Theme Context**: Additional theme utilities

### Axios Configuration

- **Base URL**: Configurable via `NEXT_PUBLIC_API_URL` environment variable
- **Timeout**: 10 seconds
- **Interceptors**: Request/response handling
- **Error Handling**: Common HTTP status codes

## Usage Examples

### Using React Query

```tsx
import { useQuery, useMutation } from "@/contexts";

function MyComponent() {
  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: () => api.get("/users").then((res) => res.data),
  });

  const mutation = useMutation({
    mutationFn: (userData) => api.post("/users", userData),
    onSuccess: () => {
      // Handle success
    },
  });
}
```

### Using Forms

```tsx
import { useForm, commonSchemas } from "@/contexts";
import { z } from "zod";

const formSchema = z.object({
  email: commonSchemas.email,
  password: commonSchemas.password,
});

function MyForm() {
  const form = useForm(formSchema);

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>{/* Form fields */}</form>
  );
}
```

### Using Theme Context

```tsx
import { useThemeContext } from "@/contexts";

function ThemeToggle() {
  const { isDark, toggleTheme } = useThemeContext();

  return <button onClick={toggleTheme}>{isDark ? "☀️" : "🌙"}</button>;
}
```

### Using Axios

```tsx
import { api } from "@/contexts";

// GET request
const getUsers = async () => {
  const response = await api.get("/users");
  return response.data;
};

// POST request
const createUser = async (userData: any) => {
  const response = await api.post("/users", userData);
  return response.data;
};
```

## Environment Variables

Create a `.env.local` file in your project root:

```env
NEXT_PUBLIC_API_URL=https://your-api-url.com
```

## Common Schemas

Pre-built validation schemas for common form fields:

- `commonSchemas.email` - Email validation
- `commonSchemas.password` - Password validation (min 8 chars)
- `commonSchemas.name` - Name validation (min 2 chars)
- `commonSchemas.phone` - Phone number validation

## Customization

### Query Client Options

Modify the QueryClient configuration in `contexts/providers.tsx`

### Axios Interceptors

Customize request/response handling in `lib/axios.ts`

### Theme Options

Adjust theme behavior in `contexts/theme-context.tsx`
