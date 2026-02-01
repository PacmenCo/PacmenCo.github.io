#!/bin/bash
cd "$(dirname "$0")"
echo "🚀 Starting local server for Idle Adventure homepage..."
echo "📂 Server running at: http://localhost:8000"
echo "🔗 Pets page: http://localhost:8000/pets-viewer.html"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""
python3 -m http.server 8000
