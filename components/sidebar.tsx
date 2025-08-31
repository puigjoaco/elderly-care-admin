"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Users,
  UserPlus,
  Pill,
  Calendar,
  FileText,
  BarChart3,
  Settings,
  LogOut,
  Menu,
  X,
  Clock,
  Heart,
  Activity
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { ThemeToggle } from "./theme-toggle"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"

const sidebarItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Pacientes",
    href: "/patients",
    icon: Heart,
  },
  {
    title: "Cuidadoras",
    href: "/caregivers",
    icon: UserPlus,
  },
  {
    title: "Medicamentos",
    href: "/medications",
    icon: Pill,
  },
  {
    title: "Asistencia",
    href: "/attendance",
    icon: Clock,
  },
  {
    title: "Reportes",
    href: "/reports",
    icon: FileText,
  },
  {
    title: "Análisis",
    href: "/analytics",
    icon: BarChart3,
  },
  {
    title: "Actividades",
    href: "/activities",
    icon: Activity,
  },
  {
    title: "Configuración",
    href: "/settings",
    icon: Settings,
  },
]

export function Sidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  
  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-40 h-screen w-64 bg-card border-r transform transition-transform duration-200 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full",
          "md:translate-x-0"
        )}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex h-16 items-center justify-between px-6 border-b">
            <Link href="/dashboard" className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-primary" />
              <span className="text-lg font-semibold">Care System</span>
            </Link>
            <ThemeToggle />
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 px-3 py-4">
            {sidebarItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                >
                  <div
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    )}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.title}
                  </div>
                </Link>
              )
            })}
          </nav>

          {/* Footer */}
          <div className="border-t p-3">
            <Button
              variant="ghost"
              className="w-full justify-start gap-3"
              onClick={handleSignOut}
            >
              <LogOut className="h-4 w-4" />
              Cerrar sesión
            </Button>
          </div>
        </div>
      </aside>
    </>
  )
}