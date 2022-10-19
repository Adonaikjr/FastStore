import { Cards } from '../../components/Card'
import { ContainerApp, Section, Content, Banners, Background } from './styled'
import imglogo from '../../assets/logo.png'
import banner1 from '../../assets/bannerpessoais.jpg'
import banner2 from '../../assets/bannerpetsjpg.jpeg'
import banner3 from '../../assets/bannnertree.jpg'
import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import { FcAdvertising } from 'react-icons/all'
export function App() {
  return (
    <ContainerApp>
      <Section>
        <div>
          <article>
            <p>Boas-Vindas ao Fast Store 👋</p>
            <h1>
              Descontos exclusivos de um jeito simples para nossos
              <span> Usuários</span>
            </h1>
            <p>
              Somos uma loja parceira da AMAZON, MAGALU, SHOPEE, entre outros,
              aqui temos descontos especiais para nossos usuários do site.
              Clique
              <Link to="/"> aqui</Link> para conhecer mais.
            </p>
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
          </article>
        </div>
      </Section>
      <Background />
      <Banners>
        <div>
          <img src={banner1} alt="" />
        </div>
        <span></span>
        <div>
          <img src={banner2} alt="" />
        </div>
        <span></span>
        <div>
          <img src={banner3} alt="" />
        </div>
      </Banners>
<h1>Kendle</h1>
      <Content>

        <Cards
          title="Anne I. Pacote de 3 livros: Edição Especial"
          text="Kindle R$ 22,41"
          value="Capa comum R$ 36,00"
          img={
            <img
              src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B087XP9VXS&Format=_SL250_&ID=AsinImage&MarketPlace=BR&ServiceVersion=20070822&WS=1&tag=adonaikjr03-20&language=pt_BR"
              alt="product"
            />
          }
          redirect={<a href="https://amzn.to/3Dci43O">Conferir</a>}
        />
        <Cards
          title="Anne I. Pacote de 3 livros: Edição Especial"
          text="Kindle R$ 22,41"
          value="Capa comum R$ 36,00"
          img={
            <img
              src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B087XP9VXS&Format=_SL250_&ID=AsinImage&MarketPlace=BR&ServiceVersion=20070822&WS=1&tag=adonaikjr03-20&language=pt_BR"
              alt="product"
            />
          }
          redirect={<a href="https://amzn.to/3Dci43O">Conferir</a>}
        />
        <Cards
          title="Anne I. Pacote de 3 livros: Edição Especial"
          text="Kindle R$ 22,41"
          value="Capa comum R$ 36,00"
          img={
            <img
              src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B087XP9VXS&Format=_SL250_&ID=AsinImage&MarketPlace=BR&ServiceVersion=20070822&WS=1&tag=adonaikjr03-20&language=pt_BR"
              alt="product"
            />
          }
          redirect={<a href="https://amzn.to/3Dci43O">Conferir</a>}
        />
        <Cards
          title="Anne I. Pacote de 3 livros: Edição Especial"
          text="Kindle R$ 22,41"
          value="Capa comum R$ 36,00"
          img={
            <img
              src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B087XP9VXS&Format=_SL250_&ID=AsinImage&MarketPlace=BR&ServiceVersion=20070822&WS=1&tag=adonaikjr03-20&language=pt_BR"
              alt="product"
            />
          }
          redirect={<a href="https://amzn.to/3Dci43O">Conferir</a>}
        />
        <Cards
          title="Anne I. Pacote de 3 livros: Edição Especial"
          text="Kindle R$ 22,41"
          value="Capa comum R$ 36,00"
          img={
            <img
              src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B087XP9VXS&Format=_SL250_&ID=AsinImage&MarketPlace=BR&ServiceVersion=20070822&WS=1&tag=adonaikjr03-20&language=pt_BR"
              alt="product"
            />
          }
          redirect={<a href="https://amzn.to/3Dci43O">Conferir</a>}
        />
        <Cards
          title="Anne I. Pacote de 3 livros: Edição Especial"
          text="Kindle R$ 22,41"
          value="Capa comum R$ 36,00"
          img={
            <img
              src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B087XP9VXS&Format=_SL250_&ID=AsinImage&MarketPlace=BR&ServiceVersion=20070822&WS=1&tag=adonaikjr03-20&language=pt_BR"
              alt="product"
            />
          }
          redirect={<a href="https://amzn.to/3Dci43O">Conferir</a>}
        />
        <Cards
          title="Anne I. Pacote de 3 livros: Edição Especial"
          text="Kindle R$ 22,41"
          value="Capa comum R$ 36,00"
          img={
            <img
              src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B087XP9VXS&Format=_SL250_&ID=AsinImage&MarketPlace=BR&ServiceVersion=20070822&WS=1&tag=adonaikjr03-20&language=pt_BR"
              alt="product"
            />
          }
          redirect={<a href="https://amzn.to/3Dci43O">Conferir</a>}
        />
        <Cards
          title="Anne I. Pacote de 3 livros: Edição Especial"
          text="Kindle R$ 22,41"
          value="Capa comum R$ 36,00"
          img={
            <img
              src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B087XP9VXS&Format=_SL250_&ID=AsinImage&MarketPlace=BR&ServiceVersion=20070822&WS=1&tag=adonaikjr03-20&language=pt_BR"
              alt="product"
            />
          }
          redirect={<a href="https://amzn.to/3Dci43O">Conferir</a>}
        />
      </Content>
    </ContainerApp>
  )
}
