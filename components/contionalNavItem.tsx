"use client";
import { useTheme } from "next-themes";
import { useIsSSR } from "@react-aria/ssr";
import React from "react";
import { NavbarItem } from "@heroui/navbar";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@heroui/dropdown";
import { Button } from "@heroui/button";
import Link from "next/link";

interface ChildItem { title: string; link: string, description: string }
interface MenuItem { title: string; link: string; children?: ChildItem[] }

interface ContionalNavItemProps {
  item: MenuItem;
  index: number;
  pathname: string;
}

export default function ContionalNavItem({ item, index, pathname }: ContionalNavItemProps) {
  const className = "hidden " + (index < 3 ? "sm:block" : index < 4 ? "lg:block" : "xl:block");

  const scrolltoHash = function (element_id: string) {
  const element = document.getElementById(element_id)
    element?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  }

  const { theme, setTheme } = useTheme();
  const isSSR = useIsSSR();

  const pathStack = pathname.split("/");
  
  const buttonClass = "min-w-auto h-auto px-2.5 py-1 text-base rounded-md "+ 
    (pathStack[1] == item.link.replace("/", "") ? "bg-[#3d87a6] text-white" : "bg-transparent");

  if (item.children && item.children.length > 0) {
    return (
      <Dropdown key={item.title}>
        <NavbarItem className={className}>
          <DropdownTrigger>
            <Button className={buttonClass}>
              {item.title}
            </Button>
          </DropdownTrigger>
        </NavbarItem>
        <DropdownMenu>
          {item.children.map((dropdownitem, dropdownindex) => (
            <DropdownItem key={dropdownindex} description={dropdownitem.description} href={item.link + dropdownitem.link}>
              {dropdownitem.title}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    );
  }

  return (
    <NavbarItem className={className} key={item.title}>
      <Link href={item.link}>
        <Button className={buttonClass}>
          {item.title}
        </Button>
      </Link>
    </NavbarItem>
  );
}


