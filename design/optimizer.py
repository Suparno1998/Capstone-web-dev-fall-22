from PIL import Image
import os

images = os.listdir('./original_images')
for image in images:
    old_path = os.path.join("original_images",image)
    new_path = os.path.join("optimized_images",image.split(".")[0]+".webp")
    print(new_path, old_path)
    im = Image.open(old_path).convert("RGB")
    im.save(new_path)
