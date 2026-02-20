#!/usr/bin/env bash
set -euo pipefail

echo "[dev] Docker 개발 서버 시작... (http://localhost:5173)"
docker compose -f ./docker/docker-compose.dev.yml up --build
