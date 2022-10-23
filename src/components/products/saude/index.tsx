import { Content, Hight } from '../../../pages/app/styled'
import { Cards } from '../../Card'

export function CategorySaude() {
  return (
    <>
      <Hight>
        <h1>Saúde</h1>
      </Hight>
      <Content>
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
      </Content>
    </>
  )
}
