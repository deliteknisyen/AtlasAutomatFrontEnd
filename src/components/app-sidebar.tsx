import * as React from "react"

import { SearchForm } from "@/components/search-form"
import { VersionSwitcher } from "@/components/version-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      title: "Müşteri Yönetimi",
      url: "#",
      items: [
        {
          title: "Müşteriler",
          url: "#",
        },
        {
          title: "Satışlar",
          url: "#",
        },
      ],
    },
    {
      title: "Makine Yönetimi",
      url: "#",
      items: [
        {
          title: "Makinalar",
          url: "/dashboard/machines",
        },
        {
          title: "Arıza Kayıtları",
          url: "#",
        }
      ],
    },
    {
      title: "Ürün Yönetimi",
      url: "#",
      items: [
        {
          title: "Ürünler",
          url: "#",
        },
        {
          title: "Tedarikçiler",
          url: "#",
        },
        {
          title: "Depo Yönetimi",
          url: "#",
        }
      ],
    },
    {
      title: "Personel Yönetimi",
      url: "#",
      items: [
        {
          title: "Personeller",
          url: "#",
        },
        {
          title: "Görev Kartları",
          url: "#",
        },
        {
          title: "Ödemeler",
          url: "#",
        }
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <VersionSwitcher
          versions={data.versions}
          defaultVersion={data.versions[0]}
        />
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.isActive}>
                      <a href={item.url}>{item.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
