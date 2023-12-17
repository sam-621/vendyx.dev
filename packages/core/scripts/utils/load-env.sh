#!/usr/bin/env bash
# set envirioment variables for tests

export $(grep -v '^#' .env.test | xargs)