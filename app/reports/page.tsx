"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Download,
  FileText,
  Calendar,
  TrendingUp,
  TrendingDown,
  Users,
  Heart,
  Pill,
  Activity,
  BarChart3,
  PieChart,
  Filter
} from "lucide-react"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart as RePieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  AreaChart
} from "recharts"

// Sample data for charts
const medicationComplianceData = [
  { day: "Lun", completed: 95, missed: 5 },
  { day: "Mar", completed: 88, missed: 12 },
  { day: "Tue", completed: 92, missed: 8 },
  { day: "Jue", completed: 97, missed: 3 },
  { day: "Vie", completed: 90, missed: 10 },
  { day: "Sáb", completed: 85, missed: 15 },
  { day: "Dom", completed: 93, missed: 7 },
]

const attendanceData = [
  { month: "Ene", attendance: 95, target: 90 },
  { month: "Feb", attendance: 92, target: 90 },
  { month: "Mar", attendance: 88, target: 90 },
  { month: "Abr", attendance: 94, target: 90 },
  { month: "May", attendance: 96, target: 90 },
  { month: "Jun", attendance: 91, target: 90 },
]

const patientStatusData = [
  { name: "Estable", value: 15, color: "#10b981" },
  { name: "Atención", value: 6, color: "#f59e0b" },
  { name: "Crítico", value: 3, color: "#ef4444" },
]

const caregiverPerformanceData = [
  { name: "Ana López", score: 95, patients: 4 },
  { name: "Carmen Rodríguez", score: 92, patients: 3 },
  { name: "Laura Sánchez", score: 88, patients: 2 },
  { name: "María Hernández", score: 97, patients: 3 },
  { name: "Patricia González", score: 85, patients: 2 },
]

const monthlyActivitiesData = [
  { date: "1", photos: 45, questionnaires: 12, medications: 28 },
  { date: "5", photos: 52, questionnaires: 15, medications: 32 },
  { date: "10", photos: 48, questionnaires: 14, medications: 30 },
  { date: "15", photos: 55, questionnaires: 16, medications: 35 },
  { date: "20", photos: 50, questionnaires: 13, medications: 31 },
  { date: "25", photos: 58, questionnaires: 17, medications: 33 },
  { date: "30", photos: 53, questionnaires: 15, medications: 34 },
]

export default function ReportsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Reportes y Análisis</h1>
            <p className="text-muted-foreground">
              Visualiza métricas y genera reportes del sistema
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filtrar
            </Button>
            <Button variant="outline">
              <Calendar className="mr-2 h-4 w-4" />
              Período
            </Button>
            <Button>
              <Download className="mr-2 h-4 w-4" />
              Exportar Reporte
            </Button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Cumplimiento General
              </CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">91.5%</div>
              <div className="flex items-center text-xs text-green-600">
                <TrendingUp className="mr-1 h-3 w-3" />
                +2.5% vs mes anterior
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Medicaciones a Tiempo
              </CardTitle>
              <Pill className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">87.3%</div>
              <div className="flex items-center text-xs text-red-600">
                <TrendingDown className="mr-1 h-3 w-3" />
                -1.2% vs mes anterior
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Fotos Diarias
              </CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,247</div>
              <div className="flex items-center text-xs text-green-600">
                <TrendingUp className="mr-1 h-3 w-3" />
                +125 esta semana
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Incidencias
              </CardTitle>
              <Heart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <div className="flex items-center text-xs text-muted-foreground">
                Último mes
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Tabs */}
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Vista General</TabsTrigger>
            <TabsTrigger value="medications">Medicaciones</TabsTrigger>
            <TabsTrigger value="attendance">Asistencia</TabsTrigger>
            <TabsTrigger value="caregivers">Cuidadoras</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 lg:grid-cols-2">
              {/* Patient Status Distribution */}
              <Card>
                <CardHeader>
                  <CardTitle>Estado de Pacientes</CardTitle>
                  <CardDescription>
                    Distribución actual del estado de salud
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <RePieChart>
                      <Pie
                        data={patientStatusData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {patientStatusData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </RePieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Monthly Activities Trend */}
              <Card>
                <CardHeader>
                  <CardTitle>Actividades Mensuales</CardTitle>
                  <CardDescription>
                    Tendencia de actividades registradas
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={monthlyActivitiesData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Area type="monotone" dataKey="photos" stackId="1" stroke="#8b5cf6" fill="#8b5cf6" />
                      <Area type="monotone" dataKey="questionnaires" stackId="1" stroke="#3b82f6" fill="#3b82f6" />
                      <Area type="monotone" dataKey="medications" stackId="1" stroke="#10b981" fill="#10b981" />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="medications" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Cumplimiento de Medicación Semanal</CardTitle>
                <CardDescription>
                  Porcentaje de medicaciones administradas vs. no administradas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <BarChart data={medicationComplianceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="completed" fill="#10b981" name="Completadas" />
                    <Bar dataKey="missed" fill="#ef4444" name="No administradas" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="attendance" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Asistencia Mensual</CardTitle>
                <CardDescription>
                  Porcentaje de asistencia vs. objetivo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <LineChart data={attendanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="attendance" stroke="#8b5cf6" name="Asistencia" />
                    <Line type="monotone" dataKey="target" stroke="#ef4444" strokeDasharray="5 5" name="Objetivo" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="caregivers" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Desempeño de Cuidadoras</CardTitle>
                <CardDescription>
                  Puntuación de desempeño y pacientes asignados
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <BarChart data={caregiverPerformanceData} layout="horizontal">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="score" fill="#8b5cf6" name="Puntuación" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Recent Reports */}
        <Card>
          <CardHeader>
            <CardTitle>Reportes Recientes</CardTitle>
            <CardDescription>
              Reportes generados y disponibles para descarga
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { name: "Reporte Mensual - Enero 2024", date: "01/02/2024", type: "Completo" },
                { name: "Análisis de Medicaciones - Semana 4", date: "28/01/2024", type: "Medicaciones" },
                { name: "Informe de Asistencia - Enero", date: "31/01/2024", type: "Asistencia" },
                { name: "Evaluación de Cuidadoras - Q1", date: "15/01/2024", type: "Personal" },
              ].map((report, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <div className="font-medium">{report.name}</div>
                      <div className="text-sm text-muted-foreground">{report.date}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{report.type}</Badge>
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
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