import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider, themeInitScript } from "../components/theme";

export const metadata: Metadata = {
  title: "IDK Portal",
  description: "IDK Portal — standalone repo outside wwwroot"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
