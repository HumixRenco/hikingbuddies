import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import UserProfileSidebar from "./UserProfileSidebar";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "@/i18n/LanguageContext";
import logo from "@/assets/logo.png";
import logoMobile from "@/assets/logo-mobile.png";
import CreateEventDialog from "@/components/create-event/CreateEventDialog";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [createEventOpen, setCreateEventOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Hiking Buddies" className="h-8 hidden sm:block" />
          <img src={logoMobile} alt="Hiking Buddies" className="h-8 sm:hidden" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/events" className="text-foreground hover:text-primary transition-colors font-medium">
            {t("nav.events")}
          </Link>
          <Link to="/routes" className="text-foreground hover:text-primary transition-colors font-medium">
            {t("nav.routes")}
          </Link>
          <Link to="#" className="text-foreground hover:text-primary transition-colors font-medium">
            {t("nav.community")}
          </Link>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Search className="h-5 w-5" />
          </Button>
          <LanguageSwitcher />
          <Button
            variant="cta"
            onClick={() => setCreateEventOpen(true)}
          >
            {t("nav.addEvent")}
          </Button>
          <Avatar 
            className="h-9 w-9 cursor-pointer rounded-md"
            onClick={() => setProfileOpen(true)}
          >
            <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>

        {/* Mobile Actions */}
        <div className="flex md:hidden items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Search className="h-5 w-5" />
          </Button>
          <LanguageSwitcher />
          <Avatar 
            className="h-9 w-9 cursor-pointer rounded-md"
            onClick={() => setProfileOpen(true)}
          >
            <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border animate-fade-in">
          <div className="container py-4 space-y-4">
            <Link to="/events" className="block text-foreground hover:text-primary transition-colors font-medium py-2">
              {t("nav.events")}
            </Link>
            <Link to="/routes" className="block text-foreground hover:text-primary transition-colors font-medium py-2">
              {t("nav.routes")}
            </Link>
            <Link to="#" className="block text-foreground hover:text-primary transition-colors font-medium py-2">
              {t("nav.community")}
            </Link>
            <Button
              variant="cta"
              className="w-full"
              onClick={() => {
                setCreateEventOpen(true);
                setMobileMenuOpen(false);
              }}
            >
              {t("nav.addEvent")}
            </Button>
          </div>
        </div>
      )}

      {/* User Profile Sidebar */}
      <UserProfileSidebar open={profileOpen} onOpenChange={setProfileOpen} />

      {/* Create Event Dialog */}
      <CreateEventDialog open={createEventOpen} onOpenChange={setCreateEventOpen} />
    </header>
  );
};

export default Navbar;