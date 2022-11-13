import { Cards } from '../../components/Card'
import {
  ContainerApp,
  Section,
  Content,
  Box,
  ContainerNewButton,
  Hight,
} from './styled'
import natal from '../../assets/natal.jpg'
import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import { FcAdvertising } from 'react-icons/all'
import { ComponentCategory } from '../../components/Category'

import logobrasil from '../../assets/brasil.png'

export function App() {
  return (
    <ContainerApp>
      <ComponentCategory />
      <Section>
        <Box>
          <span>Boas-Vindas ao Fast Store 👋</span>
          <h1>Descontos exclusivos de um jeito simples para nossos usuários</h1>
          <p>
            Somos uma loja parceira da AMAZON, SHOPEE, entre outros, aqui temos
            descontos especiais para nossos usuários do site. Clique
            <Link to="/about"> aqui</Link> para conhecer mais.
          </p>
          <ContainerNewButton>
            <Button
              title={<a href="https://amzn.to/3F4RR8Q">Ofertas do dia</a>}
              icon={FcAdvertising}
            ></Button>
          </ContainerNewButton>
        </Box>
        <img src={natal} alt="fast pop store" />
      </Section>
      <Hight>
        <h1>Melhores avaliados</h1>
      </Hight>
      <Content>
        <Cards
          title="Fio Fada Prata Cordão"
          text="Cores Natal 3m 30 Leds Pilha"
          value="R$6,99"
          img={
            <img
              src="https://cf.shopee.com.br/file/6868fd11eb0eeb01bdc2db5b69c413f4_tn"
              alt="natal"
            />
          }
          redirect={<a href=" https://shope.ee/1VP9VFtg9J">Conferir</a>}
        />
        <Cards
          title="Festão Verde Escuro"
          text="Enfeite Festão"
          value="R$6,99"
          img={
            <img
              src="https://cf.shopee.com.br/file/6b8185f011d9f6e8e9048dd82defa7a1_tn"
              alt="natal"
            />
          }
          redirect={<a href="https://shope.ee/2AeqHm8qVE">Conferir</a>}
        />
        <Cards
          title="Boneco de neve decoração"
          text="Enfeite de natal"
          value="R$5,98"
          img={
            <img
              src="https://cf.shopee.com.br/file/0fdc5d31b001325e1f3fe0fa74da6951_tn"
              alt="natal"
            />
          }
          redirect={<a href="https://shope.ee/LDC5LXp8S">Conferir</a>}
        />
        <Cards
          title="Camisetas brasil"
          text="Venha torcer com o páis"
          value="R$30,00"
          img={<img src={logobrasil} alt="Brasil" />}
          redirect={<a href=" https://shope.ee/4KiulNB0mf">Conferir</a>}
        />

        <Cards
          title="Maquina para cortar cabelo"
          text="Elétrico profissional"
          value="R$46,99"
          img={
            <img
              src="https://cf.shopee.com.br/file/83e72d752c263768d72a1e8bed73fc9e_tn"
              alt="maquina cortar cabelo"
            />
          }
          redirect={<a href="https://shope.ee/5Uuqimy1p3">Conferir</a>}
        />
        <Cards
          title="Calça Pantalona Feminina"
          text="Cintura com cordão forrado"
          value="R$39,99"
          img={
            <img
              src="https://cf.shopee.com.br/file/7decbaaedd1efad9ef4cda018882b2e4_tn"
              alt="calça feminina"
            />
          }
          redirect={<a href="https://shope.ee/6UnNvFaY6L">Conferir</a>}
        />
        <Cards
          title="Óculos de Sol"
          text="Armação Quadrada Vintage"
          value="R$5,90"
          img={
            <img
              src="https://cf.shopee.com.br/file/3619ca046057c02cb17c5c5ce97e32f4_tn"
              alt="oculos vintage"
            />
          }
          redirect={<a href="https://shope.ee/5zr0t1tXV3">Conferir</a>}
        />
        <Cards
          title="Bandana Lenço Unissex"
          text="Brasil Copa 2022"
          value="R$2,50"
          img={
            <img
              src="https://cf.shopee.com.br/file/7020c4df0aac796251b1b89691b76f34_tn"
              alt="bandana copa brasil 2022"
            />
          }
          redirect={<a href="https://shope.ee/2KxiWTl3Gy">Conferir</a>}
        />

        <Cards
          title="Chapéu Bucket Copa do Mundo"
          text="Bucket Copa do mundo simbolo CBF"
          value="R$13,50"
          img={
            <img
              src="https://cf.shopee.com.br/file/9816d433136bd1c4bc51bef2d81ca89e_tn"
              alt="bucket copa 2022"
            />
          }
          redirect={<a href="https://shope.ee/7pIf5FMkcr">Conferir</a>}
        />
      </Content>
    </ContainerApp>
  )
}
