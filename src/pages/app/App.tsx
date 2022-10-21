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

        <Cards
          title="Pincel Culinário Com Reservatório"
          text="Cozinha Untador Frigideira Óleo Confeiteiro"
          value="R$15,85"
          redirect={<a href="https://shope.ee/89vSKslRi4">Conferir</a>}
        />
        <Cards
          title="Camisetas do Brasil para a copa"
          text="Vista a Camisa e torça com o país"
          value="a partir R$30,00"
          img={<img src={flyerbrasil} alt="camisetas do brasil" />}
          redirect={<a href="https://shope.ee/4zyQjyFE6i">Conferir</a>}
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
    </ContainerApp>
  )
}
