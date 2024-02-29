import { useState, useRef } from "react";
import { IoIosAttach } from "react-icons/io";

const ImageUploader: React.FC = () => {
	const [selectedImages, setSelectedImages] = useState<File[]>([]);
	const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
	const inputRef = useRef<HTMLInputElement>(null);

	const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const files = event.target.files;
		if (files) {
			const remainingSlots = 3 - selectedImages.length;
			const newImages = Array.from(files).slice(0, remainingSlots);
			setSelectedImages([...selectedImages, ...newImages]);

			if (selectedImages.length + newImages.length >= 3) {
				event.target.disabled = true;
			}
			if (selectedImages.length >= 2) {
				setIsButtonDisabled(true);
			}
		}
	};

	const handleRemoveImage = (index: number) => {
		const filteredImages = selectedImages.filter((_, i) => i !== index);
		setSelectedImages(filteredImages);
		setIsButtonDisabled(false);
	};

	const handleAttachImagesClick = () => {
		if (inputRef.current) {
			inputRef.current.value = "";
			inputRef.current.click();
		}
	};

	return (
		<div className="flex flex-row justify-between w-full p-2">
			<label htmlFor="image-upload" className="mx-2 mt-3">
				<input
					ref={inputRef}
					id="image-upload"
					type="file"
					accept="image/*"
					className="hidden"
					multiple
					onChange={handleImageChange}
					disabled={selectedImages.length >= 3}
				/>
				<button
					className={`bg-gray-400 hover:bg-gray-500 text-balck px-2 rounded ${
						isButtonDisabled && "cursor-not-allowed opacity-50"
					}`}
					disabled={isButtonDisabled}
					onClick={handleAttachImagesClick}
				>
					<div className="flex flex-row items-center">
						<IoIosAttach className="text-lg" />
						<div>Attach</div>
					</div>
				</button>
			</label>
			<div className="flex flex-row w-full space-x-4 mx-4">
				{selectedImages.map((image, index) => (
					<div key={index} className="relative h-12 w-12">
						<img
							src={URL.createObjectURL(image)}
							alt={`Preview ${index + 1}`}
							className="w-full h-full rounded-md"
						/>
						<button
							onClick={() => handleRemoveImage(index)}
							className="text-xs absolute -top-1 -right-1 bg-black bg-opacity-50 text-white rounded-full h-3 w-3 flex justify-center items-center"
						>
							X
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default ImageUploader;
