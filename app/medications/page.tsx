"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Pill,
  Plus,
  Clock,
  AlertCircle,
  CheckCircle,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Filter,
  Bell,
  Timer,
  XCircle
} from "lucide-react"

const medicationSchedule = [
  {
    time: "08:00",
    medications: [
      {
        id: 1,
        patient: "María García",
        medicine: "Losartán 50mg",
        status: "completed",
        caregiver: "Ana López",
        notes: "Administrado con desayuno",
        critical: false
      },
      {
        id: 2,
        patient: "Juan Pérez",
        medicine: "Metformina 850mg",
        status: "completed",
        caregiver: "Carmen Rodríguez",
        notes: "",
        critical: false
      }
    ]
  },
  {
    time: "10:00",
    medications: [
      {
        id: 3,
        patient: "Rosa Jiménez",
        medicine: "Insulina NPH 10UI",
        status: "completed",
        caregiver: "Laura Sánchez",
        notes: "Control glucosa: 120 mg/dl",
        critical: true
      }
    ]
  },
  {
    time: "12:00",
    medications: [
      {
        id: 4,
        patient: "Pedro Martínez",
        medicine: "Omeprazol 20mg",
        status: "pending",
        caregiver: "Ana López",
        notes: "",
        critical: false
      },
      {
        id: 5,
        patient: "Carmen Ruiz",
        medicine: "Donepezilo 10mg",
        status: "pending",
        caregiver: "María Hernández",
        notes: "Medicamento para Alzheimer",
        critical: true
      }
    ]
  },
  {
    time: "14:00",
    medications: [
      {
        id: 6,
        patient: "María García",
        medicine: "Atorvastatina 20mg",
        status: "pending",
        caregiver: "Ana López",
        notes: "",
        critical: false
      },
      {
        id: 7,
        patient: "Antonio López",
        medicine: "Warfarina 5mg",
        status: "pending",
        caregiver: "Carmen Rodríguez",
        notes: "Control INR necesario",
        critical: true
      }
    ]
  },
  {
    time: "16:00",
    medications: [
      {
        id: 8,
        patient: "Juan Pérez",
        medicine: "Paracetamol 500mg",
        status: "missed",
        caregiver: "Carmen Rodríguez",
        notes: "Paciente rechazó medicación",
        critical: false
      }
    ]
  },
  {
    time: "18:00",
    medications: [
      {
        id: 9,
        patient: "Rosa Jiménez",
        medicine: "Insulina Glargina 15UI",
        status: "upcoming",
        caregiver: "Laura Sánchez",
        notes: "",
        critical: true
      },
      {
        id: 10,
        patient: "Pedro Martínez",
        medicine: "Amlodipino 5mg",
        status: "upcoming",
        caregiver: "Ana López",
        notes: "",
        critical: false
      }
    ]
  },
  {
    time: "20:00",
    medications: [
      {
        id: 11,
        patient: "Carmen Ruiz",
        medicine: "Quetiapina 25mg",
        status: "upcoming",
        caregiver: "María Hernández",
        notes: "Para dormir",
        critical: false
      }
    ]
  },
  {
    time: "22:00",
    medications: [
      {
        id: 12,
        patient: "María García",
        medicine: "Zolpidem 10mg",
        status: "upcoming",
        caregiver: "Ana López",
        notes: "Solo si es necesario",
        critical: false
      }
    ]
  }
]

const stats = {
  total: 12,
  completed: 3,
  pending: 4,
  missed: 1,
  upcoming: 4,
  critical: 4
}

export default function MedicationsPage() {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [filterStatus, setFilterStatus] = useState<string | null>(null)

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "pending":
        return <Clock className="h-4 w-4 text-amber-600" />
      case "missed":
        return <XCircle className="h-4 w-4 text-red-600" />
      case "upcoming":
        return <Timer className="h-4 w-4 text-blue-600" />
      default:
        return <Clock className="h-4 w-4 text-gray-400" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">Completado</Badge>
      case "pending":
        return <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200">Pendiente</Badge>
      case "missed":
        return <Badge variant="destructive">No administrado</Badge>
      case "upcoming":
        return <Badge variant="secondary">Próximo</Badge>
      default:
        return <Badge>{status}</Badge>
    }
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Medicamentos</h1>
            <p className="text-muted-foreground">
              Control y seguimiento de medicaciones programadas
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Bell className="mr-2 h-4 w-4" />
              Configurar Alertas
            </Button>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Nueva Medicación
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Hoy</CardTitle>
              <Pill className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.total}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completados</CardTitle>
              <CheckCircle className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{stats.completed}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pendientes</CardTitle>
              <Clock className="h-4 w-4 text-amber-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-amber-600">{stats.pending}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">No Admin.</CardTitle>
              <XCircle className="h-4 w-4 text-red-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">{stats.missed}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Próximos</CardTitle>
              <Timer className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{stats.upcoming}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Críticos</CardTitle>
              <AlertCircle className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">{stats.critical}</div>
            </CardContent>
          </Card>
        </div>

        {/* Date Navigation */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button variant="outline" size="icon">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <div className="text-center">
                  <CardTitle>Horario de Medicaciones</CardTitle>
                  <CardDescription>
                    {selectedDate.toLocaleDateString('es-ES', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </CardDescription>
                </div>
                <Button variant="outline" size="icon">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Calendar className="mr-2 h-4 w-4" />
                  Seleccionar Fecha
                </Button>
                <Button variant="outline" size="sm">
                  <Filter className="mr-2 h-4 w-4" />
                  Filtrar
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {/* Schedule Timeline */}
            <div className="space-y-6">
              {medicationSchedule.map((timeSlot) => (
                <div key={timeSlot.time} className="relative">
                  {/* Time Label */}
                  <div className="flex items-start gap-4">
                    <div className="w-20 flex-shrink-0">
                      <div className="text-lg font-semibold">{timeSlot.time}</div>
                    </div>
                    
                    {/* Medications for this time */}
                    <div className="flex-1 space-y-3">
                      {timeSlot.medications.map((med) => (
                        <Card key={med.id} className={med.status === 'missed' ? 'border-red-200 dark:border-red-900' : ''}>
                          <CardContent className="p-4">
                            <div className="flex items-start justify-between">
                              <div className="flex items-start gap-3">
                                {getStatusIcon(med.status)}
                                <div className="space-y-1">
                                  <div className="flex items-center gap-2">
                                    <span className="font-semibold">{med.medicine}</span>
                                    {med.critical && (
                                      <Badge variant="destructive" className="text-xs">
                                        Crítico
                                      </Badge>
                                    )}
                                  </div>
                                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Avatar className="h-5 w-5">
                                      <AvatarFallback className="text-xs">
                                        {med.patient.split(' ').map(n => n[0]).join('')}
                                      </AvatarFallback>
                                    </Avatar>
                                    <span>{med.patient}</span>
                                    <span>•</span>
                                    <span>{med.caregiver}</span>
                                  </div>
                                  {med.notes && (
                                    <p className="text-sm text-muted-foreground mt-1">
                                      {med.notes}
                                    </p>
                                  )}
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                {getStatusBadge(med.status)}
                                {med.status === 'pending' && (
                                  <Button size="sm">
                                    Marcar Completado
                                  </Button>
                                )}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}