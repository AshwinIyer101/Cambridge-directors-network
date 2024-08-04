"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Bio-tech cluster</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[350px] lg:w-[550px] lg:grid-cols-4">
              <li className="col-span-1">
                <NavigationMenuLink asChild>
                  <Link
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    href="Biotech-directors-cluster.html"
                  >
                    <div className="text-sm font-medium leading-none">Cluster overview</div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li className="col-span-1">
                <NavigationMenuLink asChild>
                  <Link
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    href="Bio-tech-mini-cluster-1.html"
                  >
                    <div className="text-sm font-medium leading-none">Sub-cluster 1</div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    href="Bio-tech-mini-cluster-2.html"
                  >
                    <div className="text-sm font-medium leading-none">Sub-cluster 2</div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li className="col-span-1">
                <NavigationMenuLink asChild>
                  <Link
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    href="Bio-tech-offshoot-1.html"
                  >
                    <div className="text-sm font-medium leading-none">Offshoot 1</div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    href="Bio-tech-offshoot-2.html"
                  >
                    <div className="text-sm font-medium leading-none">Offshoot 2</div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    href="Bio-tech-offshoot-3.html"
                  >
                    <div className="text-sm font-medium leading-none">Offshoot 3</div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    href="Bio-tech-offshoot-4.html"
                  >
                    <div className="text-sm font-medium leading-none">Offshoot 4</div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li className="col-span-1">
                <NavigationMenuLink asChild>
                  <Link
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    href="bio-tech-key-individuals-cluster.html"
                  >
                    <div className="text-sm font-medium leading-none">Directors cluster</div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Hi-tech cluster</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[350px] lg:w-[550px] lg:grid-cols-4">
              <li className="col-span-1">
                <NavigationMenuLink asChild>
                  <Link
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    href="Hi-tech-directors-cluster.html"
                  >
                    <div className="text-sm font-medium leading-none">Cluster overview</div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li className="col-span-1">
                <NavigationMenuLink asChild>
                  <Link
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    href="Hi-tech-mini-cluster-1.html"
                  >
                    <div className="text-sm font-medium leading-none">Sub-cluster 1</div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    href="Hi-tech-mini-cluster-4.html"
                  >
                    <div className="text-sm font-medium leading-none">Sub-cluster 2</div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li className="col-span-1">
                <NavigationMenuLink asChild>
                  <Link
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    href="Hi-tech-offshoot-1.html"
                  >
                    <div className="text-sm font-medium leading-none">Offshoot 1</div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    href="Hi-tech-offshoot-4.html"
                  >
                    <div className="text-sm font-medium leading-none">Offshoot 2</div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    href="Hi-tech-offshoot-3.html"
                  >
                    <div className="text-sm font-medium leading-none">Offshoot 3</div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    href="Hi-tech-offshoot-2.html"
                  >
                    <div className="text-sm font-medium leading-none">Offshoot 4</div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    href="Hi-tech-offshoot-8.html"
                  >
                    <div className="text-sm font-medium leading-none">Offshoot 5</div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li className="col-span-1">
                <NavigationMenuLink asChild>
                  <Link
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    href="hi-tech-key-individuals-cluster.html"
                  >
                    <div className="text-sm font-medium leading-none">Directors cluster</div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href="#"
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
