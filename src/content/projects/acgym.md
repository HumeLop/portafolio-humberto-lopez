---
title: 'AcGym — Sistema de Gestión de Gimnasio'
description: 'SPA para administración integral de gimnasios: gestión de miembros, pagos, membresías y usuarios con roles diferenciados. Dashboard con métricas en tiempo real, gráficos y PWA.'
image: '../../assets/projects/acgym.png'
stack: ['Angular', 'TypeScript', 'Taiga UI', 'Tailwind CSS', 'Django REST Framework']
featured: true
url: 'https://github.com/HumeLop/acgym-frontend'
---

**AcGym** es una aplicación SPA mobile-first para la gestión completa de gimnasios. Permite administrar miembros, pagos, tipos de membresía y usuarios del sistema con roles diferenciados (admin/recepcionista).

## Funcionalidades principales

- **Dashboard interactivo** — Métricas en tiempo real, gráficos de ingresos y métodos de pago
- **Gestión de miembros** — CRUD completo, seguimiento de membresías, búsqueda de inactivos
- **Control de pagos** — Registro con múltiples métodos (efectivo, tarjeta, transferencia)
- **Panel de administración** — Gestión de usuarios y control de accesos
- **Autenticación JWT** — Guards, token refresh e interceptor HTTP

## Stack técnico

- **Frontend**: Angular 22 (zoneless, signal-based), Taiga UI 5, Tailwind CSS 4
- **Backend**: Django 6, Django REST Framework, PostgreSQL, JWT (SimpleJWT)
- **Infra**: Fly.io (Docker), Gunicorn
- **PWA** con service worker, instalable en dispositivos, modo offline
- **Tema** claro/oscuro/sistema con pull-to-refresh y haptic feedback
