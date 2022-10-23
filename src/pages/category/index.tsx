import { Cards } from '../../components/Card'
import { Content } from '../app/styled'
import { ContainerPageCategory } from './styled'

export function Category() {
  return (
    <ContainerPageCategory>
      <h1 id="casa">Casa</h1>
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
      <h1 id="relogio">Relógio</h1>
      <a href="#category">Voltar para Categorias</a>
      <Content>
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
      </Content>
    </ContainerPageCategory>
  )
}
