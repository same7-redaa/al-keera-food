from PIL import Image
import os

def optimize():
    pattern_path = 'public/bg-pattern.png'
    with Image.open(pattern_path) as im:
        im_rgb = im.convert('RGB')
        w, h = 600, int(im.height * (600 / im.width))
        im_resized = im_rgb.resize((w, h), Image.Resampling.LANCZOS)
        im_resized.save('public/bg-pattern-opt.jpg', 'JPEG', quality=82, optimize=True)
    
    if os.path.exists('public/bg-pattern-opt.jpg'):
        os.replace('public/bg-pattern-opt.jpg', 'public/bg-pattern.png')
        print("Success! New size:", os.path.getsize('public/bg-pattern.png') / 1024, "KB")

if __name__ == '__main__':
    optimize()
