import { Col,Button } from 'reactstrap';
import ComponentCard from '../../ComponentCard';
import Blog from '../Blog';
import jt from '../../../assets/images/tv_frame.png'

const OurVisitors = () => {
  

  return (
    <ComponentCard title="Flux Tv">
      <Col sm="12">
        <Blog
          image={jt}
        />
      </Col>
      <div className="border-top pt-3 mt-3 d-flex justify-content-center align-items-center gap-2">
        <Button type="submit" className="btn btn-success mr-2">
          Couper le Son
        </Button>
        <Button type="submit" className="btn btn-success mr-2">
          Remettre le Son
        </Button>
      </div>

    </ComponentCard>
  );
};

export default OurVisitors;
