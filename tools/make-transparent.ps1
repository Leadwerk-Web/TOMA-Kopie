# Fast black->transparent via LockBits
Add-Type -AssemblyName System.Drawing

$assets = "c:\Users\haag_\Desktop\Github\TOMA\assets"
$bak = Join-Path $assets "_bak_blackbg"
if (-not (Test-Path $bak)) { New-Item -ItemType Directory -Path $bak | Out-Null }

$targets = @(
  "Doypack_hero.png",
  "Attribute-Doypack.png",
  "doypack-1.png",
  "Standbodenbeutel-Doypack-e1696408989978.png",
  "Logo_TOMA.png",
  "Logo_123pack.png",
  "Sillhouette_orange.png"
)

$threshold = 32
$feather = 45

foreach ($name in $targets) {
  $path = Join-Path $assets $name
  if (-not (Test-Path $path)) { Write-Output "MISSING $name"; continue }

  $src = New-Object System.Drawing.Bitmap $path
  $w = $src.Width; $h = $src.Height

  $c0 = $src.GetPixel(2, 2)
  $c1 = $src.GetPixel(($w - 3), 2)
  $c2 = $src.GetPixel(2, ($h - 3))
  $c3 = $src.GetPixel(($w - 3), ($h - 3))
  $dark = 0
  foreach ($c in @($c0,$c1,$c2,$c3)) {
    if ($c.R -lt 40 -and $c.G -lt 40 -and $c.B -lt 40) { $dark++ }
  }
  if ($dark -lt 3) {
    Write-Output "SKIP (no black corners): $name"
    $src.Dispose(); continue
  }

  Copy-Item $path (Join-Path $bak $name) -Force

  # Force 32bpp ARGB copy
  $bmp = New-Object System.Drawing.Bitmap $w, $h, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.DrawImage($src, 0, 0, $w, $h)
  $g.Dispose()
  $src.Dispose()

  $rect = New-Object System.Drawing.Rectangle 0, 0, $w, $h
  $data = $bmp.LockBits($rect, [System.Drawing.Imaging.ImageLockMode]::ReadWrite, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
  $stride = $data.Stride
  $bytes = [Math]::Abs($stride) * $h
  $buf = New-Object byte[] $bytes
  [System.Runtime.InteropServices.Marshal]::Copy($data.Scan0, $buf, 0, $bytes)

  for ($y = 0; $y -lt $h; $y++) {
    $row = $y * $stride
    for ($x = 0; $x -lt $w; $x++) {
      $i = $row + ($x * 4)
      $b = $buf[$i]; $gch = $buf[$i+1]; $r = $buf[$i+2]
      $max = $r; if ($gch -gt $max) { $max = $gch }; if ($b -gt $max) { $max = $b }
      if ($max -le $threshold) {
        $buf[$i] = 0; $buf[$i+1] = 0; $buf[$i+2] = 0; $buf[$i+3] = 0
      } elseif ($max -le ($threshold + $feather)) {
        $a = [int](255.0 * ($max - $threshold) / $feather)
        if ($a -lt 0) { $a = 0 }; if ($a -gt 255) { $a = 255 }
        $buf[$i+3] = [byte]$a
      }
      # else keep alpha 255
    }
  }

  [System.Runtime.InteropServices.Marshal]::Copy($buf, 0, $data.Scan0, $bytes)
  $bmp.UnlockBits($data)

  $tmp = Join-Path $assets ("_tmp_" + $name)
  $bmp.Save($tmp, [System.Drawing.Imaging.ImageFormat]::Png)
  $bmp.Dispose()
  Move-Item $tmp $path -Force
  Write-Output "OK $name (${w}x${h})"
}
Write-Output "ALL DONE"
