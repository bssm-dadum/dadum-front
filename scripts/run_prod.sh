#!/usr/bin/env bash
set -euo pipefail

echo "[prod] Docker 프로덕션 서버 시작... (http://localhost:4173)"
docker compose -f ./docker/docker-compose.prod.yml up --build -d
echo "[prod] 완료. 로그: make logs"
