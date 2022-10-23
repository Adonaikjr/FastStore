import { Cards } from '../../components/Card'
import {
  ContainerApp,
  Section,
  Content,
  Box,
  ContainerNewButton,
  Hight,
} from './styled'
import imglogo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import { FcAdvertising, FaFire } from 'react-icons/all'
import flyerbrasil from '../../assets/brasil.png'
import imgPincel from '../../assets/pincelComida.jpeg'
import { ComponentCategory } from '../../components/Category'
export function App() {
  return (
    <ContainerApp>
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
        <img src={imglogo} alt="fast pop store" />
      </Section>

      <ComponentCategory />
      <Hight>
        <h1>
          Em Alta <FaFire />
        </h1>
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
          img={<img src={imgPincel} alt="seladora de alimentos" />}
          redirect={<a href="https://shope.ee/89vSKslRi4">Conferir</a>}
        />
        <Cards
          title="Camisetas do Brasil para a copa"
          text="Vista a Camisa e torça com o país"
          value="R$30,00"
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
          title="M3 Digital LED"
          text="Tamanho do Relógio = 1,5 cm x 4 cm"
          value="R$4,99"
          img={
            <img
              src="https://cf.shopee.com.br/file/265b50ace5ced47e7ccf62ad8e937884_tn"
              alt="relogio digital"
            />
          }
          redirect={<a href="https://shope.ee/6zjWvspwzh">Conferir</a>}
        />
        <Cards
          title="Conjunto relógio masculino"
          text="Acompanha corrente + cruz"
          value="R$39,99"
          img={
            <img
              src="https://cf.shopee.com.br/file/4fec4abfc28d5fc4111f96aee054fe53_tn"
              alt="relogio ouro fastpopstore"
            />
          }
          redirect={<a href="https://shope.ee/2AeHAnmndw">Conferir</a>}
        />
        <Cards
          title="Xiaomi M4 digital Unissex"
          text="A prova água Pulseira colorida Unissex"
          value="R$7,99"
          img={
            <img
              src="https://cf.shopee.com.br/file/1da1d919702609649be0d4476e1abd87_tn"
              alt="xiaomi m4 fastpopstore"
            />
          }
          redirect={<a href="https://shope.ee/6pQ6jJjuxk">Conferir</a>}
        />
        <Cards
          title="Lacoste Relógio Esportivo"
          text="Quartzo Simples"
          value="R$32,80"
          img={
            <img
              src="https://cf.shopee.com.br/file/0c8e189f5085aad04c79d0442cb20314_tn"
              alt="relogio lacoste lacostado"
            />
          }
          redirect={<a href="https://shope.ee/1q1Qm5Cxo8">Conferir</a>}
        />

        <Cards
          title="Máscara Descartável C/50 Unidades"
          text="Proteção Facial Tripla"
          value="R$5,49"
          img={
            <img
              src="https://cf.shopee.com.br/file/fc6e419d01af4fccf4428c194909b203_tn"
              alt="mascara descartavel"
            />
          }
          redirect={<a href="https://shope.ee/99o1m1ZCEw">Conferir</a>}
        />
        <Cards
          title="Lençou Descartavel"
          text="Papel Hospitalar Maca 70x50"
          value="R$10,00"
          img={
            <img
              src="https://cf.shopee.com.br/file/d643a4f99cffe74c8ab5e71d734f7162_tn"
              alt="lençou descartavel"
            />
          }
          redirect={<a href="https://shope.ee/7zc4PwMvLw">Conferir</a>}
        />
        <Cards
          title="Luva Látex Descartável"
          text="Caixa C/100 supermax"
          value="R$18,99"
          img={
            <img
              src="https://cf.shopee.com.br/file/14dc5fb8499a5847ac7b13efc54f296c_tn"
              alt="Luva latex"
            />
          }
          redirect={<a href="https://shope.ee/Zmt0Sa2q">Conferir</a>}
        />

        <Cards
          title="Kit Whey"
          text="Protein 500g, BCAA 4,5 100g, Power Creatine 100g, Coqueteleira"
          value="R$59,90"
          img={
            <img
              src="https://cf.shopee.com.br/file/2efc2c5cb46cefdbf221e024045b02b8_tn"
              alt="whey protein"
            />
          }
          redirect={<a href="https://shope.ee/7pIeCvavsP">Conferir</a>}
        />
        <Cards
          title="Kit 50 Xuxinha"
          text="Elástico de Cabelo"
          value="R$5,90"
          img={
            <img
              src="https://cf.shopee.com.br/file/d650a7ea4893a6276242226c0dcdb6c0_tn"
              alt="xuxinha Cabelo"
            />
          }
          redirect={<a href="https://shope.ee/9p3jRwmquX">Conferir</a>}
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
