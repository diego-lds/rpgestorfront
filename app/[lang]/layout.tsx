import "../assets/scss/globals.scss";
import "../assets/scss/theme.scss";
import { Inter } from "next/font/google";
import { siteConfig } from "@/config/site";
import Providers from "@/provider/providers";
import "simplebar-react/dist/simplebar.min.css";
import TanstackProvider from "@/provider/providers.client";
import AuthProvider from "@/provider/auth.provider";
import "flatpickr/dist/themes/light.css";
import DirectionProvider from "@/provider/direction.provider";
import { Toaster } from "sonner";

const inter = Inter({
	subsets: ["latin"],
	weight: ["400", "700", "800"],
});
export const metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
};

export default function RootLayout({ children, params: { lang } }: { children: React.ReactNode; params: { lang: string } }) {
	return (
		<html className={inter.className}>
			<body suppressHydrationWarning={true} className="rpgestor-app">
				<AuthProvider>
					<TanstackProvider>
						<Providers>
							<DirectionProvider lang={lang}>{children}</DirectionProvider>
						</Providers>
					</TanstackProvider>
				</AuthProvider>
				<Toaster />
			</body>
		</html>
	);
}
