#!/usr/bin/env bash
# Run e2e tests

echo '🔵 - Running E2E tests'
echo ''

DIR="$(cd "$(dirname "$0")" && pwd)"

source $DIR/utils/load-env.sh

docker-compose up -d

echo '🟡 - Waiting for database to be ready...'
$DIR/utils/wait-for-it.sh "${DATABASE_URL}" -- echo '🟢 - Database is ready!'

yarn prisma migrate dev --name init

if [ "$#" -eq  "0" ]
  then
    yarn test -c ./vitest.config.ts
else
    yarn test -c ./vitest.config.ts --run
fi

docker-compose down