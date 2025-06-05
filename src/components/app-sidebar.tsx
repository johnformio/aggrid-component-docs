import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
  } from "@/components/ui/sidebar"
  import { Sparkles } from "lucide-react";
import {getMdxNavigationItems} from "@/lib/mdx-navigation"
import { useMemo } from "react"
  
  export function AppSidebar() {
    const menuItems = useMemo(() => getMdxNavigationItems(), []);
    return (
      <Sidebar>
        <SidebarHeader />
        <SidebarContent>
          <SidebarGroup >
            <SidebarMenu>
            {menuItems.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild>
                    <a href={item.href}>
                      <Sparkles />
                      <span>{item.name}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
            </SidebarGroup>
          
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
    )
  }