Add-Type -AssemblyName System.Drawing

function Resize-Image($sourcePath, $maxWidth) {
    $img = [System.Drawing.Image]::FromFile($sourcePath)
    $origW = $img.Width
    $origH = $img.Height
    
    if ($origW -gt $maxWidth) {
        $newW = $maxWidth
        $newH = [int](($origH * $maxWidth) / $origW)
        
        $bmp = New-Object System.Drawing.Bitmap($newW, $newH)
        $g = [System.Drawing.Graphics]::FromImage($bmp)
        $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
        $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
        
        $g.DrawImage($img, 0, 0, $newW, $newH)
        $g.Dispose()
        $img.Dispose()
        
        $tempPath = $sourcePath + ".tmp.png"
        $bmp.Save($tempPath, [System.Drawing.Imaging.ImageFormat]::Png)
        $bmp.Dispose()
        
        Move-Item -Force $tempPath $sourcePath
        Write-Host "Optimized $sourcePath : $origW x $origH -> $newW x $newH"
    } else {
        $img.Dispose()
        Write-Host "Skipped $sourcePath ($origW px)"
    }
}

$publicDir = Join-Path $PSScriptRoot "..\public"
Resize-Image (Join-Path $publicDir "hero-dish.png") 750
Resize-Image (Join-Path $publicDir "hero-dish-2.png") 750
Resize-Image (Join-Path $publicDir "logo.png") 450
