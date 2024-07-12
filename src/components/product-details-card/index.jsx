export const ProductDetailsCard = ({
  id,
  name,
  category,
  price,
  description,
  quantityInStock,
  imageUrl,
}) => {
  return (
    
    <div className="container mx-auto px-4 py-8 " >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex items-center justify-center">
          <img
            src={imageUrl}
            alt="Imagem do produto" 
            className="w-full lg:w-2/3 rounded-lg shadow-lg"
          />
              <div className="absolute top-0 left-0 bg-gray-800 bg-opacity-75 text-white py-1 px-2">
              <span className="text-base lg:text-lg font-semibold">{price}</span>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold mb-4">{name}</h1>
            <h2 className="text-xl text-gray-600 mb-4">{category}</h2>
            <p className="text-lg text-green-600 font-semibold mb-4">{price}</p>
            <p className="text-gray-700 mb-4">{description}</p>
            <p className="text-gray-700">Quantidade em estoque: {quantityInStock}</p>
            <button className="mt-8 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg">
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
      </div>
  );
};

