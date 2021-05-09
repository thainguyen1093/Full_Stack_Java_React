import React, {useState, useEffect} from 'react';

import {
  useParams
} from "react-router-dom";

import {Button, Col, Container, Form, FormGroup, Input, Label, Row} from "reactstrap";

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import {common as commonService} from "../../../general/services";
import Footer from "../Footer";
import Header from "../Header";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const PropertyUpdate = ({propertyViewState, doPropertyFindById, leavePage}) => {
  let {productId} = useParams();

  useEffect(() => {
    doPropertyFindById(productId);

    return leavePage;
  }, []);

  const {name, status, images} = propertyViewState;

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = images.map((image, index) => {
    return (
        <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={index}
        >
          <img src={commonService.imageService.buildDisplayUserProductImageURL(image)} alt={"image"}
               style={{width: "100%"}}/>
        </CarouselItem>
    );
  });

  return (
      <div>
        <Header/>
        <Container fluid={true}>
          <Row className="justify-content-center">
            <h1>View your property</h1>
          </Row>

          <Row>
            <Col xs="1"></Col>
            <Col xs="5">
              <Carousel
                  activeIndex={activeIndex}
                  next={next}
                  previous={previous}
              >
                <CarouselIndicators items={images} activeIndex={activeIndex} onClickHandler={goToIndex}/>
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous}/>
                <CarouselControl direction="next" directionText="Next" onClickHandler={next}/>
              </Carousel>
            </Col>
            <Col xs="5">
              <Form>
                <FormGroup row>
                  <Label md={2}>Name</Label>
                  <Label sm={8}>{name}</Label>
                </FormGroup>
                <FormGroup row>
                  <Label md={2}>status</Label>
                  <Label md={8}>{status}</Label>
                </FormGroup>
                <FormGroup row>
                  <Label md={2}><FontAwesomeIcon icon="bed" /></Label>
                  <Label md={8}>{0}</Label>
                </FormGroup>
              </Form>
            </Col>
            <Col xs="1"></Col>
          </Row>
        </Container>
        <Footer/>
      </div>
  )
}

export default PropertyUpdate;