import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
 
export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-[70%] ml-auto">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}