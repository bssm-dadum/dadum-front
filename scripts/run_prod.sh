#!/usr/bin/env bash
set -euo pipefail

PORT=4173
EXISTING=$(docker ps --filter "publish=${PORT}" -q)
if [ -n "$EXISTING" ]; then
  echo "[prod] 포트 ${PORT}를 사용 중인 컨테이너를 종료합니다... ($EXISTING)"
  docker stop $EXISTING
fi

echo "[prod] Docker 프로덕션 서버 시작... (http://localhost:${PORT})"
docker compose -f ./docker/docker-compose.prod.yml up --build -d
echo "[prod] 완료. 로그: make logs"
