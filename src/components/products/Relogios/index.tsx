import { Content, Hight } from '../../../pages/app/styled'
import { Cards } from '../../Card'

export function CategoryRelogios() {
  return (
    <>
      <Hight>
        <h1>Relógios</h1>
      </Hight>
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
    </>
  )
}
