export type UserRole = 'admin' | 'readonly' | 'caregiver';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
  createdAt: Date;
}

export interface AdminUser extends User {
  role: 'admin';
  permissions: {
    canManageCaregivers: boolean;
    canManageFamily: boolean;
    canConfigureSettings: boolean;
    canExportData: boolean;
  };
}

export interface ReadOnlyUser extends User {
  role: 'readonly';
  permissions: {
    canViewReports: boolean;
    canViewPhotos: boolean;
    canReceiveNotifications: boolean;
  };
}

export interface CaregiverUser extends User {
  role: 'caregiver';
  assignedPatientId: string;
  shiftSchedule?: {
    startTime: string;
    endTime: string;
    daysOfWeek: number[];
  };
}

export interface Patient {
  id: string;
  name: string;
  age: number;
  photo?: string;
  address: string;
  gpsLocation: {
    lat: number;
    lng: number;
    radius: number; // in meters
  };
  medicalInfo?: {
    conditions: string[];
    medications: Medication[];
    allergies: string[];
  };
  emergencyContacts: EmergencyContact[];
}

export interface Medication {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  times: string[];
  critical: boolean;
  instructions?: string;
}

export interface EmergencyContact {
  name: string;
  relationship: string;
  phone: string;
  isPrimary: boolean;
}

export interface NotificationSettings {
  medicationDelay: number; // minutes
  missedCheckIn: number; // minutes
  panicButtonAlert: boolean;
  dailyReportTime: string;
  criticalAlertChannels: ('push' | 'email')[];
}