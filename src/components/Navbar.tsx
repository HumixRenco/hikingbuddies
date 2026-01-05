import { Button } from "@/components/ui/button";
import { Search, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container flex items-center justify-between h-16">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
          <span className="text-2xl">🏔️</span>
          <span className="hidden sm:inline">Hiking Buddies</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
            Events
          </a>
          <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
            Routes
          </a>
          <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
            Community
          </a>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="cta">Add event</Button>
        </div>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border animate-fade-in">
          <div className="container py-4 space-y-4">
            <a href="#" className="block text-foreground hover:text-primary transition-colors font-medium py-2">
              Events
            </a>
            <a href="#" className="block text-foreground hover:text-primary transition-colors font-medium py-2">
              Routes
            </a>
            <a href="#" className="block text-foreground hover:text-primary transition-colors font-medium py-2">
              Community
            </a>
            <Button variant="cta" className="w-full">Add event</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
