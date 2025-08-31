'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import {
  Users,
  Heart,
  Pill,
  Clock,
  Activity,
  AlertCircle,
  CheckCircle,
  TrendingUp,
  TrendingDown,
  Calendar,
  Bell,
  Camera,
  FileText,
  ArrowUpRight,
  ArrowDownRight,
  MoreVertical,
  Shield,
  Eye,
  Sparkles
} from "lucide-react"

const statsCards = [
  {
    title: "Total Pacientes",
    value: "24",
    description: "3 nuevos este mes",
    icon: Heart,
    trend: "+12%",
    trendUp: true,
    color: "from-violet-600 to-purple-600",
    iconColor: "text-violet-600",
    bgColor: "bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30"
  },
  {
    title: "Cuidadoras Activas",
    value: "8",
    description: "2 en turno ahora",
    icon: Users,
    trend: "100%",
    trendUp: true,
    color: "from-blue-600 to-indigo-600",
    iconColor: "text-blue-600",
    bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30"
  },
  {
    title: "Medicamentos Hoy",
    value: "47/52",
    description: "90% completados",
    icon: Pill,
    trend: "+5%",
    trendUp: true,
    color: "from-emerald-600 to-teal-600",
    iconColor: "text-emerald-600",
    bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30",
    progress: 90
  },
  {
    title: "Alertas Críticas",
    value: "2",
    description: "Requieren atención",
    icon: AlertCircle,
    trend: "-33%",
    trendUp: false,
    color: "from-amber-600 to-orange-600",
    iconColor: "text-amber-600",
    bgColor: "bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30",
    urgent: true
  }
]

const recentActivities = [
  {
    id: 1,
    type: "medication",
    title: "Medicamento administrado",
    description: "María García - Losartán 50mg",
    time: "Hace 5 minutos",
    status: "success",
    caregiver: "Ana López",
    avatar: "/api/placeholder/32/32",
    icon: Pill,
    color: "bg-green-100 dark:bg-green-900/30 text-green-600"
  },
  {
    id: 2,
    type: "attendance",
    title: "Entrada registrada",
    description: "Carmen Rodríguez ingresó al turno",
    time: "Hace 15 minutos",
    status: "info",
    location: "Casa de Juan Pérez",
    avatar: "/api/placeholder/32/32",
    icon: Clock,
    color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600"
  },
  {
    id: 3,
    type: "alert",
    title: "Medicamento no administrado",
    description: "Pedro Martínez - Metformina pendiente",
    time: "Hace 30 minutos",
    status: "warning",
    caregiver: "Pendiente",
    icon: AlertCircle,
    color: "bg-amber-100 dark:bg-amber-900/30 text-amber-600"
  },
  {
    id: 4,
    type: "photo",
    title: "Registro fotográfico",
    description: "Desayuno registrado - Rosa Jiménez",
    time: "Hace 1 hora",
    status: "success",
    caregiver: "Laura Sánchez",
    avatar: "/api/placeholder/32/32",
    icon: Camera,
    color: "bg-purple-100 dark:bg-purple-900/30 text-purple-600"
  },
  {
    id: 5,
    type: "questionnaire",
    title: "Evaluación completada",
    description: "Estado general óptimo - Antonio Ruiz",
    time: "Hace 2 horas",
    status: "success",
    caregiver: "María Hernández",
    avatar: "/api/placeholder/32/32",
    icon: FileText,
    color: "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600"
  }
]

const upcomingTasks = [
  {
    id: 1,
    time: "14:00",
    task: "Administrar Omeprazol",
    patient: "María García",
    caregiver: "Ana López",
    priority: "high",
    timeLeft: "en 30 min"
  },
  {
    id: 2,
    time: "14:30",
    task: "Control de peso",
    patient: "Juan Pérez",
    caregiver: "Carmen Rodríguez",
    priority: "medium",
    timeLeft: "en 1 hora"
  },
  {
    id: 3,
    time: "15:00",
    task: "Terapia física",
    patient: "Rosa Jiménez",
    caregiver: "Laura Sánchez",
    priority: "low",
    timeLeft: "en 1.5 horas"
  },
  {
    id: 4,
    time: "16:00",
    task: "Merienda y medicación",
    patient: "Pedro Martínez",
    caregiver: "Ana López",
    priority: "high",
    timeLeft: "en 2.5 horas"
  }
]

