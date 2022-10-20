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

export function App() {
  return (
    <ContainerApp>
      <Section>
        <Box>
          <p>Boas-Vindas ao Fast Store 👋</p>
          <h1>
            Descontos exclusivos de um jeito simples para nossos
            <span> Usuários</span>
          </h1>
          <p>
            Somos uma loja parceira da AMAZON, MAGALU, SHOPEE, entre outros,
            aqui temos descontos especiais para nossos usuários do site. Clique
            <Link to="/"> aqui</Link> para conhecer mais.
          </p>
          <ContainerNewButton>
            <Button
              title={
                <a
                  href="https://amzn.to/3TypQKO"
                  target="_blank"
                  rel="noreferrer"
                >
                  Melhores Ofertas
                </a>
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
          redirect={
            <a
              href="https://shope.ee/3AWkg3fVgw"
              target="_blank"
              rel="noreferrer"
            >
              Conferir
            </a>
          }
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
          redirect={
            <a
              href="https://shope.ee/A9gV8N4Mdc"
              target="_blank"
              rel="noreferrer"
            >
              Conferir
            </a>
          }
        />

        <Cards
          title="Máquina de depilação a LEASER de 600000IPL"
          text="Remoção permanente dos pelos 5niveis de potência"
          value="R$145,00"
          img={
            <img
              src="https://m.media-amazon.com/images/I/318AHO6J1fL._AC_.jpg"
              alt="seladora de alimentos"
            />
          }
          redirect={
            <a
              href="https://shope.ee/99nxwvc0NE"
              target="_blank"
              rel="noreferrer"
            >
              Conferir
            </a>
          }
        />
      </Content>
    </ContainerApp>
  )
}
