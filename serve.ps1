# TOMA Static Server (HttpListener, parallel-fähig)
param([int]$Port = 8000)
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$Port/")
$listener.Start()
Write-Host "TOMA Server: http://localhost:$Port  (Strg+C beendet)"

$mime = @{
  ".html"="text/html; charset=utf-8"; ".css"="text/css; charset=utf-8"
  ".js"="application/javascript; charset=utf-8"; ".mjs"="application/javascript; charset=utf-8"
  ".json"="application/json"; ".svg"="image/svg+xml"
  ".png"="image/png"; ".jpg"="image/jpeg"; ".jpeg"="image/jpeg"; ".webp"="image/webp"
  ".ico"="image/x-icon"; ".woff2"="font/woff2"
}

while ($listener.IsListening) {
  $ctx = $listener.GetContext()
  $req = $ctx.Request; $res = $ctx.Response
  try {
    $urlPath = [Uri]::UnescapeDataString($req.Url.LocalPath)
    if ($urlPath -eq "/") { $urlPath = "/index.html" }
    $filePath = Join-Path $root ($urlPath.TrimStart("/").Replace("/", [IO.Path]::DirectorySeparatorChar))
    if (Test-Path $filePath -PathType Leaf) {
      $bytes = [IO.File]::ReadAllBytes($filePath)
      $ext = [IO.Path]::GetExtension($filePath).ToLower()
      $res.ContentType = if ($mime.ContainsKey($ext)) { $mime[$ext] } else { "application/octet-stream" }
      $res.ContentLength64 = $bytes.Length
      $res.StatusCode = 200
      $res.OutputStream.Write($bytes, 0, $bytes.Length)
    } else {
      $msg = [Text.Encoding]::UTF8.GetBytes("404 $urlPath")
      $res.StatusCode = 404
      $res.ContentType = "text/plain; charset=utf-8"
      $res.ContentLength64 = $msg.Length
      $res.OutputStream.Write($msg, 0, $msg.Length)
    }
  } catch {
    Write-Host "err: $_"
  } finally {
    $res.OutputStream.Close()
  }
}
