#!/usr/bin/env bash

set -e

cd deploy/

npm install
mkdir v1
mkdir v1/kinan
mkdir v1/main

node csv2json.js "../H26-Kinan-library-lending-best-100(Children's book).csv" > v1/kinan/children.json
node csv2json.js "../H26-Kinan-library-lending-best-100(General books).csv" > v1/kinan/general.json
node csv2json.js "../H26-Main-library-lending-best-100(Children's book).csv" > v1/main/children.json
node csv2json.js "../H26-Main-library-lending-best-100(General books).csv" > v1/main/general.json
