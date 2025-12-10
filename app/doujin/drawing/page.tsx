'use client'
import { usePathname } from 'next/navigation'

import DoujinPageContent from "@/components/doujin-page-content";

export default function DoujinDrawPage() {
  const pathname = usePathname()
  return <DoujinPageContent pathname={pathname} />;
}
