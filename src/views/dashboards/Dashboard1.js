import { Row, Col } from 'reactstrap';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';

import SalesOverview from '../../components/dashboard/dashboard1/SalesOverview';
import OurVisitors from '../../components/dashboard/dashboard1/OurVisitors';

const Dashboard1 = () => {
  return (
    <>
      <BreadCrumbs />
      <Row>
        <Col lg="5">
          <SalesOverview />
        </Col>
        <Col lg="7">
          <OurVisitors />
        </Col>
      </Row>
      
    </>
  );
};

export default Dashboard1;
