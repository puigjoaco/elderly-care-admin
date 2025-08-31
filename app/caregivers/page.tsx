"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  UserPlus,
  Search,
  MoreVertical,
  Edit,
  Trash,
  Eye,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  Star
} from "lucide-react"

const caregivers = [
  {
    id: 1,
    name: "Ana López García",
    email: "ana.lopez@ejemplo.com",
    phone: "555-0201",
    status: "active",
    shift: "Mañana",
    patients: ["María García", "Pedro Martínez"],
    rating: 4.8,
    experience: "5 años",
    certifications: ["Primeros Auxilios", "Cuidados Geriátricos"],
    currentLocation: "Casa de María García",
    lastActivity: "Hace 10 minutos"
  },
  {
    id: 2,
    name: "Carmen Rodríguez Pérez",
    email: "carmen.rodriguez@ejemplo.com",
    phone: "555-0202",
    status: "active",
    shift: "Tarde",
    patients: ["Juan Pérez", "Antonio López"],
    rating: 4.9,
    experience: "8 años",
    certifications: ["Enfermería", "Fisioterapia"],
    currentLocation: "Casa de Juan Pérez",
    lastActivity: "Hace 30 minutos"
  },
  {
    id: 3,
    name: "Laura Sánchez Martín",
    email: "laura.sanchez@ejemplo.com",
    phone: "555-0203",
    status: "inactive",
    shift: "Noche",
    patients: ["Rosa Jiménez"],
    rating: 4.7,
    experience: "3 años",
    certifications: ["Primeros Auxilios"],
    currentLocation: "-",
    lastActivity: "Hace 2 horas"
  },
  {
    id: 4,
    name: "María Hernández López",
    email: "maria.hernandez@ejemplo.com",
    phone: "555-0204",
    status: "active",
    shift: "Mañana",
    patients: ["Carmen Ruiz"],
    rating: 5.0,
    experience: "10 años",
    certifications: ["Enfermería", "Nutrición", "Psicología"],
    currentLocation: "Casa de Carmen Ruiz",
    lastActivity: "Hace 5 minutos"
  },
  {
    id: 5,
    name: "Patricia González Díaz",
    email: "patricia.gonzalez@ejemplo.com",
    phone: "555-0205",
    status: "on_leave",
    shift: "Rotativo",
    patients: [],
    rating: 4.6,
    experience: "2 años",
    certifications: ["Primeros Auxilios"],
    currentLocation: "-",
    lastActivity: "Hace 3 días"
  }
]

export default function CaregiversPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredCaregivers = caregivers.filter(caregiver =>
    caregiver.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    caregiver.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">Activa</Badge>
      case "inactive":
        return <Badge variant="secondary">Inactiva</Badge>
      case "on_leave":
        return <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200">De baja</Badge>
      default:
        return <Badge>{status}</Badge>
    }
  }

  const getShiftBadge = (shift: string) => {
    const colors = {
      "Mañana": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      "Tarde": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
      "Noche": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      "Rotativo": "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
    return <Badge className={colors[shift as keyof typeof colors] || ""}>{shift}</Badge>
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Cuidadoras</h1>
            <p className="text-muted-foreground">
              Gestiona el equipo de cuidadoras y sus asignaciones
            </p>
          </div>
          <Button>
            <UserPlus className="mr-2 h-4 w-4" />
            Agregar Cuidadora
          </Button>
        </div>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Cuidadoras</CardTitle>
              <UserPlus className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{caregivers.length}</div>
              <p className="text-xs text-muted-foreground">En el sistema</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Activas Ahora</CardTitle>
              <Clock className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {caregivers.filter(c => c.status === "active").length}
              </div>
              <p className="text-xs text-muted-foreground">En turno actual</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Calificación Promedio</CardTitle>
              <Star className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {(caregivers.reduce((acc, c) => acc + c.rating, 0) / caregivers.length).toFixed(1)}
              </div>
              <p className="text-xs text-muted-foreground">De 5.0</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pacientes Cubiertos</CardTitle>
              <MapPin className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {new Set(caregivers.flatMap(c => c.patients)).size}
              </div>
              <p className="text-xs text-muted-foreground">Con asignación</p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Table */}
        <Card>
          <CardHeader>
            <CardTitle>Lista de Cuidadoras</CardTitle>
            <CardDescription>
              Administra el personal de cuidados y sus turnos
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 mb-4">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Buscar cuidadoras..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9"
                />
              </div>
              <Button variant="outline">
                <Calendar className="mr-2 h-4 w-4" />
                Ver Horarios
              </Button>
            </div>

            {/* Table */}
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Cuidadora</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead>Turno</TableHead>
                    <TableHead>Pacientes</TableHead>
                    <TableHead>Calificación</TableHead>
                    <TableHead>Experiencia</TableHead>
                    <TableHead>Ubicación Actual</TableHead>
                    <TableHead className="text-right">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredCaregivers.map((caregiver) => (
                    <TableRow key={caregiver.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarFallback>
                              {caregiver.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{caregiver.name}</div>
                            <div className="text-xs text-muted-foreground flex items-center gap-2">
                              <Phone className="h-3 w-3" />
                              {caregiver.phone}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{getStatusBadge(caregiver.status)}</TableCell>
                      <TableCell>{getShiftBadge(caregiver.shift)}</TableCell>
                      <TableCell>
                        <div className="text-sm">
                          {caregiver.patients.length > 0 ? (
                            <>
                              {caregiver.patients.length} asignados
                              <div className="text-xs text-muted-foreground">
                                {caregiver.patients.slice(0, 2).join(", ")}
                                {caregiver.patients.length > 2 && "..."}
                              </div>
                            </>
                          ) : (
                            <span className="text-muted-foreground">Sin asignar</span>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                          <span className="font-medium">{caregiver.rating}</span>
                        </div>
                      </TableCell>
                      <TableCell>{caregiver.experience}</TableCell>
                      <TableCell>
                        <div className="text-sm">
                          {caregiver.currentLocation !== "-" ? (
                            <>
                              <div className="flex items-center gap-1">
                                <MapPin className="h-3 w-3" />
                                {caregiver.currentLocation}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {caregiver.lastActivity}
                              </div>
                            </>
                          ) : (
                            <span className="text-muted-foreground">-</span>
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              <Eye className="mr-2 h-4 w-4" />
                              Ver perfil
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Edit className="mr-2 h-4 w-4" />
                              Editar
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Calendar className="mr-2 h-4 w-4" />
                              Ver horario
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Mail className="mr-2 h-4 w-4" />
                              Enviar mensaje
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">
                              <Trash className="mr-2 h-4 w-4" />
                              Eliminar
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}