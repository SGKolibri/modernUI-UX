import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Encontre uma oferta de cartão melhor <br className="sm:block hidden" /> em poucos passos fáceis.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Navegue pelo nosso site e descubra as melhores ofertas de cartão para o seu negócio. Nossa plataforma é segura, confiável e projetada para ajudar você a crescer.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
