import os
import sys

# Ensure pillow is installed
try:
    from PIL import Image
except ImportError:
    print("Pillow is not installed. Installing it now...")
    import subprocess
    try:
        subprocess.check_call([sys.executable, "-m", "pip", "install", "pillow"])
        from PIL import Image
    except Exception as e:
        print(f"Failed to install Pillow: {e}")
        print("Please install Pillow manually using 'pip install pillow'.")
        sys.exit(1)

# Paths
workspace_dir = r"c:\Users\keyru\source\repos\CivicSpan-IT-Group"
favicon_path = os.path.join(workspace_dir, "favicon.png")
logo_path = os.path.join(workspace_dir, "logo.webp")
infra_path = os.path.join(workspace_dir, "infrastructure.webp")

print("--- Image Optimization Process ---")

# Optimize Favicon
if os.path.exists(favicon_path):
    orig_size = os.path.getsize(favicon_path)
    print(f"Favicon found: {orig_size / 1024:.2f} KB")
    try:
        with Image.open(favicon_path) as img:
            print(f"Original dimension: {img.size}, format: {img.format}")
            # Resize favicon down to 48x48 pixels
            resized_img = img.resize((48, 48), Image.Resampling.LANCZOS)
            # Save optimized PNG
            resized_img.save(favicon_path, "PNG", optimize=True)
        new_size = os.path.getsize(favicon_path)
        reduction = (orig_size - new_size) / orig_size * 100
        print(f"Success! Optimized favicon size: {new_size / 1024:.2f} KB (Reduced by {reduction:.1f}%)")
    except Exception as e:
        print(f"Error optimizing favicon: {e}")
else:
    print("Favicon not found at path:", favicon_path)

# Optimize Logo
if os.path.exists(logo_path):
    orig_size = os.path.getsize(logo_path)
    print(f"Logo found: {orig_size / 1024:.2f} KB")
    try:
        with Image.open(logo_path) as img:
            print(f"Logo dimensions: {img.size}")
            # Compress WebP
            img.save(logo_path, "WEBP", quality=85, method=6)
        new_size = os.path.getsize(logo_path)
        reduction = (orig_size - new_size) / orig_size * 100
        print(f"Optimized logo size: {new_size / 1024:.2f} KB (Reduced by {reduction:.1f}%)")
    except Exception as e:
        print(f"Error optimizing logo: {e}")

# Optimize Infrastructure Background
if os.path.exists(infra_path):
    orig_size = os.path.getsize(infra_path)
    print(f"Infrastructure background found: {orig_size / 1024:.2f} KB")
    try:
        with Image.open(infra_path) as img:
            print(f"Infrastructure dimensions: {img.size}")
            # Compress WebP (slightly lower quality for large background images to optimize LCP)
            img.save(infra_path, "WEBP", quality=75, method=6)
        new_size = os.path.getsize(infra_path)
        reduction = (orig_size - new_size) / orig_size * 100
        print(f"Optimized infrastructure size: {new_size / 1024:.2f} KB (Reduced by {reduction:.1f}%)")
    except Exception as e:
        print(f"Error optimizing infrastructure image: {e}")

print("--- Optimization Completed ---")