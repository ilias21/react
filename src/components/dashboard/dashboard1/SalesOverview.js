import {
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';
import ComponentCard from '../../ComponentCard';
// import ComponentCard from '../../ComponentCard';

const SalesOverview = () => {
  
  return (
    <>
      {/*--------------------------------------------------------------------------------*/}
        {/* Horizontal Form                                                                */}
        {/*--------------------------------------------------------------------------------*/}
        <ComponentCard md="12" title="Paramètre du Salve" >            
            <FormGroup>
              <Row>
                <Label sm="7">Durée d&apos;acquisition :</Label>
                <Col sm="5">
                  <Input type="range" defaultValue="50" />
                </Col>
              </Row>
              <Row>
                <Label sm="7">Nombre de photos :</Label>
                <Col sm="5">
                  <Input type="range" defaultValue="50" />
                </Col>
              </Row>
              <Row>
                <Label sm="7">Seuil de prédiction PUB :</Label>
                <Col sm="5">
                  <Input type="range" defaultValue="50" />
                </Col>
              </Row>
              <Row>
                <Label sm="7">Seuil de prédiction NoPUB :</Label>
                <Col sm="5">
                  <Input type="range" defaultValue="50" />
                </Col>
              </Row>
            </FormGroup>
            <div className="border-top pt-3 mt-3 d-flex justify-content-center align-items-center gap-2">
                <Button type="submit" className="btn btn-success mr-2">
                  Appliquer
                </Button>
              </div>
        </ComponentCard>
        <ComponentCard md="12" title="Paramètre du Salve" className="bg-succes" >            
            <FormGroup>
              <Row>
                <Label sm="7">nombre de rapports :</Label>
                <Col sm="5">
                  <Input type="range" defaultValue="50" />
                </Col>
              </Row>
            </FormGroup>
            <div className="border-top pt-3 mt-3 d-flex justify-content-center align-items-center gap-2">
                <Button type="submit" className="btn btn-success mr-2">
                  Rapports
                </Button>
            </div>
        </ComponentCard>
    </>
  );
};

export default SalesOverview;
