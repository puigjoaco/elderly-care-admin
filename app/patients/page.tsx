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
  Plus,
  Search,
  MoreVertical,
  Edit,
  Trash,
  Eye,
  FileText,
  Download,
  UserPlus,
  Heart,
  AlertCircle
} from "lucide-react"

const patients = [
  {
    id: 1,
    name: "María García López",
    age: 78,
    condition: "Demencia moderada",
    caregiver: "Ana López",
    status: "stable",
    lastVisit: "2024-01-15",
    medications: 5,
    photo: null,
    emergencyContact: "Juan García (Hijo) - 555-0123",
    address: "Calle Principal 123"
  },
  {
    id: 2,
    name: "Juan Pérez Rodríguez",
    age: 82,
    condition: "Movilidad reducida",
    caregiver: "Carmen Rodríguez",
    status: "attention",
    lastVisit: "2024-01-14",
    medications: 3,
    photo: null,
    emergencyContact: "María Pérez (Hija) - 555-0124",
    address: "Av. Libertad 456"
  },
  {
    id: 3,
    name: "Rosa Jiménez Martín",
    age: 75,
    condition: "Diabetes tipo 2",
    caregiver: "Laura Sánchez",
    status: "stable",
    lastVisit: "2024-01-15",
    medications: 4,
    photo: null,
    emergencyContact: "Carlos Jiménez (Hijo) - 555-0125",
    address: "Plaza Mayor 789"
  },
  {
    id: 4,
    name: "Pedro Martínez Silva",
    age: 80,
    condition: "Hipertensión",
    caregiver: "Ana López",
    status: "critical",
    lastVisit: "2024-01-13",
    medications: 6,
    photo: null,
    emergencyContact: "Ana Martínez (Hija) - 555-0126",
    address: "Calle Nueva 321"
  },
  {
    id: 5,
    name: "Carmen Ruiz González",
    age: 77,
    condition: "Alzheimer inicial",
    caregiver: "María Hernández",
    status: "stable",
    lastVisit: "2024-01-15",
    medications: 4,
    photo: null,
    emergencyContact: "Luis Ruiz (Hijo) - 555-0127",
    address: "Av. del Sol 654"
  },
  {
    id: 6,
    name: "Antonio López Díaz",
    age: 85,
    condition: "Postoperatorio",
    caregiver: "Carmen Rodríguez",
    status: "attention",
    lastVisit: "2024-01-14",
    medications: 7,
    photo: null,
    emergencyContact: "Patricia López (Hija) - 555-0128",
    address: "Calle Luna 987"
  }
]

export default function PatientsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.condition.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "stable":
        return <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">Estable</Badge>
      case "attention":
        return <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200">Atención</Badge>
      case "critical":
        return <Badge variant="destructive">Crítico</Badge>
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
            <h1 className="text-3xl font-bold tracking-tight">Pacientes</h1>
            <p className="text-muted-foreground">
              Gestiona la información de los pacientes del sistema
            </p>
          </div>
          <Button>
            <UserPlus className="mr-2 h-4 w-4" />
            Agregar Paciente
          </Button>
        </div>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Pacientes</CardTitle>
              <Heart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{patients.length}</div>
              <p className="text-xs text-muted-foreground">+2 este mes</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Estado Crítico</CardTitle>
              <AlertCircle className="h-4 w-4 text-destructive" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {patients.filter(p => p.status === "critical").length}
              </div>
              <p className="text-xs text-muted-foreground">Requieren atención inmediata</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Promedio Edad</CardTitle>
              <Heart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {Math.round(patients.reduce((acc, p) => acc + p.age, 0) / patients.length)}
              </div>
              <p className="text-xs text-muted-foreground">años</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Medicamentos Activos</CardTitle>
              <Heart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {patients.reduce((acc, p) => acc + p.medications, 0)}
              </div>
              <p className="text-xs text-muted-foreground">Total prescripciones</p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <Card>
          <CardHeader>
            <CardTitle>Lista de Pacientes</CardTitle>
            <CardDescription>
              Administra y visualiza la información de todos los pacientes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 mb-4">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Buscar pacientes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9"
                />
              </div>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Exportar
              </Button>
            </div>

            {/* Table */}
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Paciente</TableHead>
                    <TableHead>Edad</TableHead>
                    <TableHead>Condición</TableHead>
                    <TableHead>Cuidadora Asignada</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead>Medicamentos</TableHead>
                    <TableHead>Última Visita</TableHead>
                    <TableHead className="text-right">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredPatients.map((patient) => (
                    <TableRow key={patient.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage src={patient.photo || undefined} />
                            <AvatarFallback>
                              {patient.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{patient.name}</div>
                            <div className="text-xs text-muted-foreground">
                              {patient.address}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{patient.age} años</TableCell>
                      <TableCell>{patient.condition}</TableCell>
                      <TableCell>{patient.caregiver}</TableCell>
                      <TableCell>{getStatusBadge(patient.status)}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{patient.medications}</Badge>
                      </TableCell>
                      <TableCell>{patient.lastVisit}</TableCell>
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
                              Ver detalles
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Edit className="mr-2 h-4 w-4" />
                              Editar
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <FileText className="mr-2 h-4 w-4" />
                              Historial médico
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