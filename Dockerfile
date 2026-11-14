# ---- Stage 1: Build dependencies ----
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy application code
COPY . .

# Build Next.js app
RUN npm run build

# ---- Stage 2: Production image ----
FROM node:20-alpine AS runner

WORKDIR /app

# Set environment variables
ENV NODE_ENV=production
ENV NEXT_PUBLIC_API_URL=http://localhost:8000

# Create non-root user for security
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Copy built files from builder
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./next.config.ts
COPY --from=builder /app/tsconfig.json ./tsconfig.json
COPY --from=builder /app/tailwind.config.* ./
COPY --from=builder /app/postcss.config.* ./

# Install only production dependencies
RUN npm ci --omit=dev

# Set proper permissions
RUN chown -R appuser:appgroup /app

USER appuser

EXPOSE 3000

# Start the application
CMD ["npm", "start"]