import * as React from "react"
import {
  BookOpen,
  Send,
  Settings2,
  Activity,
  ChartColumn,
  Waves
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
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
  user: {
    name: "Macius",
    email: "macius@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Treningi",
      url: "#",
      icon: Activity,
      items: [
        {
          title: "Dodaj",
          url: "#",
        },
        {
          title: "Historia",
          url: "#",
        },
      ],
    },
    {
      title: "Statystyki",
      url: "#",
      icon: ChartColumn,
      isActive: true,
      items: [
        {
          title: "Tygodniowe",
          url: "#",
        },
        {
          title: "Miesięczne",
          url: "#",
        },
        {
          title: "Ogólne",
          url: "#",
        },
      ],
    },
    {
      title: "Szablony",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Nowy szablon",
          url: "#",
        },
        {
          title: "Pierwszy szablon",
          url: "#",
        },
        {
          title: "Drugi szablon",
          url: "#",
        },
      ],
    },
    {
      title: "Ustawienia",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Ogólne",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
  projects: [
    {
      name: "Ostatni trening",
      url: "#",
      icon: Activity,
    },
    {
      name: "Przedostatni trening",
      url: "#",
      icon: Activity,
    },
    {
      name: "I tak dalej",
      url: "#",
      icon: Activity,
    },
  ],
}

export function AppSidebar({
  ...props
}) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div
                  className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Waves className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Swimply</span>
                  <span className="truncate text-xs">Swimming tracker</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
