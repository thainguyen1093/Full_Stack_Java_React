import React, {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {
  Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button
} from 'reactstrap';

import {common as commonService} from "../../../general/services";


const HomeRecentProperties = ({recentProperties, doFindRecentProperties}) => {

  useEffect(() => {
    doFindRecentProperties();
  }, []);

  let content = recentProperties.slice(0, 3)
  .map((value, index) => {
    return (<Col md="4" key={index}>
      <Card className="shadow bg-white rounded">
        <CardImg top width="100%"
                 src={(value.productImageList && value.productImageList.length > 0) ? commonService.imageService.buildDisplayUserProductImageURL(value.productImageList[0].image) : undefined}
                 alt={value.name}/>
        <CardBody>
          <CardTitle
              tag="h5"><Link to={`/view/${value.id}`}>{value.name}</Link></CardTitle>
          <CardText>
            <FontAwesomeIcon icon="bed" />: 0
          </CardText>
        </CardBody>
      </Card>
    </Col>)
  })

  return (
      <Container>
        <Row><h1>Top Properties</h1></Row>
        <Row>
          {content}
        </Row>
      </Container>
  )
}

export default HomeRecentProperties;