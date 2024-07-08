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
    <div>
      <img
        src={imageUrl}
        alt="Imagem do produto"
        className="w-[200px] h-[200px]"
      />
      <h1>{name}</h1>
      <h2>{category}</h2>
      <p>{price}</p>
      <p>{description}</p>
      <p>{quantityInStock}</p>
      <p>Código do produto: {id}</p>
    </div>
  );
};
