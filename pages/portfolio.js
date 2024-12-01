import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MarketCapNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNews = async () => {
    try {
      const response = await axios.get(
        'https://api.api-ninjas.com/v1/marketcapnews',
        { headers: { 'X-Api-Key': 'c4jQehe25CzBwvnCoU3VWQ==zGzk4BWEk2Lkoznw' } }
      );
      setNews(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching market cap news:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h2 className="text-center mb-4">Market Cap News</h2>
        </Col>
      </Row>
      {loading ? (
        <div className="text-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <Row>
          {news.map((item, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card style={{ height: '100%' }}>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.summary}</Card.Text>
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    Read More
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default MarketCapNews;
