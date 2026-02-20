#!/usr/bin/env bash
set -euo pipefail

PORT=5173
EXISTING=$(docker ps --filter "publish=${PORT}" -q)
if [ -n "$EXISTING" ]; then
  echo "[dev] 포트 ${PORT}를 사용 중인 컨테이너를 종료합니다... ($EXISTING)"
  docker stop $EXISTING
fi

echo "[dev] Docker 개발 서버 시작... (http://localhost:${PORT})"
docker compose -f ./docker/docker-compose.dev.yml up --build
