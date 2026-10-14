# Portafolio - Rudy Gamarra Cóndor

Portafolio web interactivo desarrollado con React, TypeScript, Styled Components, Tailwind CSS e internacionalización (i18n en Español e Inglés).

🌐 **Sitio Web en Vivo:** [https://rgamarrac.github.io/Portfolio-Rudy-Gamarra/](https://rgamarrac.github.io/Portfolio-Rudy-Gamarra/)

---

## 🚀 Comandos del Proyecto

### 1. Entorno de Desarrollo
Para ejecutar el proyecto localmente:
```bash
npm run dev
```
Abre tu navegador en `http://localhost:3000`.

### 2. Compilar el Proyecto
Para generar la versión de producción en la carpeta `dist/`:
```bash
npm run build
```

### 3. Publicar en GitHub Pages
Para publicar automáticamente el sitio en GitHub Pages:
```bash
npm run deploy
```
> **¿Qué hace este comando?**
> 1. Ejecuta `predeploy` (`npm run build`) para compilar los archivos actualizados en `dist/`.
> 2. Ejecuta `gh-pages -d dist`, el cual crea o actualiza la rama `gh-pages` en tu repositorio de GitHub con los archivos estáticos listos para producción.

---

## 📦 Subir Cambios del Código Fuente al Repositorio

Para guardar y subir tus cambios del código fuente (rama `main`):

```bash
git add .
git commit -m "feat: actualizar experiencia, habilidades y educación"
git push origin main
```

---

## ⚙️ Configuración en GitHub Pages (solo si se necesita verificar)

Si en algún momento configuras o verificas el despliegue en GitHub:
1. Ve a tu repositorio: `https://github.com/RgamarraC/Portfolio-Rudy-Gamarra`
2. Ingresa a **Settings** > **Pages** (en el menú lateral izquierdo).
3. En **Build and deployment**:
   - **Source:** `Deploy from a branch`
   - **Branch:** `gh-pages` / `/ (root)`
4. Haz clic en **Save**. En unos minutos el sitio estará actualizado en `https://rgamarrac.github.io/Portfolio-Rudy-Gamarra/`.
