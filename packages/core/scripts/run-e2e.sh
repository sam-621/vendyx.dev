#!/usr/bin/env bash
# Run e2e tests

echo '🔵 - Running E2E tests'
echo ''

DIR="$(cd "$(dirname "$0")" && pwd)"

source $DIR/utils/load-env.sh

docker-compose up -d

echo '🟡 - Waiting for database to be ready...'
$DIR/utils/wait-for-it.sh "${DB_URL}" -t 1 -- echo '🟢 - Database is ready!'

yarn prisma db push

if [ "$#" -eq  "0" ]
  then
    yarn test
else
    yarn test --run
fi

docker-compose down