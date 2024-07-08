export const ImageCard = ({ title }) => {
  return (
    <div className="max-w-[600px] mx-auto my-8 rounded-xl overflow-hidden shadow-lg">
      <div className="relative">
        <img
          src="https://img.freepik.com/premium-vector/3d-megaphone-speaker-icon-colored-vector-megaphone-icon_1120327-5.jpg"
          alt="anuncio"
          className="w-full"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white p-4">
          <div className="text-center">
            <h2 className="text-lg font-bold mb-2">
              Se você viu, o seu cliente também pode ver
            </h2>
            <p>Anuncie aqui</p>
          </div>
        </div>
      </div>
    </div>
  );
};