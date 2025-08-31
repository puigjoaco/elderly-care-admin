"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Activity,
  Camera,
  FileText,
  Clock,
  Search,
  Filter,
  Eye,
  Download,
  CheckCircle,
  AlertCircle,
  Calendar,
  Image
} from "lucide-react"

const recentActivities = [
  {
    id: 1,
    type: "photo",
    title: "Foto de desayuno",
    patient: "María García",
    caregiver: "Ana López",
    timestamp: "2024-01-15 08:30",
    status: "verified",
    details: "Desayuno completo con medicación",
    hasImage: true
  },
  {
    id: 2,
    type: "questionnaire",
    title: "Cuestionario diario completado",
    patient: "Juan Pérez",
    caregiver: "Carmen Rodríguez",
    timestamp: "2024-01-15 09:15",
    status: "completed",
    details: "Estado general: Bueno, Peso: 72kg",
    hasImage: false
  },
  {
    id: 3,
    type: "medication",
    title: "Medicación administrada",
    patient: "Rosa Jiménez",
    caregiver: "Laura Sánchez",
    timestamp: "2024-01-15 10:00",
    status: "verified",
    details: "Insulina NPH 10UI - Con foto de verificación",
    hasImage: true
  },
  {
    id: 4,
    type: "observation",
    title: "Nota de observación",
    patient: "Pedro Martínez",
    caregiver: "Ana López",
    timestamp: "2024-01-15 11:30",
    status: "pending_review",
    details: "Paciente muestra signos de confusión matutina",
    hasImage: false
  },
  {
    id: 5,
    type: "photo",
    title: "Foto de peso",
    patient: "Carmen Ruiz",
    caregiver: "María Hernández",
    timestamp: "2024-01-15 12:00",
    status: "verified",
    details: "Peso registrado: 65.5kg",
    hasImage: true
  },
  {
    id: 6,
    type: "meal",
    title: "Almuerzo registrado",
    patient: "Antonio López",
    caregiver: "Carmen Rodríguez",
    timestamp: "2024-01-15 13:00",
    status: "verified",
    details: "Almuerzo completo consumido",
    hasImage: true
  },
  {
    id: 7,
    type: "hygiene",
    title: "Higiene personal",
    patient: "María García",
    caregiver: "Ana López",
    timestamp: "2024-01-15 14:30",
    status: "completed",
    details: "Baño y cambio de ropa completado",
    hasImage: false
  },
  {
    id: 8,
    type: "therapy",
    title: "Sesión de fisioterapia",
    patient: "Juan Pérez",
    caregiver: "Carmen Rodríguez",
    timestamp: "2024-01-15 15:00",
    status: "completed",
    details: "Ejercicios de movilidad - 30 minutos",
    hasImage: true
  }
]

const activityStats = {
  total: 156,
  photos: 87,
  questionnaires: 24,
  medications: 45,
  verified: 142
}

export default function ActivitiesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState("all")

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "photo":
        return <Camera className="h-4 w-4 text-blue-600" />
      case "questionnaire":
        return <FileText className="h-4 w-4 text-purple-600" />
      case "medication":
        return <Activity className="h-4 w-4 text-green-600" />
      case "observation":
        return <Eye className="h-4 w-4 text-amber-600" />
      case "meal":
        return <Image className="h-4 w-4 text-orange-600" />
      case "hygiene":
        return <Activity className="h-4 w-4 text-cyan-600" />
      case "therapy":
        return <Activity className="h-4 w-4 text-pink-600" />
      default:
        return <Activity className="h-4 w-4 text-gray-600" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "verified":
        return (
          <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
            <CheckCircle className="mr-1 h-3 w-3" />
            Verificado
          </Badge>
        )
      case "completed":
        return <Badge variant="secondary">Completado</Badge>
      case "pending_review":
        return (
          <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200">
            <AlertCircle className="mr-1 h-3 w-3" />
            Pendiente
          </Badge>
        )
      default:
        return <Badge>{status}</Badge>
    }
  }

  const getActivityTypeLabel = (type: string) => {
    const labels: { [key: string]: string } = {
      photo: "Fotografía",
      questionnaire: "Cuestionario",
      medication: "Medicación",
      observation: "Observación",
      meal: "Comida",
      hygiene: "Higiene",
      therapy: "Terapia"
    }
    return labels[type] || type
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Registro de Actividades</h1>
            <p className="text-muted-foreground">
              Historial completo de todas las actividades registradas
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Calendar className="mr-2 h-4 w-4" />
              Hoy
            </Button>
            <Button>
              <Download className="mr-2 h-4 w-4" />
              Exportar
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-5">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Hoy</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{activityStats.total}</div>
              <p className="text-xs text-muted-foreground">Actividades</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Fotos</CardTitle>
              <Camera className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{activityStats.photos}</div>
              <p className="text-xs text-muted-foreground">Capturadas</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Cuestionarios</CardTitle>
              <FileText className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{activityStats.questionnaires}</div>
              <p className="text-xs text-muted-foreground">Completados</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Medicaciones</CardTitle>
              <Activity className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{activityStats.medications}</div>
              <p className="text-xs text-muted-foreground">Registradas</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Verificadas</CardTitle>
              <CheckCircle className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{activityStats.verified}</div>
              <p className="text-xs text-muted-foreground">Con validación</p>
            </CardContent>
          </Card>
        </div>

        {/* Activities List */}
        <Card>
          <CardHeader>
            <CardTitle>Actividades Recientes</CardTitle>
            <CardDescription>
              Registro detallado de todas las actividades del día
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Search and Filter */}
            <div className="flex items-center gap-4 mb-6">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Buscar actividades..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9"
                />
              </div>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Filtrar
              </Button>
            </div>

            {/* Timeline */}
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={activity.id} className="relative">
                  {index < recentActivities.length - 1 && (
                    <div className="absolute left-6 top-12 h-full w-0.5 bg-border" />
                  )}
                  
                  <div className="flex gap-4">
                    {/* Icon */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border bg-background">
                      {getActivityIcon(activity.type)}
                    </div>

                    {/* Content */}
                    <Card className="flex-1">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="font-semibold">{activity.title}</h4>
                            <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                              <Badge variant="outline" className="text-xs">
                                {getActivityTypeLabel(activity.type)}
                              </Badge>
                              <span>•</span>
                              <Clock className="h-3 w-3" />
                              <span>{activity.timestamp}</span>
                            </div>
                          </div>
                          {getStatusBadge(activity.status)}
                        </div>

                        <p className="text-sm text-muted-foreground mb-2">
                          {activity.details}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-sm">
                            <div className="flex items-center gap-2">
                              <Avatar className="h-6 w-6">
                                <AvatarFallback className="text-xs">
                                  {activity.patient.split(' ').map(n => n[0]).join('')}
                                </AvatarFallback>
                              </Avatar>
                              <span className="text-muted-foreground">{activity.patient}</span>
                            </div>
                            <span className="text-muted-foreground">•</span>
                            <span className="text-muted-foreground">Por {activity.caregiver}</span>
                          </div>

                          <div className="flex items-center gap-2">
                            {activity.hasImage && (
                              <Button variant="ghost" size="sm">
                                <Image className="mr-2 h-4 w-4" />
                                Ver foto
                              </Button>
                            )}
                            <Button variant="ghost" size="sm">
                              <Eye className="mr-2 h-4 w-4" />
                              Detalles
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="mt-6 text-center">
              <Button variant="outline">
                Cargar más actividades
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}