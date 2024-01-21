import React from 'react';
import { Card } from 'react-bootstrap';

const Content = ({ data }) => {
  return (
    <div>
      {data ? (
        <Card>
          <Card.Header>{data.location.name} Hava Durumu</Card.Header>
          <Card.Body>
            <p>Sıcaklık: {data.current.temp_c}</p>
            <p>Durum: {data.current.condition.text}</p>
            <p>Rüzgar Hızı: {data.current.wind_kph} km/h</p>
            <p>Rüzgar Yönü: {data.current.wind_dir}</p>
            <p>Nem Oranı: {data.current.humidity}%</p>
          </Card.Body>
        </Card>
      ) : (
        <Card>
          <Card.Header>{/* İlgili şehir bilgisi bulunamadıysa burada bir mesaj ekleyebilirsiniz. */}</Card.Header>
          <Card.Body>
            {data === null ? (
              <p>Şehir bilgisi bulunamadı.</p>
            ) : (
              <p>Lütfen bir şehir ismi girin.</p>
            )}
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default Content;
