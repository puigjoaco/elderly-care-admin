"use client"

export const dynamic = 'force-dynamic'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        setError(error.message)
      } else if (data.user) {
        router.push('/dashboard')
      }
    } catch (err) {
      setError('Error al iniciar sesión')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="login-container">
      {/* Panel Izquierdo - Branding */}
      <div className="login-left">
        <div>
          <div className="brand">
            <div className="brand-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 8.5C21 5.46243 18.5376 3 15.5 3C13.2894 3 11.4182 4.46819 10.6518 6.5M7.5 13.5C9.98528 13.5 12 11.4853 12 9C12 6.51472 9.98528 4.5 7.5 4.5C5.01472 4.5 3 6.51472 3 9C3 11.4853 5.01472 13.5 7.5 13.5ZM7.5 13.5C3.35786 13.5 0 16.8579 0 21H15C15 16.8579 11.6421 13.5 7.5 13.5Z"/>
              </svg>
            </div>
            <h1>ElderCare Pro</h1>
          </div>
          <p style={{fontSize: '1.1rem', opacity: 0.95, marginBottom: '3rem'}}>
            Sistema avanzado de supervisión y cuidado para adultos mayores
          </p>
        </div>

        <div className="features">
          <div className="feature">
            <div className="feature-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <div className="feature-content">
              <h3>Seguridad Garantizada</h3>
              <p>Protección avanzada con verificación en tiempo real</p>
            </div>
          </div>

          <div className="feature">
            <div className="feature-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
              </svg>
            </div>
            <div className="feature-content">
              <h3>Monitoreo 24/7</h3>
              <p>Seguimiento continuo de actividades y medicación</p>
            </div>
          </div>

          <div className="feature">
            <div className="feature-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </div>
            <div className="feature-content">
              <h3>Gestión Familiar</h3>
              <p>Coordinación efectiva entre familiares y cuidadores</p>
            </div>
          </div>
        </div>

        <div style={{marginTop: 'auto', opacity: 0.7, fontSize: '0.875rem'}}>
          © 2024 ElderCare Pro. Todos los derechos reservados.
        </div>
      </div>

      {/* Panel Derecho - Formulario */}
      <div className="login-right">
        <div className="login-form-container">
          <div className="login-header">
            <h2>Bienvenido de vuelta</h2>
            <p>Ingresa tus credenciales para acceder al sistema</p>
          </div>

          {error && (
            <div style={{
              background: '#fee2e2',
              border: '1px solid #fecaca',
              borderRadius: '8px',
              padding: '0.75rem',
              marginBottom: '1.5rem',
              color: '#991b1b',
              fontSize: '0.875rem'
            }}>
              {error}
            </div>
          )}

          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label className="form-label">Correo electrónico</label>
              <div className="input-wrapper">
                <span className="input-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </span>
                <input
                  type="email"
                  className="form-input"
                  placeholder="admin@ejemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={loading}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Contraseña</label>
              <div className="input-wrapper">
                <span className="input-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0110 0v4"/>
                  </svg>
                </span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="form-input"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={loading}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                      <line x1="1" y1="1" x2="23" y2="23"/>
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div className="form-options">
              <label className="checkbox-label">
                <input type="checkbox" />
                <span>Recordarme</span>
              </label>
              <a href="#" className="forgot-link">¿Olvidaste tu contraseña?</a>
            </div>

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
            </button>
          </form>

          <div className="test-credentials">
            <div className="test-credentials-header">Credenciales de prueba</div>
            <div className="test-credentials-content">
              Usuario de demostración:
              <span className="mono">puig.joaco@gmail.com</span>
              <span className="mono">Contraseña: Puig1796</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}