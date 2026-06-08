Add-Type -AssemblyName System.Drawing

$inDir = "docs\6b8a25b659c30b4fe0e506c807c9a0a9.ico"
$outDir = "assets\images\favicon"
if (!(Test-Path $outDir)) { New-Item -ItemType Directory -Path $outDir | Out-Null }

$files = Get-ChildItem -Path $inDir -Filter "*.png"

foreach ($file in $files) {
    try {
        $bmp = New-Object System.Drawing.Bitmap($file.FullName)
        $w = $bmp.Width
        $h = $bmp.Height
        $newBmp = New-Object System.Drawing.Bitmap($w, $h)
        $g = [System.Drawing.Graphics]::FromImage($newBmp)
        $g.Clear([System.Drawing.Color]::Transparent)
        $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        
        # Find bounds of non-white
        $minX=$w; $minY=$h; $maxX=0; $maxY=0
        for ($x=0; $x -lt $w; $x++) {
            for ($y=0; $y -lt $h; $y++) {
                $c = $bmp.GetPixel($x, $y)
                # Count very light pixels as background
                if ($c.R -lt 250 -or $c.G -lt 250 -or $c.B -lt 250) {
                    if ($x -lt $minX) { $minX = $x }
                    if ($y -lt $minY) { $minY = $y }
                    if ($x -gt $maxX) { $maxX = $x }
                    if ($y -gt $maxY) { $maxY = $y }
                }
            }
        }
        
        if ($maxX -gt $minX -and $maxY -gt $minY) {
            $srcW = $maxX - $minX + 1
            $srcH = $maxY - $minY + 1
            $srcRect = New-Object System.Drawing.Rectangle($minX, $minY, $srcW, $srcH)
            
            # Target 90% of bounding box
            $targetSize = [math]::Min($w, $h) * 0.95
            $scale = [math]::Min($targetSize / $srcW, $targetSize / $srcH)
            $newW = [int]($srcW * $scale)
            $newH = [int]($srcH * $scale)
            $destX = [int](($w - $newW) / 2)
            $destY = [int](($h - $newH) / 2)
            $destRect = New-Object System.Drawing.Rectangle($destX, $destY, $newW, $newH)
            
            $bmp.MakeTransparent([System.Drawing.Color]::White)
            $g.DrawImage($bmp, $destRect, $srcRect.X, $srcRect.Y, $srcRect.Width, $srcRect.Height, [System.Drawing.GraphicsUnit]::Pixel)
        } else {
            $bmp.MakeTransparent([System.Drawing.Color]::White)
            $g.DrawImage($bmp, 0, 0, $w, $h)
        }
        
        $g.Dispose()
        $bmp.Dispose()
        $newBmp.Save("$outDir\$($file.Name)", [System.Drawing.Imaging.ImageFormat]::Png)
        $newBmp.Dispose()
    } catch {
        Write-Host "Error processing $($file.Name): $($_.Exception.Message)"
    }
}
Copy-Item "$inDir\*.json" -Destination $outDir -Force
Copy-Item "$inDir\*.xml" -Destination $outDir -Force
Copy-Item "$inDir\*.ico" -Destination $outDir -Force
