import Head from 'next/head';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Market Cap Portfolio</title>
        <meta name="description" content="A stunning portfolio displaying Market Cap News and apps" />
      </Head>
      <Row className="my-5 text-center">
        <Col>
          <h1>Welcome to Market Cap Portfolio</h1>
          <p>Your one-stop destination for financial insights and apps.</p>
          <Link href="/portfolio" passHref>
            <button className="btn btn-primary">Explore Portfolio</button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
