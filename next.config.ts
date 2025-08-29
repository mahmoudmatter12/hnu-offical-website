import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  /* config options here */
  images: {
    domains: ['via.placeholder.com', 'images.unsplash.com'],
  },
};

export default withNextIntl(nextConfig);
