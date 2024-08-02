#!/bin/sh

# Start Next.js application
yarn dev -p 4000 &

# Start Prism mock server
npx prism mock --host 0.0.0.0 swagger.yaml