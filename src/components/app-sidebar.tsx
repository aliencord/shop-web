"use client"

import * as React from "react"
import {
  BookOpen,
  Command,
  LifeBuoy,
  Send,
  LayoutDashboard,
  Users as UsersIcon,
  Ban,
  Files as FilesIcon,
  Store,
  Globe,
  ShieldCheck,
  MessageSquare,
  Key,
  History,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  // Platform group
  navMain: [
    {
      title: "Dashboard",
      url: "/admin",
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: "Users",
      url: "/admin/user",
      icon: UsersIcon,
    },
    {
      title: "Bans",
      url: "#",
      icon: Ban,
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      // Keep existing documentation sub-items
      items: [
        { title: "Introduction", url: "#" },
        { title: "Get Started", url: "#" },
        { title: "Tutorials", url: "#" },
        { title: "Changelog", url: "#" },
      ],
    },
    {
      title: "Files",
      url: "#",
      icon: FilesIcon,
    },
  ],
  // Settings group (renamed from Projects)
  settings: [
    {
      title: "Store",
      url: "#",
      icon: Store,
    },
    {
      title: "Site",
      url: "#",
      icon: Globe,
      items: [
        { title: "SEO", url: "#" },
        { title: "Redirects", url: "#" },
        { title: "Legal", url: "#" },
      ],
    },
    {
      title: "Permissions",
      url: "/admin/permissions",
      icon: ShieldCheck,
    },
    {
      title: "Discord",
      url: "#",
      icon: MessageSquare,
    },
    {
      title: "API Keys",
      url: "/admin/api-keys",
      icon: Key,
    },
    {
      title: "Audit Log",
      url: "#",
      icon: History,
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Amity Rust</span>
                  <span className="truncate text-xs">Premium Rust</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} label="Platform" />
        <NavMain items={data.settings} label="Settings" />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild size="sm">
              <a href="/support" className="text-xs">
                Support Center
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
