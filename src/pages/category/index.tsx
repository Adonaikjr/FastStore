import { Cards } from '../../components/Card'
import { Content, Hight } from '../app/styled'
import { ContainerPageCategory, NewSectionCategory } from './styled'
import background from '../../assets/bannerpetsjpg.jpeg'
import backgroundsecond from '../../assets/bannerpessoais.jpg'
export function Category() {
  return (
    <ContainerPageCategory>
      <NewSectionCategory>
        <a href="https://www.amazon.com.br/b?ie=UTF8&node=18991136011&linkCode=sl2&tag=adonaikjr03-20&linkId=5ae9a38120d97528983a870b0477931b&language=pt_BR&ref_=as_li_ss_tl">
          <img src={background} alt="background" />
        </a>
        <a href="https://www.amazon.com.br/b?ie=UTF8&node=16215417011&linkCode=sl2&tag=adonaikjr03-20&linkId=cb28f9ba1838573bab44e11cee0e41f8&language=pt_BR&ref_=as_li_ss_tl">
          <img src={backgroundsecond} alt="background" />
        </a>
      </NewSectionCategory>
      <Hight>
        <h1>Categorias</h1>
      </Hight>
      <Content>
        <Cards
          title="Amaciador de carne em agulhas"
          text="Tamanho 19x5cm Material: Plástico e Metal"
          value="R$18,00"
          img={
            <img
              src="https://ae01.alicdn.com/kf/Se4a6536d7cac4a47acee4952bcbc61ca5/Amaciador-de-carne-faca-de-a-o-inoxid-vel-faca-de-carne-beaf-carne-amaciante-de.jpg_640x640.jpg"
              alt="amassador de carne"
            />
          }
          redirect={<a href="https://shope.ee/3AWkg3fVgw">Conferir</a>}
        />
        <Cards
          title="Mini seladora de embalagens"
          text="Perfeito para fechar embalagens"
          value="R$21,88"
          img={
            <img
              src="https://cf.shopee.com.br/file/208b5b999673cc173a59bbe26934188c"
              alt="seladora de alimentos"
            />
          }
          redirect={<a href="https://shope.ee/A9gV8N4Mdc">Conferir</a>}
        />
        <Cards
          title="Sabonete metálico aço inox"
          text="Tira Cheiro Anti-odor Casa Cozinha"
          value="R$23,50"
          img={
            <img
              src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07FYTCXVB&Format=_SL160_&ID=AsinImage&MarketPlace=BR&ServiceVersion=20070822&WS=1&tag=adonaikjr03-20&language=pt_BR"
              alt="seladora de alimentos"
            />
          }
          redirect={<a href="https://amzn.to/3gs9swU">Conferir</a>}
        />

        <Cards
          title="Chuveirinho Torneira Retrátil"
          text="Giratória 360° Há Prova De Respingo"
          value="R$4,83"
          img={
            <img
              src="https://lzd-img-global.slatic.net/g/p/50e05f5cbc7bf49100445872da2f72b2.jpg_360x360q75.jpg_.webp"
              alt="seladora de alimentos"
            />
          }
          redirect={
            <a href="https://shope.ee/8pB89UjJab?share_channel_code=2">
              Conferir
            </a>
          }
        />
      </Content>
    </ContainerPageCategory>
  )
}
