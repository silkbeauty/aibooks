import os

def is_image_file(filename):
    # Define a function to check if a file is an image (based on extension)
    return filename.lower().endswith(('.png', '.jpg', '.jpeg', '.webp'))

def get_filenames_from_directory(directory):
    file_names = []
    for filename in os.listdir(directory):
        file_names.append(filename)
    return file_names

def save_filenames_to_tsx(directory, output_file):
    filenames = get_filenames_from_directory(directory)
    
    with open(output_file, 'w', encoding='utf-8') as file:
        file.write('export let fileListArray: string[] = [\n')
        for name in filenames:
            file.write(f"    '{name}',\n")
        file.write('];\n')

if __name__ == "__main__":

    base_pic_directory = './public/gallery/'
    base_output_directory = './src/components/Gallery/filelist_'

    # List all subdirectories in the gallery directory
    for gallery in os.listdir(base_pic_directory):
        pic_directory = os.path.join(base_pic_directory, gallery)
        
        # Check if it is a directory (to skip files)
        if os.path.isdir(pic_directory):
            output_file = f'{base_output_directory}{gallery}.tsx'
            save_filenames_to_tsx(pic_directory, output_file)