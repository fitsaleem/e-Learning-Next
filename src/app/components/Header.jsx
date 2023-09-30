"use client";

import Link from "next/link";
import Container from "@/app/components/ui/container";
import { Button } from "@/app/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/app/components/ui/sheet";
import { Bell, Menu } from "lucide-react";
import ProfileButton from "@/app/components/ui/ProfileButtom";


const Header = () => {
  const routes = [
    {
      href: "/",
      label: "Companies",
    },
    {
      href: "/",
      label: "Course",
    },
    {
      href: "/",
      label: "Booka demo",
    },
    {
      href: "/",
      label: "Internships",
    },
  ];

  return (
    <header className="sm:flex sm:justify-between py-3 px-4">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
          <div className="flex items-center">
            <Link href="/" className="ml-4 lg:ml-0">
              <h1 className="text-xl font-bold text-green">ED Review</h1>
            </Link>
          </div>

          <div className="flex items-center">
            <nav className="mx-6 items-center space-x-4 lg:space-x-6 hidden md:block">
              {routes.map((route, i) => (
                <Button  variant="ghost">
                  <Link
                    key={i}
                    href={route.href}
                    className="text-sm font-medium transition-colors"
                  >
                    {route.label}
                  </Link>
                </Button>
              ))}
            </nav>
            <Bell />
            <ProfileButton />
            <Button
              variant="outline"
              size="large"
              className="ml-2 px-8 py-3 hidden md:block bg-green text-dark-green hover:text-black hover:border-green-500"
              aria-label="login"
            >
              <Link href="./" className="text-sm font-medium transition-colors">
                Post a Review
              </Link>
            </Button>
            <Sheet>
              <SheetTrigger>
                <Menu className="h-6 md:hidden w-6" />
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                  {routes.map((route, i) => (
                    <Link
                      key={i}
                      href={route.href}
                      className="block px-2 py-1 text-lg"
                    >
                      {route.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
