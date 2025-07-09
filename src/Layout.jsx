import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
 
export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="max-w-screen pl-6 lg:text-lg">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}
