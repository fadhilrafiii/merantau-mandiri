import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

interface Product {
  img: string | StaticImport;
  name: string;
}

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="rounded-[4px] flex flex-col h-full">
      <div className="px-11 py-9 bg-dark-grey flex-grow flex items-center justify-center">
        <Image
          src={product.img}
          alt={product.name}
          height={220}
          className="flex-grow max-h-[220px] object-contain"
        />
      </div>
      <div className="bg-med-grey text-white font-semibold p-4 text-center">
        {product.name}
      </div>
    </div>
  );
};

export default ProductCard;
