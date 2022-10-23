import { Content, Hight } from '../../../pages/app/styled'
import { Cards } from '../../Card'

export function CategoryAcessoriosDeModa() {
  return (
    <>
      <Hight>
        <h1>Acessórios de moda</h1>
      </Hight>
      <Content>
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
    </>
  )
}
