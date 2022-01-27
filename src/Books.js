import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";

import './styles.css';

function Book({ data }) {
  return (
    <>
      <Card style={{minWidth:"500px", color:'#343a40'}}>
        <div className="row g-0">
          <div className="col-md-4">
            <CardImg
              alt="Card image cap"
              src={data.image_url}
              top
              width="100%"
            />
          </div>
          <div className="col-md-8">
          <CardBody>
            <CardTitle tag="h5">{data.title}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {data.author}
            </CardSubtitle>
            <CardText>"{data.description}"</CardText>
            <CardSubtitle>{data.publisher}</CardSubtitle>
            <Button className="info-button" href={data.website} target='_blank'>More Info</Button>
          </CardBody>
          </div>
        </div>
      </Card>
    </>
  );
}

export default Book;
