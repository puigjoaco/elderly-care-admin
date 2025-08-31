"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Clock,
  MapPin,
  LogIn,
  LogOut,
  Calendar,
  Users,
  CheckCircle,
  XCircle,
  AlertCircle,
  Camera
} from "lucide-react"

const attendanceRecords = [
  {
    id: 1,
    caregiver: "Ana López",
    patient: "María García",
    location: "Calle Principal 123",
    checkIn: "08:00",
    checkOut: "14:00",
    status: "active",
    duration: "6h en turno",
    photos: { entry: true, exit: false },
    gpsValidated: true
  },
  {
    id: 2,
    caregiver: "Carmen Rodríguez",
    patient: "Juan Pérez",
    location: "Av. Libertad 456",
    checkIn: "07:45",
    checkOut: null,
    status: "active",
    duration: "6h 15min",
    photos: { entry: true, exit: false },
    gpsValidated: true
  },
  {
    id: 3,
    caregiver: "Laura Sánchez",
    patient: "Rosa Jiménez",
    location: "Plaza Mayor 789",
    checkIn: "14:00",
    checkOut: null,
    status: "late",
    duration: "15min tarde",
    photos: { entry: true, exit: false },
    gpsValidated: false
  },
  {
    id: 4,
    caregiver: "María Hernández",
    patient: "Carmen Ruiz",
    location: "Av. del Sol 654",
    checkIn: "08:30",
    checkOut: "12:30",
    status: "completed",
    duration: "4 horas",
    photos: { entry: true, exit: true },
    gpsValidated: true
  },
  {
    id: 5,
    caregiver: "Patricia González",
    patient: "Antonio López",
    location: "Calle Luna 987",
    checkIn: null,
    checkOut: null,
    status: "absent",
    duration: "-",
    photos: { entry: false, exit: false },
    gpsValidated: false
  }
]

const todayStats = {
  total: 8,
  present: 6,
  late: 1,
  absent: 1,
  avgDuration: "5.5h"
}

export default function AttendancePage() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">En turno</Badge>
      case "completed":
        return <Badge variant="secondary">Completado</Badge>
      case "late":
        return <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200">Tardanza</Badge>
      case "absent":
        return <Badge variant="destructive">Ausente</Badge>
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
            <h1 className="text-3xl font-bold tracking-tight">Control de Asistencia</h1>
            <p className="text-muted-foreground">
              Monitoreo en tiempo real de entradas y salidas
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Calendar className="mr-2 h-4 w-4" />
              Ver Historial
            </Button>
            <Button>
              <Clock className="mr-2 h-4 w-4" />
              Registrar Manual
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-5">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Programado</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{todayStats.total}</div>
              <p className="text-xs text-muted-foreground">Cuidadoras hoy</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Presentes</CardTitle>
              <CheckCircle className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{todayStats.present}</div>
              <p className="text-xs text-muted-foreground">A tiempo</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Tardanzas</CardTitle>
              <AlertCircle className="h-4 w-4 text-amber-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-amber-600">{todayStats.late}</div>
              <p className="text-xs text-muted-foreground">Con retraso</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Ausencias</CardTitle>
              <XCircle className="h-4 w-4 text-red-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">{todayStats.absent}</div>
              <p className="text-xs text-muted-foreground">No presentadas</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Duración Promedio</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{todayStats.avgDuration}</div>
              <p className="text-xs text-muted-foreground">En turno</p>
            </CardContent>
          </Card>
        </div>

        {/* Live Attendance Grid */}
        <Card>
          <CardHeader>
            <CardTitle>Asistencia en Tiempo Real</CardTitle>
            <CardDescription>
              {new Date().toLocaleDateString('es-ES', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {attendanceRecords.map((record) => (
                <Card key={record.id} className={
                  record.status === 'absent' ? 'border-red-200 dark:border-red-900' :
                  record.status === 'late' ? 'border-amber-200 dark:border-amber-900' : ''
                }>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="text-xs">
                            {record.caregiver.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-sm">{record.caregiver}</p>
                          <p className="text-xs text-muted-foreground">{record.patient}</p>
                        </div>
                      </div>
                      {getStatusBadge(record.status)}
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs">{record.location}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <LogIn className="h-3 w-3 text-green-600" />
                          <span>{record.checkIn || '-'}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <LogOut className="h-3 w-3 text-red-600" />
                          <span>{record.checkOut || '-'}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t">
                        <div className="flex items-center gap-2">
                          {record.gpsValidated ? (
                            <Badge variant="outline" className="text-xs">
                              <MapPin className="mr-1 h-3 w-3" />
                              GPS OK
                            </Badge>
                          ) : (
                            <Badge variant="outline" className="text-xs text-red-600">
                              <MapPin className="mr-1 h-3 w-3" />
                              GPS Error
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-1">
                          {record.photos.entry ? (
                            <Camera className="h-3 w-3 text-green-600" />
                          ) : (
                            <Camera className="h-3 w-3 text-gray-300" />
                          )}
                          {record.photos.exit ? (
                            <Camera className="h-3 w-3 text-green-600" />
                          ) : (
                            <Camera className="h-3 w-3 text-gray-300" />
                          )}
                        </div>
                      </div>

                      {record.duration !== "-" && (
                        <div className="text-center pt-2">
                          <span className="text-xs text-muted-foreground">
                            {record.duration}
                          </span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}