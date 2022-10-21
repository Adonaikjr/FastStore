import { Cards } from '../../components/Card'
import {
  ContainerApp,
  Section,
  Content,
  Box,
  ContainerNewButton,
} from './styled'
import imglogo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import { FcAdvertising } from 'react-icons/all'
import flyerbrasil from '../../assets/brasil.png'
export function App() {
  return (
    <ContainerApp>
      <Section>
        <Box>
          <span>Boas-Vindas ao Fast Store 👋</span>
          <h1>Descontos exclusivos de um jeito simples para nossos usuários</h1>
          <p>
            Somos uma loja parceira da AMAZON, MAGALU, SHOPEE, entre outros,
            aqui temos descontos especiais para nossos usuários do site. Clique
            <Link to="/"> aqui</Link> para conhecer mais.
          </p>
          <ContainerNewButton>
            <Button
              title={
                <a href="https://amzn.to/3F4RR8Q">Melhores Ofertas do dia</a>
              }
              icon={FcAdvertising}
            ></Button>
          </ContainerNewButton>
        </Box>
        <img src={imglogo} alt="fast pop store" />
      </Section>
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
          title="Depilação a LEASER de 600000IPL"
          text="Remoção permanente dos pelos 5niveis de potência"
          value="R$145,00"
          img={
            <img
              src="https://m.media-amazon.com/images/I/318AHO6J1fL._AC_.jpg"
              alt="seladora de alimentos"
            />
          }
          redirect={<a href="https://shope.ee/99nxwvc0NE">Conferir</a>}
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
<<<<<<< HEAD
        <Cards
          title=""
          text="Cozinha Untador Frigideira Óleo Confeiteiro"
          value="R$15,85"
          img={
            <img
              src="data:image/jpeg;base64,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"
              alt="seladora de alimentos"
            />
          }
          redirect={<a href="https://shope.ee/89vSKslRi4">Conferir</a>}
        />
        <Cards
          title="Camisetas do Brasil para a copa"
          text="Vista a Camisa e torça com o país"
          value="a partir R$30,00"
          img={<img src={flyerbrasil} alt="camisetas do brasil" />}
          redirect={<a href="https://shope.ee/4zyQjyFE6i">Conferir</a>}
=======
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
          redirect={<a href="https://shope.ee/8pB89UjJab?share_channel_code=2">Conferir</a>}
>>>>>>> 68be2ed4dc11861c55daa9ce6f32f5a30fe0af75
        />
      </Content>
    </ContainerApp>
  )
}
