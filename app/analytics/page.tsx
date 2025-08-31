"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  Calendar,
  Download,
  Brain,
  Activity,
  Target,
  AlertTriangle
} from "lucide-react"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area
} from "recharts"

const healthTrendData = [
  { month: "Ene", weight: 68, bloodPressure: 120, glucose: 95 },
  { month: "Feb", weight: 67.5, bloodPressure: 118, glucose: 92 },
  { month: "Mar", weight: 67, bloodPressure: 122, glucose: 98 },
  { month: "Abr", weight: 66.8, bloodPressure: 119, glucose: 94 },
  { month: "May", weight: 66.5, bloodPressure: 121, glucose: 96 },
  { month: "Jun", weight: 66.2, bloodPressure: 120, glucose: 93 },
]

const cognitiveAssessmentData = [
  { subject: "Memoria", score: 75, fullMark: 100 },
  { subject: "Atención", score: 82, fullMark: 100 },
  { subject: "Lenguaje", score: 68, fullMark: 100 },
  { subject: "Orientación", score: 90, fullMark: 100 },
  { subject: "Funciones Ejecutivas", score: 70, fullMark: 100 },
  { subject: "Habilidades Visuales", score: 85, fullMark: 100 },
]

const behaviorPatternData = [
  { hour: "00", agitation: 5, sleep: 90, activity: 10 },
  { hour: "04", agitation: 3, sleep: 95, activity: 5 },
  { hour: "08", agitation: 15, sleep: 0, activity: 60 },
  { hour: "12", agitation: 20, sleep: 0, activity: 70 },
  { hour: "16", agitation: 25, sleep: 10, activity: 65 },
  { hour: "20", agitation: 18, sleep: 30, activity: 40 },
]

