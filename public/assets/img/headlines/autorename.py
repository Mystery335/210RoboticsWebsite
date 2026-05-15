import os
from pathlib import Path

def rename_images(directory):

    image_extensions = {'.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp', '.svg'}

    files = sorted([f for f in os.listdir(directory) if os.path.isfile(os.path.join(directory, f))])

    image_files = [f for f in files if Path(f).suffix.lower() in image_extensions]

    if len(image_files) != len(files):
        print("Error: Not all files in the directory are images!")
        return

    for index, filename in enumerate(image_files, 1):
        old_path = os.path.join(directory, filename)
        new_path = os.path.join(directory, f'img{index}.jpg')
        os.rename(old_path, new_path)
        print(f"Renamed: {filename} -> img{index}.jpg")

if __name__ == "__main__":
    dir_path = input("Enter directory path: ")
    if os.path.isdir(dir_path):
        rename_images(dir_path)
    else:
        print("Invalid directory path!")