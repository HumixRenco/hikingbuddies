import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

interface PageLayoutProps {
  children: React.ReactNode;
  mainClassName?: string;
}

const PageLayout = ({ children, mainClassName }: PageLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className={cn("flex-1", mainClassName)}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
