import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import PropTypes from 'prop-types';

const Blog = ({ image, title, subtitle, text }) => {
  return (
    <Card>
      <CardImg alt="Card image cap" src={image} />
      <CardBody className="p-4">
        <CardTitle tag="h5">{title}</CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
        <CardText className="mt-3">{text}</CardText>
      </CardBody>
    </Card>
  );
};

Blog.propTypes = {
  image: PropTypes.any,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  text: PropTypes.any,
};

export default Blog;
