// app/head.tsx
export default function Head() {
  return (
    <>
      <title>Golden Sol | Mobile Spray Tanning</title>
      <meta
        name="description"
        content="Luxury mobile spray tans in Scottsdale, AZ."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function () {
              const theme = localStorage.theme;
              if (theme === "dark" || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add("dark");
              } else {
                document.documentElement.classList.remove("dark");
              }
            })();
          `,
        }}
      />
    </>
  );
}
