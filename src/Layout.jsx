import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
 
export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="max-w-prose p-6 lg:text-lg">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}