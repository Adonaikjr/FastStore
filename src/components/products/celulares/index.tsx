import { Content, Hight } from '../../../pages/app/styled'
import { Cards } from '../../Card'

export function CategoryCelulares() {
  return (
    <>
      <Hight>
        <h1>Celulares e Dispositivos</h1>
      </Hight>
      <Content>
        <Cards
          title="Película 9D/3D Vidro Full Cover"
          text="Ultra proteção contra quedas, impactos e arranhões"
          value="R$1,20"
          img={
            <img
              src="https://cf.shopee.com.br/file/7df793579e29167ec37f0567b1215196_tn"
              alt="seladora de alimentos"
            />
          }
          redirect={<a href="https://shope.ee/6AAPXfzbNI">Conferir</a>}
        />
        <Cards
          title="Case Silicone Aveludo"
          text="iphone 11/11PRO/11PROMAX"
          value="R$9,99"
          img={
            <img
              src="https://cf.shopee.com.br/file/5ed3552f43b2be36ca0d7391dd005402_tn"
              alt="case iphone"
            />
          }
          redirect={<a href="https://shope.ee/8KEvd8ML20">Conferir</a>}
        />
        <Cards
          title="Protetor de Cabo"
          text="Enrolador aspiral de 2 peças"
          value="R$5,99"
          img={
            <img
              src="https://cf.shopee.com.br/file/d27055f0afdd95dde78b03d32280c434_tn"
              alt="protetor de cabo"
            />
          }
          redirect={<a href="https://shope.ee/6f6hecjbqS">Conferir</a>}
        />
        <Cards
          title="Ring Light Iluminador"
          text="Anel de luz 30cm 12 Polegadas Tripé 2,1m"
          value="R$59,99"
          img={
            <img
              src="https://cf.shopee.com.br/file/f8a0e8ed2d363c2f2bcae813db03be19_tn"
              alt="iluminador celular"
            />
          }
          redirect={<a href="https://shope.ee/6pQ7rPoWYa">Conferir</a>}
        />
      </Content>
    </>
  )
}
