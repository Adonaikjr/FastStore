import shopee from '../../assets/shopee.png'
import amazon from '../../assets/amazon.png'
import { ContainerAbout, NewBox, NewSection } from './styled'
import { NewSectionCategory } from '../category/styled'
import background from '../../assets/bannerpetsjpg.jpeg'

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
      <NewSectionCategory>
        <a href="https://www.amazon.com.br/b?ie=UTF8&node=18991136011&linkCode=sl2&tag=adonaikjr03-20&linkId=5ae9a38120d97528983a870b0477931b&language=pt_BR&ref_=as_li_ss_tl">
          <img src={background} alt="background" />
        </a>
        <a href="https://www.amazon.com.br/b?ie=UTF8&node=16215417011&linkCode=sl2&tag=adonaikjr03-20&linkId=cb28f9ba1838573bab44e11cee0e41f8&language=pt_BR&ref_=as_li_ss_tl">
          <img src={background} alt="background" />
        </a>
      </NewSectionCategory>
    </ContainerAbout>
  )
}