const riskFactorsData = [
  { factor: "Caídas", current: 35, previous: 45, target: 20 },
  { factor: "Deshidratación", current: 15, previous: 25, target: 10 },
  { factor: "Malnutrición", current: 20, previous: 30, target: 15 },
  { factor: "Úlceras", current: 10, previous: 15, target: 5 },
  { factor: "Infecciones", current: 25, previous: 35, target: 15 },
]

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Análisis Avanzado</h1>
            <p className="text-muted-foreground">
              Insights con IA y análisis predictivo del sistema
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Calendar className="mr-2 h-4 w-4" />
              Último Mes
            </Button>
            <Button>
              <Download className="mr-2 h-4 w-4" />
              Exportar Análisis
            </Button>
          </div>
        </div>

        {/* AI Insights Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Predicción de Riesgo
              </CardTitle>
              <Brain className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Moderado</div>
              <div className="flex items-center mt-2">
                <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200">
                  <AlertTriangle className="mr-1 h-3 w-3" />
                  3 alertas
                </Badge>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Tendencia Cognitiva
              </CardTitle>
              <Activity className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">-2.3%</div>
              <div className="flex items-center text-xs text-red-600">
                <TrendingDown className="mr-1 h-3 w-3" />
                Declive leve detectado
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Efectividad Tratamiento
              </CardTitle>
              <Target className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">78%</div>
              <div className="flex items-center text-xs text-green-600">
                <TrendingUp className="mr-1 h-3 w-3" />
                +5% vs mes anterior
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Calidad de Vida
              </CardTitle>
              <BarChart3 className="h-4 w-4 text-violet-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7.2/10</div>
              <div className="flex items-center text-xs text-muted-foreground">
                Estable
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Analytics Tabs */}
        <Tabs defaultValue="health" className="space-y-4">
          <TabsList>
            <TabsTrigger value="health">Salud Física</TabsTrigger>
            <TabsTrigger value="cognitive">Evaluación Cognitiva</TabsTrigger>
            <TabsTrigger value="behavior">Patrones Conductuales</TabsTrigger>
            <TabsTrigger value="risks">Factores de Riesgo</TabsTrigger>
          </TabsList>

          <TabsContent value="health" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Tendencias de Salud Física</CardTitle>
                <CardDescription>
                  Evolución de indicadores vitales en los últimos 6 meses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={healthTrendData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip />
                    <Legend />
                    <Line 
                      yAxisId="left" 
                      type="monotone" 
                      dataKey="weight" 
                      stroke="#8b5cf6" 
                      name="Peso (kg)"
                      strokeWidth={2}
                    />
                    <Line 
                      yAxisId="right" 
                      type="monotone" 
                      dataKey="bloodPressure" 
                      stroke="#ef4444" 
                      name="Presión Sistólica"
                      strokeWidth={2}
                    />
                    <Line 
                      yAxisId="right" 
                      type="monotone" 
                      dataKey="glucose" 
                      stroke="#10b981" 
                      name="Glucosa (mg/dl)"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cognitive" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Evaluación Cognitiva Multidimensional</CardTitle>
                <CardDescription>
                  Análisis de capacidades cognitivas basado en evaluaciones mensuales
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <RadarChart data={cognitiveAssessmentData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis angle={90} domain={[0, 100]} />
                    <Radar 
                      name="Puntuación Actual" 
                      dataKey="score" 
                      stroke="#8b5cf6" 
                      fill="#8b5cf6" 
                      fillOpacity={0.6} 
                    />
                    <Legend />
                    <Tooltip />
                  </RadarChart>
                </ResponsiveContainer>
                <div className="mt-4 grid gap-2 md:grid-cols-3">
                  <div className="text-center p-3 bg-red-50 dark:bg-red-950 rounded-lg">
                    <p className="text-sm text-muted-foreground">Área Crítica</p>
                    <p className="font-semibold text-red-600">Lenguaje (68%)</p>
                  </div>
                  <div className="text-center p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                    <p className="text-sm text-muted-foreground">Mejor Desempeño</p>
                    <p className="font-semibold text-green-600">Orientación (90%)</p>
                  </div>
                  <div className="text-center p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
                    <p className="text-sm text-muted-foreground">Promedio General</p>
                    <p className="font-semibold text-blue-600">78.3%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="behavior" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Patrones de Comportamiento Diario</CardTitle>
                <CardDescription>
                  Análisis de agitación, sueño y actividad por hora del día
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <AreaChart data={behaviorPatternData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="hour" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area 
                      type="monotone" 
                      dataKey="sleep" 
                      stackId="1" 
                      stroke="#3b82f6" 
                      fill="#3b82f6"
                      name="Sueño %"
                    />
                    <Area 
                      type="monotone" 
                      dataKey="activity" 
                      stackId="1" 
                      stroke="#10b981" 
                      fill="#10b981"
                      name="Actividad %"
                    />
                    <Area 
                      type="monotone" 
                      dataKey="agitation" 
                      stackId="1" 
                      stroke="#ef4444" 
                      fill="#ef4444"
                      name="Agitación %"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="risks" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Análisis de Factores de Riesgo</CardTitle>
                <CardDescription>
                  Comparación de riesgos actuales vs. mes anterior y objetivos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={riskFactorsData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="factor" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="previous" fill="#94a3b8" name="Mes Anterior" />
                    <Bar dataKey="current" fill="#ef4444" name="Actual" />
                    <Bar dataKey="target" fill="#10b981" name="Objetivo" />
                  </BarChart>
                </ResponsiveContainer>
                <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5" />
                    <div>
                      <p className="font-semibold text-amber-900 dark:text-amber-100">
                        Recomendaciones de IA
                      </p>
                      <ul className="mt-2 space-y-1 text-sm text-amber-800 dark:text-amber-200">
                        <li>• Aumentar supervisión durante horas de mayor agitación (16:00-20:00)</li>
                        <li>• Implementar protocolo de hidratación cada 2 horas</li>
                        <li>• Revisar medicación para mejorar patrones de sueño</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}