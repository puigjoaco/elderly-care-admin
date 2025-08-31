'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Activity,
  AlertCircle,
  Camera,
  CheckCircle,
  Clock,
  MapPin,
  Pill,
  TrendingUp,
  Users,
  Calendar,
  Heart,
  AlertTriangle,
  ChevronRight,
  Eye,
  Bell,
  Scale,
  Utensils,
  Home,
  Shield,
} from 'lucide-react';

export default function AdminDashboard() {
  const currentTime = new Date().toLocaleTimeString('es-ES', { 
    hour: '2-digit', 
    minute: '2-digit' 
  });

  const stats = {
    caregiverPresent: true,
    medicationsGiven: 3,
    medicationsTotal: 5,
    photosToday: 8,
    mealsRecorded: 2,
    lastActivity: '5 minutos',
    weightRecorded: true,
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Panel de Control</h1>
          <p className="text-muted-foreground">
            Supervisión completa del cuidado de tu familiar
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="px-3 py-1">
            <Clock className="w-3 h-3 mr-1" />
            {currentTime}
          </Badge>
          <Button>
            <Eye className="w-4 h-4 mr-2" />
            Ver Reporte del Día
          </Button>
        </div>
      </div>

      {/* Critical Alerts */}
      <Alert className="border-red-200 bg-red-50 dark:bg-red-950/20">
        <AlertTriangle className="h-4 w-4 text-red-600" />
        <AlertTitle className="text-red-800 dark:text-red-200">
          Alerta Crítica - Medicamento Pendiente
        </AlertTitle>
        <AlertDescription className="text-red-700 dark:text-red-300">
          <div className="flex items-center justify-between mt-2">
            <span>Amlodipino 5mg no ha sido administrado (15 min de retraso)</span>
            <Button size="sm" variant="destructive">
              <Bell className="w-3 h-3 mr-1" />
              Notificar a Cuidadora
            </Button>
          </div>
        </AlertDescription>
      </Alert>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Estado Cuidadora</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              {stats.caregiverPresent ? (
                <>
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-2xl font-bold text-green-600">Presente</span>
                </>
              ) : (
                <>
                  <div className="h-2 w-2 rounded-full bg-gray-400" />
                  <span className="text-2xl font-bold text-gray-600">Ausente</span>
                </>
              )}
            </div>
            <div className="flex items-center mt-1 text-xs text-muted-foreground">
              <MapPin className="w-3 h-3 mr-1" />
              María García - Desde 8:00 AM
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Medicamentos</CardTitle>
            <Pill className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {stats.medicationsGiven}/{stats.medicationsTotal}
            </div>
            <Progress 
              value={(stats.medicationsGiven / stats.medicationsTotal) * 100} 
              className="mt-2"
            />
            <p className="text-xs text-muted-foreground mt-1">
              2 medicamentos pendientes
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Fotos del Día</CardTitle>
            <Camera className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.photosToday}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Última hace {stats.lastActivity}
            </p>
            <Button size="sm" variant="outline" className="w-full mt-2">
              <Eye className="w-3 h-3 mr-1" />
              Ver fotos
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Control Diario</CardTitle>
            <Heart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs">Peso</span>
                {stats.weightRecorded ? (
                  <CheckCircle className="w-3 h-3 text-green-500" />
                ) : (
                  <AlertCircle className="w-3 h-3 text-red-500" />
                )}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs">Comidas</span>
                <span className="text-xs font-bold">{stats.mealsRecorded}/4</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs">Cuestionario</span>
                <Badge variant="secondary" className="text-xs">Pendiente</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="timeline" className="space-y-4">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="timeline">Línea de Tiempo</TabsTrigger>
          <TabsTrigger value="caregivers">Cuidadoras</TabsTrigger>
          <TabsTrigger value="medications">Medicamentos</TabsTrigger>
          <TabsTrigger value="location">GPS</TabsTrigger>
          <TabsTrigger value="photos">Evidencias</TabsTrigger>
        </TabsList>

        <TabsContent value="timeline" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Actividad del Día</CardTitle>
              <CardDescription>
                Registro cronológico de todas las actividades
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { 
                    time: '08:00', 
                    icon: CheckCircle, 
                    title: 'Entrada registrada', 
                    desc: 'María García llegó - Selfie con paciente verificada', 
                    color: 'text-green-600',
                    gps: true,
                    photo: true
                  },
                  { 
                    time: '08:15', 
                    icon: Scale, 
                    title: 'Peso registrado', 
                    desc: '68.5 kg - Foto de báscula verificada', 
                    color: 'text-blue-600',
                    photo: true
                  },
                  { 
                    time: '08:30', 
                    icon: Pill, 
                    title: 'Medicamento administrado', 
                    desc: 'Losartán 50mg - Foto de medicina en mano', 
                    color: 'text-purple-600',
                    photo: true
                  },
                  { 
                    time: '09:00', 
                    icon: Utensils, 
                    title: 'Desayuno fotografiado', 
                    desc: 'Avena con frutas, pan integral y té', 
                    color: 'text-orange-600',
                    photo: true
                  },
                  { 
                    time: '11:45', 
                    icon: AlertCircle, 
                    title: 'Alerta: Medicamento pendiente', 
                    desc: 'Amlodipino 5mg no administrado - CRÍTICO', 
                    color: 'text-red-600',
                    critical: true
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`rounded-full p-2 bg-background border-2 ${item.color}`}>
                        <item.icon className={`h-4 w-4 ${item.color}`} />
                      </div>
                      {index < 4 && <div className="w-0.5 h-16 bg-border" />}
                    </div>
                    <div className="flex-1 pb-4">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-medium">{item.time}</span>
                        <h4 className="font-semibold">{item.title}</h4>
                        {item.critical && (
                          <Badge variant="destructive" className="animate-pulse">
                            CRÍTICO
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                      <div className="flex gap-2 mt-2">
                        {item.gps && (
                          <Badge variant="outline" className="text-xs">
                            <MapPin className="w-3 h-3 mr-1" />
                            GPS verificado
                          </Badge>
                        )}
                        {item.photo && (
                          <Badge variant="outline" className="text-xs">
                            <Camera className="w-3 h-3 mr-1" />
                            Foto protegida
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="caregivers" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Cuidadoras del Día</CardTitle>
              <CardDescription>
                Control de asistencia y ubicación en tiempo real
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg bg-green-50 dark:bg-green-950/20">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                        <Users className="h-6 w-6 text-green-600" />
                      </div>
                      <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-green-500 border-2 border-white animate-pulse" />
                    </div>
                    <div>
                      <h4 className="font-semibold">María García</h4>
                      <p className="text-sm text-muted-foreground">En turno desde 8:00 AM</p>
                      <div className="flex items-center gap-4 mt-1">
                        <span className="text-xs text-green-600 flex items-center">
                          <MapPin className="w-3 h-3 mr-1" />
                          Dentro del radio (15m)
                        </span>
                        <span className="text-xs text-muted-foreground">
                          Última verificación: hace 2 min
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Badge variant="default" className="bg-green-500">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Activa
                    </Badge>
                    <Button size="sm" variant="outline">
                      Ver historial
                      <ChevronRight className="w-3 h-3 ml-1" />
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg opacity-60">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                      <Users className="h-6 w-6 text-gray-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Ana Rodríguez</h4>
                      <p className="text-sm text-muted-foreground">Próximo turno: 2:00 PM - 8:00 PM</p>
                    </div>
                  </div>
                  <Badge variant="secondary">
                    <Clock className="w-3 h-3 mr-1" />
                    Programada
                  </Badge>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                <h4 className="font-medium text-sm mb-2">Control GPS Activo</h4>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span>Dirección configurada:</span>
                    <span className="font-medium">Av. Insurgentes Sur 1234</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Radio permitido:</span>
                    <span className="font-medium">30 metros</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Verificación cada:</span>
                    <span className="font-medium">5 minutos</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="medications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Control de Medicamentos</CardTitle>
              <CardDescription>
                Estado de administración con verificación fotográfica
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { 
                    name: 'Losartán 50mg', 
                    time: '8:00 AM', 
                    status: 'given', 
                    critical: false,
                    photo: true,
                    timeGiven: '8:15 AM'
                  },
                  { 
                    name: 'Amlodipino 5mg', 
                    time: '8:00 AM', 
                    status: 'pending', 
                    critical: true,
                    delay: '15 min tarde'
                  },
                  { 
                    name: 'Metformina 850mg', 
                    time: '12:00 PM', 
                    status: 'scheduled', 
                    critical: false 
                  },
                  { 
                    name: 'Atorvastatina 20mg', 
                    time: '8:00 PM', 
                    status: 'scheduled', 
                    critical: false 
                  },
                  { 
                    name: 'Omeprazol 20mg', 
                    time: '8:00 PM', 
                    status: 'scheduled', 
                    critical: false 
                  },
                ].map((med, index) => (
                  <div key={index} className={`flex items-center justify-between p-3 border rounded-lg ${
                    med.status === 'pending' && med.critical ? 'border-red-300 bg-red-50 dark:bg-red-950/20' : ''
                  }`}>
                    <div className="flex items-center gap-3">
                      <Pill className={`h-5 w-5 ${
                        med.status === 'given' ? 'text-green-600' : 
                        med.status === 'pending' ? 'text-red-600' : 
                        'text-gray-400'
                      }`} />
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium">{med.name}</h4>
                          {med.critical && (
                            <Badge variant="destructive" className="text-xs">
                              CRÍTICO
                            </Badge>
                          )}
                          {med.delay && (
                            <span className="text-xs text-red-600 font-medium">
                              ({med.delay})
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>Hora: {med.time}</span>
                          {med.timeGiven && (
                            <span className="text-green-600">
                              Administrado: {med.timeGiven}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {med.photo && (
                        <Badge variant="outline" className="text-xs">
                          <Camera className="w-3 h-3 mr-1" />
                          Foto verificada
                        </Badge>
                      )}
                      <Badge variant={
                        med.status === 'given' ? 'default' : 
                        med.status === 'pending' ? 'destructive' : 
                        'secondary'
                      }>
                        {med.status === 'given' ? 'Administrado' : 
                         med.status === 'pending' ? 'PENDIENTE' : 
                         'Programado'}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>

              <Alert className="mt-4 border-yellow-200 bg-yellow-50 dark:bg-yellow-950/20">
                <AlertCircle className="h-4 w-4 text-yellow-600" />
                <AlertDescription className="text-sm">
                  <strong>Recordatorio:</strong> Todas las medicinas deben ser fotografiadas en la mano del paciente antes de administrar.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="location" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Control de Ubicación GPS</CardTitle>
              <CardDescription>
                Verificación de presencia física en tiempo real
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Alert className="border-green-200 bg-green-50 dark:bg-green-950/20">
                  <MapPin className="h-4 w-4 text-green-600" />
                  <AlertTitle className="text-green-800 dark:text-green-200">
                    Ubicación Verificada
                  </AlertTitle>
                  <AlertDescription className="text-green-700 dark:text-green-300">
                    La cuidadora se encuentra dentro del radio permitido
                    <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
                      <span>Distancia actual: <strong>15 metros</strong></span>
                      <span>Radio máximo: <strong>30 metros</strong></span>
                    </div>
                  </AlertDescription>
                </Alert>

                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base">Configuración Actual</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex items-start gap-2">
                        <Home className="w-4 h-4 mt-0.5 text-muted-foreground" />
                        <div className="flex-1">
                          <p className="text-sm font-medium">Dirección del Paciente</p>
                          <p className="text-xs text-muted-foreground">
                            Av. Insurgentes Sur 1234, Col. Del Valle, CDMX
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Radio permitido:</span>
                        <Badge variant="outline">30 metros</Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Verificación cada:</span>
                        <Badge variant="outline">5 minutos</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base">Historial de Verificaciones</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {[
                          { time: '11:50 AM', distance: '15m', status: 'ok' },
                          { time: '11:45 AM', distance: '12m', status: 'ok' },
                          { time: '11:40 AM', distance: '18m', status: 'ok' },
                          { time: '11:35 AM', distance: '22m', status: 'ok' },
                        ].map((check, i) => (
                          <div key={i} className="flex items-center justify-between text-xs">
                            <span className="text-muted-foreground">{check.time}</span>
                            <div className="flex items-center gap-2">
                              <span>{check.distance}</span>
                              <CheckCircle className="w-3 h-3 text-green-500" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Button variant="outline" className="w-full">
                  <MapPin className="w-4 h-4 mr-2" />
                  Modificar Configuración GPS
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="photos" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Evidencias Fotográficas del Día</CardTitle>
              <CardDescription>
                Todas las fotos están protegidas contra manipulación y verificadas con marca de agua forense
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  { type: 'Entrada', time: '8:00 AM', icon: Users, verified: true },
                  { type: 'Peso', time: '8:15 AM', icon: Scale, verified: true },
                  { type: 'Medicina', time: '8:30 AM', icon: Pill, verified: true },
                  { type: 'Desayuno', time: '9:00 AM', icon: Utensils, verified: true },
                  { type: 'Medicina', time: '12:00 PM', icon: Pill, verified: true },
                  { type: 'Almuerzo', time: '1:00 PM', icon: Utensils, verified: true },
                  { type: 'Estado', time: '3:00 PM', icon: Heart, verified: true },
                  { type: 'Merienda', time: '4:00 PM', icon: Utensils, verified: true },
                ].map((photo, i) => (
                  <div key={i} className="relative group cursor-pointer">
                    <div className="aspect-square rounded-lg bg-gray-100 dark:bg-gray-800 flex flex-col items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                      <photo.icon className="h-8 w-8 text-gray-400 mb-2" />
                      <span className="text-xs font-medium">{photo.type}</span>
                      <span className="text-xs text-muted-foreground">{photo.time}</span>
                    </div>
                    {photo.verified && (
                      <Badge 
                        variant="default" 
                        className="absolute -top-2 -right-2 bg-green-500 text-xs"
                      >
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Verificada
                      </Badge>
                    )}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                      <Button size="sm" variant="secondary">
                        <Eye className="w-4 h-4 mr-1" />
                        Ver
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                <h4 className="font-medium text-sm mb-2 flex items-center">
                  <Shield className="w-4 h-4 mr-2 text-blue-600" />
                  Sistema de Seguridad Fotográfica
                </h4>
                <div className="grid md:grid-cols-2 gap-4 text-xs text-muted-foreground">
                  <div className="space-y-1">
                    <div className="flex items-center">
                      <CheckCircle className="w-3 h-3 mr-1 text-green-500" />
                      <span>Fotos tomadas solo desde cámara</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-3 h-3 mr-1 text-green-500" />
                      <span>Marca de agua forense invisible</span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center">
                      <CheckCircle className="w-3 h-3 mr-1 text-green-500" />
                      <span>Timestamp verificado (máx 60 seg)</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-3 h-3 mr-1 text-green-500" />
                      <span>GPS embebido en metadata</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}