import styles from '../src/styles/home.scss';

import Link from 'next/link';

const Home = () => {
  return(
    <div className="sections">
      <section className="presentation left">
        <div className="text">
          <h2>Quem sou eu?</h2>
          <p>
            Brasileiro, natural de São Paulo. 8 anos de experiência com desenvolvimento, já trabalhei com diferentes linguagens de programação, focando principalmente no desenvolvimento backend com PHP.
            Após cerca de 6 anos, resolvi me aventurar em outras linguagens. Foi nessa época que comecei a me aprofundar no Javascript, primeiro com nodejs no backend e mais tarde com alguns frameworks no frontend, como angular e (o que eu levo até hoje) React.
            Tenho uma longa experriencia tanto com ambientes corporativos como com trabalho Freelancer, afinal, venho praticando ambos nesses ultimos 8 anos.
          </p>
          <p className="more">
            <Link href="/sobre">Ver Mais -></Link>
          </p>
        </div>
        <div className="image">
          <div className="container"></div>
        </div>
      </section>
      <section className="portfolio center">
        <div className="image">
          <div className="container">
            <h2>Portfolio</h2>
          </div>
        </div>
        <div className="text">
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
          </p>
          <p className="more">
            <Link href="/sobre">Ver Mais -></Link>
          </p>
        </div>
      </section>
    </div>
  )
}

export default Home;