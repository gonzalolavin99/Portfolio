"use client";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { AlignJustify, Link } from "lucide-react";


function Header() {

    
  return (
    <div>
      <header className="flex h-16 w-full shrink-0 items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button>
              <AlignJustify className="h-6 w-6" />
              <span className="sr-only">Toggle Navigation Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <Link className="mr-6 hidden lg:flex" href={'#'}>
            <h3>JOBSCO</h3>
            </Link>
            <div className="grid gap-2 py-6">

            </div>
          </SheetContent>
        </Sheet>
      </header>
    </div>
  );
}

export default Header;
