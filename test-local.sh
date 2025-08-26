#!/bin/bash

echo "🧪 Testing static site locally..."
echo "📁 Serving files from ./out directory"
echo "🌐 Open: http://localhost:8000"
echo ""
echo "Test URLs:"
echo "  http://localhost:8000/en.html  (English)"
echo "  http://localhost:8000/es.html  (Español)" 
echo "  http://localhost:8000/pt.html  (Português)"
echo ""
echo "Press Ctrl+C to stop server"
echo ""

python3 -m http.server 8000 -d out