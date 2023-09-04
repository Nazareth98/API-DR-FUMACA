import React, { useEffect, useState } from "react";
import "./styles.scss";
import Footer from "../footer";
import imageTest from "../../assets/images/banner-principal.jpg";
import CustomTitle from "../shared/title";
import CustomSubtitle from "../shared/subtitle";
import CustomButton from "../shared/button";
import CustomSelect from "../shared/select";

const ProductDetails = (props) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const options = [{ name: "Mango Reiz" }];
  const productImages = [
    { id: 1, url: imageTest },
    { id: 2, url: imageTest },
    { id: 3, url: imageTest },
  ];

  const bannerStyle = {
    backgroundImage: `url(${productImages[selectedImage].url})`,
  };

  const handleImageChange = (index) => {
    setSelectedImage(index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <section className="productDetails-background">
        <div className="main-container productDetails-container">
          <div className="product-images-container">
            <div className="selected-image" style={bannerStyle}></div>
            <div className="thumbnail-images">
              {productImages.map((image, index) => (
                <div
                  key={index}
                  style={{ backgroundImage: `url(${image.url})` }}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => handleImageChange(index)}
                ></div>
              ))}
            </div>
          </div>
          <div className="product-info-container">
            <div>
              <span>Categoria do produto</span>
              <CustomTitle text="Nome do Produto" />
              <CustomSubtitle text="R$120,00" />
            </div>
            <div>
              <CustomSelect
                label="Selecione o sabor de preferência"
                options={options}
              />
            </div>
            <div className="quantity-container">
              <input type="number" name="" id="" value={0} />
              <CustomButton
                text="Adicionar ao carrinho"
                buttonType="main-button"
              />
            </div>
            <div>
              <CustomSubtitle text="Sobre o produto" />
              <p>
                lLoasddasmdsa m asdam lasmldamlsd mla dmsamsalddsamsad mm m
                mamsmas dmasndasndkjasnd andjadjasjd asjdhasji diasdiaidasidisah
                sa aisd asudasudisaj idij isjisa ijsdsjiah djiasdji asd
                aijdsajidh jiasdhasd jiasjdi asjd asjdasj djias{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ProductDetails;
