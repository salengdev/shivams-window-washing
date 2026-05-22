export const metadata = {
  title: "Shivam's Window Washing | Calgary Window Cleaning & Gutter Cleaning",
  description:
    "Professional window washing and gutter cleaning in Calgary and surrounding areas. Local, fast, and reliable service with free estimates.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}