const caregiverPerformance = [
  { name: "Ana López", score: 98, tasks: 142, onTime: 98 },
  { name: "Carmen Rodríguez", score: 95, tasks: 128, onTime: 95 },
  { name: "Laura Sánchez", score: 92, tasks: 115, onTime: 91 },
  { name: "María Hernández", score: 88, tasks: 102, onTime: 87 }
]

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="space-y-8">
        {/* Animated Header */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 p-8 text-white">
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,rgba(255,255,255,0.6))]" />
          <div className="relative z-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="h-5 w-5 text-yellow-300" />
                  <span className="text-sm font-medium text-violet-100">
                    Panel de Control
                  </span>
                </div>
                <h1 className="text-4xl font-bold tracking-tight">
                  Buenos días, Dr. González
                </h1>
                <p className="mt-2 text-violet-100">
                  Todo está funcionando correctamente. 2 alertas requieren su atención.
                </p>
              </div>
              <div className="flex gap-3">
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border-white/20"
                >
                  <Bell className="mr-2 h-4 w-4" />
                  Ver Alertas
                </Button>
                <Button 
                  size="lg"
                  className="bg-white text-violet-600 hover:bg-white/90"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Generar Reporte
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {statsCards.map((stat) => (
            <Card 
              key={stat.title} 
              className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`absolute inset-0 opacity-10 ${stat.bgColor}`} />
              <CardHeader className="relative flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <div className={`p-2.5 rounded-xl bg-gradient-to-br ${stat.color} shadow-lg`}>
                  <stat.icon className="h-4 w-4 text-white" />
                </div>
              </CardHeader>
              <CardContent className="relative">
                <div className="flex items-baseline justify-between">
                  <div className="text-3xl font-bold">{stat.value}</div>
                  {stat.trend && (
                    <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                      stat.trendUp 
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' 
                        : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                    }`}>
                      {stat.trendUp ? (
                        <ArrowUpRight className="h-3 w-3" />
                      ) : (
                        <ArrowDownRight className="h-3 w-3" />
                      )}
                      {stat.trend}
                    </div>
                  )}
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {stat.description}
                </p>
                {stat.progress && (
                  <Progress value={stat.progress} className="mt-3 h-1.5" />
                )}
                {stat.urgent && (
                  <Badge 
                    variant="destructive" 
                    className="mt-3 animate-pulse bg-gradient-to-r from-red-600 to-orange-600"
                  >
                    Requiere atención inmediata
                  </Badge>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-7">
          {/* Recent Activities with Enhanced Design */}
          <Card className="lg:col-span-4 border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl">Actividades Recientes</CardTitle>
                  <CardDescription>
                    Monitoreo en tiempo real del sistema
                  </CardDescription>
                </div>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div 
                    key={activity.id} 
                    className="group relative flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                  >
                    {index !== recentActivities.length - 1 && (
                      <div className="absolute left-7 top-12 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />
                    )}
                    <div className={`mt-0.5 p-2 rounded-lg ${activity.color}`}>
                      <activity.icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold">{activity.title}</p>
                        <span className="text-xs text-muted-foreground">
                          {activity.time}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {activity.description}
                      </p>
                      <div className="flex items-center gap-4 text-xs">
                        {activity.caregiver && (
                          <div className="flex items-center gap-1.5">
                            <Avatar className="h-5 w-5">
                              <AvatarFallback className="text-[10px]">
                                {activity.caregiver.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <span className="text-muted-foreground">{activity.caregiver}</span>
                          </div>
                        )}
                        {activity.location && (
                          <span className="text-muted-foreground">📍 {activity.location}</span>
                        )}
                      </div>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                Ver todas las actividades
              </Button>
            </CardContent>
          </Card>

          {/* Tasks & Performance */}
          <div className="lg:col-span-3 space-y-6">
            {/* Upcoming Tasks */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Próximas Tareas</CardTitle>
                  <Badge variant="secondary" className="bg-violet-100 dark:bg-violet-900/30">
                    {upcomingTasks.length} pendientes
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  {upcomingTasks.map((task) => (
                    <div 
                      key={task.id} 
                      className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex flex-col items-center">
                          <span className="text-xs font-bold text-muted-foreground">
                            {task.time}
                          </span>
                          <span className="text-[10px] text-muted-foreground">
                            {task.timeLeft}
                          </span>
                        </div>
                        <div className="h-8 w-0.5 bg-gray-200 dark:bg-gray-700" />
                        <div>
                          <p className="text-sm font-medium">{task.task}</p>
                          <p className="text-xs text-muted-foreground">
                            {task.patient} • {task.caregiver}
                          </p>
                        </div>
                      </div>
                      <Badge
                        className={
                          task.priority === "high"
                            ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                            : task.priority === "medium"
                            ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                            : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400"
                        }
                      >
                        {task.priority === "high" ? "Alta" : 
                         task.priority === "medium" ? "Media" : "Baja"}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Top Performers */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Mejores Cuidadoras</CardTitle>
                  <Shield className="h-4 w-4 text-emerald-600" />
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  {caregiverPerformance.map((caregiver, index) => (
                    <div key={caregiver.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`flex h-8 w-8 items-center justify-center rounded-full font-bold text-xs ${
                          index === 0 ? 'bg-gradient-to-br from-yellow-400 to-amber-500 text-white' :
                          index === 1 ? 'bg-gradient-to-br from-gray-300 to-gray-400 text-white' :
                          index === 2 ? 'bg-gradient-to-br from-orange-400 to-orange-500 text-white' :
                          'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                        }`}>
                          {index + 1}
                        </div>
                        <div>
                          <p className="text-sm font-medium">{caregiver.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {caregiver.tasks} tareas • {caregiver.onTime}% a tiempo
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-emerald-600">
                          {caregiver.score}%
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Actions with Gradient */}
        <Card className="border-0 shadow-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 dark:from-violet-950/10 dark:via-purple-950/10 dark:to-pink-950/10" />
          <CardHeader className="relative">
            <CardTitle>Acciones Rápidas</CardTitle>
            <CardDescription>
              Acceso directo a las funciones más utilizadas
            </CardDescription>
          </CardHeader>
          <CardContent className="relative">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
              <Button 
                variant="outline" 
                className="h-28 flex-col gap-3 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm hover:shadow-lg hover:scale-105 transition-all duration-200 border-violet-200 dark:border-violet-800"
              >
                <div className="p-3 rounded-full bg-gradient-to-br from-violet-500 to-purple-500">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm font-medium">Agregar Paciente</span>
              </Button>
              <Button 
                variant="outline" 
                className="h-28 flex-col gap-3 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm hover:shadow-lg hover:scale-105 transition-all duration-200 border-blue-200 dark:border-blue-800"
              >
                <div className="p-3 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500">
                  <Pill className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm font-medium">Nueva Medicación</span>
              </Button>
              <Button 
                variant="outline" 
                className="h-28 flex-col gap-3 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm hover:shadow-lg hover:scale-105 transition-all duration-200 border-purple-200 dark:border-purple-800"
              >
                <div className="p-3 rounded-full bg-gradient-to-br from-purple-500 to-pink-500">
                  <Camera className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm font-medium">Ver Fotos</span>
              </Button>
              <Button 
                variant="outline" 
                className="h-28 flex-col gap-3 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm hover:shadow-lg hover:scale-105 transition-all duration-200 border-amber-200 dark:border-amber-800"
              >
                <div className="p-3 rounded-full bg-gradient-to-br from-amber-500 to-orange-500">
                  <Bell className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm font-medium">Notificaciones</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}