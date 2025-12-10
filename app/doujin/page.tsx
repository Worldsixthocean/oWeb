'use client'
import { usePathname } from 'next/navigation'

import DoujinPageContent from "@/components/doujin-page-content";

export default function DoujinPage() {
  const pathname = usePathname()
  return <DoujinPageContent pathname={pathname} />;
}
