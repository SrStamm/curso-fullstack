# ---------- STAGE 1: Build ----------
FROM node:20-alpine AS builder

# Set working dir inside the container
WORKDIR /app

# Leverage caching: copy only manifests first
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./
RUN npm install

# Now copy the rest of the app and build
COPY . .

RUN npm run build

# ---------- STAGE 2: Run (Nginx) ----------
FROM nginx:1.27-alpine AS run

# Copy a minimal SPA config (adds history fallback)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy static files from the builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose and run
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
