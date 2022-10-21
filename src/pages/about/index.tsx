import shopee from '../../assets/shopee.png'
import amazon from '../../assets/amazon.png'
import { ContainerAbout, NewBox, NewSection } from './styled'

export function About() {
  return (
    <ContainerAbout>
      <NewSection>
        <NewBox>
          <span>Sobre Fast Store</span>
          <h3>
            Somos uma comunidade de preços baixos, descontos e promoções com
            foco no Brasil, onde os usuários buscam e compartilham as melhores
            ofertas.
          </h3>
        </NewBox>
        <a href="https://shope.ee/7KMLgP2q2r">
          <img src={shopee} alt="shopee" />
        </a>
        <a href="https://amzn.to/3TEPb5G">
          <img src={amazon} alt="amazon" />
        </a>
      </NewSection>
    </ContainerAbout>
  )
}
