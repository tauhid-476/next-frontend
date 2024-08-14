'use client';
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
    className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >

      {/* first no subItems */}
      <Menu setActive={setActive}>
       <Link href={"/"}>
       <MenuItem setActive={setActive} active={active}
        item="Home">
                
       </MenuItem>
       </Link>

       {/* second subItems */}
       <MenuItem setActive={setActive} active={active}
        item="Our courses"
       >
        {/* using hovered link instead of link */}
       <div className="flex flex-col space-y-4 text-sm">
       <HoveredLink href="/courses">All courses</HoveredLink>
       <HoveredLink href="/basic-music-theory">Basic music theory</HoveredLink>
       <HoveredLink href="/advanced-composition">Advanced composition</HoveredLink>
       <HoveredLink href="/song-writting">Song writting</HoveredLink>
       <HoveredLink href="/music-production">Music Production</HoveredLink>
       </div>

       </MenuItem>
      

      {/* third no subitems */}
       <Link href={"/contact"}>
       <MenuItem setActive={setActive} active={active}
        item="Contact us">
                
       </MenuItem>
       </Link>
      </Menu>
    </div>
  )
}

export default Navbar