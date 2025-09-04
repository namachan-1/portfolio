import Image from 'next/image';
import imageData from '../../../../../public/data/images.json';

interface Image {
    id: number;
    src: string;
    alt: string;
}

const ImageGrid = () => {
  return (
    <div className="image-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-white rounded-xl shadow-lg p-6 gap-6">
      {imageData.map((image: Image) => (
        <Image
          key={image.id}
          src={image.src}
          alt={image.alt}
          width={400}
          height={300}
        />
      ))}
    </div>
  );
};

export default ImageGrid;